<script setup lang="ts">
defineEmits(['submit'])
</script>

<template>
  <form
    class="
      grid gap-x-4 gap-y-4
      sm:grid-cols-4
    "
    @submit.prevent="$emit('submit')"
  >
    <fieldset
      class="
        fieldset
        sm:col-span-2
      "
    >
      <legend class="fieldset-legend">
        Prénom
      </legend>
      <input type="text" class="input input-lg w-full" placeholder="Gordon">
    </fieldset>
    <fieldset
      class="
        fieldset
        sm:col-span-2
      "
    >
      <legend class="fieldset-legend">
        Nom
      </legend>
      <input type="text" class="input input-lg w-full" placeholder="Freeman">
    </fieldset>
    <fieldset
      class="
        fieldset
        sm:col-span-full
      "
    >
      <legend class="fieldset-legend">
        Adresse (numéro et nom de la rue)
      </legend>
      <input type="text" class="input input-lg w-full" placeholder="42 rue de la déchance du skill">
    </fieldset>
    <fieldset class="fieldset">
      <legend class="fieldset-legend">
        Code postal
      </legend>
      <input type="text" class="input input-lg w-full" placeholder="42666">
    </fieldset>
    <fieldset
      class="
        fieldset
        sm:col-span-2
      "
    >
      <legend class="fieldset-legend">
        Ville
      </legend>
      <input type="text" class="input input-lg w-full" placeholder="Beton-Bazoches">
    </fieldset>
    <fieldset class="fieldset" disabled>
      <legend class="fieldset-legend">
        Pays
      </legend>
      <input type="text" class="input input-lg w-full" value="France">
    </fieldset>
    <fieldset
      class="
        fieldset
        sm:col-span-2
      "
    >
      <legend class="fieldset-legend">
        Email
      </legend>
      <input type="text" class="input input-lg w-full" placeholder="gordon@blackmesa.com">
    </fieldset>
    <fieldset
      class="
        fieldset
        sm:col-span-2
      "
    >
      <legend class="fieldset-legend">
        Numéro de téléphone (optionnel)
      </legend>
      <input type="text" class="input input-lg w-full" placeholder="06 66 42 42 42">
      <p class="label">
        Permet de recevoir les mises à jour de livraison en temps réel
      </p>
    </fieldset>
    <div class="sm:col-span-full">
      <button class="btn btn-success">
        Enregistrer et continuer
      </button>
    </div>
  </form>
</template>
