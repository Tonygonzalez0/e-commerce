import React from 'react';

const ContactCard =(props)=>{
    return(
        <div className='card--container'>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.email}</p>
            <p>{props.comment}</p>
        </div>
    )
};

export default ContactCard;