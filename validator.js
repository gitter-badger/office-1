function namecheck() {
  var string1=document.myForm.name.value
  if (string1 === ""){
      document.getElementById('name').style.borderColor = "red";
      document.getElementById("error_name").innerHTML = "enter name";
  } else {
    document.getElementById("error_name").innerHTML = "";
    document.getElementById('name').style.borderColor = "#7ac9b7";
  }
}
function emailcheck(){
    var string1=document.myForm.email.value.toLowerCase();
    if (string1.indexOf("@")==-1 || string1.indexOf(".")==-1){
      document.getElementById('email').style.borderColor = "red";
      document.getElementById("error_email").innerHTML = "enter valid email address";
    }else {
      document.getElementById("error_email").innerHTML = "";
      document.getElementById('email').style.borderColor = "#7ac9b7";
    }
}
function datecheck() {
  var string1=document.myForm.date.value
  if (string1 === ""){
      document.getElementById('date').style.borderColor = "red";
      document.getElementById("error_date").innerHTML = "enter date";
  } else {
    document.getElementById("error_date").innerHTML = "";
    document.getElementById('date').style.borderColor = "#7ac9b7";
  }
}
function hobbiescheck() {
  var checkbox = document.getElementsByName('hobbies[]');
  var ln = 0;
  for(var i=0; i< checkbox.length; i++) {
      if(checkbox[i].checked)
          ln++
  }
  if(ln === 0) {
    document.getElementById("error_hobbies").innerHTML = "enter atleat one hobby date";
  }
}
function addresscheck() {
  var string1=document.myForm.address.value
  if (string1 === ""){
      document.getElementById('address').style.borderColor = "red";
      document.getElementById("error_address").innerHTML = "enter address";
  } else {
    document.getElementById("error_address").innerHTML = "";
    document.getElementById('address').style.borderColor = "#7ac9b7";
  }
}
function selectcheck() {
    var x = document.getElementById("occ").value;
     // document.getElementById("error_select").innerHTML = "Error"  + x;
    if (x === "") {
      document.getElementById("error_select").innerHTML = "Please select Occupation ";
    } else {
      document.getElementById("error_select").innerHTML = "";
    }
}
function whichElement(e) {
    var targ;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ=e.target;
    } else if (e.srcElement) {
        targ=e.srcElement;
    }
    var tname;
    tname = targ.tagName;
    alert("here are the terms and condtion");
}
