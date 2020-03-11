define([
    'uiComponent',
    'ko'
    ], function(Component, ko) {
        return Component.extend({
            initialize: function () {
                this._super();
                this.numberOfClicks = 0;
                this.observe(['numberOfClicks']);
                this.numberOfPoints = ko.computed(function() {
                    return this.numberOfClicks() + 1;
                }, this);
            },
            
            registerClick : function() {
                this.numberOfClicks(this.numberOfClicks() + 1);
            }
        });
    });