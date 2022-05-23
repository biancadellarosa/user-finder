# User Finde - About

App to find a user from GitHub by username

### Stack:

Vite: https://vitejs.dev/

Vue3: https://vuejs.org/

PrimeVue3: https://www.primefaces.org/primevue/#/

Pinia: https://pinia.vuejs.org/

Vitest: https://vitest.dev/

# Get going

before all run `npm install` 
For running serve `npm run dev`
For formating run `npm run format`
For testing run `npm run test`

## Start Point

You can find the start inside of `src/App.vue`.

Inside of `src/modules/` has all the components.
`Home.vue` is the main page;
`UserFinderStart.vue` is resposable to router to the steps and handle with the prev, next and complete events. Also inside this component is where the fetch to the user api happens.

All the validation process can be found inside of the respective components and inside of `src/utils/helpers.js` are the functions that set the valid properties as `true` or `false`.

## Style

Wich component has your own sytle and the variables can be found inside of `src/assets/styles/global.scss`