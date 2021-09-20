const newman = require('newman');
// const collection = require('./tests/repair_poc.postman_collection.json');
// const environment = require('./environments/Test.postman_environment.json');
// environmentVariables = [];
// environmentVariables.push(
//   {
//     key: "url",
//     value: "https://reqres.in",
//     enabled: true
//   }
// );
// environment.values[0].value = 'https://reqres.in';
// environment.values[1].value = '1';
// console.log('Value ---> ', environment.values[0].value)
newman.run({
    collection : './tests/repair_poc.postman_collection.json',
    environment : './environments/Test.postman_environment.json',
    // envVar: [ 
    //     { "key":"url", "value":"https://reqres.in" },
    //     { "key":"userId", "value":'1'}
    // ],
    reporters: 'junitfull',
    reporter: {
        junitfull: {
            export: './reports/api-test.xml',
        }
    },
}, (error) => {
    if(error) {
        console.log(error);
    }
});
