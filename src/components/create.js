import React, { Component } from 'react';

class Create extends Component {

    state = {
        backgroundImgUrl: '',
        bannerHeight: '',
        leftTitle: '',
        leftBody: '',
        leftTexFontSize: '',
        leftJustifyContent: '',
        leftAlignItems: '',
        leftBackgroundWidth: '',
        leftBackgroundHeight: '',
        leftTextBackgroundColorR: '',
        leftTextBackgroundColorG: '',
        leftTextBackgroundColorB: '',
        leftBackgroundOpacity: '',
        leftTextPlacement: '',
        leftButton1: false,
        leftButton2: false,
        leftButton3: false,
        addButton: '',
        buttonText: '',
        buttonLink: '',
        buttonColor: '',
        right: {
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

        const leftTextBackground = {
            height: this.state.backgroundHeight + 'px',
            width: this.state.backgroundWidth + 'px',
            // border: '1px solid red',
            // backgroundColor: this.state.textBackground,
            // opacity: this.state.backgroundOpacity,
            background: 'rgba(' + this.state.textBackgroundColorR + ', ' + this.state.textBackgroundColorG + ', ' + this.state.textBackgroundColorB + ', ' + this.state.backgroundOpacity +')',
            // background:  'rgba(255, 255, 255, 0.5)',
            padding: '10px',
        }

        const templateLeft = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: this.state.leftJustifyContent,
            alignItems: this.state.leftAlignItems,
        }

        return (
            <div className='createContainer'>
                {/* <h1>Create</h1> */}
                <div className='create'>
                    <div className='nav'>
                        <div><button 
                        // className='copyBtn'
                        className='homeBtn'
                        >Copy Code</button></div>
                        
                        <div>Banner Height</div>
                        <input   
                        placeholder='400px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({bannerHeight: x})
                        }}
                        ></input>
                        <div>Background Image</div>
                        <input
                        placeholder='Insert URL'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundImgUrl: x})
                        }}
                        ></input>
                        <h2>Left</h2>
                        <div>Title</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftTitle: x})
                        }} 
                        ></input>
                        <div>Body</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftBody: x})
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
                        <div>Background Position</div>
                        <div>Justify Content</div>
                        <button onClick={()=>{this.setState({leftJustifyContent: 'center'})}}>center</button>
                        <button onClick={()=>{this.setState({leftJustifyContent: 'flex-start'})}}>flex-start</button>
                        <button onClick={()=>{this.setState({leftJustifyContent: 'flex-end'})}}>flex-end</button>
                        <div>Align Items</div>
                        <button onClick={()=>{this.setState({leftAlignItems: 'center'})}}>center</button>
                        <button onClick={()=>{this.setState({leftAlignItems: 'flex-start'})}}>flex-start</button>
                        <button onClick={()=>{this.setState({leftAlignItems: 'flex-end'})}}>flex-end</button>
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
                    
                        <div><button
                        onClick = {()=>{
                            let leftButton1 = this.state.leftButton1
                            this.setState({leftButton1: !leftButton1})
                        }}
                        >{this.state.leftButton1 ? 'Remove Button' : 'Add Button'}</button></div>
                    
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
                    
                    <div><button
                        onClick = {()=>{
                            let leftButton2 = this.state.leftButton2
                            this.setState({leftButton2: !leftButton2})
                        }}
                        >{this.state.leftButton2 ? 'Remove Button' : 'Add Button'}</button></div>
                    
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
                    
                    <div><button
                        onClick = {()=>{
                            let leftButton3 = this.state.leftButton3
                            this.setState({leftButton3: !leftButton3})
                        }}
                        >{this.state.leftButton3 ? 'Remove Button' : 'Add Button'}</button></div>
                    
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
                        <h2>Right</h2>
                    </div>
                    <div className='templateContainer'>
                        <div className='template' style={template} >
                            <div className='templateLeft' style={templateLeft}>
                                <div style={leftTextBackground}>
                                    {this.state.leftTitle ? <h1>{this.state.leftTitle}</h1> : null}
                                    {this.state.leftBody ? <p>{this.state.leftBody}</p> : null}
                                    {this.state.leftButton1 ? <button>button 1</button> : null}
                                    {this.state.leftButton2 ? <button>button 2</button> : null}
                                    {this.state.leftButton3 ? <button>button 3</button> : null}
                                </div>
                            </div>
                            <div className='templateRight'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;