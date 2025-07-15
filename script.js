const burger = document.querySelector(".burger")
const headerNav = document.querySelector(".header_nav")
const headerList = document.querySelector(".header_list")

burger.onclick = () =>{
    burger.classList.toggle("active");
    headerNav.classList.toggle("active");
    headerList.classList.toggle("active");
}