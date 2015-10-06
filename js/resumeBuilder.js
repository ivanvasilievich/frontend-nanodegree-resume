var formattedName = HTMLheaderName.replace("%data%", "Stan Masters");
var formattedRole = HTMLheaderRole.replace("%data%", "Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["Very" , "Good" , "At" , "Nothing"];
var bio = {
    "name":"Stan",
    "role":"Developer",
    "contacts":{
        "mobile":"12345",
        "email":"lol@me",
        "github":"stan.me",
        "twitter":"shuttit",
        "location":"Glesgwee"
    },
    "welcomeMessage":"welcome to my page!",
    "skills":skills,
    "image":"images/fry.jpg"
};
$("#main").append(bio.name);
var work = {
    "name":"Exodus",
    "post":"enigineer"
};
var education = {
    "name":"University",
    "type":"Masters"
};