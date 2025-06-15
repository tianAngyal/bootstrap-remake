

const b = document.body;
const burgerIcon = document.querySelector(".hamburger-icon");
const rootElement = document.querySelector(':root');
const sidebar = document.querySelector(".sidebar");
const closeSidebarIcon = document.querySelector(".sidebar .sidebar-header .fa-xmark")
const sidebarRightChevron = document.querySelector(".sidebar .sidebar-body .sidebar-body-submenu-1 li:first-child");
const sidebarLeftChevron = document.querySelector(".sidebar .sidebar-body .sidebar-body-submenu-2 span");
const sidebarBody = document.querySelector(".sidebar .sidebar-body");


burgerIcon.addEventListener("click", () => {
    b.classList.add("body-modal")
    sidebar.classList.add("sidebar-open")
})

window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight;
    rootElement.style.setProperty("--body-height", `${windowHeight}px`);
    console.log(getComputedStyle(document.documentElement).getPropertyValue("--body-height"))

    if (windowWidth < 474) {
        sidebar.style.width = "100%"
    } else {
        sidebar.style.width = "375px"
    }

})

closeSidebarIcon.addEventListener("click", () => {
    b.classList.remove("body-modal")
    sidebar.classList.remove("sidebar-open")
})

sidebarRightChevron.addEventListener("click", () => {
    sidebarBody.classList.add("sidebar-body-showMore")
})

sidebarLeftChevron.addEventListener("click", () => {
    sidebarBody.classList.remove("sidebar-body-showMore")
})



