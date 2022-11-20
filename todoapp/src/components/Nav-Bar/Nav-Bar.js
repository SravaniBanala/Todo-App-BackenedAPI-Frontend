import './Nav-Bar.scss';
import React from 'react';

class NavBar extends React.Component {

    onTrigger = () => {
        this.props.showAddToDoForm(true);
    }

    render() {
        return (
            <nav className="nav-bar">
                <h2>
                    <span>TO DO LIST</span>
                    <button type="button" className="btn btn-primary" onClick={this.onTrigger}>Add New To-Do Item</button>
                </h2>
            </nav>
        )
    }
}

export default NavBar;