import{v,_ as f}from"./video-js-c6f4f33d.js";/* empty css              */import{r as p,i as g,f as y,o as a,c,j as i,F as r,a as b,t as k,h as T}from"./index-34ddc98a.js";const U={class:"bg-gainsboro mb-3 p-10"},j=T('<h2 class="text-20 mb-3">3. 外觀更改</h2><section class="text-center"><video id="video2" class="video-js"><source src="'+f+'" type="video/mp4"><track src="/vtt.vtt" kind="subtitles" label="中文字幕" srclang="zh" default></video></section>',2),x={class:"text-center mt-4"},E={class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},L=["id","checked","onClick"],S=["for"],C={__name:"Demo3外觀更改",setup($){const o=p({city:{name:"city",isUseingTheme:!0},fantasy:{name:"fantasy",isUseingTheme:!1},forest:{name:"forest",isUseingTheme:!1},sea:{name:"sea",isUseingTheme:!1}}),n=g(null),l={language:"zh-TW",autoplay:!0,controls:!0,width:"500",height:"200"},d=["city","fantasy","forest","sea"];y(()=>{m()});function u(e){_(),document.querySelector("#video2").classList.add(`vjs-theme-${e}`),o[e].isUseingTheme=!0,n.value=null}function _(){const e=document.querySelector("#video2");d.forEach(t=>e.classList.remove(`vjs-theme-${t}`)),Object.keys(o).forEach(t=>o[t].isUseingTheme=!1)}function m(){n.value=v("#video2",l,function(){console.log("影片準備完畢!",n.value)})}return(e,t)=>(a(),c("section",U,[j,i("div",x,[i("div",E,[(a(!0),c(r,null,b(o,(h,s)=>(a(),c(r,{key:s},[i("input",{type:"radio",class:"btn-check",name:"btnradio",id:`${s}`,autocomplete:"off",checked:h.isUseingTheme,onClick:B=>u(s)},null,8,L),i("label",{class:"btn btn-outline-primary",for:`${s}`},k(s),9,S)],64))),128))])])]))}};export{C as default};
