import React, { Component } from 'react';

class Create extends Component {

    state = {
        backgroundImgUrl: '',
        text: '',
        bannerHeight: '',
        imageUrl: '',
        title: '',
        body: '',
        texFontSize: '',
        backgroundWidth: '',
        backgroundHeight: '',
        textBackgroundColorR: '',
        textBackgroundColorG: '',
        textBackgroundColorB: '',
        backgroundOpacity: '',
        textPlacement: '',
        addButton: '',
        buttonText: '',
        buttonLink: '',
        buttonColor: '',
    }

    render() {

        // const resetBtn = {
        //     color: "red",
        // };

        const template = {
            backgroundImage: 'url(' + this.state.backgroundImgUrl + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            height: this.state.bannerHeight + 'px',
        }

        const title = {
            fontSize: this.state.texFontSize + 'px',
        }

        const textBackground = {
            height: this.state.backgroundHeight + 'px',
            width: this.state.backgroundWidth + 'px',
            border: '1px solid red',
            // backgroundColor: this.state.textBackground,
            // opacity: this.state.backgroundOpacity,
            background: 'rgba(' + this.state.textBackgroundColorR + ', ' + this.state.textBackgroundColorG + ', ' + this.state.textBackgroundColorB + ', ' + this.state.backgroundOpacity +')',
            // background:  'rgba(255, 255, 255, 0.5)',
            padding: '10px',
        }

        return (
            <div className='createContainer'>
                {/* <h1>Create</h1> */}
                <div className='create'>
                    <div className='nav'>
                        <div><button className='copyBtn'>Copy Code</button></div>
                        <div><button 
                        // style={resetBtn}
                        >Reset</button></div>
                        <div>Banner Height</div>
                        <input                            
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({bannerHeight: x})
                        }}
                        ></input>
                        <div>Image Url</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundImgUrl: x})
                        }}
                        ></input>
                        <div>Title</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({title: x})
                        }} 
                        ></input>
                        <div>body</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({body: x})
                        }} 
                        ></input>
                        <div>Text Font-size</div>
                        <input
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({texFontSize: x})
                        }} 
                        ></input>
                        <div>Text Background size width</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundWidth: x})
                        }} 
                        ></input>
                        <div>Text Background size height</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundHeight: x})
                        }} 
                        ></input>
                        <div>Text Background color</div>
                        <div> rgb(
                        <input
                        className='rgbInputs'
                        placeholder='R'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({textBackgroundColorR: x})
                        }} 
                        ></input>
                        <input
                        className='rgbInputs'
                        placeholder='G'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({textBackgroundColorG: x})
                        }} 
                        ></input>
                        <input
                        className='rgbInputs'
                        placeholder='B'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({textBackgroundColorB: x})
                        }} 
                        ></input>
                        )</div>
                        <div>Background opacity
                        <input
                        className='rgbInputs'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundOpacity: x})
                        }} 
                        ></input>
                        </div>
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
                    </div>
                    <div className='templateContainer'>
                        <div className='template' style={template} >
                            {this.state.title?
                            <div style={textBackground}>
                                <h1 style={title}>{this.state.title}</h1>
                                <p>{this.state.body}</p>
                            </div> 
                            : null }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;