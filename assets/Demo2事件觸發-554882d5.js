import{s as V,i as a,w,o as D,c as E,j as e,k as l,n,t as u}from"./index-dd46c3c5.js";import{u as N}from"./videoStore-d367e1b6.js";const S={class:"bg-gainsboro mb-3 p-10"},T=e("h2",{class:"text-20 mb-3"},"2. 事件觸發",-1),R={__name:"Demo2事件觸發",setup(j){const{player:s}=V(N()),r=a(!1),t=a(!1),v=a(!1),o=a(!1),c=a(!1),g=a(!1),p=a(!1),d=a(!1),f=a(!1);return w(()=>{var i,x,m,_,h,k,y,b,B;s.value&&((i=s.value)==null||i.on("ready",()=>{console.log("播放器物件建立、準備好時觸發: ready"),r.value=!0}),(x=s.value)==null||x.on("playing",()=>{console.log("播放時觸發: playing"),t.value=!0,c.value=!1,o.value=!1}),(m=s.value)==null||m.on("seeking",()=>{console.log("時間軸拖曳更新觸發: seeking"),v.value=!0}),(_=s.value)==null||_.on("seeked",()=>{v.value&&(console.log("時間軸拖曳更新觸發: seeked"),v.value=!1,o.value=!0)}),(h=s.value)==null||h.on("pause",()=>{console.log("暫停時觸發: pause"),c.value=!0,t.value=!1}),(k=s.value)==null||k.on("ended",()=>{console.log("播放結束觸發: ended"),g.value=!0}),(y=s.value)==null||y.on("error",()=>{console.log("錯誤時觸發: error"),p.value=!0}),(b=s.value)==null||b.on("fullscreenchange",()=>{console.log("進入、退出全螢幕觸發: fullscreenchange"),d.value=!0}),(B=s.value)==null||B.on("volumechange",()=>{console.log("音量改變時觸發: volumechange"),f.value=!0}))}),(i,x)=>(D(),E("section",S,[T,e("p",null,[l(" 播放器物件建立、準備好時觸發： "),e("span",{class:n(r.value?"text-success":"text-danger")},u(r.value?"已觸發":"未觸發"),3)]),e("p",null,[l(" 播放時觸發： "),e("span",{class:n(t.value?"text-success":"text-danger")},u(t.value?"已觸發":"未觸發"),3)]),e("p",null,[l(" 時間軸拖曳更新觸發： "),e("span",{class:n(o.value?"text-success":"text-danger")},u(o.value?"已觸發":"未觸發"),3)]),e("p",null,[l(" 暫停時觸發： "),e("span",{class:n(c.value?"text-success":"text-danger")},u(c.value?"已觸發":"未觸發"),3)]),e("p",null,[l(" 播放結束觸發： "),e("span",{class:n(g.value?"text-success":"text-danger")},u(g.value?"已觸發":"未觸發"),3)]),e("p",null,[l(" 錯誤時觸發： "),e("span",{class:n(p.value?"text-success":"text-danger")},u(p.value?"已觸發":"未觸發"),3)]),e("p",null,[l(" 進入、退出全螢幕觸發： "),e("span",{class:n(d.value?"text-success":"text-danger")},u(d.value?"已觸發":"未觸發"),3)]),e("p",null,[l(" 音量改變時觸發： "),e("span",{class:n(f.value?"text-success":"text-danger")},u(f.value?"已觸發":"未觸發"),3)])]))}};export{R as default};
