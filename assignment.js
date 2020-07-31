// feetToMile
function feetToMile(feet){
    var mile = feet/5280;// 1 mile = 5280ft
    return mile;
}
// var result = feetToMile(144);
// console.log(result);
// woodCalculator
function woodCalculator(length, width, thickness){
   var boardFeetInch = length*width*thickness;//All of the dimensions in this formula are in inches
   var boardFeet = boardFeetInch/144;
   var totalCost = boardFeet * 18;// 1 boardfeet cost is $18
   return totalCost;
}
// var totalCost = woodCalculator(9, 5, 1.5);
// console.log(totalCost + " USD");

//brickCalculator
function brickCalculator(length, width, thickness, ThicknessOfMortar, ThicknessOfWall){
    var VolOfOneBrickWithMortar = (length +ThicknessOfMortar) * (width + ThicknessOfMortar) * (thickness + ThicknessOfMortar);
    var VolOfBrickWork = ThicknessOfWall * 144;// 1 sqft = 144 inch;
    var NumOfBrickInOneSqft = VolOfBrickWork / VolOfOneBrickWithMortar;
    return NumOfBrickInOneSqft;
}

// var NumOfBrickInOneSqftResult = brickCalculator(9 ,4.5, 3, 0.4, 9);
// console.log(NumOfBrickInOneSqftResult + " No's without wastage");

// tinyFriend 
function tinyFriend(nameOfFriends){
    var min = nameOfFriends[0];
    for(var i = 0; i < nameOfFriends.length; i++){
        
        if (nameOfFriends[i].length < min.length){
            min = nameOfFriends[i];
        } 
        }
        return min;
    }
//  var min = tinyFriend(["Sumaiya","Eva","Ripa", "Sumon", "Alamin","Akash","Khairul"]);
//  console.log(min);