
const statusElement = document.getElementById('status');
const courseElement = document.getElementById('course');


function setOnline() {
    statusElement.innerText = "Online";
    statusElement.className = "success-green";
}


function setOffline() {
    statusElement.innerText = "Offline";
    statusElement.className = "danger-red";
}


function toggleCourse() {
    const currentCourse = courseElement.innerText;
    
    if (currentCourse === "HTML, CSS") {
        courseElement.innerText = "Advanced JS";
    } else {
        courseElement.innerText = "HTML, CSS";
    }
}
