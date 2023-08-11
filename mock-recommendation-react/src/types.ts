
export enum mediaFormat {movie = "movie", album = "album", book = "book", show = "show"};

export type CurrentUser = {
    logged: boolean,
    username: string,
    token: string
}

export type UserType = {
    username: string,
    email: string,
    password: string,
    joined: string | Date
}

export type MediaType = {
    title: string,
    year: string,
    formatType: mediaFormat,
    author: string,
    rating?: number,
    description?: string,
    img: string,
    genres: string[]
    mediaID?: string,
    secondID?: string,
}

export interface MediaCollection {
    collection: MediaType[]
}