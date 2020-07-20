import React, { Component } from 'react'
import TinySlider from "tiny-slider-react";

export default class CategoryCarousel extends Component {
    constructor() {
        super();
        this.settings = {
            lazyload: true,
            nav: false,
            mouseDrag: true,
            items: 5,
            gutter: 5,
            autoplay: true,
            nextButton: '#category-next',
            prevButton: '#category-prev'
        };

        this.state = {
            categories: [
                {name: 'A'},
                {name: 'B'},
                {name: 'C'},
                {name: 'D'},
                {name: 'E'},
                {name: 'F'},
                {name: 'G'}
            ]
        }
    }

    render() {
        return (
            <div className='row'>
                <div className='col-1 text-center button-container'>
                    <button  id='category-prev'><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                </div>
                <div className='col-10'>
                    <TinySlider settings={this.settings}>
                        {
                            this.state.categories.map((category,index) => (
                            <div key={index} style={{ position: "relative" }}>
                                <h4 className="categoryBox white-text text-center">{category.name}</h4>
                            </div>
                        ))
                        }
                    </TinySlider>
                </div>
                <div className='col-1 text-center button-container'>
                    <button id='category-next'><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}
