import React, { useState, Component } from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';


export default class Navbar extends Component {
    state={
        isOpen:false,
        modalIsOpen: false
    }

    Modal1 =() =>{
        this.setState({modalIsOpen: !this.state.modalIsOpen})
    }

    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src='' alt="Beach Resort"/>
                        </Link>

                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            
                            drop down

                        </button>
                         
                    </div>
                    <ul className={this.state.isOpen? "nav-links show-nav":"nav-links"} >
                        <li>
                            <button className="modal-btn" onClick={this.Modal1}>
                            Open Modal
                            </button>
                            <Modal isOpen={this.state.modalIsOpen}>
                                <h2>Modal Heading</h2>
                                <p>Modal paragraph</p>
                                <button onClick={this.Modal1}>
                                    close
                                </button>
                            </Modal>
                        </li>
                        <li>
                            <button className="modal-btn">
                            test
                            </button>
                        </li>
                        <li>
                            <button className="modal-btn">
                            test
                            </button>
                        </li>
                        <li>
                            <button className="modal-btn">
                            home
                            </button>
                        </li>

                        <li>
                            <button className="modal-btn">
                            home
                            </button>
                        </li>
                    </ul>
                </div>


            </nav>

             
        )
    }
}
