import { avgStars, reviews } from "../../service/Business.js";
import { businesses } from "../../service/Category.js";
import { allBusinesses, categories, searchBusinessByTerm, userById } from "../../service/Query.js";
import { Business, User } from "../../service/Review.js";
import { Reviews } from "../../service/User.js";

export const resolvers = {
    Query:{
        allBusinesses: allBusinesses,
        businessBySearchTerm: searchBusinessByTerm,
        userById: userById,
        categories: categories
    }, 
    Business:{
        reviews: reviews,
        avgStars: avgStars,
        categories: categories
    },
    Review: {
        user: User,
        business: Business
    },
    User: {
        reviews: Reviews
    },
    Category:{
        businesses: businesses
    }
}