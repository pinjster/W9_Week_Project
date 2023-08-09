import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function Searchbar() {
    const navigate = useNavigate()
    
    const searchField = useRef<HTMLInputElement>(null);
    function enterSearch(e: FormEvent) {
        e.preventDefault();
        navigate('/search-media/' + searchField.current!.value)
    }


    return (
        <form onSubmit={enterSearch} className="searchbar">
            <input type="text" ref={ searchField } />
            <input type="submit" value="Search" />
        </form>
    )
};
