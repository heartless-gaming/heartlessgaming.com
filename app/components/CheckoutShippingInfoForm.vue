<script setup lang="ts">
import { email, exactLength, required } from '@regle/rules'

const checkoutStore = useCheckoutStore()
const { isContactFormValid } = storeToRefs(checkoutStore)

const size = 'lg'
const formData = useCheckoutUserFormData()

const requiredMessage = withMessage(required, 'Ce champ est obligatoire')
const formRules = {
  firstName: { required: requiredMessage },
  lastName: { required: requiredMessage },
  address: { required: requiredMessage },
  postalCode: { required: requiredMessage, exactLength: exactLength(5) },
  city: { required: requiredMessage },
  country: { required: requiredMessage },
  email: {
    required: requiredMessage,
    email: withMessage(email, 'Cette adresse e-mail n\'est pas valide'),
  },
}

const { r$ } = useRegle(formData, formRules)

// make those field dirty to make sure r$.$correct works for form validation
r$.country.$touch()
r$.phone.$touch()
</script>

<template>
  <form
    class="
      grid gap-x-4 gap-y-4
      sm:grid-cols-4
    "
    @submit.prevent="isContactFormValid = true"
  >
    <Input
      v-model="r$.$value.firstName"
      :size
      class="sm:col-span-2"
      label="Prénom"
      placeholder="Gordon"
      :errors="r$.$errors.firstName"
    />
    <Input
      v-model="r$.$value.lastName"
      :size
      class="sm:col-span-2"
      label="Nom"
      placeholder="Freeman"
      :errors="r$.$errors.lastName"
    />
    <Input
      v-model="r$.$value.address"
      :size
      class="sm:col-span-full"
      label="Adresse (numéro et nom de la rue) "
      placeholder="42 rue de la déchance du skill"
      :errors="r$.$errors.address"
    />
    <Input
      v-model="r$.$value.postalCode"
      :size
      label="Code postal"
      placeholder="42666"
      :errors="r$.$errors.postalCode"
    />
    <Input
      v-model="r$.$value.city"
      :size
      class="sm:col-span-2"
      label="Ville"
      placeholder="Beton-Bazoches"
      :errors="r$.$errors.city"
    />
    <Input
      v-model="r$.$value.country"
      :size
      label="Pays"
      :errors="r$.$errors.country"
      disabled
    />
    <Input
      v-model="r$.$value.email"
      :size
      class="sm:col-span-2"
      type="email"
      label="Email"
      placeholder="gordon@blackmesa.com"
      :errors="r$.$errors.email"
    />
    <Input
      v-model="r$.$value.phone"
      :size
      type="tel"
      class="sm:col-span-2"
      label="Numéro de téléphone (optionnel)"
      placeholder="06 66 42 42 42"
    />
    <div class="sm:col-span-full">
      <button class="btn animate-bounce btn-info">
        magic dev button that let you pass anyway ¯\_(ツ)_/¯
      </button>
      <button
        class="
          btn btn-block btn-success
          sm:btn-wide
        "
        :disabled="!r$.$correct"
      >
        Enregistrer et continuer
      </button>
    </div>
  </form>
</template>
