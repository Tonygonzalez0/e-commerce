import React from "react";

const Contact = (props) => {
    return(
        <div>
            <form onSubmit={()=>props.handleContactAdd()}>      
                <label>First Name</label>
                <input type="text" id="firstName" name="firstName" required/>

                <label>Last Name</label>
                <input type="text" id="lastName" name="lastName" required/>

                <label>Email:</label>
                <input type="email" id="email" name="email" required/>

                <label>Comments:</label>
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Any other Comments?" required></textarea>

                <input type="submit" className='form--submit__style'/>
            </form>
        </div>
    )
};

export default Contact