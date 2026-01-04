import React, {useState} from "react";

const ImageGallery = ({picture}) =>{
   const [mainImage, setMainImage] = useState(picture[0]);

   return (
       <div className="ImageGallery">
          <div className="MainImage">    {/*Main Image*/}
             <img src={mainImage} alt="property" />
          </div>

          <div className="SubImage">    {/*Sub Images*/}
             {picture.map((image, index) => (
                 <img
                 key={index}
                 src={`${import.meta.env.BASE_URL}${image}`}
                 alt="property view"
                 onClick={() => setMainImage(image)}
                 />
             ))}
          </div>

       </div>
   );
}

export default ImageGallery;