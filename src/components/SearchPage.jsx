import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar.jsx";
import PropertyList from "./PropertyList.jsx";
import FavouriteList from "./FavouriteList.jsx";

const SearchPage = () => {

    const [properties, setProperties] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        fetch("/properties(1).json")
            .then(res => res.json())
            .then(data =>{
                setProperties(data.properties);
                setFiltered(data.properties);
        });
    }, []);

    /* Search function, search properties based on searchers */
    const handleSearch = (filters) => {
        const result = properties.filter(property =>{

            if (filters.type !== "any" && property.type !== filters.type) {
                return false;
            }

            if (filters.minPrice && property.price < Number(filters.minPrice)) {
                return false;
            }

            if (filters.maxPrice && property.price > Number(filters.maxPrice)){
                return false;
            }

            if (filters.bedrooms && property.bedrooms < Number(filters.bedrooms)){
                return false;
            }

            return true;
        });

        setFiltered(result);
    };

    /* Add to favourites */
    const addToFavourites = (property) => {
        /* Check if property already in favourites */
        if (!favourites.find(fav => fav.id === property.id)) {
            setFavourites([...favourites, property]);
        }
    };

    /* Remove form favourites */
    const removeFromFavourites = (id) => {
        setFavourites(favourites.filter(fav => fav.id !== id));
    };

    /* Clear all favourites */
    const clearFavourites = () => {
        setFavourites([]);
    };

    return (
        <div className="search-page">
            <header className="header">
                <h1>Property Search</h1>
                <h3>Welcome to Property Search we will help you to find your dream house </h3>
            </header>

            <div className="main-content">
                <SearchBar onSearch={handleSearch} />

                <PropertyList
                    properties={filtered}
                    onAddToFavourites={addToFavourites}/>

                <FavouriteList
                    favourites={favourites}
                    onRemove={removeFromFavourites}
                    onClear={clearFavourites}/>

            </div>
        </div>
    );
}

export default SearchPage;