KISSY.add(function(c,j,k){function f(b){f.superclass.constructor.call(this,b)}var g=j.all;c.extend(f,k,{_successHandler:function(b){var b=b.result,h="",c=g("#J_UploadGoodsPicList"),d=g(".J_LastUpload",c),h='<li class="dib J_LastUpload"><div class="img"><img src="'+b.url+'" /></div></li>';d.length?d.replaceWith(h):c.prepend(h);this.showTip("succ","\u6210\u529f\u5566",2E3)},_errorHandler:function(b){this.showTip("error",b.msg||b.result.msg||"\u7cfb\u7edf\u51fa\u9519\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5",2E3)},showTip:function(b,h,f,d,e){e||(e={node:null,points:["cc",
"cc"],offset:[0,0]});var a=this;a.t&&clearTimeout(a.t);var g=f||3E3,i="<p><span>"+h+"</span></p>";a.dialog?(a.dialog.hide(),a.dialog.align(e.node,e.points,e.offset),a.dialog.get("contentEl")[0].innerHTML=i,a.dialog.show(),a.t=setTimeout(function(){a.dialog.hide();d&&c.isFunction(d)&&d()},g)):c.use("overlay",function(){a.dialog=new c.Overlay({prefixCls:"wanke-",align:e,effect:{effect:"fade",easing:"",duration:0.3},closable:!1,zIndex:10002,content:i});a.dialog.render();a.dialog.show();a.t=setTimeout(function(){a.dialog.hide();
d&&c.isFunction(d)&&d()},g)})}},{ATTRS:{name:{value:"wankeUploader"},fileTpl:{value:'<li id="queue-file-{id}" class="g-u" data-name="{name}"><div class="pic"><a href="javascript:void(0);"><img class="J_Pic_{id} preview-img" src="" /></a></div><div class=" J_Mask_{id} pic-mask"></div><div class="status-wrapper"><div class="status waiting-status"><p>\u7b49\u5f85\u4e0a\u4f20\uff0c\u8bf7\u7a0d\u5019</p></div><div class="status start-status progress-status success-status"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>\u4e0a\u4f20\u4e2d...</div></div><div class="status error-status"><p class="J_ErrorMsg_{id}">\u670d\u52a1\u5668\u6545\u969c\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\uff01</p></div></div><a class="J_Del_{id} del-pic" href="#">\u5220\u9664</a></li>'},
allowExts:{value:"jpg,png,gif,jpeg,bmp"},maxSize:{value:1E4},widthHeight:{value:function(b,c){return 170<b&&170<c}},authMsg:{value:{maxSize:"\u56fe\u7247\u8d85\u8fc710M",allowExts:"\u4e0d\u652f\u6301{ext}\u683c\u5f0f\uff01",widthHeight:"\u8bf7\u4e0a\u4f20\u5927\u4e8e170*170\u5927\u5c0f\u7684\u56fe\u7247"}}}});return f},{requires:["node","gallery/uploader/1.5/theme"]});
