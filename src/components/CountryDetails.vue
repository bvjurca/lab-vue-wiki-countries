<template>
    
</template>
<script>
import countriesData from '/public/countries.json';

export default {
    name: 'CountryDetails',
    data() {
        return {
            countryInfo: null,
        };
    },
    created() {
        const { countryCode } = this.$route.params;
        if (countriesData.length && countryCode) {
            this.countryInfo = countriesData.filter((country) => country.alpha3Code === countryCode)[0];
            console.log(this.countryInfo);
        }
        this.$watch (() => this.$route.params,
        (toParams, previousParams) => {
            if (countriesData.length && toParams.countryCode) {
                this.countryInfo = countriesData.filter((country) => country.alpha3Code === toParams.countryCode)[0];
            }
        }
        )
    }

}
</script>
