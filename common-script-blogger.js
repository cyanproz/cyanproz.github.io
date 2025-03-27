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