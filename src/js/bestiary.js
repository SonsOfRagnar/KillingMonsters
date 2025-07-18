import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import {BestiarySource, BestiaryCategories} from '../bestiarySource.js';

let betiarySidebarCol = document.getElementById("bestiary-sidebar-col");
GenerateBestiary();


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

    document.getElementById("btn-open-bestiary-offcanvas").addEventListener('click',function (e) {

        console.log("Offcanvas button clicked.");

        e.preventDefault();
        e.stopPropagation();
        bsOffcanvas.toggle();
    });

    document.getElementById("offcanvasResponsive-bestiary").addEventListener("hide.bs.offcanvas", function (e) {
        console.log("Offcanvas hide event.")

        betiarySidebarCol.classList.remove("show");
        
    });
});

function GenerateBestiary()
{
    GenerateBetiarySidebarCategories();
    GenerateBestiaryContent();
}

function GenerateBestiaryContent()
{
    for (const [key, value] of Object.entries(BestiarySource)) 
    {
        if (!value.active || value.name == undefined) { continue; } // Skip entries that are not set to active or which have no valid name.

        let sanitisedCategory = value.category.name.toLowerCase().split(" ").join("-");
        let entryContainer = document.getElementById(`bestiary-content-category-${sanitisedCategory}`);

        if (entryContainer == null){console.log(sanitisedCategory); continue;}

        entryContainer.appendChild(GenerateBestiaryEntryHTML(key));
    }
}




function GenerateBestiaryEntryHTML(entryName)
{
    if (entryName == null || entryName == "") { return; }

    let entryData = Object.getOwnPropertyDescriptor(BestiarySource, entryName).value;

    let entryElement = document.createElement("div");
    let sanitisedCreatureName = entryData.name.toLowerCase().split(" ").join("-").split("'").join("");
    entryElement.id = "bestiary-" + sanitisedCreatureName;
    entryElement.classList.add("bestiary-entry", "anchor");

    let htmlTemplate = `
    <h2 class="bestiary-heading2">${entryData.name}</h2>
    <div class="row">
        <div class="col-lg order-lg-2 test-border">
            <img src="${entryData.image}" class="img-fluid" alt="${entryData.name}">
        </div>

        <div class="col-lg order-lg-1 test-border">
            <h4>${entryData.size} ${entryData.type} (${(entryData.subcategory != null ? entryData.subcategory + " " : "") + entryData.category.name})</h4>
                ${ProcessArrayToParagraphs(entryData.overview)}
            
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
            <ul>
                ${ProcessArrayToList(entryData.lures)}
            </ul>

            <h4 class="bestiary-heading4">Ingredients & Materials</h4>
            <ul>
                ${ProcessArrayToList(entryData.harvesting)}
            </ul>
        </div>
        <div class="order-lg-3">
            <h4 class="bestiary-heading4">About</h4>
                ${ProcessArrayToParagraphs(entryData.about)}
        </div>
    </div>
    `;

    entryElement.innerHTML = htmlTemplate;
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

    return html;
}


function GenerateBestiarySidebarLinks()
{
    for (const [key, value] of Object.entries(BestiarySource)) 
    {
        if (!value.active) { continue; }

        console.log(value.category);
        let sanitisedCategory = value.category.name.toLowerCase().split(" ").join("-");
        let sanitisedCreatureName = value.name.toLowerCase().split(" ").join("-").split("'").join("");

        let sidebarCategoryList = document.getElementById(`bestiary-sidebar-${sanitisedCategory}`);

        let newListItem = document.createElement("li");
        newListItem.classList.add("bestiary-category-sublist");
        newListItem.innerHTML = `<a href="#bestiary-${sanitisedCreatureName}" class="bestiary-link rounded">${value.name}</a>` //d-inline-block

        sidebarCategoryList.appendChild(newListItem);
    }  
}


function GenerateBetiarySidebarCategories()
{
    /* Generate the sidebar cateogry header. */
    let bestiarySidebar = document.getElementById('bestiary-sidebar-list');
    bestiarySidebar.innerHTML = ``; //Empty sidebar of any placeholder data.
    let sidebarHTML = ``;

    for (const [key, value] of Object.entries(BestiaryCategories)) 
    {
        if (value.active == false) { continue; };
        let sanitisedCategoryName = value.name.toLowerCase().split(" ").join("-"); // Replace spaces with dashes to make it html/css compatible.

        let categoryHTML = `
        <li>
            <a href="#bestiary-${sanitisedCategoryName}" class="bestiary-link-heading rounded">
                ${value.pluralName}
            </a>
            <ul id="bestiary-sidebar-${sanitisedCategoryName}" class="list-unstyled">
            </ul>
        </li>
        `;

        sidebarHTML = sidebarHTML + categoryHTML;

        /* Generate category header + overview in the main bestiary content. */
        let bestiaryContainer = document.getElementById('bestiary-entries');
        let categoryContentContainer = document.createElement("div");
        bestiaryContainer.appendChild(categoryContentContainer);

        categoryContentContainer.id = `bestiary-content-category-${sanitisedCategoryName}`
        
        let categoryOverviewHTML = `
        <div id="bestiary-${sanitisedCategoryName}" class="bestiary-entry bestiary-category-entry anchor">
            <h1 class="bestiary-heading1 text-center">${value.pluralName}</h1>    
            <div class="divider bottom-arrow div-transparent"></div>    
            <div id="bestiary-overview-row" class="row">
                <div class="col-lg order-lg-1 test-border">
                    <img src="${value.image}" class="img-fluid" alt="${value.pluralName}"> 
                </div>
            
                <div class="col-lg order-lg-2 test-border">
                    ${ProcessArrayToParagraphs(value.overview)}
                </div>
            </div>
            <div class="divider top-arrow div-transparent"></div>
        </div>
        `

        categoryContentContainer.innerHTML = categoryOverviewHTML;
    }

    bestiarySidebar.innerHTML = sidebarHTML;

    GenerateBestiarySidebarLinks();
}