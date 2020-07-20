import { Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import React, { Component } from 'react';
import Logo from '../Image/sellersBD.png';

export default class TopNavbar extends Component {

    render() {
        return (
            <>
                <div className='container-fluid'>
                    <div className='row' id='top-bar'>
                        <div className='col-4'>
                            <img src={Logo} alt="" width='50%'/>
                        </div>
                        <Form inline className='col-5'>
                            <FormControl type="text" placeholder="Search Products" variant='outline-dark' size='lg' style={{width: '70%'}}/>
                            <Button variant="dark" size='lg'><i className="fa fa-search" aria-hidden="true"></i></Button>
                        </Form>
                        <div className='col-3' style={{fontSize:50}}>
                            <i className="fa fa-shopping-cart" aria-hidden="true">5</i>
                        </div>
                    </div>
                </div>
                <Navbar sticky="top" bg='dark' expand="lg">
                    <Navbar.Brand href="/"><h5 className="swing-left white-text">Sellers BD</h5></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/#TopAds">Top Ads</Nav.Link>
                            <Nav.Link href="/#bestSellers">Best Sellers</Nav.Link>
                            <Nav.Link href="/CustomerCare">Customer Care</Nav.Link>
                            <Nav.Link href="/Products">Sell your Products</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                            <Nav.Link href="/Signup">SignUp</Nav.Link>                            </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}