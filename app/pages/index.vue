<script setup lang="ts">
// Test auto deploy
</script>

<template>
    <header class="text-center group mb-16">
        <div class="max-w-lg mx-auto px-2">
            <SvgLogoHeartlessgamingDark2020
            class="box-content max-w-sm mx-auto px-8 drop-shadow-logo mb-5 group-hover:-rotate-2 group-hover:scale-105 transition-transform duration-1000"
            :fontControlled="false"
            />
            <h1 class="text-3xl">Une communauté de gamers pour l'amour de l'entertainment !</h1>
        </div>
    </header>
    <main>
        <Donation />
    </main>
    <footer class="bg-base-200 py-12 px-2">
        <div class="max-w-lg mx-auto">
            <FooterIconLinks />
            <div class="grid gap-y-2">
                <p>Play more, care less, be Heartless</p>
                <p>Pas de cookie 🍪 sur ce site car il fait un régime kéto 🥑</p>
                <p><a class="pretty-link" href="https://github.com/heartless-gaming/heartlessgaming.com">code sauce</a></p>
                <RandomQuote />
            </div>
        </div>
    </footer>
</template>