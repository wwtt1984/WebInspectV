Ext.define('WebInspect.store.FunctionStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.FunctionModel',

        proxy: {
            type: 'sk'
        }
//        data:[
//            {id: '01', name: '内网新闻', image: 'resources/images/function/news.png'},
//    		{id: '02', name: '综合信息', image: 'resources/images/function/info.png'},
//    		{id: '03', name: '通知公告', image: 'resources/images/function/notice.png'},
//    		{id: '04', name: '通讯录', image: 'resources/images/function/contacts.png'},
//    		{id: '05', name: '潮位信息', image: 'resources/images/function/tide.png'},
//    		{id: '06', name: '水情信息', image: 'resources/images/function/water.png'},
//            {id: '07', name: '雨情信息', image: 'resources/images/function/rain.png'},
//            {id: '08', name: '流量信息', image: 'resources/images/function/flow.png'},
//            {id: '09', name: '海塘巡查', image: 'resources/images/function/inspect.png'},
//    		{id: '10', name: '工情信息', image: 'resources/images/function/project.png'},
//            {id: '11', name: '设置', image: 'resources/images/function/setting.png'}
//        ],
                
//        autoLoad: true
    }
});