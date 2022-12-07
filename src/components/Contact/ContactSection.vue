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
                    <div v-if="sendMessageError" class="text-xs text-red-500 m-0 p-0 mb-2">
                        <span v-for="error in sendMessageError?.graphQLErrors[0].extensions.validation" :key="error" >
                            <span>{{ error }}</span> <br>
                        </span>
                
                    </div>
                    
                    <form action="#" @submit.prevent method="POST" class="flex flex-wrap gap-y-4">
                        <div class="block w-full">
                            <input name="name" v-model="name" type="text" placeholder="Name" class="bg-gray-100 w-full py-2 px-3 rounded-lg">
                        </div>
                        <div class="flex gap-x-2 w-full">
                            <input name="email" v-model="email" type="text" placeholder="Email" class="bg-gray-100 w-1/2 py-2 px-3 rounded-lg">
                            <input name="contact" v-model="contact" type="text" placeholder="Contact Number" class="bg-gray-100 w-1/2 py-2 px-3 rounded-lg">
                        </div>
                        <input name="address" v-model="address" type="text" placeholder="Address" class="bg-gray-100 w-full py-2 px-3 rounded-lg">
                        <textarea name="message" v-model="message" placeholder="Your Message" cols="20" rows="7" class="bg-gray-100 w-full py-2 px-3 rounded-lg"></textarea>
                        
                        <div class="flex items-center">
                            <button @click="sendMessage({name, email, contact, address, message})" type="submit" class="bg-green-500 text-white text-sm font-medium py-2 px-10 rounded-md hover:bg-green-600">Submit</button>
                            <div class="w-full">
                                <svg v-if="sendMessageLoading" aria-hidden="true" class="mx-2 w-8 h-6 text-gray-200 animate-spin dark:text-gray-300 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>


                    </form>

                    <div v-if="sendMessageError" class="mt-5 bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                            <div>
                            <p class="font-bold">Error Occured</p>
                            <p class="text-sm">Please try again later.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="success" class="mt-5 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div class="py-1">
                                <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                            </div>
                            <div>
                                <p class="font-bold">Message successfully sent!</p>
                                <p class="text-sm">Thank you for sending us your message.</p>
                                <p class="mt-2">
                                    <span class=" dark:bg-teal-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                        <a href="/contact-list" class="text-blue-700 underline">Click here</a> to see list of Contact Messages
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- {{ sendMessageError?.graphQLErrors[0].extensions.validation }} -->


        </div>
    </section>
</template>

<script lang="ts" setup>
    import { Vue } from 'vue-class-component';
    import { useMutation } from '@vue/apollo-composable'
    import { ref } from 'vue'
    import createContact from '../../graphql/contact.mutate.gql'
    
    let name = ref('')
    let email = ref('')
    let contact = ref('')
    let address = ref('')
    let message = ref('')
    

    const success = ref(false)
    let validationErrors = ref()
    
    const { 
        mutate: sendMessage, 
        loading: sendMessageLoading, 
        error: sendMessageError, 
        onDone } = 
        
        useMutation(createContact,
            {
                variables: {
                    name: name.value,
                    email: email.value,
                    contact: contact.value,
                    address: address.value,
                    message: message.value,
                }
            }
        )

    onDone(result => {
        success.value = true
        name.value = ''
        email.value = ''
        contact.value = ''
        address.value = ''
        message.value = ''
    })

    class HeaderNav extends Vue {}
</script>