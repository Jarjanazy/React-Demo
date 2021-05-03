import './App.css';

import MovieList from  './domain/MovieTable'
import NewsLetterSubscription from './domain/NewsletterSubscription';


function App() {
  return (
    <div className="App">
     <MovieList/>
     <NewsLetterSubscription/>
    </div>
  );
}

export default App;
