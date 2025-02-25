// Variables
try { var Search_Parameters = new URLSearchParams(window.location.search); }
catch (e) {}

const Dev_Mode = true;

const Header_And_Content_Layout = document.getElementById("Header_And_Content_Layout");
const Header = document.getElementById("Header");
const Side_Bar = document.getElementById("Side_Bar"); 
const Main_Content = document.getElementById("Main_Content");
const Home_Page = document.getElementById("Home_Page");
const Blog_Page = document.getElementById("Blog_Page");
const CSharp_Page = document.getElementById("CSharp_Page");
const Website_Lab_Page = document.getElementById("Website_Lab_Page");
const Upload_File_Button_Class = document.querySelectorAll(".Upload_File_Button");
const Image_Viewer = document.getElementById("Image_Viewer");
const Flag_Tags = document.querySelectorAll("Flag_Tags");
function Google_Translate_Combobox() {
    return document.querySelector("div.widget.Translate#Translate1 > #google_translate_element .goog-te-combo");
}
var Website_Lab_Result = null;
var HTML_Input_Box = document.querySelector("#Website_Lab_Side_Bar > :nth-child(2) > div.Code_Input_Box_Parent:nth-child(1) > textarea.Code_Input_Box");
var CSS_Input_Box = document.querySelector("#Website_Lab_Side_Bar > :nth-child(2) > div.Code_Input_Box_Parent:nth-child(2) > textarea.Code_Input_Box");
var Javascript_Input_Box = document.querySelector("#Website_Lab_Side_Bar > :nth-child(2) > div.Code_Input_Box_Parent:nth-child(3) > textarea.Code_Input_Box");

// Flags
var Page_Is_Home_Page = document.querySelector('#Flag_Tags .Page_Is_Home_Page');
var Page_Is_Static_Page = document.querySelector('#Flag_Tags .Page_Is_Static_Page');

// Functions
function Show_Message_Box_Dialog(Title, Message) {
    const Message_Dialog = document.getElementById("Message_Dialog").querySelector("div");
    const Message_Dialog_Title = Message_Dialog.querySelector(".Title");
    const Message_Dialog_Message = Message_Dialog.querySelector(".Message");
    // Message_Dialog.classList.remove("Close");
    Message_Dialog_Title.textContent = Title;
    Message_Dialog_Message.textContent = Message;
    Message_Dialog.parentElement.style.display = "block";
    Message_Dialog.style.animation = "Message_Dialog_Appears 0.5s";
}
function Start_Website_Lab() {
    if (Website_Lab_Result != null) {
        Website_Lab_Result.close();
        Website_Lab_Result = null;
    }
    Website_Lab_Result = window.open("", "newWindow", "menubar=true, location=true, resizable=no, scrollbars=true, width=960, height=540, left=" + ((screen.width - 920) / 2) + ", top" + ((screen.height - 540) / 2));
    Website_Lab_Result.document.write(HTML_Input_Box.value);
    Website_Lab_Result.document.write("<style>");
    Website_Lab_Result.document.write("</style>");
}
function View_Image(URL) {
    Image_Viewer.style.display = "flex";
    Image_Viewer.querySelector(".Dialog > img").src = URL;
}

function Get_Windows_OS() {
    // http://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx#PltToken
    if (navigator.appVersion.indexOf("Windows NT 10.")!=-1) {
        return 'Windows 10, Windows 11';
    }
    else if (navigator.appVersion.indexOf("Windows NT 6.3")!=-1) {
        return "Windows 8.1";
    }
    else if (navigator.appVersion.indexOf("Windows NT 6.2")!=-1) {
        return "Windows 8";
    }
    else if (navigator.appVersion.indexOf("Windows NT 6.1")!=-1) {
        return "Windows 7";
    }
    else if (navigator.appVersion.indexOf("Windows NT 6.0")!=-1) {
        return "Windows Vista";
    }
    else if (navigator.appVersion.indexOf("Windows NT 5.2")!=-1) {
    	return "Windows Server 2003; Windows XP x64 Edition";
    }
    else if (navigator.appVersion.indexOf("Windows NT 5.1")!=-1) {
        return "Windows XP";
    }
    else if (navigator.appVersion.indexOf("Windows NT 5.01")!=-1) {
        return "Windows 2000, Service Pack 1 (SP1)";
    }
    else if (navigator.appVersion.indexOf("Windows NT 5.0")!=-1) {
    	return "Windows 2000";
    }
    else if (navigator.appVersion.indexOf("Windows NT 4.0")!=-1) {
        return "Windows NT 4.0";
    }
    else if (navigator.appVersion.indexOf("Windows 98")!=-1) {
        return "Windows 98";
    }
    else if (navigator.appVersion.indexOf("Windows 98; Win 9x 4.90")!=-1) {
        return "Windows Millennium Edition (Windows Me)";
    }
    else if (navigator.appVersion.indexOf("Windows 95")!=-1) {
        return "Windows 95";
    }
    else if (navigator.appVersion.indexOf("Windows CE")!=-1) {
        return "Windows CE";
    }
    else {
        return "Unknown Windows OS";
    }
}
console.log(Get_Windows_OS());

