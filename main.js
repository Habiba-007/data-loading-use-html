

// loading email number with ui=> 
const email = document.getElementById('email');
email.innerHTML = change_data.email;


// loading cell number with ui -> 
const cell = document.getElementById('cell');
cell.innerHTML = change_data.cell;



// loading logo with ui 
const logoELem = document.getElementById('logo');
logoELem.setAttribute("src", change_data.logo);
// console.log(logo)


// loading subtitle with ui -> 
const subtitle = document.getElementById('subtitle');
subtitle.innerHTML = change_data.subtitle;



// loading copyright adress with ui =>
const copyElement = document.getElementById('copyright');
copyElement.innerHTML = change_data.copyRight;



// ->now social icons data loading here ->
let social_menu = "";
socialIcons.forEach((items, index) => {
    social_menu +=`<li><a href="${items.link}"><i class="${items.name}"></i></a></li>`
})

//-> now finally social icons loading with ui->
const socialMedia = document.getElementById('social_media');
socialMedia.innerHTML = social_menu;

 