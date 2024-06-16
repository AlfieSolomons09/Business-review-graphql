import { GraphQLResolveInfo } from "graphql";
// import { ArgsType } from "../types/Types.js";
import { ArgsType, BusinessType, CategoryType, DatabaseType, ReviewType } from "../types/Types.js";

export const reviews = (obj: any, arg: ArgsType, context: {db: DatabaseType}, info: GraphQLResolveInfo) => {
    const compare = (a: any, b:any) => {
        const [orderField, order] = arg.orderBy.split("_");

        const left = a[orderField as keyof ReviewType]
        const right = b[orderField as keyof ReviewType]

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
    return obj.reviewIds.map((v:string) => {
        return context.db.reviews.find((review: ReviewType) => {
            return review.reviewId === v;
        })
    }).sort(compare)
}

export const avgStars = (obj: any, arg: ArgsType, context: {db: DatabaseType}, info: GraphQLResolveInfo) => {
    const reviews = obj.reviewIds.map((v: string) => {
        return context.db.reviews.find((review: ReviewType) => {
            return review.reviewId === v;
        })
    });

    const totalStars = reviews.reduce((acc: number, review: ReviewType) => {
        return acc + review.stars;
    }, 0)

    return reviews.length === 0 ? 0 : totalStars / reviews.length;
}

export const categories = (obj: BusinessType, args: any, context: {db: DatabaseType}, info: GraphQLResolveInfo) => {
    return context.db.categories.filter((category)=>{
        return obj.categories.includes(category.name)
    })
}