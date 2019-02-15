function getValues() {
     var length A = parseInt(document.getElementById('length A').value);

     function getValues() {
       var lengthA = parseInt(document.getElementById('length A').value);
       var lengthB = parseInt(document.getElementById('length B').value);
       var lengthC = parseInt(document.getElementById('length C').value);
       var sides = [length A, length B, length C]

       if ((length A + length B) <= length C || (length A + length C) <= length B || (length B + length C) <= length A) {
         alert("This is not a triangle.");
       } else if ((length A === length B) && (length A === length C) && (length B === length C)) {
         alert("The values you gave, " + sides[0] + " " + sides[1] + " " + sides[2] + ", make up an equilateral triangle.");
       } else if ((length A === length C) && (length B != length A) || (length A === length B) && (length C != length A) || (length B === length C) && (length 2 != length A)) {
         alert("The values you gave, " + sides[0] + " " + sides[1] + " " + sides[2] + ", make up an isoceles triangle.");
       } else {
         alert("The values you gave, " + sides[0] + " " + sides[1] + " " + sides[2] + ", make up a scalene triangle.");
       }
     }
