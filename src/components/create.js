import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import OptionOneImg from './images/optionOne.png';
import OptionTwoImg from './images/optionTwo.png';
import OptionThreeImg from './images/optionThree.png';
import RegionalOfferImg from './images/regionalOffer.png';
import OptionFourImg from './images/optionFour.png';

class Create extends Component {

    state = {
        bannerDropDown: false,
        topNavDisplay: 'title',
        bannerHeight: '500',
        backgroundImgUrl: '',
        fontFamily: '',
        fontColor: '',
        leftTitle: '',
        displayLeftNav: true,
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
        leftOptionFourApr: '',
        leftOptionFourMo: '',
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
        optionFontSize: '',
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
        buttonColor: '',
        buttonBackgroundColor: '',
        buttonPadding: '',
        buttonRadius: '',
        leftButton1: false,
        leftButtonText1: '',
        leftButtonLink1: '',
        leftButton2: false,
        leftButtonText2: '',
        leftButtonLink2: '',
        leftButton3: false,
        leftButtonText3: '',
        leftButtonLink3: '',
        // leftImageUrl: '',
        // leftImageHeight: '',
        // leftImageWidth: '',
        leftAddOfferDetails: false,
        leftAddOfferDetailsText: '',

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
        rightOptionFourApr: '',
        rightOptionFourMo: '',
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
        rightAddOfferDetails: false,
        rightAddOfferDetailsText: '',
    }

