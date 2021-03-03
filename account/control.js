$(" form").submit(function(e){
  return false;
});


function loginAccNumber(){
  var acc_number = $("#acc-number-input").val();
  if (acc_number == "0078954123245"||acc_number == "0078954123245 ") {
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
  if (acc_password == "gilweicher021") {
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
$(".transfer-send i").hide();
$(".login-bx").show();
$(".account-1").hide();
$(".acc-home").show();
$(".acc-transaction").hide();
$(".acc-contact").hide();
$(".acc-transfer").hide();

function openTransaction(){
  $(".acc-home").hide();
  $(".acc-transfer").hide();
  $(".acc-contact").hide();

  $(".acc-transaction").fadeIn();
}
function openContact(){
  $(".acc-home").hide();
  $(".acc-transaction").hide();
  $(".acc-transfer").hide();

  $(".acc-contact").fadeIn();
}

function openHome(){
  $(".acc-transaction").hide();
  $(".acc-transfer").hide();
  $(".acc-contact").hide();
  $(".acc-home").fadeIn();
}

function openTransfer(){
  $(".acc-transaction").hide();
  $(".acc-contact").hide();
  $(".acc-home").hide();
  $(".acc-transfer").show();
}

function transferFunds(){
   $("");
  var rName = $(".r-name").val();
  var accNumber = $(".r-acc-number").val();
  var bankName = $(".b-name").val();
  var amount = $(".wire-amount").val();

  if (rName == "" || accNumber =="" || bankName=="" || amount == "") {
    $(".transfer-send .error-txt").html("Please fill all inputs");
    setTimeout(
      function(){
        $(".transfer-send .error-txt").html("");
      }, 3000
    );
  } else {
    $(".transfer-send input").hide();
    $(".transfer-send i").show();
    setTimeout(
      function(){
        $('.transfer').show();
        $(".transfer-send i").hide();
        $(".transfer-send input").show();
      }, 3000
    );
  }
}

$(".go-back button").click(
  function(){
    openHome();
  }
);
function logout(){
  window.location.href = "account";
}

function updatedTransfer(){
  var codenumber = $('#ccode').val();
  if (codenumber != '') {
    $('head').append('<link class="google" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');
    console.log('Worked');

    $('.cheader').text('Please wait while we verify this transaction');
    $('.cbtn').hide();
    setTimeout(
    function(){
      $('.cheader').text('');
      $('.cheader-1').addClass('sshow');
      $('.preloader-wrapper').hide();
      $('.cbtn-1').show();
    },3000
  );
  }
}

function removeLink(){
  $('google').text("");
}
