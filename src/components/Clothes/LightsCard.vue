
<template>

<section id="products" class="flex flex-col items-center py-20">
  <h2 class="text-3xl font-semibold text-center mb-5">ALL PRODUCTS</h2>
  <p class="text-xl text-green-600 text-center mb-10">Fill your closet with our most popular idol fashion</p>
  {{ normalizedSize }}
  <div v-if="loading1" class="m-5">
      <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div>

  <div v-else-if="error1" id="alert-5" class="flex p-4 m-5 bg-gray-100 rounded-lg dark:bg-gray-700 w-5/12" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Info</span>
      <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        Oops, something went wrong. Please try again later. {{ error1.message }}
    </div>
  </div>

  <div v-else-if="(category == 'all' && data1 && data1.lights)" class="flex flex-wrap justify-center gap-5 max-w-7xl mb-20">
    <div v-for="light of data1.lights" :key="light.id"  class="max-w-[18rem] h-full max-h-[405px] rounded-md overflow-hidden shadow-lg">
        <img class="w-full" :src="`http://127.0.0.1:8000/images/products/${light.file_path}`"
        alt="Sunset in the mountains">              
        <div class="px-4 pt-5">
            <span class="inline-block pb-2 text-md font-semibold text-gray-700 mr-2">&#8369; {{ light.price }}.00</span>
        </div>
        <div class="px-4 pb-2 mb-2">
          <p class="font-medium pb-1 text-sm whitespace-nowrap">{{ light.product_name }}</p>
          <div class="inline-block text-gray-400 text-xs bg-gray-200 rounded-md px-2 py-1 ml-[-1px] items-end">
            <i class="bi bi-cart"></i>
            <span class="ml-2">Available</span>
          </div>
        </div>
    </div>   
  </div>


<!-- 

  <div v-if="loading2" class="m-5">
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>

<div v-else-if="error2" id="alert-5" class="flex p-4 m-5 bg-gray-100 rounded-lg dark:bg-gray-700 w-5/12" role="alert">
    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Info</span>
    <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
      Oops, something went wrong. Please try again later. {{ error2.message }}
  </div>
</div>


  <div v-else-if="(category != 'all' && data2 && data2.light)" class="flex flex-wrap justify-center gap-5 max-w-7xl mb-20">
    <div v-for="light of data2.light" :key="light.id"  class="max-w-[18rem] h-full max-h-[405px] rounded-md overflow-hidden shadow-lg">
        <img class="w-full" :src="`http://127.0.0.1:8000/images/products/${light.file_path}`"
        alt="Sunset in the mountains">              
        <div class="px-4 pt-5">
            <span class="inline-block pb-2 text-md font-semibold text-gray-700 mr-2">&#8369; {{ light.price }}.00</span>
        </div>
        <div class="px-4 pb-2 mb-2">
          <p class="font-medium pb-1 text-sm whitespace-nowrap">{{ light.product_name }}</p>
          <div class="inline-block text-gray-400 text-xs bg-gray-200 rounded-md px-2 py-1 ml-[-1px] items-end">
            <i class="bi bi-cart"></i>
            <span class="ml-2">Available</span>
          </div>
        </div>
    </div>   
  </div> -->

  <button class="bg-green-400 px-8 py-2 text-lg flex-none text-white">See more</button>

</section>
</template>


<script lang="ts" setup>
    import { computed, defineProps, reactive, ref } from "vue";
    import { useQuery } from '@vue/apollo-composable';
    import lightsQuery  from '../../graphql/lights.query.gql';
    import lightCategorized  from '../../graphql/lightcategorize.query.gql';

        
    const props = defineProps(['category'])

    // computed property that auto-updates when the prop changes
    const normalizedSize = computed(() => props.category.trim().toLowerCase())
     //const { result, loading, error } = useQuery(lightsQuery)
    // const { result, loading, error } = useQuery(categoryQuery, { variables: {categor2} })
      
      // let categoryTitle = String(ref(normalizedSize))
    // console.log(categoryTitle);
    let queryMultiple = () => {
      const res1 = useQuery(lightsQuery);
      let res2 = useQuery(lightCategorized, { variables: {normalizedSize}});
      return [res1, res2];
    }

    const [
        { loading: loading1, result: data1, error: error1},
        { loading: loading2, result: data2, error: error2}
    ] = queryMultiple()

</script>