import React from "react";

function Card(props){
    return(
    <div class="card m-4 w-96 bg-base-100 shadow-xl m-0">
        <figure><img src={props.image} alt="" /></figure>
        <div class="card-body">
            <h2 class="card-title"> {props.title}
                <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>{props.desc}</p>
            <div class="card-actions justify-end">
                <a href={props.link} target="_blank" rel="noreferrer"> <button class="btn btn-primary">Go There!</button></a>
               
            </div>
        </div>
    </div>
    )
}

export default Card;