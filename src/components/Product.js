import React from "react";
import Card from './Card';

const Product = (props) => {
    
        const filterer = (props.product.length === 0) ?
            props.product.map(List => {
            return (
                <Card
                title={List.title}
                description={List.description}
                productImages={List.productImages}
                price={List.price}
                />
            )
            })
        :
        props.product.map(List => {
            return (
                <Card
                key={List._id}
                title={List.title}
                description={List.description}
                productImages={List.productImages}
                price={List.price}
                />
            )
            })
        return(
            <main>
                <div className='Product--filter__container'>
                    <h2>Filter Product</h2>
                    <button onClick={()=>props.filterHandler('spongebob')} className="filter--button__style">Spongebob series</button>
                    <button onClick={()=>props.filterHandler('pokemon')} className="filter--button__style">Pokemon series</button>
                    <button onClick={()=>props.filterHandler('clear')} className="filter--button__style">Reset Filter</button>
                    
                <form onSubmit={props.handleSubmit}>
                    <label>
                    Pick a Price Range:
                    <select onChange={props.handleChange}>
                        <option value="price range 1">$0 to $20</option>
                        <option value="price range 2">$20 to $50</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                </div>

                <div className="row">
                    {filterer}
                </div>
                
            </main>
       
        )
 
};

export default Product;