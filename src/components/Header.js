import React from 'react'

const Header = ({countCartItems}) => {
    return (
        <div>
            <header className='row block center'>
                <div>
                    <a href='#/' >
                        <h1>Small Shopping Cart</h1>
                    </a>
                </div>
                <div>
                    <a href='#/cart'>
                        Cart {' '}
                        {countCartItems? <button className='badge'>{countCartItems}</button> : ''}

                    </a> <a href='#/signin'>SignIn</a>
                </div>
            </header>
        </div>
    )
}

export default Header
