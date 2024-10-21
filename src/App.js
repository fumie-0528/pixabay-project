
import './App.css';
import ImageGallery from './ImageGallery';
import {useRef, useState} from 'react';

function App() {
const [fetchData, setFetchData] = useState([]);
const ref = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(ref.current.value);

  const endpointURL=`https://pixabay.com/api/?key=46399747-f874a1c505553e1c692356fe6&q=${ref.current.value}&image_type=photo`;
  fetch(endpointURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.hits);
      setFetchData(data.hits);
    });
};

  return (
    <div className="container">
      <h2>Find Your Favorite Picture</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Search your picture" ref={ref}/>     
      </form> 
      <ImageGallery fetchData={fetchData}/>
    </div>
  );
}

export default App;
