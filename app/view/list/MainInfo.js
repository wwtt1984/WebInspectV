/**
 * Created by xiaona on 14-1-14.
 */

Ext.define('WebInspect.view.list.MainInfo', {
    extend: 'Ext.Panel',
    xtype: 'maininfo',

    requires: [
        'Ext.XTemplate'
    ],

    config: {

        title: '今日消息',

        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        style: 'background:#f7f7f7;',
        layout: 'fit',

        tpl: Ext.create('Ext.XTemplate',
            '<div class="tidetime" style="padding:0 0 0 10px;width:100%; height: 2em; font-size:18px; font-weight: bold; line-height: 2em; color:#000;"><img src="resources/images/001.png" style="width:20px;height:20px;float:left;margin-top:0.45em;"/>富春江平均下泄流量</div>',
            '<div style="height: 2.2em; font-size:15px; line-height: 2.2em;margin:0 15px 0 15px;">',
                '<div style="width:30%;height:100%;float:left;">单位:m³/s</div>',
                '<div style="width:70%;height:100%;float:right;text-align: center;">',
                    '<div style="height:100%;width:34%;float:left;"><img src="resources/images/status/blue.png" style="height:10px;width:10px;">&nbsp;正常值</div>',
                    '<div style="height:100%;width:33%;float:left;"><img src="resources/images/status/yellow.png" style="height:10px;width:10px;">&nbsp;>3000</div>',
                    '<div style="height:100%;width:33%;float:left;"><img src="resources/images/status/red.png" style="height:10px;width:10px;">&nbsp;>6000</div>',
                '</div>',
            '</div>',
            '<div style="min-height:4.4em;margin:0 10px 0 10px; border: 1px #ccc solid; background: #fff;  font-size:16px; font-weight: bold; line-height: 2.2em;border-radius: .6em;text-align:center; color: #333;">',
                '<div style="height:2.2em; width: 100%; border-bottom: 1px #ccc solid;">',
                    '<div style="height: 100%; width: 30%; float:left;">今日流量</div>',
                    '<div style="height: 100%; width: 35%; float:left;">本月最大值</div>',
                    '<div style="height: 100%; width: 35%; float:right;">本月最小值</div>',
                '</div>',
                '<div style="height:2.2em; width: 100%;">',
                    '<div style="height: 100%; width: 30%; float:left;{[this.getFlowColor(values.liul1)]}">{liul1}</div>',
                    '<div style="height: 100%; width: 35%; float:left;{[this.getFlowColor(values.liul2)]}">{liul2}</div>',
                    '<div style="height: 100%; width: 35%; float:right;{[this.getFlowColor(values.liul3)]}">{liul3}</div>',
                '</div>',
            '</div>',
            '<div  class="tidetime" style="padding:0 0 0 10px; margin:15px 0 10px 0; width:100%; height: 2em; font-size:18px; font-weight: bold; line-height: 2em;color:#000;"><img src="resources/images/001.png" style="width:20px;height:20px;float:left;margin-top:0.45em;"/>水位超警站点个数：{[this.getOverNum(values.cjjs)]}个</div>',
            '{[this.getOverCode(values.cjjs)]}',
            '<div  class="tidetime" style="padding:0 0 0 10px; margin:15px 0 10px 0; width:100%; height: 2em; font-size:18px; font-weight: bold; line-height: 2em; color:#000;"><img src="resources/images/001.png" style="width:20px;height:20px;float:left;margin-top:0.45em;"/>当前活动台风：{[this.getTyphoonNum(values.tfxx)]}个</div>',
            '{[this.getTyphoonCode(values.tfxx)]}',
            {
                getFlowColor: function(value){
                    var string = '';
                    if(value <= 3000){
                        string = 'color: blue;';
                    }
                    else if(value <= 6000){
                        string = 'color: yellow;';
                    }
                    else{
                        string = 'color: red;';
                    }
                    return string;
                },
                getOverNum: function(value){
                    var num = 0;
                    if(value){
                        var json = value.split('$');
                        num = json.length;
                    }
                    return num;
                },
                getOverCode: function(value){
                    var string = '';
                    if(value){
                        string += '<div style="margin:0 10px 0 10px;min-height:2.2em; border: 1px #ccc solid; background: #fff;  font-size:16px; font-weight: bold; line-height: 2.2em;border-radius: .6em;text-align:center; color:#333;">';
                        var json = value.split('$');
                        for(var i=0; i < json.length; i++){

                            var num = json[i].split(',');

                            if(i == 0){
                                string += '<div style="height:2.2em; width: 100%;text-align:center;"><div style="height: 100%; width: 30%; float:left;">' + num[0] + '</div><div style="height: 100%; width: 70%; float:left;">' + num[1] + '</div></div>';
                            }
                            else{
                                string += '<div style="height:2.2em; width: 100%;text-align:center;border-top: 1px #ccc solid;"><div style="height: 100%; width: 30%; float:left;">' + num[0] + '</div><div style="height: 100%; width: 70%; float:left;">' + num[1] + '</div></div>';
                            }

                        }
                        string += '</div>';
                    }
                    else{
                        string += '<div style="margin:0 10px 0 10px;height:2.2em:border: 1px #ccc solid; background: #fff;  font-size:16px; font-weight: bold; line-height: 2.2em;border-radius: .6em;padding-left:10px; color:#333;">当前无超警站点</div>';
                    }

                    return string;
                },
                getTyphoonNum: function(value){
                    var num = 0;
                    if(value){
                        var json = value.split('$');
                        num = json.length;
                    }
                    return num;
                },
                getTyphoonCode: function(value){
                    var string = '';
                    if(value){
                        string += '<div style="min-height:2.2em; margin:0 10px 0 10px; border: 1px #ccc solid; background: #fff;  font-size:16px; font-weight: bold; line-height: 2.2em;border-radius: .6em;text-align:center; color:#333;">';
                        var json = value.split('$');
                        for(var i=0; i < json.length; i++){

                            var num = json[i].split(',');

                            if(i == 0){
                                string += '<div style="height:2.2em; width: 100%;text-align:center;"><div style="height: 100%; width: 30%; float:left;">' + num[0] + '</div><div style="height: 100%; width: 70%; float:left;">' + num[1] + '</div></div>';
                            }
                            else{
                                string += '<div style="height:2.2em; width: 100%;text-align:center;border-top: 1px #ccc solid;"><div style="height: 100%; width: 30%; float:left;">' + num[0] + '</div><div style="height: 100%; width: 70%; float:left;">' + num[1] + '</div></div>';
                            }

                        }
                        string += '</div>';
                    }
                    else{
                        string += '<div style="height:2.2em; margin:0 10px 0 10px; border: 1px #ccc solid; background: #fff;  font-size:16px; font-weight: bold; line-height: 2.2em;border-radius: .6em;padding-left:10px; color:#333;">当前无活动台风</div>';
                    }

                    return string;
                }

            }
        )
    },

    initialize: function(){

    },

    onDataSet: function(){
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: '加载中,请稍后...'
        });

        var me = this;
        var store = Ext.getStore('MainStore');

        store.getProxy().setExtraParams({
            t: 'GetTodayList',
            results: 'jsonp'
        });

        store.load(function(records, operation, success){
            me.setData(store.getAt(0).data);
            Ext.Viewport.setMasked(false);
        }, this);

    }
});