// if (!localStorage["isAdmin"] && localStorage["isAdmin"] != "true" && getBrowserPlatform()) {
//     document.body.innerHTML = "<h1>Sorry</h1><p>This page is not ready to be shown in public. Currently under a big change</p>";
// }

setInterval(function() {
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
            if (searchParameters.get("secret") == "rtl") {
                document.documentElement.style.direction = "ltr";
            } else {
                document.documentElement.style.direction = "rtl";
            }
        } else {
            if (searchParameters.get("secret") == "rtl") {
                document.documentElement.style.direction = "rtl";
            } else {
                document.documentElement.style.direction = "ltr";
            }
        }
    } else {
        document.documentElement.style.removeProperty("direction");
    }
}, 32);

window.addEventListener("resize", function() {
    if (window.innerWidth >= 1001) {
        document.getElementById("hamburger-menu-button").querySelector("input[type=\"checkbox\"]").checked = false;
    }
});

// == Dev Mode ==

if (Dev_Mode && (localStorage["isAdmin"] && localStorage["isAdmin"] == "true")) {
    const screenWidthElement = document.createElement("div");
    screenWidthElement.id = "Screen_Width";
    screenWidthElement.style.display = "inline-block";
    screenWidthElement.style.position = "fixed";
    screenWidthElement.style.top = "0px";
    screenWidthElement.style.left = "0px";
    screenWidthElement.style.zIndex = "100000000000000000000000000000000000000";
    screenWidthElement.style.backgroundColor = "#FFFFFF88";
    screenWidthElement.style.color = "black";
    document.get
    
    document.body.appendChild(screenWidthElement);
    
    screenWidthElement.textContent = window.innerWidth + " × " + window.innerHeight;
    window.addEventListener("resize", function() {
        screenWidthElement.textContent = window.innerWidth + " × " + window.innerHeight;
    });
}

// == End of Section ==
