import React from 'react';
import Typewriter from 'typewriter-effect';

function Hero(){
    return <div class="hero min-h-screen min-w-screen">
                <div class="hero-content text-center flex flex-col">
                    <div class="max-w-full">
                        <h1 class="text-8xl font-bold ">Hi! I am <Typewriter class="bg-primary-content" options={{
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
                    <div class="mockup-code text-left m-6">
                        <pre data-prefix=">"><code>I am Jonathan Seyr, a 20-year old Software Developer based in Vienna, Austria</code></pre> 
                        <pre data-prefix=">"><code>I'm currently studying Media Informatics and Visual Computing</code></pre> 
                        <pre data-prefix=">"><code>at Technical University Vienna. </code></pre>
                        <pre data-prefix=">"><code>On this website you'll be able to find some of my current and past projects </code></pre>
                        <pre data-prefix=">"><code>but please be aware, that especially the older projects are not reflecting my</code></pre>
                        <pre data-prefix=">"><code>skillset properly, as I just host them on here for the fun of it :) </code></pre>
                    </div>
                </div>
            </div>
}

export default Hero;