KISSY.add("gallery/uploader/1.4/aliUploader",function(l,h,i){function f(e,a){var c=(a||location.hostname).split("."),b=c.length,d=e||(3>b?0:1);if(d>=b||2>b-d)d=b-2;return c.slice(d).join(".")}function g(e,a){a||(a={});a.action||(a.action="net"==f(-1)&&j||k);a.data||(a.data={});a.data[" _input_charset"]="utf-8";var c=new h(e,a),b="iframe"==c.get("type");a.ajaxSetDomain&&(b=!0);if(b){(b=a.domain)||(b=f(-2));document.domain=b;var d=c.get("data");d.domain=b;c.set("data",d)}return c}var j="http://aop.daily.taobao.net/json/uploadImg.htm",
k="http://aop.taobao.com/json/uploadImg.htm";g.plugins=i;return g},{requires:["./index","./plugins/plugins"]});
