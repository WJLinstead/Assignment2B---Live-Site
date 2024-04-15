var today = new Date();
var year = today.getFullYear();
var monthNum = today.getMonth();
var day = today.getDate();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentMonth = month[monthNum];
let newMonth = monthNum;
let newYear = year;

document.getElementById("year").innerHTML = year;//Displays the current year
document.getElementById("month").innerHTML = currentMonth;//Displays the current month

const dayPosition = document.getElementById(day);
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("back");

if (newMonth == monthNum){
dayPosition.style.background = "lightblue";
dayPosition.style.padding = "5px";
dayPosition.style.borderRadius = "15px";
}
else{
    dayPosition.style.background = "none";
    dayPosition.style.padding = "0";
    dayPosition.style.borderRadius = "0";
}


//On render, hide/show correct amount of days
if (newMonth==0){//January
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "visible";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==1){//February
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "hidden";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "hidden";
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "hidden";
}
if (newMonth==2){//March
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "visible";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==3){//April
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "hidden";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==4){//May
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "visible";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==5){//June
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "hidden";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==6){//July
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "visible";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==7){//August
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "visible";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==8){//September
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "hidden";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==9){//October
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "visible";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==10){//November
    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "hidden";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";
}
if (newMonth==11){//December

    let thirtyOne = document.getElementById("31"); 
    thirtyOne.style.visibility = "visible";
    let twentyNine = document.getElementById("29"); 
    twentyNine.style.visibility = "visible";
    let thirty = document.getElementById("30"); 
    thirty.style.visibility = "visible";

}

function monthUp(){
    newMonth++;
    if(newMonth >= 12){
        newMonth = 0;
        updatedMonth = month[newMonth];
        document.getElementById("month").innerHTML = newMonth;
        newYear++;
    }
    updatedMonth = month[newMonth];
    document.getElementById("year").innerHTML = newYear;
    document.getElementById("month").innerHTML = updatedMonth;
    if (newMonth==0){//January
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==1){//February
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "hidden";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "hidden";
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
    }
    if (newMonth==2){//March
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==3){//April
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==4){//May
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==5){//June
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==6){//July
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==7){//August
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==8){//September
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==9){//October
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==10){//November
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==11){//December
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth == monthNum && newYear == year){
        dayPosition.style.background = "lightblue";
        dayPosition.style.padding = "5px";
        dayPosition.style.borderRadius = "15px";
    }
    else{
        dayPosition.style.background = "none";
        dayPosition.style.padding = "0";
        dayPosition.style.borderRadius = "0";
    }
}
function monthDown(){
    newMonth--;
    if(newMonth <= -1){
        newMonth = 11;
        updatedMonth = month[newMonth];
        document.getElementById("month").innerHTML = newMonth;
        newYear--;
    }
    updatedMonth = month[newMonth];
    document.getElementById("year").innerHTML = newYear;
    document.getElementById("month").innerHTML = updatedMonth;
    if (newMonth==0){//January
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==1){//February
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "hidden";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "hidden";
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
    }
    if (newMonth==2){//March
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==3){//April
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==4){//May
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==5){//June
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==6){//July
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==7){//August
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==8){//September
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==9){//October
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==10){//November
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "hidden";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth==11){//December
        let thirtyOne = document.getElementById("31"); 
        thirtyOne.style.visibility = "visible";
        let twentyNine = document.getElementById("29"); 
        twentyNine.style.visibility = "visible";
        let thirty = document.getElementById("30"); 
        thirty.style.visibility = "visible";
    }
    if (newMonth == monthNum && newYear == year){
        dayPosition.style.background = "lightblue";
        dayPosition.style.padding = "5px";
        dayPosition.style.borderRadius = "15px";
    }
    else{
        dayPosition.style.background = "none";
        dayPosition.style.padding = "0";
        dayPosition.style.borderRadius = "0";
    }
}

