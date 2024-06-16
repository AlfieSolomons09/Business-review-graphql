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
    reviews: ReviewType[];
    categories: CategoryType[]
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
    businesses: BusinessType[]
}
