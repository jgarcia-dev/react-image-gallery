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
      <PhotoContainer />
    </div>
  );
}

export default App;
