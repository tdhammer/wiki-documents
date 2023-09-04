"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Grove - Wio-E5 Helium Demo",nointro:null,keywords:["docs","docusaurus"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_Wio_E5_Helium_Demo",last_update:{date:"08/30/2023",author:"Salman"}},a=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors_Network/LoRa/demo/Grove_Wio_E5_Helium_Demo",id:"Sensor/Grove/Grove_Sensors_Network/LoRa/demo/Grove_Wio_E5_Helium_Demo",title:"Grove - Wio-E5 Helium Demo",description:"Getting Started",source:"@site/docs/Sensor/Grove/Grove_Sensors_Network/LoRa/demo/Grove_Wio_E5_Helium_Demo.md",sourceDirName:"Sensor/Grove/Grove_Sensors_Network/LoRa/demo",slug:"/Grove_Wio_E5_Helium_Demo",permalink:"/Grove_Wio_E5_Helium_Demo",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors_Network/LoRa/demo/Grove_Wio_E5_Helium_Demo.md",tags:[],version:"current",lastUpdatedBy:"Salman",lastUpdatedAt:1693353600,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{title:"Grove - Wio-E5 Helium Demo",nointro:null,keywords:["docs","docusaurus"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_Wio_E5_Helium_Demo",last_update:{date:"08/30/2023",author:"Salman"}},sidebar:"ProductSidebar",previous:{title:"Grove - Wio-E5 TTN Demo",permalink:"/Grove_Wio_E5_TTN_Demo"},next:{title:"Grove - BLE (dual model) v1.0",permalink:"/Grove-BLE-dual_model-v1.0"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Preparations",id:"preparations",level:3},{value:"Hardware Required",id:"hardware-required",level:3},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Helium IoT Console Prepration",id:"helium-iot-console-prepration",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Download Library",id:"download-library",level:4},{value:"Software Code",id:"software-code",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,'The Helium IOT Network uses the LoRaWAN protocol to provide internet connectivity to "Internet of Things" devices and is the original sub network in the Helium ecosystem. Developers and companies around the world rely on the Helium IOT Network for connectivity.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you are inside the helium network coverage. You can find the network coverage at ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.helium.com/"},"explorer.helium.com"))),(0,i.kt)("h3",{id:"preparations"},"Preparations"),(0,i.kt)("p",null,"Here is a demo showing you how to connect Helium IoT Network and Seeeduino XIAO module via Grove - Wio-E5 module. These modules are able to collect temperature and humidity parameters from the environment and send them back to TTN. The flashing LED lights on the Seeeduino Xiao indicate the status of the temperature and humidity sensor as connecting to TTN cloud."),(0,i.kt)("admonition",{title:"attention",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please ensure the consistent of the frequency band among the end nodes, gateway, and TTN configuration you are using by following this instruction.\nThe frequency plan this demo applied is for ",(0,i.kt)("strong",{parentName:"p"},"IN865"),".")),(0,i.kt)("h3",{id:"hardware-required"},"Hardware Required"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino XIAO"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - Wio-E5"),(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino XIAO Expansion Board"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - Temperature & Humidity Sensor (DHT11)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/11302009_preview-34.png",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/r/grove-temperature-humidity-sensor-dht11-preview.png",alt:"pir",width:600,height:"auto"})))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this is your first time using Seeeduino XIAO, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeeduino_Lotus/"},"Seeeduino XIAO's wiki"),".\nIf this is your first time to use Arduino, ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/"},"Arduino\u2019s website")," is a great resource for you to start your Arduino journey.")),(0,i.kt)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1."),' Connect the Wio-E5 module directly to the "UART" slot.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2."),' Put DH11 into the "A0/D0" socket.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Download the code, please refer to the software part."))),(0,i.kt)("h3",{id:"helium-iot-console-prepration"},"Helium IoT Console Prepration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Visit ",(0,i.kt)("a",{parentName:"li",href:"https://console.helium.com/welcome"},"Helium Console")," website and sign up for a new account")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Helium-login.png",alt:"pir",width:500,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2."),' After logging in, click "Devices" to manage devices. ')),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3."),' Then click on "Add New Device"')),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/CreateaDevice01.png",alt:"pir",width:"1000",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Here, ",(0,i.kt)("strong",{parentName:"li"},"1) Add device a new")," , ",(0,i.kt)("strong",{parentName:"li"},"2) Copy the Dev EUI")," , ",(0,i.kt)("strong",{parentName:"li"},"3) Copy the App EUI"),", ",(0,i.kt)("strong",{parentName:"li"},"4) Copy the App Key"),", ",(0,i.kt)("strong",{parentName:"li"},"5) Finally Click Save"),".")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Id01.png",alt:"pir",width:"1000",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5."),' Now you can see the device under the "Devices" section. ')),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device02.png",alt:"pir",width:"1000",height:"auto"})),(0,i.kt)("p",null,"Now, the helium console setup is done. we can move to the Software part and upload data to the helium console over the helium LoRa network. "),(0,i.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.\nClick to learn about detail about ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"how to install an Arduino Library"))),(0,i.kt)("h4",{id:"download-library"},"Download Library"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/olikraus/U8g2_Arduino"},"u8g2 library"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor"},"DHT sensor library")))),(0,i.kt)("h4",{id:"software-code"},"Software Code"),(0,i.kt)("p",null,"Download the example; copy the code stick onto the Aruino IDE and then upload it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'\n/*\n* Grove - Wio-E5 Helium Demo\n*  Date: 30/08/2023\n* Author: Salman Faris (Modified Seeed TTN Sketch)\n\n*/\n\n\n#include <Arduino.h>\n#include <U8x8lib.h>\n#include "DHT.h"\n\n//# define DHTPIN 0 // what pin we\'re connected to\n\n// Uncomment whatever type you\'re using!\n#define DHTTYPE DHT11  // DHT 11\n// #define DHTTYPE DHT22   // DHT 22  (AM2302)\n//#define DHTTYPE DHT21   // DHT 21 (AM2301)\n\nDHT dht(DHTPIN, DHTTYPE);\n\nU8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);\n// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/*clock=*/ SCL, /*data=*/ SDA, /*reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display\n\nstatic char recv_buf[512];\nstatic bool is_exist = false;\nstatic bool is_join = false;\nstatic int led = 0;\n\nstatic int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...) {\n  int ch;\n  int num = 0;\n  int index = 0;\n  int startMillis = 0;\n  va_list args;\n  memset(recv_buf, 0, sizeof(recv_buf));\n  va_start(args, p_cmd);\n  Serial1.printf(p_cmd, args);\n  Serial.printf(p_cmd, args);\n  va_end(args);\n  delay(200);\n  startMillis = millis();\n\n  if (p_ack == NULL) {\n    return 0;\n  }\n\n  do {\n    while (Serial1.available() > 0) {\n      ch = Serial1.read();\n      recv_buf[index++] = ch;\n      Serial.print((char)ch);\n      delay(2);\n    }\n\n    if (strstr(recv_buf, p_ack) != NULL) {\n      return 1;\n    }\n\n  } while (millis() - startMillis < timeout_ms);\n  return 0;\n}\n\nstatic void recv_prase(char *p_msg) {\n  if (p_msg == NULL) {\n    return;\n  }\n  char *p_start = NULL;\n  int data = 0;\n  int rssi = 0;\n  int snr = 0;\n\n  p_start = strstr(p_msg, "RX");\n  if (p_start && (1 == sscanf(p_start, "RX: \\"%d\\"\\r\\n", &data))) {\n    Serial.println(data);\n    u8x8.setCursor(2, 4);\n    u8x8.print("led :");\n    led = !!data;\n    u8x8.print(led);\n    if (led) {\n      digitalWrite(LED_BUILTIN, LOW);\n    } else {\n      digitalWrite(LED_BUILTIN, HIGH);\n    }\n  }\n\n  p_start = strstr(p_msg, "RSSI");\n  if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi))) {\n    u8x8.setCursor(0, 6);\n    u8x8.print("                ");\n    u8x8.setCursor(2, 6);\n    u8x8.print("rssi:");\n    u8x8.print(rssi);\n  }\n  p_start = strstr(p_msg, "SNR");\n  if (p_start && (1 == sscanf(p_start, "SNR %d", &snr))) {\n    u8x8.setCursor(0, 7);\n    u8x8.print("                ");\n    u8x8.setCursor(2, 7);\n    u8x8.print("snr :");\n    u8x8.print(snr);\n  }\n}\n\nvoid setup(void) {\n  u8x8.begin();\n  u8x8.setFlipMode(1);\n  u8x8.setFont(u8x8_font_chroma48medium8_r);\n\n  Serial.begin(115200);\n  pinMode(LED_BUILTIN, OUTPUT);\n  digitalWrite(LED_BUILTIN, HIGH);\n\n  Serial1.begin(9600);\n  Serial.print("E5 LORAWAN TEST\\r\\n");\n  u8x8.setCursor(0, 0);\n\n  if (at_send_check_response("+AT: OK", 100, "AT\\r\\n")) {\n    is_exist = true;\n    at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\\"xxxxxxxxxxxxx\\"\\r\\n"); // replace \'xxxxxxxxxxxxx\' with your DevEui\n    at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\\"xxxxxxxxxxxxx\\"\\r\\n"); // replace \'xxxxxxxxxxxxx\' with your AppEui\n    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\\"xxxxxxxxxxxxx\\"\\r\\n"); // replace \'xxxxxxxxxxxxx\' with your AppKey\n    at_send_check_response("+ID: DevAddr", 1000, "AT+ID=DevAddr\\r\\n"); \n    at_send_check_response("+ID: AppEui", 1000, "AT+ID\\r\\n");\n    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\\r\\n");\n    at_send_check_response("+DR: IN865", 1000, "AT+DR=IN865\\r\\n");  // Change FREQ as per your location\n    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\\r\\n");\n    at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\\r\\n");\n    at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\\r\\n");\n    delay(200);\n    u8x8.setCursor(5, 0);\n    u8x8.print("LoRaWAN");\n    is_join = true;\n  } else {\n    is_exist = false;\n    Serial.print("No E5 module found.\\r\\n");\n    u8x8.setCursor(0, 1);\n    u8x8.print("unfound E5 !");\n  }\n\n  dht.begin();\n\n  u8x8.setCursor(0, 2);\n  u8x8.setCursor(2, 2);\n  u8x8.print("temp:");\n\n  u8x8.setCursor(2, 3);\n  u8x8.print("humi:");\n\n  u8x8.setCursor(2, 4);\n  u8x8.print("led :");\n  u8x8.print(led);\n}\n\nvoid loop(void) {\n\n  temp = dht.readTemperature();\n  humi = dht.readHumidity();\n\n  Serial.print("Humidity: ");\n  Serial.print(humi);\n  Serial.print(" %\\t");\n  Serial.print("Temperature: ");\n  Serial.print(temp);\n  Serial.println(" *C");\n\n  u8x8.setCursor(0, 2);\n  u8x8.print("      ");\n  u8x8.setCursor(2, 2);\n  u8x8.print("temp:");\n  u8x8.print(temp);\n  u8x8.setCursor(2, 3);\n  u8x8.print("humi:");\n  u8x8.print(humi);\n\n  if (is_exist) {\n    int ret = 0;\n    if (is_join) {\n\n      ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\\r\\n");\n      if (ret) {\n        is_join = false;\n      } else {\n        at_send_check_response("+ID: AppEui", 1000, "AT+ID\\r\\n");\n        Serial.print("JOIN failed!\\r\\n\\r\\n");\n        delay(5000);\n      }\n    } else {\n      char cmd[128];\n      sprintf(cmd, "AT+CMSGHEX=\\"%04X%04X\\"\\r\\n", (int)temp, (int)humi);\n      ret = at_send_check_response("Done", 5000, cmd);\n      if (ret) {\n        recv_prase(recv_buf);\n      } else {\n        Serial.print("Send failed!\\r\\n\\r\\n");\n      }\n      delay(5000);\n    }\n  } else {\n    delay(1000);\n  }\n}\n\n')),(0,i.kt)("p",null,"Make sure to replace the ",(0,i.kt)("strong",{parentName:"p"},"DevEui"),", ",(0,i.kt)("strong",{parentName:"p"},"AppEui")," and ",(0,i.kt)("strong",{parentName:"p"},"AppKey")," before uploading the code. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\\"xxxxxxxxxxxxx\\"\\r\\n"); // replace \'xxxxxxxxxxxxx\' with your DevEui\nat_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\\"xxxxxxxxxxxxx\\"\\r\\n"); // replace \'xxxxxxxxxxxxx\' with your AppEui\nat_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\\"xxxxxxxxxxxxx\\"\\r\\n"); // replace \'xxxxxxxxxxxxx\' with your AppKey\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 8"),": Upload the Arduino code to Seeeduino XIAO as explained before, and open serial monitor to see the following output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+ID: DevAddr, 26:0B:20:25\n+ID: DevEui, 60:81:F9:A4:84:XX:XX:XX\n+ID: AppEui, 60:81:F9:A6:90:XX:XX:XX\nAT+MODE=LWOTAA\n+MODE: LWOTAA\nAT+DR=IN865\n+DR: IN865\nAT+CH=NUM,0-2\n+CH: NUM, 0-2\nAT+CLASS=A\n+CLASS: A\nAT+PORT=8\n+PORT: 8\nHumidity: 43.00 %   Temperature: 23.00 *C\nAT+JOIN\n+JOIN: Start\n+JOIN: NORMAL\n+JOIN: Network joined\n+JOIN: NetID 326548 DevAddr 48:00:00:0E\n+JOIN: Done\nHumidity: 29.00 %   Temperature: 32.00 *C\nAT+CMSGHEX="0020001D"\n+CMSGHEX: Start\n+CMSGHEX: Wait ACK\n+CMSGHEX: ACK Received\n+CMSGHEX: RXWIN1, RSSI -30, SNR 6.0\n+CMSGHEX: Done\nHumidity: 8.00 %    Temperature: 30.00 *C\nAT+CMSGHEX="001E0008"\n+CMSGHEX: Start\n')),(0,i.kt)("p",null,"Once you see the message like this ",(0,i.kt)("strong",{parentName:"p"},"+JOIN: Network joined"),", open the ",(0,i.kt)("strong",{parentName:"p"},'"REAL TIME PACKETS"')," section and see uplink information. "),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/realtimepkts.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("p",null,"You can also see the event log at the ",(0,i.kt)("strong",{parentName:"p"},'"Event Log"')," section. "),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/eventlog.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("p",null,"and if we open the Debug window, we can see the live data payload and other informations. "),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://github.com/salmanfarisvp/resource/blob/main/Images/LoRa/Helium/Networksetup/payload.png?raw=true",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Datasheet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd"},"Grove Wio-E5 v1.0.brd"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf"},"Grove Wio-E5 v1.0.pdf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch"},"Grove Wio-E5 v1.0.sch"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf"},"Wio-E5 datasheet and specifications"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf"},"Wio-E5 AT Command Specification"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf"},"STM32WLE5JC Datasheet")))),(0,i.kt)("p",null,"Certifications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf"},"Wio-E5-HF Certification CE-VOC-RED"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf"},"Wio-E5-HF FCC Certification -DSS"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf"},"Wio-E5-HF FCC Certification -DTS")))),(0,i.kt)("p",null,"Relevant SDK:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview",target:"_blank"},"STM32Cube MCU Package for STM32WL series")))),(0,i.kt)("div",{id:"gtx-trans",style:{position:"absolute",left:"-36px",top:"48.875px"}},(0,i.kt)("div",{className:"gtx-trans-icon"})),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);