<script setup lang="ts">
defineEmits(['submit'])
</script>

<template>
  <div>
    <div class="gap-4 sm:flex">
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Prénom</span>
          </div>
          <input type="text" placeholder="Ex: Gordon" class="input input-bordered w-full">
          <div class="label">
            <span class="label-text-alt text-warning">Bottom Left label</span>
          </div>
        </label>
      </div>
      <div>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Nom</span>
          </div>
          <input type="text" placeholder="Ex: Freeman" class="input input-bordered w-full">
          <div class="label">
            <span class="label-text-alt text-warning">Bottom Left label</span>
          </div>
        </label>
      </div>
    </div>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Email</span>
      </div>
      <input type="text" placeholder="Ex: g.freeman@blackmesa.fr" class="input input-bordered w-full">
      <div class="label">
        <span class="label-text-alt text-warning">Bottom Left label</span>
      </div>
    </label>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Adresse</span>
      </div>
      <input type="text" placeholder="Ex: 1 Place Stanislas" class="input input-bordered w-full">
      <div class="label">
        <span class="label-text-alt text-warning">Bottom Left label</span>
      </div>
    </label>
    <div class="gap-4 sm:flex">
      <div>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Code Postal</span>
          </div>
          <input type="text" placeholder="Ex: 54000" class="input input-bordered w-full">
          <div class="label">
            <span class="label-text-alt text-warning">Bottom Left label</span>
          </div>
        </label>
      </div>
      <div>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Ville</span>
          </div>
          <input type="text" placeholder="Ex: Nancy" class="input input-bordered w-full">
          <div class="label">
            <span class="label-text-alt text-warning">Bottom Left label</span>
          </div>
        </label>
      </div>
    </div>
    <button class="btn btn-accent" @click="$emit('submit')">
      Enregistrer et continuer
    </button>
  </div>
</template>
