import './App.css';
import dataArr from './data.js';
import HeaderComponent from './components/HeaderComponent.js';
import GalleryComponent from './components/GalleryComponent.js';


// Munges dataArr into an array of unique keywords
const keywordArr = dataArr.map((dataObj) => dataObj.keyword);
const uniqueKeywordArr = keywordArr.filter((item, index) => keywordArr.indexOf(item) === index);


// App Function
function App() {
  return (
    <>
      <HeaderComponent />
      <GalleryComponent />
    </>
  );
}
export default App;