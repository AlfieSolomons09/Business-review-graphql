import { GraphQLResolveInfo } from "graphql"
import { ArgsType, BusinessType, DatabaseType, UserType } from "../types/Types.js";

export const allBusinesses = (obj: any, arg: any,  context: {db: DatabaseType}, info: GraphQLResolveInfo) => {
    return context.db.businesses
}

export const searchBusinessByTerm = (obj: any, args: ArgsType, context: {db: DatabaseType}, info: GraphQLResolveInfo): BusinessType[] => {
    const compare = (a: BusinessType,b: BusinessType) => {
       const [orderField, order] = args.orderBy.split("_");
       const left = a[orderField as keyof BusinessType]
       const right = b[orderField as keyof BusinessType]

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

export const userById = (obj: any, args: ArgsType, context: {db: DatabaseType}, info: GraphQLResolveInfo) => {
    return context.db.users.filter((user: UserType)=>{
        return user.userId === args.id;
    })[0]
}

export const categories = (obj: any, args: any, context: {db: DatabaseType}, info: GraphQLResolveInfo) => {
    return context.db.categories;
}