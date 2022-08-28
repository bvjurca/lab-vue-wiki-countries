<template>
    <div class='countries-list col-5'>
        <div class="scrollable list-group">
            
            <router-link v-for="country in processCountries" 
            :key="country.id" 
            :to="country.alpha3Code">
            
            <div class="list-group-item list-group-item-action">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"/>
            {{ country.name }}</div>
            
            </router-link>
        
        </div>
    </div>
</template>

<script>
    import { mapState } from 'pinia';
    import CountryStore from '../store/CountryStore.js';

    export default {
        name: 'CountriesList',  
        computed: {
            ...mapState(CountryStore, ['processCountries']),
        },
    };
</script>

<style scoped>

.scrollable {
 display: flex;
 flex-direction: column;
 justify-content: middle;
}
.scrollable a {
    padding: 20px;
}

.scrollable a img {
    height: 40px;
    padding-right: 8px;
}

.countries-list {
    margin: 20px;
}
</style>