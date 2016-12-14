
// Javascript task

// Task is to create a valid jQuery plugin,which adds placeholder(http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_placeholder)functionality for input and textarea elements.Plugin should auto initialize itself for all input and textarea elements, which have data placeholder attribute. Please note, that main aim ofthis pluginis to add placeholder functionality for browsers,which do not support it by default,like IE8, so for all other browsers this plugin should fall back to default placeholder attribute


    $.fn.fillInputPlaceholder = function() {

      //Check if placeholder functionality is supported by the browser
      if (document.createElement("input").placeholder == undefined) {

        //IF browser doesnt support placeholder (e.g. browser = IE8), launch the placeholder replacement function
        var allInputsWithPlaceholder = $(":input[placeholder]");

        //Display the placeholder text for all input and textarea fields
        $.each(allInputsWithPlaceholder, function(key, elem){
          var placeholder = $(elem).attr("placeholder")
          $(elem).val(placeholder);

          // IF the user clicks in the input field, the placeholder must disappear
          $(elem).focus(function(){
            if($(elem).val() == placeholder) {
              $(elem).val("");
            }
          });

          // IF the user clicks out and IF the input field is empty, the placeholder must appear again
          $(elem).focusout(function(){
            if($(elem).val() == ""){
              $(elem).val(placeholder);
            }
          });
        });
      }
    }
