// if (!localStorage["isAdmin"] && localStorage["isAdmin"] != "true" && getBrowserPlatform()) {
//     document.body.innerHTML = "<h1>Sorry</h1><p>This page is not ready to be shown in public. Currently under a big change</p>";
// }

setInterval(function() {
    if (document.documentElement.scrollTop <= 16) {
        header.style.background = "#0000";
        header.style.borderBottomColor = "#0000";
        header.style.boxShadow = "none";
    } else {
        header.style.removeProperty("background");
        header.style.removeProperty("border-bottom-color");
        header.style.removeProperty("box-shadow");
    }

    if (Google_Translate_Combobox()) {
        if (Google_Translate_Combobox().value == "ar" || Google_Translate_Combobox().value == "fa" || Google_Translate_Combobox().value == "fa-AF" || Google_Translate_Combobox().value == "ps" || Google_Translate_Combobox().value == "iw" || Google_Translate_Combobox().value == "ye") {
            if (urlQueryParams.get("secret") == "rtl") {
                document.documentElement.style.direction = "ltr";
            } else {
                document.documentElement.style.direction = "rtl";
            }
        } else {
            if (urlQueryParams.get("secret") == "rtl") {
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
    screenWidthElement.id = "screen-width";
    screenWidthElement.style.display = "inline-block";
    screenWidthElement.style.position = "fixed";
    screenWidthElement.style.top = "0px";
    screenWidthElement.style.left = "0px";
    screenWidthElement.style.zIndex = "100000000000000000000000000000000000000";
    screenWidthElement.style.backgroundColor = "#ffffff88";
    screenWidthElement.style.color = "black";
    
    document.body.appendChild(screenWidthElement);
    
    screenWidthElement.textContent = window.innerWidth + " × " + window.innerHeight;
    window.addEventListener("resize", function() {
        screenWidthElement.textContent = window.innerWidth + " × " + window.innerHeight;
    });
}

// == End of Section ==
