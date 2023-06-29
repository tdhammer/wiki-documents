"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32719],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(i),h=n,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return i?o.createElement(g,a(a({ref:t},d),{},{components:i})):o.createElement(g,a({ref:t},d))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<r;p++)a[p]=i[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},88495:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=i(87462),n=(i(67294),i(3905));const r={description:"Wio-WM1110 Dev Kit_Server Configuration",title:"Server Configuration",keywords:["Wio-WM1110 Dev Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-WM1110_Dev_Kit_Server_Configuration",last_update:{date:"6/26/2023",author:"Jessie"}},a=void 0,l={unversionedId:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Server_Configuration",id:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Server_Configuration",title:"Server Configuration",description:"Wio-WM1110 Dev Kit_Server Configuration",source:"@site/docs/Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Server_Configuration.md",sourceDirName:"Sensor/Wio_Series/Wio-WM1110_Dev_Kit",slug:"/Wio-WM1110_Dev_Kit_Server_Configuration",permalink:"/Wio-WM1110_Dev_Kit_Server_Configuration",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio-WM1110_Dev_Kit/Server_Configuration.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1687737600,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{description:"Wio-WM1110 Dev Kit_Server Configuration",title:"Server Configuration",keywords:["Wio-WM1110 Dev Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-WM1110_Dev_Kit_Server_Configuration",last_update:{date:"6/26/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Hardware Overview",permalink:"/Wio-WM1110_Dev_Kit_Hardware_Overview"},next:{title:"LoRaWAN\xae Gateway Module WM1302",permalink:"/WM1302_module"}},s={},p=[{value:"LoRa Cloud\u2122 Modem &amp; Geolocation Services",id:"lora-cloud-modem--geolocation-services",level:2},{value:"Step 1: Create an Owner",id:"step-1-create-an-owner",level:3},{value:"Step 2: Get a Token",id:"step-2-get-a-token",level:3},{value:"Step 3: API URL",id:"step-3-api-url",level:3},{value:"LoRaWAN\xae Network Server(TTN)",id:"lorawan-network-serverttn",level:2},{value:"Step 1: Create an application",id:"step-1-create-an-application",level:3},{value:"Step 2: Register the Device",id:"step-2-register-the-device",level:3},{value:"Step 3: Create Credentials",id:"step-3-create-credentials",level:3},{value:"Application Server",id:"application-server",level:2},{value:"Install Node.js\xae",id:"install-nodejs",level:3},{value:"Install Node-RED",id:"install-node-red",level:3},{value:"Importing the Flow",id:"importing-the-flow",level:3},{value:"Configure the Flow",id:"configure-the-flow",level:3},{value:"LoRa Cloud Configuration",id:"lora-cloud-configuration",level:4},{value:"Configuring Node-RED User Interface Elements",id:"configuring-node-red-user-interface-elements",level:4},{value:"Data View",id:"data-view",level:3},{value:"Geolocation",id:"geolocation",level:4}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide walks you through the steps to set up all required servers. It also provides several sample applications."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Architecture & Data Flow")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/modem-e_flow.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h2",{id:"lora-cloud-modem--geolocation-services"},"LoRa Cloud\u2122 Modem & Geolocation Services"),(0,n.kt)("p",null,"The LoRa Cloud Modem & Geolocation Services provide a full set of lifecycle management features for LoRa\xae devices operating on a LoRaWAN network. These features include but are not limited to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Comprehensive device telemetry"),(0,n.kt)("li",{parentName:"ul"},"Device and application configuration"),(0,n.kt)("li",{parentName:"ul"},"Clock synchronization"),(0,n.kt)("li",{parentName:"ul"},"Advanced data transport services with robustness against packet loss and transparent data fragmentation (buffer streaming and file upload)."),(0,n.kt)("li",{parentName:"ul"},"Geolocation")),(0,n.kt)("p",null,"To begin, go to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244"},"LoRa Cloud\u2122 portal")," and register for an account."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"step-1-create-an-owner"},"Step 1: Create an Owner"),(0,n.kt)("p",null,"To create a token, you first need to create an owner.\nNavigate to the DEVICE OWNERS page.\nClick CREATE NEW OWNER."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"step-2-get-a-token"},"Step 2: Get a Token"),(0,n.kt)("p",null,"A token is required for the application server to authenticate calls to the LoRa Cloud Modem & Geolocation Services server. "),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"step-3-api-url"},"Step 3: API URL"),(0,n.kt)("p",null,'The LoRa Cloud Modem & Geolocation Services URL depends on the region in which the device will be deployed.\nClick "Manage Tokens", then you can check the API URL:'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When data is received from a device, it is automatically registered with the LoRa Cloud Modem & Geolocation Services server. This means that the device does not need to be registered beforehand.")),(0,n.kt)("h2",{id:"lorawan-network-serverttn"},"LoRaWAN\xae Network Server(TTN)"),(0,n.kt)("p",null,"Currently we use ",(0,n.kt)("a",{parentName:"p",href:"https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3"},"The Things Network V3")),(0,n.kt)("p",null,"To begin, register for an account with The Things Industries or The Things Network."),(0,n.kt)("p",null,"Refer to the page What is the difference between The Things Industries and The Things Network? to understand the differences between The Things Industries and The Things Network."),(0,n.kt)("p",null,"This section use indistincly The Things Industries or The Things Network."),(0,n.kt)("h3",{id:"step-1-create-an-application"},"Step 1: Create an application"),(0,n.kt)("p",null,'Navigate to Applications page, click "+Create application".'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",null,"Enter an Application ID, click Create Application to save your changes."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"step-2-register-the-device"},"Step 2: Register the Device"),(0,n.kt)("p",null,'Click "Register end device".'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",null,"Set the following parameters:\n",(0,n.kt)("strong",{parentName:"p"},"Frequency Plan"),": Select the appropriate Frequency plan for the target region\n",(0,n.kt)("strong",{parentName:"p"},"LoRaWAN version"),":LoRaWAN Specification 1.0.3\n",(0,n.kt)("strong",{parentName:"p"},"Regional Parameters version"),": V1.0.3 REV A"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"JoinEUI/DevEUI/APPEUI: Which you defined in the 'lorawan_key_config.h' file in the previous setting.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"step-3-create-credentials"},"Step 3: Create Credentials"),(0,n.kt)("p",null,"The Things Network V3 network server requires that you generate a unique MQTT password. On the Application page of the console:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click Integrations and then MQTT.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select Generate new API Key.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy the values from the following fields: Server Address, Username, and Password.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h2",{id:"application-server"},"Application Server"),(0,n.kt)("p",null,"The application server handles application data and device management frames. As there is no background connection between the LoRaWAN\xae network server and the LoRa Cloud\u2122 Modem & Geolocation Services, all uplinks related to modem traffic must be forwarded by the application server to the Lora Cloud Modem & Geolocation Services."),(0,n.kt)("p",null,"We use Node-RED as the application server. Node-RED is a browser-based visual programming tool that allows for fast prototyping. Built on Node.js, Node-RED can be used to wire flows together using a wide array of nodes. These nodes can then be deployed to the Node-RED runtime with a single click."),(0,n.kt)("h3",{id:"install-nodejs"},"Install Node.js\xae"),(0,n.kt)("p",null,"To install Node-RED locally you will need a ",(0,n.kt)("a",{href:"https://nodered.org/docs/faq/node-versions",target:"_blank"},(0,n.kt)("span",null," Supported Node Version "))),(0,n.kt)("p",null,"Download the latest 14.x LTS version of Node.js from the official ",(0,n.kt)("a",{href:"https://nodejs.org/en/",target:"_blank"},(0,n.kt)("span",null,"Node.js")),"\nIt will offer you the best version for your system."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"When installing Node.js, if you are using a computer that has not had any programming environment installed, we would recommend that you check the box to install the necessary tools while installing Node.js, which will save you a lot of necessary trouble."),(0,n.kt)("p",null,"The easiest way to install Node-RED is, using Node's package management tool, npm. However, we do not recommend installing Node-RED with npm 1.x, but rather upgrading it to the latest npm 2.x version."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"On Windows (Requires Windows 10 and above), use the Win+R shortcut and type cmd in the pop-up window to bring up the terminal and execute the following command.")),(0,n.kt)("p",null,"If you are using MacOS or Linux, please execute the following command in the terminal and add sudo in front of the command for non-root users."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"npm install -g npm@2.x\n")),(0,n.kt)("p",null,"Once installed, open a command prompt and run the following command to ensure Node.js and npm are installed correctly."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"node --version && npm --version\n")),(0,n.kt)("p",null,"You should receive back output that looks similar to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"> v18.7.0\n> 9.6.5\n")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{id:"install-node-red"},"Install Node-RED"),(0,n.kt)("p",null,"Installing Node-RED as a global module adds the command node-red to your system path. Execute the following at the command prompt:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"npm install -g --unsafe-perm node-red\n")),(0,n.kt)("p",null,"If Node-RED is installed as a global npm package, then execute the command node-red directly:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"node-red\n")),(0,n.kt)("p",null,"This will allow you to see the Node-RED editor on http://localhost:1880."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"The user interface has three key areas:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Palette"),": This is where you can select nodes; these are functional blocks that can be dragged-and-dropped, and then can be linked together to create a flow."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flow"),": This is the source code of the program. In this pane, you can link nodes together to create an application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sidebar"),": The Sidebar displays any Help or debugging information available for the selected node.")),(0,n.kt)("h3",{id:"importing-the-flow"},"Importing the Flow"),(0,n.kt)("p",null,"The Seeed package includes useful samples to walk you through this example project,just need to import these 2 config file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},".../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json\n\n.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json\n")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",null,"Then you will see the following flows:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"configure-the-flow"},"Configure the Flow"),(0,n.kt)("p",null,"Configuring the LoRaWAN Network Server (MQTT)\nAll network server connectors are activated by default; however, the MQTT connection must be set up separately.\nBefore you begin, get the required data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MQTT server address"),(0,n.kt)("li",{parentName:"ul"},"MQTT port"),(0,n.kt)("li",{parentName:"ul"},"MQTT username"),(0,n.kt)("li",{parentName:"ul"},"MQTT password")),(0,n.kt)("p",null,"This data can be obtained in ",(0,n.kt)("strong",{parentName:"p"},"Step 3: Create Credentials")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt2.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",null,'Doule click"TTN v3-Uplinks" node,and edit MQTT node.'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",null,"Enter values in the Server, Port."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt2.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h4",{id:"lora-cloud-configuration"},"LoRa Cloud Configuration"),(0,n.kt)("p",null,"To configure the server, the MGS URL and MGS TOKEN values from the LoRa Cloud Modem & Geolocation Services setup step, are required, as is the device\u2019s DevEUI."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h4",{id:"configuring-node-red-user-interface-elements"},"Configuring Node-RED User Interface Elements"),(0,n.kt)("h3",{id:"data-view"},"Data View"),(0,n.kt)("p",null,'Click "Debug", to view the data returned by the LoRa Cloud Modem & Geolocation Services:'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h4",{id:"geolocation"},"Geolocation"),(0,n.kt)("p",null,"To display the map, add ",(0,n.kt)("inlineCode",{parentName:"p"},"/worldmap")," to the URL in your web browser.\nFor example: ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:1880/worldmap"},"http://127.0.0.1:1880/worldmap")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h1",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Need help with your Wio-WM1110 Dev Kit? We're here to assist you!")),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,n.kt)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions",class:"button_discussion"})))}c.isMDXComponent=!0}}]);