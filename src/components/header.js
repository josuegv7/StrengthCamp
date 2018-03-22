import React, {Component} from 'react';
import headerstyle from './header.css';


class Header extends Component {
    render() {
        return(
            <div className={headerstyle.header}>
                    {/* <h1 className={headerstyle.name}> STRENGTH CAMP </h1> */}
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="http://strengthcamp.com/home/?page_id=74">Blog</a></li>
                            <li>STRENGTH CAMP</li>
                            <li><a href="http://strengthcamp.com/home/?page_id=67">Training</a></li>
                            <li><a href="http://strengthcamp.com/home/?page_id=988">Find a Strength Camp</a></li>
                        </ul>
                    </nav>
            </div>
                );
    }
}
export default Header
