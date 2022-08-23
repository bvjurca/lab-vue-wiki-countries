<template>
    <ul>
        <li><router-link to="/:countryCode"> {{ countries }}</router-link></li>
    </ul>
</template>

<script>
import countries from '/public/countries.json';

export default {
    name: 'CountriesList',
    data () {
        return {
            countries: countries.name.common,
        };
    },
};
</script>
