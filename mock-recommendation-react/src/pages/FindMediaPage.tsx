import { useParams } from "react-router-dom"
import Body from "../component/Body"
import { MOVIE_ACCESS_TOKEN } from "../secret"
import { MediaType, mediaFormat } from "../types"
import Media from "../component/Media"
import { useEffect, useState } from "react"

const movieApiUrl = import.meta.env.VITE_APP_MOVIE_API

export default function FindMediaPage() {
    
    const { title } = useParams()
    const [items] = useState<Array<MediaType>>([])

    useEffect(() => {
        (async () => {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`
                }
              };
              
            const res = await fetch(`${movieApiUrl}3/search/movie?query=${title}&language=en-US&page=1`, options)
            if(res.ok){
                const data = await res.json()
                dataToItems(data);
            } else {
                window.alert('Boooo')
            }
        })();
    }, [])

    function dataToItems(data: any){
        for(let i = 0; i < data.results.length; i++){
            let newItem: MediaType = {
                title: data.results[i].original_title,
                year: data.results[i].release_date,
                format: mediaFormat.movie,
                author: '',
                rated: data.results[i].vote_average.toString(),
                body: data.results[i].overview,
                img: data.backdrop_path,
                genres: ['', '']
            }
            items.push(newItem);
        }
    }

    return(
        <Body navbar={true}>
            <h1>Looking for.. {title}</h1>
            <div>
                { items.map((item) => <Media item={item}/>)}
            </div>
        </Body>
    )
};
