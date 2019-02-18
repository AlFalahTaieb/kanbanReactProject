import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


// const logOut = () => {
//     this.setState({ loggedIn: false });
// }
const Navbar = (props) => {

    // const { auth } = props
    // // const links = a? <SignedInLinks /> : <SignedOutLinks />
    // console.log(auth)
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                < Link to='/' className="brand-logo">KanbanPlan</Link>
                <SignedInLinks />
                <SignedOutLinks />
                {/* {links} */}
            </div>

        </nav>
    )
}

export default Navbar