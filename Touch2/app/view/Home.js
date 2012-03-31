/**
 * ホーム画面のビュークラス。
 *
 * @class MyApp.view.Home
 * @extends Ext.Panel
 * @xtype home-panel
 */
Ext.define('MyApp.view.Home', {

    requires: [
        ''
    ],

    extend: 'Ext.Panel',

    xtype: 'home-panel',

    config: {
        title: 'Home',
        iconCls: 'home',

        cls: 'home',

        scrollable: true,
        styleHtmlContent: true,

        html: [
            '<img height=260 src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Welcome to Sencha Touch</h1>',
            "<p>Building the Getting Started app</p>",
            '<h2>Sencha Touch (2.0.0)</h2>'
        ].join("")
    }
});