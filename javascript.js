//Written by Griffin King
function input1()
{
    var inputEntered = document.getElementById("in").value;
    if(inputEntered != 6)
  {
    document.getElementById("inputGroup").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError").innerHTML="Number is not correct.";
    document.getElementById("inputError").classList.remove("hidden-message");
    document.getElementById("inputError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup").classList.add("has-error");
  }
    else if(isNaN(inputEntered))
  {
    document.getElementById("inputGroup").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError").innerHTML="Please enter a number.";
    document.getElementById("inputError").classList.remove("hidden-message");
    document.getElementById("inputError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("inputError").innerHTML=" ";
    document.getElementById("inputGroup").classList.remove("has-error");
    document.getElementById("inputGroup").classList.add("has-success");
  }
}

function input2()
{
    var inputEntered2 = document.getElementById("in2").value;
    if(inputEntered2 != 4)
  {
    document.getElementById("inputGroup2").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError2").innerHTML="Number is not correct.";
    document.getElementById("inputError2").classList.remove("hidden-message");
    document.getElementById("inputError2").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup2").classList.add("has-error");
  }
    else if(isNaN(inputEntered2))
  {
    document.getElementById("inputGroup2").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError2").innerHTML="Please enter a number.";
    document.getElementById("inputError2").classList.remove("hidden-message");
    document.getElementById("inputError2").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup2").classList.add("has-error");
  }
  else
  {
    document.getElementById("inputError2").innerHTML=" ";
    document.getElementById("inputGroup2").classList.remove("has-error");
    document.getElementById("inputGroup2").classList.add("has-success");
  }
}

function input3()
{
    var inputEntered3 = document.getElementById("in3").value;
    if(inputEntered3 != 70)
  {
    document.getElementById("inputGroup3").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError3").innerHTML="Number is not correct.";
    document.getElementById("inputError3").classList.remove("hidden-message");
    document.getElementById("inputError3").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup3").classList.add("has-error");
  }
    else if(isNaN(inputEntered3))
  {
    document.getElementById("inputGroup3").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError3").innerHTML="Please enter a number.";
    document.getElementById("inputError3").classList.remove("hidden-message");
    document.getElementById("inputError3").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup3").classList.add("has-error");
  }
  else
  {
    document.getElementById("inputError3").innerHTML=" ";
    document.getElementById("inputGroup3").classList.remove("has-error");
    document.getElementById("inputGroup3").classList.add("has-success");
  }
}

function input4()
{
    var inputEntered4 = document.getElementById("in4").value;
    if(inputEntered4 != 35)
  {
    document.getElementById("inputGroup4").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError4").innerHTML="Number is not correct.";
    document.getElementById("inputError4").classList.remove("hidden-message");
    document.getElementById("inputError4").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup4").classList.add("has-error");
  }
    else if(isNaN(inputEntered4))
  {
    document.getElementById("inputGroup4").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError4").innerHTML="Please enter a number.";
    document.getElementById("inputError4").classList.remove("hidden-message");
    document.getElementById("inputError4").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup4").classList.add("has-error");
  }
  else
  {
    document.getElementById("inputError4").innerHTML=" ";
    document.getElementById("inputGroup4").classList.remove("has-error");
    document.getElementById("inputGroup4").classList.add("has-success");
  }
}

function input5()
{
    var inputEntered5 = document.getElementById("in5").value;
    if(inputEntered5 != 20)
  {
    document.getElementById("inputGroup5").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError5").innerHTML="Number is not correct.";
    document.getElementById("inputError5").classList.remove("hidden-message");
    document.getElementById("inputError5").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup5").classList.add("has-error");
  }
    else if(isNaN(inputEntered5))
  {
    document.getElementById("inputGroup5").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError5").innerHTML="Please enter a number.";
    document.getElementById("inputError5").classList.remove("hidden-message");
    document.getElementById("inputError5").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup5").classList.add("has-error");
  }
  else
  {
    document.getElementById("inputError5").innerHTML=" ";
    document.getElementById("inputGroup5").classList.remove("has-error");
    document.getElementById("inputGroup5").classList.add("has-success");
  }
}

function input6()
{
    var inputEntered6 = document.getElementById("in6").value;
    if(inputEntered6 != 25)
  {
    document.getElementById("inputGroup6").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError6").innerHTML="Number is not correct.";
    document.getElementById("inputError6").classList.remove("hidden-message");
    document.getElementById("inputError6").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup6").classList.add("has-error");
  }
    else if(isNaN(inputEntered6))
  {
    document.getElementById("inputGroup6").classList.remove("has-success");
    //Show message that there is an error with the password...
    document.getElementById("inputError6").innerHTML="Please enter a number.";
    document.getElementById("inputError6").classList.remove("hidden-message");
    document.getElementById("inputError6").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("inputGroup6").classList.add("has-error");
  }
  else
  {
    document.getElementById("inputError6").innerHTML=" ";
    document.getElementById("inputGroup6").classList.remove("has-error");
    document.getElementById("inputGroup6").classList.add("has-success");
  }
}