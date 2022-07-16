import React from "react";

function Card(props){
    return(
    <a href={props.link} target="_blank" rel="noreferrer">
    <div class="card bg-primary lg:min-w-full lg:min-h-full lg:h-72 m-5 lg:w-96 lg:bg-secondary shadow-xl m-0 ">
        <figure><img src={props.image} alt="" /></figure>
        <div class="badge badge-secondary absolute top-0 right-0 mt-5 mr-5">NEW</div>
        <div class="card-body p-6">
            <h2 class="card-title"> {props.title}
                
            </h2>
            {/* <p class="p-">{props.desc}</p> */}
            <div class="card-actions absolute bottom-0 right-0 mb-5 mr-5">
                {/* <a href={props.link} target="_blank" rel="noreferrer">
                    <div class="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-sky-600 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500"><span class="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">Go There!</span></div>
                </a> */}
               
            </div>
        </div>
    </div>
    </a>
    )
}

export default Card;