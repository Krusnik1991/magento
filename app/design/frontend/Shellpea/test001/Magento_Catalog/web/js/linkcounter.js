define(
    ["jquery"],
    function($) {
        "use strict";
        return function() {
            let quantity = $(".footer.links").find('a').length + " " + "ссылок";
            let newDiv = document.createElement("div");
            newDiv.innerHTML = quantity;
            let my_div = $(".footer.links");
            $(newDiv).insertAfter(my_div);
        };
    }
);
