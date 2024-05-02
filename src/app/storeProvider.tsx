import React from "react";

import {useGetSpecialtiesQuery} from "@/store/product/product.api";
import "./styles.css";

const HomeContent: React.FC = () => {
    const {data, error, isLoading} = useGetSpecialtiesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    if (!data) return <div>No data available</div>;


    return (
        <div className="main">
            {data.map((item) => (
                <p key={item.id}>{item.title}</p>
                // <div className="cover" key={item.id}>
                //     <h1>{item.name}</h1>
                //     <p>{item.question}</p>
                //     {item.listingResults.map((listingResult, index) => (
                //         <div className="box" key={index}>
                //             <h1>Option: {listingResult.option}</h1>
                //             <p>Price: {listingResult.info.price}</p>
                //             <p>Title: {listingResult.info.title}</p>
                //             <p>Brand: {listingResult.info.brandName}</p>
                //             <p>List Price: {listingResult.info.listPrice}</p>
                //             <p>Review Count: {listingResult.info.reviewCount}</p>
                //             <p>Review Rating: {listingResult.info.reviewRating}</p>
                //             <div className="img_cover">
                //                 {listingResult.images.map((image, imgIndex) => (
                //                     <div key={imgIndex}>
                //                         <img className="img" src={image.src} alt={`Image ${imgIndex}`}/>
                //                         <p>Option: {image.option}</p>
                //                     </div>
                //                 ))}
                //             </div>
                //         </div>
                //     ))}
                // </div>
            ))}
        </div>
    );
};

export default HomeContent;