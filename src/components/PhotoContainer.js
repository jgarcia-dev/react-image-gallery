import Photo from "./Photo";

const PhotoContainer = (props) => (
    <div className="photo-container">
        <h2>{props.query}</h2>
        <ul>
            {
                props.photoURLs.map( (photoURL, index) => {
                    return (
                        <Photo
                            photoURL={photoURL}
                            key={index.toString()}
                        />
                    );
                })
            }
        </ul>
    </div>
); 

export default PhotoContainer;