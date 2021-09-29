const newman = require('newman');
require('dotenv').config();

newman.run({
    collection : './tests/repair_poc.postman_collection.json',
    // environment : './environments/Test.postman_environment.json',
    envVar: [
        {"key":"url", "value":'https://reqres.in'},
        {"key":"userId", "value":`${process.env.USER_ID}` }
    ],
    reporters: ['junitfull', 'cli'],
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
