import React from "react";

function CardAlt(props){
    return(
        <a class="block" href="">
        <img
            class="object-cover w-full h-56 shadow-xl rounded-xl"
            src={props.image}
            alt=""
        />

        <div class="p-4">
            <h5 class="text-xl font-bold text-gray-900">
            {props.title}
            </h5>
            <div class="card-actions justify-end">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <div class="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500"><span class="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">Go There!</span></div>
                </a>
               
            </div>
        </div>
        </a>
    )
}

export default CardAlt;