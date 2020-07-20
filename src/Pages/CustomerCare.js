import React, { Component } from 'react'
import Footer from '../Components/Footer';
import TopNavbar from '../Components/TopNavbar';

export default class CustomerCare extends Component {
    render() {
        return (
            <>
                <TopNavbar/>
                <section className='white-bg text-center'>
                    <h3>This service is not available now</h3>
                    <p>We are coming soon. Thank you for your support.</p>
                </section>
                <Footer/>
            </>
        )
    }
}
