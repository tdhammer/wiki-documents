"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88102],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},86539:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=o(87462),a=(o(67294),o(3905));const r={description:"ODYSSEY - X86J4105",title:"Frigate",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Frigate",last_update:{date:"01/03/2023",author:"w0x7ce"}},i="FRIGATE NVR Project with Seeed Odyssey",s={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ODYSSEY-X86J4105-Frigate",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ODYSSEY-X86J4105-Frigate",title:"Frigate",description:"ODYSSEY - X86J4105",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ODYSSEY-X86J4105-Frigate.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version",slug:"/ODYSSEY-X86J4105-Frigate",permalink:"/ODYSSEY-X86J4105-Frigate",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ODYSSEY-X86J4105-Frigate.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J4105",title:"Frigate",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Frigate",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Intel Neural Compute Stick 2",permalink:"/ODYSSEY-X86J4105-NCS2"},next:{title:"Original OS",permalink:"/ODYSSEY-X86J4105-Installing-OS"}},l={},d=[{value:"What is Frigate NVR?",id:"what-is-frigate-nvr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frigate-nvr-project-with-seeed-odyssey"},"FRIGATE NVR Project with Seeed Odyssey"),(0,a.kt)("h2",{id:"what-is-frigate-nvr"},"What is Frigate NVR?"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/ui.jpeg"})),(0,a.kt)("p",null,"*frigate show case image from ",(0,a.kt)("a",{parentName:"p",href:"https://frigate.video/"},"frigate official site")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Frigate is an open source NVR built around real-time AI object detection. All processing is performed locally on your own hardware, and your camera feeds never leave your home." -- ',(0,a.kt)("a",{parentName:"p",href:"https://frigate.video/"},"Frigate NVR"))),(0,a.kt)("p",null,"Frigate NVR is one of the most popular network video recorder project which adds local processed AI function to your security cameras, therefore not only you won't be charged with ridiculously amount of money for the cloud inference server, but also your valuable private camera stream date won't need to exposed to the wild internet. Frigate can process 100+ object detections per second with a single Google Coral TPU on board, you could customize the detect zones and masks to met your use case, it can also be integrated into Home Assistant and other automation platforms with minimum amount of setup effort to provide more security features and integrate Edge AI solutions to your valuable property."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 x ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products"},"Odyssey Blue: Quad Core Celeron J4125 Mini PC with 128GB external SSD")),(0,a.kt)("li",{parentName:"ul"},"1 x ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products"},"Coral USB Accelerator")," (optional)"),(0,a.kt)("li",{parentName:"ul"},"RTSP camera(s) stream"),(0,a.kt)("li",{parentName:"ul"},"Keyboard and HDMI display")),(0,a.kt)("p",null,"Make sure ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products"},"Odyssey Blue")," is connected to the same network or have access to your RTSP web camera. "),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"In this guide, we will show you how to config Frigate docker environment to preform local AI detection on the RTSP camera stream on Seeed Studio ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products"},"Odyssey Blue")," with ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products"},"Coral USB Accelerator"),", for home assistant add-on setup, please stay turned!!"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"STEP 1:")," Make sure you have installed Debian 11 on ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products"},"Odyssey Blue")),(0,a.kt)("p",null,"Please go a head download ",(0,a.kt)("a",{parentName:"p",href:"https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/debian-11.4.0-amd64-DVD-1.iso"},"Debian 11")," OS image and follow ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-OS/"},"this")," setup guide to install Debian 11 Operating System on ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products"},"Odyssey Blue"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 2:")," Make sure you have installed Docker Engine and Docker Compose on Debian 11"),(0,a.kt)("p",null,"Please follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/debian/#install-using-the-repository"},"Install Docker Engine on Debian")," guide to install Docker Engine and Docker Compose."),(0,a.kt)("p",null,"To check if you have successfully installed Docker:"),(0,a.kt)("p",null,"Please open the terminal app and type in following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker -v\n")),(0,a.kt)("p",null,"you should see following output printed in the terminal:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/check_docker_version.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 3:")," Create frigate Docker file"),(0,a.kt)("p",null,"Type in following command in terminal app to create frigate docker file with vi text-editor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"1 mkdir ~/Documents/frigate\n2 cd ~/Documents/frigate\n3 vi frigate.yml\n")),(0,a.kt)("p",null,"Insert following lines in the frigate.yml file for frigate docker-compose setup, and replace the necessary part according to your enviroment setup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'version: "3.9"\nservices:\n  frigate:\n    container_name: frigate\n    privileged: true # this may not be necessary for all setups\n    restart: unless-stopped\n    image: blakeblackshear/frigate:stable-amd64\n    shm_size: "64mb" # update for your cameras based on calculation above\n    devices:\n      - /dev/bus/usb:/dev/bus/usb # passes the USB Coral, needs to be modified for other versions\n      - /dev/apex_0:/dev/apex_0 # passes a PCIe Coral, follow driver instructions here https://coral.ai/docs/m2/get-started/#2a-on-linux\n      - /dev/dri/renderD128 # for intel hwaccel, needs to be updated for your hardware\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - /path/to/your/config.yml:/config/config.yml:ro\n      - /path/to/your/storage:/media/frigate\n      - type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear\n        target: /tmp/cache\n        tmpfs:\n          size: 1000000000\n    ports:\n      - "5000:5000"\n      - "1935:1935" # RTMP feeds\n    environment:\n      FRIGATE_RTSP_PASSWORD: "password"\n')),(0,a.kt)("p",null,"For more details on the frigate docker-compose yaml setup options, please to go to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.frigate.video/installation#docker"},"frigate documentation page")),(0,a.kt)("p",null,"In my case, my frigate.yml looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'version: "3.7"\nservices:\n  frigate:\n    container_name: frigate\n    privileged: true # this may not be necessary for all setups\n    restart: unless-stopped\n    image: blakeblackshear/frigate:stable-amd64\n    shm_size: "64mb" # update for your cameras based on calculation above\n    devices:\n      - /dev/bus/usb:/dev/bus/usb # passes the USB Coral, needs to be modified for other versions\n      - /dev/apex_0:/dev/apex_0 # passes a PCIe Coral, follow driver instructions here https://coral.ai/docs/m2/get-started/#2a-on-linux\n      - /dev/dri/renderD128 # for intel hwaccel, needs to be updated for your hardware\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - /home/seeed/Documents/frigate/config/config.yml:/config/config.yml:ro\n      - /home/seeed/Documents/frigate:/media/frigate\n      - type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear\n        target: /tmp/cache\n        tmpfs:\n          size: 1000000000\n    ports:\n      - "5000:5000"\n      - "1935:1935" # RTMP feeds\n    environment:\n      FRIGATE_RTSP_PASSWORD: "password"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 4:")," Create frigate config file"),(0,a.kt)("p",null,"Type following command in terminal app to create a config folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"1 cd ~/Documents/frigate\n2 mkdir config/\n3 cd config/\n")),(0,a.kt)("p",null,"Type following command to create frigate config file with vi text-editor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"1 vi config.yml\n")),(0,a.kt)("p",null,"Then copy following lines to for the minimum configuration setup to get frigate running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mqtt:\n  host: mqtt.server.com #Please replace with a valid mqtt broker\ncameras:\n  back:\n    ffmpeg:\n      inputs:\n        - path: rtsp://viewer:{FRIGATE_RTSP_PASSWORD}@10.0.10.10:554/cam/realmonitor?channel=1&subtype=2 #replace with your RTSP camera url\n          roles:\n            - detect\n            - rtmp\n    detect:\n      width: 1280\n      height: 720\n")),(0,a.kt)("p",null,"Please to go to the frigate documentation page ",(0,a.kt)("a",{parentName:"p",href:"https://docs.frigate.video/configuration/index"},"configuration")," section for all the configuration options"),(0,a.kt)("p",null,"In my case, beside the following list of configs that I have customized according to my setup, all the rest config settings are kept as default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MQTT: broker.hivemq.com"),(0,a.kt)("li",{parentName:"ul"},"Detector: ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/coral-usb-accelerator-p-2899.html?queryID=8e8780bcccd9a9418d210fa8827db40f&objectID=2899&indexName=bazaar_retailer_products"},"Coral USB Accelerator")),(0,a.kt)("li",{parentName:"ul"},"Cameras: rtsp://192.168.8.34:8080/unicast"),(0,a.kt)("li",{parentName:"ul"},"Tracking object: person, cup (Note: the list of object labels can be found at frigate documentation page ",(0,a.kt)("a",{parentName:"li",href:"https://docs.frigate.video/configuration/objects"},"Objects")," section)"),(0,a.kt)("li",{parentName:"ul"},"Record: when Person or Cup gets detected the during of the recording is 2s before detection and 2s after detection.")),(0,a.kt)("p",null,"So my config.yml looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mqtt:\n  host: broker.hivemq.com # using HiveMQ MQTT Broker for testing purpose\ndetectors:\n  # Required: name of the detector\n  coral:\n    # Required: type of the detector\n    # Valid values are 'edgetpu' (requires device property below) and 'cpu'.\n    type: edgetpu\n    # Optional: device name as defined here: https://coral.ai/docs/edgetpu/multiple-edgetpu/#using-the-tensorflow-lite-python-api\n    device: usb\n# Optional: model modifications\nmodel:\n  # Optional: path to the model (default: automatic based on detector)\n  path: /edgetpu_model.tflite\n  # Optional: path to the labelmap (default: shown below)\n  labelmap_path: /labelmap.txt\n  # Required: Object detection model input width (default: shown below)\n  width: 320\n  # Required: Object detection model input height (default: shown below)\n  height: 320\ncameras:\n  back:\n    ffmpeg:\n      inputs:\n        - path: rtsp://192.168.8.34:8080/unicast\n          roles:\n            - detect\n            - rtmp\n# Optional: Detect configuration\n# NOTE: Can be overridden at the camera level\ndetect:\n  # Optional: width of the frame for the input with the detect role (default: shown below)\n  width: 800\n  # Optional: height of the frame for the input with the detect role (default: shown below)\n  height: 600\n  # Optional: desired fps for your camera for the input with the detect role (default: shown below)\n  # NOTE: Recommended value of 5. Ideally, try and reduce your FPS on the camera.\n  fps: 8\n  # Optional: enables detection for the camera (default: True)\n  # This value can be set via MQTT and will be updated in startup based on retained value\n  enabled: True\n  # Optional: Number of frames without a detection before frigate considers an object to be gone. (default: 5x the frame rate)\n  max_disappeared: 25\n  # Optional: Configuration for stationary object tracking\n  stationary:\n    # Optional: Frequency for confirming stationary objects (default: shown below)\n    # When set to 0, object detection will not confirm stationary objects until movement is detected.\n    # If set to 10, object detection will run to confirm the object still exists on every 10th frame.\n    interval: 0\n    # Optional: Number of frames without a position change for an object to be considered stationary (default: 10x the frame rate or 10s)\n    threshold: 50\n    # Optional: Define a maximum number of frames for tracking a stationary object (default: not set, track forever)\n    # This can help with false positives for objects that should only be stationary for a limited amount of time.\n    # It can also be used to disable stationary object tracking. For example, you may want to set a value for person, but leave\n    # car at the default.\n    # WARNING: Setting these values overrides default behavior and disables stationary object tracking.\n    #          There are very few situations where you would want it disabled. It is NOT recommended to\n    #          copy these values from the example config into your config unless you know they are needed.\n    max_frames:\n      # Optional: Default for all object types (default: not set, track forever)\n      default: 3000\n      # Optional: Object specific values\n      objects:\n        person: 1000\n# Optional: Object configuration\n# NOTE: Can be overridden at the camera level\nobjects:\n  # Optional: list of objects to track from labelmap.txt (default: shown below)\n  track:\n    - person\n    - cup\n# Optional: Record configuration\n# NOTE: Can be overridden at the camera level\nrecord:\n  # Optional: Enable recording (default: shown below)\n  # WARNING: If recording is disabled in the config, turning it on via\n  #          the UI or MQTT later will have no effect.\n  # WARNING: Frigate does not currently support limiting recordings based\n  #          on available disk space automatically. If using recordings,\n  #          you must specify retention settings for a number of days that\n  #          will fit within the available disk space of your drive or Frigate\n  #          will crash.\n  enabled: True\n  # Optional: Number of minutes to wait between cleanup runs (default: shown below)\n  # This can be used to reduce the frequency of deleting recording segments from disk if you want to minimize i/o\n  expire_interval: 60\n  # Optional: Retention settings for recording\n  retain:\n    # Optional: Number of days to retain recordings regardless of events (default: shown below)\n    # NOTE: This should be set to 0 and retention should be defined in events section below\n    #       if you only want to retain recordings of events.\n    days: 0\n    # Optional: Mode for retention. Available options are: all, motion, and active_objects\n    #   all - save all recording segments regardless of activity\n    #   motion - save all recordings segments with any detected motion\n    #   active_objects - save all recording segments with active/moving objects\n    # NOTE: this mode only applies when the days setting above is greater than 0\n    mode: all\n  # Optional: Event recording settings\n  events:\n    # Optional: Maximum length of time to retain video during long events. (default: shown below)\n    # NOTE: If an object is being tracked for longer than this amount of time, the retained recordings\n    #       will be the last x seconds of the event unless retain->days under record is > 0.\n    max_seconds: 300\n    # Optional: Number of seconds before the event to include (default: shown below)\n    pre_capture: 2\n    # Optional: Number of seconds after the event to include (default: shown below)\n    post_capture: 2\n    # Optional: Objects to save recordings for. (default: all tracked objects)\n    objects:\n      - person\n      - cup\n    # Optional: Restrict recordings to objects that entered any of the listed zones (default: no required zones)\n    required_zones: []\n    # Optional: Retention settings for recordings of events\n    retain:\n      # Required: Default retention days (default: shown below)\n      default: 10\n      # Optional: Mode for retention. (default: shown below)\n      #   all - save all recording segments for events regardless of activity\n      #   motion - save all recordings segments for events with any detected motion\n      #   active_objects - save all recording segments for event with active/moving objects\n      #\n      # NOTE: If the retain mode for the camera is more restrictive than the mode configured\n      #       here, the segments will already be gone by the time this mode is applied.\n      #       For example, if the camera retain mode is \"motion\", the segments without motion are\n      #       never stored, so setting the mode to \"all\" here won't bring them back.\n      mode: motion\n      # Optional: Per object retention days\n      objects:\n        person: 2\n        cup: 3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 5:")," Start frigate docker container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"1 cd ~/Documents/frigate\n2 sudo docker-compose -f frigate.yml up\n")),(0,a.kt)("p",null,"To trouble shooting, you could spot errors by print out the docker log:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker logs frigate\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 6:")," View the frigate web front-end"),(0,a.kt)("p",null,"Find the ip address of your ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products"},"Odyssey Blue")," server by type in following command in terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"1 ip a\n")),(0,a.kt)("p",null,"you should see similar output printed in the the terminal, you can find the valid ip address according to your connection setup:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/ip_address.png"})),(0,a.kt)("p",null,"once you have locate your ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products"},"Odyssey Blue")," ip address, please open your favorite web browser and type in the ",(0,a.kt)("strong",{parentName:"p"},"ip-address:5000")," in the address bar. In my case, the ip address is 192.168.8.57, therefore the url I put into the web browser address bar is 192.168.8.57:5000, you should land into the similar home page as the image below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/home_page.png"})),(0,a.kt)("p",null,"To observe the live detection please click on the video feed and click Debug on the top right corner of the main view, then click SHOW OPTIONS button under the live feed, then check the Bonding Box or any other options you like to see on the live feed."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/live_detection.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Have fun to explore more options on Frigate with ",(0,a.kt)("a",{parentName:"strong",href:"https://www.seeedstudio.com/odyssey-blue-j4125-128gb-p-4921.html?queryID=e375797339bbfbdd78f5c9f94af936ee&objectID=4921&indexName=bazaar_retailer_products"},"Odyssey Blue"),", feel free the checkout other SBC option such as, the ",(0,a.kt)("a",{parentName:"strong",href:"https://www.seeedstudio.com/catalogsearch/result/?q=recomputer"},"reComputer")," series to add Edge AI to your applications.")),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);