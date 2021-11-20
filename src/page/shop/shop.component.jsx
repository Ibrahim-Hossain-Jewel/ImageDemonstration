import React from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview";

//file name and folder name never be as same.

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Collection: SHOP_DATA
        }
    }
    render(){
        //So you have to use extra div for each map() method execution;
        //destructured property must be according to origin collection
        const { Collection } = this.state;
        return(
            <div className = "shop-page">
                {
                    Collection.map(({id, ...otherProperties})=>(
                        <CollectionPreview key = {id} {...otherProperties} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;