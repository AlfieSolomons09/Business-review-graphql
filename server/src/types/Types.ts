export type UserType = {
    userId: string;
    name: string;
    photos: PhotoType[];
    reviews: ReviewType[];
};

export type BusinessType = {
    businessId: string;
    name: string;
    address: string;
    avgStars: number;
    photos: PhotoType[];
    reviewIds: ReviewType[];
    categories: string[]
};

export type PhotoType = {
    business: BusinessType;
    user: UserType;
    photoId: string;
    url: string;
};

export type ReviewType = {
    reviewId: string;
    stars: number;
    text: string;
    userId: string;
    business: BusinessType;
};

export type CategoryType = {
    name: string,
    businesses?: BusinessType[]
}

export type DatabaseType = {
    businesses: BusinessType[];
    reviews: ReviewType[];
    categories: CategoryType[];
    users: UserType[];
}

export type ArgsType = {
    id: string
    search: string
    first: number
    offset: number
    orderBy: string
}
