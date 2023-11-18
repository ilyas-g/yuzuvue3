// import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

import App from './App.vue'
import router from './router'

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: 'https://api.start.gg/gql/alpha',
});

const authLink = setContext((_, { headers }) => {
    const token = process.env.VUE_APP_TOKEN;

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    };
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});

// const app = createApp({
//     setup() {
//         provide(DefaultApolloClient, apolloClient);
//     },

//     render: () => h(App),
// });

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
