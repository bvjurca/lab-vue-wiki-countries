<template>
    <div class='countries-list'>
        <div class="scrollable">
            <router-link v-for= "country in processCountries" :key= "country.id" :to= "country.alpha3Code">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"/>
                {{ country.name }}
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
}

.countries-list {
    
}
</style>