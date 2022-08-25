<template>
    <div class="country-details" v-if= "countrySelected !== null">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countrySelected.alpha2Code}.png`"/>
                {{ countrySelected.name }}
        <h1>{{ countrySelected.name.common }}</h1>
        <p>Capital: {{ countrySelected.capital[0] }}</p>
        <p>Area: {{ countrySelected.area }} km2 </p>
        <router-link v-for= "border in countrySelected.borders" :key= "border" :to= "border">{{ border }}</router-link>
    </div>
</template>
<script>
import countriesData from '/public/countries.json';
import CountryStore from '../store/CountryStore.js';

export default {
    name: 'CountryDetails',
    computed: {
        ...mapState(CountryStore, ['countrySelected']),
    },
    created() {
        const { countryCode } = this.$route.params;
        if (countriesData.length && countryCode) {
            const info = countriesData.filter((country) => country.alpha3Code === countryCode)[0];
            this.countrySelected = {
                alpha2Code: info.alpha2Code.toLowerCase(),
                name: info.name.common,
                capital: info.capital[0],
                borders: info.borders,
                area: info.area,
            };
        }
        this.$watch (() => this.$route.params,
        (toParams, previousParams) => {
            if (countriesData.length && toParams.countryCode) {
                const info = countriesData.filter((country) => country.alpha3Code === toParams.countryCode)[0];
                this.countrySelected = {
                    alpha2Code: info.alpha2Code.toLowerCase(),
                    name: info.name.common,
                    capital: info.capital[0],
                    borders: info.borders,
                    area: info.area,
                };
            }
        }
        )
    }

}
</script>
