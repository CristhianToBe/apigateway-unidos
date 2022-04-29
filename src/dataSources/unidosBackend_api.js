const { RESTDataSource } = require ("apollo-datasource-rest")
const serverConfig = require("../server");

class ProduccionApi extends RESTDataSource {
    
    constructor(){
        super();
        this.baseURL = serverConfig.produccion_api_url;
    }

    async sellerById(id){
        return await this.get(`produccion/sellers/`+id)
    }
}

module.exports = ProduccionApi;