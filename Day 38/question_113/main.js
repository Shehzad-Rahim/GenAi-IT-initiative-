"use strict";
const countries = new Map();
countries.set('Australia', 'Austria');
countries.set('Pakistan', 'Karachi');
countries.set('India', 'Mumbai');
console.log(countries);
function logCapitalOfPakistan(countries) {
    if (countries.has('Pakistan')) {
        console.log(`${countries.get('Pakistan')} the Capital of Pakistan`);
    }
    else {
        console.log('Karachi is not a country');
    }
}
logCapitalOfPakistan(countries);
