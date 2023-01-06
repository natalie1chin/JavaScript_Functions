
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(counter){
if (counter <0){
    counter = Math.abs(counter);
}
    for(i=1;i<=counter;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}
printOdds(23);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function greetings (name,age){
let aboveSixteen ="Congrats "+ name + ", you can drive!";
let belowSixteen="Sorry "+ name + ", you need to wait until you're 16";
if (!age || !name){
    console.log("Please input a valid age and valid name")
}else if (age>=16){
    console.log(aboveSixteen);
} else {
    console.log(belowSixteen);
}
}
greetings("Natalie", 15);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuad (x,y){
    if (x>0 && y>0){
        console.log(`(${x}, ${y}) is in Quadrant 1`);
    } else if (x>0 && y<0){
        console.log(`(${x}, ${y}) is in Quadrant 4`);
    } else if (x<0 && y<0){
        console.log(`(${x}, ${y}) is in Quadrant 3`);
    } else if (x<0 && y>0){
        console.log(`(${x}, ${y}) is in Quadrant 2`);
    }
}
whichQuad(-2,2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function whichTri (a,b,c){
    if (a+b<=c || a+c<=b || b+c<=a){
        console.log("Invalid triangle");
    } else{
        if (a==b && b==c){
            console.log("this is an equalateral triangle");
        } else if (a==b || a == c || b==c){
            console.log("this is an isosceles triangle");
        } else{
            console.log("this is a scalene triangle");
        }
    }
}
whichTri(2,2,6);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataStatus(planLimit,day,usage){
    let avgPerDay=usage/day;
    let idealAvgPerDay = planLimit/30;
    let daysLeft=30-day;
    let howMuchLeft=planLimit-usage;
    let howMuchToUse=(planLimit-usage)/(30-day);
    console.log (`${day} days used, ` + daysLeft + " days remaining");
    console.log("Average daily use: " + avgPerDay +"GB/day");
    if (avgPerDay > idealAvgPerDay){
        if (usage==planLimit){
            console.log("You used all your data")
        } else{
        console.log(`You are EXCEEDING your average daily use ${avgPerDay} GB/day.`);
        console.log("To stay below your plan, use no more than " +howMuchToUse +" GB");
    }
    } 
    if (avgPerDay < idealAvgPerDay){
        console.log("You are BELOW your average daily use (" + avgPerDay + " GB/day.");
        console.log("To stay below your plan, use no more than " +howMuchToUse +" GB");
    }
    if (avgPerDay == idealAvgPerDay){
        console.log("You are RIGHT ON your average daily use (" + avgPerDay + " GB/day.");
        console.log("To stay below your plan, use no more than " +howMuchToUse +" GB");
    }
}

dataStatus(500,15,150);


