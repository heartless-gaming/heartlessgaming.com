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
        <div class="mb-16 max-w-screen-lg mx-4 lg:mx-auto bg-base-300 rounded-3xl py-8 px-16 ring-1 ring-transparent hover:ring-4 ring-offset-0 hover:ring-offset-4 ring-offset-base-100 hover:ring-accent transition group">
            <h2 class="text-3xl mb-3">Faire une donation !</h2>
            <div class="sm:grid grid-cols-3">
                <div class="flex items-center justify-center sm:justify-normal">
                    <Icon name="game-icons:take-my-money" size="13rem" class="opacity-80 -rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-transform" />
                </div>
                <div class="text-lg col-span-2">
                    <p class="text-2xl mb-4">Que faisons-nous avec l'argent ?</p>
                    <ul class="mb-6 list-disc pl-8">
                        <li>On paye un serveur pour jouer et communiquer <em>(~30€ par mois)</em>.</li>
                        <li>On paye un nom de domaine parce qu'on retiens jamais l'ip du serveur.</li>
                        <li>On ne paye <strong>PAS</strong> Markus pour le super logo qu'il a créer.</li>
                        <li>Enrichir <a class="pretty-link" href="https://skullmasher.io">l'administrateur</a>.</li>
                    </ul>
                    <a href="https://buy.stripe.com/dR6aG3fIr1zg2Qw7ss" class="btn btn-accent uppercase btn-lg mb-1">Take my money !</a>
                    <p class="text-sm">(Nous n'acceptons pas les bitcoicoin)</p>
                </div>
            </div>
        </div>
    </main>
    <footer class="bg-base-200 py-12">
        <div class="max-w-lg mx-auto">
            <div class="mb-8 grid grid-cols-3 sm:grid-cols-5 gap-y-6 gap-x-2">
                <div class="tooltip" data-tip="Youtube">
                    <a href="https://www.youtube.com/@heartless.gaming/videos" class="btn btn-ghost">
                        <Icon name="logos:youtube-icon" class="text-4xl" />
                    </a>
                </div>
                <div class="tooltip" data-tip="Twitch">
                    <a href="https://www.twitch.tv/heartlessgaming_live" class="btn btn-ghost">
                        <Icon name="logos:twitch" class="text-4xl"/>
                    </a>
                </div>
                <div class="tooltip" data-tip="Mumble">
                    <a href="mumble://heartlessgaming.com" class="btn btn-ghost">
                        <Icon name="simple-icons:mumble" class="text-4xl"/>
                    </a>
                </div>
                <div class="tooltip" data-tip="Discord">
                    <a href="https://discord.gg/rWDzacA" class="btn btn-ghost">
                        <Icon name="logos:discord-icon" class="text-4xl"/>
                    </a>
                </div>
                <div class="tooltip" data-tip="Github">
                    <a href="https://github.com/heartless-gaming/heartlessgaming.com" class="btn btn-ghost">
                        <Icon name="mdi:github" class="text-4xl"/>
                    </a>
                </div>
            </div>
            <div class="grid gap-y-2">
                <p>Play more, care less, be Heartless</p>
                <p>Pas de cookie 🍪 sur ce site car il fait un régime kéto 🥑</p>
                <p><a class="pretty-link" href="https://github.com/heartless-gaming/heartlessgaming.com">code sauce</a></p>
            </div>
        </div>
    </footer>
</template>