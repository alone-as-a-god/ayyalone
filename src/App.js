import React from 'react';
import Hero from './components/hero';
import Projects from './components/projects';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, MoveIn} from "react-scroll-motion";
import CustomFooter from './components/customFooter';

function App() {
  return (
    <div className="App gradientBackground" data-theme={"synthwave"}>
      
      <ScrollContainer>
        <ScrollPage page={0}>
          <div className="min-w-screen">
          <Animator className="p-100" animation={batch(Sticky(), Fade(), MoveOut(0, -400))}>
            
              <Hero/>
             
          </Animator>
          
          </div>
        </ScrollPage>

        <ScrollPage page={1}>
          
             <h1 class="text-7xl font-bold pt-20 pl-20 "> Check out some of my Projects </h1>
             
          <Animator animation={MoveIn(-2000, 0)}>
            <Projects/>
          </Animator>
          <Animator animation={batch(MoveIn(-2000,0), MoveOut(2000, 0))}>
            <img src="https://uploads.twitchalerts.com/000/106/066/010/ClownRoll.gif" style={{width:"48px", height:"48px"}} alt="kekW" />
          </Animator>
          
        </ScrollPage>
        <ScrollPage page={2}>
          
        </ScrollPage>
        
      </ScrollContainer>
      <CustomFooter/>
      
    </div>
    
  );
}

export default App;
