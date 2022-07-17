import React from 'react';
import Card from './card';
import "../index.css"

function Projects() {



  return (
    <div className="p-8 lg:p-24 mb-80">
      <h1 className="text-7xl font-bold pb-12 textsheesh"> Check out some of my Projects </h1>
      <div className="flex flex-wrap flex-col gap-4 w-full lg:flex-row">
        <div className="grid  h-100 card bg-base-300 rounded-box place-items-center"><Card link="https://youtu.be/xE7jd9wRN-Y" title="24/7 Square Enix Lofi Livestream" desc="" image="https://i.ytimg.com/vi/wdokg_A8tOM/maxresdefault.jpg" /></div> 
        <div className="grid  h-100 card bg-base-300 rounded-box place-items-center"><Card link="http://gzuz.ayyalone.lol" title="GZUZ Clicker" desc="" image="https://image.stern.de/9433132/t/Rb/v5/w1440/r1.7778/-/gzuz-aktuell.jpg" /></div>
        <div className="grid  h-100 card bg-base-300 rounded-box place-items-center"><Card link="https://youtu.be/xE7jd9wRN-Y" title="24/7 Square Enix Lofi Livestream" desc="" image="https://i.ytimg.com/vi/wdokg_A8tOM/maxresdefault.jpg" /></div> 
        <div className="grid  h-100 card bg-base-300 rounded-box place-items-center"><Card link="http://gzuz.ayyalone.lol" title="GZUZ Clicker" desc="" image="https://image.stern.de/9433132/t/Rb/v5/w1440/r1.7778/-/gzuz-aktuell.jpg" /></div>
      </div>
        
        
        
        
    </div>
  );
}

export default Projects;