<template>
<!-- Breadcrumb -->
<nav class="mx-[8%] mb-10 flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
          Home
        </a>
      </li>
      <li>
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2">Contact Table</a>
        </div>
      </li>
    </ol>
  </nav>
  
<div class="mx-[8%] mb-10">
    <h1 class="text-xl font-bold text-gray-600"> > List of Contact Messages</h1>
</div>

<div class="overflow-x-auto relative shadow-md sm:rounded-2xl mx-[8%]">
    <table class="w-full text-sm text-left text-gray-500">
        <caption class="p-5 text-lg font-semibold text-left bg-white">
            Contact Table
            <p class="mt-1 text-sm font-normal text-gray-500">These are the list of users who submitted their messages on the website's contact form.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                    Address
                </th>
                <th scope="col" class="py-3 px-6">
                    Contact
                </th>
                <th scope="col" class="py-3 px-6">
                    Message
                </th>
                <th scope="col" class="py-3 px-6">
                    Date Submitted
                </th>
            </tr>
        </thead>
        <tbody v-if="(result && result.contacts)">
            <tr v-for="contact in result.contacts" :key="contact.id"  class="bg-white border-b">
                <th scope="row" class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap">
                    {{ contact.name }}
                </th>
                <td class="py-4 px-6">
                    {{ contact.email }}
                </td>
                <td class="py-4 px-6">
                    {{ contact.address }}
                </td>
                <td class="py-4 px-6">
                    {{ contact.contact }}
                </td>
                <td class="py-4 px-6">
                    {{ contact.message }}
                </td>
                <td class="py-4 px-6 text-blue-600">
                    {{ contact.created_at }}
                </td>
            </tr>
        
        </tbody>
        <tbody v-else-if="error" class="bg-white border-b">
            <td class="py-4 px-6">
                <p class="text-gray-500 font-bold text-lg">Error Occured.</p>
                {{ error.message }}.</td>
        </tbody>
        <tbody v-else-if="loading" class="bg-white border-b">
            <td col="4" row="4" class="py-4 px-6">
                <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </td>
        </tbody>
        <tbody v-else class="bg-white border-b">
            <td class="py-4 px-6">
                <p class="text-gray-500 font-bold text-lg">Nothing to show.</p>
            </td>
        </tbody>
    </table>
</div>


</template>

<script lang="ts" setup>
    import { useQuery } from "@vue/apollo-composable"
    import contactQuery from "../graphql/contact.query.gql"

    const { result, loading, error } = useQuery(contactQuery);
</script>