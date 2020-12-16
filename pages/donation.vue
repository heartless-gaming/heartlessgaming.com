<template>
  <main class="bg-gray-900 flow-root overflow-hidden">
    <section class="relative max-w-2xl mx-auto mt-3 px-3 sm:px-10 sm:pt-10">
      <div class="realtive z-10 flex items-center sm:items-start mb-2 sm:mb-5">
        <div class="flex flex-wrap flex-1 sm:justify-between">
          <button
            v-for="(btn, index) in amountButtons"
            :key="index"
            :class="{ 'amount-pill--selected': index == amountBtnIndex }"
            class="amount-pill hover:ring-4 focus:ring-4 focus:outline-none"
            @click.prevent="setAmount(index, btn.amount)"
          >
            {{ btn.amount }} €
          </button>
        </div>
        <div>
          <div class="relative">
            <currency-input
              v-model="amount"
              class="pt-2 amount-custom"
              @focus="amountBtnIndex = -1"
            />
            <p class="absolute text-xl text-gray-200 right-0 top-2">€</p>
          </div>
          <p class="text-gray-300">Minimum: 3€</p>
        </div>
      </div>
      <div class="relative">
        <input
          id="email"
          v-model="email"
          type="email"
          maxlength="42"
          placeholder="Adresse email si vous souhaitez un reçu"
          class="mb-5 py-3 pl-11 pr-3 rounded w-full text-gray-900 placeholder-black thicc-shadow"
        />
        <svg-mail
          class="w-5 absolute top-4 left-3 fill-current text-gray-300"
        />
      </div>
      <div id="card-element" class="rounded-t bg-white p-3 h-11"></div>
      <button
        id="submit"
        class="w-full mb-3 p-3 bg-hlsred rounded-b text-white font-bold thicc-shadow hover:bg-hlsred-dark disabled:opacity-50 transition-all duration-200"
        :disabled="isSubmitDisable"
        @click="donate()"
      >
        <div
          id="spinner"
          :class="{ hidden: !isSpinnerVisible }"
          class="spinner"
        ></div>
        <p id="button-text" :class="{ hidden: isSpinnerVisible }">
          Donner {{ amount }}€
        </p>
      </button>
      <p id="card-error" class="text-gray-200" role="alert">
        {{ cardErrorMsg }}
      </p>
      <p class="js-resultMessage hidden text-white">
        Payment succeeded, see the result in your
        <a class="text-white font-bold underline" href="" target="_blank">
          Stripe dashboard.
        </a>
        Refresh the page to pay again.
      </p>
    </section>
    <div class="h-24 my-8 relative overflow-hidden money-man-donation"></div>
    <section class="mb-24 max-w-2xl mx-auto px-3 sm:px-10 text-gray-200">
      <h2 class="mb-3 text-3xl js-animateEntrence">Données & Vie privée</h2>
      <p class="mb-3">
        Cette page et uniquement cette page utilise de
        <strong>2 à 5 cookies</strong> "nécessaires" pour le fonctionnement de
        <a class="underline hover:text-gray-300" href="https://stripe.com/fr/">
          Stripe.
        </a>
      </p>
      <p class="mb-3">
        <a
          class="underline hover:text-gray-300"
          href="https://stripe.com/fr/privacy#translation"
        >
          Politique de confidentialité de Stripe
        </a>
      </p>
      <p class="mb-3">
        Les informations de votre carte de paiement (date d'expiration, code
        CVC...) sont envoyés à Stripe et ne sont jamais envoyé au serveur
        Heartless Gaming attaché à ce site web.
      </p>
      <p class="mb-3">
        Heartless Gaming vous recommande d'utiliser
        <a
          class="underline hover:text-gray-300"
          href="https://addons.mozilla.org/fr/firefox/addon/ublock-origin/"
        >
          Ublock Origin
        </a>
        &
        <a
          class="underline hover:text-gray-300"
          href="https://addons.mozilla.org/fr/firefox/addon/privacy-badger17/"
        >
          Privacy Badger
        </a>
        sur cette page (ainsi que sur le reste de votre navigation web), pour
        garder le contrôle sur le code chargé par la librairie Stripe sur cette
        page.
      </p>
      <p class="mb-3">
        Quand vous quittez cette page, un rechargement complet est effectué pour
        décharger tous les codes et cookies Stripe précédemment injecté dans
        cette page.
      </p>
      <p class="mb-3">
        L'email est envoyé à Stripe pour vous transmettre un reçu. Il n'est pas
        utilisé par Heartless Gaming.
      </p>
      <p class="mb-3">
        <a
          class="underline hover:text-gray-300"
          href="https://github.com/heartless-gaming/heartlessgaming.com/blob/master/pages/donation.vue"
        >
          Voir le code de cette page
        </a>
      </p>
      <p>
        <a
          class="underline hover:text-gray-300"
          href="https://github.com/heartless-gaming/heartlessgaming.com/blob/master/api/stripe.js"
        >
          Voir le code d'intention de paiement créer par serveur
        </a>
      </p>
    </section>
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
    isSpinnerVisible: true,
    amount: 5,
    amountTxt: '5.00',
    email: '',
    cardErrorMsg: '',
    errorMsgText: '',
    amountBtnIndex: 0,
    amountButtons: [
      { amount: 5 },
      { amount: 10 },
      { amount: 15 },
      { amount: 20 },
      { amount: 50 },
    ],
    stripe: undefined,
    card: undefined,
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
    this.stripe = await loadStripe(this.$nuxt.context.$config.publishableKey)

    const elements = this.stripe.elements()
    const cardInputStyle = {
      base: {
        color: '#6b7280',
        fontFamily: 'Rubik, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#6b7280',
        },
      },
      invalid: {
        fontFamily: 'Rubik, sans-serif',
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    }

    // Stripe injects an iframe into the DOM
    this.card = elements.create('card', { style: cardInputStyle })
    this.card.mount('#card-element')
    this.isSpinnerVisible = false

    this.card.on('change', (event) => {
      // Disable the Pay button if there are no card details in the Element
      this.isSubmitDisable = event.empty
      this.cardErrorMsg = event.error ? event.error.message : ''
    })
  },
  methods: {
    // Ask the server to create a payment intent & complete the payment
    async donate() {
      const baseURL = this.$nuxt.context.$config.baseURL
      const paymentIntentEndpoint = `${baseURL}/api/create-payment-intent`
      const paymentIntentOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: this.amount }),
      }
      const fetchPaymentIntent = await fetch(
        paymentIntentEndpoint,
        paymentIntentOptions
      )
      const jsonPaymentIntent = await fetchPaymentIntent.json()

      this.payWithCard(this.stripe, this.card, jsonPaymentIntent.clientSecret)
    },
    // Calls stripe.confirmCardPayment
    // If the card requires authentication Stripe shows a pop-up modal to
    // prompt the user to enter authentication details without leaving your page
    payWithCard(stripe, card, clientSecret) {
      this.loading(true)
      stripe
        .confirmCardPayment(clientSecret, {
          receipt_email: this.email,
          payment_method: { card },
        })
        .then((result) => {
          if (result.error) {
            // Show error to your customer
            this.showError(result.error.message)
          } else {
            // The payment succeeded!
            this.orderComplete(result.paymentIntent.id)
          }
        })
    },
    // Shows a success message when the payment is complete
    orderComplete(paymentIntentId) {
      this.loading(false)
      document
        .querySelector('.js-resultMessage a')
        .setAttribute(
          'href',
          `https://dashboard.stripe.com/test/payments/${paymentIntentId}`
        )
      document.querySelector('.js-resultMessage').classList.remove('hidden')
      // Disable other payments if this one successful
      this.isSubmitDisable = true
    },
    // Show a spinner on payment submission
    loading(isLoading) {
      if (isLoading) {
        // Disable the button and show a spinner
        this.isSubmitDisable = true
        this.isSpinnerVisible = true
      } else {
        this.isSubmitDisable = false
        this.isSpinnerVisible = false
      }
    },
    // Show the customer the error from Stripe if their card fails to charge
    showError(errorMsgText) {
      this.loading(false)
      this.errorMsgText = errorMsgText
      // Reset/hide the message after 4 seconds
      setTimeout(() => {
        this.errorMsgText = ''
      }, 4000)
    },
    // Set amount when button is clicked or manually entered
    setAmount(index, amount) {
      this.amountBtnIndex = index
      this.amount = amount
      this.amountTxt = `${amount}.00`
    },
  },
}
</script>

<style lang="scss">
.money-man-donation {
  background-image: url('~@/assets/donation.svg');
  background-repeat: no-repeat;
  animation: moneymandonation 14s ease infinite;
}

@keyframes moneymandonation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-20%);
  }
}

.amount-pill {
  @apply inline-block mr-3 mb-5 sm:mb-0 px-4 sm:px-6 py-2 rounded-full bg-hlsred text-gray-200 font-bold hover:bg-hlsred-dark ring-hlsred-dark ring-offset-0 ring-offset-hlsred-dark transition-all duration-200;

  &--selected {
    @apply ring-4 ring-hlsred-light ring-offset-4 ring-offset-gray-900;
  }
}

.amount-custom {
  @apply w-24 pr-4 pb-1 text-center bg-transparent border-b-2 border-solid border-hlsred text-xl text-gray-200;
}

#payment-request-button {
  margin-bottom: 32px;
}

// spinner/processing state, errors
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
  box-shadow: inset 0 0 0 3px;
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

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
