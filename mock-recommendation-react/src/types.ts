
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
    format: mediaFormat,
    author: string,
    rated?: number,
    body?: string,
    img: string,
    genres: string[]
}