    render() {

        const leftOfferDetailsOne = () => {
            let x = document.getElementById("leftDetailsOne");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const leftOfferDetailsTwo = () => {
            let x = document.getElementById("leftDetailsTwo");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const leftOfferDetailsThree = () => {
            let x = document.getElementById("leftDetailsThree");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const leftOfferDetailsFour = () => {
            let x = document.getElementById("leftDetailsFour");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const leftDropDownOne = () => {
            let x = document.getElementById("leftDropDownOne");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const leftDropDownTwo = () => {
            let x = document.getElementById("leftDropDownTwo");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const leftDropDownThree = () => {
            let x = document.getElementById("leftDropDownThree");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const leftDropDownFour = () => {
            let x = document.getElementById("leftDropDownFour");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
        const rightOfferDetailsOne = () => {
            let x = document.getElementById("rightDetailsOne");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const rightOfferDetailsTwo = () => {
            let x = document.getElementById("rightDetailsTwo");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const rightOfferDetailsThree = () => {
            let x = document.getElementById("rightDetailsThree");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const rightOfferDetailsFour = () => {
            let x = document.getElementById("rightDetailsFour");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const rightDropDownOne = () => {
            let x = document.getElementById("rightDropDownOne");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const rightDropDownTwo = () => {
            let x = document.getElementById("rightDropDownTwo");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const rightDropDownThree = () => {
            let x = document.getElementById("rightDropDownThree");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

        const rightDropDownFour = () => {
            let x = document.getElementById("rightDropDownFour");
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
            height: (this.state.bannerHeight ? this.state.bannerHeight : '500') + 'px',
            color: this.state.fontColor,
            display: 'flex',
            flexDirection: 'row',
            // fontFamily: this.state.fontFamily,
        }

        const LeftTitle = {
            fontSize: this.state.leftTitleFontSize + 'px',
            margin: '10px',
        }

        const LeftBody = {
            fontSize: this.state.leftBodyFontSize + 'px',
            margin: '10px',
        }

        const leftTextBackground = {
            height: (this.state.leftBackgroundHeight ? this.state.leftBackgroundHeight + 'px' : 'auto'),
            width: (this.state.leftBackgroundWidth ? this.state.leftBackgroundWidth + 'px' : 'auto'),
            background: 'rgba(' + (this.state.leftTextBackgroundColorR ? this.state.leftTextBackgroundColorR : '0') + ', ' + (this.state.leftTextBackgroundColorG ? this.state.leftTextBackgroundColorG : '0') + ', ' + (this.state.leftTextBackgroundColorB ? this.state.leftTextBackgroundColorB : '0') + ', ' + (this.state.leftBackgroundOpacity ? this.state.leftBackgroundOpacity : '0') +')',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

        const templateLeft = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: this.state.leftJustifyContent,
            alignItems: this.state.leftAlignItems,
        }

        const bannerBtnContainer = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '30px',
            marginBottom: '10px',
            textDecoration: 'none',
        }

        const bannerBtn = {
            backgroundColor: this.state.buttonBackgroundColor ? this.state.buttonBackgroundColor : 'black',
            color: this.state.buttonColor ? this.state.buttonColor : 'white',
            padding: this.state.buttonPadding ? this.state.buttonPadding : '12px 50px',
            borderRadius: this.state.buttonRadius ? this.state.buttonRadius : '0xp',
            border: 'none',
            cursor: 'pointer',
            margin: '5px',
            alignItems: 'center',
        }

        const rightTitle = {
            fontSize: this.state.rightTitleFontSize + 'px',
            border: 'none',
        }

        const rightBody = {
            fontSize: this.state.rightBodyFontSize + 'px',
        }

        const rightTextBackground = {
            height: (this.state.rightBackgroundHeight ? this.state.rightBackgroundHeight + 'px' : 'auto'),
            width: (this.state.rightBackgroundWidth ? this.state.rightBackgroundWidth + 'px' : 'auto'),
            background: 'rgba(' + (this.state.rightTextBackgroundColorR ? this.state.rightTextBackgroundColorR : '0') + ', ' + (this.state.rightTextBackgroundColorG ? this.state.rightTextBackgroundColorG : '0') + ', ' + (this.state.rightTextBackgroundColorB ? this.state.rightTextBackgroundColorB : '0') + ', ' + (this.state.rightBackgroundOpacity ? this.state.rightBackgroundOpacity : '0') +')',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

        const templateRight = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: this.state.rightJustifyContent,
            alignItems: this.state.rightAlignItems,
        }

        const pricing = {
            fontWeight: 'bold',
            fontSize: this.state.optionFontSize ? this.state.optionFontSize + 'px' : '50px',
        }

        // const leftImage = {
        //     width: this.state.leftImageWidth + 'px',
        //     height: this.state.leftImageHeight + 'px',
        // }

        const rightImage = {
            width: this.state.rightImageWidth + 'px',
            height: this.state.rightImageHeight + 'px',
        }

        // const offerDetails = () => {
        //     let x = document.getElementById('viewOfferDetails')
            
        //     if (x.style.display = "block") {
        //         x.style.display = "none";
        //     } else if (x.style.display = "none") {
        //         x.style.display = "block";
        //     }
        // }

        const copyCode = () => {
            let filtered = [];
            let code = [
                '<div class=\'template\'>\n',
                '<div class=\'templateLeft\'>\n',
                '<div class=\'leftTextBackground\'>\n',
                (this.state.leftTitle ? '<h1 data-v-8504edf8 class=\'leftTitle\'>' + (this.state.leftTitle) + '</h1>\n' : null) + '\n',
                (this.state.leftBody ? '<p class=\'leftBody\'>' + (this.state.leftBody) + '</p>\n' : null) + '\n',
                (this.state.leftPricingOption === 'one' ? '<div class=\'pricingContainerOptionOne\'>\n<div>' + (this.state.leftPricingOptionOneMonthlyLease ? this.state.leftPricingOptionOneMonthlyLease : '36') + ' month lease</div>\n<div><span class=\'pricing\'>$' + (this.state.leftPricingOptionOneMonthly ? this.state.leftPricingOptionOneMonthly : '439') + '</span> / month</div>\n<div>MSRP: $' + (this.state.leftPricingOptionOneMSRP ? this.state.leftPricingOptionOneMSRP : '40,745') + '</div>\n</div>': null) + '\n',
                (this.state.leftPricingOption === 'two' ? '<div class=\'pricingContainerOptionTwo\'>\n<div class=\'pricingOptionTwo\'><span class=\'pricing\'>' + (this.state.leftPricingOptionTwoAPR ? this.state.leftPricingOptionTwoAPR : '2') + '</span>% apr</div>\n<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>\n<div class=\'pricingOptionTwo\'><span class=\'pricing\'>$' + (this.state.leftPricingOptionTwoMonthly ? this.state.leftPricingOptionTwoMonthly : '399' ) + '</span>/mo.</div>\n</div>' : null) + '\n',
                (this.state.leftPricingOption === 'three' ? '<div class=\'pricingContainerOptionThree\'>\n<div>' + (this.state.leftPricingOptionThreeMonthlyLease ? this.state.leftPricingOptionThreeMonthlyLease : '24') + 'month lease</div>\n<div><span class=\'pricing\'>$' + (this.state.leftPricingOptionThreeMonthly ? this.state.leftPricingOptionThreeMonthly : '439') + '</span> / month</div>\n<hr class=\'pricingLineVirtical\'></hr>\n<div>Buy for</div>\n<div><span class=\'pricing\'>$' + (this.state.leftPricingOptionThreeMSRP ? this.state.leftPricingOptionThreeMSRP : '42,300') + '</span></div>\n<div>Limited availability at this price</div>\n</div>' : null) + '\n',
                (this.state.leftPricingOption === 'four' ? '<div class=\'pricingContainerOptionFour\'>\n<div><span class=\'pricing\'>' + (this.state.leftOptionFourApr ? this.state.leftOptionFourApr : '1.9') + '%</span> APR</div>\n<div>for ' + (this.state.leftOptionFourMo ? this.state.leftOptionFourMo : '24-48') + 'mos.</div>\n</div>' : null ) + '\n',
                (this.state.leftButton1 ? '<div class=\'bannerBtnContainer\'>' : null) + '\n',
                (this.state.leftButton1 ? '<a href=' + (this.state.leftButtonLink1) + '><button class=\'bannerBtn\'>' + (this.state.LeftButtonText1 ? this.state.LeftButtonText1 : 'button 1') + '</button></a>' : null) + '\n',
                (this.state.leftButton2 ? '<a href=' + (this.state.leftButtonLink2) + '><button class=\'bannerBtn\'>' + (this.state.LeftButtonText2 ? this.state.LeftButtonText2 : 'button 1') + '</button></a>' : null) + '\n',
                (this.state.leftButton1 ? '</div>' : null) + '\n',
                (this.state.leftAddOfferDetails ? '<div class=\'offerDetailsDropdown\'>\n<span>+ view offer details</span>\n<div class=\'offerDetailsDropdownContent\'>\n<p>' + (this.state.leftAddOfferDetailsText ? this.state.leftAddOfferDetailsText : 'Hello World' ) + '</p>\n</div>\n</div>\n' : null) + '\n',
                (this.state.leftImageUrl ? '<div><img class=\'leftImage\' src=\'' + this.state.leftImageUrl + '\' alt=\'\'/></div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'reginalOffersContainer\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div>' + (this.state.LeftDropDownTitle ? this.state.LeftDropDownTitle : 'REGIONAL OFFERS') + '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<button class=\'reginalOffersBtn\' onClick=\'leftDropDownOne()\'>' + (this.state.LeftDropDownS1T ? this.state.LeftDropDownS1T : '2021 finance') + '</button>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div id=\'leftDropDownOne\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPriceContainer\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.leftSectionOneApr ? this.state.leftSectionOneApr : '0') + '</span>% apr</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.leftSectionOneMonthly ? this.state.leftSectionOneMonthly : '0') + '</span>/mo.</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<button onClick=\'leftOfferDetailsOne()\' class=\'offerDetailsBtn\'>OFFER DETAILS</button>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div id=\'leftDetailsOne\'>' + (this.state.LeftDropDownS1D ? this.state.LeftDropDownS1D : 'offer details text here') + '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<button class=\'reginalOffersBtn\' onClick=\'leftDropDownTwo()\'>' + (this.state.LeftDropDownS2T ? this.state.LeftDropDownS2T : '2022 finance') + '</button>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div id=\'leftDropDownTwo\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPriceContainer\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.leftSectionTwoApr ? this.state.leftSectionTwoApr : '0') + '</span>% apr</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.leftSectionTwoMonthly ? this.state.leftSectionTwoMonthly : '0') + '</span>/mo.</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<button onClick=\'leftOfferDetailsTwo()\' class=\'offerDetailsBtn\'>OFFER DETAILS</button>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div id=\'leftDetailsTwo\'>' + (this.state.LeftDropDownS2D ? this.state.LeftDropDownS2D : 'offer details text here') + '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<button class=\'reginalOffersBtn\' onClick=\'leftDropDownThree()\'>' + (this.state.LeftDropDownS3T ? this.state.LeftDropDownS3T : '2021 cash') + '</button>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div id=\'leftDropDownThree\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPriceContainer\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.leftSectionThreeApr ? this.state.leftSectionThreeApr : '0') + '</span>% apr</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.leftSectionThreeMonthly ? this.state.leftSectionThreeMonthly : '0') + '</span>/mo.</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<button onClick=\'leftOfferDetailsThree()\' class=\'offerDetailsBtn\'>OFFER DETAILS</button>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div id=\'leftDetailsThree\'>'+ (this.state.LeftDropDownS3D ? this.state.LeftDropDownS3D : 'offer details text here') + '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<button class=\'reginalOffersBtn\' onClick=\'leftDropDownFour()\'>' + (this.state.LeftDropDownS4T ? this.state.LeftDropDownS4T : '2020 cash') + '</button>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div id=\'leftDropDownFour\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPriceContainer\'>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.leftSectionFourApr ? this.state.leftSectionFourApr : '0') + '</span>% apr</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.leftSectionFourMonthly ? this.state.leftSectionFourMonthly : '0') + '</span>/mo.</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '<button onClick=\'leftOfferDetailsFour()\' class=\'offerDetailsBtn\'>OFFER DETAILS</button>' : null) + '\n',
                (this.state.leftAddDropDown ? '<div id=\'leftDetailsFour\'>' + (this.state.LeftDropDownS4D ? this.state.LeftDropDownS4D : 'offer details text here') + '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                (this.state.leftAddDropDown ? '</div>' : null) + '\n',
                '</div>\n',
                '</div>\n',
                '<div class=\'templateRight\'>\n',
                '<div class=\'rightTextBackground\'>\n',
                (this.state.rightTitle ? '<h1 class=\'rightTitle\'>' + (this.state.rightTitle) + '</h1>\n' : null) + '\n',
                (this.state.rightBody ? '<p class=\'rightBody\'>' + (this.state.rightBody) + '</p>\n' : null) + '\n',
                (this.state.rightPricingOption === 'one' ? '<div class=\'pricingContainerOptionOne\'>\n<div>' + (this.state.rightPricingOptionOneMonthlyLease ? this.state.rightPricingOptionOneMonthlyLease : '36') + ' month lease</div>\n<div><span class=\'pricing\'>$' + (this.state.rightPricingOptionOneMonthly ? this.state.rightPricingOptionOneMonthly : '439') + '</span> / month</div>\n<div>MSRP: $' + (this.state.rightPricingOptionOneMSRP ? this.state.rightPricingOptionOneMSRP : '40,745') + '</div>\n</div>': null) + '\n',
                (this.state.rightPricingOption === 'two' ? '<div class=\'pricingContainerOptionTwo\'>\n<div class=\'pricingOptionTwo\'><span class=\'pricing\'>' + (this.state.rightPricingOptionTwoAPR ? this.state.rightPricingOptionTwoAPR : '2') + '</span>% apr</div>\n<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>\n<div class=\'pricingOptionTwo\'><span class=\'pricing\'>$' + (this.state.rightPricingOptionTwoMonthly ? this.state.rightPricingOptionTwoMonthly : '399' ) + '</span>/mo.</div>\n</div>' : null) + '\n',
                (this.state.rightPricingOption === 'three' ? '<div class=\'pricingContainerOptionThree\'>\n<div>' + (this.state.rightPricingOptionThreeMonthlyLease ? this.state.rightPricingOptionThreeMonthlyLease : '24') + 'month lease</div>\n<div><span class=\'pricing\'>$' + (this.state.rightPricingOptionThreeMonthly ? this.state.rightPricingOptionThreeMonthly : '439') + '</span> / month</div>\n<hr class=\'pricingLineVirtical\'></hr>\n<div>Buy for</div>\n<div><span class=\'pricing\'>$' + (this.state.rightPricingOptionThreeMSRP ? this.state.rightPricingOptionThreeMSRP : '42,300') + '</span></div>\n<div>Limited availability at this price</div>\n</div>' : null) + '\n',
                (this.state.rightPricingOption === 'four' ? '<div class=\'pricingContainerOptionFour\'>\n<div><span class=\'pricing\'>' + (this.state.rightOptionFourApr ? this.state.rightOptionFourApr : '1.9') + '%</span> APR</div>\n<div>for ' + (this.state.rightOptionFourMo ? this.state.rightOptionFourMo : '24-48') + 'mos.</div>\n</div>' : null ) + '\n',
                (this.state.rightButton1 ? '<div class=\'bannerBtnContainer\'>' : null) + '\n',
                (this.state.rightButton1 ? '<a href=' + (this.state.rightButtonLink1) + '><button class=\'bannerBtn\'>' + (this.state.rightButtonText1 ? this.state.rightButtonText1 : 'button 1') + '</button></a>' : null) + '\n',
                (this.state.rightButton2 ? '<a href=' + (this.state.rightButtonLink2) + '><button class=\'bannerBtn\'>' + (this.state.rightButtonText2 ? this.state.rightButtonText2 : 'button 1') + '</button></a>' : null) + '\n',
                (this.state.rightButton1 ? '</div>' : null) + '\n',
                (this.state.rightAddOfferDetails ? '<div class=\'offerDetailsDropdown\'>\n<span>+ view offer details</span>\n<div class=\'offerDetailsDropdownContent\'>\n<p>' + (this.state.rightAddOfferDetailsText ? this.state.rightAddOfferDetailsText : 'Hello World' ) + '</p>\n</div>\n</div>\n' : null) + '\n',
                (this.state.rightImageUrl ? '<div><img class=\'rightImage\' src=\'' + this.state.rightImageUrl + '\' alt=\'\'/></div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'reginalOffersContainer\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div>' + (this.state.rightDropDownTitle ? this.state.rightDropDownTitle : 'REGIONAL OFFERS') + '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<button class=\'reginalOffersBtn\' onClick=\'rightDropDownOne()\'>' + (this.state.rightDropDownS1T ? this.state.rightDropDownS1T : '2021 finance') + '</button>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div id=\'rightDropDownOne\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPriceContainer\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.rightSectionOneApr ? this.state.rightSectionOneApr : '0') + '</span>% apr</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.rightSectionOneMonthly ? this.state.rightSectionOneMonthly : '0') + '</span>/mo.</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<button onClick=\'rightOfferDetailsOne()\' class=\'offerDetailsBtn\'>OFFER DETAILS</button>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div id=\'rightDetailsOne\'>' + (this.state.rightDropDownS1D ? this.state.rightDropDownS1D : 'offer details text here') + '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<button class=\'reginalOffersBtn\' onClick=\'rightDropDownTwo()\'>'+ (this.state.rightDropDownS2T ? this.state.rightDropDownS2T : '2022 finance') + '</button>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div id=\'rightDropDownTwo\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPriceContainer\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.rightSectionTwoApr ? this.state.rightSectionTwoApr : '0') + '</span>% apr</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.rightSectionTwoMonthly ? this.state.rightSectionTwoMonthly : '0') + '</span>/mo.</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<button onClick=\'rightOfferDetailsTwo()\' class=\'offerDetailsBtn\'>OFFER DETAILS</button>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div id=\'rightDetailsTwo\'>' + (this.state.rightDropDownS2D ? this.state.rightDropDownS2D : 'offer details text here' ) + '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<button class=\'reginalOffersBtn\' onClick=\'rightDropDownThree()\'>' + (this.state.rightDropDownS3T ? this.state.rightDropDownS3T : '2021 cash') + '</button>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div id=\'rightDropDownThree\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPriceContainer\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.rightSectionThreeApr ? this.state.rightSectionThreeApr : '0') + '</span>% apr</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.rightSectionThreeMonthly ? this.state.rightSectionThreeMonthly : '0') + '</span>/mo.</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<button onClick=\'rightOfferDetailsThree()\' class=\'offerDetailsBtn\'>OFFER DETAILS</button>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div id=\'rightDetailsThree\'>' + (this.state.rightDropDownS3D ? this.state.rightDropDownS3D : 'offer details text here') + '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<button class=\'reginalOffersBtn\' onClick=\'rightDropDownFour()\'>' + (this.state.rightDropDownS4T ? this.state.rightDropDownS4T : '2020 cash') + '</button>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div id=\'rightDropDownFour\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPriceContainer\'>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.rightSectionFourApr ? this.state.rightSectionFourApr : '0') + '</span>% apr</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><div class=\'vl\'></div><div>financing</div> up to<div class=\'vl\'></div></div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div class=\'dropDownPrice\'><span class=\'pricing\'>' + (this.state.rightSectionFourMonthly ? this.state.rightSectionFourMonthly : '0') + '</span>/mo.</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '<button onClick=\'rightOfferDetailsFour()\' class=\'offerDetailsBtn\'>OFFER DETAILS</button>' : null) + '\n',
                (this.state.rightAddDropDown ? '<div id=\'rightDetailsFour\'>' + (this.state.rightDropDownS4D ? this.state.rightDropDownS4D : 'offer details text here') + '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                (this.state.rightAddDropDown ? '</div>' : null) + '\n',
                '</div>\n',
                '</div>\n',
                '</div>\n',
                
                '<script>\n',
                'function leftOfferDetailsOne() {\n',
                'let x = document.getElementById("leftDetailsOne");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function leftOfferDetailsTwo() {\n',
                'let x = document.getElementById("leftDetailsTwo");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function leftOfferDetailsThree() {\n',
                'let x = document.getElementById("leftDetailsThree");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function leftOfferDetailsFour() {\n',
                'let x = document.getElementById("leftDetailsFour");\n',
                'if (x.style.display === "block") {\n',
                ' x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function leftDropDownOne() {\n',
                'let x = document.getElementById("leftDropDownOne");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function leftDropDownTwo() {\n',
                'let x = document.getElementById("leftDropDownTwo");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function leftDropDownThree() {\n',
                'let x = document.getElementById("leftDropDownThree");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function leftDropDownFour() {\n',
                'let x = document.getElementById("leftDropDownFour");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',

                'function rightOfferDetailsOne() {\n',
                'let x = document.getElementById("rightDetailsOne");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function rightOfferDetailsTwo() {\n',
                'let x = document.getElementById("rightDetailsTwo");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function rightOfferDetailsThree() {\n',
                'let x = document.getElementById("rightDetailsThree");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function rightOfferDetailsFour() {\n',
                'let x = document.getElementById("rightDetailsFour");\n',
                'if (x.style.display === "block") {\n',
                ' x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function rightDropDownOne() {\n',
                'let x = document.getElementById("rightDropDownOne");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function rightDropDownTwo() {\n',
                'let x = document.getElementById("rightDropDownTwo");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function rightDropDownThree() {\n',
                'let x = document.getElementById("rightDropDownThree");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                'function rightDropDownFour() {\n',
                'let x = document.getElementById("rightDropDownFour");\n',
                'if (x.style.display === "block") {\n',
                'x.style.display = "none";\n',
                '} else {\n',
                'x.style.display = "block";\n',
                '}\n',
                '}\n',
                '</script>\n',
                '<style>\n',
                '.template {\n',
                (this.state.backgroundImgUrl ? 'background-image: url(' + this.state.backgroundImgUrl + ')' : 'background-color: white') + ';\n',
                'background-repeat: no-repeat;\n',
                'background-size: 100%;\n',
                'height: ' + (this.state.bannerHeight ? this.state.bannerHeight : '500') + 'px;\n',
                'color: ' + (this.state.fontColor ? this.state.fontColor : 'black') + ';\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                (this.state.fontFamily ? 'font-family: ' + this.state.fontFamily + ';' : null) + '\n',
                'margin-bottom: 40px;\n',
                'margin-top:10px;\n',
                '}\n',
                '.LeftTitle {\n',
                'font-size: ' + this.state.leftTitleFontSize + 'px;\n',
                'margin: 5px;\n',
                '}\n',
                '.LeftBody {\n',
                'font-size: ' + this.state.leftBodyFontSize + 'px;\n',
                'margin: 5px;\n',
                '}\n',
                '.leftTextBackground {\n',
                'height: ' + this.state.leftBackgroundHeight + 'px;\n',
                'width: ' + this.state.leftBackgroundWidth + 'px;\n',
                'background-color: rgba(' + this.state.leftTextBackgroundColorR + ', ' + this.state.leftTextBackgroundColorG + ', ' + this.state.leftTextBackgroundColorB + ', ' + this.state.leftBackgroundOpacity +');\n',
                'padding: 10px;\n',
                'display: flex;\n',
                'flex-direction: column;\n',
                'align-items: center;\n',
                '}\n',
                '.templateLeft {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: ' + (this.state.leftJustifyContent ? this.state.leftJustifyContent : 'flex-start') + ';\n',
                'align-items: ' + (this.state.leftAlignItems ? this.state.leftAlignItems : 'flex-start') + ';\n',
                'width: 100%;\n',
                '}\n',
                '.bannerBtnContainer {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'align-items: center;\n',
                'margin-top: 30px;\n',
                'margin-bottom: 10px;\n',
                'text-decoration: none;\n',
                '}\n',
                '.bannerBtn {\n',
                'background-color: ' + (this.state.buttonBackgroundColor ? this.state.buttonBackgroundColor : 'black') + ';\n',
                'color: ' + (this.state.buttonColor ? this.state.buttonColor : 'white') + ';\n',
                'padding: ' + (this.state.buttonPadding ? this.state.buttonPadding : '12px 50px') + ';\n',
                'border-radius: ' + (this.state.buttonRadius ? this.state.buttonRadius : '0xp') + ';\n',
                'border: none;\n',
                'cursor: pointer;\n',
                'margin: 5px;\n',
                'align-items: center;\n',
                '}\n',
                '.rightTitle {\n',
                'font-size: ' + this.state.rightTitleFontSize + 'px;\n',
                'margin: 5px;\n',
                '}\n',
                '.rightBody {\n',
                'font-size: ' + this.state.rightBodyFontSize + 'px;\n',
                'margin: 5px;\n',
                '}\n',
                '.rightTextBackground {\n',
                'height: ' + this.state.rightBackgroundHeight + 'px;\n',
                'width: ' + this.state.rightBackgroundWidth + 'px;\n',
                'background: rgba(' + this.state.rightTextBackgroundColorR + ', ' + this.state.rightTextBackgroundColorG + ', ' + this.state.rightTextBackgroundColorB + ', ' + this.state.rightBackgroundOpacity +');\n',
                'padding: 10px;\n',
                'display: flex;\n',
                'flex-direction: column;\n',
                'align-items: center;\n',
                '}\n',
                '.templateRight {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: ' + (this.state.rightJustifyContent ? this.state.rightJustifyContent : 'flex-start') + ';\n',
                'align-items: ' + (this.state.rightAlignItems ? this.state.rightAlignItems : 'flex-start') + ';\n',
                'width: 100%;\n',
                '}\n',
                '.pricing {\n',
                'font-weight: bold;\n',
                'font-size: ' + (this.state.optionFontSize ? this.state.optionFontSize : '50') + 'px;\n',
                '}\n',
                '#leftDropDownOne {\n',
                'display: block;\n',
                'color: black;\n',
                '}\n',
                '#leftDetailsOne,\n',
                '#leftDetailsTwo, #leftDropDownTwo,\n',
                '#leftDetailsThree, #leftDropDownThree,\n',
                '#leftDetailsFour, #leftDropDownFour {\n',
                'display: none;\n',
                'color: black;\n',
                '}\n',
                '#rightDropDownOne {\n',
                'display: block;\n',
                'color: black;\n',
                '}\n',
                '#rightDetailsOne,\n',
                '#rightDetailsTwo, #rightDropDownTwo,\n',
                '#rightDetailsThree, #rightDropDownThree,\n',
                '#rightDetailsFour, #rightDropDownFour {\n',
                'display: none;\n',
                'color: black;\n',
                '}\n',
                '#leftDetailsOne\n',
                '#leftDetailsTwo\n',
                '#leftDetailsThree\n',
                '#leftDetailsFour\n',
                '#rightDetailsOne\n',
                '#rightDetailsTwo\n',
                '#rightDetailsThree\n',
                '#rightDetailsFour {',
                'background-color: rgb(203, 203, 203);\n',
                'font-size: smaller;\n',
                '}\n',
                '.reginalOffersContainer {\n',
                'display: flex;\n',
                'flex-direction: column;\n',
                'justify-content: center;\n',
                'width: 500px;\n',
                '}\n',
                '.offerDetailsBtn {\n',
                'background-color: rgb(203, 203, 203);\n',
                'border: none;\n',
                'font-weight: bold;\n',
                'text-decoration: underline;\n',
                'cursor: pointer;\n',
                'width: 100%;\n',
                'padding: 10px;\n',
                '}\n',
                '#leftDetailsOne,\n',
                '#leftDetailsTwo,\n',
                '#leftDetailsThree,\n',
                '#leftDetailsFour {\n',
                'background-color: rgb(203, 203, 203);\n',
                '}\n',
                '#rightDetailsOne,\n',
                '#rightDetailsTwo,\n',
                '#rightDetailsThree,\n',
                '#rightDetailsFour {\n',
                'background-color: rgb(203, 203, 203);\n',
                '}\n',
                '.reginalOffersBtn {\n',
                'background-color: white;\n',
                'border-top: none;\n',
                'border-right: none;\n',
                'border-right: none;\n',
                'border-bottom: 1px dotted;\n',
                'padding: 10px 100px;\n',
                'cursor: pointer;\n',
                '}\n',
                '.dropDownPriceContainer {\n',
                'display: grid;\n',
                'grid-template-columns: 33.33% 33.33% 33.33%;\n',
                'width: 100%;\n',
                'background-color: white;\n',
                'color: black;\n',
                '}\n',
                '.dropDownPrice {\n',
                'display: flex;\n',
                'flex-direction: column;\n',
                'justify-content: center;\n',
                'align-items: center;\n',
                'height: 100px;\n',
                '}\n',
                '.vl {\n',
                'border-left: 1px solid black;\n',
                'height: 20px;\n',
                '}\n',
                '.pricingContainerOptionOne, .pricingContainerOptionThree {\n',
                'display: flex;\n',
                'flex-direction: column;\n',
                'justify-content: center;\n',
                'align-items: center;\n',
                '}\n',
                '.pricingLineVirtical {\n',
                'border-top: 1px solid;\n',
                'border-bottom: none;\n',
                'border-left: none;\n',
                'border-right: none;\n',
                'width: 200px;\n',
                '}\n',
                '.pricingContainerOptionTwo {\n',
                'display: grid;\n',
                'grid-template-columns: 33.33% 33.33% 33.33%;\n',
                'height: 80px;\n',
                'width: 350px;\n',
                '}\n',
                '.pricingOptionTwo {\n',
                'display: flex;\n',
                'flex-direction: row;\n',
                'justify-content: center;\n',
                'align-items: center;\n',
                '}\n',
                '.pricingContainerOptionFour {\n',
                'display: flex;\n',
                'flex-direction: column;\n',
                'align-items: center;\n',
                '}\n',
                '.offerDetailsDropdown {\n',
                'position: relative;\n',
                'display: inline-block;\n',
                'margin: 5px\n',
                '}\n',
                '.offerDetailsDropdownContent {\n',
                'display: none;\n',
                'position: absolute;\n',
                'background-color: #f9f9f9;\n',
                'min-width: 300px;\n',
                'box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n',
                'padding: 12px 16px;\n',
                'z-index: 1;\n',
                'font-size: 10px;\n',
                'text-align: center;\n',
                'color: black;\n',
                '}\n',
                '.offerDetailsDropdown:hover .offerDetailsDropdownContent {\n',
                'display: block;\n',
                '}\n',
                '.rightImage {\n',
                'width: ' + (this.state.rightImageWidth) + 'px;\n',
                'height: ' + (this.state.rightImageheight) + 'px;\n',
                '}\n',
                // '.leftImage {\n',
                // 'width: ' + (this.state.leftImageWidth) + 'px;\n',
                // 'height: ' + (this.state.leftImageHeight) + 'px;\n',
                // '}\n',
                '@media screen and (min-width: 300px) and (max-width: 500px) {\n',
                '.template {\n',
                'background-size: 100% 100%;\n',
                'height: 180px;\n',
                '}\n',
                '.leftTitle {\n',
                'font-size: 15px;\n',
                'margin-top: 12px;\n',
                'margin-bottom: 5px;\n',
                '}\n',
                '.templateLeft, .templateRight {\n',
                'width: 50%;\n',
                '}\n',
                '.leftTextBackground {\n',
                'padding: 0px;\n',
                'height: 100%;\n',
                '}\n',
                '.pricing {\n',
                'font-size: 15px;\n',
                '}\n',
                '.leftBody {\n',
                'margin-bottom: 4px;\n',
                '}\n',
                '.bannerBtn {\n',
                'padding: 3px 25px;\n',
                'margin-top: 0px;\n',
                'margin-bottom: 0px;\n',
                '}\n',
                '.bannerBtnContainer {\n',
                'margin-bottom: 0px;\n',
                'margin-top: 3px;\n',
                '}\n',
                '.offerDetailsSpan {\n',
                'font-size: 10px;\n',
                '}\n',
                '.rightImage{\n',
                'width: 800px;\n',
                'height: 120px;\n',
                '}\n',
                '}\n',
                '@media screen and (min-width: 500px) and (max-width: 900px) {\n',
                '.template {\n',
                'background-size: 100% 100%;\n',
                'height: 250px;\n',
                '}\n',
                '.templateLeft, .templateRight {\n',
                'width: 50%;\n',
                '}\n',
                '.pricing {\n',
                'font-size: 25px;\n',
                '}\n',
                '.leftTitle {\n',
                'font-size: 25px;\n',
                'margin-top:12px;\n',
                'margin-bottom: 8px;\n',
                '}\n',
                '.leftTextBackground {\n',
                'padding: 0px;\n',
                'height: 100%;\n',
                '}\n',
                '.bannerBtnContainer {\n',
                'margin-bottom: 0px;\n',
                'margin-top: 3px;\n',
                '}\n',
                '.rightImage{\n',
                'width: 800px;\n',
                'height: 200px;\n',
                '}\n',
                '}\n',
                '@media screen and (min-width: 900px) and (max-width: 1400px) {\n',
                '.template {\n',
                'background-size: 100% 100%;\n',
                'height: 450px;\n',
                '}\n',
                '.templateLeft, .templateRight {\n',
                'width: 50%;\n',
                '}\n',
                '.leftTextBackground {\n',
                'height: 90%;\n',
                'width: 90%;\n',
                '}\n',
                '.rightImage{\n',
                'width: 800px;\n',
                'height: 250px;\n',
                '}\n',
                '.leftBody {\n',
                'margin-bottom: 5px;\n',
                '}\n',
                '.bannerBtnContainer {\n',
                'margin-top: 5px;\n',
                '}\n',
                '.leftTitle {\n',
                'margin-top: 10px;\n',
                '}\n',
                '}\n',
                '</style>\n',
            ]
            console.log(this.state.rightImageHeight)
            for (let i = 0; i < code.length; i++) {
                if (code[i] !== "[object Object]\n" && code[i] !== "null\n") {
                    filtered.push(code[i])
                }
            }

            return filtered.join('')
        }

        return (
            <div className='createContainer'>
                <div className='create'>
                    <div className='nav'>

                    <div className='topNavSection'>
                        <div className='sectionBtnContainer' >
                            <button 
                            className={this.state.displayLeftNav ? 'sectionBtnActive' : 'sectionBtnInactive'} 
                            onClick={()=>{
                                this.setState({displayLeftNav: true})
                                }}>Left Section</button>
                            <button 
                            className={this.state.displayLeftNav ? 'sectionBtnInactive' : 'sectionBtnActive'} 
                            onClick={()=>{
                                this.setState({displayLeftNav: false})
                                }}>Right Section</button>
                        </div>
                        <CopyToClipboard text={copyCode()}>
                            <div><button className='PinkBtn'>Copy Code</button></div>
                        </CopyToClipboard>
                        <button className='bannerDropDown' 
                        onClick={()=>{
                            let x = this.state.bannerDropDown
                            this.setState({bannerDropDown: !x})}}
                        >
                        <div className='iconContainer'>
                            <div className='icon'></div>
                            <div className='icon'></div>
                            <div className='icon'></div>
                        </div>
                        Banner
                        </button>
                        {this.state.bannerDropDown ? <div>
                        <div className='section'>
                            <div>Banner Height</div>
                            <input 
                            value={this.state.bannerHeight}
                            placeholder='Default 500px'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({bannerHeight: x})
                            }}
                            ></input>
                        </div>
                        <div className='section'>
                            <div>Background Image</div>
                            <input
                            placeholder='Background Url'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({backgroundImgUrl: x})
                            }}
                            ></input>
                        </div>
                        <div className='section'>
                            <div>Font-Color</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({fontColor: x})
                            }}
                            ></input>
                        </div>
                        <div className='section'>
                            <div>Font-Family</div>
                            <input
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({fontFamily: x})
                            }}
                            ></input>
                        </div>
                        </div> : null}
                    </div>
                    {this.state.displayLeftNav ?
                    <div className='leftNavSection'>
                        <h1>Left Section</h1>
                        {this.state.topNavDisplay === 'title' ? <div>
                            <div className='section'>
                            <div>Title</div>
                            <input
                            value={this.state.leftTitle}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftTitle: x})
                            }} 
                            ></input>
                        </div>
                        <div className='section'>
                            <div>Title Font-Size</div>
                            <input
                            type='number'
                            value={this.state.leftTitleFontSize}
                            placeholder='px'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftTitleFontSize: x})
                            }}
                            ></input>
                        </div>
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'body' ? <div>
                        <div className='section'>
                            <div>Body</div>
                            <input
                            value={this.state.leftBody}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftBody: x})
                            }} 
                            ></input>
                        </div>
                        <div className='section'>
                            <div>Body Font-Size</div>
                            <input
                            value={this.state.leftBodyFontSize}
                            type='number'
                            placeholder='px'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftBodyFontSize: x})
                            }} 
                            ></input>
                        </div>
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'pricing' ? <div>
                        <h2>Pricing</h2>
                        
                        <div>
                            <h4>Pick A Pricing Style</h4>
                            <div className='section'>
                            <div>Option 1</div>
                            <img src={OptionFourImg} alt='' width='200px' height='100px' onClick={()=>{this.setState({leftPricingOption: 'four'})}}/>
                            </div>
                            {this.state.leftPricingOption === 'four' ? <div className='section'>
                                <div>APR</div>
                                <input
                                value={this.state.leftOptionFourApr}
                                type='number'
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({leftOptionFourApr: x})
                                }}
                                ></input>
                                <div>Size</div>
                                <input
                                value={this.state.optionFontSize}
                                type='number'
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({optionFontSize: x})
                                }}
                                ></input>
                                <div>Months</div>
                                <input
                                value={this.state.leftOptionFourMo}
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({leftOptionFourMo: x})
                                }}
                                ></input>
                            </div> : null}
                            <div className='section'>
                            <div>Option 2</div>
                            <img src={OptionOneImg} alt='' width='200px' height='100px'
                                onClick={()=>{
                                    // displayOption('one');
                                    this.setState({leftPricingOption: 'one'})
                                }}
                            />
                            </div>
                            {this.state.leftPricingOption === 'one' ? 
                            <div className='section'>
                                <div>Month lease </div>
                                <input 
                                    value={this.state.leftPricingOptionOneMonthlyLease}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionOneMonthlyLease: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    value={this.state.leftPricingOptionOneMonthly}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionOneMonthly: x})
                                    }}
                                ></input>
                                <div>Size</div>
                                <input
                                    value={this.state.optionFontSize}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({optionFontSize: x})
                                    }}
                                ></input>
                                <div>MSRP</div>
                                <input
                                    value={this.state.leftPricingOptionOneMSRP}
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionOneMSRP: x})
                                    }}
                                ></input>
                            </div> : null}
                            <div className='section'>
                            <div>Option 3</div>
                            <img src={OptionTwoImg} alt='' width='200px' height='100px'
                                onClick={()=>{
                                    // displayOption('two');
                                    this.setState({leftPricingOption: 'two'})
                                }}
                            />
                            </div>
                            {this.state.leftPricingOption === 'two' ? 
                            <div className='section'>
                                <div>APR</div>
                                <input
                                    value={this.state.leftPricingOptionTwoAPR}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionTwoAPR: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    value={this.state.leftPricingOptionTwoMonthly}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionTwoMonthly: x})
                                    }}
                                ></input>
                                <div>Size</div>
                                <input
                                    value={this.state.optionFontSize}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({optionFontSize: x})
                                    }}
                                ></input>
                            </div> : null}
                            <div className='section'>
                            <div>Option 4</div>
                            <img src={OptionThreeImg} alt='' width='200px' height='150px'
                                onClick={()=>{
                                    this.setState({leftPricingOption: 'three'})
                                }}
                            />
                            </div>
                            {this.state.leftPricingOption === 'three' ? 
                            <div className='section'>
                                <div>Month lease</div>
                                <input
                                    value={this.state.leftPricingOptionThreeMonthlyLease}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionThreeMonthlyLease: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    value={this.state.leftPricingOptionThreeMonthly}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({leftPricingOptionThreeMonthly: x})
                                    }}
                                ></input>
                                <div>Size</div>
                                <input
                                    value={this.state.optionFontSize}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({optionFontSize: x})
                                    }}
                                ></input>
                                <div>MSRP</div>
                                <input
                                    value={this.state.leftPricingOptionThreeMSRP}
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
                            </div> : null}
                            {/* <hr/> */}
                            {this.state.topNavDisplay === 'regional' ? <div>
                            <h3>Regional Offer</h3>
                            <img src={RegionalOfferImg} alt='' width='250px' height='180px'
                                onClick={()=>{
                                    this.setState({leftAddDropDown: true})
                            }}/>
                            {this.state.leftAddDropDown ? 
                            <div>
                            <div>Drop Down Title</div>
                            <input 
                            value={this.state.LeftDropDownTitle}
                            placeholder='ex: reginal offers'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownTitle: x})
                            }} 
                            ></input>
                            <div>Section One title</div>
                            <input
                            value={this.state.LeftDropDownS1T}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS1T: x})
                            }}
                            ></input>
                            <div>Section One apr</div>
                            <input
                                value={this.state.leftSectionOneApr}
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({leftSectionOneApr: event.target.value})
                                }}
                            ></input>
                            <div>Section One Monthly</div>
                            <input
                                value={this.state.leftSectionOneMonthly}
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({leftSectionOneMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details One</div>
                            <input
                            value={this.state.LeftDropDownS1D}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS1D: x})
                            }}
                            ></input>

                            <div>Section Two title</div>
                            <input 
                            value={this.state.LeftDropDownS2T}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS2T: x})
                            }}
                            ></input>
                            <div>Section Two apr</div>
                            <input
                                value={this.state.leftSectionTwoApr}
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({leftSectionTwoApr: event.target.value})
                                }}
                            ></input>
                            <div>Section two Monthly</div>
                            <input
                                value={this.state.leftSectionTwoMonthly}
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({leftSectionTwoMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Two</div>
                            <input
                            value={this.state.LeftDropDownS2D}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS2D: x})
                            }}
                            ></input>

                            <div>Section Three title</div>
                            <input
                            value={this.state.LeftDropDownS3T}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS3T: x})
                            }}
                            ></input>
                            <div>Section Three apr</div>
                            <input
                                value={this.state.leftSectionThreeApr}
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({leftSectionThreeApr: event.target.value})
                                }}
                            ></input>
                            <div>Section Three Monthly</div>
                            <input
                                value={this.state.leftSectionThreeMonthly}
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({leftSectionThreeMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Three</div>
                            <input
                            value={this.state.LeftDropDownS3D}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({LeftDropDownS3D: x})
                            }}
                            ></input>
                            <div>Section Four title</div>
                            <input
                            value={this.state.LeftDropDownS4T}
                                onChange = {(event) => {
                                    let x = event.target.value
                                    this.setState({LeftDropDownS4T: x})
                                }}
                            ></input>
                            <div>Section Four apr</div>
                            <input
                            value={this.state.leftSectionFourApr}
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({leftSectionFourApr: event.target.value})
                                }}
                            ></input>
                            <div>Section Four Monthly</div>
                            <input
                            value={this.state.leftSectionFourMonthly}
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({leftSectionFourMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Four</div>
                            <input
                            value={this.state.LeftDropDownS4D}
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
                            </div> : null}
                            {/* <hr/> */}
                            {this.state.topNavDisplay === 'background' ? <div>
                            <h3>Background</h3>
                            <div className='section'>
                            <div>Text Background size width</div>
                            <input
                            value={this.state.leftBackgroundWidth}
                            type='number'
                            placeholder='px'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftBackgroundWidth: x})
                            }} 
                            ></input>
                            </div>
                            <div className='section'>
                            <div>Text Background size height</div>
                            <input
                            value={this.state.leftBackgroundHeight}
                            type='number'
                            placeholder='px'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftBackgroundHeight: x})
                            }} 
                            ></input>
                            </div>
                            <div className='section'>
                            <div>Text Background color</div>
                            <div> rgba(
                            <input
                            value={this.state.leftTextBackgroundColorR}
                            type='number'
                            className='rgbInputs'
                            placeholder='R'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftTextBackgroundColorR: x})
                            }} 
                            ></input>
                            <input
                            value={this.state.leftTextBackgroundColorG}
                            type='number'
                            className='rgbInputs'
                            placeholder='G'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftTextBackgroundColorG: x})
                            }} 
                            ></input>
                            <input
                            value={this.state.leftTextBackgroundColorB}
                            type='number'
                            className='rgbInputs'
                            placeholder='B'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftTextBackgroundColorB: x})
                            }} 
                            ></input>
                            
                            <input
                            value={this.state.leftBackgroundOpacity}
                            type='number'
                            placeholder='O'
                            className='rgbInputs'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftBackgroundOpacity: x})
                            }} 
                            ></input>
                            )</div>
                            </div>
                            <h4>Background Position</h4>
                            <div>Vertical</div>
                            <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'flex-start'})}}>Left</button>
                            <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'center'})}}>Center</button>
                            <button className='whiteBtn' onClick={()=>{this.setState({leftJustifyContent: 'flex-end'})}}>Right</button>
                            <div>Horizontal</div>
                            <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'flex-start'})}}>Up</button>
                            <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'center'})}}>Center</button>
                            <button className='whiteBtn' onClick={()=>{this.setState({leftAlignItems: 'flex-end'})}}>Down</button>
                            </div> : null}
                            {/* <hr/> */}
                            {this.state.topNavDisplay === 'buttons' ? <div>
                            <h3>Buttons</h3>
                            {this.state.leftButton1 ? <div>
                            <div className='section'>
                            <div>Button Background color</div>
                            <input
                            value={this.state.buttonBackgroundColor}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({buttonBackgroundColor: x})
                            }} 
                            ></input>
                            </div>
                            <div className='section'>
                            <div>Button Text Color</div>
                            <input
                            value={this.state.buttonColor}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({buttonColor: x})
                            }} 
                            ></input> 
                            </div>
                            <div className='section'>
                            <div>Button Padding</div>
                            <input
                            value={this.state.buttonPadding}
                            onChange={(event)=>{
                                this.setState({buttonPadding: event.target.value})
                            }}
                            ></input>
                            </div>
                            <div className='section'>
                            <div>Button Radius</div>
                            <input
                            valuse={this.state.buttonRadius}
                            onChange={(event)=>{
                                // console.log(event.target.value)
                                this.setState({buttonRadius: event.target.value})
                            }}
                            ></input>
                            </div>
                            </div> : null}
                            <div><button
                            className='whiteBtn'
                            onClick = {()=>{
                                let leftButton1 = this.state.leftButton1
                                this.setState({leftButton1: !leftButton1})
                            }}
                            >{this.state.leftButton1 ? 'Remove Button 1' : 'Add Button'}</button></div>

                            {this.state.leftButton1 ? <div>
                            <div className='section'>
                            <div>Button 1 Text</div>
                            <input
                            value={this.state.leftButtonText1}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftButtonText1: x})
                            }} 
                            ></input>
                            </div>
                            <div className='section'>
                            <div>Button 1 Link</div>
                            <input
                            value={this.state.leftButtonLink1}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftButtonLink1: x})
                            }} 
                            ></input>
                            </div>
                        
                            <div><button
                            className='whiteBtn'
                                onClick = {()=>{
                                    let leftButton2 = this.state.leftButton2
                                    this.setState({leftButton2: !leftButton2})
                                }}
                            >{this.state.leftButton2 ? 'Remove Button 2' : 'Add Button'}</button></div>
                            {this.state.leftButton2 ? <div>
                            <div className='section'>
                            <div>Button 2 Text</div>
                            <input
                            value={this.state.leftButtonText2}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftButtonText2: x})
                            }} 
                            ></input>
                            </div>
                            <div className='section'>
                            <div>Button 2 Link</div>
                            <input
                            value={this.state.leftButtonLink2}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({leftButtonLink2: x})
                            }} 
                            ></input>
                            </div>
                            </div>: null}
                            </div>: null}
                            </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'offer' ? <div>
                        <h3>Offer Details</h3>
                        <button className='whiteBtn'
                            onClick={()=>{
                                let x = this.state.leftAddOfferDetails
                                this.setState({leftAddOfferDetails: !x})
                            }}
                        >{this.state.leftAddOfferDetails ? 'remove + view offer details' : '+ view offer details'}
                        </button>
                        {this.state.leftAddOfferDetails ? 
                        <div>
                            <div className='section'>
                            <div>Offer details Info</div>
                            <input 
                                value={this.state.leftAddOfferDetailsText}
                                onChange={(event)=>{
                                    this.setState({leftAddOfferDetailsText: event.target.value})
                                }}
                            ></input> 
                            </div>
                        </div> : null}
                        </div> : null}
                        {/* <hr/> */}
                        {/* <hr/>
                        <h3>Insert Image</h3>
                        <input 
                            value={this.state.leftImageUrl}
                            placeholder='Image Url'
                            onChange = {(event) => {
                                this.setState({leftImageUrl: event.target.value})
                            }} 
                        />
                        <div>Height</div>
                        <input 
                            value={this.state.leftImageHeight}
                            onChange = {(event) => {
                                this.setState({leftImageHeight: event.target.value})
                            }} 
                        />
                        <div>Width</div>
                        <input 
                            value={this.state.leftImageWidth}
                            onChange = {(event) => {
                                this.setState({leftImageWidth: event.target.value})
                            }} 
                        /> */}
                        {/* <hr/> */}
                        {/* <hr/> */}
                    </div>
                    :
                    <div className='rightNavSection'>
                        <h1>Right Section</h1>
                        {this.state.topNavDisplay === 'title' ? <div>
                        <div>Title</div>
                        <input
                        value={this.state.rightTitle}
                        type='text'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTitle: x})
                        }} 
                        ></input>
                        <div>Title Font-Size</div>
                        <input
                        value={this.state.rightTitleFontSize}
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTitleFontSize: x})
                        }}
                        ></input>
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay==='body' ? <div>
                        <div>Body</div>
                        <input
                        value={this.state.rightBody}
                        type='text'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBody: x})
                        }} 
                        ></input>
                        <div>Body Font-Size</div>
                        <input
                        value={this.state.rightBodyFontSize}
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBodyFontSize: x})
                        }} 
                        ></input>
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'pricing' ? <div>
                        <h2>Pricing</h2>
                        <div>
                            <h4>Pick A Pricing Style</h4>
                            <div>Option 1</div>
                            <img src={OptionFourImg} alt='' width='200px' height='100px' onClick={()=>{this.setState({rightPricingOption: 'four'})}}/>
                            {this.state.rightPricingOption === 'four' ? <div>
                                <div>APR</div>
                                <input
                                value={this.state.rightOptionFourApr}
                                type='number'
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({rightOptionFourApr: x})
                                }}
                                ></input>
                                <div>Size</div>
                                <input
                                value={this.state.optionFontSize}
                                type='number'
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({optionFontSize: x})
                                }}
                                ></input>
                                <div>Months</div>
                                <input
                                value={this.state.rightOptionFourMo}
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({rightOptionFourMo: x})
                                }}
                                ></input>
                            </div> : null}
                            <div>Option 2</div>
                            <img src={OptionOneImg} alt='' width='200px' height='100px'
                                onClick={()=>{
                                    this.setState({rightPricingOption: 'one'})
                                }}
                            />
                            {this.state.rightPricingOption === 'one' ? 
                            <div>
                                <div>Month lease </div>
                                <input
                                    value={this.state.rightPricingOptionOneMonthlyLease}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionOneMonthlyLease: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                    value={this.state.rightPricingOptionOneMonthly}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionOneMonthly: x})
                                    }}
                                ></input>
                                <div>Monthly Size</div>
                                <input
                                    value={this.state.optionFontSize}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({optionFontSize: x})
                                    }}
                                ></input>
                                <div>MSRP</div>
                                <input
                                    value={this.state.rightPricingOptionOneMSRP}
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionOneMSRP: x})
                                    }}
                                ></input>
                            </div> : null}
                            <div>Option 3</div>
                            <img src={OptionTwoImg} alt='' width='200px' height='100px'
                                onClick={()=>{
                                    this.setState({rightPricingOption: 'two'})
                                }}
                            />
                            {this.state.rightPricingOption === 'two' ? 
                            <div>
                                <div>APR</div>
                                <input
                                    value={this.state.rightPricingOptionTwoAPR}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionTwoAPR: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                value={this.state.rightPricingOptionTwoMonthly}
                                type='number'
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({rightPricingOptionTwoMonthly: x})
                                }}
                                ></input>
                                <div>Monthly Size</div>
                                <input
                                value={this.state.optionFontSize}
                                type='number'
                                onChange={(event)=>{
                                    let x = event.target.value
                                    this.setState({optionFontSize: x})
                                }}></input>
                            </div> : null}
                            <div>Option 4</div>
                            <img src={OptionThreeImg} alt='' width='200px' height='150px'
                                onClick={()=>{
                                    this.setState({rightPricingOption: 'three'})
                                }}
                            />
                            {this.state.rightPricingOption === 'three' ? 
                            <div>
                                <div>Month lease</div>
                                <input
                                value={this.state.rightPricingOptionThreeMonthlyLease}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionThreeMonthlyLease: x})
                                    }}
                                ></input>
                                <div>Monthly</div>
                                <input
                                value={this.state.rightPricingOptionThreeMonthly}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({rightPricingOptionThreeMonthly: x})
                                    }}
                                ></input>
                                <div>Monthly Size</div>
                                <input
                                value={this.state.optionFontSize}
                                    type='number'
                                    onChange={(event)=>{
                                        let x = event.target.value
                                        this.setState({optionFontSize: x})
                                    }}
                                ></input>
                                <div>MSRP</div>
                                <input
                                    value={this.state.rightPricingOptionThreeMSRP} 
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
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'regional' ? <div>
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
                            value={this.state.rightDropDownTitle} 
                            placeholder='ex: reginal offers'
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownTitle: x})
                            }} 
                            ></input>
                            <div>Section One title</div>
                            <input
                            value={this.state.rightDropDownS1T} 
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS1T: x})
                            }}
                            ></input>
                            <div>Section One apr</div>
                            <input
                            value={this.state.rightSectionOneApr}
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({rightSectionOneApr: event.target.value})
                                }}
                            ></input>
                            <div>Section One Monthly</div>
                            <input
                            value={this.state.rightSectionOneMonthly}
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({rightSectionOneMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details One</div>
                            <input
                            value={this.state.rightDropDownS1D}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS1D: x})
                            }}
                            ></input>

                            <div>Section Two title</div>
                            <input 
                            value={this.state.rightDropDownS2T}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS2T: x})
                            }}
                            ></input>
                            <div>Section Two apr</div>
                            <input
                            value={this.state.rightSectionTwoApr}
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({rightSectionTwoApr: event.target.value})
                                }}
                            ></input>
                            <div>Section two Monthly</div>
                            <input
                            value={this.state.rightSectionTwoMonthly}
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({rightSectionTwoMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Two</div>
                            <input
                            value={this.state.rightDropDownS2D}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS2D: x})
                            }}
                            ></input>

                            <div>Section Three title</div>
                            <input
                            value={this.state.rightDropDownS3T}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS3T: x})
                            }}
                            ></input>
                            <div>Section Three apr</div>
                            <input
                            value={this.state.rightSectionThreeApr}
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({rightSectionThreeApr: event.target.value})
                                }}
                            ></input>
                            <div>Section Three Monthly</div>
                            <input
                            value={this.state.rightSectionThreeMonthly}
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({rightSectionThreeMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Three</div>
                            <input
                            value={this.state.rightDropDownS3D}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightDropDownS3D: x})
                            }}
                            ></input>
                            <div>Section Four title</div>
                            <input
                            value={this.state.rightDropDownS4T}
                                onChange = {(event) => {
                                    let x = event.target.value
                                    this.setState({rightDropDownS4T: x})
                                }}
                            ></input>
                            <div>Section Four apr</div>
                            <input
                            value={this.state.rightSectionFourApr}
                                type='number'
                                placeholder='%'
                                onChange={(event)=>{
                                    this.setState({rightSectionFourApr: event.target.value})
                                }}
                            ></input>
                            <div>Section Four Monthly</div>
                            <input
                            value={this.state.rightSectionFourMonthly}
                                type='number'
                                placeholder='mo'
                                onChange={(event)=>{
                                    this.setState({rightSectionFourMonthly: event.target.value})
                                }}
                            ></input>
                            <div>Offer Details Four</div>
                            <input
                            value={this.state.rightDropDownS4D}
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
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'background' ? <div>
                        <h3>Background</h3>
                        <div>Text Background size width</div>
                        <input
                        value={this.state.rightBackgroundWidth}
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBackgroundWidth: x})
                        }} 
                        ></input>
                        <div>Text Background size height</div>
                        <input
                        value={this.state.rightBackgroundHeight}
                        type='number'
                        placeholder='px'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightBackgroundHeight: x})
                        }} 
                        ></input>
                        <div>Text Background color</div>
                        <div> rgba(
                        <input
                        value={this.state.rightTextBackgroundColorR}
                        type='number'
                        className='rgbInputs'
                        placeholder='R'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTextBackgroundColorR: x})
                        }} 
                        ></input>
                        <input
                        value={this.state.rightTextBackgroundColorG}
                        type='number'
                        className='rgbInputs'
                        placeholder='G'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTextBackgroundColorG: x})
                        }} 
                        ></input>
                        <input
                        value={this.state.rightTextBackgroundColorB}
                        type='number'
                        className='rgbInputs'
                        placeholder='B'
                        onChange = {(event) => {
                            let x = event.target.value
                            this.setState({rightTextBackgroundColorB: x})
                        }} 
                        ></input>
                        
                        <input
                        value={this.state.rightBackgroundOpacity}
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
                        <div>Vertical</div>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightJustifyContent: 'flex-start'})}}>Left</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightJustifyContent: 'center'})}}>Center</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightJustifyContent: 'flex-end'})}}>Right</button>
                        <div>Horizontal</div>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightAlignItems: 'flex-start'})}}>Up</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightAlignItems: 'center'})}}>Center</button>
                        <button className='whiteBtn' onClick={()=>{this.setState({rightAlignItems: 'flex-end'})}}>Down</button>
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'buttons' ? <div>
                        <h3>Buttons</h3>
                            {this.state.rightButton1 ? <div>
                            <div>Button Background color</div>
                            <input
                            value={this.state.buttonBackgroundColor}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({buttonBackgroundColor: x})
                            }} 
                            ></input>
                            <div>Button Text Color</div>
                            <input
                            value={this.state.buttonColor}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({buttonColor: x})
                            }} 
                            ></input> 
                            <div>Button Padding</div>
                            <input
                            value={this.state.buttonPadding}
                            onChange={(event)=>{
                                this.setState({buttonPadding: event.target.value})
                            }}
                            ></input>
                            <div>Button Radius</div>
                            <input
                            valuse={this.state.buttonRadius}
                            onChange={(event)=>{
                                // console.log(event.target.value)
                                this.setState({buttonRadius: event.target.value})
                            }}
                            ></input>
                            </div> : null}
                            <div><button
                            className='whiteBtn'
                            onClick = {()=>{
                                let rightButton1 = this.state.rightButton1
                                this.setState({rightButton1: !rightButton1})
                            }}
                            >{this.state.rightButton1 ? 'Remove Button 1' : 'Add Button'}</button></div>

                            {this.state.rightButton1 ? <div>
                            <div>Button 1 Text</div>
                            <input
                            value={this.state.rightButtonText1}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonText1: x})
                            }} 
                            ></input>
                        
                            <div>Button 1 Link</div>
                            <input
                            value={this.state.rightButtonLink1}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonLink1: x})
                            }} 
                            ></input>
                            
                        
                            <div><button
                            className='whiteBtn'
                                onClick = {()=>{
                                    let rightButton2 = this.state.rightButton2
                                    this.setState({rightButton2: !rightButton2})
                                }}
                            >{this.state.rightButton2 ? 'Remove Button 2' : 'Add Button'}</button></div>
                            {this.state.rightButton2 ? <div>
                            <div>Button 2 Text</div>
                            <input
                            value={this.state.rightButtonText2}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonText2: x})
                            }} 
                            ></input>
                        
                            <div>Button 2 Link</div>
                            <input
                            value={this.state.rightButtonLink2}
                            onChange = {(event) => {
                                let x = event.target.value
                                this.setState({rightButtonLink2: x})
                            }} 
                            ></input>
                        </div>: null}
                        </div>: null}
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'offer' ? <div>
                        <h3>Offer Details</h3>
                        <button className='whiteBtn'
                            onClick={()=>{
                                let x = this.state.rightAddOfferDetails
                                this.setState({rightAddOfferDetails: !x})
                            }}
                        >{this.state.rightAddOfferDetails ? 'remove + view offer details' : '+ view offer details'}
                        </button>
                        {this.state.rightAddOfferDetails ? 
                        <div>
                            <div>Offer details Info</div>
                            <input 
                            value={this.state.rightAddOfferDetailsText}
                                onChange={(event)=>{
                                    this.setState({rightAddOfferDetailsText: event.target.value})
                                }}
                            ></input> 
                        </div> : null}
                        </div> : null}
                        {/* <hr/> */}
                        {this.state.topNavDisplay === 'image' ? <div>
                        <h3>Insert Image</h3>
                        <input 
                        value={this.state.rightImageUrl}
                        placeholder='Image Url'
                            onChange = {(event) => {
                                this.setState({rightImageUrl: event.target.value})
                            }} 
                        />
                        <div>Height</div>
                        <input 
                        value={this.state.rightImageHeight}
                            onChange = {(event) => {
                                this.setState({rightImageHeight: event.target.value})
                            }} 
                        />
                        <div>Width</div>
                        <input 
                        value={this.state.rightImageWidth}
                            onChange = {(event) => {
                                this.setState({rightImageWidth: event.target.value})
                            }} 
                        />
                        </div> : null}
                    </div> }

                    </div>
                    <div className='templateContainer'>
                        {this.state.fontFamily ? <div className='added'>Font Family Added</div> : null}
                        <div className='topBannerBtnContainer'>
                            <button className={this.state.topNavDisplay === 'title' ? 'topBannerBtnActive' : 'topBannerBtn'} 
                            onClick={()=>{this.setState({topNavDisplay: 'title'})}}>Title</button>
                            
                            <button className={this.state.topNavDisplay === 'body' ? 'topBannerBtnActive' : 'topBannerBtn'} 
                            onClick={()=>{this.setState({topNavDisplay: 'body'})}}>Body</button>
                            
                            <button className={this.state.topNavDisplay === 'pricing' ? 'topBannerBtnActive' : 'topBannerBtn'} 
                            onClick={()=>{this.setState({topNavDisplay: 'pricing'})}}>Pricing</button>
                            
                            <button className={this.state.topNavDisplay === 'regional' ? 'topBannerBtnActive' : 'topBannerBtn'} 
                            onClick={()=>{this.setState({topNavDisplay: 'regional'})}}>Regional Offer</button>
                            
                            <button className={this.state.topNavDisplay === 'background' ? 'topBannerBtnActive' : 'topBannerBtn'} 
                            onClick={()=>{this.setState({topNavDisplay: 'background'})}}>Background</button>
                            
                            <button className={this.state.topNavDisplay === 'buttons' ? 'topBannerBtnActive' : 'topBannerBtn'} 
                            onClick={()=>{this.setState({topNavDisplay: 'buttons'})}}>Buttons</button>
                            
                            <button className={this.state.topNavDisplay === 'offer' ? 'topBannerBtnActive' : 'topBannerBtn'} 
                            onClick={()=>{this.setState({topNavDisplay: 'offer'})}}>Offer Details</button>
                            
                            {this.state.displayLeftNav ? null : <button className={this.state.topNavDisplay === 'image' ? 'topBannerBtnActive' : 'topBannerBtn'} 
                            onClick={()=>{this.setState({topNavDisplay: 'image'})}}>Image</button>}
                        </div>
                        <div className='template' style={template} >
                            <div className='templateLeft' style={templateLeft}>
                                <div style={leftTextBackground}>
                                    {this.state.leftTitle ? <h1 style={LeftTitle}>{this.state.leftTitle}</h1> : null}
                                    {this.state.leftBody ? <p style={LeftBody}>{this.state.leftBody}</p> : null}
                                    {this.state.leftPricingOption === 'one' ? 
                                    <div className='pricingContainerOptionOne'>
                                        <div>{this.state.leftPricingOptionOneMonthlyLease ? this.state.leftPricingOptionOneMonthlyLease : '36'} month lease</div>
                                        <div><span style={pricing}>${this.state.leftPricingOptionOneMonthly ? this.state.leftPricingOptionOneMonthly : '439'}</span> / month</div>
                                        <div>MSRP: ${this.state.leftPricingOptionOneMSRP ? this.state.leftPricingOptionOneMSRP : '40,745'}</div>
                                    </div>
                                    
                                    : this.state.leftPricingOption === 'two' ?
                                    <div className='pricingContainerOptionTwo'>
                                            <div className='pricingOptionTwo'><span style={pricing}>{this.state.leftPricingOptionTwoAPR ? this.state.leftPricingOptionTwoAPR : '2'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='pricingOptionTwo'><span style={pricing}>${this.state.leftPricingOptionTwoMonthly ? this.state.leftPricingOptionTwoMonthly : '399'}</span>/mo.</div>
                                    </div>

                                    : this.state.leftPricingOption === 'three' ?
                                    <div className='pricingContainerOptionThree'>
                                        <div>{this.state.leftPricingOptionThreeMonthlyLease ? this.state.leftPricingOptionThreeMonthlyLease : '24'} month lease</div>
                                        <div><span style={pricing}>${this.state.leftPricingOptionThreeMonthly ? this.state.leftPricingOptionThreeMonthly : '439'}</span> / month</div>
                                        <hr className='pricingLineVirtical'></hr>
                                        <div>Buy for</div>
                                        <div><span style={pricing}>${this.state.leftPricingOptionThreeMSRP ? this.state.leftPricingOptionThreeMSRP : '42,300'}</span></div>
                                        <div>Limited availability at this price</div>
                                    </div> 
                                    : this.state.leftPricingOption === 'four' ? 
                                    <div className='pricingContainerOptionFour'>
                                        <div><span style={pricing}>{this.state.leftOptionFourApr ? this.state.leftOptionFourApr : '1.9'}%</span> APR</div>
                                        <div>for {this.state.leftOptionFourMo ? this.state.leftOptionFourMo : '24-48'} mos.</div>
                                    </div>
                                    : null}
                                    {this.state.leftButton1 ? 
                                        <div style={bannerBtnContainer}>
                                            {this.state.leftButton1 ? <a href={this.state.leftButtonLink1}><button style={bannerBtn}>{this.state.leftButtonText1 ? this.state.leftButtonText1 : 'button 1'}</button></a> : null}
                                            {this.state.leftButton2 ? <a href={this.state.leftButtonLink2}><button style={bannerBtn}>{this.state.leftButtonText2 ? this.state.leftButtonText2 : 'button 2'}</button></a> : null}
                                    </div> : null}
                                    {this.state.leftAddOfferDetails ? 
                                    <div className="offerDetailsDropdown">
                                        <span>+ view offer details</span>
                                        <div className="offerDetailsDropdownContent">
                                            <p>{this.state.leftAddOfferDetailsText ? this.state.leftAddOfferDetailsText : 'Hello World'}</p>
                                        </div>
                                    </div> : null}
                                    {/* {this.state.leftImageUrl ? <div><img style={leftImage} src={this.state.leftImageUrl} alt=''/></div> : null} */}
                                    {this.state.leftAddDropDown ? <div className='reginalOffersContainer'>
                                        <div>
                                            {this.state.LeftDropDownTitle ? this.state.LeftDropDownTitle : 'REGIONAL OFFERS'}
                                        </div>
                                    <button className='reginalOffersBtn' onClick={leftDropDownOne}>{this.state.LeftDropDownS1T ? this.state.LeftDropDownS1T : '2021 finance'}</button>
                                    <div id="leftDropDownOne">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.leftSectionOneApr ? this.state.leftSectionOneApr : '0'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.leftSectionOneMonthly ? this.state.leftSectionOneMonthly : '0'}</span>/mo.</div>
                                        </div>
                                        <button onClick={leftOfferDetailsOne} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="leftDetailsOne">
                                            {this.state.LeftDropDownS1D ? this.state.LeftDropDownS1D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={leftDropDownTwo}>{this.state.LeftDropDownS2T ? this.state.LeftDropDownS2T : '2022 finance'}</button>
                                    <div id="leftDropDownTwo">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.leftSectionTwoApr ? this.state.leftSectionTwoApr : '0'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.leftSectionTwoMonthly ? this.state.leftSectionTwoMonthly : '0'}</span>/mo.</div>
                                        </div>

                                        <button onClick={leftOfferDetailsTwo} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="leftDetailsTwo">
                                            {this.state.LeftDropDownS2D ? this.state.LeftDropDownS2D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={leftDropDownThree}>{this.state.LeftDropDownS3T ? this.state.LeftDropDownS3T : '2021 cash'}</button>
                                    <div id="leftDropDownThree">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.leftSectionThreeApr ? this.state.leftSectionThreeApr : '0'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.leftSectionThreeMonthly ? this.state.leftSectionThreeMonthly : '0'}</span>/mo.</div>
                                        </div>

                                        <button onClick={leftOfferDetailsThree} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="leftDetailsThree">
                                            {this.state.LeftDropDownS3D ? this.state.LeftDropDownS3D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={leftDropDownFour}>{this.state.LeftDropDownS4T ? this.state.LeftDropDownS4T : '2020 cash'}</button>
                                    <div id="leftDropDownFour">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.leftSectionFourApr ? this.state.leftSectionFourApr : '0'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.leftSectionFourMonthly ? this.state.leftSectionFourMonthly : '0'}</span>/mo.</div>
                                        </div>

                                        <button onClick={leftOfferDetailsFour} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="leftDetailsFour">
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
                                    <div className='pricingContainerOptionOne'>
                                        <div>{this.state.rightPricingOptionOneMonthlyLease ? this.state.rightPricingOptionOneMonthlyLease : '36'} month lease</div>
                                        <div><span style={pricing}>${this.state.rightPricingOptionOneMonthly ? this.state.rightPricingOptionOneMonthly : '439'}</span> / month</div>
                                        <div>MSRP: ${this.state.rightPricingOptionOneMSRP ? this.state.rightPricingOptionOneMSRP : '40,745'}</div>
                                    </div>
                                    
                                    : this.state.rightPricingOption === 'two' ?
                                    <div className='pricingContainerOptionTwo'>
                                            <div className='pricingOptionTwo'><span style={pricing}>{this.state.rightPricingOptionTwoAPR ? this.state.rightPricingOptionTwoAPR : '2'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='pricingOptionTwo'><span style={pricing}>${this.state.rightPricingOptionTwoMonthly ? this.state.rightPricingOptionTwoMonthly : '399'}</span>/mo.</div>
                                    </div>

                                    : this.state.rightPricingOption === 'three' ?
                                    <div className='pricingContainerOptionThree'>
                                        <div>{this.state.rightPricingOptionThreeMonthlyLease ? this.state.rightPricingOptionThreeMonthlyLease : '24'} month lease</div>
                                        <div><span style={pricing}>${this.state.rightPricingOptionThreeMonthly ? this.state.rightPricingOptionThreeMonthly : '439'}</span> / month</div>
                                        <hr className='pricingLineVirtical'></hr>
                                        <div>Buy for</div>
                                        <div><span style={pricing}>${this.state.rightPricingOptionThreeMSRP ? this.state.rightPricingOptionThreeMSRP : '42,300'}</span></div>
                                        <div>Limited availability at this price</div>
                                    </div> 
                                    : this.state.rightPricingOption === 'four' ?
                                    <div className='pricingContainerOptionFour'>
                                        <div><span style={pricing}>{this.state.rightOptionFourApr ? this.state.rightOptionFourApr : '1.9'}%</span> APR</div>
                                        <div>for {this.state.rightOptionFourMo ? this.state.rightOptionFourMo : '24-48'} mos.</div>
                                    </div>
                                    : null}
                                    {this.state.rightButton1 ?
                                    <div style={bannerBtnContainer}>
                                        {this.state.rightButton1 ? <a href={this.state.rightButtonLink1}><button style={bannerBtn}>{this.state.rightButtonText1 ? this.state.rightButtonText1 : 'button 1'}</button></a> : null}
                                        {this.state.rightButton2 ? <a href={this.state.rightButtonLink2}><button style={bannerBtn}>{this.state.rightButtonText2 ? this.state.rightButtonText2 : 'button 2'}</button></a> : null}
                                    </div> : null}
                                    {this.state.rightAddOfferDetails ? 
                                    <div className="offerDetailsDropdown">
                                        <span>+ view offer details</span>
                                        <div className="offerDetailsDropdownContent">
                                            <p>{this.state.rightAddOfferDetailsText ? this.state.rightAddOfferDetailsText : 'Hello World'}</p>
                                        </div>
                                    </div> : null}
                                    {this.state.rightImageUrl ? <div><img style={rightImage} src={this.state.rightImageUrl} alt=''/></div> : null}
                                    {this.state.rightAddDropDown ? <div className='reginalOffersContainer'>
                                        <div>
                                            {this.state.rightDropDownTitle ? this.state.rightDropDownTitle : 'REGIONAL OFFERS'}
                                        </div>
                                    <button className='reginalOffersBtn' onClick={rightDropDownOne}>{this.state.rightDropDownS1T ? this.state.rightDropDownS1T : '2021 finance'}</button>
                                    <div id="rightDropDownOne">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.rightSectionOneApr ? this.state.rightSectionOneApr : '0'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.rightSectionOneMonthly ? this.state.rightSectionOneMonthly : '0'}</span>/mo.</div>
                                        </div>
                                        <button onClick={rightOfferDetailsOne} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="rightDetailsOne">
                                            {this.state.rightDropDownS1D ? this.state.rightDropDownS1D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={rightDropDownTwo}>{this.state.rightDropDownS2T ? this.state.rightDropDownS2T : '2022 finance'}</button>
                                    <div id="rightDropDownTwo">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.rightSectionTwoApr ? this.state.rightSectionTwoApr : '0'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.rightSectionTwoMonthly ? this.state.rightSectionTwoMonthly : '0'}</span>/mo.</div>
                                        </div>

                                        <button onClick={rightOfferDetailsTwo} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="rightDetailsTwo">
                                            {this.state.rightDropDownS2D ? this.state.rightDropDownS2D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={rightDropDownThree}>{this.state.rightDropDownS3T ? this.state.rightDropDownS3T : '2021 cash'}</button>
                                    <div id="rightDropDownThree">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.rightSectionThreeApr ? this.state.rightSectionThreeApr : '0'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.rightSectionThreeMonthly ? this.state.rightSectionThreeMonthly : '0'}</span>/mo.</div>
                                        </div>

                                        <button onClick={rightOfferDetailsThree} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="rightDetailsThree">
                                            {this.state.rightDropDownS3D ? this.state.rightDropDownS3D : 'offer details text here'}
                                        </div>
                                    </div>
                                    <button className='reginalOffersBtn' onClick={rightDropDownFour}>{this.state.rightDropDownS4T ? this.state.rightDropDownS4T : '2020 cash'}</button>
                                    <div id="rightDropDownFour">
                                        <div className='dropDownPriceContainer'>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.rightSectionFourApr ? this.state.rightSectionFourApr : '0'}</span>% apr</div>
                                            <div className='dropDownPrice'><div className="vl"></div><div>financing</div> up to<div className="vl"></div></div>
                                            <div className='dropDownPrice'><span style={pricing}>{this.state.rightSectionFourMonthly ? this.state.rightSectionFourMonthly : '0'}</span>/mo.</div>
                                        </div>

                                        <button onClick={rightOfferDetailsFour} className='offerDetailsBtn'>OFFER DETAILS</button>
                                        <div id="rightDetailsFour">
                                            {this.state.rightDropDownS4D ? this.state.rightDropDownS4D : 'offer details text here'}
                                        </div>
                                    </div>
                                    </div> : null}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;