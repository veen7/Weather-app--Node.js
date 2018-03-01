const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe:'Address to fetch weather for',
            string:true                        
        }        
    })
    .help()
    .alias('help','h')
    .argv;


console.log(argv)

var encodedAddress = encodeURIComponent(argv.address);


request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
},(error, response, body) => {
    // console.log(JSON.stringify(body,undefined,2))
    const result = body.results[0].geometry.location
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Latitude: ${result.lat}`);
    console.log(`Longitude: ${result.lng}`);
})