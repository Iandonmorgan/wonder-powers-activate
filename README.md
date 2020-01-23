Practice: Wonder Powers Activate!
The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.

Setup the following files.

powers.css

.disabled {
    background-color: gray;
}

.enabled {
    background-color: fuchsia;
    color: goldenrod;
}
index.html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Nashville Software School</title>
  <link rel="stylesheet" href="./styles/styles.css">
</head>

<body>

  <article id="powerList">
    <section id="flight" class="power disabled">
        Flight
    </section>
    <section id="mindreading" class="power disabled">
        Mind Reading
    </section>
    <section id="xray" class="power disabled">
        X-ray Vision
    </section>
  </article>

  <button id="activate-flight">Activate Flight</button>
  <button id="activate-mindreading">Activate Mind Reading</button>
  <button id="activate-xray">Active X-ray Vision</button>

  <button id="activate-all">Active All Powers</button>
  <button id="deactivate-all">Deactive All Powers</button>


  <script src="powers.js"></script>
</body>
</html>
powers.js

document.querySelector("#activate-flight").addEventListener()
Add the correct string as the first argument to addEventListener()
Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
Have your developer tools open. When you click the button, the following element...
<section id="flight" class="power disabled">
Should then look like this.

<section id="flight" class="power enabled">
Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

document.querySelector("#activate-mindreading").addEventListener()
document.querySelector("#activate-xray").addEventListener()
Once that is complete, add two more buttons

Enable All Powers
Disable All Powers
Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

Googling Tip: Adding classes to DOM components

Googling Tip: Iterating over DOM components identified with querySelectorAll

Challenges are optional exercises that you should only attempt if you have completed the practice exercises, and fully understand the concepts used in them.