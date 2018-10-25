import React from 'react';

const EditModalCard =(props)=>{
    const {items} = props;
    return(
        <div id={items.productId} className= 'modal--style'>
            <div className = 'modal--content__style'>
            <span className="close--stlye" onClick={()=>props.toggleEditModal(items.productId)}>&times;</span>
                <form  onSubmit={(event)=>props.handleEdit(items.productId,event)}>       
                    <label>Title</label>
                    <input type="text" id="edit-title" name="editTitle"/>

                    <label>Image</label>
                    <input type="text" id="edit-image" name="editImage"/>

                    <label>Price</label>
                    <input type="text" id="edit-price" name="editPrice"/>

                    <label>Info</label>
                    <input type="text" id="edit-info" name="editInfo"/>

                    <label>Product Category</label>
                    <input type="text" id="edit-productCategory" name="editProductCategory"/>

                    <input type="submit" className='form--submit__style'/>
                </form>
            </div>
        </div>
    )
};

export default EditModalCard;