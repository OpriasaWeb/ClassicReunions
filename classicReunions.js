$('#submit').click(function(){

  var contractNumber = $('#contractNumber').val();
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var reunionDate = $('#reunionDate').val();
  var numberOfGuests = $('#numberOfGuests').val();
  var cocktails = $('#cocktails').val();
  var appetizers = $('#appetizers').val();
  var dinner = $('#dinner').val();
  var band = $('#band').val();

  if(!(contractNumber >= 10000 && contractNumber <= 99999)){
    alert("Contract number is invalid. Please try again.");
    $('#contractNumber').val("");
  }

  var inputDate = new Date(reunionDate);
  var getDay = parseInt(inputDate.getDate());
  var getMonth = parseInt(inputDate.getMonth() + 1);

  if((getMonth == 1 || getMonth == 3 || getMonth == 5 || getMonth == 7 || getMonth == 8 || getMonth == 10 || getMonth == 12) && !(getDay >= 1 && getDay <= 31)){
    invalidDate("Invalid date. Please try again.");
    $('#reunionDate').val("");
  } else if((getMonth == 2) && !(getDay >= 1 && getDay <= 28)){
    invalidDate("Invalid date. Please try again.");
    $('#reunionDate').val("");
  } else if((getMonth == 4 || getMonth == 6 || getMonth == 8 || getMonth == 11) && !(getDay >= 1 && getDay <= 30)){
    invalidDate("Invalid date. Please try again.");
    $('#reunionDate').val("");
  }

  var basePrice = 5 * numberOfGuests;
  if(firstName != "" || lastName != "" || reunionDate != "" || numberOfGuests != ""){

    if(appetizers == "Y" && cocktails == "Y" && dinner != "Y"){
      basePrice = basePrice + (22 * numberOfGuests);
    } 
    else if(appetizers == "Y" && dinner == "Y" && cocktails != "Y"){
      basePrice = basePrice + (24 * numberOfGuests);
    }
    else if(cocktails == "Y" && dinner == "Y" && appetizers != "Y"){
      basePrice = basePrice + (26 * numberOfGuests);
    } 
    else if(appetizers == "Y" && cocktails == "Y" && dinner == "Y"){
      basePrice = basePrice + 36;
    } 
    else if(appetizers == "Y"){
      basePrice = basePrice + 12;
    } 
    else if(cocktails == "Y"){
      basePrice = basePrice + 15;
    }
    else if(dinner == "Y"){
      basePrice = basePrice + 19;
    }

    if(band == "Y"){
      basePrice = basePrice + 500;
    }
    var contractNumber = $('#contractNumber').val();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var reunionDate = $('#reunionDate').val();
    var numberOfGuests = $('#numberOfGuests').val();
    var cocktails = $('#cocktails').val();
    var appetizers = $('#appetizers').val();
    var dinner = $('#dinner').val();
    var band = $('#band').val();

    $('#reunionsResult').append(`<p>Contract number: ${contractNumber}</p>`);
    $('#reunionsResult').append(`<p>Customer name: ${firstName} ${lastName}</p>`);

    $('#reunionsResult').append(`<p>Number of guests: ${numberOfGuests}</p>`);



  } else{
    invalidDate("Invalid entry. Please try again.");
  }

  
})