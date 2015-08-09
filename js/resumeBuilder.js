

var bio = {
       name :"Tom McDonald"
      ,role:"Senior Tech Project Management"
      ,contacts:{
             mobile:"203.217.1614"
            ,email:"circuitworm@gmail.com"
            ,github:"twmcd"
            ,twitter:"@twmcd"
            ,location:"Connecticut"
      ,welcomeMessage:"howdy partner"
      ,skills:['skillone','skilltoo','skilltree']
      ,biopic:"urlofpicture"
      ,display:""
      }
};

/*
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
*/

var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);

$('#header').append(formattedName);
$('#header').append(formattedRole);
contacts = $('#topContacts').parents('#header')
$(contacts).append(formattedMobile);
$(contacts).append(formattedEmail);
$(contacts).append(formattedTwitter);









