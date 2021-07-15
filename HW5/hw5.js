/*
*Micah Perkins
*HW5 Javascript File
*/
function formcollect() {
  //collect form data
  var w = document.getElementById("firstnum").value;
  var x = document.getElementById("secondnum").value;
  var y = document.getElementById("thirdnum").value;
  var z = document.getElementById("fourthnum").value;
  var temp = 0;

  document.write("<h2>" + "You entered: " + w + ", " + x + ", " + y + ", " + z + "</h2>");
  //build table using bootstrap and javascript
  document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"><center><table class="table table-dark"><thead><tr>');
  document.write("<th scope='col'></th>");
  if (x < w) {
    temp = w;
    w = x;
    x = temp;
  }
  for (var a = w; a <= x; a++) {
      document.write("<th scope='col'>" + a + '</th>');
  }
  document.write("</tr></thead><tbody>");
  if (z < y) {
    temp = y;
    y = z;
    z = temp;
  }
  for (a = y; a <= z; a++) {
    document.write("<tr>");
    document.write("<th scope='row'>" + a + "</th>");
    for (b = w; b <= x; b++) {
      document.write("<td>" + a*b + "</td>");

    }
    document.write("</tr>");
  }
  document.write("</table></center>");
}
