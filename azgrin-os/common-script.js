const boot = document.getElementById("boot");
// const Active_Window = document.querySelector(".window");
// const Active_Window = document.querySelector("#window");
// const Active_Window = document.getElementsByClassName("window");
const activeWindow = document.getElementById("window--active");
const menuBar = document.getElementById("menu-bar");
const taskbar = document.getElementById("taskbar");
// const Active_Window_Caption_Bar = Active_Window.querySelector(".window-caption-bar");
const activeWindow_Caption_Bar = activeWindow.querySelector("#window-caption-bar");
// const Active_Window_Caption_Bar = Active_Window.getElementsByClassName("window-caption-bar");
// const Active_Window_Caption_Bar = Active_Window.getElementById("window-caption-bar");
// const Window_Close_Button = Active_Window.getElementById("#window-caption-bar");
var workingArea = document.getElementById("working-area");

function closeWindow()
{
    console.log("Clicked");
    activeWindow.classList.add("close-window");
}

// function Make_Window_Draggable(Window, windowCaptionBar)
// {
//     let xOffset, yOffset;
    
//     windowCaptionBar.addEventListener("mousedown", windowCaptionBarMouseDown);
    
//     // Function to handle mouse down event
//     function windowCaptionBarMouseDown(event)
//     {
//         // Calculate the offset between the mouse cursor and the draggable element
//         xOffset = event.clientX - Window.getBoundingClientRect().left;
//         yOffset = event.clientY - Window.getBoundingClientRect().top;
        
//         // Add event listeners for mousemove and mouseup events
//         document.addEventListener("mousemove", windowCaptionBarMouseMove);
//         document.addEventListener("mouseup", windowCaptionBarMouseUp);
//     }
    
//     // Function to handle mouse move event
//     function windowCaptionBarMouseMove(event)
//     {
//         // Calculate the new position of the draggable element
//         const x = event.clientX - xOffset;
//         const y = event.clientY - yOffset;
        
//         // Set the new position of the draggable element
//         activeWindow.style.left = `${x}px`;
//         activeWindow.style.top = `${y}px`;
//     }

//     // Function to handle mouse up event
//     function windowCaptionBarMouseUp()
//     {
//         // Remove event listeners for mousemove and mouseup events
//         document.removeEventListener("mousemove", windowCaptionBarMouseMove);
//         document.removeEventListener("mouseup", windowCaptionBarMouseUp);
//     }
// }

