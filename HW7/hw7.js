/*
Micah Perkins | micah_perkins@student.uml.edu |
91.61 GUI Programming 1 | 8/5/2020 |
A basic javascript program for my 7th homework assignment
*/
//
var tabCounter = 1;

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

  $("#table").append("<h3>You entered: " + w + ", " + x + ", " + y + ", " + z + "</h3>");

  //flip numbers if they are backwards
  if (x < w) {
    temp = w;
    w = x;
    x = temp;
  }

  if (z < y) {
    temp = y;
    y = z;
    z = temp;
  }
  //build table using bootstrap and javascript
  var table = '<table class="table table-dark"><thead><tr><th scope="col">0</th>';

  for (var a = w; a <= x; a++) {
      table += "<th scope='col'>" + a + "</th>";
  }

  table += "</tr></thead><tbody>";

  for (var b = y; b <= z; b++) {
    table += "<tr>";
    table += "<th scope='row'>" + b + "</th>";
    for (var c = w; c <= x; c++) {
      table += "<td>" + b*c + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";

  tabCounter++;
  createTab();
  var tabID = "#tabs-" + tabCounter;
  $(tabID).append(table);

}

function createTab() {
  var tabNumber = Number(tabCounter) - 1;
  $("div#tabs ul").append('<li><a href="#tabs-' + tabCounter + '">Table ' + tabNumber + '</a><span class="ui-icon-close" id="close-' + tabCounter + '">x</span></li>');

  $("#close-" + tabCounter).click(function(){
    //$("#tabs-" + tabCounter).remove();
    $(this).closest( "li" ).remove();
    $('#tabs').tabs('remove', tabCounter);
    $("div#tabs").tabs("refresh");

  })

  console.trace();
  $("div#tabs").append('<div id="tabs-' + tabCounter + '" class="container"></div>');
  $("div#tabs").tabs("refresh");
}

//Removes all tabs
function reset() {
  location.reload();
}
