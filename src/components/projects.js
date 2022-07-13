import React from 'react';
import Card from './card';

function Projects() {
  return (
    <div className="p-48 flex">
        <Card link="https://www.twitch.tv/senor_iship" title="24/7 Square Enix Lofi Livestream" desc="" image="https://i.ytimg.com/vi/wdokg_A8tOM/maxresdefault.jpg" />
        <Card link="http://gzuz.ayyalone.lol" title="GZUZ Clicker" desc="" image="https://image.stern.de/9433132/t/Rb/v5/w1440/r1.7778/-/gzuz-aktuell.jpg" />
        
    </div>
  );
}

export default Projects;