(this["webpackJsonphennessy-banner-generator"]=this["webpackJsonphennessy-banner-generator"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(7),l=n.n(c),o=(n(12),n(2)),a=n(3),r=n(5),d=n(4),j=(n(13),n(0)),h=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"bannerContainer",children:Object(j.jsx)("div",{className:"banner",children:Object(j.jsx)("h1",{className:"bannerLogo",children:"Hennessy Banner Generator"})})})}}]),n}(i.Component),u=h,f=n.p+"static/media/optionOne.6dffc8a8.png",O=n.p+"static/media/optionTwo.8a1804a6.png",b=n.p+"static/media/optionThree.2a4d3223.png",x=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={bannerHeight:"",backgroundImgUrl:"",fontFamily:"",fontColor:"",leftTitle:"",leftTitleFontSize:"",leftBody:"",leftBodyFontSize:"",leftPricingOption:"",leftPricingOptionOneMonthlyLease:"",leftPricingOptionOneMonthly:"",leftPricingOptionOneMSRP:"",leftPricingOptionTwoAPR:"",leftPricingOptionTwoMonthly:"",leftPricingOptionThreeMonthlyLease:"",leftPricingOptionThreeMonthly:"",leftPricingOptionThreeMSRP:"",leftAddPricing:!1,leftAddDropDown:!1,LeftDropDownTitle:"",LeftDropDownS1T:"",LeftDropDownS2T:"",LeftDropDownS3T:"",LeftDropDownS4T:"",LeftDropDownS1D:"",LeftDropDownS2D:"",LeftDropDownS3D:"",LeftDropDownS4D:"",leftJustifyContent:"",leftAlignItems:"",leftBackgroundWidth:"",leftBackgroundHeight:"",leftTextBackgroundColorR:"",leftTextBackgroundColorG:"",leftTextBackgroundColorB:"",leftBackgroundOpacity:"",leftButton1:!1,LeftButtonText1:"",leftButtonLink1:"",leftButtonColor1:"",leftButton2:!1,LeftButtonText2:"",leftButtonLink2:"",leftButtonColor2:"",leftButton3:!1,LeftButtonText3:"",leftButtonLink3:"",leftButtonColor3:""},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e={backgroundImage:"url("+this.state.backgroundImgUrl+")",backgroundRepeat:"no-repeat",backgroundSize:"100%",height:this.state.bannerHeight+"px",fontFamily:this.state.fontFamily,color:this.state.fontColor},n={fontSize:this.state.leftTitleFontSize+"px",border:"none"},i={fontSize:this.state.leftBodyFontSize+"px"},s={height:this.state.backgroundHeight+"px",width:this.state.backgroundWidth+"px",background:"rgba("+this.state.leftTextBackgroundColorR+", "+this.state.leftTextBackgroundColorG+", "+this.state.leftTextBackgroundColorB+", "+this.state.leftBackgroundOpacity+")",padding:"10px"},c={display:"flex",flexDirection:"row",justifyContent:this.state.leftJustifyContent,alignItems:this.state.leftAlignItems},l={backgroundColor:"black",padding:"12px 50px",color:"white",border:"none",cursor:"pointer",margin:"15px"};return Object(j.jsx)("div",{className:"createContainer",children:Object(j.jsxs)("div",{className:"create",children:[Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"PinkBtn",children:"Copy Code"})}),Object(j.jsx)("div",{children:"Banner Height"}),Object(j.jsx)("input",{placeholder:"500px",onChange:function(e){var n=e.target.value;t.setState({bannerHeight:n})}}),Object(j.jsx)("div",{children:"Background Image"}),Object(j.jsx)("input",{placeholder:"Background Url",onChange:function(e){var n=e.target.value;t.setState({backgroundImgUrl:n})}}),Object(j.jsx)("div",{children:"Font-Family"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({fontFamily:n})}}),Object(j.jsx)("div",{children:"Font-Color"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({fontColor:n})}}),Object(j.jsx)("h2",{children:"Left"}),Object(j.jsx)("div",{children:"Title"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftTitle:n})}}),Object(j.jsx)("div",{children:"Title Font-Size"}),Object(j.jsx)("input",{placeholder:"px",onChange:function(e){var n=e.target.value;t.setState({leftTitleFontSize:n})}}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:"Body"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftBody:n})}}),Object(j.jsx)("div",{children:"Body Font-Size"}),Object(j.jsx)("input",{placeholder:"px",onChange:function(e){var n=e.target.value;t.setState({leftBodyFontSize:n})}}),Object(j.jsx)("hr",{}),Object(j.jsx)("h2",{children:"Pricing"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Pick A Pricing Style"}),Object(j.jsx)("div",{children:"Option 1"}),Object(j.jsx)("img",{src:f,alt:"",width:"200px",height:"100px",onClick:function(){t.setState({leftPricingOption:"one"})}}),"one"===this.state.leftPricingOption?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Month lease "}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftPricingOptionOneMonthlyLease:n})}}),Object(j.jsx)("div",{children:"Monthly"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftPricingOptionOneMonthly:n})}}),Object(j.jsx)("div",{children:"MSRP"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftPricingOptionOneMSRP:n})}})]}):null,Object(j.jsx)("div",{children:"Option 2"}),Object(j.jsx)("img",{src:O,alt:"",width:"200px",height:"100px",onClick:function(){t.setState({leftPricingOption:"two"})}}),"two"===this.state.leftPricingOption?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"APR"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftPricingOptionTwoAPR:n})}}),Object(j.jsx)("div",{children:"Monthly"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftPricingOptionTwoMonthly:n})}})]}):null,Object(j.jsx)("div",{children:"Option 3"}),Object(j.jsx)("img",{src:b,alt:"",width:"200px",height:"150px",onClick:function(){t.setState({leftPricingOption:"three"})}}),"three"===this.state.leftPricingOption?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Month lease"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftPricingOptionThreeMonthlyLease:n})}}),Object(j.jsx)("div",{children:"Monthly"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftPricingOptionThreeMonthly:n})}}),Object(j.jsx)("div",{children:"MSRP"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftPricingOptionThreeMSRP:n})}})]}):null]}),Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){t.setState({leftPricingOption:""})},children:"Remove Pricing"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h3",{children:"Regional Offer"}),Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){var e=t.state.leftAddDropDown;t.setState({leftAddDropDown:!e})},children:this.state.leftAddDropDown?"Remove Offer":"Add Offer"}),this.state.leftAddDropDown?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Drop Down Title"}),Object(j.jsx)("input",{placeholder:"ex: reginal offers",onChange:function(e){var n=e.target.value;t.setState({LeftDropDownTitle:n})}}),Object(j.jsx)("div",{children:"Section One title"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftDropDownS1T:n})}}),Object(j.jsx)("div",{children:"Offer Details One"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftDropDownS1D:n})}}),Object(j.jsx)("div",{children:"Section Two title"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftDropDownS2T:n})}}),Object(j.jsx)("div",{children:"Offer Details Two"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftDropDownS2D:n})}}),Object(j.jsx)("div",{children:"Section Three title"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftDropDownS3T:n})}}),Object(j.jsx)("div",{children:"Offer Details Three"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftDropDownS3D:n})}}),Object(j.jsx)("div",{children:"Section Four title"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftDropDownS4T:n})}}),Object(j.jsx)("div",{children:"Offer Details Four"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftDropDownS4D:n})}})]}):null,Object(j.jsx)("hr",{}),Object(j.jsx)("h3",{children:"Background"}),Object(j.jsx)("div",{children:"Text Background size width"}),Object(j.jsx)("input",{placeholder:"px",onChange:function(e){var n=e.target.value;t.setState({backgroundWidth:n})}}),Object(j.jsx)("div",{children:"Text Background size height"}),Object(j.jsx)("input",{placeholder:"px",onChange:function(e){var n=e.target.value;t.setState({backgroundHeight:n})}}),Object(j.jsx)("div",{children:"Text Background color"}),Object(j.jsxs)("div",{children:[" rgb(",Object(j.jsx)("input",{className:"rgbInputs",placeholder:"R",onChange:function(e){var n=e.target.value;t.setState({leftTextBackgroundColorR:n})}}),Object(j.jsx)("input",{className:"rgbInputs",placeholder:"G",onChange:function(e){var n=e.target.value;t.setState({leftTextBackgroundColorG:n})}}),Object(j.jsx)("input",{className:"rgbInputs",placeholder:"B",onChange:function(e){var n=e.target.value;t.setState({leftTextBackgroundColorB:n})}}),Object(j.jsx)("input",{placeholder:"O",className:"rgbInputs",onChange:function(e){var n=e.target.value;t.setState({leftBackgroundOpacity:n})}}),")"]}),Object(j.jsx)("h4",{children:"Background Position"}),Object(j.jsx)("div",{children:"Justify Content (Vertical)"}),Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){t.setState({leftJustifyContent:"center"})},children:"center"}),Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){t.setState({leftJustifyContent:"flex-start"})},children:"flex-start"}),Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){t.setState({leftJustifyContent:"flex-end"})},children:"flex-end"}),Object(j.jsx)("div",{children:"Align Items (Horizontal)"}),Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){t.setState({leftAlignItems:"center"})},children:"center"}),Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){t.setState({leftAlignItems:"flex-start"})},children:"flex-start"}),Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){t.setState({leftAlignItems:"flex-end"})},children:"flex-end"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h3",{children:"Buttons"}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){var e=t.state.leftButton1;t.setState({leftButton1:!e})},children:this.state.leftButton1?"Remove Button":"Add Button"})}),this.state.leftButton1?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Button text"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftButtonText1:n})}}),Object(j.jsx)("div",{children:"Button link"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftButtonLink1:n})}})]}):null,Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){var e=t.state.leftButton2;t.setState({leftButton2:!e})},children:this.state.leftButton2?"Remove Button":"Add Button"})}),this.state.leftButton2?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Button text"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftButtonText2:n})}}),Object(j.jsx)("div",{children:"Button link"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftButtonLink2:n})}})]}):null,Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"whiteBtn",onClick:function(){var e=t.state.leftButton3;t.setState({leftButton3:!e})},children:this.state.leftButton3?"Remove Button":"Add Button"})}),this.state.leftButton3?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Button text"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({LeftButtonText3:n})}}),Object(j.jsx)("div",{children:"Button link"}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;t.setState({leftButtonLink3:n})}})]}):null,Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:"Insert Image"}),Object(j.jsx)("input",{placeholder:"Image Url"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h2",{children:"Right"})]}),Object(j.jsx)("div",{className:"templateContainer",children:Object(j.jsxs)("div",{className:"template",style:e,children:[Object(j.jsx)("div",{className:"templateLeft",style:c,children:Object(j.jsxs)("div",{style:s,children:[this.state.leftTitle?Object(j.jsx)("h1",{style:n,children:this.state.leftTitle}):null,this.state.leftBody?Object(j.jsx)("p",{style:i,children:this.state.leftBody}):null,"one"===this.state.leftPricingOption?Object(j.jsxs)("div",{className:"pricingContainer",children:[Object(j.jsxs)("div",{children:[this.state.leftPricingOptionOneMonthlyLease?this.state.leftPricingOptionOneMonthlyLease:"36"," month lease"]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:"pricing",children:["$",this.state.leftPricingOptionOneMonthly?this.state.leftPricingOptionOneMonthly:"439"]})," / month"]}),Object(j.jsxs)("div",{children:["MSRP: $",this.state.leftPricingOptionOneMSRP?this.state.leftPricingOptionOneMSRP:"40,745"]})]}):"two"===this.state.leftPricingOption?Object(j.jsxs)("div",{className:"pricingContainerOptionTwo",children:[Object(j.jsxs)("div",{className:"pricingOptionTwo",children:[Object(j.jsx)("span",{className:"pricing",children:this.state.leftPricingOptionTwoAPR?this.state.leftPricingOptionTwoAPR:"2"}),"% apr"]}),Object(j.jsxs)("div",{className:"dropDownPrice",children:[Object(j.jsx)("div",{class:"vl"}),Object(j.jsx)("div",{children:"financing"})," up to",Object(j.jsx)("div",{class:"vl"})]}),Object(j.jsxs)("div",{className:"pricingOptionTwo",children:[Object(j.jsxs)("span",{className:"pricing",children:["$",this.state.leftPricingOptionTwoMonthly?this.state.leftPricingOptionTwoMonthly:"399"]}),"/mo."]})]}):"three"===this.state.leftPricingOption?Object(j.jsxs)("div",{className:"pricingContainer",children:[Object(j.jsxs)("div",{children:[this.state.leftPricingOptionThreeMonthlyLease?this.state.leftPricingOptionThreeMonthlyLease:"24"," month lease"]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:"pricing",children:["$",this.state.leftPricingOptionThreeMonthly?this.state.leftPricingOptionThreeMonthly:"439"]})," / month"]}),Object(j.jsx)("hr",{className:"pricingLineVirtical"}),Object(j.jsx)("div",{children:"Buy for"}),Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"pricing",children:["$",this.state.leftPricingOptionThreeMSRP?this.state.leftPricingOptionThreeMSRP:"42,300"]})}),Object(j.jsx)("div",{children:"Limited availability at this price"})]}):null,this.state.leftButton1?Object(j.jsx)("a",{href:this.state.leftButtonLink1,children:Object(j.jsx)("button",{style:l,children:this.state.LeftButtonText1?this.state.LeftButtonText1:"button 1"})}):null,this.state.leftButton2?Object(j.jsx)("a",{href:this.state.leftButtonLink2,children:Object(j.jsx)("button",{style:l,children:this.state.LeftButtonText2?this.state.LeftButtonText2:"button 2"})}):null,this.state.leftButton3?Object(j.jsx)("a",{href:this.state.leftButtonLink3,children:Object(j.jsx)("button",{style:l,children:this.state.LeftButtonText3?this.state.LeftButtonText3:"button 3"})}):null,this.state.leftAddDropDown?Object(j.jsxs)("div",{className:"reginalOffersContainer",children:[Object(j.jsx)("div",{children:this.state.LeftDropDownTitle?this.state.LeftDropDownTitle:"REGIONAL OFFERS"}),Object(j.jsx)("button",{className:"reginalOffersBtn",onClick:function(){var t=document.getElementById("dropDownOne");"block"===t.style.display?t.style.display="none":t.style.display="block"},children:this.state.LeftDropDownS1T?this.state.LeftDropDownS1T:"2021 finance"}),Object(j.jsxs)("div",{id:"dropDownOne",children:[Object(j.jsxs)("div",{className:"dropDownPriceContainer",children:[Object(j.jsx)("div",{className:"dropDownPrice",children:"0% apr"}),Object(j.jsxs)("div",{className:"dropDownPrice",children:[Object(j.jsx)("div",{class:"vl"}),Object(j.jsx)("div",{children:"financing"})," up to",Object(j.jsx)("div",{class:"vl"})]}),Object(j.jsx)("div",{className:"dropDownPrice",children:"0/mo."})]}),Object(j.jsx)("button",{onClick:function(){var t=document.getElementById("detailsOne");"block"===t.style.display?t.style.display="none":t.style.display="block"},className:"offerDetailsBtn",children:"OFFER DETAILS"}),Object(j.jsx)("div",{id:"detailsOne",children:this.state.LeftDropDownS1D?this.state.LeftDropDownS1D:"offer details text here"})]}),Object(j.jsx)("button",{className:"reginalOffersBtn",onClick:function(){var t=document.getElementById("dropDownTwo");"block"===t.style.display?t.style.display="none":t.style.display="block"},children:this.state.LeftDropDownS2T?this.state.LeftDropDownS2T:"2022 finance"}),Object(j.jsxs)("div",{id:"dropDownTwo",children:[Object(j.jsxs)("div",{className:"dropDownPriceContainer",children:[Object(j.jsx)("div",{className:"dropDownPrice",children:"0% apr"}),Object(j.jsxs)("div",{className:"dropDownPrice",children:[Object(j.jsx)("div",{class:"vl"}),Object(j.jsx)("div",{children:"financing"})," up to",Object(j.jsx)("div",{class:"vl"})]}),Object(j.jsx)("div",{className:"dropDownPrice",children:"0/mo."})]}),Object(j.jsx)("button",{onClick:function(){var t=document.getElementById("detailsTwo");"block"===t.style.display?t.style.display="none":t.style.display="block"},className:"offerDetailsBtn",children:"OFFER DETAILS"}),Object(j.jsx)("div",{id:"detailsTwo",children:this.state.LeftDropDownS2D?this.state.LeftDropDownS2D:"offer details text here"})]}),Object(j.jsx)("button",{className:"reginalOffersBtn",onClick:function(){var t=document.getElementById("dropDownThree");"block"===t.style.display?t.style.display="none":t.style.display="block"},children:this.state.LeftDropDownS3T?this.state.LeftDropDownS3T:"2021 cash"}),Object(j.jsxs)("div",{id:"dropDownThree",children:[Object(j.jsxs)("div",{className:"dropDownPriceContainer",children:[Object(j.jsx)("div",{className:"dropDownPrice",children:"0% apr"}),Object(j.jsxs)("div",{className:"dropDownPrice",children:[Object(j.jsx)("div",{class:"vl"}),Object(j.jsx)("div",{children:"financing"})," up to",Object(j.jsx)("div",{class:"vl"})]}),Object(j.jsx)("div",{className:"dropDownPrice",children:"0/mo."})]}),Object(j.jsx)("button",{onClick:function(){var t=document.getElementById("detailsThree");"block"===t.style.display?t.style.display="none":t.style.display="block"},className:"offerDetailsBtn",children:"OFFER DETAILS"}),Object(j.jsx)("div",{id:"detailsThree",children:this.state.LeftDropDownS3D?this.state.LeftDropDownS3D:"offer details text here"})]}),Object(j.jsx)("button",{className:"reginalOffersBtn",onClick:function(){var t=document.getElementById("dropDownFour");"block"===t.style.display?t.style.display="none":t.style.display="block"},children:this.state.LeftDropDownS4T?this.state.LeftDropDownS4T:"2020 cash"}),Object(j.jsxs)("div",{id:"dropDownFour",children:[Object(j.jsxs)("div",{className:"dropDownPriceContainer",children:[Object(j.jsx)("div",{className:"dropDownPrice",children:"0% apr"}),Object(j.jsxs)("div",{className:"dropDownPrice",children:[Object(j.jsx)("div",{class:"vl"}),Object(j.jsx)("div",{children:"financing"})," up to",Object(j.jsx)("div",{class:"vl"})]}),Object(j.jsx)("div",{className:"dropDownPrice",children:"0/mo."})]}),Object(j.jsx)("button",{onClick:function(){var t=document.getElementById("detailsFour");"block"===t.style.display?t.style.display="none":t.style.display="block"},className:"offerDetailsBtn",children:"OFFER DETAILS"}),Object(j.jsx)("div",{id:"detailsFour",children:this.state.LeftDropDownS4D?this.state.LeftDropDownS4D:"offer details text here"})]})]}):null]})}),Object(j.jsx)("div",{className:"templateRight"})]})})]})})}}]),n}(i.Component),p=x,g=n.p+"static/media/homeImg.5461e2b7.png",v=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={create:!1},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),this.state.create?Object(j.jsx)(p,{}):Object(j.jsxs)("div",{className:"homeContainer",children:[Object(j.jsx)("div",{className:"homeContainerLeft",children:Object(j.jsx)("img",{src:g,alt:"Home"})}),Object(j.jsxs)("div",{className:"homeContainerRight",children:[Object(j.jsx)("h1",{className:"homeHeader",children:"Bring"}),Object(j.jsx)("h1",{className:"homeHeader",children:"Your Product"}),Object(j.jsx)("h1",{className:"homeHeader",children:"To Life"}),Object(j.jsx)("button",{className:"PinkBtn",onClick:function(){t.setState({create:!0})},children:"Get Started"})]})]})]})}}]),n}(i.Component),m=v,D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,l=e.getTTFB;n(t),i(t),s(t),c(t),l(t)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),D()}},[[15,1,2]]]);
//# sourceMappingURL=main.69322c5d.chunk.js.map