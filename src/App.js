import { Component } from "react";

import axios from 'axios';

import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config";



class App extends Component {

    state = {
        photoURLs: [],
        query: ""
    }

    getPhotos = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then( response => {
            const photosData = response.data.photos.photo;
            
            // build photo urls
            const sizeSuffix = "m";
            const photoURLs = photosData.map( photo => {
                return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeSuffix}.jpg`;
            });

            return {photoURLs, query};
        })
        .then ( ({photoURLs, query}) => {
            this.setState({
                photoURLs,
                query
            });
        })
        .catch(error => {
            console.log("Error fetching and parsing data");
        });
    }

    render() {
        return (
            <div className="container">
                <SearchForm getPhotos={this.getPhotos}/>
                <Nav getPhotos={this.getPhotos}/>
                <PhotoContainer
                    query={this.state.query}
                    photoURLs={this.state.photoURLs}
                />
            </div>
        );
    }
}

export default App;
