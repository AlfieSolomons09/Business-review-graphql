import { GraphQLResolveInfo } from "graphql"
import { ArgsType, BusinessType, CategoryType, DatabaseType } from "../types/Types.js"


export const businesses = (obj: CategoryType, args: ArgsType, context: {db: DatabaseType}, info: GraphQLResolveInfo) =>{
    return context.db.businesses.filter((business: BusinessType)=>{
        return business.categories.includes(obj.name)
    })
}