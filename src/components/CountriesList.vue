<template>
    <div class='countries-list'>
        <div>
            <router-link v-for="country in countries" :key="country.id" :to="country.alpha3Code">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"/>
                {{ country.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
import countries from '/public/countries.json';

export default {
    name: 'CountriesList',
    props: {
        countries: Array,
    },
};
</script>
