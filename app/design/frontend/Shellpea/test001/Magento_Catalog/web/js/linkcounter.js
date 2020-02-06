define(
    ["jquery"],
    function($) {
        "use strict";
        return function() {
            let quantity = $(".footer.links").find('a').length;
            alert(quantity);
        };
    }
);
