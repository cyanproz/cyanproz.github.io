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

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1001) {
        document.getElementById("Menu_Wrapper_Button").querySelector("input[type=\"checkbox\"]").checked = false;
    }
});

function applyCommentStyles() {
    var commentIframe = document.querySelector('iframe[title="Blogger Comments"]');
    
    if (commentIframe) {
      var styleElement = document.createElement("style");
      styleElement.textContent = `
        body {
          font-family: Arial, sans-serif !important;
          background-color: #f5f5f5 !important;
        }
        .comments { 
          border: 2px solid red !important;
        }
      `;

      commentIframe.contentDocument.head.appendChild(styleElement);
    }
}

setTimeout(applyCommentStyles, 3000); // Delay to ensure iframe loads

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
    document.get
    
    document.body.appendChild(Screen_Width_Element);
    
    Screen_Width_Element.textContent = `${window.innerWidth} × ${window.innerHeight}`;
    window.addEventListener("resize", function() {
        Screen_Width_Element.textContent = `${window.innerWidth} × ${window.innerHeight}`;
    });
}

// == End of Section ==
