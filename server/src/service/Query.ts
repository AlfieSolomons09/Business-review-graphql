import { GraphQLResolveInfo } from "graphql"
import { UserType } from "../types/types";

export const allBusinesses = (obj, arg,  context, info: GraphQLResolveInfo) => {
    return context.db.businesses
}

export const searchBusinessByTerm = (obj, args, context, info: GraphQLResolveInfo) => {
    const compare = (a,b) => {
       const [orderField, order] = args.orderBy.split("_");
       const left = a[orderField]
       const right = b[orderField]

       if(left<right){
           return order === "asc" ? -1 : 1;
       } else if(left>right){
           return order === "desc" ? -1 : 1;
       }
       else{
           return 0;
       }
    };

    return context.db.businesses.filter(v=>{
       return  v["name"].indexOf(args.search) !== -1;
    })
    .slice(args.offset, args.first)
    .sort(compare);
}

export const userById = (obj, args, context, info: GraphQLResolveInfo) => {
    return context.db.users.filter((user: UserType)=>{
        return user.userId === args.id;
    })[0]
}

export const categories = (obj, args, context, info) => {
    return context.db.categories;
}