var userAgent = navigator.userAgent;
function Get_Browser_Platform() {
    if (userAgent.indexOf("Chrome") != -1) {
        return "Chrome";
    }
    else if (userAgent.indexOf("Safari") != -1)
    {
        return "Safari";
    }
    else if (userAgent.indexOf("Firefox") != -1)
    {
        return "Firefox";
    }
    else if (userAgent.indexOf("Edge") != -1)
    {
        return "Edge";
    }
    else if (userAgent.indexOf("MSIE") != -1 || userAgent.indexOf("Trident") != -1) {
        return "Internet Explorer";
    }
    else {
        return "Unknown browser";
    }
}
console.log(Get_Browser_Platform());
// if (Get_Browser_Platform() != "Chrome")
// {
//     alert(`You're currently running this website on ${Get_Browser_Platform()}. It may not be perfect.`);
// }

// Events
try {
    Image_Viewer.addEventListener("click", function(event) {
        event.preventDefault();
        if (event.target == event.currentTarget) {
            event.target.style.display = "none";
        }
    });
} catch {}
// Image_Viewer.querySelector("div.Dialog").addEventListener("click", function(event) {
//     event.preventDefault();
// });

// == Search Paremeters ==
try {
    console.log(Search_Parameters.get("page"))
    // • Pages
    // if (!(Search_Parameters.get("indexpage") == "blog" || location.href.includes("search?q=")) || Page_Is_Static_Page)
    // {
    //     Blog_Page.style.display = "none";
    //     Home_Page.style.display = "block";
    // }
    if ((Page_Is_Home_Page && Search_Parameters.get("indexpage") == "blog" || location.href.includes("search?q=")) || Page_Is_Static_Page) {
        Home_Page.style.display = "none";
        Blog_Page.style.display = "flex";
        // console.log("gyguh9ui");
    }
    // else
    // {
    //     Home_Page.style.display = "none";
    //     Blog_Page.style.display = "block";
    // }
    console.log(Search_Parameters.get("indexpage") == "blog");
    console.log(location.href.includes("search?q="));
    console.log(Page_Is_Home_Page);
    if (Page_Is_Home_Page) {
        console.log("Page is home page");
    }
    console.log(Page_Is_Static_Page);
    if (Page_Is_Static_Page) {
        console.log("Page is static page");
    }
    if (location.href.includes("search?q=")) {

    }
    // • Easter Eggs
    if (Search_Parameters.get("secret") == "editable") {
        document.documentElement.setAttribute("contenteditable", "true");
    }
    if (Search_Parameters.get("secret") == "error") {
        console.error("Bruh");
    }
    if (Search_Parameters.get("secret") == "error_2" || Search_Parameters.get("secret") == "error-2" || Search_Parameters.get("secret") == "error2") {
        console.error("Bruh");
    }
    if (Search_Parameters.get("secret") == "ohio") {
        console.error("Down in Ohio, swag like Ohio");
        const Ohio_Flag = document.createElement("img");
        Ohio_Flag.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg");
        Ohio_Flag.style.zIndex = "100000000";
        Ohio_Flag.style.position = "fixed";
        Ohio_Flag.style.width = "260px";
        Ohio_Flag.style.height = "160px";
        Ohio_Flag.style.transform = "translate(" + Math.floor(Math.random() * window.innerWidth) + "px, " + Math.floor(Math.random() * window.innerHeight) + "px) rotate("+ Math.floor(Math.random() * 360) + "deg)";
        Ohio_Flag.style.top = "0px";
        Ohio_Flag.style.left = "0px";
        document.body.appendChild(Ohio_Flag);
    }
    if (Search_Parameters.get("secret") == "unexpected") {
        console.error("Something went wrong");
        document.getElementById("Header").remove();
        document.getElementById("Main_Content").remove();
        document.getElementById("Side_Bar").remove();
        // document.querySelector("html body:nth-child(3)").remove();
        // document.querySelector("html body:nth-child(4)").remove();
        const Body = document.querySelector("html body");
        // const Error_Text = document.createElement("div");
        // Error_Text.textContent = "Something went wrong..."
        // Body.appendChild(Error_Text)
        Show_Message_Box_Dialog("Error", "Something went wrong")
    }
    // if (Search_Parameters.get("secret") == "rtl") {
    //     document.documentElement.style.direction = "rtl";
    // }
    if (Search_Parameters.get("secret") == "keanu") {
        document.title = document.title.replace("CyanProz", "CyaneProz");
        document.body.querySelectorAll("a, h1.title, div.widget.Attribution > .widget-content").forEach(function(element) {
            if (element.textContent.includes("CyanProz")) {
                element.textContent = element.textContent.replace("CyanProz", "CyaneProz");
            }
        });
        try {
            document.body.querySelector("#Header1 .description > span").textContent = document.body.querySelector("#Header1 .description > span").textContent.replace("I like coding website 🧑🏻‍💻", "\"I love Cyane Averil Nugraha ❤️\" - Keanu");
        }
        catch (e) {}
    }
    if (Search_Parameters.get("secret") == "singlestorey") {
        console.log("Hi");
        document.documentElement.style.fontFeatureSettings = "\"ss02\", \"ss03\"";
    }
    if (Search_Parameters.get("secret") == "smallcaps") {
        console.log("Hi");
        document.documentElement.style.fontFeatureSettings = "\"smcp\"";
    }
    // • Pages
    // if (Search_Parameters.has("page") && Search_Parameters.get("page").trim() && Search_Parameters.get("page") != "home" && Search_Parameters.get("page") != "website_lab")
    // {
    //     Side_Bar.style.display = "block";
    //     Main_Content.style.marginLeft = "300px";
    //     console.log("OK");
    // }
    // else
    // {
    //     Side_Bar.style.display = "none";
    //     Main_Content.style.marginLeft = "0px";
    // }
    // if (Search_Parameters.get("page") == "website_lab")
    // {
    //     Main_Content.style.padding = "0px";
    //     Main_Content.style.minHeight = "calc(100vh - 55px)";
    //     console.log("OK");
    // }
    // if (Search_Parameters.get("page") == "home")
    // {
    //     Home_Page.style.display = "block";
    // }
    // if (Search_Parameters.get("page") == "c-sharp")
    // {
    //     CSharp_Page.style.display = "block";
    // }
    // if (Search_Parameters.get("page") == "website_lab")
    // {
    //     Website_Lab_Page.style.display = "block";
    // }
}
catch (e) {}

