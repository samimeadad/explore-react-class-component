import React, { Component } from 'react';
import SingleUser from './SingleUser';

class User extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            users: [],
            cart: [],
            name: '',
            email: ''
        }
        this.handleAddToCart = this.handleAddToCart.bind( this );
    }

    handleAddToCart = ( user ) => {
        const newCart = [ ...this.state.cart, user ];
        this.setState( { cart: newCart } );
    }


    componentDidMount () {
        fetch( 'https://jsonplaceholder.typicode.com/users' )
            .then( res => res.json() )
            .then( data => this.setState( { users: data } ) );
    }

    render () {
        return (
            <div>
                <h1>Users Found: { this.state.users.length }</h1>
                <h2>Cart: { this.state.cart.length }</h2>
                {
                    this.state.users.map( user => <SingleUser
                        key={ user.id }
                        user={ user }
                        handleAddToCart={ this.handleAddToCart }
                    /> )
                }
            </div>
        );
    }
}

export default User;