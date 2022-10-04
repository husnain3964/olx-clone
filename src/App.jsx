import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './external/search';
import Data  from './external/data'
function App() {
  return (
    <div className="App">
      <h1>search filter</h1>
      <Search />
      



      <section className='py-4 container' >
      
        <div className='row justify-content-center' >
      
    {/* functionality */}  
        
            {Data.cardData.map((item,index) =>{

           

          <div className='col-11  col-md-6  col-lg-3 mx-0 mb-4' >
      
            <div className='card p-0 over-flow hidden h-100 shadow'>
      
              <img src= {item.img}   className='card-img-top' alt="" />
      
              <div className='card-body' >
      
                <h5 className='card-title' > {item.title}  </h5>
      
                <p className='class-text' > {item.desc} </p>


              </div>
            </div>
          </div>
       })}
      </div>
      
      </section>



    </div>
  );
}

export default App;
