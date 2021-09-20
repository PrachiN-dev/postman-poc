const newman = require('newman');
newman.run({
    collection : './tests/repair_poc.postman_collection.json',
    environment : './environments/Test.postman_environment.json',
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
