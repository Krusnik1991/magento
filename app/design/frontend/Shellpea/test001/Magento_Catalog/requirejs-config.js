var config = {
    'map': {
        '*': {
            'linkcounter': 'Magento_Catalog/js/linkcounter'
        }
    },

    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Catalog/js/product/reversecrumbs': true
            }
        }
    }
};
