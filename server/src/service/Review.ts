import { GraphQLResolveInfo } from "graphql";
import { BusinessType, DatabaseType, ReviewType, UserType } from '../types/Types.js'


export const User = (obj: UserType, args: any, context: {db: DatabaseType}, info: GraphQLResolveInfo) => {
    return context.db.users.find((user: UserType) => {
        return user.userId === obj.userId;
    });
}

export const Business = (obj: any, args: any, context: any, info: GraphQLResolveInfo) => {

}