var footer = document.querySelector(".año-copyright"); 
var year = new Date().getFullYear(); // año actual
footer.innerHTML = "© " + year + " " + footer.innerHTML; // añade año
