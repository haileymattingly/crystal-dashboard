import React from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

const ApparelStore = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>AW-K Apparel Store</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default ApparelStore;