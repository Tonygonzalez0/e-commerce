import React from "react";
import AdminCard from './AdminCard';
import ContactCard from './ContactCard';
import EditModalCard from "./EditModalCard";
import AddModalCard from "./AddModalCard";


const Admin = (props) =>{
    const itemList = props.items.map(List => {
    return (
        <div key={List._id}>
        <AdminCard
        items = {props.items}
        _id = {List._id}
        title = {List.title}
        description = {List.description}
        productImages = {List.productImages}
        price = {List.price}
        handleEdit = {props.handleEdit}
        handleDelete = {props.handleDelete}
        toggleEditModal = {props.toggleEditModal}
        />
        <EditModalCard
        items = {List}
        handleEdit = {props.handleEdit}
        toggleEditModal = {props.toggleEditModal}
        />
        </div>
    )
    })

    const contactList = props.contactData.map(List =>{
        return (
            <div key={List._id}>
            <ContactCard
           firstName = {List.firstName}
           lastName = {List.lastName}
           email = {List.email}
           comment = {List.comment}
            />
            </div>
        )
    })

    return(
        <div clashandletoggleNavMenusName='main--container'>
            <button onClick= {()=>props.handletoggleAdminPage()} className = "admin--button__style">Switch pages from Product/Contact</button>
            { props.toggleAdminPageStatus === true &&
                <div>
                    <div>
                        <button onClick = {()=>props.toggleAddModal()} className = "admin--button__style">Add a Product</button>
                            <AddModalCard
                            toggleAddModal = {props.toggleAddModal}
                            handleAdd = {props.handleAdd}
                        />
                    </div>
                    <ul className='main--nav__style'>
                        <li className='nav--item__style'>Title</li>
                        <li className='nav--item__style'>Img</li>
                        <li className='nav--item__style'>Price</li>
                        <li className='nav--item__style'>Info</li>
                        <li className='nav--item__style'>Edit</li>
                        <li className='nav--item__style'>Delete</li>
                    </ul>  
                    {itemList} 
                </div>
            }
            { props.toggleAdminPageStatus === false &&
                <div>
                    <ul className='main--nav__style'>
                        <li className='nav--item__style'>First Name</li>
                        <li className='nav--item__style'>Last Name</li>
                        <li className='nav--item__style'>Email</li>
                        <li className='nav--item__style'>Comment</li>
                    </ul>  
                    {contactList}
                </div>
            }
        </div> 
    )
};

export default Admin