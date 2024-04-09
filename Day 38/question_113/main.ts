const countries = new Map<string, string>()

countries.set('Australia', 'Austria');
countries.set('Pakistan', 'Karachi');
countries.set('India', 'Mumbai');
console.log(countries);
function logCapitalOfPakistan(countries: Map<string, string>): void{
    if (countries.has('Pakistan')) {
        console.log(`${countries.get('Pakistan')} the Capital of Pakistan`);
    }else{
        console.log('Karachi is not a country');
    }}

logCapitalOfPakistan(countries)