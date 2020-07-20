import React, { Component } from 'react'
import Footer from '../Components/Footer';
import TopNavbar from '../Components/TopNavbar';
import {Form, FormControl, Button, FormLabel} from 'react-bootstrap';

export default class RecoverPassword extends Component {
    render() {
        return (
            <>
                <TopNavbar/>
                <section className='gray-bg container-fluid p-10'>
                    <div className='row'>
                        <div className='col-md-6' style={{padding: '2% 10%'}}>
                            <Form className='my-form'>
                                <FormLabel>Email</FormLabel>
                                <FormControl type='text' placeholder='Enter your Email'/>
                                <FormLabel>Verification Code</FormLabel>
                                <FormControl type='text' placeholder='Enter the verification code'/>
                                <FormLabel>Password</FormLabel>
                                <FormControl type='text' placeholder='Enter your Password'/>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl type='text' placeholder='Enter the Password again'/>
                                <Button variant="dark">Submit</Button>
                            </Form>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}
