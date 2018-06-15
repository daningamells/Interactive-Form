document.getElementById("name").focus();
$('#colors-js-puns').hide(); // Hide the colours drop-down

function jobRole() {

    var html = `<input type="text" id="other-title" name="other-title">`; //html to add "Other" field
    $("body > div > form > fieldset:nth-child(1)").append(html); // appending above html
    $('#other-title').hide(); // hide "Other" field by default
}

$('#title').change(function() {
    if ($('#title option:selected').val() === "other") { // Showing the "Other" field
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});

$('#design').change(function() {
    if ($('#design option:selected').val() === "js puns") { // Check if the design drop-down is js-puns

        $("#color > option[value='tomato'], #color > option[value='steelblue'], #color > option[value='dimgrey'] ").wrap('<span/>'); // Hiding options based on design selection
        $("#color > span > option[value='cornflowerblue'], #color > span > option[value='darkslategrey'], #color > span > option[value='gold'] ").unwrap();
    } else if ($('#design option:selected').val() === "heart js") {
        $("#color > option[value='cornflowerblue'], #color > option[value='darkslategrey'], #color > option[value='gold'] ").wrap('<span/>');
        $("#color > span > option[value='tomato'], #color > span > option[value='steelblue'], #color > span > option[value='dimgrey'] ").unwrap();
    } else {
        $("#color > span > option[value='cornflowerblue'], #color > span > option[value='darkslategrey'], #color > span > option[value='gold'] ").unwrap();
        $("#color > span > option[value='tomato'], #color > span > option[value='steelblue'], #color > span > option[value='dimgrey'] ").unwrap();

    }

    if ($('#design option:selected').val() != "Select Theme") { // Showing the options if no selection is made
        $('#colors-js-puns').show();

    } else {
        $('#colors-js-puns').hide();

    }

});

jobRole();

$('.activities').change(function() {
    totalCost = 0; // Setting basket value to 0
    if ($("input[name='all']").is(':checked')) { // Check if the input is selected
        totalCost += 200; // Add money to totalCost if selected
    }

    if ($("input[name='js-frameworks']").is(':checked')) {
        totalCost += 100;
        if ($('body > div > form > fieldset.activities > label:nth-child(5) > span').length < 1) { // Checking if error message is displayed
            $("input[name='express']").prop("disabled", true); // Disable clashing input
            $("body > div > form > fieldset.activities > label:nth-child(5)").append(`<span class='class'> -  Course Clash</span>`); // Appending clash message
        }
    } else if ($('body > div > form > fieldset.activities > label:nth-child(3) > input[type="checkbox"]').not(':checked').length > 0) {
        $("input[name='express']").prop("disabled", false); // Enable input if de-selected
        $('body > div > form > fieldset.activities > label:nth-child(5) > span:nth-child(2)').remove(); // Remove clash message
    }

    if ($("input[name='js-libs']").is(':checked')) {
        totalCost += 100;
        if ($('body > div > form > fieldset.activities > label:nth-child(6) > span').length < 1) {
            $("input[name='node']").prop("disabled", true);
            $("body > div > form > fieldset.activities > label:nth-child(6)").append(`<span class='class'> -  Course Clash</span>`);
        }
    } else if ($('body > div > form > fieldset.activities > label:nth-child(4) > input[type="checkbox"]').not(':checked').length > 0) {
        $("input[name='node']").prop("disabled", false);
        $('body > div > form > fieldset.activities > label:nth-child(6) > span:nth-child(2)').remove();
    }

    if ($("input[name='express']").is(':checked')) {
        totalCost += 100;
        if ($('body > div > form > fieldset.activities > label:nth-child(3) > span').length < 1) {
            $("input[name='js-frameworks']").prop("disabled", true);
            $("body > div > form > fieldset.activities > label:nth-child(3)").append(`<span class='class'> -  Course Clash</span>`);
        }
    } else if ($('body > div > form > fieldset.activities > label:nth-child(5) > input[type="checkbox"]').not(':checked').length > 0) {
        $("input[name='js-frameworks']").prop("disabled", false);
        $('body > div > form > fieldset.activities > label:nth-child(3) > span:nth-child(2)').remove();
    }

    if ($("input[name='node']").is(':checked')) {
        totalCost += 100;
        if ($('body > div > form > fieldset.activities > label:nth-child(4) > span').length < 1) {
            $("input[name='js-libs']").prop("disabled", true);
            $("body > div > form > fieldset.activities > label:nth-child(4)").append(`<span class='class'> -  Course Clash</span>`);
        }
    } else if ($('body > div > form > fieldset.activities > label:nth-child(6) > input[type="checkbox"]').not(':checked').length > 0) {
        $("input[name='js-libs']").prop("disabled", false);
        $('body > div > form > fieldset.activities > label:nth-child(4) > span:nth-child(2)').remove();
    }

    if ($("input[name='build-tools']").is(':checked')) {
        totalCost += 100;
    }

    if ($("input[name='npm']").is(':checked')) {
        totalCost += 100;
    }
    var price = `<span class='price'>Total cost: ${totalCost}</span>`; // Creating basket
    $('.price').empty(); // Empty basket on each update
    $('.activities').append(price); // Append basket
});

$('#payment > option:nth-child(2)').attr('selected', true); // Pre-selecting credit card payment
$('body > div > form > fieldset:nth-child(4) > div:nth-child(5) > p').hide();
$('body > div > form > fieldset:nth-child(4) > div:nth-child(6) > p').hide();
$('#payment > option:nth-child(1)').prop("disabled", true);

$('body > div > form > fieldset:nth-child(4)').change(function() { // Listener on payment type
    if ($('#payment > option:nth-child(3)').is(':selected')) { // Checking if option is selected
        $('body > div > form > fieldset:nth-child(4) > div:nth-child(5) > p').show(); // Hide / Show options
        $('body > div > form > fieldset:nth-child(4) > div:nth-child(6) > p').hide();
        $('#credit-card').hide();

    } else if ($('#payment > option:nth-child(4)').is(':selected')) {
        $('body > div > form > fieldset:nth-child(4) > div:nth-child(5) > p').hide();
        $('body > div > form > fieldset:nth-child(4) > div:nth-child(6) > p').show();
        $('#credit-card').hide();

    } else if ($('#payment > option:nth-child(2)').is(':selected')) {
        $('body > div > form > fieldset:nth-child(4) > div:nth-child(5) > p').hide();
        $('body > div > form > fieldset:nth-child(4) > div:nth-child(6) > p').hide();
        $('#credit-card').show();

    }

});

$("body > div > form > button").click(function(event) { // Listener on submit button

    if ($('#payment > option:nth-child(2)').is(':selected')) { // Only if card option is selected

        if ($('#name').val().length < 1) { // Checking if Name is empty
            event.preventDefault(); // Preventing submit action
            if ($('body > div > form > fieldset:nth-child(1) > label:nth-child(2) > div > p.error').length < 1) { // Checking if validation is showing
                var nameError = `<div><p class='error'>*Please enter a name</p></div>`; // Creating error message
                $('body > div > form > fieldset:nth-child(1) > label:nth-child(2)').append(nameError); // Append error message
            }
        } else {
            $('body > div > form > fieldset:nth-child(1) > label:nth-child(2) > div > p').remove(); // Remove error if de-selected

        }

        if (!validateEmail($('#mail').val()) || $('#mail').val().length < 1) {
            event.preventDefault();
            if ($('body > div > form > fieldset:nth-child(1) > label:nth-child(4) > div:nth-child(1) > p.error').length < 1) {
                var emailError = `<div><p class='error'>*Please enter a valid email</p></div>`
                $('body > div > form > fieldset:nth-child(1) > label:nth-child(4)').append(emailError);
            }
        } else {
            $('body > div > form > fieldset:nth-child(1) > label:nth-child(4) > div:nth-child(1) > p.error').remove();

        }

        if ($('.activities').find('input[type=checkbox]:checked').length < 1) {
            event.preventDefault();
            if ($('body > div > form > fieldset.activities > legend > div > p.error').length < 1) {
                var selectError = `<div><p class='error'>*Please select at least one activity</p></div>`
                $('body > div > form > fieldset.activities > legend').append(selectError);
            }
        } else {
            $('body > div > form > fieldset.activities > legend > div > p.error').remove();

        }

        if ($('#cc-num').val().length < 13 || $('#cc-num').val().length > 16 || $.isNumeric($('#cc-num').val()) === false) {
            event.preventDefault();
            if ($('#credit-card > div.col-6.col > label > div > p.error').length < 1) {
                var ccError = `<div><p class='error'>*Please enter a card number</p></div>`
                $('#credit-card > div.col-6.col > label').append(ccError);
            }
            if ($('#cc-num').val().length > 0) {
                $('#credit-card > div.col-6.col > label > div > p').text("*Please enter a number that is between 13 and 16 digits long");

            } else if ($('#cc-num').val().length === 0) {
                $('#credit-card > div.col-6.col > label > div > p').text("*Please enter a card number");

            }

        }

        if ($('#cc-num').val().length > 12 && $('#cc-num').val().length < 17 && $.isNumeric($('#cc-num').val()) === true) {
            $('#credit-card > div.col-6.col > label > div > p').remove();


        }

        if ($('#zip').val().length < 5 || $('#zip').val().length > 5 || $.isNumeric($('#zip').val()) === false) {
            event.preventDefault();
            if ($('#credit-card > div:nth-child(2) > label > div > p.error').length < 1) {
                var pcError = `<div><p class='error'>*Please check the Zip Code</p></div>`;
                $('#credit-card > div:nth-child(2) > label').append(pcError);
            }
        } else {
            $('#credit-card > div:nth-child(2) > label > div > p.error').remove();

        }

        if ($('#cvv').val().length < 3 || $('#cvv').val().length > 3 || $.isNumeric($('#cvv').val()) === false) {
            event.preventDefault();
            if ($('#credit-card > div:nth-child(3) > label > div > p.error').length < 1) {
                var cvvError = `<div><p class='error'>*Please check the CVV number</p></div>`;
                $('#credit-card > div:nth-child(3) > label').append(cvvError);
            }
        } else {
            $('#credit-card > div:nth-child(3) > label > div > p.error').remove();

        }
    }
});

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

$("#zip").keyup(function() { // Run on keyup of feild
    if ($('#zip').val().length < 5 || $('#zip').val().length > 5 || $.isNumeric($('#zip').val()) === false) {
        event.preventDefault();
        if ($('#credit-card > div:nth-child(2) > label > div > p.error').length < 1) {
            var pcError = `<div><p class='error'>*Please check the Zip Code</p></div>`
            $('#credit-card > div:nth-child(2) > label').append(pcError);
        }
    } else {
        $('#credit-card > div:nth-child(2) > label > div > p.error').remove();

    }
});


$("#cc-num").keyup(function() {
    if ($('#cc-num').val().length < 13 || $('#cc-num').val().length > 16 || $.isNumeric($('#cc-num').val()) === false) {
        event.preventDefault();
        if ($('#credit-card > div.col-6.col > label > div > p.error').length < 1) {
            var ccError = `<div><p class='error'>*Please enter a card number</p></div>`
            $('#credit-card > div.col-6.col > label').append(ccError);
        }
        if ($('#cc-num').val().length > 0) {
            $('#credit-card > div.col-6.col > label > div > p').text("*Please enter a number that is between 13 and 16 digits long");

        } else if ($('#cc-num').val().length === 0) {
            $('#credit-card > div.col-6.col > label > div > p').text("*Please enter a card number"); // Creating dynamic messaging that will update on each key-up

        }

    }

    if ($('#cc-num').val().length > 12 && $('#cc-num').val().length < 17 && $.isNumeric($('#cc-num').val()) === true) {
        $('#credit-card > div.col-6.col > label > div > p').remove();


    }
});

$("#cvv").keyup(function() {
    if ($('#cvv').val().length < 3 || $('#cvv').val().length > 3 || $.isNumeric($('#cvv').val()) === false) {
        event.preventDefault();
        if ($('#credit-card > div:nth-child(3) > label > div > p.error').length < 1) {
            var cvvError = `<div><p class='error'>*Please check the CVV number</p></div>`;
            $('#credit-card > div:nth-child(3) > label').append(cvvError);
        }
    } else {
        $('#credit-card > div:nth-child(3) > label > div > p.error').remove();

    }
});
