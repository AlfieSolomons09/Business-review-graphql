import { GraphQLResolveInfo } from "graphql";
import { BusinessType, ReviewType, UserType } from '../types/types.js'


export const User = (obj, args, context, info: GraphQLResolveInfo) => {
    return context.db.users.find((user: UserType) => {
        return user.userId === obj.userId;
    });
}

export const Business = (obj, args, context, info: GraphQLResolveInfo) => {

}