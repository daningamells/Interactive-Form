console.log('test test mic 123');


document.getElementById("name").focus();

function jobRole () {

var html = `<input type="text" id="other-title" name="other-title">`
$( "body > div > form > fieldset:nth-child(1)" ).append(html);
$('#other-title').hide();
}

$('#title').change(function(){
  if ($('#title option:selected').val() === "other") {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});

jobRole();