// Others
Array.from(Upload_File_Button_Class).forEach(function(Selected_Button) {
    Selected_Button.addEventListener("click", function() {
        Selected_Button.querySelector("input[type=\"file\"]").click();
    });
    Selected_Button.querySelector("input[type=\"file\"]").addEventListener("change", function() {
        try
        {
            Selected_Button.querySelector("span").textContent = " " + Selected_Button.querySelector("input[type=\"file\"]").files[0].name;
        }
        catch (e) {}
    });
});

// Array.from(document.querySelector(".Dropdown button.Dropdown_Button div.Dropdown_Menu a.Dropdown_Item")).forEach(function(element) {
//     console.log(element.getAttribute("href"))
//     element.setAttribute("href",  + element.getAttribute("href") + "/index.html");
// });

// Header_And_Content_Layout.style.height = "100vh";
// Main_Content.style.paddingTop = Header.offsetHeight + "px";
// Main_Content.style.height = "calc(100vh - " + Header.offsetHeight + "px)";
// document.querySelector("#Blog_Container .status-msg-wrap .status-msg-body > a").setAttribute("href", "https://cyanproz.blogspot.com/?indexpage=blog")

// == Dev Mode ==

const Screen_Width_Element = document.createElement("div");
Screen_Width_Element.id = "Screen_Width";
Screen_Width_Element.style.position = "fixed";
Screen_Width_Element.style.top = "0px";
Screen_Width_Element.style.bottom = "0px";
Screen_Width_Element.style.zIndex = "100000000000000000000000000000000000000";
Screen_Width_Element.style.backgroundColor = "#FFFFFF88";
Screen_Width_Element.style.color = "black";

document.body.appendChild(Screen_Width_Element);

if (Dev_Mode) {
    
}

// == End of Section ==

