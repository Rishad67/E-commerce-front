import React, { Component } from 'react'
import Footer from '../Components/Footer';
import TopNavbar from '../Components/TopNavbar';
import {Link} from 'react-router-dom';
import {Form, FormControl, Button, FormLabel} from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <>
                <TopNavbar/>
                <section className='gray-bg container-fluid p-10'>
                    <div className='row'>
                        <div className='col-md-6' style={{padding: '10% 10%'}}>
                            <Form className='my-form'>
                                <FormLabel>Email</FormLabel>
                                <FormControl type='text' placeholder='Enter your Email'/>
                                <FormLabel>Password</FormLabel>
                                <FormControl type='text' placeholder='Enter your Password'/>
                                <Button variant="dark">Log In</Button>
                            </Form>
                        </div>
                        <div className='col-md-6 my-form' style={{padding: '10% 0'}}>
                            <h5>New customer ?</h5>
                            <Link to="/Signup" style={{marginBottom:'20px'}}><Button  variant="dark">Register</Button></Link>
                            <h5>Forgot Password ?</h5>
                            <Link to='/RecoverPassword'><Button  variant="dark">Recover</Button></Link>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}