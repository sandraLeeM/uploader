KISSY.add("gallery/uploader/1.5/themes/cropUploader/index",function(b,e,c){function a(d){a.superclass.constructor.call(this,d)}b.extend(a,c,{render:function(){a.superclass.render.call(this);this.get("uploader").set("multiple",!1)},_selectHandler:function(){var a=this.get("queue");a.get("files").length&&a.clear()},_addHandler:function(){}},{ATTRS:{name:{value:"cropUploader"},fileTpl:{value:'<div class="uploader-img-wrapper"><div class="uploader-img J_CropArea_{id}"></div><div class=" J_Mask_{id} pic-mask"></div><div class="status-wrapper"><div class="status waiting-status"><p>\u7b49\u5f85\u4e0a\u4f20\uff0c\u8bf7\u7a0d\u5019</p></div><div class="status start-status progress-status success-status"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>\u4e0a\u4f20\u4e2d...</div></div><div class="status error-status"><p class="J_ErrorMsg_{id}">\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01</p></div></div></div>'}}});
return a},{requires:["node","../imageUploader/index"]});
