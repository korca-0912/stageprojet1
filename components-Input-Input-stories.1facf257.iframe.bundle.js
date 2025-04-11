/*! For license information please see components-Input-Input-stories.1facf257.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstageprojet=self.webpackChunkstageprojet||[]).push([[115],{"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Input/Input.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmailInput:()=>EmailInput,ErrorState:()=>ErrorState,PasswordInput:()=>PasswordInput,SuccessState:()=>SuccessState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input_Input=_ref=>{let{type="text",label,placeholder,value,onChange,disabled=!1,error=!1,errorMessage,success=!1,fullWidth=!1,required=!1,id,name}=_ref;const inputId=id||`input-${Math.random().toString(36).substr(2,9)}`;return(0,jsx_runtime.jsxs)("div",{className:"input-container "+(fullWidth?"full-width":""),children:[label&&(0,jsx_runtime.jsxs)("label",{htmlFor:inputId,className:"input-label",children:[label,required&&(0,jsx_runtime.jsx)("span",{className:"required-asterisk",children:"*"})]}),(0,jsx_runtime.jsx)("div",{className:`input-wrapper ${error?"error":""} ${success?"success":""}`,children:(0,jsx_runtime.jsx)("input",{type,id:inputId,name:name||inputId,className:"input-field",placeholder,value,onChange,disabled,required})}),error&&errorMessage&&(0,jsx_runtime.jsx)("span",{className:"error-message",children:errorMessage}),success&&!error&&(0,jsx_runtime.jsx)("span",{className:"success-message",children:"Validé"})]})};Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},description:"",type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'email'",computed:!1},{value:"'password'",computed:!1},{value:"'number'",computed:!1},{value:"'tel'",computed:!1},{value:"'url'",computed:!1},{value:"'search'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},success:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!0},errorMessage:{description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1}}};const Input_stories={title:"Components/Input",component:Input_Input,argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"]},disabled:{control:"boolean"},error:{control:"boolean"},success:{control:"boolean"},fullWidth:{control:"boolean"},required:{control:"boolean"}}},Template=args=>(0,jsx_runtime.jsx)(Input_Input,{...args}),Default=Template.bind({});Default.args={label:"Nom d'utilisateur",placeholder:"Entrez votre nom"};const EmailInput=Template.bind({});EmailInput.args={label:"Adresse email",placeholder:"exemple@email.com",type:"email"};const PasswordInput=Template.bind({});PasswordInput.args={label:"Mot de passe",type:"password",placeholder:"Entrez votre mot de passe"};const ErrorState=Template.bind({});ErrorState.args={label:"Champ avec erreur",error:!0,errorMessage:"Ce champ est obligatoire"};const SuccessState=Template.bind({});SuccessState.args={label:"Champ validé",success:!0,value:"Valeur correcte"};const __namedExportsOrder=["Default","EmailInput","PasswordInput","ErrorState","SuccessState"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...Default.parameters?.docs?.source}}},EmailInput.parameters={...EmailInput.parameters,docs:{...EmailInput.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...EmailInput.parameters?.docs?.source}}},PasswordInput.parameters={...PasswordInput.parameters,docs:{...PasswordInput.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...PasswordInput.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...ErrorState.parameters?.docs?.source}}},SuccessState.parameters={...SuccessState.parameters,docs:{...SuccessState.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...SuccessState.parameters?.docs?.source}}}}}]);