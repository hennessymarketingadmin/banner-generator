import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import OptionOneImg from './images/optionOne.png';
import OptionTwoImg from './images/optionTwo.png';
import OptionThreeImg from './images/optionThree.png';
import RegionalOfferImg from './images/regionalOffer.png';

class Create extends Component {

    state = {
        bannerHeight: '',
        backgroundImgUrl: '',
        // fontFamily: '',
        fontColor: '',
        leftTitle: '',
        leftTitleFontSize: '',
        leftBody: '',
        leftBodyFontSize: '',
        leftPricingOption: '',
        leftPricingOptionOneMonthlyLease: '',
        leftPricingOptionOneMonthly: '',
        leftPricingOptionOneMSRP: '',
        leftPricingOptionTwoAPR: '',
        leftPricingOptionTwoMonthly: '',
        leftPricingOptionThreeMonthlyLease: '',
        leftPricingOptionThreeMonthly: '',
        leftPricingOptionThreeMSRP: '',
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
        leftSectionOneApr: '',
        leftSectionOneMonthly: '',
        leftSectionTwoApr: '',
        leftSectionTwoMonthly: '',
        leftSectionThreeApr: '',
        leftSectionThreeMonthly: '',
        leftSectionFourApr: '',
        leftSectionFourMonthly: '',
        leftJustifyContent: '',
        leftAlignItems: '',
        leftBackgroundWidth: '',
        leftBackgroundHeight: '',
        leftTextBackgroundColorR: '',
        leftTextBackgroundColorG: '',
        leftTextBackgroundColorB: '',
        leftBackgroundOpacity: '',
        ButtonColor: '',
        ButtonBackgroundColor: '',
        leftButton1: false,
        LeftButtonText1: '',
        leftButtonLink1: '',
        leftButton2: false,
        LeftButtonText2: '',
        leftButtonLink2: '',
        leftButton3: false,
        LeftButtonText3: '',
        leftButtonLink3: '',
        leftImageUrl: '',
        leftImageHeight: '',
        leftImageWidth: '',

        // ------------------

        rightTitle: '',
        rightTitleFontSize: '',
        rightBody: '',
        rightBodyFontSize: '',
        rightPricingOption: '',
        rightPricingOptionOneMonthlyLease: '',
        rightPricingOptionOneMonthly: '',
        rightPricingOptionOneMSRP: '',
        rightPricingOptionTwoAPR: '',
        rightPricingOptionTwoMonthly: '',
        rightPricingOptionThreeMonthlyLease: '',
        rightPricingOptionThreeMonthly: '',
        rightPricingOptionThreeMSRP: '',
        rightAddPricing: false,
        rightAddDropDown: false,
        rightDropDownTitle: '',
        rightDropDownS1T: '',
        rightDropDownS2T: '',
        rightDropDownS3T: '',
        rightDropDownS4T: '',
        rightDropDownS1D: '',
        rightDropDownS2D: '',
        rightDropDownS3D: '',
        rightDropDownS4D: '',
        rightSectionOneApr: '',
        rightSectionOneMonthly: '',
        rightSectionTwoApr: '',
        rightSectionTwoMonthly: '',
        rightSectionThreeApr: '',
        rightSectionThreeMonthly: '',
        rightSectionFourApr: '',
        rightSectionFourMonthly: '',
        rightJustifyContent: '',
        rightAlignItems: '',
        rightBackgroundWidth: '',
        rightBackgroundHeight: '',
        rightTextBackgroundColorR: '',
        rightTextBackgroundColorG: '',
        rightTextBackgroundColorB: '',
        rightBackgroundOpacity: '',
        // rightButtonColor: '',
        // rightButtonBackgroundColor: '',
        rightButton1: false,
        rightButtonText1: '',
        rightButtonLink1: '',
        rightButton2: false,
        rightButtonText2: '',
        rightButtonLink2: '',
        rightButton3: false,
        rightButtonText3: '',
        rightButtonLink3: '',
        rightImageUrl: '',
        rightImageHeight: '',
        rightImageWidth: '',

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
            // fontFamily: this.state.fontFamily,
            color: this.state.fontColor,
        }

