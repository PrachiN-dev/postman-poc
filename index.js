const newman = require("newman");
// import {run} from 'newman'
// import integrationCollection from './tests/repair_poc.postman_collection.json';
// import testEnvironment from './environments/Test.postman_environment.json';

// const collections = [integrationCollection];
// for(const collection of collections){
newman.run({
    collection: "./tests/repair_poc.postman_collection.json", // Collection URL from a public link or the Postman API can also be used
    // environment: testEnvironment,
    reporters: ["htmlextra"],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            logs: true,
            browserTitle: "API Test Report",
            title: "Integration Test Report",
            hideRequestBody: ["Login"],
            hideResponseBody: ["Auth Request"],
            skipEnvironmentVars: ["API_KEY"],
            skipGlobalVars: ["API_TOKEN"],
            skipSensitiveData: true,
            showFolderDescription: true,
            timezone: "Australia/Sydney",
        },
    },
    // }, (error) => {
    //     if(error) {
    //         console.log(error);
    //     }
});
// }
