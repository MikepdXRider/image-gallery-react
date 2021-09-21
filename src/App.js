import './App.css';
import React, { Component } from 'react'
import dataArr from './data.js';
// import HeaderComponent from './components/HeaderComponent.js';
// import GalleryComponent from './components/GalleryComponent.js';


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


// Header Component
class HeaderComponent extends Component {
  render() {
      return (
          <header className='flex-container'>
              <h1>Horned Creatures Club</h1>
          </header>
      )
    }
  }
  

// Gallery Component
class GalleryComponent extends Component {
    // Creates state
    state = {
        keyword: ''
    }
    
    // Handles selectio change - used on line 28
    handleSelectionChange = (e) => {
        this.setState({keyword: e.target.value})
    }

    // Render method
    render() {
        return (
           <main className='main-flex-container'>
               {/* 🤷‍♀️ FilterListCompoenent?? */}
                    <div className='flex-container'>
                        <h4>Filter:</h4>
                        <select onChange={this.handleSelectionChange}>
                            <option value=''>Show All Horned Createures</option>
                            {
                                uniqueKeywordArr.map((keyword) => {
                                    return(
                                        <option key={`${keyword}`} value={`${keyword}`}>{keyword}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
               {/* 🤷‍♀️  */}
                <ImageListComponent
                keyword={this.state.keyword}
                />
           </main>
        )
    }
}


// Image List Component
class ImageListComponent extends Component {
  render() {
      return (
              <div className='flex-container'>
                  <ul className='image-galley'>
                      {
                          dataArr.filter((dataObj) => {
                            return this.props.keyword === '' ? true : dataObj.keyword === this.props.keyword
                          })
                          .map((dataObj) => {
                              return(
                                  <li key={`${dataObj.id}`} className='main-flex-container'>
                                      <h4>{`${dataObj.title}`}</h4>
                                      <img src={`${dataObj.url}`} alt={`${dataObj.title}`}/>
                                      <p>{`${dataObj.description}`}</p>
                                      <p>The {`${dataObj.title}`} has {`${dataObj.horns}`} horn(s)</p>
                                  </li>
                              )
                          })
                      }
                  </ul>
              </div>
      )
  }
}