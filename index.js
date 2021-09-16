const newman = require("newman");
// import {run} from 'newman'
// import integrationCollection from './tests/repair_poc.postman_collection.json';
// import testEnvironment from './environments/Test.postman_environment.json';

// const collections = [integrationCollection];
// for(const collection of collections){
newman.run({
    reporters: 'junitfull',
    reporter: {
        junitfull: {
            export: './tests/result.xml', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    },
    iterationCount: 2
}, (error) => {
        if(error) {
            console.log(error);
        }
    // }, (error) => {
    //     if(error) {
    //         console.log(error);
    //     }
});
// }
