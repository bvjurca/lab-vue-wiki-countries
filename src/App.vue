<template>
  <div class="app">
     <Navbar />
     <div class="container">
      <div class="row">
         <CountriesList />
         <router-view />
      </div>
     </div>
   
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import Navbar from './components/Navbar.vue';
import CountryStore from './store/CountryStore.js'
import CountriesList from './components/CountriesList.vue';

export default {
  name: 'App',
  components: { Navbar, CountriesList },
  methods: {
    ...mapActions(CountryStore,['fetchCountries']),
  },  
  computed: {
    ...mapState(CountryStore, ['countries']),
  },
  created() {
    this.fetchCountries();
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.app {
  text-align: center;
}

.app-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: app-logo-spin infinite 20s linear;
  }
}

.app-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.app-link {
  color: #61dafb;
}

.row {
  flex-direction: row;
}

@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
