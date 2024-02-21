function add_quickref_item(parent, data, type) {
    // Set default values for icon, subtitle, and title if not provided in the data object
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";
    var optional = data.optional || "false"; // Get the optional property from the data object
    // Create a new 'div' element for the quick reference item
    var item = document.createElement("div");
    // Add classes to the item element
    item.className = "item itemsize";

    // Create the item-icon element
    var itemIcon = document.createElement("div");
    itemIcon.className = "item-icon iconsize icon-" + icon;
    item.appendChild(itemIcon);

    // Create the item-text-container element
    var itemTextContainer = document.createElement("div");
    itemTextContainer.className = "item-text-container text";

    // Create the item-title element
    var itemTitle = document.createElement("div");
    itemTitle.className = "item-title";
    itemTitle.textContent = title;
    itemTextContainer.appendChild(itemTitle);

    // Create the item-desc element
    var itemDesc = document.createElement("div");
    itemDesc.className = "item-desc";
    itemDesc.textContent = subtitle;
    itemTextContainer.appendChild(itemDesc);

    // Append the item-text-container to the item element
    item.appendChild(itemTextContainer);

    // Get the background color of the parent's parent's parent element
    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    // Attach a click event to the item, which triggers the show_modal function with data, color, and type parameters
    item.onclick = function () {
        show_modal(data, color, type);
    }
    // Set the title attribute of the item div to the value of the optional property
    item.setAttribute("title", optional);
    // Append the created item to the specified parent element
    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black";

    // Add a class to the body to simulate $("body").addClass("modal-open");
    document.body.classList.add("modal-open");

    // Get references to the modal and its elements using document.getElementById
    var modal = document.getElementById("modal");
    var modalBackdrop = document.getElementById("modal-backdrop");
    var modalContainer = document.getElementById("modal-container");
    var modalTitle = document.getElementById("modal-title");
    var modalSubtitle = document.getElementById("modal-subtitle");
    var modalReference = document.getElementById("modal-reference");
    var modalBullets = document.getElementById("modal-bullets");

    // Set styles and content using standard DOM properties
    modal.classList.add("modal-visible");
    modalBackdrop.style.height = window.innerHeight + "px";
    modalContainer.style.backgroundColor = color;
    modalContainer.style.borderColor = color;
    modalTitle.innerHTML = title + "<span class=\"float-right\">" + type + "</span>";
    modalSubtitle.textContent = subtitle;
    modalReference.textContent = reference;

    // Create HTML for bullets using map and join
    var bulletsHTML = bullets.map(function (item) {
        return "<p class=\"fonstsize\">" + item + "</p>";
    }).join("\n<hr>\n");

    // Set the innerHTML of modalBullets
    modalBullets.innerHTML = bulletsHTML;
}

function hide_modal(event) {
    var modalContainer = document.getElementById("modal-container");

    // Check if the clicked element is outside of the modal container
    if (!modalContainer.contains(event.target)) {
        document.body.classList.remove("modal-open");
        document.getElementById("modal").classList.remove("modal-visible");
    }
}

// Update the click event handling for the modal
var modal = document.getElementById("modal");
modal.addEventListener("click", hide_modal);

function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    fill_section(data_movement, "basic-movement", "Move");
    fill_section(data_action, "basic-actions", "Action");
    fill_section(data_bonusaction, "basic-bonus-actions", "Bonus action");
    fill_section(data_reaction, "basic-reactions", "Reaction");
    fill_section(data_condition, "basic-conditions", "Condition");
    fill_section(data_environment_obscurance, "environment-obscurance", "Environment");
    fill_section(data_environment_light, "environment-light", "Environment");
    fill_section(data_environment_vision, "environment-vision", "Environment");
    fill_section(data_environment_cover, "environment-cover", "Environment");

    var modal = document.getElementById("modal");
    modal.addEventListener("click", hide_modal);
}

document.addEventListener("DOMContentLoaded", init);

//Optional Content Switch
document.addEventListener("DOMContentLoaded", function () {
    // Select the checkbox element
    var checkbox = document.getElementById('optional-switch');

    // Function to handle checkbox change
    function handleCheckboxChange() {
        console.log("Include Optional Rules switch toggled"); // Debugging statement
        // Get all items with the class 'item'
        var items = document.getElementsByClassName('item itemsize');

        // Iterate through each item
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            // Check if the item has the attribute 'title' with the value 'Optional rule' (indicating it's an optional rule)
            var isOptional = item.getAttribute('title') === 'Optional rule';
            // If the checkbox is checked and the item is optional, show the item
            // If the checkbox is unchecked or the item is not optional, show the item if it's not an optional rule, otherwise hide it
            if (checkbox.checked && isOptional) {
                item.style.display = 'block';
            } else if (!isOptional) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }

    // Add event listener to the checkbox
    checkbox.addEventListener('change', handleCheckboxChange);

    // Call the function to initially set the visibility based on the checkbox state
    handleCheckboxChange();

    //Darkmode switch 
    // Get the checkbox element
    const darkModeSwitch = document.getElementById('darkmode-switch');

    // Function to toggle dark mode
    function toggleDarkMode() {
        console.log("Dark mode switch toggled"); // Debugging statement
        const darkModeElements = document.querySelectorAll('.dark-mode, .page-background');
        darkModeElements.forEach(element => {
            element.classList.toggle('dark-mode-active');
        });
    }
    // Event listener for checkbox change
    darkModeSwitch.addEventListener('change', toggleDarkMode);
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the toggle item for optional rules
    var optionalToggleItem = document.getElementById('optional-toggle-item');

    // Get the optional switch checkbox
    var optionalSwitch = document.getElementById('optional-switch');

    // Function to handle click on the toggle item for optional rules
    function handleOptionalToggleClick() {
        // Toggle the checked state of the optional switch checkbox
        optionalSwitch.checked = !optionalSwitch.checked;
        // Dispatch a change event to trigger the optional rules toggle function
        optionalSwitch.dispatchEvent(new Event('change'));
    }

    // Add event listener to the toggle item for optional rules
    optionalToggleItem.addEventListener('click', handleOptionalToggleClick);
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the toggle item
    var darkModeToggleItem = document.getElementById('darkmode-toggle-item');

    // Get the dark mode switch checkbox
    var darkModeSwitch = document.getElementById('darkmode-switch');

    // Function to handle click on the toggle item
    function handleDarkModeToggleClick() {
        // Toggle the checked state of the dark mode switch checkbox
        darkModeSwitch.checked = !darkModeSwitch.checked;
        // Dispatch a change event to trigger the dark mode toggle function
        darkModeSwitch.dispatchEvent(new Event('change'));
    }

    // Add event listener to the toggle item
    darkModeToggleItem.addEventListener('click', handleDarkModeToggleClick);
})
