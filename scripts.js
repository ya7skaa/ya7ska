 function getValues() {
       var lengthA = parseInt(document.getElementById('length A').value);
       var lengthB = parseInt(document.getElementById('length B').value);
       var lengthC = parseInt(document.getElementById('length C').value);
       var sides = [length A, length B, length C]

       if ((lengthA ===lengthB) && (lengthB===lengthC)) {
     alert("This is an Equilateral Triangle");
   } else if ((lengthA > (lengthB + lengthC)) || (lengthB > (lengthA + lengthC)) || (lengthC > (lengthA + lengthB))) {
     alert("This is an NOT a Triangle");
   } else if ((lengthA === lengthB) || (lengthA === lengthC) || (lengthB === lengthC)) {
     alert("This is an Isosceles Triangle");
   } else if ((lengthA !== lengthB !== lengthC) && (lengthA + lengthB > lengthC) || (lengthB + lengthC > lengthA) || (lengthA + lengthC > lengthB)) {
   alert("This is an Isosceles Triangle");
 } else {
   alert("Please enter new trinagle lengths");
 }

}
