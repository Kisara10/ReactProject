import React from "react";

const PropertyCard = ({property}) => {

    const {type,bedrooms, tenure, picture, location, added} = property;
    const firstPicture = picture[0];
    const pictureName = firstPicture.split("/").pop();
    return (

        <section>
            <img src={firstPicture} alt={pictureName}/>
            <h3>Type: {type}</h3>
            <h3>Bedrooms: {bedrooms}</h3>
            <h4>Tenure: {tenure}</h4>
            <h4>Location: {location}</h4>
            <h4>Added: {added.month} {added.day}, {added.year}</h4>
            <button>Add to Favourites</button>
        </section>
    );
}

export default PropertyCard;