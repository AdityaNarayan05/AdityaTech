var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function validateform() {
  var name = document.contactform.name.value;
  var subject = document.contactform.subject.value;
  var mail = document.contactform.mail.value;
  var atposition = mail.indexOf("@");
  var dotposition = mail.lastIndexOf(".");

  if (name == null || name == " ") {
    alert("Name can't be blank");
    return false;
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert("Please enter a valid e-mail address");
    return false;
  } else if (subject == null || subject == "") {
    alert("Subject can't be blank");
    return false;
  }
}
