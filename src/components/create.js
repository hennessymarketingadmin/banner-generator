import React, { Component } from 'react';

class Create extends Component {

    state = {
        backgroundImgUrl: '',
        text: '',
        bannerHeight: '',
        imageUrl: '',
        text: '',
        texFont: '',
        textBackground: '',
        backgroundOpacity: '',
        textPlacement: '',
        addButton: '',
        buttonText: '',
        buttonLink: '',
        buttonColor: '',
    }

    render() {
        return (
            <div className='createContainer'>
                {/* <h1>Create</h1> */}
                <div className='create'>
                    <div className='nav'>
                        <div><button className='copyBtn'>Copy Code</button></div>
                        <div><button>clear</button></div>
                        <div>Banner Height</div>
                        <input                            
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundImgUrl: x})
                        }}
                        ></input>
                        <div>Image Url</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundImgUrl: x})
                        }} 
                        ></input>
                        <div>Text</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({text: x})
                        }} 
                        ></input>
                        <div>Text Font</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({texFont: x})
                        }} 
                        ></input>
                        <div>Text Background</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({textBackground: x})
                        }} 
                        ></input>
                        <div>Background opacity </div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundOpacity: x})
                        }} 
                        ></input>
                        <div>Text placement</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({textPlacement: x})
                        }} 
                        ></input>
                    
                        <div><button>Add Button</button></div>
                    
                        <div>Button text</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({buttonText: x})
                        }} 
                        ></input>
                    
                        <div>Button link</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({buttonLink: x})
                        }} 
                        ></input>
                    
                        <div>Button color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({buttonColor: x})
                        }} 
                        ></input>
                    
                        <div><button>Add Button</button></div>
                    
                        <div>Button text</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({text: x})
                        }} 
                        ></input>
                    
                        <div>Button link</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({text: x})
                        }} 
                        ></input>
                    
                        <div>Button color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({text: x})
                        }} 
                        ></input>
                    
                        <div><button>Add Button</button></div>
                    
                        <div>Button text </div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({text: x})
                        }} 
                        ></input>
                    
                        <div>Button link</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({text: x})
                        }} 
                        ></input>
                    
                        <div>Button color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({text: x})
                        }} 
                        ></input>
                    </div>
                    <div className='templateContainer'>
                        <div className='template' style={{backgroundImage: 'url(' + this.state.backgroundImgUrl + ')'}} >

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;