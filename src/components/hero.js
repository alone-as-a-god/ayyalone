import React from 'react';
import {useRef, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import "../index.css"
import Socials from './socials';

function Hero(){

    const ref = useRef(null);

    useEffect(() => {
        function scrollHandler(){
            
            const element = ref.current;
            if(element != null){
                var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
                var elementHeight = element.offsetHeight;
                var scrollTop = document.documentElement.scrollTop;

                var opacity = 1;
                if(scrollTop > distanceToTop){
                    opacity = 1 - (scrollTop - distanceToTop) / elementHeight*2;
                }
                if(opacity > 1){
                    opacity = 1;
                }

                if(opacity <= 0.06){
                    opacity = 0;
                }

                if(opacity >= 0){
                    element.style.opacity = opacity;
                    console.log("1 - (" + scrollTop + " - " + distanceToTop + ") / " + elementHeight + " * 2 = " + opacity);
                    element.style.transform = "translate(0px, "+(1-opacity) * 400+"px)";
                }
            }
        }
        window.addEventListener("scroll", scrollHandler);
    }, []);
    

    


    return <div className="hero min-h-screen min-w-screen" ref={ref}>
                <div className="hero-content text-center flex flex-col">
                    <div className="max-w-full align-self-center">
                        <h1 className="xl:text-8xl md:text-7xl text-5xl font-bold textsheesh">Hi! I am <Typewriter className="bg-primary-content textsheesh" options={{
                            loop: true,
                        }} onInit={(typewriter) => {
                            typewriter.typeString("alone as a god")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("alone")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("an egirl")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                        }} /></h1>
                    </div>
                    <p className="py-6 w-10/12 textsheesh">I am Jonathan Seyr, a 20-year old Software Developer based in Vienna, Austria. I'm currently studying Media Informatics and Visual Computing at Technical University Vienna. On this website you'll be able to find some of my current and past projects but please be aware that especially the older projects are not reflecting my skillset properly, as I just host them on here for the fun of it :) </p>
                    <Socials/>
                </div>
                
            </div>
}

export default Hero;