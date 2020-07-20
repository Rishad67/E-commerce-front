import React, { Component } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopNavbar from '../Components/TopNavbar';
import CategoryCarousel from '../Components/CategoryCarousel';
import ProductSection from '../Components/ProductSection';

export default class Home extends Component {
    render() {
        return (
            <>
                <TopNavbar/>
                <Header/>
                <section className="grad-bg container-fluid" id="categories">
                    <h1 className="text-white text-center">Shop by Category</h1>
                    <CategoryCarousel/>
                </section>
                <section className="gray-bg container-fluid" id="newArrivals">
                    <h1 className="text-center greenHeadBg">New Arival</h1>
                    <ProductSection/>
                </section>
                <section className="gray-bg container-fluid" id="TopAds">
                    <h1 className="text-center orangeHeadBg">Top Ads</h1>
                    <ProductSection/>
                </section>
                <section className="gray-bg container-fluid" id="bestSellers">
                    <h1 className="text-center blueHeadBg">Best Seller</h1>
                    <ProductSection/>
                </section>
                <Footer/>
            </>
        )
    }
}