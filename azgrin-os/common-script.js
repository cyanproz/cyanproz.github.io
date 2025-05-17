const Boot = document.getElementById("Boot");
// const Active_Window = document.querySelector(".Window");
// const Active_Window = document.querySelector("#Window");
// const Active_Window = document.getElementsByClassName("Window");
const Active_Window = document.getElementById("Window__Active");
const Menu_Bar = document.getElementById("Menu_Bar");
const Taskbar = document.getElementById("Taskbar");
// const Active_Window_Caption_Bar = Active_Window.querySelector(".Window_Caption_Bar");
const Active_Window_Caption_Bar = Active_Window.querySelector("#Window_Caption_Bar");
// const Active_Window_Caption_Bar = Active_Window.getElementsByClassName("Window_Caption_Bar");
// const Active_Window_Caption_Bar = Active_Window.getElementById("Window_Caption_Bar");
// const Window_Close_Button = Active_Window.getElementById("#Window_Caption_Bar");
var Working_Area = document.getElementById("Working_Area");

function Close_Window()
{
    console.log("Clicked");
    Active_Window.classList.add("Close_Window");
}

// function Make_Window_Draggable(Window, Window_Caption_Bar)
// {
//     let X_Offset, Y_Offset;
    
//     Window_Caption_Bar.addEventListener("mousedown", Window_Caption_Bar_Mouse_Down);
    
//     // Function to handle mouse down event
//     function Window_Caption_Bar_Mouse_Down(event)
//     {
//         // Calculate the offset between the mouse cursor and the draggable element
//         X_Offset = event.clientX - Window.getBoundingClientRect().left;
//         Y_Offset = event.clientY - Window.getBoundingClientRect().top;
        
//         // Add event listeners for mousemove and mouseup events
//         document.addEventListener("mousemove", Window_Caption_Bar_Mouse_Move);
//         document.addEventListener("mouseup", Window_Caption_Bar_Mouse_Up);
//     }
    
//     // Function to handle mouse move event
//     function Window_Caption_Bar_Mouse_Move(event)
//     {
//         // Calculate the new position of the draggable element
//         const x = event.clientX - X_Offset;
//         const y = event.clientY - Y_Offset;
        
//         // Set the new position of the draggable element
//         Active_Window.style.left = `${x}px`;
//         Active_Window.style.top = `${y}px`;
//     }

//     // Function to handle mouse up event
//     function Window_Caption_Bar_Mouse_Up()
//     {
//         // Remove event listeners for mousemove and mouseup events
//         document.removeEventListener("mousemove", Window_Caption_Bar_Mouse_Move);
//         document.removeEventListener("mouseup", Window_Caption_Bar_Mouse_Up);
//     }
// }

