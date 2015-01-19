function add_quickref_item(parent, title, icon, text) {

    text = text.replace("|", "<br />");

    var item = document.createElement("div");
    item.className += "item"
    item.innerHTML =
    '\
    <div class="item-icon icon-'+icon+'"></div>\
    <div class="item-text-container text">\
        <span class="item-title">'+title+'</span>\
        <span class="item-desc">'+text+'</span>\
    </div>\
    ';

    parent.appendChild(item);

}