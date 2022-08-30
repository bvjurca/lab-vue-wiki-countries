<template>
    <div class='countries-list col-5'>
        <div class="list-group">
            
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

.scrollable a img {
    height: 40px;
    padding-right: 8px;
}

.countries-list {
    overflow: scroll;
    max-height: 90vh;
    margin-bottom: 20px;
    border-bottom: 2px #dfdfdf solid;
}

</style>