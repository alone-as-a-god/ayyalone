import React from 'react';
import Hero from './components/hero';
import Projects from './components/projects';
import Socials from './components/socials';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, StickyIn, FadeIn, ZoomIn} from "react-scroll-motion";
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
          <Animator >
             <h1 class="text-5xl font-bold pt-20 pl-20 "> Check out some of my Projects </h1>
             
          </Animator>
          <Projects/>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator>
             
          </Animator>
        </ScrollPage>
        
      </ScrollContainer>
      <CustomFooter/>
      
    </div>
    
  );
}

export default App;
