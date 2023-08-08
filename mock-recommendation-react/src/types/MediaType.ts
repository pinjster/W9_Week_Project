
enum mediaFormat {movie = "movie", album = "album", book = "book", show = "show"};

type MediaType = {
    title: string,
    year: number,
    format: mediaFormat,
    author: string,
    rated?: number,
    body?: string,
    img: string,
    genres: string[]
}

const show: MediaType = {title: 'Breaking Bad', year: 2008, format: mediaFormat.show, author: "Vince Gilligan", img: '', genres: ['drama', 'western'] };
const movie: MediaType = {title: "Fight Club", year: 1999, format: mediaFormat.movie, author: "David Fincher", img: '', genres: ['thriller', 'twist'] };
const book: MediaType = {title: "American Animals", year: 2018, format: mediaFormat.book, author: "Eric Borsuk", img: '', genres: ['true crime', 'thriller']};
const album: MediaType = {title: "The Good, The Bad, The Ugly: OST", year: 1967, format: mediaFormat.album, author: "Ennio Morricone", img: '', genres: ['western', 'soundtrack']};

const allItems: MediaType[] = [show, movie, book, album];

export default MediaType
export {
    show,
    movie,
    book,
    album,
    allItems
}