declare module '*.gql' {
    import { DocumentNode } from 'graphql'
    const Schema: DocumentNode
  
    export = Schema
  }

//https://dev.to/open-graphql/how-to-resolve-import-for-the-graphql-file-with-typescript-and-webpack-35lf