        const LeftTitle = {
            fontSize: this.state.leftTitleFontSize + 'px',
            border: 'none',
            // fontFamily: 'Zen Kurenaido, sans-serif'
        }

        const LeftBody = {
            fontSize: this.state.leftBodyFontSize + 'px',
        }

        const leftTextBackground = {
            height: this.state.leftBackgroundHeight + 'px',
            width: this.state.leftBackgroundWidth + 'px',
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
            backgroundColor: this.state.ButtonBackgroundColor ? this.state.ButtonBackgroundColor : 'black',
            color: this.state.ButtonColor ? this.state.ButtonColor : 'white',
            padding: '12px 50px',
            border: 'none',
            cursor: 'pointer',
            margin: '5px',
        }

        const rightTitle = {
            fontSize: this.state.rightTitleFontSize + 'px',
            border: 'none',
            // fontFamily: 'Zen Kurenaido, sans-serif'
        }

        const rightBody = {
            fontSize: this.state.rightBodyFontSize + 'px',
        }

        const rightTextBackground = {
            height: this.state.rightBackgroundHeight + 'px',
            width: this.state.rightBackgroundWidth + 'px',
            background: 'rgba(' + this.state.rightTextBackgroundColorR + ', ' + this.state.rightTextBackgroundColorG + ', ' + this.state.rightTextBackgroundColorB + ', ' + this.state.rightBackgroundOpacity +')',
            padding: '10px',
        }

