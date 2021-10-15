import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className='bannerContainer'>
                <div className='banner'>
                    <h1>Hennessy Banner Generator</h1>
                    {/* {this.props.create ? 
                    <button
                        className='bannerBtn'
                    >Copy Code</button> : null} */}
                </div>
            </div>
        );
    }
}

export default Banner;