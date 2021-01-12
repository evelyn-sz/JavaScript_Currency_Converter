import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            currencies: [],
            selectedCurrency: null
        },
        mounted() {
            this.fetchRates()
        },
        computed: {

        },
        methods: {
            fetchRates: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(res => res.json())
                .then(currencies => this.currencies = currencies)
            },
            selectCurrency: function(currencyIndex) {
                this.selectedCurrency = this.currencies[currencyIndex]
            }
        }
    })
})