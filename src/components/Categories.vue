<!-- <template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      {{ result }}
  
      <div v-if="loading">Loading...</div>
  
      <div v-else-if="error">Error: {{ error.message }}</div>
    
      <ul v-else-if="(result && result.books)">
        <li v-for="book of result.books" :key="book.title" class="books">
          <p>{{ book.author }}</p> 
          <h5>{{ book.title }}</h5>
        </li>
      </ul>
  
    </nav>
    <router-view/>
  </template>
  
  <script lang="ts">
  
    import { useQuery } from '@vue/apollo-composable'
    import booksQuery  from './graphql/books.query.gql'
  
    export default {
      setup () {
        // const { result } = useQuery(booksQuery)
        // const books = useResult(result, null, data => data.books)
  
        const { result, loading, error } = useQuery(booksQuery)
  
        return {
              result,
              loading,
              error,
            }
  
      },
    }
  </script> -->