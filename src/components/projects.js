import React from 'react';
import Card from './card';
import CardAlt from './cardAlt';

function Projects() {
  return (
    <div className="p-32 flex gap-2">
      <div class="flex flex-col w-full lg:flex-row">
        <div class="grid  h-100 card bg-base-300 rounded-box place-items-center"><Card link="https://www.youtube.com/watch?v=vWEmaCl0UpE" title="24/7 Square Enix Lofi Livestream" desc="" image="https://i.ytimg.com/vi/wdokg_A8tOM/maxresdefault.jpg" /></div> 
        <div class="divider lg:divider-horizontal"></div> 
        <div class="grid  h-100 card bg-base-300 rounded-box place-items-center"><Card link="http://gzuz.ayyalone.lol" title="GZUZ Clicker" desc="" image="https://image.stern.de/9433132/t/Rb/v5/w1440/r1.7778/-/gzuz-aktuell.jpg" /></div>
        <div class="divider lg:divider-horizontal"></div> 
        <div class="grid  h-100 card bg-base-300 rounded-box place-items-center"><Card link="https://www.youtube.com/watch?v=vWEmaCl0UpE" title="24/7 Square Enix Lofi Livestream" desc="" image="https://i.ytimg.com/vi/wdokg_A8tOM/maxresdefault.jpg" /></div> 
        <div class="divider lg:divider-horizontal"></div> 
        <div class="grid  h-100 card bg-base-300 rounded-box place-items-center"><Card link="http://gzuz.ayyalone.lol" title="GZUZ Clicker" desc="" image="https://image.stern.de/9433132/t/Rb/v5/w1440/r1.7778/-/gzuz-aktuell.jpg" /></div>
        <div class="divider lg:divider-horizontal"></div> 
      </div>
        
        
        
        
    </div>
  );
}

export default Projects;