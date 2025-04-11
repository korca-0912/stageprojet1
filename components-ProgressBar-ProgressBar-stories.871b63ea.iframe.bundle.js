/*! For license information please see components-ProgressBar-ProgressBar-stories.871b63ea.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstageprojet=self.webpackChunkstageprojet||[]).push([[427],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/ProgressBar/ProgressBar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,Default:()=>Default,ThickBar:()=>ThickBar,ThinBar:()=>ThinBar,WithoutLabel:()=>WithoutLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressBar_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProgressBar_ProgressBar=_ref=>{let{progress=0,label,showPercentage=!0,color="#4a6bdf",height=12}=_ref;const percentage=Math.min(Math.max(progress,0),100);return(0,jsx_runtime.jsxs)("div",{className:"progress-container",children:[(label||showPercentage)&&(0,jsx_runtime.jsxs)("div",{className:"progress-header",children:[label&&(0,jsx_runtime.jsx)("span",{className:"progress-label",children:label}),showPercentage&&(0,jsx_runtime.jsxs)("span",{className:"progress-percentage",children:[percentage,"%"]})]}),(0,jsx_runtime.jsx)("div",{className:"progress-bar",children:(0,jsx_runtime.jsx)("div",{className:"progress-fill",style:{width:`${percentage}%`,backgroundColor:color,height:`${height}px`},"aria-valuenow":percentage,"aria-valuemin":"0","aria-valuemax":"100"})})]})};ProgressBar_ProgressBar.displayName="ProgressBar";const components_ProgressBar_ProgressBar=ProgressBar_ProgressBar;ProgressBar_ProgressBar.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{progress:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},showPercentage:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},color:{defaultValue:{value:"'#4a6bdf'",computed:!1},description:"",type:{name:"string"},required:!1},height:{defaultValue:{value:"12",computed:!1},description:"",type:{name:"number"},required:!1},label:{description:"",type:{name:"string"},required:!1}}};const ProgressBar_stories={title:"Components/ProgressBar",component:components_ProgressBar_ProgressBar,parameters:{layout:"centered"},argTypes:{progress:{control:{type:"range",min:0,max:100,step:1}},color:{control:"color",description:"Couleur de la barre de progression"},height:{control:{type:"range",min:4,max:24,step:2}},label:{control:"text"},showPercentage:{control:"boolean"}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"400px",padding:"20px"},children:(0,jsx_runtime.jsx)(Story,{})})]},Template=args=>(0,jsx_runtime.jsx)(components_ProgressBar_ProgressBar,{...args}),Default=Template.bind({});Default.args={progress:65,label:"Progression du cours",color:"#4a6bdf",height:12,showPercentage:!0};const WithoutLabel=Template.bind({});WithoutLabel.args={progress:30,showPercentage:!0,color:"#38a169"};const CustomColor=Template.bind({});CustomColor.args={progress:80,label:"Avancement du projet",color:"#805ad5",height:16};const ThinBar=Template.bind({});ThinBar.args={progress:45,label:"Barre fine",height:4};const ThickBar=Template.bind({});ThickBar.args={progress:90,label:"Barre épaisse",height:24};const __namedExportsOrder=["Default","WithoutLabel","CustomColor","ThinBar","ThickBar"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...Default.parameters?.docs?.source}}},WithoutLabel.parameters={...WithoutLabel.parameters,docs:{...WithoutLabel.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...WithoutLabel.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...CustomColor.parameters?.docs?.source}}},ThinBar.parameters={...ThinBar.parameters,docs:{...ThinBar.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...ThinBar.parameters?.docs?.source}}},ThickBar.parameters={...ThickBar.parameters,docs:{...ThickBar.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...ThickBar.parameters?.docs?.source}}}}}]);