import React, { Component } from 'react';

class Create extends Component {

    state = {
        bannerHeight: '',
        backgroundImgUrl: '',
        fontFamily: '',
        fontColor: '',
        leftTitle: '',
        leftTitleFontSize: '',
        leftBody: '',
        leftBodyFontSize: '',
        leftJustifyContent: '',
        leftAlignItems: '',
        leftBackgroundWidth: '',
        leftBackgroundHeight: '',
        leftTextBackgroundColorR: '',
        leftTextBackgroundColorG: '',
        leftTextBackgroundColorB: '',
        leftBackgroundOpacity: '',
        // leftTextPlacement: '',
        leftButton1: false,
        LeftButtonText1: '',
        leftButtonLink1: '',
        leftButtonColor1: '',
        leftButton2: false,
        LeftButtonText2: '',
        leftButtonLink2: '',
        leftButtonColor1: '',
        leftButton3: false,
        LeftButtonText3: '',
        leftButtonLink3: '',
        leftButtonColor1: '',
        // addButton: '',
        // buttonText: '',
        // buttonLink: '',
        // buttonColor: '',
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
            fontFamily: this.state.fontFamily,
            color: this.state.fontColor,
        }

        const LeftTitle = {
            fontSize: this.state.leftTitleFontSize + 'px',
        }

        const LeftBody = {
            fontSize: this.state.leftBodyFontSize + 'px',
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

        const bannerBtn = {
            backgroundColor: 'black',
            padding: '10px 20px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            margin: '5px'
        }

        return (
            <div className='createContainer'>
                {/* <h1>Create</h1> */}
                <div className='create'>
                    <div className='nav'>
                        <div><button 
                        // className='copyBtn'
                        className='PinkBtn'
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
                        placeholder='Background Url'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundImgUrl: x})
                        }}
                        ></input>
                        <div>Font-Family</div>
                        <input
                        // className='rgbInputs'
                        // placeholder='#'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({fontFamily: x})
                        }}
                        ></input>
                        <div>Font-Color</div>
                        <input
                        // className='rgbInputs'
                        // placeholder='#'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({fontColor: x})
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
                        <div>Title Font-Size</div>
                        <input
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftTitleFontSize: x})
                        }}
                        ></input>
                        <hr/>
                        <div>Body</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftBody: x})
                        }} 
                        ></input>
                        <div>Body Font-Size</div>
                        <input
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftBodyFontSize: x})
                        }} 
                        ></input>
                        <hr/>
                        <h3>Background Position</h3>
                        <div>Justify Content (Vertical)</div>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'center'})}}>center</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'flex-start'})}}>flex-start</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'flex-end'})}}>flex-end</button>
                        <div>Align Items (Horizontal)</div>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'center'})}}>center</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'flex-start'})}}>flex-start</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'flex-end'})}}>flex-end</button>
                        <div>Text Background size width</div>
                        <input
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundWidth: x})
                        }} 
                        ></input>
                        <div>Text Background size height</div>
                        <input
                        placeholder='px'
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
                        
                        {/* <div>Background opacity */}
                        <input
                        placeholder='O'
                        className='rgbInputs'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({backgroundOpacity: x})
                        }} 
                        ></input>
                        )</div>
                        {/* </div> */}
                        <hr/>
                        {/* <div>Text placement</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({textPlacement: x})
                        }} 
                        ></input> */}
                        <h3>Buttons</h3>
                        <div>Button Background color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftButtonColor3: x})
                        }} 
                        ></input>
                        <div>Button color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftButtonColor3: x})
                        }} 
                        ></input>

                        <div><button
                        className='whiteBtn'
                        onClick = {()=>{
                            let leftButton1 = this.state.leftButton1
                            this.setState({leftButton1: !leftButton1})
                        }}
                        >{this.state.leftButton1 ? 'Remove Button' : 'Add Button'}</button></div>
                    
                        <div>Button text</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({LeftButtonText1: x})
                        }} 
                        ></input>
                    
                        <div>Button link</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftButtonLink1: x})
                        }} 
                        ></input>
                    
                        {/* <div>Button color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftButtonColor1: x})
                        }} 
                        ></input> */}
                    {/* <hr/> */}
                    <div><button
                    className='whiteBtn'
                        onClick = {()=>{
                            let leftButton2 = this.state.leftButton2
                            this.setState({leftButton2: !leftButton2})
                        }}
                        >{this.state.leftButton2 ? 'Remove Button' : 'Add Button'}</button></div>
                    
                        <div>Button text</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({LeftButtonText2: x})
                        }} 
                        ></input>
                    
                        <div>Button link</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftButtonLink2: x})
                        }} 
                        ></input>
                    
                        {/* <div>Button color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftButtonColor2: x})
                        }} 
                        ></input> */}
                    {/* <hr/> */}
                    <div><button
                    className='whiteBtn'
                        onClick = {()=>{
                            let leftButton3 = this.state.leftButton3
                            this.setState({leftButton3: !leftButton3})
                        }}
                        >{this.state.leftButton3 ? 'Remove Button' : 'Add Button'}</button></div>
                    
                        <div>Button text</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({LeftButtonText3: x})
                        }} 
                        ></input>
                    
                        <div>Button link</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftButtonLink3: x})
                        }} 
                        ></input>
                    
                        {/* <div>Button color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftButtonColor3: x})
                        }} 
                        ></input> */}
                        <hr/>
                        <div>Insert Image</div>
                        <input placeholder='Image Url'/>
                        <hr/>
                        <h2>Right</h2>
                    </div>
                    <div className='templateContainer'>
                        <div className='template' style={template} >
                            <div className='templateLeft' style={templateLeft}>
                                <div style={leftTextBackground}>
                                    {this.state.leftTitle ? <h1 style={LeftTitle}>{this.state.leftTitle}</h1> : null}
                                    {this.state.leftBody ? <p style={LeftBody}>{this.state.leftBody}</p> : null}
                                    {this.state.leftButton1 ? <a href={this.state.leftButtonLink1}><button style={bannerBtn}>{this.state.LeftButtonText1 ? this.state.LeftButtonText1 : 'button 1'}</button></a> : null}
                                    {this.state.leftButton2 ? <a href={this.state.leftButtonLink2}><button style={bannerBtn}>{this.state.LeftButtonText2 ? this.state.LeftButtonText2 : 'button 2'}</button></a> : null}
                                    {this.state.leftButton3 ? <a href={this.state.leftButtonLink3}><button style={bannerBtn}>{this.state.LeftButtonText3 ? this.state.LeftButtonText3 : 'button 3'}</button></a> : null}
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