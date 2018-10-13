import React from 'react';

const AddModalCard =(props)=>{

    return(
        <div id='Add-modal' className= 'modal--style'>
            <div className = 'modal--content__style'>
            <span className="close--stlye" onClick={()=>props.toggleAddModal()}>&times;</span>
                <form 
                onSubmit={(e)=>{props.handleAdd(e)}}>       
                    <label>Title</label>
                    <input type="text" id="add-title" name="title"/>

                    <label>Image</label>
                    <input type="text" id="add-image" name="image"/>

                    <label>Price</label>
                    <input type="text" id="add-price" name="price"/>

                    <label>Info</label>
                    <input type="text" id="add-info" name="info"/>

                    <label>Product Category</label>
                    <input type="text" id="add-productCategory" name="productCategory"/>

                    <input type="submit" className='form--submit__style'/>
                </form>
            </div>
        </div>
    )
};

export default AddModalCard;