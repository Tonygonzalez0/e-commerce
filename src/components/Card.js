import React from 'react';


const Card =(props)=>{
    return(
        <div className="row__content">       
            <h1>{props.title}</h1>
            <img src={props.productImages} alt="Smiley face" className='img--moblie__resize'/>
            <p className='row--description__style'>{props.description}</p>
            <p className='row--price__style'>${props.price}</p>
            <button className='row--button__style'>Add to Cart</button>
        </div>
    )
};

export default Card;