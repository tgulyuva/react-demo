const { Publisher } = require("@pact-foundation/pact")
const opts = {
    pactBroker: 'https://gulyuva.pactflow.io',
    pactBrokerToken: 'KhJOPfQdxj90G8mg_W6quQ',
    consumerVersion: '5556b8149bf8bac76bc30f50a8a2dd4c22c85f30',
    pactFilesOrDirs: ['../pacts'],
};

new Publisher(opts).publishPacts()
