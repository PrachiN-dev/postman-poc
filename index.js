const newman = require("newman");
newman.run({
    collection: './tests/repair_poc.postman_collection.json',
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
