import{i as d,r as H,w as S,f as I,o as C,c as D,j as t,n as M,t as f,k as x,m as E,v as k,F as $,a as q,h as W,_ as h}from"./index-9397b9fa.js";import{_ as P}from"./HomeView-e902e812.js";import{c as R,v as z,_ as J}from"./video-js-c6f4f33d.js";/* empty css              */var B={exports:{}};(function(V,U){(function(a,v){v()})(R,function(){function a(e,o){return typeof o>"u"?o={autoBom:!1}:typeof o!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function v(e,o,c){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,o,c)},n.onerror=function(){console.error("could not download file")},n.send()}function _(e){var o=new XMLHttpRequest;o.open("HEAD",e,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function p(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(o)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof R=="object"&&R.global===R?R:void 0,m=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(e,o,c){var n=r.URL||r.webkitURL,i=document.createElement("a");o=o||e.name||"download",i.download=o,i.rel="noopener",typeof e=="string"?(i.href=e,i.origin===location.origin?p(i):_(i.href)?v(e,o,c):p(i,i.target="_blank")):(i.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(i.href)},4e4),setTimeout(function(){p(i)},0))}:"msSaveOrOpenBlob"in navigator?function(e,o,c){if(o=o||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(a(e,c),o);else if(_(e))v(e,o,c);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){p(n)})}}:function(e,o,c,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return v(e,o,c);var i=e.type==="application/octet-stream",A=/constructor/i.test(r.HTMLElement)||r.safari,T=/CriOS\/[\d]+/.test(navigator.userAgent);if((T||i&&A||m)&&typeof FileReader<"u"){var w=new FileReader;w.onloadend=function(){var b=w.result;b=T?b:b.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=b:location=b,n=null},w.readAsDataURL(e)}else{var L=r.URL||r.webkitURL,g=L.createObjectURL(e);n?n.location=g:location.href=g,n=null,setTimeout(function(){L.revokeObjectURL(g)},4e4)}});r.saveAs=u.saveAs=u,V.exports=u})})(B);var N=B.exports;const G={class:"bg-gainsboro mb-3 p-10"},X=W('<h2 class="text-20 mb-3">4. 用 JavaScript 控制播放器</h2><section class="text-center"><video id="video3" class="video-js"><source src="'+J+'" type="video/mp4"><track src="/videojs/字幕.vtt" kind="subtitles" label="中文字幕" srclang="zh" default></video></section>',2),K={class:"bg-whitesmoke mt-10 py-3",style:{padding:"0 200px"}},Q={class:"d-flex align-items-center"},Y={class:"d-flex border-start border-secondary m-3 ms-10 ps-10 pe-5"},Z={for:"dmeoWidth4",class:"d-flex align-items-center"},ee={for:"dmeoHeight4",class:"d-flex align-items-center"},te={class:"d-flex border-start border-secondary mx-3 ps-10",style:{"min-width":"215px",padding:"7px"}},oe={class:"d-flex-align-items-center border-start border-secondary ps-10"},ne=t("label",{for:"customRange3",class:"form-label"},"速率",-1),ae={class:"border-start border-secondary ms-10 ps-10"},se={class:"d-flex align-items-center my-5"},le=["onClick"],ie={class:"border-start border-secondary ms-10 ps-10"},re={class:"border-start border-secondary ms-10 ps-10"},ue={class:"d-flex align-items-center my-5"},ce={class:"text-secondary fw-bold-7",style:{width:"300px"}},de={class:"border-start border-secondary ps-10"},ve={class:"d-flex align-items-center border-start border-secondary ms-10 ps-10"},pe={class:"d-flex align-items-center my-5"},me={class:"text-secondary text-18 fw-bold-7"},he={__name:"Demo4用JS控制播放器",setup(V){function U(){a.value.requestFullscreen(),setTimeout(()=>{a.value.exitFullscreen()},1e3)}const a=d(null),v=d(!1),_=d(100),p=d(0),r=d(0),m=d(1),u=d({name:"影片1",type:"mp4"}),e=d(!1),o=d(0),c=d(0),n=d(0),i=d(0),A={language:"zh-TW",autoplay:!0,controls:!0,width:"500",height:"200"},T=H({video1:{name:"影片1",type:"mp4"},video2:{name:"影片2",type:"mp4"},audio1:{name:"音樂1",type:"mp3"}});S(()=>{a.value&&(console.log("調整聲音大小",_.value/100),a.value.volume(_.value/100))}),S(()=>{p.value&&r.value&&(console.log("調整寬高",p.value,r.value),a.value.width(p.value),a.value.height(r.value))}),S(()=>{var y;m.value&&((y=a.value)!=null&&y.playbackRate)&&(console.log("調整速率",m.value),a.value.playbackRate(m.value))}),I(()=>{w()});function w(){a.value=z("#video3",A,function(){console.log("影片準備完畢!",a.value),p.value=a.value.width(),r.value=a.value.height(),this.on("play",()=>{v.value=!0}),this.on("pause",()=>{v.value=!1}),this.on("timeupdate",()=>{c.value=a.value.currentTime()}),this.on("durationchange",function(){i.value=a.value.duration(),console.log("影片總時長：",i.value)})})}async function L({name:y,type:s}){var O;const{default:l}=await P(Object.assign({"../assets/files/影片1.mp4":()=>h(()=>import("./video-js-c6f4f33d.js").then(j=>j.a),["assets/video-js-c6f4f33d.js","assets/video-js-39ab072e.css"]),"../assets/files/影片2.mp4":()=>h(()=>import("./影片2-d0474d5e.js"),[]),"../assets/files/音樂1.mp3":()=>h(()=>import("./音樂1-3b3ba500.js"),[])}),`../assets/files/${y}.${s}`);a.value.src(l),u.value.name=y,u.value.type=s,i.value=a.value.duration(),m.value&&((O=a.value)!=null&&O.playbackRate)&&setTimeout(()=>{var j;(j=a.value)==null||j.playbackRate(m.value)},100),F()}async function g(){const{default:y}=await P(Object.assign({"../assets/files/影片1.mp4":()=>h(()=>import("./video-js-c6f4f33d.js").then(s=>s.a),["assets/video-js-c6f4f33d.js","assets/video-js-39ab072e.css"]),"../assets/files/影片2.mp4":()=>h(()=>import("./影片2-d0474d5e.js"),[]),"../assets/files/音樂1.mp3":()=>h(()=>import("./音樂1-3b3ba500.js"),[])}),`../assets/files/${u.value.name}.${u.value.type}`);N.saveAs(y,u.value.name)}function b(){e.value=!e.value,a.value.loop(e.value)}function F(){o.value=a.value.currentTime()}return(y,s)=>(C(),D("section",G,[X,t("section",K,[t("div",Q,[t("button",{type:"button",class:M(["btn",v.value?"btn-secondary":"btn-primary"]),onClick:s[0]||(s[0]=l=>v.value?a.value.pause():a.value.play())},f(v.value?"暫停":"播放"),3),t("div",Y,[t("label",Z,[x(" 寬度 "),E(t("input",{type:"number",class:"form-control mx-2",id:"dmeoWidth4","onUpdate:modelValue":s[1]||(s[1]=l=>p.value=l),style:{width:"80px"}},null,512),[[k,p.value,void 0,{number:!0}]])]),t("label",ee,[x(" 高度 "),E(t("input",{type:"number",class:"form-control ms-2",id:"dmeoHeight4","onUpdate:modelValue":s[2]||(s[2]=l=>r.value=l),style:{width:"80px"}},null,512),[[k,r.value,void 0,{number:!0}]])])]),t("div",te,[x(" 音量 "),E(t("input",{type:"range",class:"mx-2","onUpdate:modelValue":s[3]||(s[3]=l=>_.value=l),style:{width:"100px"}},null,512),[[k,_.value]]),x(" "+f(_.value),1)]),t("div",oe,[ne,E(t("input",{type:"range",class:"form-range mx-3 pt-5",min:"1",max:"5",step:"1",id:"customRange3","onUpdate:modelValue":s[4]||(s[4]=l=>m.value=l),style:{width:"100px"}},null,512),[[k,m.value]]),x(" "+f(m.value),1)]),t("div",ae,[t("button",{type:"button",class:"btn btn-secondary",onClick:b},f(e.value?"不重複播放":"重複播放"),1)])]),t("div",se,[t("div",null,[(C(!0),D($,null,q(T,l=>(C(),D("button",{key:l.name,type:"button",class:M(["btn me-2",u.value.name===l.name?"btn-primary":"btn-secondary"]),onClick:O=>L(l)},"播放"+f(l.name),11,le))),128))]),t("div",ie,[t("button",{type:"button",class:"btn btn-secondary me-4",onClick:s[5]||(s[5]=l=>a.value.requestFullscreen())},"全螢幕"),t("button",{type:"button",class:"btn btn-secondary",onClick:U},"進入全螢幕,一秒後離開全螢幕")]),t("div",re,[t("button",{type:"button",class:"btn btn-success",onClick:g}," 下載"+f(u.value.name)+"."+f(u.value.type),1)])]),t("div",ue,[t("p",ce," 動態取得當前播放時間 ( "+f(c.value)+" ) ",1),t("div",de,[t("button",{type:"button",class:"btn btn-secondary",onClick:F},"取得當前播放時間 ( "+f(o.value)+" ) ",1)]),t("div",ve,[t("button",{type:"button",class:"btn btn-secondary",onClick:s[6]||(s[6]=l=>a.value.currentTime(n.value))}," 設定播放時間 "),E(t("input",{type:"number",class:"form-control text-center",placeholder:"輸入秒","onUpdate:modelValue":s[7]||(s[7]=l=>n.value=l),min:"0",style:{width:"100px"}},null,512),[[k,n.value]])])]),t("div",pe,[t("div",null,[t("p",me,f(u.value.type==="mp4"?"影片":"音樂")+"總時長 "+f(i.value),1)])])])]))}};export{he as default};
