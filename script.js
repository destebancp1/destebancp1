function validateForm() {
    let studnum = document.getElementById("idStudNum").value;
    let phonenum = document.getElementById('idPhoneNum').value;
    let x = document.forms["myForm"]["sname"].value;
    let y = document.forms["mtForm"]["studentnum"].value;

    phonearray =[];
    phonearray.push(y);

    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (isNaN(studnum) || studnum < 11 || studnum > 11){
        alert('Student ID Must be numeric / 11 digits')
        return false; 
    }else if(isNaN(phonenum) || phonenum.length <11 || phonenum.length > 11){
        alert('Must be numeric / 11 digits')
        return false;
    }else {alert('ok na')
    return false;}
    

  }