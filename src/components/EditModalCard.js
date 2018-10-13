import React from 'react';

const EditModalCard =(props)=>{
    const {items} = props;
    return(
        <div id={items._id} className= 'modal--style'>
            <div className = 'modal--content__style'>
            <span className="close--stlye" onClick={()=>props.toggleEditModal(items._id)}>&times;</span>
                <form  onSubmit={(event)=>props.handleEdit(items._id,event)}>       
                    <label>Title</label>
                    <input type="text" id="edit-title" name="title"/>

                    <label>Image</label>
                    <input type="text" id="edit-image" name="image"/>

                    <label>Price</label>
                    <input type="text" id="edit-price" name="price"/>

                    <label>Info</label>
                    <input type="text" id="edit-info" name="info"/>

                    <label>Product Category</label>
                    <input type="text" id="edit-productCategory" name="productCategory"/>

                    <input type="submit" className='form--submit__style'/>
                </form>
            </div>
        </div>
    )
};

export default EditModalCard;