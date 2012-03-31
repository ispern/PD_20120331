/**
 * コンタクトフォームのビュークラス
 *
 * @class MyApp.view.Contact
 * @extends Ext.form.Panel
 * @xtype contact-form
 */
Ext.define('MyApp.view.Contact', {

    extend: 'Ext.form.Panel',

    xtype: 'contact-form',

    config: {
        title: 'Contact',
        iconCls: 'user',
        url: 'contact.php',

        items: [{
            xtype: 'fieldset',
            title: 'Contact Us',
            instructions: '(email is not required)',

            items: [{
                xtype: 'textfield',
                name: 'name',
                label: 'Name'
            },{
                xtype: 'textfield',
                name: 'email',
                label: 'E-Mail'
            },{
                xtype: 'textareafield',
                name: 'message',
                label: 'Message'
            }]
        },{
            xtype: 'button',
            text: 'submit',
            ui: 'confirm',
            handler: function() {
                this.up('contact-form').submit();
            }
        }]
    }
});