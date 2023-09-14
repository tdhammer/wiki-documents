"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"ODYSSEY - X86J41x5",title:"OpenWRT Installation",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Installing-openwrt",last_update:{date:"01/03/2023",author:"w0x7ce"}},a=void 0,s={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-openwrt",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-openwrt",title:"OpenWRT Installation",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-openwrt.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86J4105-Installing-openwrt",permalink:"/ODYSSEY-X86J4105-Installing-openwrt",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-openwrt.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J41x5",title:"OpenWRT Installation",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Installing-openwrt",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Jellyfin Media Server Installation",permalink:"/Jellyfin-on-Docker-Ubuntu-X86"},next:{title:"OPNsense Installation",permalink:"/ODYSSEY-X86-OPNsense"}},l={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Download the OpenWrt OS Image",id:"download-the-openwrt-os-image",level:2},{value:"Creating a Bootable USB",id:"creating-a-bootable-usb",level:2},{value:"Step 1 - Prepare your Bootable USB",id:"step-1---prepare-your-bootable-usb",level:3},{value:"Step 2 - Download Flash Burner",id:"step-2---download-flash-burner",level:3},{value:"Step 3 - Writing the OS Image into USB",id:"step-3---writing-the-os-image-into-usb",level:3},{value:"Installing OpenWrt",id:"installing-openwrt",level:2},{value:"Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5",id:"step-1---enabling-csm-mode-in-odyssey---x86j41x5",level:3},{value:"Step 2 - Install the OS",id:"step-2---install-the-os",level:3},{value:"Step 3 - Installing process",id:"step-3---installing-process",level:3},{value:"Configurations",id:"configurations",level:2},{value:"Accessing from Another PC",id:"accessing-from-another-pc",level:2},{value:"Configuring LAN and WAN",id:"configuring-lan-and-wan",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial demonstrates how to install the open source OS for router network. With the help of OpenWrt, your ODYSSEY - X86J41x5 can turn into a router and take care of your home network!"),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Working Computer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A USB Drive(>= 8GB is recommended)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Monitor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Keyboard and Mouse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ethernet Cable x 2"))),(0,o.kt)("h2",{id:"download-the-openwrt-os-image"},"Download the OpenWrt OS Image"),(0,o.kt)("p",null,"First, download the ",(0,o.kt)("a",{parentName:"p",href:"https://downloads.openwrt.org/releases/"},"OpenWrt")," OS image. Choose the version you wanted, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"x86")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"64")," and download your required version."),(0,o.kt)("p",null,"In this tutorial, 19.07 version is used and click ",(0,o.kt)("a",{parentName:"p",href:"https://downloads.openwrt.org/releases/19.07.0/targets/x86/64/openwrt-19.07.0-x86-64-combined-ext4.img.gz"},"here")," to download."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/Openwrt.jpg"})),(0,o.kt)("h2",{id:"creating-a-bootable-usb"},"Creating a Bootable USB"),(0,o.kt)("h3",{id:"step-1---prepare-your-bootable-usb"},"Step 1 - Prepare your Bootable USB"),(0,o.kt)("p",null,"Format the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Format"),".  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Choose ",(0,o.kt)("inlineCode",{parentName:"p"},"FAT32")," for the File System."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:450,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"})),(0,o.kt)("h3",{id:"step-2---download-flash-burner"},"Step 2 - Download Flash Burner"),(0,o.kt)("p",null,"Download the Open Source Flash burner ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher"),". Download the version according to your operating system(Windows/macOS/Linux)."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"})),(0,o.kt)("h3",{id:"step-3---writing-the-os-image-into-usb"},"Step 3 - Writing the OS Image into USB"),(0,o.kt)("p",null,"Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png"})),(0,o.kt)("h2",{id:"installing-openwrt"},"Installing OpenWrt"),(0,o.kt)("h3",{id:"step-1---enabling-csm-mode-in-odyssey---x86j41x5"},"Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5"),(0,o.kt)("p",null,"Plug in your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"DEL"))," key to enter the setup Screen. Navigate to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Advanced"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CSM Support"))," and press Enter to enable it."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg"})),(0,o.kt)("h3",{id:"step-2---install-the-os"},"Step 2 - Install the OS"),(0,o.kt)("p",null,"Reboot your ODYSSEY - X86J41x5 and keep pressing ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"F7"))," to enter the boot manager screen. Select the bootable USB and press Enter."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg"})),(0,o.kt)("h3",{id:"step-3---installing-process"},"Step 3 - Installing process"),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"OpenWrt"))," and press Enter. Follow through the installing instructions on the screen."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/installingOpenwrt.jpg"})),(0,o.kt)("p",null,"When it's done, press Enter and you should see the screen as follow:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/OpenWrtShell.jpg"})),(0,o.kt)("p",null,"Now your OpenWrt is installed and ready to be used!"),(0,o.kt)("h2",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"Now, let's configure to access to the OpenWrt system from a web interface from another PC. Enter the following in the shell in OpenWrt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"vi /etc/config/network\n")),(0,o.kt)("p",null,"And change the settings to as follow:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/settings.jpg"})),(0,o.kt)("p",null,"Where you change the station IP address for LAN configurations so that you can use this IP to access to router. Here the IP is changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.10.1")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," In vim, type ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"i"))," first to be insert mode so that you can edit. When done with editing, press ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ESC"))," key and type ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},":wq"))," and enter to save and quit."),(0,o.kt)("h2",{id:"accessing-from-another-pc"},"Accessing from Another PC"),(0,o.kt)("p",null,"Now, you can access the OpenWrt from another computer via LuCI web interface. Simply, use ",(0,o.kt)("strong",{parentName:"p"},"a Ethernet cable to connect Ethernet Port that is close to the HDMI port"),". Connect the other ethernet cable to the other Ethernet port on ODYSSEY - X86J41x5 and to the internet(This may be varied such as  PPPoE method)."),(0,o.kt)("p",null,"Now, from your computer, type ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.10.1")," (The IP address specified earlier) in the web browser and you should see the following screen:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/ipAddress.jpg"})),(0,o.kt)("p",null,"Now, you can access your OpenWrt from another PC!"),(0,o.kt)("h2",{id:"configuring-lan-and-wan"},"Configuring LAN and WAN"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Network"))," -> ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Interfaces"))," and configure WAN settings for internet access:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface.jpg"})),(0,o.kt)("p",null," This shows the all the interfaces settings for OpenWrt. Here, simply make sure the the ",(0,o.kt)("strong",{parentName:"p"},"WAN(eth1) port")," is connected to the internet and is set to ",(0,o.kt)("strong",{parentName:"p"},"DHCP client Protocol")," as follow:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/interface2.jpg"})),(0,o.kt)("p",null,"  Now, your computer should access to the internet and your router is set to go!"),(0,o.kt)("p",null,"  ",(0,o.kt)("em",{parentName:"p"},"For further development, you can start downloading and deploying all sort of applications such as Ad block, port mirroring and etc! For more, please visit ",(0,o.kt)("a",{parentName:"em",href:"https://openwrt.org/"},"OpenWrt"),".")),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);