"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={description:"SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)",title:"Ubidots Integrated(Helium)",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_Ubidots_Helium",last_update:{date:"8/16/2023",author:"Jessie"}},i=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Helium_Cloud_Services/Ubidots_Integrated",id:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Helium_Cloud_Services/Ubidots_Integrated",title:"Ubidots Integrated(Helium)",description:"SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)",source:"@site/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/Helium_Cloud_Services/Ubidots_Integrated.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Helium_Cloud_Services",slug:"/SenseCAP_T1000_tracker_Ubidots_Helium",permalink:"/SenseCAP_T1000_tracker_Ubidots_Helium",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/Helium_Cloud_Services/Ubidots_Integrated.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1692144e3,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{description:"SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)",title:"Ubidots Integrated(Helium)",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_Ubidots_Helium",last_update:{date:"8/16/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Qubitro Integrated(TTS)",permalink:"/SenseCAP_T1000_tracker_Qubitro_TTS"},next:{title:"SenseCAP Industrial Sensors Guide",permalink:"/SenseCAP_Sensor_Intro"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article will illustrate the process of connecting the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig"},"SenseCAP T1000 Tracker")," to Ubidots through Helium LNS."),(0,o.kt)("div",{align:"right"},"Written by Juan David Tangarife - From Ubidots Team"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns"},"Source")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png",alt:"pir",width:400,height:"auto"})),(0,o.kt)("p",null,"Scan the following QR code. It will take you to Seeed Studio's SenseCAP Mate app official download page."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png",alt:"pir",width:200,height:"auto"})),(0,o.kt)("p",null,"Once it is installed, enable the Bluetooth on your cellphone and launch the app. If you don't have an account already, you will have to register to use the app."),(0,o.kt)("p",null,"After that, press and hold the tracker's button for at least 3 seconds or until the LED starts flashing. Then, from the list of devices, select ",(0,o.kt)("strong",{parentName:"p"},"Tracker T1000")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Tap on your device:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("strong",{parentName:"p"},"settings")," tab and then ",(0,o.kt)("strong",{parentName:"p"},"LoRa")," tab. There select as ",(0,o.kt)("em",{parentName:"p"},"platform")," ",(0,o.kt)("strong",{parentName:"p"},"Helium")," and select the ",(0,o.kt)("em",{parentName:"p"},"Frequency plan")," according to your requirements, also, make sure to copy the ",(0,o.kt)("strong",{parentName:"p"},"Device EUI, APP EUI")," and ",(0,o.kt)("strong",{parentName:"p"},"APP Key")," for you are going to need it in later steps. Once finished, tap the ",(0,o.kt)("strong",{parentName:"p"},"Send")," button to save the settings."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("p",null,"Log into your Helium console, then, go to ",(0,o.kt)("strong",{parentName:"p"},"\u201cDevices\u201d")," section and click on ",(0,o.kt)("strong",{parentName:"p"},"\u201cAdd device\u201d")," button"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Fill the required fields such as the device name",(0,o.kt)("strong",{parentName:"p"},",")," the LoRaWAN credentials, etc. Then click the ",(0,o.kt)("strong",{parentName:"p"},"Save Device")," button."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"The next step is to setup the function that will decode the raw bytes into a human readable form. Head to ",(0,o.kt)("strong",{parentName:"p"},"Function")," tab on the panel at the left side. Then click the ",(0,o.kt)("strong",{parentName:"p"},"Add New Function")," button and give it a name:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Seeed Studio provides a decoder specifically for this device on the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js"},"repository"),". Paste that decoder on the text field and then save the changes."),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," section, then click on ",(0,o.kt)("strong",{parentName:"p"},"Add integration")," and search for the Ubidots integration:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Click on ",(0,o.kt)("strong",{parentName:"p"},"+Add integration")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Enter your Ubidots token in the respective field, then click on the ",(0,o.kt)("strong",{parentName:"p"},"Continue")," button and wait for the confirmation pop-up message. After that, name your integration and click the ",(0,o.kt)("strong",{parentName:"p"},"Add Integration")," button:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"After performing this step, a new ",(0,o.kt)("strong",{parentName:"p"},"Helium plugin")," will be created on your Ubidots account."),(0,o.kt)("p",null,"Head to the ",(0,o.kt)("strong",{parentName:"p"},"Flows")," section, then, from the drop-down menu at the top left corner, drag and drop the device, the decoder function and the integration into the blank area, then join the dots together as the GIF below shows:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,'In this example, both the device and the decoder function are called "sensecap-lorawan-tracker", and the integration is called "send data to ubidots".'),(0,o.kt)("p",null,"Since the JSON object returned by Seeed Studio's decoder is not compatible with the Ubidots schema, a transformation is needed after extracting the data of interest.",(0,o.kt)("br",{parentName:"p"}),"\n","Head to the decoder section of your Helium plugin, delete all the code there and replace it with the following one:  "),(0,o.kt)("p",null,"If everything got wired up correctly, you should be seeing this on a newly created device on Ubidots"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png",alt:"pir",width:800,height:"auto"})))}p.isMDXComponent=!0}}]);