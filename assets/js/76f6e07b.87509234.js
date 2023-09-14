"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78417],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>h});var r=i(67294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,r,a=function(t,e){if(null==t)return{};var i,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)i=n[r],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)i=n[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},u=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var i=t.components,a=t.mdxType,n=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(i),d=a,h=c["".concat(o,".").concat(d)]||c[d]||k[d]||n;return i?r.createElement(h,l(l({ref:e},u),{},{components:i})):r.createElement(h,l({ref:e},u))}));function h(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=i.length,l=new Array(n);l[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:a,l[1]=s;for(var p=2;p<n;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},16521:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=i(87462),a=(i(67294),i(3905));const n={description:"ODYSSEY - X86J4105",title:"TrueNAS Installation",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86-TrueNAS",last_update:{date:"01/03/2023",author:"w0x7ce"}},l=void 0,s={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86-TrueNAS",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86-TrueNAS",title:"TrueNAS Installation",description:"ODYSSEY - X86J4105",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86-TrueNAS.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86-TrueNAS",permalink:"/ODYSSEY-X86-TrueNAS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86-TrueNAS.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J4105",title:"TrueNAS Installation",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86-TrueNAS",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"pfSense Installation",permalink:"/ODYSSEY-X86J4105-pfSense"},next:{title:"Android-x86 Installation",permalink:"/ODYSSEY-X86J4105-Installing-Android"}},o={},p=[{value:"What is TrueNAS?",id:"what-is-truenas",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Flash TrueNAS image to a USB flash drive",id:"flash-truenas-image-to-a-usb-flash-drive",level:3},{value:"Boot TrueNAS from flash drive and install on external drive",id:"boot-truenas-from-flash-drive-and-install-on-external-drive",level:3},{value:"Set up TrueNAS",id:"set-up-truenas",level:3},{value:"Access GUI",id:"access-gui",level:4},{value:"Set up storage pool",id:"set-up-storage-pool",level:4},{value:"Create a user account",id:"create-a-user-account",level:4},{value:"Set up SMB share and access from PC",id:"set-up-smb-share-and-access-from-pc",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function c(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/1.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",null,"This guide explains how to turn your ODYSSEY-X86 into a Network Attached Storage (NAS) by installing TruneNAS. Let's get started!"),(0,a.kt)("h2",{id:"what-is-truenas"},"What is TrueNAS?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.truenas.com"},"TrueNAS")," is a free and open-source network-attached storage (NAS) operating system deveoped by iXsystems. It is based on FreeBSD and Linux and uses the OpenZFS file system. It can run on almost all X86-based hardware."),(0,a.kt)("p",null,"TrueNAS has several editions and includes TrueNAS CORE (previously known as FreeNAS), TrueNAS Enterprise (commercial edition), and TrueNAS SCALE (Linux edition). You can visit ",(0,a.kt)("a",{parentName:"p",href:"https://www.truenas.com/compare-editions"},"this link")," to learn more about the differences between them."),(0,a.kt)("p",null,"TrueNAS supports clients running multiple operating systems such as Windows, macOS and Linux. It also ofers various virtualization hosts such as XenServer and VMware using the SMB, AFP, NFS, iSCSI, SSH, rsync and FTP/TFTP protocols. It also includes advanced features such as full-disk encryption and a plug-in architecture for third-party software."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/2.png",alt:"pir",width:400,height:"auto"})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html"},"ODYSSEY-X86"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"USB Flash Drive (>1GB)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ethernet cable and a router with one free port")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"External storage media (If you use ODYSSEY-X86 with built-in eMMC, you can use that as well)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NVMe SSD or"),(0,a.kt)("li",{parentName:"ul"},"SATA SSD or"),(0,a.kt)("li",{parentName:"ul"},"SATA HDD or"),(0,a.kt)("li",{parentName:"ul"},"Micro-SD Card or"),(0,a.kt)("li",{parentName:"ul"},"USB Flash Drive (>1GB)")))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Now let's go through the process of installing TrueNAS on ODYSSEY-X86. Here we will use TrueNAS Core as an example to walkthrough the steps of installation."),(0,a.kt)("h3",{id:"flash-truenas-image-to-a-usb-flash-drive"},"Flash TrueNAS image to a USB flash drive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Visit ",(0,a.kt)("a",{parentName:"li",href:"https://www.truenas.com/download-truenas-core"},"this link")," to open the download page of TrueNAS Core")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you want to download TruneNAS scale, you can visit ",(0,a.kt)("a",{parentName:"p",href:"https://www.truenas.com/download-truenas-scale"},"this link")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," You can either subscribe to the TrueNAS newsletter or choose to skip that step")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/3.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Download the ",(0,a.kt)("strong",{parentName:"li"},"Stable")," version")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/4.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Download and install ",(0,a.kt)("strong",{parentName:"li"},"BalenaEtcher")," according to your OS by visiting ",(0,a.kt)("a",{parentName:"li",href:"https://www.balena.io/etcher"},"this link")," and open it")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/3.jpg",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Connect a USB flash drive to your PC, click ",(0,a.kt)("strong",{parentName:"li"},"Flash from file"),", select the downloaded file from before, click ",(0,a.kt)("strong",{parentName:"li"},"Select target"),", choose the connected USB flash drive and click ",(0,a.kt)("strong",{parentName:"li"},"Flash"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/5.jpg",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("h3",{id:"boot-truenas-from-flash-drive-and-install-on-external-drive"},"Boot TrueNAS from flash drive and install on external drive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect the USB flash drive that we flashed the TrueNAS image before to one the of the USB ports on the ODYSSEY-X86")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Attach an external storage drive to install TrueNAS. ODYSSEY-X86 has a number of storage options such as:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NVMe SSD"),(0,a.kt)("li",{parentName:"ul"},"SATA SSD"),(0,a.kt)("li",{parentName:"ul"},"SATA HDD"),(0,a.kt)("li",{parentName:"ul"},"Micro-SD Card"),(0,a.kt)("li",{parentName:"ul"},"USB Flash Drive (>1GB)")))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png",alt:"pir",width:650,height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Here we recommend you to choose an M.2 SSD to install TrueNAS for reliability and choose the remaining M.2 and SATA port to connect other drives for file storage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Connect one end of an Ethernet cable to one of the Ethernet ports on the ODYSSEY-X86 and the other end of the cable to a router")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Turn on ODYSSEY-X86 and continuosly press ",(0,a.kt)("strong",{parentName:"p"},"DELETE")," key to enter BIOS"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/5.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Go to ",(0,a.kt)("strong",{parentName:"li"},"Boot")," tab, select ",(0,a.kt)("strong",{parentName:"li"},"Boot Option #1")," and select ",(0,a.kt)("strong",{parentName:"li"},"UEFI: USB, Partition 2"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/6.jpg",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Go to ",(0,a.kt)("strong",{parentName:"li"},"Save & Exit")," tab, select ",(0,a.kt)("strong",{parentName:"li"},"Save Changes and Reset")," and select ",(0,a.kt)("strong",{parentName:"li"},"Yes")," for the pop up window")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OPNsense/8.jpg",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Once ODYSSEY-X86 boots into TrueNAS successfully, press ",(0,a.kt)("strong",{parentName:"li"},"ENTER")," to proceed with the ",(0,a.kt)("strong",{parentName:"li"},"Install/Upgrade")," option which is highlighted by default")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/7.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8.")," Choose your desired drive to install TrueNAS by pressing ",(0,a.kt)("strong",{parentName:"li"},"SPACE")," after navigating using ",(0,a.kt)("strong",{parentName:"li"},"arrow keys"),". Press ",(0,a.kt)("strong",{parentName:"li"},"ENTER")," to go to next step")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/8.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9.")," Press ",(0,a.kt)("strong",{parentName:"li"},"ENTER")," again to proceed")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/9.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 10.")," Now it will ask you to change the ",(0,a.kt)("strong",{parentName:"li"},"root password"),". This is ",(0,a.kt)("strong",{parentName:"li"},"recommended"),". Enter a password and press ",(0,a.kt)("strong",{parentName:"li"},"ENTER"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/10.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 11.")," Choose to ",(0,a.kt)("strong",{parentName:"li"},"boot via UEFI")," because ODYSSEY-X86 supports UEFI booting")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/11.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 12.")," Choose to ",(0,a.kt)("strong",{parentName:"li"},"Create swap")," for better performance")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/12.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 13.")," Once TrueNAS finishes installing, press ",(0,a.kt)("strong",{parentName:"li"},"ENTER"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/13.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 14.")," Select ",(0,a.kt)("strong",{parentName:"li"},"Reboot System")," and press ",(0,a.kt)("strong",{parentName:"li"},"ENTER")," again")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/14.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 15.")," When the system starts booting again, remove the USB Flash Drive, enter BIOS, select the connected external drive as the boot device and boot again")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/15.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",null,"Now ODYSSEY-X86 will boot from the external drive into TrueNAS and you will see the following output if it boots successfully"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/16.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("h3",{id:"set-up-truenas"},"Set up TrueNAS"),(0,a.kt)("p",null,"Now we will set up the TrueNAS software"),(0,a.kt)("h4",{id:"access-gui"},"Access GUI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Enter the IP address shown on a browser  ")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/17.jpg",alt:"pir",width:500,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Enter username as ",(0,a.kt)("strong",{parentName:"li"},"root")," and the password you set before to ",(0,a.kt)("strong",{parentName:"li"},"LOG IN"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/18.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",null,"Finally you will be able brought to the TrueNAS dashboard GUI"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/19.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",null,"Here you can configure a ton of settings and explore a ton of features. You can learn more by visiting ",(0,a.kt)("a",{parentName:"p",href:"https://www.truenas.com/docs"},"TrueNAS official documentation")),(0,a.kt)("h4",{id:"set-up-storage-pool"},"Set up storage pool"),(0,a.kt)("p",null,"For this section of this wiki, we will show you how to set up a storage pool with the connected HDD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," First we need to create a storage pool. Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Storage > Pools")," and click ",(0,a.kt)("strong",{parentName:"li"},"ADD"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/20.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Click ",(0,a.kt)("strong",{parentName:"li"},"CREATE POOL"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/21.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Type a ",(0,a.kt)("strong",{parentName:"li"},"name")," for the pool")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/22.png",alt:"pir",width:550,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Select all the disks available and click the ",(0,a.kt)("strong",{parentName:"li"},"right pointing arrow")," to add the disks. Here we have only connected one HDD. However, you can connect multiple HDDs and all of them will be shown here.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/23.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/24.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",null,"Since we have connected only one HDD, it will only allow for ",(0,a.kt)("strong",{parentName:"p"},"Stripe")," configuration. However, if multiple disks are connected, it will have the option of ",(0,a.kt)("strong",{parentName:"p"},"RAID")," which is focused on data redundancy."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/25.png",alt:"pir",width:500,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Ignore the warnings about ",(0,a.kt)("strong",{parentName:"li"},"data loss"),"(because of one drive) by ticking ",(0,a.kt)("strong",{parentName:"li"},"Force"),", then ",(0,a.kt)("strong",{parentName:"li"},"Confirm")," and finally click ",(0,a.kt)("strong",{parentName:"li"},"CONTINUE"),". If you have multiple drives connected, you will not have this warning.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/26.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Click ",(0,a.kt)("strong",{parentName:"li"},"CREATE"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/27.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Tick ",(0,a.kt)("strong",{parentName:"li"},"Confirm")," and then click ",(0,a.kt)("strong",{parentName:"li"},"CREATE POOL"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/28.jpg",alt:"pir",width:350,height:"auto"})),(0,a.kt)("p",null,"Once the pool is created, you will see the following output"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/29.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("h4",{id:"create-a-user-account"},"Create a user account"),(0,a.kt)("p",null,"Now we will create a new user account and attach the user account to a dataset"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Accounts > Users")," and click ",(0,a.kt)("strong",{parentName:"li"},"ADD"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/30.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Type ",(0,a.kt)("strong",{parentName:"li"},"Full Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Username")," and ",(0,a.kt)("strong",{parentName:"li"},"Password"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/31.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Tick ",(0,a.kt)("strong",{parentName:"li"},"Microsoft Account")," and click ",(0,a.kt)("strong",{parentName:"li"},"SUBMIT"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/32.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Navigate to ",(0,a.kt)("strong",{parentName:"li"},"Pools")," again, click the ",(0,a.kt)("strong",{parentName:"li"},"3-dots")," next to the pool we created before and click ",(0,a.kt)("strong",{parentName:"li"},"Add Dataset"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/33.jpg",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Give a name for the Dataset and click ",(0,a.kt)("strong",{parentName:"li"},"SUBMIT"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/34.png",alt:"pir",width:450,height:"auto"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/35.png",alt:"pir",width:450,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Click the ",(0,a.kt)("strong",{parentName:"li"},"3-dots")," next to the newly created dataset and select ",(0,a.kt)("strong",{parentName:"li"},"Edit Permissions"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/36.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Select the previosly created username as ",(0,a.kt)("strong",{parentName:"li"},"User")," and ",(0,a.kt)("strong",{parentName:"li"},"Group")," from the drop-down menus, tick ",(0,a.kt)("strong",{parentName:"li"},"Apply User")," and ",(0,a.kt)("strong",{parentName:"li"},"Apply Group")," and finally click ",(0,a.kt)("strong",{parentName:"li"},"SAVE"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/37.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("h4",{id:"set-up-smb-share-and-access-from-pc"},"Set up SMB share and access from PC"),(0,a.kt)("p",null,"Next we will show you how to make this storage space accessible from a PC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Navigate to `Sharing > Windows Shares (SMB)",(0,a.kt)("strong",{parentName:"li"},"and click"),"ADD**")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/38.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Select the dataset we created before at last and click ",(0,a.kt)("strong",{parentName:"li"},"SUBMIT"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/39.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Click ",(0,a.kt)("strong",{parentName:"li"},"CONFIGURE NOW")," for the pop up window")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/40.png",alt:"pir",width:350,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Select ",(0,a.kt)("strong",{parentName:"li"},"RESTRICTED")," and click ",(0,a.kt)("strong",{parentName:"li"},"CONTINUE"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/41.png",alt:"pir",width:350,height:"auto"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/42.png",alt:"pir",width:350,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Click ",(0,a.kt)("strong",{parentName:"li"},"SAVE"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/43.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",null,"Now we have successfully set up the SMB share"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Go to ",(0,a.kt)("strong",{parentName:"li"},"File Explorer")," on a PC, and select ",(0,a.kt)("strong",{parentName:"li"},"Map network drive")," from the ",(0,a.kt)("strong",{parentName:"li"},"3-dot menu"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/44.jpg",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Next to ",(0,a.kt)("strong",{parentName:"li"},"Folder"),", type the following")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\\\\<IP_address_of_x86>\\<dataset_name>\n")),(0,a.kt)("p",null,"Then tick both the boxes below that and click ",(0,a.kt)("strong",{parentName:"p"},"Finish")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/45.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8.")," Enter the username and password you specified when you created a new account before, tick the box ",(0,a.kt)("strong",{parentName:"li"},"Remember my credentials")," and click ",(0,a.kt)("strong",{parentName:"li"},"OK"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/46.png",alt:"pir",width:450,height:"auto"})),(0,a.kt)("p",null,"Now you will be able access this shared drive right from your PC. You can start copying files directly from your PC to this drive"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/TrueNAS/47.png",alt:"pir",width:400,height:"auto"})),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"li",href:"https://www.truenas.com/docs"},"TrueNAS official documentation"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);