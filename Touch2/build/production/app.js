/*435450b4f55b525e17f1f38b586db1628a96a2f0*/Ext.define("MyApp.view.Main",{extend:"Ext.tab.Panel",requires:["Ext.TitleBar"],config:{tabBarPosition:"bottom",items:[{xtype:"home-panel"},{xtype:"blog"},{xtype:"contact-form"}]}});Ext.define("MyApp.view.Home",{requires:[""],extend:"Ext.Panel",xtype:"home-panel",config:{title:"Home",iconCls:"home",cls:"home",scrollable:true,styleHtmlContent:true,html:['<img height=260 src="http://staging.sencha.com/img/sencha.png" />',"<h1>Welcome to Sencha Touch</h1>","<p>Building the Getting Started app</p>","<h2>Sencha Touch (2.0.0)</h2>"].join("")}});Ext.define("MyApp.view.Contact",{extend:"Ext.form.Panel",xtype:"contact-form",config:{title:"Contact",iconCls:"user",url:"contact.php",items:[{xtype:"fieldset",title:"Contact Us",instructions:"(email is not required)",items:[{xtype:"textfield",name:"name",label:"Name"},{xtype:"textfield",name:"email",label:"E-Mail"},{xtype:"textareafield",name:"message",label:"Message"}]},{xtype:"button",text:"submit",ui:"confirm",handler:function(){this.up("contact-form").submit()}}]}});Ext.define("MyApp.view.Blog",{requires:[""],extend:"Ext.navigation.View",xtype:"blog",config:{title:"Blog",iconCls:"star",items:[{xtype:"list",itemTpl:"{title}",title:"Recent Post",store:{fields:["title","author","content"],autoLoad:true,proxy:{type:"jsonp",url:"https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog",reader:{type:"json",rootProperty:"responseData.feed.entries"}}}}]}});Ext.define("MyApp.controller.Main",{extend:"Ext.app.Controller",config:{refs:{blog:"blog"},control:{"blog list":{itemtap:"showPost"}}},showPost:function(d,b,e,a){var c=this;c.getBlog().push({xtype:"panel",title:a.get("title"),html:a.get("content"),scrollable:true,styleHtmlContent:true})}});Ext.application({controllers:["Main"],name:"MyApp",requires:["Ext.MessageBox"],views:["Main","Home","Contact","Blog"],icon:{57:"resources/icons/Icon.png",72:"resources/icons/Icon~ipad.png",114:"resources/icons/Icon@2x.png",144:"resources/icons/Icon~ipad@2x.png"},phoneStartupScreen:"resources/loading/Homescreen.jpg",tabletStartupScreen:"resources/loading/Homescreen~ipad.jpg",fullscreen:true,launch:function(){Ext.fly("appLoadingIndicator").destroy();Ext.Viewport.add(Ext.create("MyApp.view.Main"))},onUpdated:function(){Ext.Msg.confirm("Application Update","This application has just successfully been updated to the latest version. Reload now?",function(){window.location.reload()})}});