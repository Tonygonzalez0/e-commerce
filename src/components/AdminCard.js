import React from 'react';

const AdminCard =(props)=>{
    return(
        <div className='card--container'>
            <h1 className='card--title__style'>{props.title}</h1>
            <img className='card--img__style' src={props.productImages} alt="test" />
            <p className='card--price__style'>${props.price}</p>
            <p className='card--info__style'>{props.description}</p>
            <i className="far fa-edit card--edit__style" onClick={(event)=>props.toggleEditModal(props._id,event)} ></i>
            <i className="fas fa-trash-alt card--delete__style" onClick={()=>props.handleDelete(props._id)}></i>
        </div>
    )
};

export default AdminCard;