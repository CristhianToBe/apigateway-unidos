const produccionResolver = require ("./produccion_resolver");
const lodash = require('lodash');

const resolvers = lodash.merge(produccionResolver)

module.exports = resolvers