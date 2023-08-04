"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return r?n.createElement(k,s(s({ref:t},d),{},{components:r})):n.createElement(k,s({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},19726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"A603 Carrier Board",title:"A603 Carrier Board",keywords:["Edge","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reComputer_A603_Flash_System",last_update:{date:"04/19/2023",author:"Lakshantha"}},s="Flash JetPack OS to A603 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)",i={unversionedId:"Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards/A603_Flash_JetPack",id:"Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards/A603_Flash_JetPack",title:"A603 Carrier Board",description:"A603 Carrier Board",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards/A603_Flash_JetPack.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards",slug:"/reComputer_A603_Flash_System",permalink:"/reComputer_A603_Flash_System",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer/Other_Carrier_Boards/A603_Flash_JetPack.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1681862400,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{description:"A603 Carrier Board",title:"A603 Carrier Board",keywords:["Edge","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reComputer_A603_Flash_System",last_update:{date:"04/19/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"reComputer J30 Series, J40 Series | J401",permalink:"/reComputer_J4012_Flash_Jetpack"},next:{title:"A607 Carrier Board",permalink:"/reComputer_A607_Flash_System"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:2},{value:"Download the peripheral drivers",id:"download-the-peripheral-drivers",level:2},{value:"Flash to Jetson",id:"flash-to-jetson",level:2},{value:"Jetson Orin NX",id:"jetson-orin-nx",level:3},{value:"NVMe SSD",id:"nvme-ssd",level:4},{value:"USB Flash drive",id:"usb-flash-drive",level:4},{value:"Jetson Orin Nano",id:"jetson-orin-nano",level:3},{value:"NVMe SSD",id:"nvme-ssd-1",level:4},{value:"USB Flash drive",id:"usb-flash-drive-1",level:4},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flash-jetpack-os-to-a603-carrier-board-nvidia-jetson-orin-nxnano-supported"},"Flash JetPack OS to A603 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/A603/1.jpg"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("p",null,"In this wiki, we will show you how to flash ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack"},"Jetpack")," to an NVMe SSD and a USB Flash drive connected to the A603 Carrier Board which supports both NVIDIA Jetson Orin NX module and NVIDIA Jetson Orin Nano module"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu Host PC (native or VM using VMware Workstation Player)"),(0,o.kt)("li",{parentName:"ul"},"A603 Carrier Board with Jetson Orin NX or Jetson Orin Nano module"),(0,o.kt)("li",{parentName:"ul"},"USB Type-C data transmission cable")),(0,o.kt)("h2",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,o.kt)("p",null,"Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Connect a USB cable between the micro-USB connector on the board and the Linux host PC"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A603/2.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Connect a jumper wire between pin3 and pin4 of the 14-pin header"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:250,src:"https://files.seeedstudio.com/wiki/A603/3.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Connect power adapter to the DC JACK on the board to power on the board"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:250,src:"https://files.seeedstudio.com/wiki/A603/4.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," On the Linux host PC, open a Terminal window and enter the command ",(0,o.kt)("inlineCode",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Orin NX 16GB: ",(0,o.kt)("strong",{parentName:"li"},"0955:7323 NVidia Corp")),(0,o.kt)("li",{parentName:"ul"},"For Orin NX 8GB: ",(0,o.kt)("strong",{parentName:"li"},"0955:7423 NVidia Corp")),(0,o.kt)("li",{parentName:"ul"},"For Orin Nano 8GB: ",(0,o.kt)("strong",{parentName:"li"},"0955:7523 NVidia Corp")),(0,o.kt)("li",{parentName:"ul"},"For Orin Nano 4GB: ",(0,o.kt)("strong",{parentName:"li"},"0955:7623 NVidia Corp"))),(0,o.kt)("p",null,"The below image is for Orin NX 16GB"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"{700}",src:"https://files.seeedstudio.com/wiki/A607/4.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5.")," Remove the jumper wire"),(0,o.kt)("h2",{id:"download-the-peripheral-drivers"},"Download the peripheral drivers"),(0,o.kt)("p",null,"First of all, you need to install the peripheral drivers for this board. These are needed for some hardware peripherals to function on the board. Click the below links to download the drivers according to the Jetson module"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Jetson Module"),(0,o.kt)("th",null,"JetPack Version"),(0,o.kt)("th",null,"L4T Version"),(0,o.kt)("th",null,"Download Link"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{rowSpan:2},"Jetson Orin NX 8GB/ 16GB"),(0,o.kt)("td",null,"5.1"),(0,o.kt)("td",null,"35.2.1"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"5.1.1"),(0,o.kt)("td",null,"35.3.1"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Jetson Orin Nano 4GB/ 8GB"),(0,o.kt)("td",null,"5.1.1"),(0,o.kt)("td",null,"35.3.1"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-Nano/A603-Orin-Nano-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Currently we provide the above drivers. We will keep updating the drivers in the future with the release of new JetPack versions."),(0,o.kt)("h2",{id:"flash-to-jetson"},"Flash to Jetson"),(0,o.kt)("p",null,"!!!note\nBefore moving onto flashing, it should be noted that Jetson Orin NX module only supports JetPack 5.1 and above, while Jetson Orin Nano module only supports JetPack 5.1.1 and above."),(0,o.kt)("h3",{id:"jetson-orin-nx"},"Jetson Orin NX"),(0,o.kt)("p",null,"Here we will use NVIDIA L4T ",(0,o.kt)("strong",{parentName:"p"},"35.3.1")," to install ",(0,o.kt)("strong",{parentName:"p"},"Jetpack 5.1.1")," on the A603 Carrier Board with Jetson Orin NX module"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/A603/6.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Extract ",(0,o.kt)("strong",{parentName:"p"},"Jetson_Linux_R35.3.1_aarch64.tbz2")," and ",(0,o.kt)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.3.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Extract ",(0,o.kt)("strong",{parentName:"p"},"A603-Orin-NX-JP5.1.1.zip"),". Here we additionally install the ",(0,o.kt)("strong",{parentName:"p"},"unzip")," package which is needed to decompress the .zip file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\nsudo apt install unzip \nunzip A603-Orin-NX-JP5.1.1.zip\n")),(0,o.kt)("p",null,"Here it will ask whether to replace the files. Type ",(0,o.kt)("strong",{parentName:"p"},"A")," and press ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," to replace the necessary files"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/A603/7.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:")," Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license\n")),(0,o.kt)("p",null,'For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6:")," Flash the system to either NVMe SSD or USB Flash drive"),(0,o.kt)("h4",{id:"nvme-ssd"},"NVMe SSD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 p3509-a02+p3767-0000 internal\n')),(0,o.kt)("h4",{id:"usb-flash-drive"},"USB Flash drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 p3509-a02+p3767-0000 internal\n')),(0,o.kt)("p",null,"You will see the following output if the flashing process is successful"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A603/10.jpg"})),(0,o.kt)("h3",{id:"jetson-orin-nano"},"Jetson Orin Nano"),(0,o.kt)("p",null,"Here we will use NVIDIA L4T ",(0,o.kt)("strong",{parentName:"p"},"35.3.1")," to install ",(0,o.kt)("strong",{parentName:"p"},"Jetpack 5.1.1")," on the A603 Carrier Board with Jetson Orin Nano module"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/A603/8.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Extract ",(0,o.kt)("strong",{parentName:"p"},"Jetson_Linux_R35.3.1_aarch64.tbz2")," and ",(0,o.kt)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.3.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Extract ",(0,o.kt)("strong",{parentName:"p"},"A603-Orin-NX-JP5.1.1.zip"),". Here we additionally install the ",(0,o.kt)("strong",{parentName:"p"},"unzip")," package which is needed to decompress the .zip file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\nsudo apt install unzip \nunzip A603-Orin-NX-JP5.1.1.zip\n")),(0,o.kt)("p",null,"Here it will ask whether to replace the files. Type ",(0,o.kt)("strong",{parentName:"p"},"A")," and press ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," to replace the necessary files"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/A603/9.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:")," Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license\n")),(0,o.kt)("p",null,'For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6:")," Flash the system to either NVMe SSD or USB Flash drive"),(0,o.kt)("h4",{id:"nvme-ssd-1"},"NVMe SSD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 jetson-orin-nano-devkit internal\n')),(0,o.kt)("h4",{id:"usb-flash-drive-1"},"USB Flash drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 jetson-orin-nano-devkit internal\n')),(0,o.kt)("p",null,"You will see the following output if the flashing process is successful"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A603/10.jpg"})),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);