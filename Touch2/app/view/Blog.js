/**
 * ブログリストのビュークラス
 *
 * @class MyApp.view.Blog
 * @extends Ext.navigation.View
 * @xtype blog-list
 */
Ext.define('MyApp.view.Blog', {

    requires: [
        ''
    ],

    extend: 'Ext.navigation.View',
    
    xtype: 'blog',

    config: {
        title: 'Blog',
        iconCls: 'star',

        items: [{
            xtype: 'list',
            itemTpl: '{title}',
            title: 'Recent Post',

            store: {
                fields: ['title', 'author', 'content'],

                autoLoad: true,

                proxy: {
                    type: 'jsonp',
                    url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',

                    reader: {
                        type: 'json',
                        rootProperty: 'responseData.feed.entries'
                    }
                }
            }
        }]
    }
});