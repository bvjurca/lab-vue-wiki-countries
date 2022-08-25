import { defineStore } from 'pinia';

export default defineStore('countryStore', {
    state: () => {
        return {
            countries: [],
            countryCodeSelected: '',
        }
    },
    getters: {
        processCountries() {
            var count = 0;
            return this.countries.map(country => {
                return {
                id: ++count,
                name: country.name.common,
                alpha2Code: country.alpha2Code,
                alpha3Code: country.alpha3Code,
                }
            });
        },
        countrySelected() {
            const countryFound = this.countries.find( country => country.alpha3Code === this.countryCodeSelected);
            if(countryFound) {
                return {
                    alpha2Code: countryFound.alpha2Code.toLowerCase(),
                    name: countryFound.name.common,
                    capital: countryFound.capital[0],
                    borders: countryFound.borders,
                    area: countryFound.area,
                };
            }
            return null;
        },
    },
    actions: {
        async fetchCountries() {
            const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
            const countriesData = await response.json();
            this.countries = countriesData.reverse();
        },
        getCountry(countryCode) {
            return this.countries.find(country => country.alpha3Code === this.countryCodeSelected);
        },
    },
});