setInterval(function() {
    if (Dev_Mode) {
        Screen_Width_Element.textContent = `${window.innerWidth} × ${window.innerHeight}`;
    }

    if (document.documentElement.scrollTop <= 16) {
        Header.style.background = "#0000";
        Header.style.borderBottomColor = "#0000";
        Header.style.boxShadow = "none";
    } else {
        Header.style.removeProperty("background");
        Header.style.removeProperty("border-bottom-color");
        Header.style.removeProperty("box-shadow");
    }

    if (Google_Translate_Combobox()) {
        if (Google_Translate_Combobox().value == "ar" || Google_Translate_Combobox().value == "fa" || Google_Translate_Combobox().value == "fa-AF" || Google_Translate_Combobox().value == "ps" || Google_Translate_Combobox().value == "iw" || Google_Translate_Combobox().value == "ye") {
            if (Search_Parameters.get("secret") == "rtl") {
                document.documentElement.style.direction = "ltr";
            } else {
                document.documentElement.style.direction = "rtl";
            }
        } else {
            if (Search_Parameters.get("secret") == "rtl") {
                document.documentElement.style.direction = "rtl";
            } else {
                document.documentElement.style.direction = "ltr";
            }
        }
    } else {
        document.documentElement.style.removeProperty("direction");
    }
}, 32);

// export class Serial_Port {
//     constructor(baudRate = 115200) {
//         this.port = null;
//         this.reader = null;
//         this.baudRate = baudRate;
//         this.connected = false;
//     }

//     /** Connect to the serial port */
//     async Connect() {
//         try {
//             this.port = await navigator.serial.requestPort();
//             await this.port.open({ baudRate: this.baudRate });
//             console.log("Serial port connected!");
//             this.connected = true;
//             return true;
//         } catch (error) {
//             console.error("Error connecting to serial port:", error);
//             this.connected = false;
//             return false;
//         }
//     }

//     /** Read data from the serial port */
//     async Read_Data(callback) {
//         if (!this.port) {
//             console.error("No serial port connected.");
//             return "null";
//         }
    
//         try {
//             var Messages = "";
//             this.reader = this.port.readable.getReader();
        
//             while (true) {
//                 const { value, done } = await this.reader.read();
//                 if (done) break; // Stop if reader is closed
            
//                 const message = new TextDecoder().decode(value);
//                 console.log("Received:", message);
//                 Messages += message;
            
//                 // Execute callback function if provided
//                 if (callback) callback(message);
//             }
        
//             this.reader.releaseLock();
//             return Messages;
//         } catch (error) {
//             console.error("Error reading serial data:", error);
//             return null;
//         }
//     }

//     /** Send data to the serial port */
//     async Send_Data(data) {
//         if (!this.port) {
//             console.error("No serial port connected.");
//             return;
//         }
    
//         try {
//             const writer = this.port.writable.getWriter();
//             await writer.write(new TextEncoder().encode(data));
//             writer.releaseLock();
//             console.log("Sent:", data);
//         } catch (error) {
//             console.error("Error sending serial data:", error);
//         }
//     }

//     /** Close the serial port */
//     async Disconnect() {
//         if (!this.port) return;
    
//         try {
//             if (this.reader) {
//                 await this.reader.cancel();
//                 this.reader.releaseLock();
//             }
//             await this.port.close();
//             this.port = null;
//             console.log("Serial port disconnected.");
//         } catch (error) {
//             console.error("Error closing serial port:", error);
//         }
//     }
// }

console.log(Google_Translate_Combobox());

// Check_Google_Translate_Combobox_Interval = setInterval(function() {
//     console.log(Google_Translate_Combobox());

//     if (Google_Translate_Combobox()) {
//         clearInterval(Check_Google_Translate_Combobox_Interval);
//         Google_Translate_Combobox().addEventListener("change", function(e) {
//             if (Google_Translate_Combobox().value == "ar" || Google_Translate_Combobox().value == "fa" || Google_Translate_Combobox().value == "fa-AF" || Google_Translate_Combobox().value == "ps" || Google_Translate_Combobox().value == "iw" || Google_Translate_Combobox().value == "ye") {
//             } else {
//             }
//         });
//     }
//     clearInterval(Check_Google_Translate_Combobox_Interval);
// }, 100);

console.log("%cStop!", "font-family: 'Source Sans Pro'; font-size: 3.125rem; color: red; -webkit-text-stroke: 1px black;");
console.log("%cThis is part of your browser intended for developers. If someone told you to copy-and-paste something here, don't do it! It could allow them to take over your information (e.g. your Blogger account).", " font-family: 'Source Sans Pro'; font-size: 1rem;");
