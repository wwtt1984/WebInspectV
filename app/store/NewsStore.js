Ext.define('WebInspect.store.NewsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.NewsModel',

        pageSize: 10,
        clearOnPageLoad: false,
        
        proxy: {
            type: 'sk'
        }
    }
});