        const templateRight = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: this.state.rightJustifyContent,
            alignItems: this.state.rightAlignItems,
        }

        console.log(templateRight)


        return (
            <div className='createContainer'>
                <div className='create'>
                    <div className='nav'>

                    <CopyToClipboard text='copied'>
                        <div><button className='PinkBtn'>Copy Code</button></div>
                    </CopyToClipboard>

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
                        {/* <div>Font-Family</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({fontFamily: x})
                        }}
                        ></input> */}
                        <div>Font-Color</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({fontColor: x})
                        }}
                        ></input>
                        <h1>Left Section</h1>
                        <div>Title</div>
                        <input
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftTitle: x})
                        }} 
                        ></input>
                        <div>Title Font-Size</div>
                        <input
                        type='number'
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
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftBodyFontSize: x})
                        }} 
                        ></input>
                        <hr/>
                        <h2>Pricing</h2>
                        
                        <div>
                            <h4>Pick A Pricing Style</h4>
                            <div>Option 1</div>
                            <img src={OptionOneImg} alt='' width='200px' height='100px'
                                onClick={()=>{
                                    this.setState({leftPricingOption: 'one'})
                                }}
                            />
                            {this.state.leftPricingOption === 'one' ? 
                            <div>
                                <div>Month lease </div>
                                <input 
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionOneMonthlyLease: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionOneMonthly: x})
                                    }}
                                ></input>
                                <div>MSRP</div>
                                <input
                                    // type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionOneMSRP: x})
                                    }}
                                ></input>
                            </div> : null}
                            <div>Option 2</div>
                            <img src={OptionTwoImg} alt='' width='200px' height='100px'
                                onClick={()=>{
                                    this.setState({leftPricingOption: 'two'})
                                }}
                            />
                            {this.state.leftPricingOption === 'two' ? 
                            <div>
                                <div>APR</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionTwoAPR: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionTwoMonthly: x})
                                    }}
                                ></input>
                            </div> : null}
                            <div>Option 3</div>
                            <img src={OptionThreeImg} alt='' width='200px' height='150px'
                                onClick={()=>{
                                    this.setState({leftPricingOption: 'three'})
                                }}
                            />
                            {this.state.leftPricingOption === 'three' ? 
                            <div>
                                <div>Month lease</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionThreeMonthlyLease: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionThreeMonthly: x})
                                    }}
                                ></input>
                                <div>MSRP</div>
                                <input
                                    // type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionThreeMSRP: x})
                                    }}
                                ></input>
                            </div> : null}
                        </div> 
                        <button className='whiteBtn'
                        onClick = {() => {
                            this.setState({leftPricingOption: ''})
                        }} 
                        >Remove Pricing</button>
                        <hr/>
                        <h3>Regional Offer</h3>
                        <img src={RegionalOfferImg} alt='' width='250px' height='180px'
                        onClick={()=>{
                            this.setState({leftAddDropDown: true})
                        }}
                        />
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
                            <div>Section One apr</div>
                            <input
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({leftSectionOneApr: event.target.value})
                                }}
                            ></input>
                            <div>Section One Monthly</div>
                            <input
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({leftSectionOneMonthly: event.target.value})
                                }}
                            ></input>
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
                            <div>Section Two apr</div>
                            <input
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({leftSectionTwoApr: event.target.value})
                                }}
                            ></input>
                            <div>Section two Monthly</div>
                            <input
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({leftSectionTwoMonthly: event.target.value})
                                }}
                            ></input>
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
                            <div>Section Three apr</div>
                            <input
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({leftSectionThreeApr: event.target.value})
                                }}
                            ></input>
                            <div>Section Three Monthly</div>
                            <input
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({leftSectionThreeMonthly: event.target.value})
                                }}
                            ></input>
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
                            <div>Section Four apr</div>
                            <input
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({leftSectionFourApr: event.target.value})
                                }}
                            ></input>
                            <div>Section Four Monthly</div>
                            <input
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({leftSectionFourMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Four</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS4D: x})
                            }}
                            ></input>
                            <div><button className='whiteBtn' 
                            onClick={()=>{
                            this.setState({leftAddDropDown: false})
                            }}
                            >Remove Offer</button></div>
                        </div> 
                        : null}
                        <hr/>
                        <h3>Background</h3>
                        <div>Text Background size width</div>
                        <input
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftBackgroundWidth: x})
                        }} 
                        ></input>
                        <div>Text Background size height</div>
                        <input
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftBackgroundHeight: x})
                        }} 
                        ></input>
                        <div>Text Background color</div>
                        <div> rgb(
                        <input
                        type='number'
                        className='rgbInputs'
                        placeholder='R'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftTextBackgroundColorR: x})
                        }} 
                        ></input>
                        <input
                        type='number'
                        className='rgbInputs'
                        placeholder='G'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftTextBackgroundColorG: x})
                        }} 
                        ></input>
                        <input
                        type='number'
                        className='rgbInputs'
                        placeholder='B'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({leftTextBackgroundColorB: x})
                        }} 
                        ></input>
                        
                        <input
                        type='number'
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
                        <div><button
                        className='whiteBtn'
                        onClick = {()=>{
                            let leftButton1 = this.state.leftButton1
                            this.setState({leftButton1: !leftButton1})
                        }}
                        >{this.state.leftButton1 ? 'Remove Button' : 'Add Button'}</button></div>

                        {this.state.leftButton1 ? <div>
                            <div>Button Background color</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                console.log(x)
                                this.setState({ButtonBackgroundColor: x})
                            }} 
                            ></input>
                            <div>Button color</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                console.log(x)
                                this.setState({ButtonColor: x})
                            }} 
                            ></input>
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
                    
                    {/* <div><button
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
                        </div>: null} */}
                    
                        <hr/>
                        <h3>Insert Image</h3>
                        <input placeholder='Image Url'
                            onChange = {(event) => {
                                this.setState({leftImageUrl: event.target.value})
                            }} 
                        />
                        <div>Height</div>
                        <input 
                            onChange = {(event) => {
                                this.setState({leftImageHeight: event.target.value})
                            }} 
                        />
                        <div>Width</div>
                        <input 
                            onChange = {(event) => {
                                this.setState({leftImageWidth: event.target.value})
                            }} 
                        />
                        <hr/>
                        <hr/>
                        <h1>Right Section</h1>



                        <div>Title</div>
                        <input
                        type='text'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTitle: x})
                        }} 
                        ></input>
                        <div>Title Font-Size</div>
                        <input
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTitleFontSize: x})
                        }}
                        ></input>
                        <hr/>
                        <div>Body</div>
                        <input
                        type='text'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBody: x})
                        }} 
                        ></input>
                        <div>Body Font-Size</div>
                        <input
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBodyFontSize: x})
                        }} 
                        ></input>
                        <hr/>
                        <h2>Pricing</h2>
                        
                        <div>
                            <h4>Pick A Pricing Style</h4>
                            <div>Option 1</div>
                            <img src={OptionOneImg} alt='' width='200px' height='100px'
                                onClick={()=>{
                                    this.setState({rightPricingOption: 'one'})
                                }}
                            />
                            {this.state.rightPricingOption === 'one' ? 
                            <div>
                                <div>Month lease </div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionOneMonthlyLease: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionOneMonthly: x})
                                    }}
                                ></input>
                                <div>MSRP</div>
                                <input
                                    // type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionOneMSRP: x})
                                    }}
                                ></input>
                            </div> : null}
                            <div>Option 2</div>
                            <img src={OptionTwoImg} alt='' width='200px' height='100px'
                                onClick={()=>{
                                    this.setState({rightPricingOption: 'two'})
                                }}
                            />
                            {this.state.rightPricingOption === 'two' ? 
                            <div>
                                <div>APR</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionTwoAPR: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                type='number'
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({rightPricingOptionTwoMonthly: x})
                                }}
                                ></input>
                            </div> : null}
                            <div>Option 3</div>
                            <img src={OptionThreeImg} alt='' width='200px' height='150px'
                                onClick={()=>{
                                    this.setState({rightPricingOption: 'three'})
                                }}
                            />
                            {this.state.rightPricingOption === 'three' ? 
                            <div>
                                <div>Month lease</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionThreeMonthlyLease: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionThreeMonthly: x})
                                    }}
                                ></input>
                                <div>MSRP</div>
                                <input
                                    // type='number' 
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionThreeMSRP: x})
                                    }}
                                ></input>
                            </div> : null}
                        </div> 
                        <button className='whiteBtn'
                        onClick = {() => {
                            this.setState({rightPricingOption: ''})
                        }} 
                        >Remove Pricing</button>
                        <hr/>
                        <h3>Regional Offer</h3>
                        <img src={RegionalOfferImg} alt='' width='250px' height='180px'
                        onClick={()=>{
                            this.setState({rightAddDropDown: true})
                        }}
                        />
                        {this.state.rightAddDropDown ? 
                        <div>
                            <div>Drop Down Title</div>
                            <input 
                            placeholder='ex: reginal offers'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownTitle: x})
                            }} 
                            ></input>
                            <div>Section One title</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS1T: x})
                            }}
                            ></input>
                            <div>Section One apr</div>
                            <input
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({rightSectionOneApr: event.target.value})
                                }}
                            ></input>
                            <div>Section One Monthly</div>
                            <input
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({rightSectionOneMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details One</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS1D: x})
                            }}
                            ></input>

                            <div>Section Two title</div>
                            <input 
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS2T: x})
                            }}
                            ></input>
                            <div>Section Two apr</div>
                            <input
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({rightSectionTwoApr: event.target.value})
                                }}
                            ></input>
                            <div>Section two Monthly</div>
                            <input
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({rightSectionTwoMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Two</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS2D: x})
                            }}
                            ></input>

                            <div>Section Three title</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS3T: x})
                            }}
                            ></input>
                            <div>Section Three apr</div>
                            <input
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({rightSectionThreeApr: event.target.value})
                                }}
                            ></input>
                            <div>Section Three Monthly</div>
                            <input
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({rightSectionThreeMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Three</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS3D: x})
                            }}
                            ></input>
                            <div>Section Four title</div>
                            <input
                                onChange = {(event) => {
                                    let x = event.target.value
                                    this.setState({rightDropDownS4T: x})
                                }}
                            ></input>
                            <div>Section Four apr</div>
                            <input
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({rightSectionFourApr: event.target.value})
                                }}
                            ></input>
                            <div>Section Four Monthly</div>
                            <input
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({rightSectionFourMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Four</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS4D: x})
                            }}
                            ></input>
                            <div><button className='whiteBtn' 
                            onClick={()=>{
                            this.setState({rightAddDropDown: false})
                            }}
                            >Remove Offer</button></div>
                        </div> 
                        : null}
                        <hr/>
                        <h3>Background</h3>
                        <div>Text Background size width</div>
                        <input
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBackgroundWidth: x})
                        }} 
                        ></input>
                        <div>Text Background size height</div>
                        <input
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBackgroundHeight: x})
                        }} 
                        ></input>
                        <div>Text Background color</div>
                        <div> rgb(
                        <input
                        type='number'
                        className='rgbInputs'
                        placeholder='R'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTextBackgroundColorR: x})
                        }} 
                        ></input>
                        <input
                        type='number'
                        className='rgbInputs'
                        placeholder='G'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTextBackgroundColorG: x})
                        }} 
                        ></input>
                        <input
                        type='number'
                        className='rgbInputs'
                        placeholder='B'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTextBackgroundColorB: x})
                        }} 
                        ></input>
                        
                        <input
                        type='number'
                        placeholder='O'
                        className='rgbInputs'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBackgroundOpacity: x})
                        }} 
                        ></input>
                        )</div>
                        <h4>Background Position</h4>
                        <div>Justify Content (Vertical)</div>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightJustifyContent: 'center'})}}>center</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightJustifyContent: 'flex-start'})}}>flex-start</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightJustifyContent: 'flex-end'})}}>flex-end</button>
                        <div>Align Items (Horizontal)</div>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightAlignItems: 'center'})}}>center</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightAlignItems: 'flex-start'})}}>flex-start</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightAlignItems: 'flex-end'})}}>flex-end</button>
                        <hr/>
                        <h3>Buttons</h3>
                        <div><button
                        className='whiteBtn'
                        onClick = {()=>{
                            let rightButton1 = this.state.rightButton1
                            this.setState({rightButton1: !rightButton1})
                        }}
                        >{this.state.rightButton1 ? 'Remove Button' : 'Add Button'}</button></div>

                        {this.state.rightButton1 ? <div>
                            <div>Button Background color</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                console.log(x)
                                this.setState({ButtonBackgroundColor: x})
                            }} 
                            ></input>
                            <div>Button color</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                console.log(x)
                                this.setState({ButtonColor: x})
                            }} 
                            ></input>
                            <div>Button text</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonText1: x})
                            }} 
                            ></input>
                        
                            <div>Button link</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonLink1: x})
                            }} 
                            ></input>
                        </div>: null}
                    
                    <div><button
                    className='whiteBtn'
                        onClick = {()=>{
                            let rightButton2 = this.state.rightButton2
                            this.setState({rightButton2: !rightButton2})
                        }}
                        >{this.state.rightButton2 ? 'Remove Button' : 'Add Button'}</button></div>
                        {this.state.rightButton2 ? <div>
                            <div>Button text</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonText2: x})
                            }} 
                            ></input>
                        
                            <div>Button link</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonLink2: x})
                            }} 
                            ></input>
                        </div>: null}
                    
                    {/* <div><button
                    className='whiteBtn'
                        onClick = {()=>{
                            let rightButton3 = this.state.rightButton3
                            this.setState({rightButton3: !rightButton3})
                        }}
                        >{this.state.rightButton3 ? 'Remove Button' : 'Add Button'}</button></div>
                        {this.state.rightButton3 ? <div>
                            <div>Button text</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonText3: x})
                            }} 
                            ></input>
                        
                            <div>Button link</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonLink3: x})
                            }} 
                            ></input>
                        </div>: null} */}
                    
                        <hr/>
                        <h3>Insert Image</h3>
                        <input placeholder='Image Url'
                            onChange = {(event) => {
                                this.setState({rightImageUrl: event.target.value})
                            }} 
                        />
                        <div>Height</div>
                        <input 
                            onChange = {(event) => {
                                this.setState({rightImageHeight: event.target.value})
                            }} 
                        />
                        <div>Width</div>
                        <input 
                            onChange = {(event) => {
                                this.setState({rightImageWidth: event.target.value})
                            }} 
                        />

                    {/* ______________________________________ */}

                    </div>
                    <div className='templateContainer'>
                        <div className='template' style={template} >
                            <div className='templateLeft' style={templateLeft}>
                                <div style={leftTextBackground}>
                                    {this.state.leftTitle ? <h1 style={LeftTitle}>{this.state.leftTitle}</h1> : null}
                                    {this.state.leftBody ? <p style={LeftBody}>{this.state.leftBody}</p> : null}
                                    {this.state.leftPricingOption === 'one' ? 
                                    <div className='pricingContainer'>
                                        <div>{this.state.leftPricingOptionOneMonthlyLease ? this.state.leftPricingOptionOneMonthlyLease : '36'} month lease</div>
                                        <div><span className='pricing'>${this.state.leftPricingOptionOneMonthly ? this.state.leftPricingOptionOneMonthly : '439'}</span> / month</div>
                                        <div>MSRP: ${this.state.leftPricingOptionOneMSRP ? this.state.leftPricingOptionOneMSRP : '40,745'}</div>
                                    </div>
                                    
                                    : this.state.leftPricingOption === 'two' ?
                                    <div className='pricingContainerOptionTwo'>
                                            <div className='pricingOptionTwo'><span className='pricing'>{this.state.leftPricingOptionTwoAPR ? this.state.leftPricingOptionTwoAPR : '2'}</span>% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='pricingOptionTwo'><span className='pricing'>${this.state.leftPricingOptionTwoMonthly ? this.state.leftPricingOptionTwoMonthly : '399'}</span>/mo.</div>
                                    </div>

                                    : this.state.leftPricingOption === 'three' ?
                                    <div className='pricingContainer'>
                                        <div>{this.state.leftPricingOptionThreeMonthlyLease ? this.state.leftPricingOptionThreeMonthlyLease : '24'} month lease</div>
                                        <div><span className='pricing'>${this.state.leftPricingOptionThreeMonthly ? this.state.leftPricingOptionThreeMonthly : '439'}</span> / month</div>
                                        <hr className='pricingLineVirtical'></hr>
                                        <div>Buy for</div>
                                        <div><span className='pricing'>${this.state.leftPricingOptionThreeMSRP ? this.state.leftPricingOptionThreeMSRP : '42,300'}</span></div>
                                        <div>Limited availability at this price</div>
                                    </div> : null}
                                    {this.state.leftButton1 ? <a href={this.state.leftButtonLink1}><button style={bannerBtn}>{this.state.LeftButtonText1 ? this.state.LeftButtonText1 : 'button 1'}</button></a> : null}
                                    {this.state.leftButton2 ? <a href={this.state.leftButtonLink2}><button style={bannerBtn}>{this.state.LeftButtonText2 ? this.state.LeftButtonText2 : 'button 2'}</button></a> : null}
                                    {/* {this.state.leftButton3 ? <a href={this.state.leftButtonLink3}><button style={bannerBtnBottom}>{this.state.LeftButtonText3 ? this.state.LeftButtonText3 : 'button 3'}</button></a> : null} */}
                                    {this.state.leftImageUrl ? <div><img src={this.state.leftImageUrl} alt='' width={this.state.leftImageWidth} height={this.state.leftImageHeight}/></div> : null}
                                    {this.state.leftAddDropDown ? <div className='reginalOffersContainer'>
                                        <div>
                                            {this.state.LeftDropDownTitle ? this.state.LeftDropDownTitle : 'REGIONAL OFFERS'}
                                        </div>
                                    <button className='reginalOffersBtn' onClick={dropDownOne}>{this.state.LeftDropDownS1T ? this.state.LeftDropDownS1T : '2021 finance'}</button>
                                    <div id="dropDownOne">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>{this.state.leftSectionOneApr ? this.state.leftSectionOneApr : '0'}% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>{this.state.leftSectionOneMonthly ? this.state.leftSectionOneMonthly : '0'}/mo.</div>
                                        </div>
                                        <button onClick={offerDetailsOne} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsOne">
                                            {this.state.LeftDropDownS1D ? this.state.LeftDropDownS1D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownTwo}>{this.state.LeftDropDownS2T ? this.state.LeftDropDownS2T : '2022 finance'}</button>
                                    <div id="dropDownTwo">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>{this.state.leftSectionTwoApr ? this.state.leftSectionTwoApr : '0'}% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>{this.state.leftSectionTwoMonthly ? this.state.leftSectionTwoMonthly : '0'}/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsTwo} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsTwo">
                                            {this.state.LeftDropDownS2D ? this.state.LeftDropDownS2D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownThree}>{this.state.LeftDropDownS3T ? this.state.LeftDropDownS3T : '2021 cash'}</button>
                                    <div id="dropDownThree">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>{this.state.leftSectionThreeApr ? this.state.leftSectionThreeApr : '0'}% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>{this.state.leftSectionThreeMonthly ? this.state.leftSectionThreeMonthly : '0'}/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsThree} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsThree">
                                            {this.state.LeftDropDownS3D ? this.state.LeftDropDownS3D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownFour}>{this.state.LeftDropDownS4T ? this.state.LeftDropDownS4T : '2020 cash'}</button>
                                    <div id="dropDownFour">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>{this.state.leftSectionFourApr ? this.state.leftSectionFourApr : '0'}% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>{this.state.leftSectionFourMonthly ? this.state.leftSectionFourMonthly : '0'}/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsFour} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsFour">
                                            {this.state.LeftDropDownS4D ? this.state.LeftDropDownS4D : 'offer details text here'}
                                        </div>
                                    </div>
                                    </div> : null}
                                </div>
                            </div>
                            <div className='templateRight' style={templateRight}>
                            <div style={rightTextBackground}>
                                    {this.state.rightTitle ? <h1 style={rightTitle}>{this.state.rightTitle}</h1> : null}
                                    {this.state.rightBody ? <p style={rightBody}>{this.state.rightBody}</p> : null}
                                    {this.state.rightPricingOption === 'one' ? 
                                    <div className='pricingContainer'>
                                        <div>{this.state.rightPricingOptionOneMonthlyLease ? this.state.rightPricingOptionOneMonthlyLease : '36'} month lease</div>
                                        <div><span className='pricing'>${this.state.rightPricingOptionOneMonthly ? this.state.rightPricingOptionOneMonthly : '439'}</span> / month</div>
                                        <div>MSRP: ${this.state.rightPricingOptionOneMSRP ? this.state.rightPricingOptionOneMSRP : '40,745'}</div>
                                    </div>
                                    
                                    : this.state.rightPricingOption === 'two' ?
                                    <div className='pricingContainerOptionTwo'>
                                            <div className='pricingOptionTwo'><span className='pricing'>{this.state.rightPricingOptionTwoAPR ? this.state.rightPricingOptionTwoAPR : '2'}</span>% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='pricingOptionTwo'><span className='pricing'>${this.state.rightPricingOptionTwoMonthly ? this.state.rightPricingOptionTwoMonthly : '399'}</span>/mo.</div>
                                    </div>

                                    : this.state.rightPricingOption === 'three' ?
                                    <div className='pricingContainer'>
                                        <div>{this.state.rightPricingOptionThreeMonthlyLease ? this.state.rightPricingOptionThreeMonthlyLease : '24'} month lease</div>
                                        <div><span className='pricing'>${this.state.rightPricingOptionThreeMonthly ? this.state.rightPricingOptionThreeMonthly : '439'}</span> / month</div>
                                        <hr className='pricingLineVirtical'></hr>
                                        <div>Buy for</div>
                                        <div><span className='pricing'>${this.state.rightPricingOptionThreeMSRP ? this.state.rightPricingOptionThreeMSRP : '42,300'}</span></div>
                                        <div>Limited availability at this price</div>
                                    </div> : null}
                                    {this.state.rightButton1 ? <a href={this.state.rightButtonLink1}><button style={bannerBtn}>{this.state.rightButtonText1 ? this.state.rightButtonText1 : 'button 1'}</button></a> : null}
                                    {this.state.rightButton2 ? <a href={this.state.rightButtonLink2}><button style={bannerBtn}>{this.state.rightButtonText2 ? this.state.rightButtonText2 : 'button 2'}</button></a> : null}
                                    {/* {this.state.rightButton3 ? <a href={this.state.rightButtonLink3}><button style={bannerBtn}>{this.state.rightButtonText3 ? this.state.rightButtonText3 : 'button 3'}</button></a> : null} */}
                                    {this.state.rightImageUrl ? <div><img src={this.state.rightImageUrl} alt='' width={this.state.rightImageWidth} height={this.state.rightImageHeight}/></div> : null}
                                    {this.state.rightAddDropDown ? <div className='reginalOffersContainer'>
                                        <div>
                                            {this.state.rightDropDownTitle ? this.state.rightDropDownTitle : 'REGIONAL OFFERS'}
                                        </div>
                                    <button className='reginalOffersBtn' onClick={dropDownOne}>{this.state.rightDropDownS1T ? this.state.rightDropDownS1T : '2021 finance'}</button>
                                    <div id="dropDownOne">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>{this.state.rightSectionOneApr ? this.state.rightSectionOneApr : '0'}% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>{this.state.rightSectionOneMonthly ? this.state.rightSectionOneMonthly : '0'}/mo.</div>
                                        </div>
                                        <button onClick={offerDetailsOne} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsOne">
                                            {this.state.rightDropDownS1D ? this.state.rightDropDownS1D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownTwo}>{this.state.rightDropDownS2T ? this.state.rightDropDownS2T : '2022 finance'}</button>
                                    <div id="dropDownTwo">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>{this.state.rightSectionTwoApr ? this.state.rightSectionTwoApr : '0'}% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>{this.state.rightSectionTwoMonthly ? this.state.rightSectionTwoMonthly : '0'}/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsTwo} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsTwo">
                                            {this.state.rightDropDownS2D ? this.state.rightDropDownS2D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownThree}>{this.state.rightDropDownS3T ? this.state.rightDropDownS3T : '2021 cash'}</button>
                                    <div id="dropDownThree">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>{this.state.rightSectionThreeApr ? this.state.rightSectionThreeApr : '0'}% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>{this.state.rightSectionThreeMonthly ? this.state.rightSectionThreeMonthly : '0'}/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsThree} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsThree">
                                            {this.state.rightDropDownS3D ? this.state.rightDropDownS3D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={dropDownFour}>{this.state.rightDropDownS4T ? this.state.rightDropDownS4T : '2020 cash'}</button>
                                    <div id="dropDownFour">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'>{this.state.rightSectionFourApr ? this.state.rightSectionFourApr : '0'}% apr</div>
                                            <div className='dropDownPrice'><div class="vl"></div><div>financing</div> up to<div class="vl"></div></div>
                                            <div className='dropDownPrice'>{this.state.rightSectionFourMonthly ? this.state.rightSectionFourMonthly : '0'}/mo.</div>
                                        </div>

                                        <button onClick={offerDetailsFour} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="detailsFour">
                                            {this.state.rightDropDownS4D ? this.state.rightDropDownS4D : 'offer details text here'}
                                        </div>
                                    </div>
                                    </div> : null}
                                </div>
                            {/* </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;