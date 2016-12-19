
 var jobSelect = new Array();
 jobSelect["Doctor"]=1;
 jobSelect["Entrepreneur"]=3;
 jobSelect["Man Cheetah"]=4;
 jobSelect["Artist"]=2;
 
 var cheeseSelect= new Array();
 cheeseSelect["None"]=0;
 cheeseSelect["AA"]=3;
 cheeseSelect["NE"]=4;
 cheeseSelect["OW"]=2;
 cheeseSelect["LI"]=1;
 
 var foodSelect= new Array();
 foodSelect["yellow"]=1;
 foodSelect["rum"]=4;
 foodSelect["steak"]=2;
 foodSelect["cream"]=3;
 

 //Radio Functionality
function getJob()
{  
    var getJob=0;
    var theForm = document.forms["myForm"];
    var selectedJob = theForm.elements["job"];
    for(var i = 0; i < selectedJob.length; i++)
    {
        if(selectedJob[i].checked)
        {
            getJob = jobSelect[selectedJob[i].value];
            break;
        }
    }
    return getJob;
}

//Dropdown Functionality
function getCheese()
{
    var getCheese=0;
    var theForm = document.forms["myForm"];
    var selectedCheese = theForm.elements["cheese"];
    getCheese = cheeseSelect[selectedCheese.value];
    return getCheese;
}

//Checkbox Functionality
function getMagnets()
{
    var getMagnets=0;
    var theForm = document.forms["myForm"];
    var magnets = theForm.elements["magnets"];
    if(magnets.checked==true)
    {
        getMagnets=1;
    }
    return getMagnets;
}

function getSnail()
{
    var getSnail=0;
    var theForm = document.forms["myForm"];
    var snail = theForm.elements["snail"];
    if(snail.checked==true){
        getSnail=-1;
    }

    return getSnail;
}

function getRobe() {
    var getRobe = 0;
    var theForm = document.forms["myForm"];
    var robe = theForm.elements["robe"];
    if (robe.checked == true) {
        getRobe = -1;
    }
    return getRobe;
}

function getGhouls() {
    var getGhouls = 0;
    var theForm = document.forms["myForm"];
    var ghouls = theForm.elements["ghouls"];
    if (ghouls.checked == true) {
        getGhouls = 1;
    }
    return getGhouls;
}
 function getRange(){
     
 }

 function getFood()
 {
     var getFood=0;
     var theForm = document.forms["myForm"];
     var selectedFood = theForm.elements["food"];
     for(var i = 0; i < selectedFood.length; i++)
     {
         if(selectedFood[i].checked)
         {
             getFood = foodSelect[selectedFood[i].value];
             break;
         }
     }
     return getFood;
 }

 var score =0;
 function calculateTotal() {
     score = getJob() + getCheese() + getMagnets() + getSnail() + getRobe() + getGhouls() + getFood();
     //display the result
     var divobj = document.getElementById('totalScore');
     divobj.style.display = 'block';
     divobj.innerHTML = score;


     function hideTotal() {
         var divobj = document.getElementById('totalScore');
         divobj.style.display = 'none';
     }
 }



function results() {
    if (score <= 3) {
        alert("You're more of a loner, a Rickety Cricket type!");
    } else if ((score >= 4 && score <= 7)) {
        alert("Time to grab a robe and a glass of warm milk... You are part of the McPoyle Clan!");
    }
    else {
        alert("Get ready for some scheming... because the gang needs a wild card like you!");


    }
}