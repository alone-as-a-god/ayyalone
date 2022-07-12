import React from 'react';
import Typewriter from 'typewriter-effect';

function Hero(){
    return <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-xl">
                        <h1 class="text-5xl font-bold">Hello there <Typewriter options={{
                            loop: true,
                        }} onInit={(typewriter) => {
                            typewriter.typeString("I'm alone as a god")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("I'm alone")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("I'm clinically depressed")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                        }} /></h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
}

export default Hero;