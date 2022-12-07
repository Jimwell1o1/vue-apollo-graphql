<template>
    <section id="contact" class="py-22 px-[8%] mt-10">
        <div class="text-center">
            <h1 class="text-5xl">Get in touch with us</h1>
            <p class="text-lg py-5 font-light">Feel free to drop us a line.</p>

            <div class="flex flex-wrap text-left px-20 py-16">

                <div class="block w-1/2 pr-16 pt-5">
                    <h2 class="text-3xl font-medium">Contact Us</h2>
                    <hr class="w-20 border-t-4 border-green-500 mb-10"> 

                    <h4 class="text-lg font-medium py-2">Have a question about a product, our company, or just want to chat? Email us!</h4>
                    <p class="text-xs text-gray-500 py-2">We will be glad to assist you in any question and encourage you to share your ideas and improvements with us.</p>
                    
                    <h6 class="text-md font-semibold pt-8">Email</h6>
                    <p class="text-sm">apollolightings@gmail.com</p>

                    <h6 class="text-md font-semibold pt-8">Customer Service</h6>
                    <p class="text-sm">Monday to Friday</p>
                    <p class="text-sm">8am to 10pm (GMT 8:00+)</p>

                    <h6 class="text-md font-semibold pt-8">Location</h6>
                    <p class="text-sm">Metro Manila, Philippines</p>
                </div>

                <div class="relative shadow-lg px-5 py-8 w-1/2">
                    <h5 class="text-2xl font-medium mb-5 text-gray-800">Send us a message!</h5>
    
                    <form action="" class="flex flex-wrap gap-y-4">
                        <input type="text" placeholder="Name" class="bg-gray-100 w-full py-2 px-3 rounded-lg">
                        
                        <div class="flex gap-x-2 w-full">
                            <input type="text" placeholder="Email" class="bg-gray-100 w-1/2 py-2 px-3 rounded-lg">
                            <input type="text" placeholder="Contact" class="bg-gray-100 w-1/2 py-2 px-3 rounded-lg">
                        </div>
                        <input type="text" placeholder="Address" class="bg-gray-100 w-full py-2 px-3 rounded-lg">
                        <textarea name="" placeholder="Your Message" cols="20" rows="7" class="bg-gray-100 w-full py-2 px-3 rounded-lg"></textarea>
                    
                        <button type="submit" class="bg-green-500 text-white text-sm font-medium py-2 px-10 rounded-md hover:bg-green-600">Submit</button>
                    </form>
                </div>
            </div>



        </div>
    </section>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    export default class HeaderNav extends Vue {}
</script>