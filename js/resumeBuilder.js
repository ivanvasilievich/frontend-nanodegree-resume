var formattedName = HTMLheaderName.replace("%data%", "Stan Masters");
var formattedRole = HTMLheaderRole.replace("%data%", "Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);