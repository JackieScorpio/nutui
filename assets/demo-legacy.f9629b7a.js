System.register(["./mobile-legacy.9bacf72e.js","./vendor-legacy.bfe8bac7.js","./index-legacy.b8e163f7.js"],(function(e){"use strict";var n,l,t,c,u,s,r;return{setters:[function(e){n=e.c},function(e){l=e.k,t=e.r,c=e.o,u=e.c,s=e.f,r=e.i},function(){}],execute:function(){const{createDemo:i}=n("price");var a=e("default",i({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}}));const o={class:"demo"},d=s("h2",null,"基本用法",-1),f=s("h2",null,"有人民币符号，无千位分隔",-1),p=s("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),m=s("h2",null,"异步随机变更",-1);a.render=function(e,n,l,i,a,b){const h=t("nut-price"),y=t("nut-cell");return c(),u("div",o,[d,s(y,null,{default:r((()=>[s(h,{price:1010,"need-symbol":!1,thousands:!0})])),_:1}),f,s(y,null,{default:r((()=>[s(h,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,s(y,null,{default:r((()=>[s(h,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),m,s(y,null,{default:r((()=>[s(h,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])}}}}));