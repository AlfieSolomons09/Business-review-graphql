import { gql } from "apollo-server";

export const graphQLSchema = gql(`
    type Business {
        businessId: ID!
        name: String
        address: String
        avgStars: Float
        photos: [Photo!]!
        reviews(first: Int, offset: Int, orderBy: ReviewOrdering = stars_asc): [Review!]!
        userById(id: ID!): User
    }

    enum ReviewOrdering {
        stars_asc
        stars_desc
    }

    enum BusinessOrdering {
        name_asc
        name_desc
    }

    type Query {
        allBusinesses(first: Int, offset: Int): [Business!]!
        businessBySearchTerm(
            search: String!
            first: Int = 10
            offset: Int = 0
            orderBy: BusinessOrdering = name_asc
        ): [Business!]!
        userById(id: ID!): User
        categories: [Category]
    }

    type User {
        userId: ID!
        name: String
        photos: [Photo!]!
        reviews(first: Int, offset: Int, orderBy: ReviewOrdering = stars_asc): [Review!]!
    }

    type Photo {
        business: Business!
        user: User!
        photoId: ID!
        url: String
    }

    type Review {
        reviewId: ID!
        stars: Float
        text: String
        user: User!
        business: Business!
    }    

    extend type Query{
        categories: [Category]
    }

    type Category {
        name: String!
        businesses: [Business]
    }

    extend type Business{
        categories: [Category]
    }
`)