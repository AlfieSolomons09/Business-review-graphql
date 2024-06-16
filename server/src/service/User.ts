import { GraphQLResolveInfo } from "graphql";
import { ReviewType, UserType } from "../types/Types.js";


export const Reviews = (obj: UserType, arg: ReviewType, context: any, info: GraphQLResolveInfo) => {
    return context.db.reviews.filter((review: ReviewType)=> review.userId === obj.userId)
}