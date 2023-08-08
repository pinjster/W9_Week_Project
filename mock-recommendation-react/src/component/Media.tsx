import MediaInterface from "../interfaces/MediaInterface";

export default function Media({item}: MediaInterface){
    const {title, year, author, format, rated, body, img, genres} = item;

    return(
        <div className="media-component">
            <img src={img} alt={ title } className="media-img" />
            <div className="media-info">
                <p className="media-title">{ title } ({ year })</p>
                <p className="media-author">-{ author }</p>
                <p className="media-type">({ format })</p>
                { typeof rated !== "undefined" && <p className="media-rated">{rated}</p> }
                { typeof body !== "undefined" && <p className="media-rated">{body}</p> }
                <ul className="media-genres">
                    <li>Genres: </li>
                    { genres.map((genre, i) => <li key={i} ><a href="">#{ genre }</a></li>) }
                </ul>
            </div>
        </div>
    )
}