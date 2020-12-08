// Get the modal
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");


// Get the button that opens the modal
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


var closebtn = document.getElementsByClassName("closebtn1")[0];
var closebtn2 = document.getElementsByClassName("closebtn2")[0];
var closebtn3 = document.getElementsByClassName("closebtn3")[0];

var slides = document.getElementsByClassName("mySlides");
var slides2 = document.getElementsByClassName("mySlides2");
var slides3 = document.getElementsByClassName("mySlides3");

var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
 

var myModalArray = "";
var myStepArray = 0;

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
  myModalArray = "modal1";
  writeData();
}

closebtn.onclick = function() {
  modal1.style.display = "none";
  myModalArray = "";
  removeData();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    myModalArray = "";
    removeData();
  }
}

/* Modal 2 -> Warrior Pose */

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
    myModalArray = "modal2";
    writeData();
  }


  closebtn2.onclick = function() {
    modal2.style.display = "none";
    myModalArray = "";
    removeData();
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
      myModalArray = "";
      removeData();
    }
  }


/* Modal 3 -> Lunge Pose */

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
  myModalArray = "modal3";
  writeData();
}

closebtn3.onclick = function() {
  modal3.style.display = "none";
  myModalArray = "";
  removeData();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
    myModalArray = "";
    removeData();
  }
}


showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  myStepArray = slideIndex
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  myStepArray = n;
}

function showSlides(n) {
  var i;
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
  myStepArray = slideIndex;
}


showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
  myStepArray = slideIndex2
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
  myStepArray = n;
}

function showSlides2(n) {
  var i;
  //var dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  slides2[slideIndex2-1].style.display = "block";
  myStepArray = slideIndex2;
}

showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
  myStepArray = slideIndex3
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
  myStepArray = n;
}

function showSlides3(n) {
  var i;
  //var dots = document.getElementsByClassName("dot");
  if (n > slides3.length) {
    slideIndex3 = 1;
    myStepArray = 1;
  }
  if (n < 1) {
    slideIndex3 = slides3.length;
  }
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "block";
  myStepArray = slideIndex3;
}

/*--------------- */


function readData() {
  console.log("readData called");
  // Does this browser support local storage?
  if (typeof (Storage) !== "undefined") {
    // Read data from local storage
    myModalsStr = localStorage.lc_myModalStr;
    myStepsStr = localStorage.lc_myStepsStr;

    console.log("myModalsStr is .. " + myModalsStr);
    console.log("myStepsStr is .. " + myStepsStr);

    if (typeof (myModalsStr) !== "undefined") {
      // Convert data string into array 
      myModalArray = myModalsStr;
      myStepArray = myStepsStr;
      // Display data screen
      document.getElementById(localStorage.lc_myModalStr).style.display = "block";
      if (localStorage.lc_myModalStr === "modal1") {
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[(localStorage.lc_myStepsStr)-1].style.display = "block";
      } else if (localStorage.lc_myModalStr === "modal2") {
        for (i = 0; i < slides2.length; i++) {
          slides2[i].style.display = "none";
        }
        slides2[(localStorage.lc_myStepsStr)-1].style.display = "block";
      } else if (localStorage.lc_myModalStr === "modal3") {
        for (i = 0; i < slides3.length; i++) {
          slides3[i].style.display = "none";
        }
        slides3[(localStorage.lc_myStepsStr)-1].style.display = "block";
      }
    } else {
      // Initize data if it is empty/invalid
      myModalsStr = "";
      myStepsStr = 0;
    } 

  } else {
    // Sorry! No Web Storage support..
    /* alert('This browser does NOT support local storage'); */
  }
}

function writeData() {
  console.log("writeData called");
  if (typeof (Storage) !== "undefined") {
    // Add data to array
    // Increment array index number
    // Convert arrays into data strings
    myModalsStr = myModalArray
    myStepsStr = myStepArray
    // save data strings to local storage
    localStorage.lc_myModalStr = myModalsStr;
    localStorage.lc_myStepsStr = myStepsStr;

    //

    /* alert('Record ADDED.') */
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

function removeData() {
  console.log("removeData called");
  if (typeof (Storage) !== "undefined") {
    if (confirm('Have you mastered the pose?')) {
      localStorage.removeItem("lc_myModalStr");
      localStorage.removeItem("lc_myStepsStr");
      myModalsStr = "";
      myStepsStr = 0;
    } else {
      // Sorry! No Web Storage support..
      alert('This browser does NOT support local storage');
    }
  }
}