function registerWindowEvents(window) {
    let xOffset, yOffset;
    let originalxOffset = 0;
    let originalyOffset = 0;
    var isDragging = false;
    
    const windowCaptionBar = window.querySelector(".window-caption-bar");
    const windowMinimizeButton = window.querySelector(".window-maximize-and-restore-button");
    const windowMaximizeAndRestoreButton = window.querySelector(".window-maximize-and-restore-button");
    const windowMaximizeAndRestoreButtonCheckBox = window.querySelector(".window-maximize-and-restore-button > input[type=\"checkbox\"]");
    const windowCloseButton = window.querySelector(".window-maximize-and-restore-button");
    
    windowCaptionBar.addEventListener("mousedown", windowCaptionBarMouseDown);
    windowCaptionBar.addEventListener("touchstart", windowCaptionBarTouchStart, { passive: false });
    windowCaptionBar.addEventListener("dblclick", (event) => {
        windowMaximizeAndRestoreButton.click();
    });
    windowCaptionBar.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        windowMaximizeAndRestoreButton.click();
    });

    function windowStartDragging(event, cursor) {
        originalXOffset = window.getBoundingClientRect().left;
        originalYOffset = window.getBoundingClientRect().top;
        window.classList.add("Dragging");
        // console.log(`${originalXOffset}, ${originalYOffset}`);
        // console.log(originalXOffset);
        // console.log(originalYOffset);
        isDragging = true;
        // Calculate the offset between the mouse cursor and the draggable element
        xOffset = cursor.clientX - window.getBoundingClientRect().left;
        yOffset = cursor.clientY - window.getBoundingClientRect().top;
    }
    function windowCaptionBarMouseDown(event) {
        // Prevent default behavior to avoid text selection (mouse down)
        event.preventDefault();
        windowStartDragging(event, event);
        
        document.addEventListener("mousemove", windowCaptionBarMouseMove);
        document.addEventListener("mouseup", windowCaptionBarMouseUp);
    }
    function windowCaptionBarTouchStart(event) {
        // Prevent default behavior to avoid scrolling (touch start)
        // event.preventDefault();
        windowStartDragging(event, event.touches[0]);
        
        document.addEventListener("touchmove", windowCaptionBarTouchMove, { passive: false });
        document.addEventListener("touchend", windowCaptionBarTouchEnd);
        document.addEventListener("touchcancel", windowCaptionBarTouchEnd);
    }
    
    function windowDragging(event, cursor) {
        // windowMaximizeAndRestoreButtonCheckBox.checked = false;

        // Calculate the new position of the draggable element
        
        const x = cursor.clientX - xOffset;
        const y = cursor.clientY - yOffset;
        
        // Set the new position of the draggable element
        window.style.left = `${x}px`;
        if (y <= workingArea.getBoundingClientRect().top) {
            window.style.top = `${workingArea.getBoundingClientRect().top}px`;
        } else {
            window.style.top = `${y}px`;
        }
        // Window.style.transform = `skew(${-((event.movementX > 80 ? 80 : (event.movementX < -80 ? -80 : event.movementX)) / 2)}deg)`;
    }
    function windowCaptionBarMouseMove(event) {
        windowDragging(event, event);
    }
    function windowCaptionBarTouchMove(event) {
        event.preventDefault(); // Prevent default behavior to avoid scrolling
        windowDragging(event, event.touches[0]);
    }
    
    function windowStopDragging(cursor) {
        window.classList.remove("Dragging");
        // window.style.transform = "skew(0deg)";
        if (cursor.clientY < workingArea.getBoundingClientRect().top) {
            windowMaximizeAndRestoreButtonCheckBox.checked = false;
            windowMaximizeAndRestoreButtonCheckBox.click();
            setTimeout(() => {
                // window.top
                window.style.left = `${originalXOffset}px`;
                window.style.top = `${originalYOffset}px`;
            }, 500);
        }
        isDragging = false;
    }
    function windowCaptionBarMouseUp(event) {
        console.log(event);
        windowStopDragging(event);
        
        // Remove event listeners for mousemove and mouseup events
        document.removeEventListener("mousemove", windowCaptionBarMouseMove);
        document.removeEventListener("mouseup", windowCaptionBarMouseUp);
    }
    function windowCaptionBarTouchEnd(event) {
        console.log(event);
        // windowStopDragging(event.touches[0]);

        // Remove event listeners for touchmove and touchend events
        document.removeEventListener("touchmove", windowCaptionBarTouchMove);
        document.removeEventListener("touchend", windowCaptionBarTouchEnd);
        document.removeEventListener("touchcancel", windowCaptionBarTouchEnd);
    }
    
    windowMaximizeAndRestoreButtonCheckBox.addEventListener("change", function(event) {
        // console.log("Animating window animation");
        console.log(event);
        window.classList.add("maximizing-or-restore-down-animation");
        
        setTimeout(() => {
            window.classList.remove("maximizing-or-restore-down-animation");
        }, 500);
        // console.log("Window animation finished");
    })
}

function recreateElement(element)
{
    console.log(element);
    console.log(element.parentElement);
    const selectedElement = element;
    const selectedelementParent = element.parentElement;
    element.remove();
    selectedElementParent.appendChild(selectedElement);
}

function recreateElementAndRemoveTheEvents(element)
{
    console.log(element);
    console.log(element.parentElement);
    const newElement = element.cloneNode(true); // Create a clone of the element
    element.parentNode.replaceChild(newElement, element); // Replace the old element with the new one
}

function removeElementAndEvents(element)
{
    console.log(element);
    console.log(element.parentElement);
    const newElement = element.cloneNode(true); // Create a clone of the element
    element.parentNode.replaceChild(newElement, element); // Replace the old element with the new one
    newElement.remove();
}

// Add event listener for mousedown event on the draggable element
registerWindowEvents(activeWindow);
console.log(activeWindow.querySelector(".window-caption-bar input[type=\"checkbox\"]"));

menuBar.style.display = "none";
taskbar.style.display = "none";
activeWindow.style.display = "none";

function startBoot() {
    setTimeout(() => {
        boot.textContent = "Loading Azgrin OS...";
        boot.style.animation = "fade-out 1s linear";
    }, 1000);
    setTimeout(() => {
        boot.style.display = "none";
    }, 1900);
    setTimeout(() => {
        menuBar.style.display = "flex";
        taskbar.style.display = "flex";
    }, 2000);
    
    setTimeout(() => {
        activeWindow.style.display = "flex";
        activeWindow.classList.add("open-window");
        // activeWindow.style.animation = "open-window 1s cubic-bezier(0, 0, 0, 1);";
    }, 4000);
}
