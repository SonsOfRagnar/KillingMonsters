import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import BestiarySource from '../bestiarySource.js';

console.log("Bestiary script running.");

console.log(BestiarySource);

// GenerateBestiaryEntryHTML("werewolf");
GenerateBestiaryContent();

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

function GenerateBestiaryContent()
{
    let bestiaryContainer = document.getElementById('bestiary-entries');
    if (bestiaryContainer == null)
    {
        console.error("Cannot find bestiary entry container when generating content.")
        return;
    }

    for (const [key, value] of Object.entries(BestiarySource.entries)) 
    {
        if (!value.active || value.name == undefined) { continue; } // Skip entries that are not set to active or which have no valid name.
        bestiaryContainer.appendChild(GenerateBestiaryEntryHTML(key));

        //console.log(key, value);
    }
}




function GenerateBestiaryEntryHTML(entryName)
{
    if (entryName == null || entryName == "") { return; }

    let entryData = Object.getOwnPropertyDescriptor(BestiarySource.entries, entryName).value;

    let entryElement = document.createElement("div");
    entryElement.id = "bestiary-" + entryData.name.toLowerCase();
    entryElement.classList.add("bestiary-entry", "anchor");

    let htmlTemplate = `
          <h2 class="bestiary-heading2">${entryData.name}</h2>

          <img src="${entryData.image}" class="img-fluid" alt="${entryData.name}">

          <h4>${entryData.size} ${entryData.type} (${entryData.category})</h4>
          <p> 
            ${ProcessArrayToParagraphs(entryData.overview)}
          </p>
          
          <h4 class="bestiary-heading4">Strengths</h4>
          <p>
            ${entryData.strengths}
          </p>
          <h4 class="bestiary-heading4">Weaknesses</h4>
          <p>
            ${entryData.weaknesses}
          </p>
          <h4 class="bestiary-heading4">Peculiarities</h4>
          <p>
            ${entryData.peculiarities}            
          </p>
          <h4 class="bestiary-heading4">Lures</h4>
          <p>
            <ul>
                ${ProcessArrayToList(entryData.lures)}
            </ul>
          </p>
          <h4 class="bestiary-heading4">Ingredients & Materials</h4>
          <p>
            <ul>
                ${ProcessArrayToList(entryData.harvesting)}
            </ul>
          </p>
          <h4 class="bestiary-heading4">About</h4>
            ${ProcessArrayToParagraphs(entryData.about)}
        `;

    entryElement.innerHTML = htmlTemplate;

    //console.log(htmlTemplate);
    return entryElement;
}

function ProcessArrayToList(arrayIn)
{
    let html = ``;

    for (let i = 0; i < arrayIn.length; i++)
    {
        // Add a new line for every list item except the first one.
        if (i != 0)
        {
            html = html + `\n<li>${arrayIn[i]}</li>`; 
        }
        else
        {
            html = html + `<li>${arrayIn[i]}</li>`;
        }
    }

    //console.log(html);
    return html;
}

function ProcessArrayToParagraphs(arrayIn)
{
    let html = ``;

    for (let i = 0; i < arrayIn.length; i++)
    {
        // Add a new line for every list item except the first one.
        if (i != 0)
        {
            html = html + `\n<p>\n  ${arrayIn[i]}\n</p>`; 
        }
        else
        {
            html = html + `<p>\n    ${arrayIn[i]}\n</p>`;
        }
    }

    //console.log(html);
    return html;
}