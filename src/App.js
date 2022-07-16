import React from 'react';
import Hero from './components/hero';
import Projects from './components/projects';
import CustomFooter from './components/customFooter';

function App() {
  return (
    <div className="App gradientBackground" data-theme={"valentine"}>
        
        <div className="min-w-screen">
            <Hero/>      
        </div>
      
            
        <div>
          <Projects/>
        </div>  
       
        <div>
          <CustomFooter/>
        </div>

       
        
      
      
    </div>
    
  );
}

export default App;
