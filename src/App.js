import React, { Component } from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Product from './components/Product';
import Admin from './components/Admin';
import Callback from '../src/Login-components/Callback';
import SecuredRoute from '../src/Login-components/SecuredRoute';

import './CSS/Styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      filteredProducts:[],
      priceRange:'price range 1',
      items:[],
      contactData:[],
      toggleAdminPageStatus:true,
  }

  this.filterHandler = this.filterHandler.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handletoggleAdminPage = this.handletoggleAdminPage.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3001/products', {
    headers: {
        mode: 'cors',
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
    })
    .then(response => response.json())
    .then(data => this.setState({
        items: data,
    }));
    fetch('http://localhost:3005/contacts', {
      headers: {
          mode: 'cors',
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
      }
      })
      .then(response => response.json())
      .then(data => this.setState({
        contactData: data,
      }));
  }

  filterHandler(type) {
    let allProducts = this.state.items;
    let productFilter;

    if (type === "spongebob") {
         productFilter = allProducts.filter(function(allProducts) {
            return allProducts.productCategory === 'spongebob'
        });
        this.setState({ filteredProducts : productFilter });
    } else if (type === "pokemon") {
         productFilter = allProducts.filter(function(allProducts) {
            return allProducts.productCategory === 'pokemon'
        });
        this.setState({ filteredProducts : productFilter });
    } else if (type ==="clear" ) {
        this.setState({ filteredProducts : allProducts});
    }
}

  handleChange(event){
      this.setState({priceRange: event.target.value});
    }

  handleSubmit(event){
    event.preventDefault();
    let productFilter=[];
    let filterPriceRange = this.state.priceRange;
    let allProducts = this.state.items;

    if (filterPriceRange === "price range 1") {
      productFilter = allProducts.filter(function(allProducts) {
          return allProducts.price <20 
      });
      this.setState({ filteredProducts : productFilter });
    } else if (filterPriceRange === "price range 2"){
      productFilter = allProducts.filter(function(allProducts) {
        return allProducts.price > 20
      });
      this.setState({ filteredProducts : productFilter });
    }
  }

  toggleAddModal(){
    var modal = document.getElementById('Add-modal');
 
    if (modal.style.display === 'none' || modal.style.display === '' ) {
      modal.style.display = 'block';
    } else{
      modal.style.display = 'none';
    }

    window.onclick = event=>{
      if(event.target === modal){
        modal.style.display = 'none';
      }
    }
  };

  toggleEditModal(id){
    var modal = document.getElementById(id);
 
    if (modal.style.display === 'none' || modal.style.display === '' ) {
      modal.style.display = 'block';
    } else{
      modal.style.display = 'none';
    }

    window.onclick = event=>{
      if(event.target === modal){
        modal.style.display = 'none';
      }
    }
  };

  handletoggleAdminPage(){
    if(this.state.toggleAdminPageStatus === true){
      this.setState({toggleAdminPageStatus : false })
    }else if (this.state.toggleAdminPageStatus === false){
      this.setState({toggleAdminPageStatus : true })
    }
  }

  handleContactAdd(){
    const newInfo = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,  
      email: document.getElementById("email").value,
      comment: document.getElementById("comment").value,
    }

    fetch(`http://localhost:3005/contacts/`, {
      method: "POST",
      headers: {
          mode: 'cors',
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newInfo), 
      })
      .then(response => response.json())
  }

  handleAdd(){
    const newInfo = {
      title: document.getElementById("add-title").value,
      productImages: document.getElementById("add-image").value,  
      price: document.getElementById("add-price").value,
      description: document.getElementById("add-info").value,
      productCategory: document.getElementById("add-productCategory").value,
    }
    fetch(`http://localhost:3001/products/`, {
      method: "POST",
      headers: {
          mode: 'cors',
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newInfo), 
      })
      .then(response => response.json())
  }

  handleEdit(id,event){
    var editTitle = event.target.editTitle.value;
    var editProductImages = event.target.editImage.value;  
    var editPrice = event.target.editPrice.value;
    var editDescription = event.target.editInfo.value;
    var editProductCategory = event.target.editProductCategory.value;

    const updatedInfo = {
      title : editTitle,
      description : editDescription,
      price : editPrice,
      productCategory : editProductCategory,
      productImages : editProductImages,
    }
    
    fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      headers: {
          mode: 'cors',
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(updatedInfo), // body data type must match "Content-Type" header
      })
      .then(response => response.json())
      .then((data)=>{
        console.log(data)
    })
  }

  handleDelete(id){
    fetch(`http://localhost:3001/products/${id}`,{
      method: "DELETE",
      headers: {
          mode: 'cors',
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
      }
      })
      .then(response => response.json())
      window.location.reload();
  }

  render() {
    let products = []
   if (this.state.filteredProducts.length === 0) {
     products = this.state.items
   } else {
     products = this.state.filteredProducts
   }
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={About}/>
            <Route path='/product' render={() => (
              <Product
              product={products}
              filterHandler = {this.filterHandler}
              handleChange = {(event)=>this.handleChange(event)}
              handleSubmit = {(event=>this.handleSubmit(event))}
              />
            )}/>
            <Route path='/contact' render = {() => (
              <Contact
              handleContactAdd = {this.handleContactAdd}
              />
            )}
            />
            <SecuredRoute path='/admin' component={Admin} 
            items = {this.state.items} 
            contactData = {this.state.contactData}
            toggleAdminPageStatus = {this.state.toggleAdminPageStatus}
            handletoggleAdminPage = {this.handletoggleAdminPage}
            handleAdd = {this.handleAdd}
            handleEdit = {this.handleEdit}
            handleDelete = {this.handleDelete}
            toggleEditModal = {this.toggleEditModal} 
            toggleAddModal = {this.toggleAddModal}
            />
            <Route exact path='/callback' component={Callback}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

