import React from 'react'

const Header = ({username}) => {
    return (
        <div>
            <h1>Welcome to Messenger</h1>
    <h2>Welcome {username}</h2>
        </div>
    )
}

export default Header
