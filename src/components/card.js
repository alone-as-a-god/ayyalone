import React from "react";

function Card(props){
    return(
    <a href={props.link} target="_blank" rel="noreferrer">
    <div className="card bg-primary lg:min-w-full lg:min-h-full lg:h-72 m-5 lg:w-96 lg:bg-secondary shadow-xl m-0 ">
        <figure><img src={props.image} alt="" /></figure>
        <div className="badge badge-secondary absolute top-0 right-0 mt-5 mr-5">NEW</div>
        <div className="card-body p-6">
            <h2 className="card-title"> {props.title}
                
            </h2>
           
            <div className="card-actions absolute bottom-0 right-0 mb-5 mr-5">
                
               
            </div>
        </div>
    </div>
    </a>
    )
}

export default Card;