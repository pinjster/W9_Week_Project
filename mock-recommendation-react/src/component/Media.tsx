import { MediaType } from "../types";

export interface MediaInterface {
    item: MediaType
}

export default function Media({item}: MediaInterface){
    const {title, year, author, formatType, rating, description, img, genres} = item;

    return(
        <div className="media-component">
            <img src={img} alt={ title } className="media-img" />
            <div className="media-info">
                <p className="media-title">{ title } ({ year })</p>
                <p className="media-author">-{ author }</p>
                <p className="media-type">({ formatType })</p>
                { typeof rating !== "undefined" && <p className="media-rated">{rating}</p> }
                { typeof description !== "undefined" && <p className="media-rated">{description}</p> }
                <p>{ genres }</p>
                {/* <ul className="media-genres">
                    <li>Genres: </li>
                    { genres.map((genre, i) => <li key={i} ><a href="">#{ genre }</a></li>) }
                </ul> */}
            </div>
        </div>
    )
}