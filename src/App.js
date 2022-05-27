import { Component } from "react";
import { 
    BrowserRouter,
    Routes,
    Route 
} from "react-router-dom";

import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import PageNotFound from "./components/PageNotFound";

import axios from 'axios';
import apiKey from "./config";

class App extends Component {

    state = {
        photoURLs: [],
        processingFetch: true,
    }

    getPhotoURLs = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then( response => {
            const photosData = response.data.photos.photo;
        
            // build photo urls
            const photoURLs = photosData.map( photo => {
                return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
            });

            return photoURLs;
        })
        .then ( photoURLs => {
            this.setState({
                photoURLs: photoURLs,
                processingFetch: false
            });
        })
        .catch(err => {
            console.log("Could not fetch data");
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm />
                    <Nav />
                    <Routes>
                        <Route path="/" element={null}/>
                        <Route path="/search/:query" element={<PhotoContainer getPhotoURLs={this.getPhotoURLs} results={this.state} />} />
                        <Route path="/:query" element={<PhotoContainer getPhotoURLs={this.getPhotoURLs} results={this.state} />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
