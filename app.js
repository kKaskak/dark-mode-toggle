const html = document.documentElement // targeting the html
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', function (e) {
    const attribute = html.getAttribute('data-theme')
    html.setAttribute('data-theme', 'dark');
    if (attribute === "dark") {
        html.setAttribute('data-theme', 'light');
    }
});


// ---- or 


// const checkBox = document.querySelector (' input[name="theme"]');

// let htmlElement = document.documentElement;

// checkBox.addEventListener("click", function () {
//     if (checkBox.checked) {
//     htmlElement.classList.toggle("transition");
//     htmlElement.setAttribute("data-theme" , "dark");
//     } else {
//         htmlElement.classList.toggle("transition");
//         htmlElement.setAttribute("data-theme", "light");
//     }
// })