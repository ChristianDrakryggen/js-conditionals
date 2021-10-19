let fName = "";
let lName = "";
const date = new Date();

const day = date.getDay();

//const age = 4;

//if, else, else if
if (fName !== "" || lName !== "") {
  alert(fName);
}

/*
if (day === 6) {
  alert("Woooooo It's saturday!");
} else {
  alert("Noooooooooooo");
}
*/

function checkAge(age) {
  if (age >= 20) {
    alert("Systemöl");
  } else if (age >= 18) {
    alert("Dyr krogöl");
  } else if (age >= 5) {
    alert("Cola!");
  } else {
    alert("Gå och drick mjölk eller oatly!");
  }
}

//Switch

const btn = document.getElementById("fruit-button");

function myFruits(fruit) {
  //const lowerCaseFruit = fruit.toLowerCase();
  switch (fruit) {
    case ("äpple", "Äpple"):
      alert("Gott med äpplen");
      break;
    case "banan":
      alert("Wohooo banan");
      break;
    default:
      alert("Finns ingen sån frukt");
  }
}

window.addEventListener("load", function () {
  btn.addEventListener("click", function () {
    myFruits("ÄPple");
  });
});
