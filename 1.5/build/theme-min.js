KISSY.add("gallery/uploader/1.5/theme",function(d,g,h){function f(a){f.superclass.constructor.call(this,a)}var e=g.all;d.extend(f,h,{render:function(){this._addThemeCssName();this._tplFormHtml();this._bind()},_selectHandler:function(){},_addHandler:function(){},_removeHandler:function(){},_waitingHandler:function(){},_startHandler:function(){},_progressHandler:function(){},_successHandler:function(){},_errorHandler:function(){},_restore:function(){var a=this,c=a.get("uploader"),b=c.getPlugin("urlsInput");
if(!b||!b.get("autoRestore"))return!1;b=c.get("queue").get("files");if(!b.length)return!1;d.each(b,function(b,d){b.status="success";c.fire("add",{file:b,index:d});a._renderHandler("_successHandler",{file:b,result:b.result});a._hideStatusDiv(b)});return a},_addThemeCssName:function(){var a=this.get("name"),c=this.get("queueTarget"),b=this.get("uploader").get("target");if(!c.length)return d.log("\u4e0d\u5b58\u5728\u5bb9\u5668\u76ee\u6807\uff01"),!1;if(""==a)return!1;c.length&&c.addClass("ks-uploader-queue "+a+"-queue");b.addClass(a+"-button");
return this},_bind:function(){var a=this,c=a.get("uploader"),b="add,remove,select,start,progress,success,error,complete".split(",");c.on(b[0],function(b){var d=a._appendFileDom(b.file);c.get("queue").updateFile(b.index,{target:d})});c.on(b[1],function(b){a._removeFileDom(b.file)});d.each(b,function(b){c.on(b,function(b){a._renderHandler("_"+b.type+"Handler",b)})})},_renderHandler:function(a,c){var b=this[a];this._setStatusVisibility(c.file);b&&b.call(this,c)},_setStatusVisibility:function(a){if(!d.isObject(a)||
d.isEmptyObject(a))return this;this._hideStatusDiv(a);var c=a.status,b=a.target;if(!b.length)return!1;a=b.all("."+c+"-status");a.length&&a.show();d.each("waiting,start,uploading,progress,error,success".split(","),function(a){b.removeClass(a)});b.addClass(c);return this},_hideStatusDiv:function(a){if(!d.isObject(a))return!1;(a=a.target)&&a.length&&a.all(".status").hide()},_appendFileDom:function(a){var c=this.get("fileTpl"),b=e(this.get("queueTarget"));if(!b.length)return!1;c=d.substitute(c,a);return e(c).hide().appendTo(b).fadeIn(0.4).data("data-file",
a)},_removeFileDom:function(a){if(!d.isObject(a))return!1;var c=a.target;if(!c||!c.length)return!1;c.fadeOut(0.4,function(){c.remove()})},_tplFormHtml:function(){var a=this,c=a.get("fileTpl"),b=e(a.get("queueTarget"));if(!b.length)return!1;b.all("script").each(function(b){"text/uploader-theme"==b.attr("type")&&(c=b.html(),a.set("fileTpl",c))});return c}},{ATTRS:{name:{value:""},use:{value:""},fileTpl:{value:""},authMsg:{value:{}},queueTarget:{value:"",getter:function(a){return e(a)}},queue:{value:""},
uploader:{value:""}}});return f},{requires:["node","base"]});
