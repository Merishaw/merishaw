<template>
    <div>
        <header class="bg-[#7a212e] w-full h-32 mx-auto">
            <div class="flex flex-row items-center justify-center">
                <div class="h-28 px-12 pt-6">
                    <NuxtImg src="/images/Merishaw School.png"/>
                </div>
                <div>
                    <p class="bold-title">Gift Programme</p>
                </div>
            </div>
        </header>
        <slot/>
        <footer class="bg-gray-500 w-full flex justify-center">
            <div class="px-4 py-4">
                <p class="footer-title border-b-2 mb-4">Get In Touch</p>
                <p class="footer-text">Isinya Namanga Road</p>
                <p class="footer-text">P.O BOX 27646-00100 Nairobi</p>
                <p class="footer-text">Tel: 0721 303 303 / 0731 303 350</p>
                <p class="footer-text">Email: enquiries@merishawschools.sc.ke</p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
//import { NuxtImg } from '#build/components';


</script>

<style scoped>

</style>