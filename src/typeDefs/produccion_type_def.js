const {gql} =  require('apollo-server');

const produccionTypeDef = gql`
    type Seller {
        id: Int!
        name: String!
        is_active: Boolean!
    }
    type Query {
        sellerById(id: Int!): Seller!
    }
`;

module.exports = produccionTypeDef;