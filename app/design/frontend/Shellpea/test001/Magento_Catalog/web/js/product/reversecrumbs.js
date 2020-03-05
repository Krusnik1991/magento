define([
    'jquery',
    'Magento_Theme/js/model/breadcrumb-list'
], function ($, breadcrumbList) {
    'use strict';

    return function(widget) {
        $.widget('mage.breadcrumbs', widget, {
            _appendCatalogCrumbs: function () {
                this._super();
                breadcrumbList.splice(0,1);
                breadcrumbList.reverse();
            }
        });
        return $.mage.breadcrumbs;
    }
});