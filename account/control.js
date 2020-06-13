$(".login-bx form").submit(function(e){
  return false;
});


function loginAccNumber(){
  var acc_number = $("#acc-number-input").val();
  if (acc_number == "666") {
    //Load for 3 seconds
    //hide button and input
    //show button
    $("#acc-number-btn").hide();
    $("#loader").show();
    setTimeout(
      function(){
        $("#loader").hide();
        $("#acc-number-input").hide();
        $("#acc-password-input").fadeIn(3000);
        $("#acc-password-btn").fadeIn(3000);
      }, 4000
    );
  } else {
    $(".error-txt").html("Incorrect account number");
    setTimeout(
      function(){
        $(".error-txt").html("");
      }, 3000
    );
  }
}
function loginPassword(){
  var acc_password = $("#acc-password-input").val();
  if (acc_password == "777") {
    //Load for 3 seconds
    //hide button and input
    //show button
    $("#acc-password-btn").hide();
    $("#loader").show();
    setTimeout(
      function(){
        $("#loader").hide();
        $(".login-bx").hide();
        $(".account-1").show();
      }, 4000
    );
  } else {
    $(".error-txt").html("Incorrect passcode");
    setTimeout(
      function(){
        $(".error-txt").html("");
      }, 3000
    );
  }

}

$("#acc-number-input").fadeIn(3000);
$("#acc-number-btn").fadeIn(3000);


// WARNING: TRANSACTION CONTACT



// WARNING: MY CONTROLS FOR TESTING PURPOSES
$(".login-bx").show();
$(".account-1").hide();
$(".acc-home").show();
$(".acc-transaction").hide();
$(".acc-contact").hide();

function openTransaction(){
  $(".acc-home").hide();
  $(".acc-transaction").hide();
  $(".acc-contact").hide();

  $(".acc-transaction").fadeIn();
}
function openContact(){
  $(".acc-home").hide();
  $(".acc-transaction").hide();

  $(".acc-contact").fadeIn();
}

function openHome(){
  $(".acc-transaction").hide();
  $(".acc-contact").hide();

  $(".acc-home").fadeIn();
}

$(".go-back button").click(
  function(){
    openHome();
  }
);
function logout(){
  window.location.href = "account";
}
