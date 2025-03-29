import '../scss/styles.scss';

import * as bootstrap from 'bootstrap'

console.log("JavaScript working!");

/**
 * Toggles the OffCanvas functionality in the bestiary when pressing the button. 
 * Used to prevent issue where closing the offcanvas scrolls back to the button.
 */
document.addEventListener("DOMContentLoaded", function() {
    var myOffcanvas = document.getElementById('offcanvasResponsive-bestiary');

    // Exit function if we don't find the correct offcanvas, meaning we are on the wrong page.
    if (myOffcanvas == null)
    {
        console.log("No offCanvas found!");
        return;
    }

    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

    console.log("event listener added");

    document.getElementById("btn-open-bestiary-offcanvas").addEventListener('click',function (e) {

        console.log("Event listner triggered.");

        e.preventDefault();
        e.stopPropagation();
        bsOffcanvas.toggle();
    });

  });