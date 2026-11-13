
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {

        return (
            <nav>
              <div className='navbar'>
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/students">Students</Link>

                <Link to="/contact">Contact</Link>
             </div>
            </nav>
        );
    }
}

export default Navbar;
