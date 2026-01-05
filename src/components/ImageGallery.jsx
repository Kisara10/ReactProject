import React, {useState} from "react";

const ImageGallery = ({picture}) =>{
   const [mainImage, setMainImage] = useState(picture[0]);
   const baseUrl = (window.__BASE_URL__ || "").replace(/\$/,"");

   return (
       <div className="ImageGallery">
          <div className="MainImage">    {/*Main Image*/}
             <img src={`${baseUrl}${mainImage}`} alt="property" />
          </div>

          <div className="SubImage">    {/*Sub Images*/}
             {picture.map((image, index) => (
                 <img
                 key={index}
                 src={`${baseUrl}${image}`}
                 alt="property view"
                 onClick={() => setMainImage(image)}
                 />
             ))}
          </div>

       </div>
   );
}

export default ImageGallery;