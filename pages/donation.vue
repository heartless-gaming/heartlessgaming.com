<template>
  <div class="bg-gray-900">
    <header
      class="mb-12 pt-16 sm:pt-12 pb-12 pr-2 pl-2 gray-gradient border-b-3 border-solid border-hlsred header-box-shadow"
    >
      <main-nav />
      <div class="">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
        <h1
          class="mt-12 text-center text-4xl text-gray-200 zoomIn main-title-text-shadow soundboard-letter-spacing uppercase"
        >
          {{ title }}
        </h1>
      </div>
    </header>
    <main>
      <div class="mb-12 max-w-2xl mx-auto">
        <form id="payment-form" action="/charge" method="post">
          <div class="form-row">
            <label for="card-element">Credit or debit card</label>
            <div id="card-element">
              <!-- A Stripe Element will be inserted here. -->
            </div>

            <!-- Used to display form errors. -->
            <div id="card-errors" role="alert"></div>
          </div>

          <button>Submit Payment</button>
        </form>
      </div>
    </main>
    <footer class="bg-gray-800 flow-root">
      <social-networks />
      <div class="max-w-2xl mx-auto px-2 mb-10 sm:flex">
        <quotes />
        <credits />
      </div>
      <mentra />
    </footer>
  </div>
</template>

<script>
import MainNav from '~/components/MainNav.vue'
import Logo from '~/components/Logo.vue'
import Credits from '~/components/Credits.vue'
import Quotes from '~/components/Quotes.vue'
import Mentra from '~/components/Mentra.vue'

export default {
  components: {
    MainNav,
    Logo,
    Credits,
    Quotes,
    Mentra,
  },
  data: () => ({
    title: 'Donation',
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
  mounted() {
    const elements = this.$stripe.elements()
    const style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    }
    const card = elements.create('card', { style })

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount('#card-element')

    // Handle real-time validation errors from the card Element.
    card.on('change', (event) => {
      const displayError = document.getElementById('card-errors')
      if (event.error) {
        displayError.textContent = event.error.message
      } else {
        displayError.textContent = ''
      }
    })

    // Submit the form with the token ID.
    const stripeTokenHandler = (token) => {
      // Insert the token ID into the form so it gets submitted to the server
      const form = document.getElementById('payment-form')
      const hiddenInput = document.createElement('input')
      hiddenInput.setAttribute('type', 'hidden')
      hiddenInput.setAttribute('name', 'stripeToken')
      hiddenInput.setAttribute('value', token.id)
      form.appendChild(hiddenInput)

      // Submit the form
      form.submit()
    }

    // Handle form submission.
    const form = document.getElementById('payment-form')
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      this.$stripe.createToken(card).then((result) => {
        if (result.error) {
          // Inform the user if there was an error.
          const errorElement = document.getElementById('card-errors')
          errorElement.textContent = result.error.message
        } else {
          // Send the token to your server.
          stripeTokenHandler(result.token)
        }
      })
    })
  },
}
</script>

<style>
.StripeElement {
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.gray-gradient {
  background-image: radial-gradient(
    circle farthest-corner at 0% -40%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 65, 1) 75%
  );
}

.header-box-shadow {
  box-shadow: 0 17px 15px -8px rgba(0, 0, 0, 0.4);
}

.soundboard-letter-spacing {
  letter-spacing: 0.5rem;
}
</style>
