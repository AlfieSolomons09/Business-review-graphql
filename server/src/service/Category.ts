import { GraphQLResolveInfo } from "graphql"
import { BusinessType } from "../types/types"


export const businesses = (obj, args, context, info: GraphQLResolveInfo) =>{
    return context.db.businesses.filter((business: BusinessType)=>{
        return business.categories.includes(obj.name)
    })
}