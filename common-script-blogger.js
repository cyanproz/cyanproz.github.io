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

// == Dev Mode ==

if (Dev_Mode) {
    const Screen_Width_Element = document.createElement("div");
    Screen_Width_Element.id = "Screen_Width";
    Screen_Width_Element.style.display = "inline-block";
    Screen_Width_Element.style.position = "fixed";
    Screen_Width_Element.style.top = "0px";
    Screen_Width_Element.style.left = "0px";
    Screen_Width_Element.style.zIndex = "100000000000000000000000000000000000000";
    Screen_Width_Element.style.backgroundColor = "#FFFFFF88";
    Screen_Width_Element.style.color = "black";
    
    document.body.appendChild(Screen_Width_Element);
    
    window.addEventListener("resize", function() {
        Screen_Width_Element.textContent = `${window.innerWidth} × ${window.innerHeight}`;
    });
}

// == End of Section ==
