var __vite_style__=document.createElement("style");__vite_style__.innerHTML="@keyframes nutFadeIn-47b14134{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-47b14134{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-47b14134],.nutFade-leave-active[data-v-47b14134],.nutFadeIn[data-v-47b14134],.nutFadeOut[data-v-47b14134]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-47b14134],.nutFadeIn[data-v-47b14134]{animation-name:nutFadeIn-47b14134}.nutFade-leave-active[data-v-47b14134],.nutFadeOut[data-v-47b14134]{animation-name:nutFadeOut-47b14134}@keyframes nutZoomIn-47b14134{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-47b14134{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-47b14134],.nutZoom-leave-active[data-v-47b14134],.nutZoomIn[data-v-47b14134],.nutZoomOut[data-v-47b14134]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-47b14134],.nutZoomIn[data-v-47b14134]{animation-name:nutZoomIn-47b14134}.nutZoom-leave-active[data-v-47b14134],.nutZoomOut[data-v-47b14134]{animation-name:nutZoomOut-47b14134}@keyframes nutEaseIn-47b14134{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-47b14134{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-47b14134],.nutEase-leave-active[data-v-47b14134],.nutEaseIn[data-v-47b14134],.nutEaseOut[data-v-47b14134]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-47b14134],.nutEaseIn[data-v-47b14134]{animation-name:nutEaseIn-47b14134}.nutEase-leave-active[data-v-47b14134],.nutEaseOut[data-v-47b14134]{animation-name:nutEaseOut-47b14134}@keyframes nutDropIn-47b14134{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-47b14134{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-47b14134],.nutDrop-leave-active[data-v-47b14134],.nutDropIn[data-v-47b14134],.nutDropOut[data-v-47b14134]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-47b14134],.nutDropIn[data-v-47b14134]{animation-name:nutDropIn-47b14134}.nutDrop-leave-active[data-v-47b14134],.nutDropOut[data-v-47b14134]{animation-name:nutDropOut-47b14134}@keyframes rotation-47b14134{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-47b14134],.nutRotate-leave-active[data-v-47b14134],.nutRotateIn[data-v-47b14134],.nutRotateOut[data-v-47b14134]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-47b14134],.nutRotateIn[data-v-47b14134]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-47b14134],.nutRotateOut[data-v-47b14134]{animation-name:nutRotateOut}.content[data-v-47b14134]{padding:10px}",document.head.appendChild(__vite_style__),System.register(["./mobile-legacy.a6a750aa.js","./vendor-legacy.2cbae777.js","./index-legacy.82527409.js"],(function(t){"use strict";var a,e,n,i,o,l,c,u,s,d,b,m,r,f,v;return{setters:[function(t){a=t.c},function(t){e=t.a,n=t.A,i=t.x,o=t.y,l=t.r,c=t.o,u=t.c,s=t.f,d=t.F,b=t.h,m=t.t,r=t.n,f=t.s,v=t.j},function(){}],execute:function(){const{createDemo:p}=a("tab");var _=t("default",p({props:{},setup(){const t=e({editList:[{title:"标签一"},{title:"标签二"}]});return{...n(t),changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t,a){console.log(t,a)}}}}));const y=f();i("data-v-47b14134");const h={class:"demo full"},I=s("h2",null,"基础用法",-1),g=s("p",{class:"content"},"这里是页签全部内容",-1),O=s("p",{class:"content"},"这里是页签待付款内容",-1),k=s("p",{class:"content"},"这里是页签待收获内容",-1),D=s("p",{class:"content"},"这里是页签已完成内容",-1),E=s("h2",null,"defaultIndex设置默认显示tab",-1),F=s("h2",null,"switchTab监听切换tab返回事件",-1),Z=s("p",{class:"content"},"这里是页签全部内容",-1),R=s("p",{class:"content"},"这里是页签待付款内容",-1),w=s("p",{class:"content"},"这里是页签待收获内容",-1),L=s("p",{class:"content"},"这里是页签已完成内容",-1),x=s("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1),T=s("p",{class:"content"},"这里是页签全部内容",-1),z=s("p",{class:"content"},"这里是页签待付款内容",-1),j=s("p",{class:"content"},"这里是页签待收获内容",-1),Y=s("p",{class:"content"},"这里是页签已完成内容",-1),C=s("h2",null," 禁止tab内容滑动",-1),S=s("p",{class:"content"},"这里是页签全部内容",-1),A=s("p",{class:"content"},"这里是页签待付款内容",-1),H=s("p",{class:"content"},"这里是页签待收获内容",-1),M=s("p",{class:"content"},"这里是页签已完成内容",-1),q=s("h2",null,"标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。",-1),B=s("p",{class:"content"},"这里是页签全部内容",-1),G=s("p",{class:"content"},"这里是页签待付款内容",-1),J=s("p",{class:"content"},"这里是页签待收获内容",-1),K=s("p",{class:"content"},"这里是页签已完成内容",-1),N=s("p",{class:"content"},"这里是页签已取消内容",-1),P=s("p",{class:"content"},"这里是页签待评价内容",-1),Q=s("h2",null,"设置slot:header可以自定义标签",-1),U=s("p",{class:"content"},"这里是页签全部内容",-1),V=s("p",{class:"content"},"这里是页签待付款内容",-1),W=s("p",{class:"content"},"这里是页签待收获内容",-1),X=s("p",{class:"content"},"这里是页签已完成内容",-1),$=s("p",{class:"content"},"这里是页签已取消内容",-1),tt=s("p",{class:"content"},"这里是页签待评价内容",-1),at=s("h2",null,"左右tab布局",-1),et=s("p",{class:"content"},"这里是页签一内容",-1),nt=s("p",{class:"content"},"这里是页签二内容",-1),it=s("p",{class:"content"},"这里是页签三内容",-1),ot=s("p",{class:"content"},"这里是页签四内容",-1),lt=s("p",{class:"content"},"这里是页签五内容",-1),ct=s("p",{class:"content"},"这里是页签六内容",-1),ut=s("p",{class:"content"},"这里是页签七内容",-1),st=s("h2",null,"异步操作",-1),dt={class:"content"},bt=v("改变数据");o();const mt=y(((t,a,e,n,i,o)=>{const f=l("nut-tab-panel"),v=l("nut-tab"),p=l("nut-icon"),_=l("nut-button");return c(),u("div",h,[I,s(v,null,{default:y((()=>[s(f,{"tab-title":"全部"},{default:y((()=>[g])),_:1}),s(f,{"tab-title":"待付款"},{default:y((()=>[O])),_:1}),s(f,{"tab-title":"待收获"},{default:y((()=>[k])),_:1}),s(f,{"tab-title":"已完成"},{default:y((()=>[D])),_:1})])),_:1}),E,F,s(v,{"default-index":1,onSwitchTab:t.switchTab},{default:y((()=>[s(f,{"tab-title":"全部"},{default:y((()=>[Z])),_:1}),s(f,{"tab-title":"待付款"},{default:y((()=>[R])),_:1}),s(f,{"tab-title":"待收获"},{default:y((()=>[w])),_:1}),s(f,{"tab-title":"已完成"},{default:y((()=>[L])),_:1})])),_:1},8,["onSwitchTab"]),x,s(v,{"animated-time":500},{default:y((()=>[s(f,{"tab-title":"全部"},{default:y((()=>[T])),_:1}),s(f,{"tab-title":"待付款"},{default:y((()=>[z])),_:1}),s(f,{"tab-title":"待收获"},{default:y((()=>[j])),_:1}),s(f,{"tab-title":"已完成"},{default:y((()=>[Y])),_:1})])),_:1}),C,s(v,{"no-swiping":!0},{default:y((()=>[s(f,{"tab-title":"全部"},{default:y((()=>[S])),_:1}),s(f,{"tab-title":"待付款"},{default:y((()=>[A])),_:1}),s(f,{"tab-title":"待收获"},{default:y((()=>[H])),_:1}),s(f,{"tab-title":"已完成"},{default:y((()=>[M])),_:1})])),_:1}),q,s(v,{"animated-time":500},{default:y((()=>[s(f,{"tab-title":"全部"},{default:y((()=>[B])),_:1}),s(f,{"tab-title":"待付款"},{default:y((()=>[G])),_:1}),s(f,{"tab-title":"待收获"},{default:y((()=>[J])),_:1}),s(f,{"tab-title":"已完成"},{default:y((()=>[K])),_:1}),s(f,{"tab-title":"已取消"},{default:y((()=>[N])),_:1}),s(f,{"tab-title":"待评价"},{default:y((()=>[P])),_:1})])),_:1}),Q,s(v,null,{default:y((()=>[s(f,{"tab-title":"全部"},{header:y((()=>[s(p,{name:"dongdong"})])),default:y((()=>[U])),_:1}),s(f,{"tab-title":"待付款"},{default:y((()=>[V])),_:1}),s(f,{"tab-title":"待收获"},{default:y((()=>[W])),_:1}),s(f,{"tab-title":"已完成"},{default:y((()=>[X])),_:1}),s(f,{"tab-title":"已取消"},{default:y((()=>[$])),_:1}),s(f,{"tab-title":"待评价"},{default:y((()=>[tt])),_:1})])),_:1}),at,s(v,{direction:"vertical","animated-time":500,"default-index":2},{default:y((()=>[s(f,{"tab-title":"页签一"},{default:y((()=>[et])),_:1}),s(f,{"tab-title":"页签二"},{default:y((()=>[nt])),_:1}),s(f,{"tab-title":"页签三"},{default:y((()=>[it])),_:1}),s(f,{"tab-title":"页签四"},{default:y((()=>[ot])),_:1}),s(f,{"tab-title":"页签五"},{default:y((()=>[lt])),_:1}),s(f,{"tab-title":"页签六"},{default:y((()=>[ct])),_:1}),s(f,{"tab-title":"页签七"},{default:y((()=>[ut])),_:1})])),_:1}),st,t.editList.length>0?(c(),u(v,{key:0,"animated-time":500},{default:y((()=>[(c(!0),u(d,null,b(t.editList,((t,a)=>(c(),u(f,{"tab-title":t.title,key:a},{default:y((()=>[s("p",dt,"这里是页签"+m(a)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):r("",!0),s(_,{type:"primary",onClick:t.changeList},{default:y((()=>[bt])),_:1},8,["onClick"])])}));_.render=mt,_.__scopeId="data-v-47b14134"}}}));