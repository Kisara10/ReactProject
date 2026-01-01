import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar.jsx";

const SearchPage = () => {

    const [properties, setProperties] = useState([]);
    const [filter, setFilter] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const response = await fetch("/properties(1).json");
            const data = await response.json();
            setProperties(data.properties);
            setFilter(data.properties);
        };
        fetchProperties();
    }, []);

    const handleSeacrch = (filters) => {
        setFilter(properties);
    };

    {/*Add to favourites */}
    const addToFavorites = (property) => {
        if (!favorites.find(fav => fav.id === property.id)) {
            setFavorites([...favorites, property]);
        }
    };

    const removeFromFavorites = (property) => {
        setFavorites(favorites.filter(fav => fav.id === property.id));
    };

    const clearFavorites = () => {
        setFavorites([]);
    }


    return (
        <div className="search-page">
            <header className="header">
                <h1>Property Search</h1>
                <h3>Welcome to Property Search we will help you to find your dream house </h3>
            </header>

            <div className=""></div>
            <SearchBar />
        </div>
    )
}

export default SearchPage;