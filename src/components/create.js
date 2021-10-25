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
        leftAddPricing: false,
        leftAddDropDown: false,
        LeftDropDownTitle: '',
        LeftDropDownS1T: '',
        LeftDropDownS2T: '',
        LeftDropDownS3T: '',
        LeftDropDownS4T: '',
        LeftDropDownS1D: '',
        LeftDropDownS2D: '',
        LeftDropDownS3D: '',
        LeftDropDownS4D: '',
        leftJustifyContent: '',
        leftAlignItems: '',
        leftBackgroundWidth: '',
        leftBackgroundHeight: '',
        leftTextBackgroundColorR: '',
        leftTextBackgroundColorG: '',
        leftTextBackgroundColorB: '',
        leftBackgroundOpacity: '',
        leftButton1: false,
        LeftButtonText1: '',
        leftButtonLink1: '',
        leftButtonColor1: '',
        leftButton2: false,
        LeftButtonText2: '',
        leftButtonLink2: '',
        leftButtonColor2: '',
        leftButton3: false,
        LeftButtonText3: '',
        leftButtonLink3: '',
        leftButtonColor3: '',
    }

    render() {
        const offerDetailsOne = () => {
            let x = document.getElementById("detailsOne");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const offerDetailsTwo = () => {
            let x = document.getElementById("detailsTwo");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const offerDetailsThree = () => {
            let x = document.getElementById("detailsThree");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const offerDetailsFour = () => {
            let x = document.getElementById("detailsFour");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const dropDownOne = () => {
            let x = document.getElementById("dropDownOne");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const dropDownTwo = () => {
            let x = document.getElementById("dropDownTwo");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const dropDownThree = () => {
            let x = document.getElementById("dropDownThree");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const dropDownFour = () => {
            let x = document.getElementById("dropDownFour");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
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
            border: 'none'
        }

        const LeftBody = {
            fontSize: this.state.leftBodyFontSize + 'px',
        }

        const leftTextBackground = {
            height: this.state.backgroundHeight + 'px',
            width: this.state.backgroundWidth + 'px',
            background: 'rgba(' + this.state.leftTextBackgroundColorR + ', ' + this.state.leftTextBackgroundColorG + ', ' + this.state.leftTextBackgroundColorB + ', ' + this.state.leftBackgroundOpacity +')',
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
            padding: '12px 50px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            margin: '15px',
        }

        return (
            <div className='createContainer'>
                <div className='create'>
                    <div className='nav'>
                        <div><button 
                        className='PinkBtn'
                        >Copy Code</button></div>
                        
                        <div>Banner Height</div>
                        <input   
                        placeholder='500px'
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
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({fontFamily: x})
                        }}
                        ></input>
                        <div>Font-Color</div>
                        <input
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
                        <h3>Pricing</h3>
                        <button className='whiteBtn'
                        onClick = {() => {
                            let x = this.state.leftAddPricing
                            this.setState({leftAddPricing: !x})
                        }} 
                        >{this.state.leftAddPricing ? 'Remove Price' : 'Add Price'}</button>
                        <hr/>
                        <h3>Regional Offer</h3>
                        <button className='whiteBtn' 
                        onClick={()=>{
                            let x = this.state.leftAddDropDown
                            this.setState({leftAddDropDown: !x})
                        }}
                        >{this.state.leftAddDropDown ? 'Remove Offer' : 'Add Offer'}</button>
                        {this.state.leftAddDropDown ? 
                        <div>
                            <div>Drop Down Title</div>
                            <input 
                            placeholder='ex: reginal offers'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownTitle: x})
                            }} 
                            ></input>
                            <div>Section One title</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS1T: x})
                            }}
                            ></input>
                            {/* <div>price</div> */}
                            <div>Offer Details One</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS1D: x})
                            }}
                            ></input>

                            <div>Section Two title</div>
                            <input 
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS2T: x})
                            }}
                            ></input>
                            {/* <div>price</div> */}
                            <div>Offer Details Two</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS2D: x})
                            }}
                            ></input>

                            <div>Section Three title</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS3T: x})
                            }}
                            ></input>
                            {/* <div>price</div> */}
                            <div>Offer Details Three</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS3D: x})
                            }}
                            ></input>

                            <div>Section Four title</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS4T: x})
                            }}
                            ></input>
                            {/* <div>price</div> */}
                            <div>Offer Details Four</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS4D: x})
                            }}
                            ></input>

                        </div> 
                        : null}
                        <hr/>
                        <h3>Background</h3>
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
                            this.setState({leftTextBackgroundColorR: x})
                        }} 
                        ></input>
                        <input
                        className='rgbInputs'
                        placeholder='G'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftTextBackgroundColorG: x})
                        }} 
                        ></input>
                        <input
                        className='rgbInputs'
                        placeholder='B'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftTextBackgroundColorB: x})
                        }} 
                        ></input>
                        
                        <input
                        placeholder='O'
                        className='rgbInputs'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftBackgroundOpacity: x})
                        }} 
                        ></input>
                        )</div>
                        <h4>Background Position</h4>
                        <div>Justify Content (Vertical)</div>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'center'})}}>center</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'flex-start'})}}>flex-start</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'flex-end'})}}>flex-end</button>
                        <div>Align Items (Horizontal)</div>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'center'})}}>center</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'flex-start'})}}>flex-start</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'flex-end'})}}>flex-end</button>
                        <hr/>
                        <h3>Buttons</h3>
                        {/* <div>Button Background color</div>
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
                        ></input> */}

                        <div><button
                        className='whiteBtn'
                        onClick = {()=>{
                            let leftButton1 = this.state.leftButton1
                            this.setState({leftButton1: !leftButton1})
                        }}
                        >{this.state.leftButton1 ? 'Remove Button' : 'Add Button'}</button></div>

                        {this.state.leftButton1 ? <div>
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
                        </div>: null}
                    
                    <div><button
                    className='whiteBtn'
                        onClick = {()=>{
                            let leftButton2 = this.state.leftButton2
                            this.setState({leftButton2: !leftButton2})
                        }}
                        >{this.state.leftButton2 ? 'Remove Button' : 'Add Button'}</button></div>
                        {this.state.leftButton2 ? <div>
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
                        </div>: null}
                    
                    <div><button
                    className='whiteBtn'
                        onClick = {()=>{
                            let leftButton3 = this.state.leftButton3
                            this.setState({leftButton3: !leftButton3})
                        }}
                        >{this.state.leftButton3 ? 'Remove Button' : 'Add Button'}</button></div>
                        {this.state.leftButton3 ? <div>
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
                        </div>: null}
                    
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
                                    {/* _____________________ */}
                                    {this.state.leftAddPricing ? 
                                    // <div className='pricingContainer'>
                                    //     <div>36 month lease</div>
                                    //     <div><span className='pricingOptionOne'>$439</span> / month</div>
                                    //     <div>MSRP: $40,745</div>
                                    // </div> 
                                    // <div className='pricingContainer'>
                                    //     <div>24 month lease</div>
                                    //     <div><span className='pricing'>$439</span> / month</div>
                                    //     <hr className='pricingLineVirtical'></hr>
                                    //     <div>Buy for</div>
                                    //     <div><span className='pricing'>$42,300</span></div>
                                    //     <div>Limited availability at this price</div>
                                    // </div>
                                    // <div className='pricingContainerOptionTwo'>
                                    //         <div className='pricingOptionTwo'><span className='pricing'>2</span>% apr</div>
                                    //         <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                    //         <div className='pricingOptionTwo'><span className='pricing'>399</span>/mo.</div>
                                    //     </div>
                                    <div>
                                        price
                                    </div>
                                    : null}
                                    {/* _____________________ */}
                                    {this.state.leftButton1 ? <a href={this.state.leftButtonLink1}><button style={bannerBtn}>{this.state.LeftButtonText1 ? this.state.LeftButtonText1 : 'button 1'}</button></a> : null}
                                    {this.state.leftButton2 ? <a href={this.state.leftButtonLink2}><button style={bannerBtn}>{this.state.LeftButtonText2 ? this.state.LeftButtonText2 : 'button 2'}</button></a> : null}
                                    {this.state.leftButton3 ? <a href={this.state.leftButtonLink3}><button style={bannerBtn}>{this.state.LeftButtonText3 ? this.state.LeftButtonText3 : 'button 3'}</button></a> : null}
                                    {this.state.leftAddDropDown ? <div className='reginalOffersContainer'>
                                        <div>
                                            {this.state.LeftDropDownTitle ? this.state.LeftDropDownTitle : 'REGIONAL OFFERS'}
                                        </div>
                                    <button className='reginalOffersBtn' onClick={dropDownOne}>{this.state.LeftDropDownS1T ? this.state.LeftDropDownS1T : '2021 finance'}</button>
                                    <div id="dropDownOne">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>0% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>0/mo.</div>
                                        </div>
                                        <button onClick={offerDetailsOne} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsOne">
                                            {this.state.LeftDropDownS1D ? this.state.LeftDropDownS1D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownTwo}>{this.state.LeftDropDownS2T ? this.state.LeftDropDownS2T : '2022 finance'}</button>
                                    <div id="dropDownTwo">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>0% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>0/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsTwo} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsTwo">
                                            {this.state.LeftDropDownS2D ? this.state.LeftDropDownS2D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownThree}>{this.state.LeftDropDownS3T ? this.state.LeftDropDownS3T : '2021 cash'}</button>
                                    <div id="dropDownThree">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>0% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>0/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsThree} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsThree">
                                            {this.state.LeftDropDownS3D ? this.state.LeftDropDownS3D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownFour}>{this.state.LeftDropDownS4T ? this.state.LeftDropDownS4T : '2020 cash'}</button>
                                    <div id="dropDownFour">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>0% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>0/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsFour} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsFour">
                                            {this.state.LeftDropDownS4D ? this.state.LeftDropDownS4D : 'offer details text here'}
                                        </div>
                                    </div>
                                    </div> : null}
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