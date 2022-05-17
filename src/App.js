import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config";

function App() {
  return (
    <div>
      <SearchForm />
      <Nav />
      <h3>{apiKey}</h3>
      <PhotoContainer />
    </div>
  );
}

export default App;
