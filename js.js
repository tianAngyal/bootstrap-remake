

const b = document.body;
const windowWidth = window.innerWidth
const burgerIcon = document.querySelector(".hamburger-icon");
const rootElement = document.querySelector(':root');
const sidebar = document.querySelector(".sidebar");
const closeSidebarIcon = document.querySelector(".sidebar .sidebar-header .fa-xmark")
const sidebarRightChevron = document.querySelector(".sidebar .sidebar-body .sidebar-body-submenu-1 li:first-child");
const sidebarLeftChevron = document.querySelector(".sidebar .sidebar-body .sidebar-body-submenu-2 span");
const sidebarBody = document.querySelector(".sidebar .sidebar-body");
const sidebarBodyUl = document.querySelectorAll(".sidebar-body ul")


document.addEventListener("DOMContentLoaded", () => {
    const windowWidth = window.innerWidth;
    const sidebar = document.querySelector(".sidebar");

    console.log("window.innerWidth:", window.innerWidth);


    if (windowWidth < 474) {
        sidebar.style.width = "100%"
        requestAnimationFrame(() => {
            const sideBarWidthOffset = sidebar.offsetWidth;
            sidebarBodyUl.forEach(e => {
                e.style.width = `calc(${sideBarWidthOffset}px - 2em)`;
            });
        });
    }
    else {
        sidebar.style.width = "375px"
        sidebarBodyUl.forEach(e => e.style.width = `calc(375px - 2em)`)
    }
})


burgerIcon.addEventListener("click", () => {
    b.classList.add("body-modal")
    sidebar.classList.add("sidebar-open")
})

window.addEventListener("resize", () => {
    const sidebar = document.querySelector(".sidebar");
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight;
    rootElement.style.setProperty("--body-height", `${windowHeight}px`);
    console.log(getComputedStyle(document.documentElement).getPropertyValue("--body-height"))
    console.log(`širka sidebaru je ${sidebar.offsetWidth}`)
    const sideBarWidthOffset = sidebar.offsetWidth
    if (windowWidth < 474) {
        sidebar.style.width = "100%"
        sidebarBodyUl.forEach(e => e.style.width = `calc(${sideBarWidthOffset}px - 2em)`)
        // sidebarBodyUl.style.width = `calc(${sideBarWidthOffset}px - 2em)`
    } else {
        sidebar.style.width = "375px"
        sidebarBodyUl.forEach(e => e.style.width = `calc(375px - 2em)`)
        // sidebarBodyUl.style.width = `calc(375px - 2em)`
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



