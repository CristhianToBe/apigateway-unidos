const produccionResolver = {
    Query: {
        sellerById: async (_, {id}, {dataSources}) => {
            return await dataSources.sellerById(id);
        }
    }   
}

module.exports = produccionResolver;