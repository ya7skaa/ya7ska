 function getValues() {
   var lengthA = parseInt(document.getElementById('lengthA').value);
   var lengthB = parseInt(document.getElementById('lengthB').value);
   var lengthC = parseInt(document.getElementById('lengthC').value);
   var sides = [lengthA, lengthB, lengthC]


   if ((lengthA > (lengthB + lengthC)) || (lengthB > (lengthA + lengthC)) || (lengthC > (lengthA + lengthB))) {
     alert("This is an NOT a Triangle");
   } else if ((lengthA === lengthB) && (lengthB === lengthC)) {
     alert("This is an Equilateral Triangle");
   } else if ((lengthA === lengthB) || (lengthA === lengthC) || (lengthB === lengthC)) {
     alert("This is an Isosceles Triangle");
   } else if ((lengthA !== lengthB !== lengthC) && (lengthA + lengthB > lengthC) || (lengthB + lengthC > lengthA) || (lengthA + lengthC > lengthB)) {
     alert("This is an Isosceles Triangle");
   } else {
     alert("Please enter new trinagle lengths");
   }

 }
