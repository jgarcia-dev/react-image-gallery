import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {

    const query = useParams().query;
    const { photoURLs, processingFetch } = props.results;
    const { getPhotoURLs } = props
    
    useEffect(()=> {
        getPhotoURLs(query)
    }, [query, getPhotoURLs]);

    return (
        <div className="photo-container">
            { processingFetch
            ? <p>Loading...</p>
            : (photoURLs.length > 0)
                ? <>
                    <h2>{query}</h2>
                    <ul>
                        {
                            photoURLs.map( (photoURL, index) => {
                                return (
                                    <Photo
                                        photoURL={photoURL}
                                        key={index.toString()}
                                    />
                                );
                            })
                        }
                    </ul>
                </>
                : <ul><NotFound /></ul>
            }
        </div>
    )
}; 

export default PhotoContainer;