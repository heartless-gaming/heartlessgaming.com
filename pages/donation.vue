<template>
  <main class="bg-gray-900 flow-root">
    <div class="mb-12 max-w-2xl mx-auto">
      <form id="payment-form" class="rounded p-3 sm:p-10">
        <div class="flex items-center sm:items-start mb-2 sm:mb-5">
          <div class="flex flex-wrap flex-1 sm:justify-between">
            <button class="amount-pill amount-pill--selected hover:ring-4">
              5 €
            </button>
            <button class="amount-pill hover:ring-2">10 €</button>
            <button class="amount-pill hover:ring-2">15 €</button>
            <button class="amount-pill hover:ring-2">20 €</button>
            <button class="amount-pill hover:ring-2">50 €</button>
          </div>
          <div>
            <div class="relative">
              <input type="text" :value="amount" class="amount-custom" />
              <p class="absolute text-3xl text-gray-200 right-0 top-0.5">€</p>
            </div>
            <p class="text-gray-300">Minimum: 3€</p>
          </div>
        </div>
        <div class="relative">
          <input
            id="email"
            type="text"
            placeholder="Adresse email"
            class="mb-5 py-3 pl-11 pr-3 rounded w-full text-gray-900 placeholder-black shadow-lg"
          />
          <svg-mail
            class="w-5 absolute top-4 left-3 fill-current text-gray-300"
          />
        </div>
        <div id="card-element" class="rounded-t bg-white p-3"></div>
        <button
          id="submit"
          class="w-full bg-hlsred rounded-b p-3 text-white font-bold shadow-lg hover:bg-hlsred-dark disabled:opacity-50 transition-all duration-200"
          :disabled="isSubmitDisable"
        >
          <div id="spinner" class="spinner hidden"></div>
          <span id="button-text">Donner {{ amount }}€</span>
        </button>
        <p id="card-error" role="alert">{{ cardErrorMsg }}</p>
        <p class="js-resultMessage hidden text-white">
          Payment succeeded, see the result in your
          <a class="text-white font-bold underline" href="" target="_blank">
            Stripe dashboard.</a
          >
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  </main>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/pure'
import SvgMail from '~/assets/mail.svg?inline'

export default {
  components: {
    SvgMail,
  },
  beforeRouteLeave(to) {
    // Force an HTTP request instead of a JavaScript route change because we need
    // a new page load that does *not* import Stripe.
    window.location.replace(to.path)
  },
  data: () => ({
    title: 'Donation',
    isSubmitDisable: true,
    amount: 5,
    cardErrorMsg: '',
  }),
  head() {
    return {
      title: 'Donation',
      titleTemplate: '%s - Heartless Gaming',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Aider les Heartless en faisant une donation pontuel.',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/donation',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Donation - Heartless Gaming`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Aider les Heartless en faisant une donation pontuel.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heartlessgaming.com/icon.png',
        },
      ],
    }
  },
  async mounted() {
    // mtlynch.io/stripe-recording-its-customers
    loadStripe.setLoadParameters({ advancedFraudSignals: false })
    const stripe = await loadStripe(this.$nuxt.context.$config.publishableKey)

    fetch(`${this.$nuxt.context.$config.baseURL}/api/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.amount),
    })
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        const elements = stripe.elements()
        const style = {
          base: {
            color: '#1a202c',
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
              color: '#1a202c',
            },
          },
          invalid: {
            fontFamily: 'Arial, sans-serif',
            color: '#fa755a',
            iconColor: '#fa755a',
          },
        }

        const card = elements.create('card', { style })
        // Stripe injects an iframe into the DOM
        card.mount('#card-element')

        card.on('change', (event) => {
          // Disable the Pay button if there are no card details in the Element
          this.isSubmitDisable = event.empty
          this.cardErrorMsg = event.error ? event.error.message : ''
        })

        const form = document.getElementById('payment-form')
        form.addEventListener('submit', (event) => {
          event.preventDefault()
          // Complete payment when the submit button is clicked
          payWithCard(stripe, card, data.clientSecret)
        })
      })

    // Calls stripe.confirmCardPayment
    // If the card requires authentication Stripe shows a pop-up modal to
    // prompt the user to enter authentication details without leaving your page
    const payWithCard = (stripe, card, clientSecret) => {
      loading(true)
      stripe
        .confirmCardPayment(clientSecret, {
          receipt_email: document.getElementById('email').value,
          payment_method: { card },
        })
        .then((result) => {
          if (result.error) {
            // Show error to your customer
            showError(result.error.message)
          } else {
            // The payment succeeded!
            orderComplete(result.paymentIntent.id)
          }
        })
    }

    /* ------- UI helpers ------- */

    // Shows a success message when the payment is complete
    const orderComplete = (paymentIntentId) => {
      loading(false)
      document
        .querySelector('.js-resultMessage a')
        .setAttribute(
          'href',
          `https://dashboard.stripe.com/test/payments/${paymentIntentId}`
        )
      document.querySelector('.js-resultMessage').classList.remove('hidden')
      this.isSubmitDisable = true
    }

    // Show the customer the error from Stripe if their card fails to charge
    const showError = (errorMsgText) => {
      loading(false)
      const errorMsg = document.querySelector('#card-error')
      errorMsg.textContent = errorMsgText
      setTimeout(() => {
        errorMsg.textContent = ''
      }, 4000)
    }

    // Show a spinner on payment submission
    const loading = (isLoading) => {
      if (isLoading) {
        // Disable the button and show a spinner
        this.isSubmitDisable = true
        document.querySelector('#spinner').classList.remove('hidden')
        document.querySelector('#button-text').classList.add('hidden')
      } else {
        this.isSubmitDisable = false
        document.querySelector('#spinner').classList.add('hidden')
        document.querySelector('#button-text').classList.remove('hidden')
      }
    }
  },
}
</script>

<style lang="scss">
.amount-pill {
  @apply inline-block mr-3 mb-3 px-5 sm:mb-0 sm:px-6 py-2 rounded-full bg-hlsred text-gray-200 font-bold shadow-lg hover:bg-hlsred-dark ring-hlsred-dark ring-offset-0 ring-offset-hlsred-dark transition-all duration-200;

  &--selected {
    @apply ring-4 ring-hlsred-light ring-offset-4 ring-offset-gray-900;
  }
}

.amount-custom {
  @apply w-24 pr-5 pb-1 text-center bg-transparent border-b-2 border-solid border-hlsred text-3xl text-gray-200;
}

/*.result-message {
  line-height: 22px;
  font-size: 16px;
}*/

/*.result-message a {
  color: rgb(89, 111, 214);
  font-weight: 600;
  text-decoration: none;
}*/

#card-error {
  color: rgb(105, 115, 134);
  text-align: left;
  font-size: 13px;
  line-height: 17px;
  margin-top: 12px;
}

#payment-request-button {
  margin-bottom: 32px;
}

/* spinner/processing state, errors */
.spinner,
.spinner::before,
.spinner::after {
  border-radius: 50%;
}

.spinner {
  color: #fff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0 auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

.spinner::before,
.spinner::after {
  position: absolute;
  content: '';
}

.spinner::before {
  width: 10.4px;
  height: 20.4px;
  background: #cc1b00;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
}

.spinner::after {
  width: 10.4px;
  height: 10.2px;
  background: #cc1b00;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0 10.2px;
  transform-origin: 0 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
