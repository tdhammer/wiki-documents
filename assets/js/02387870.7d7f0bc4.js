"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89584],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},38252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={description:"This article focuses on the use of the Grove SGP41 sensor.",title:"Correction for SGP41(raw) measurement dependent on humidity and temperature",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove-sgp41-with-ath20",last_update:{date:"10/16/2023",author:"Hans Bausewein"}},a="Correction for SGP41(raw) measurement dependent on humidity and temperature",s={unversionedId:"Sensor/Seeeduino Series/Application/Grove-SGP41-with-AHT20",id:"Sensor/Seeeduino Series/Application/Grove-SGP41-with-AHT20",title:"Correction for SGP41(raw) measurement dependent on humidity and temperature",description:"This article focuses on the use of the Grove SGP41 sensor.",source:"@site/docs/Sensor/Seeeduino Series/Application/Grove-SGP41-with-AHT20.md",sourceDirName:"Sensor/Seeeduino Series/Application",slug:"/grove-sgp41-with-ath20",permalink:"/grove-sgp41-with-ath20",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Application/Grove-SGP41-with-AHT20.md",tags:[],version:"current",lastUpdatedBy:"Hans Bausewein",lastUpdatedAt:1697414400,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{description:"This article focuses on the use of the Grove SGP41 sensor.",title:"Correction for SGP41(raw) measurement dependent on humidity and temperature",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove-sgp41-with-ath20",last_update:{date:"10/16/2023",author:"Hans Bausewein"}},sidebar:"ProductSidebar",previous:{title:"FM Receiver",permalink:"/FM_Receiver"},next:{title:"Grove IoT Starter Kits Powered by AWS",permalink:"/Grove_IoT_Starter_Kits_Powered_by_AWS"}},l={},u=[{value:"Overview (How I get started with this project)",id:"overview-how-i-get-started-with-this-project",level:2},{value:"Theory Test",id:"theory-test",level:3},{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"1. Connect With Arduino Nano",id:"1-connect-with-arduino-nano",level:3},{value:"2. Downolad the required libraries and add them into Arduino",id:"2-downolad-the-required-libraries-and-add-them-into-arduino",level:3},{value:"3. Upload the Code and check the result",id:"3-upload-the-code-and-check-the-result",level:3},{value:"Resources",id:"resources",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"correction-for-sgp41raw-measurement-dependent-on-humidity-and-temperature"},"Correction for SGP41(raw) measurement dependent on humidity and temperature"),(0,i.kt)("h2",{id:"overview-how-i-get-started-with-this-project"},"Overview (How I get started with this project)"),(0,i.kt)("p",null,"First I have read the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/grove-smart-air-quality-sensor-sgp41"},"Grove - Smart Air Quality Sensor (SGP41)")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/"},"Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor")," documentation."),(0,i.kt)("p",null,"According to the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf"},"SGP41 Datasheet (PDF)")," section 3.2 (Raw Signal Measurement), the SGP41 measurement is dependent on humidity and temperature, so we need to apply a correction to get consistent data: read the relative humidity and temperature from the AHT20 (or another sensor), calculate the ticks and pass them to the ",(0,i.kt)("em",{parentName:"p"},"sgp41_measure_raw_signals")," function."),(0,i.kt)("h3",{id:"theory-test"},"Theory Test"),(0,i.kt)("p",null,"Table 11 (Description of the I2C measurement command) on page 15 describes the formulas to calculate the ticks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RHticks = RH% \xd7 65535 / 100\nTticks = (T\xb0C + 45) \xd7 65535 / 175\n")),(0,i.kt)("p",null,"Verify by using the defaults 25\xb0C and 50% relative humidity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"50 \xd7 65535 / 100 = 32767.5 = 0x8000 (hexadecimal, rounded up)\n(25 + 45) \xd7 65535 / 175 = 26214 = 0x6666 (hexadecimal) \n")),(0,i.kt)("p",null,"The results match the constants used in the program used by ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/grove-smart-air-quality-sensor-sgp41"},"Grove - Smart Air Quality Sensor (SGP41)")," and defined in Table 11 of the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf"},"SGP41 Datasheet (PDF)"),". "),(0,i.kt)("p",null,"The same in c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"        int h_ticks = humi * 0xFFFF;\n        int t_ticks = (temp + 45) * 0xFFFF / 175;\n")),(0,i.kt)("p",null,"Note that 'humi' in the program is a value between 0 and 1, so the division by 100 and earlier multiplication were removed."),(0,i.kt)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,i.kt)("p",null,"I am using Seeeduino Nano as the control board and using Grove - Smart Air Quality Sensor (SGP41) and Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor to make it happened."),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("th",null,"Seeeduino Nano"),(0,i.kt)("th",null,"Grove - AHT20 Temperature&Humidity Sensor"),(0,i.kt)("th",null,"Grove - Smart Air Quality Sensor (SGP41)"),(0,i.kt)("th",null,"Grove - Branch Cable")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg",style:{width:185,height:"auto"}}))),(0,i.kt)("td",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png",style:{width:185,height:"auto"}}))),(0,i.kt)("td",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg",style:{width:185,height:"auto"}}))),(0,i.kt)("td",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg",style:{width:185,height:"auto"}})))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"3"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"3"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"3"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"3"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.kt)("h2",{id:"software-preparation"},"Software Preparation"),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("th",null,"Arduino IDE")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.arduino.cc/en/software"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Download \u23ec"))))))))),(0,i.kt)("p",null,"There are multiple libraries that are required and are presented next setp."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,i.kt)("h3",{id:"1-connect-with-arduino-nano"},"1. Connect With Arduino Nano"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Branch Cable to the ",(0,i.kt)("strong",{parentName:"p"},"I2C")," port of Seeeduino Nano.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Branch Cable into the I2C Grove AHT20 sensor module.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Plug Grove - Branch Cable into the I2C Grove SGP41 sensor module.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to a PC via a USB cable."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/1.jpg",alt:"Seeeduino_SGP41_AHT20"})),(0,i.kt)("h3",{id:"2-downolad-the-required-libraries-and-add-them-into-arduino"},"2. Downolad the required libraries and add them into Arduino"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the dependency libraries from Github."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"arduino-core Library"),":"),(0,i.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"github_item",href:"https://github.com/Sensirion/arduino-core"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Download the Libraries")))," ",(0,i.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,i.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"arduino-i2c-sgp41 Library"),":"),(0,i.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"github_item",href:"https://github.com/Sensirion/arduino-i2c-sgp41"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Download the Libraries")))," ",(0,i.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,i.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Seeed_Arduino_AHT20")," Library: "),(0,i.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"github_item",href:"https://github.com/Seeed-Studio/Seeed_Arduino_AHT20"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Download the Libraries")))," ",(0,i.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,i.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"}))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," After downloading and installing the libraries correctly, you can upload the code below, which is a combination of the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/grove-smart-air-quality-sensor-sgp41#software"},"SGP41")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor//#software-code"},"AHT20")," software with the formulas described in the introduction added."))),(0,i.kt)("h3",{id:"3-upload-the-code-and-check-the-result"},"3. Upload the Code and check the result"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Upload the demo. If you do not know how to upload the code, please check ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// ARDUINO DEMO FOR GROVE-AHT20+SGP41\n//\n#include <Wire.h>\n#include "AHT20.h"\n#include <Arduino.h>\n#include <SensirionI2CSgp41.h>\n\nSensirionI2CSgp41 sgp41;\n\n// time in seconds needed for NOx conditioning\nuint16_t conditioning_s = 10;\n\nAHT20 AHT;\n\nvoid setup() {\n    Serial.begin(115200);\n    while (!Serial) {\n        delay(100);\n    }\n\n    Wire.begin();\n\n    uint16_t error;\n    char errorMessage[256];\n\n    sgp41.begin(Wire);\n\n    uint16_t serialNumber[3];\n    uint8_t serialNumberSize = 3;\n\n    error = sgp41.getSerialNumber(serialNumber, serialNumberSize);\n\n    if (error) {\n        Serial.print("Error trying to execute getSerialNumber(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("SerialNumber:");\n        Serial.print("0x");\n        for (size_t i = 0; i < serialNumberSize; i++) {\n            uint16_t value = serialNumber[i];\n            Serial.print(value < 4096 ? "0" : "");\n            Serial.print(value < 256 ? "0" : "");\n            Serial.print(value < 16 ? "0" : "");\n            Serial.print(value, HEX);\n        }\n        Serial.println();\n    }\n\n    uint16_t testResult;\n    error = sgp41.executeSelfTest(testResult);\n    if (error) {\n        Serial.print("Error trying to execute executeSelfTest(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else if (testResult != 0xD400) {\n        Serial.print("executeSelfTest failed with error: ");\n        Serial.println(testResult);\n    }\n    AHT.begin();\n}\n\nuint16_t read_sgp41(uint16_t rh, uint16_t t) {\n    uint16_t error;\n    char errorMessage[256];\n    uint16_t srawVoc = 0;\n    uint16_t srawNox = 0;\n\n    delay(1000);\n\n    if (conditioning_s > 0) {\n        // During NOx conditioning (10s) SRAW NOx will remain 0\n        error = sgp41.executeConditioning(rh, t, srawVoc);\n        conditioning_s--;\n    } else {\n        // Read Measurement\n        error = sgp41.measureRawSignals(rh, t, srawVoc, srawNox);\n    }\n\n    if (error) {\n        Serial.print("Error trying to execute measureRawSignals(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("RH ticks: ");\n        Serial.print(rh);\n        Serial.print("\\t");\n        Serial.print("T ticks: ");\n        Serial.print(t);\n        Serial.print("\\t");\n        Serial.print("SRAW_VOC: ");\n        Serial.print(srawVoc);\n        Serial.print("\\t");\n        Serial.print("SRAW_NOx: ");\n        Serial.println(srawNox);\n    }\n    return error;\n}\n\nvoid loop()\n{\n    float humi, temp;\n    \n    int ret = AHT.getSensor(&humi, &temp);\n    \n    if(ret)     // GET DATA OK\n    {\n        Serial.print("humidity: ");\n        Serial.print(humi*100);\n        Serial.print("%\\t temperature: ");\n        Serial.print(temp);\n        Serial.print("\\t");\n        // T-ticks = (T/\xb0C + 45) \xd7 65535 / 175\n        // H-ticks = RH/% \xd7 65535 / 100\n        int h_ticks = humi * 0xFFFF;\n        int t_ticks = (temp + 45) * 0xFFFF / 175;\n        read_sgp41(h_ticks, t_ticks);\n    }\n    else        // GET DATA FAIL\n    {\n        Serial.println("GET DATA FROM AHT20 FAIL");\n    }\n    \n    delay(100);\n}\n\n// END FILE\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Open the ",(0,i.kt)("strong",{parentName:"li"},"Serial Monitor")," of Arduino IDE by click ",(0,i.kt)("strong",{parentName:"li"},"Tool-> Serial Monitor"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/2.jpg",alt:"Serial Console output"})),(0,i.kt)("p",null,"Note that the first ten SRAW_NOx values are zero due to conditioning."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/grove-smart-air-quality-sensor-sgp41#resources"},"SGP41")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor//#resources"},"AHT20"))),(0,i.kt)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"."),(0,i.kt)("li",{parentName:"ul"},"Thanks ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35179519"},"Hans's efforts")," and your work will be ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);