function add_quickref_item(parent, title, icon, subtitle) {


    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-'+icon+'"></div>\
    <div class="item-text-container text">\
        <span class="item-title">' + title + '</span><br />\
        <span class="item-desc">' + subtitle + '</span>\
    </div>\
    ';

    parent.appendChild(item);

}

function fill_section(data, parentname) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item.title, item.icon, item.subtitle);
    });
}

function fill_items() {
    fill_section(data_movement, "basic-movement");
    fill_section(data_action, "basic-actions");
    fill_section(data_bonusaction, "basic-bonus-actions");
    fill_section(data_reaction, "basic-reactions");
}

fill_items();