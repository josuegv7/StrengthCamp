import React, {Component} from 'react';
import headerstyle from './header.css';


class Header extends Component {
    render() {
        return(
            <div className={headerstyle.header}>
                    {/* <h1 className={headerstyle.name}> STRENGTH CAMP </h1> */}
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Blog</a></li>
                            <li>STRENGTH CAMP</li>
                            <li><a>Membership</a></li>
                            <li><a>Training</a></li>
                        </ul>
                    </nav>
            </div>
                );
    }
}
export default Header
