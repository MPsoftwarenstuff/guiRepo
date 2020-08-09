/*
Micah Perkins | micah_perkins@student.uml.edu |
91.61 GUI Programming 1 | 8/5/2020 |
A basic javascript program for my 6th homework assignment
*/

//wait for document to load and start validating
$(document).ready(function() {
  $("#numform").validate({
    rules: {
      firstnum: {
        required: true,
        min: -50,
        max: 50
      },
      secondnum:  {
        required: true,
        min: -50,
        max: 50
      },
      thirdnum: {
        required: true,
        min: -50,
        max: 50
      },
      fourthnum: {
        required: true,
        min: -50,
        max: 50
      }
    },

    messages: {
      firstnum: {required: "Please enter a starting number for the Multiplicand"},
      secondnum:  {required: "Please enter an ending number for the Multiplicand"},
      thirdnum: {required: "Please enter a starting number for the Multiplier"},
      fourthnum: {required: "Please enter an ending number for the Multiplier"},
    },

    submitHandler: function() {
                    formcollect();
                  }
  })
});

function formcollect() {
  //collect form data
  var w = Number(document.getElementById("firstnum").value);
  var x = Number(document.getElementById("secondnum").value);
  var y = Number(document.getElementById("thirdnum").value);
  var z = Number(document.getElementById("fourthnum").value);
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
