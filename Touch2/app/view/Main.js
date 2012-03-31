Ext.define("MyApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],

    config: {
        tabBarPosition: 'bottom',

        items: [{
            xtype: 'home-panel'
        },{
            xtype: 'blog'
        },{
            xtype: 'contact-form'
        }]
    }
});