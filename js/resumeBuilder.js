// BIO start of section

// BIO values
var bio = {
  "name" :"Tom McDonald",
  "role":"Senior Tech Project Management",
  "contacts":{
  "mobile":"203.217.1614",
  "email":"circuitworm@gmail.com",
  "github":"twmcd",
  "twitter":"@twmcd",
  "location":"Connecticut"
  },
  "welcomeMessage":"test, one, too, tree, fore",
  "skills":["ColdFusion","SQL","JavaScript"],
 // "biopic":"https://pbs.twimg.com/profile_images/444124055659347969/oN5Wy0lY.jpeg",
 "biopic":"https://pbs.twimg.com/profile_images/739907792492957696/VOxstCOG_400x400.jpg",
  "display":""
  };

// BIO formatting
var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace('%data%',bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
//var formattedSkills = HTMLskills.replace('%data%',bio.skills);

//BIO insert formatted values
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

contacts = $('#topContacts');
$(contacts).append(formattedMobile);
$(contacts).append(formattedEmail);
$(contacts).append(formattedTwitter);
$(contacts).append(formattedGithub);

$('#header').append(formattedBiopic);
$('#header').append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);
//$("#skills").append(formattedSkills);

displaySkills = function(){
  var i;
  for (i = 0; i < (bio.skills.length+1); i++) {
    var formattedSkills = HTMLskills.replace('%data%',bio.skills[i]);  
    $('#skills').append(bio.skills[i]);
    };
};

displaySkills();

// BIO end of section

// EDUCATION start of section

// EDUCATION values
var schools = {
        "name": "Worcester Polytechnic Institute",
        "location":"Worcester, MA",
        "dates":"1979 - 1982",
        "degree":"none",
        "majors":['Electrical Engineering']
        };
var onlineCourses = [
        {
        "title":"Intro to HTML and CSS",
        "school":"Udacity",
        "date":"01/01/2016",
        "url":"http://udacity.com/"
        },
        {
        "title":"JavaScript Basics",
        "school":"Udacity",
        "date":"01/01/2016",
        "url":"http://udacity.com/"
        },
        {
        "title":"Front End Web Developer Nanodegree",
        "school":"Udacity",
        "date":"01/01/2016",
        "url":"http://udacity.com/"
        }
        ];
var edu = {
        "schools":schools,
        onlineCourses:onlineCourses,
        "display":""
        };


function displayEducation(){
  //$('#education').append(HTMLworkStart);  
// EDUCATION formatting  
   $('#education').append(HTMLschoolStart);  
  var i;
  for (i = 0; i < (edu.schools.length+1); i++) {

    var formattedSchoolName = HTMLschoolName.replace('%data%',edu.schools[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',edu.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%',edu.schools[i].dates);

    $('#education').append(formattedSchoolName);
    $('#education').append(formattedSchoolDegree);
    $('#education').append(formattedSchoolDates);
    };
};



displayEducation();
/*
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/

//EDUCATION insert formatted values

//EDUCATION end of section

// WORK start of section

//WORK values
var work = {
    "jobs":[
      {"employer":"SNET",
      "title":"DA operator",
      "location":"Danbury, CT",
      "dates":"1984-1995",
      "description":"Directory Assistance Operator handling 1,500 calls a day"
      },
      {"employer":"SBC",
      "title":"Field Manager",
      "location":"Danbury, CT",
      "dates":"1995-2004",
      "description":"manager of 18 splicers responsible for 3 towns"
      },
      {"employer":"AT&T",
      "title":"web developer",
      "location":"Meriden, CT",
      "dates":"2004-2016",
      "description":"web developer for Network Operations"
      } 
      ],
    "display":""
  };

// WORK formatting
function displayWork() {    
  for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart); 

    var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description); 
    $(".work-entry:last").append(formattedWorkDescription);

    // var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
    // $(".work-entry:last").append(formattedWorkLocation);
    
    };
}

displayWork();

//WORK insert formatted values



// WORK end of section

// PROJECTS start of section

// PROJECTS values
var proj = {
      projects:[
       { "title":"Network Operations LIES"
      ,"dates":"2002-2008"
       ,"description":"NtwkOps Line Interface Enterprise System"
       ,"images":[
         "img01"
        ,"img02"
         ]
       }
       ]
     ,display:""
     };


var countries = [
  {
    "country": "UK",
    "properties": ["value1", "value2", "value3"]
  },
  {
     "country": "Spain",
     "properties": ["value4", "value5", "value6"]
  }
]

    // projects: array of objects with
    //       title: string 
    //       dates: string (works with a hyphen between them)
    //       description: string
    //       images: array with string urls
    // display: function taking no parameters
// PROJECTS formatting


// PROJECTS insert formatted values


// end of PROJECTS section  
