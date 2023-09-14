"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),h=r,g=l["".concat(s,".").concat(h)]||l[h]||p[h]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={description:"How to detect finger touch",title:"How to detect finger touch",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How_to_detect_finger_touch",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},i=void 0,c={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch",title:"How to detect finger touch",description:"How to detect finger touch",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/How_to_detect_finger_touch",permalink:"/How_to_detect_finger_touch",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"How to detect finger touch",title:"How to detect finger touch",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How_to_detect_finger_touch",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"GPS Modules Selection Guide",permalink:"/GPS-Modules-Selection-Guide"},next:{title:"Seeed Relay Selection Guide",permalink:"/Seeed_Relay_Page"}},s={},u=[{value:"How to Measure Capacitance",id:"how-to-measure-capacitance",level:2},{value:"How to Touch Sensing",id:"how-to-touch-sensing",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-measure-capacitance"},"How to Measure Capacitance"),(0,r.kt)("p",null,"The complete capacitance measurement system is composed by sensing electrode pads connected to MPR121 sensing inputs, and the MPR121 communicating with the host processor via I2C bus and interrupt output."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-1.jpg",alt:null})),(0,r.kt)("p",null,"The capacitance measured on each sensing channel is the total capacitance to ground which can be the combination of background parasitic capacitance to ground(Cb) and finger touch induced capacitance to ground(Cx). The MPR121 uses a constant DC charge current scheme for capacitance measurement. Each channel is charged and then discharged completely to ground periodically to measure the capacitance. All the channels are measured sequentially, when one channel is in the charge/discharge and measurement period the other channels are shorted to ground."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/500px-2.jpg",alt:null})),(0,r.kt)("p",null,"The amount of charge(Q)applied is programmable by setting the charge current(I), And the charge time(T). Once the electrode is charged, the peak voltage(V)at the end of chage is measured by internal 10 bit ADC. This voltage V is reverse proportional to the capatance(C)on the sensing channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," C = Q/V = (I*T)/V\n")),(0,r.kt)("p",null,"That is, If charge the outside cap with a some value of current(I) and time(T), and get the voltage(V), We can get the value of captance, using this way, the C measureble range can be calculated."),(0,r.kt)("h2",{id:"how-to-touch-sensing"},"How to Touch Sensing"),(0,r.kt)("p",null,"The ADC raw data outputs run through 3 levels of digital filtering to filter out the high frequency and low frequency noise encountered. The first level filter is a simple running average filter, the second level filter result is 10bit and stored in the output data registers as the immediate capacitance of each sensing input, the third level filter result is an even lower frequency content of signal change using the second level filter output, mainly used as the baseline value representing the capacitance variation over the long term and slow environment change such as atmospheric moisture and dirt for touch detection."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-3.jpg",alt:null})),(0,r.kt)("p",null,"Touch and release is determined by comparing the immediate capacitance deviation that is the electrode second level filtered output data deviation to the baseline value. If the deviation passed the setting threshold, then a touch or release status is detected and reported in the status register. The touch and release threshold are independent and individually programmable for each electrode, providing hysteresis and electrode independence. Debounce setting can be used for further noise filtering to provide glitch free touch and release detection."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-4.jpg",alt:null})),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}l.isMDXComponent=!0}}]);