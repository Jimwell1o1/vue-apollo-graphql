<template>

    <section class="flex flex-col mt-28">

        <div class="flex justify-center gap-20">
            <div class="flex gap-5">
                <p>Follow us</p>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-pinterest"></i>
            </div>

            <div class="flex gap-5">
                <p>Download our app and get a free voucher!</p>
                <i class="bi bi-apple"></i>
                <i class="bi bi-google-play"></i>
            </div>
        </div>
    </section>

    <hr class="my-5">

    <section class="pt-8 pb-16 flex justify-center items-start gap-48">
        <div class="flex flex-col text-left">
            <h5 class="font-bold text-xl mb-5">SUPPORT</h5>
            <ul>
                <li>Order Tracking</li>
                <li>Contact Us</li>
                <li>Customer Service</li>
                <li>Email Our CEO</li>
            </ul>
        </div>
        <div class="flex flex-col text-left">
            <h5 class="font-bold text-xl mb-5">PROGRAMS</h5>
            <ul>
                <li>Apollo Clubs</li>
                <li>Customer Rewards</li>
                <li>Student Programs</li>
                <li>Scholarships</li>
            </ul>
        </div>
        <div class="flex flex-col text-left">
            <h5 class="font-bold text-xl mb-5">PARTNERSHIPS</h5>
            <ul>
                <li>School Organizations</li>
                <li>Affiliates</li>
                <li>Sponsorships</li>
                <li>Influencers</li>
            </ul>
        </div>
        <div class="flex flex-col text-left">
            <h5 class="font-bold text-xl mb-5">ABOUT US</h5>
            <ul>
                <li>About Apollo</li>
                <li>Customer Relations</li>
                <li>Vision & Mission</li>
                <li>Company Rights</li>
            </ul>
        </div>
    </section>
</template>


<script lang="ts">
    import { Vue } from 'vue-class-component';

    export default class HeaderNav extends Vue {}
</script>