function Register_Window_Events(Window) {
    let X_Offset, Y_Offset;
    let Original_X_Offset = 0;
    let Original_Y_Offset = 0;
    var Is_Dragging = false;
    
    const Window_Caption_Bar = Window.querySelector(".Window_Caption_Bar");
    const Window_Minimize_Button = Window.querySelector(".Window_Maximize_And_Restore_Button");
    const Window_Maximize_And_Restore_Button = Window.querySelector(".Window_Maximize_And_Restore_Button");
    const Window_Maximize_And_Restore_Button_Check_Box = Window.querySelector(".Window_Maximize_And_Restore_Button > input[type=\"checkbox\"]");
    const Window_Close_Button = Window.querySelector(".Window_Maximize_And_Restore_Button");
    
    Window_Caption_Bar.addEventListener("mousedown", Window_Caption_Bar_Mouse_Down);
    Window_Caption_Bar.addEventListener("touchstart", Window_Caption_Bar_Touch_Start, { passive: false });
    Window_Caption_Bar.addEventListener("dblclick", (event) => {
        Window_Maximize_And_Restore_Button.click();
    });
    Window_Caption_Bar.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        Window_Maximize_And_Restore_Button.click();
    });

    function Window_Start_Dragging(event, Cursor) {
        Original_X_Offset = Window.getBoundingClientRect().left;
        Original_Y_Offset = Window.getBoundingClientRect().top;
        Window.classList.add("Dragging");
        // console.log(`${Original_X_Offset}, ${Original_Y_Offset}`);
        // console.log(Original_X_Offset);
        // console.log(Original_Y_Offset);
        Is_Dragging = true;
        // Calculate the offset between the mouse cursor and the draggable element
        X_Offset = Cursor.clientX - Window.getBoundingClientRect().left;
        Y_Offset = Cursor.clientY - Window.getBoundingClientRect().top;
    }
    function Window_Caption_Bar_Mouse_Down(event) {
        // Prevent default behavior to avoid text selection (mouse down)
        event.preventDefault();
        Window_Start_Dragging(event, event);
        
        document.addEventListener("mousemove", Window_Caption_Bar_Mouse_Move);
        document.addEventListener("mouseup", Window_Caption_Bar_Mouse_Up);
    }
    function Window_Caption_Bar_Touch_Start(event) {
        // Prevent default behavior to avoid scrolling (touch start)
        // event.preventDefault();
        Window_Start_Dragging(event, event.touches[0]);
        
        document.addEventListener("touchmove", Window_Caption_Bar_Touch_Move, { passive: false });
        document.addEventListener("touchend", Window_Caption_Bar_Touch_End);
        document.addEventListener("touchcancel", Window_Caption_Bar_Touch_End);
    }
    
    function Window_Dragging(event, Cursor) {
        // Window_Maximize_And_Restore_Button_Check_Box.checked = false;

        // Calculate the new position of the draggable element
        
        const x = Cursor.clientX - X_Offset;
        const y = Cursor.clientY - Y_Offset;
        
        // Set the new position of the draggable element
        Window.style.left = `${x}px`;
        if (y <= Working_Area.getBoundingClientRect().top) {
            Window.style.top = `${Working_Area.getBoundingClientRect().top}px`;
        } else {
            Window.style.top = `${y}px`;
        }
        // Window.style.transform = `skew(${-((event.movementX > 80 ? 80 : (event.movementX < -80 ? -80 : event.movementX)) / 2)}deg)`;
    }
    function Window_Caption_Bar_Mouse_Move(event) {
        Window_Dragging(event, event);
    }
    function Window_Caption_Bar_Touch_Move(event) {
        event.preventDefault(); // Prevent default behavior to avoid scrolling
        Window_Dragging(event, event.touches[0]);
    }
    
    function Window_Stop_Dragging(Cursor) {
        Window.classList.remove("Dragging");
        // Window.style.transform = "skew(0deg)";
        if (Cursor.clientY < Working_Area.getBoundingClientRect().top) {
            Window_Maximize_And_Restore_Button_Check_Box.checked = false;
            Window_Maximize_And_Restore_Button_Check_Box.click();
            setTimeout(() => {
                // Window.top
                Window.style.left = `${Original_X_Offset}px`;
                Window.style.top = `${Original_Y_Offset}px`;
            }, 500);
        }
        Is_Dragging = false;
    }
    function Window_Caption_Bar_Mouse_Up(event) {
        console.log(event);
        Window_Stop_Dragging(event);
        
        // Remove event listeners for mousemove and mouseup events
        document.removeEventListener("mousemove", Window_Caption_Bar_Mouse_Move);
        document.removeEventListener("mouseup", Window_Caption_Bar_Mouse_Up);
    }
    function Window_Caption_Bar_Touch_End(event) {
        console.log(event);
        // Window_Stop_Dragging(event.touches[0]);

        // Remove event listeners for touchmove and touchend events
        document.removeEventListener("touchmove", Window_Caption_Bar_Touch_Move);
        document.removeEventListener("touchend", Window_Caption_Bar_Touch_End);
        document.removeEventListener("touchcancel", Window_Caption_Bar_Touch_End);
    }
    
    Window_Maximize_And_Restore_Button_Check_Box.addEventListener("change", function(event) {
        // console.log("Animating window animation");
        console.log(event);
        Window.classList.add("Maximizing_Or_Restore_Down_Animation");
        
        setTimeout(() => {
            Window.classList.remove("Maximizing_Or_Restore_Down_Animation");
        }, 500);
        // console.log("Window animation finished");
    })
}

function Recreate_Element(Element)
{
    console.log(Element);
    console.log(Element.parentElement);
    const Selected_Element = Element;
    const Selected_Element_Parent = Element.parentElement;
    Element.remove();
    Selected_Element_Parent.appendChild(Selected_Element);
}

function Recreate_Element_And_Remove_The_Events(Element)
{
    console.log(Element);
    console.log(Element.parentElement);
    const New_Element = Element.cloneNode(true); // Create a clone of the element
    Element.parentNode.replaceChild(New_Element, Element); // Replace the old element with the new one
}

function Remove_Element_And_Events(Element)
{
    console.log(Element);
    console.log(Element.parentElement);
    const New_Element = Element.cloneNode(true); // Create a clone of the element
    Element.parentNode.replaceChild(New_Element, Element); // Replace the old element with the new one
    New_Element.remove();
}

// Add event listener for mousedown event on the draggable element
Register_Window_Events(Active_Window);
console.log(Active_Window.querySelector(".Window_Caption_Bar input[type=\"checkbox\"]"));

Menu_Bar.style.display = "none";
Taskbar.style.display = "none";
Active_Window.style.display = "none";



setTimeout(() => {
    Boot.style.animation = "Fade_Out 1s linear";
}, 2000);
setTimeout(() => {
    Boot.style.display = "none";
}, 2900);
setTimeout(() => {
    Menu_Bar.style.display = "flex";
    Taskbar.style.display = "flex";
}, 4000);

setTimeout(() => {
    Active_Window.style.display = "flex";
    Active_Window.classList.add("Open_Window");
    // Active_Window.style.animation = "Open_Window 1s cubic-bezier(0, 0, 0, 1);";
}, 5000);