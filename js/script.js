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

$('#design').change(function(){
  if ($('#design option:selected').val() === "js puns") {

    $("#color > option[value='tomato'], #color > option[value='steelblue'], #color > option[value='dimgrey'] ").wrap('<span/>');
    $("#color > span > option[value='cornflowerblue'], #color > span > option[value='darkslategrey'], #color > span > option[value='gold'] ").unwrap();
  } else if ($('#design option:selected').val() === "heart js") {
    $("#color > option[value='cornflowerblue'], #color > option[value='darkslategrey'], #color > option[value='gold'] ").wrap('<span/>');
    $("#color > span > option[value='tomato'], #color > span > option[value='steelblue'], #color > span > option[value='dimgrey'] ").unwrap();
  }
else {
    $("#color > span > option[value='cornflowerblue'], #color > span > option[value='darkslategrey'], #color > span > option[value='gold'] ").unwrap();
    $("#color > span > option[value='tomato'], #color > span > option[value='steelblue'], #color > span > option[value='dimgrey'] ").unwrap();
}

});


jobRole();


$('.activities').change(function(){
totalCost = 0;
if ($("input[name='all']").is(':checked')) {
  totalCost += 200;
}

  if ($("input[name='js-frameworks']").is(':checked')) {
    totalCost += 100;
}

    if ($("input[name='js-libs']").is(':checked')) {
      totalCost += 100;
    }

      if ($("input[name='express']").is(':checked')) {
        totalCost += 100;
      }

        if ($("input[name='node']").is(':checked')) {
          totalCost += 100;
        }

          if ($("input[name='build-tools']").is(':checked')) {
            totalCost += 100;
          }

            if ($("input[name='npm']").is(':checked')) {
              totalCost += 100;
            }
console.log(totalCost);
});
