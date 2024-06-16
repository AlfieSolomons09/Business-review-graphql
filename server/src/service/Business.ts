import { GraphQLResolveInfo } from "graphql";
import { ReviewType } from "../types/types";

export const reviews = (obj, arg, context, info: GraphQLResolveInfo) => {
    const compare = (a,b) => {
        const [orderField, order] = arg.orderBy.split("_");

        const left = a[orderField]
        const right = b[orderField]

        if(left<right){
            return order === "asc" ? -1 : 1
        }
        else if(left>right){
            return  order === "desc" ? -1 : 1
        }
        else{
            return 0;
        }
    }
    return obj.reviewIds.map(v => {
        return context.db.reviews.find((review: ReviewType) => {
            return review.reviewId === v;
        })
    }).sort(compare)
}

export const avgStars = (obj, arg, context, info: GraphQLResolveInfo) => {
    const reviews = obj.reviewIds.map(v => {
        return context.db.reviews.find((review: ReviewType) => {
            return review.reviewId === v;
        })
    });

    const totalStars = reviews.reduce((acc: number, review: ReviewType) => {
        return acc + review.stars;
    }, 0)

    return reviews.length === 0 ? 0 : totalStars / reviews.length;
}

export const categories = (obj, args, context, info) => {
    return context.db.categories.filter((category)=>{
        return obj.categories.includes(category.name)
    })
}