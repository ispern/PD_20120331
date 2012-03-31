/**
 * メインコントローラクラス
 *
 * @class MyApp.controller.Main
 * @extends Ext.app.Controller
 */
Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            blog: 'blog'
        },
        control: {
            'blog list': {
                itemtap: 'showPost'
            }
        }
    },

    showPost: function(list, index, target, record) {

        var me = this;

        me.getBlog().push({
            xtype: 'panel',
            title: record.get('title'),
            html: record.get('content'),
            scrollable: true,
            styleHtmlContent: true
        });
    }
});