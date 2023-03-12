
import './App.css';
import {Head, Foot} from './Header';
import MovieCard from './MovieCard';
function App() {
  return (
    <div className="App">
      <Head  />

      <div className='main'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        {/* <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </div>
      <Foot />
        
    </div>
  );
}

export default App;
