

var bio = {
       "name" :"Tom McDonald"
      ,"role":"Senior Tech Project Management"
      ,"contacts":{
             "mobile":"203.217.1614"
            ,"email":"circuitworm@gmail.com"
            ,"github":"twmcd"
            ,"twitter":"@twmcd"
            ,"location":"Connecticut"
          }
      ,"welcomeMessage":"howdy partner"
      ,"skills":['ColdFusion','SQL','JavaS']
      ,"biopic":"https://pbs.twimg.com/profile_images/444124055659347969/oN5Wy0lY.jpeg"
      ,"display":""
      };


var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace('%data%',bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
var formattedSkills = 1

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

contacts = $('#topContacts');
$(contacts).append(formattedMobile);
$(contacts).append(formattedEmail);
$(contacts).append(formattedTwitter);

$('#header').append(formattedBiopic);
$('#header').append(formattedWelcomeMsg);



// end of BIO section

// start of EDUCATION section

/*
schools: array of objects with
         name: string
         location: string
         degree: string
         majors: array of strings
         dates: integer (graduation date)
         url: string
    onlineCourses: array with
         title: string
         school: string
         date: integer (date finished)
         url: string
    display: function taking no parameters
*/
var edu = {
  schools:[
    { name: "Worcester Polytechnic Institute"
    ,location:"Worcester, MA"
    ,dates:"1979 - 1982"
    ,degree:"none"
    ,majors:['Electrical Engineering']
    }]
  ,onlineCourses:[
     {title:"Front End Web Development"
         ,school:"Udacity"
         ,date:"01/01/2016"
         ,url:"http://udacity.com/"}
    ]
  ,"display":""
};


work.education = function(){
  $('#workExperience').append(HTMLworkStart);  
  
  var i;
  for (i = 0; i < work.jobs.length; i++) {

    var formattedSchoolName = HTMLschoolName.replace('%data%',edu.schools[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',edu.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%',edu.schools[i].dates);

    $('#education').append(formattedSchoolName);
    $('#education').append(formattedSchoolDegree);
    $('#education').append(formattedSchoolDates);
};

edu.display();
    
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




// end of EDUCATION section

// start of WORK section

var work = {
    jobs:[
      {"employer":"SNET"
      ,"title":"DA operator"
      ,'location':"Danbury, CT"
      ,"dates":"1984-1995"
      ,"description":"Directory Assistance Operator handling 1,500 calls a day"
      } 
      ,{"employer":"SBC"
      ,"title":"Field Manager"
      ,'location':"Danbury, CT"
      ,"dates":"1995-2004"
      ,"description":"manager of 18 splicers responsible for 3 towns"
      } 
      ,{"employer":"AT&T"
      ,"title":"web developer"
      ,'location':"Meriden, CT"
      ,"dates":"2004-2016"
      ,"description":"web developer for Network Operations"
      } 
      ]
    ,"display":""
  };




work.display = function(){
  $('#workExperience').append(HTMLworkStart);  
  
  var i;
  for (i = 0; i < work.jobs.length; i++) {

      var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[i].title);
      var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[i].location);
      var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[i].dates);
      var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[i].description);

      $('#workExperience').append(formattedWorkEmployer,formattedWorkTitle,formattedWorkLocation,formattedWorkDates,formattedWorkDescription);
    }
};

work.display();

// end of WORK section

// start of PROJECTS section

var proj = {
     projects:[
      { "title":"firstjob"
      ,"dates":"stringdate"
      ,"description":"job title"
      ,"images":[
         "img01"
        ,"img02"
        ]
      }
      ]
    ,display:""
    };
/*

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

    projects: array of objects with
          title: string 
          dates: string (works with a hyphen between them)
          description: string
          images: array with string urls
    display: function taking no parameters
*/


// end of PROJECTS section  
