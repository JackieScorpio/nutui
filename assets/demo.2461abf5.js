var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=(e,a,l)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,s=(t,s)=>{for(var c in s||(s={}))e.call(s,c)&&n(t,c,s[c]);if(a)for(var c of a(s))l.call(s,c)&&n(t,c,s[c]);return t};import{c}from"./mobile.6acef716.js";import{a as i,z as o,s as d,x as u,r as f,o as b,c as p,f as _,F as r,h,t as m,n as y,q as g,j as v}from"./vendor.3b1206fa.js";import"./index.5e9b6455.js";const{createDemo:w}=c("tab");var j=w({props:{},setup(){const t=i({editList:[{title:"标签一"},{title:"标签二"}]});return s(s({},o(t)),{changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t,e){console.log(t,e)}})}});const L=g();d("data-v-5c4081df");const x={class:"demo full"},O=_("h2",null,"基础用法",-1),T=_("p",{class:"content"},"这里是页签全部内容",-1),k=_("p",{class:"content"},"这里是页签待付款内容",-1),I=_("p",{class:"content"},"这里是页签待收获内容",-1),P=_("p",{class:"content"},"这里是页签已完成内容",-1),S=_("h2",null,"defaultIndex设置默认显示tab",-1),C=_("h2",null,"switchTab监听切换tab返回事件",-1),q=_("p",{class:"content"},"这里是页签全部内容",-1),z=_("p",{class:"content"},"这里是页签待付款内容",-1),D=_("p",{class:"content"},"这里是页签待收获内容",-1),E=_("p",{class:"content"},"这里是页签已完成内容",-1),F=_("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1),A=_("p",{class:"content"},"这里是页签全部内容",-1),B=_("p",{class:"content"},"这里是页签待付款内容",-1),G=_("p",{class:"content"},"这里是页签待收获内容",-1),H=_("p",{class:"content"},"这里是页签已完成内容",-1),J=_("h2",null," 禁止tab内容滑动",-1),K=_("p",{class:"content"},"这里是页签全部内容",-1),M=_("p",{class:"content"},"这里是页签待付款内容",-1),N=_("p",{class:"content"},"这里是页签待收获内容",-1),Q=_("p",{class:"content"},"这里是页签已完成内容",-1),R=_("h2",null,"标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。",-1),U=_("p",{class:"content"},"这里是页签全部内容",-1),V=_("p",{class:"content"},"这里是页签待付款内容",-1),W=_("p",{class:"content"},"这里是页签待收获内容",-1),X=_("p",{class:"content"},"这里是页签已完成内容",-1),Y=_("p",{class:"content"},"这里是页签已取消内容",-1),Z=_("p",{class:"content"},"这里是页签待评价内容",-1),$=_("h2",null,"设置slot:header可以自定义标签",-1),tt=_("p",{class:"content"},"这里是页签全部内容",-1),et=_("p",{class:"content"},"这里是页签待付款内容",-1),at=_("p",{class:"content"},"这里是页签待收获内容",-1),lt=_("p",{class:"content"},"这里是页签已完成内容",-1),nt=_("p",{class:"content"},"这里是页签已取消内容",-1),st=_("p",{class:"content"},"这里是页签待评价内容",-1),ct=_("h2",null,"左右tab布局",-1),it=_("p",{class:"content"},"这里是页签一内容",-1),ot=_("p",{class:"content"},"这里是页签二内容",-1),dt=_("p",{class:"content"},"这里是页签三内容",-1),ut=_("p",{class:"content"},"这里是页签四内容",-1),ft=_("p",{class:"content"},"这里是页签五内容",-1),bt=_("p",{class:"content"},"这里是页签六内容",-1),pt=_("p",{class:"content"},"这里是页签七内容",-1),_t=_("h2",null,"异步操作",-1),rt={class:"content"},ht=v("改变数据");u();const mt=L(((t,e,a,l,n,s)=>{const c=f("nut-tab-panel"),i=f("nut-tab"),o=f("nut-icon"),d=f("nut-button");return b(),p("div",x,[O,_(i,null,{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[T])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[k])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[I])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[P])),_:1})])),_:1}),S,C,_(i,{"default-index":1,onSwitchTab:t.switchTab},{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[q])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[z])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[D])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[E])),_:1})])),_:1},8,["onSwitchTab"]),F,_(i,{"animated-time":500},{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[A])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[B])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[G])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[H])),_:1})])),_:1}),J,_(i,{"no-swiping":!0},{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[K])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[M])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[N])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[Q])),_:1})])),_:1}),R,_(i,{"animated-time":500},{default:L((()=>[_(c,{"tab-title":"全部"},{default:L((()=>[U])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[V])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[W])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[X])),_:1}),_(c,{"tab-title":"已取消"},{default:L((()=>[Y])),_:1}),_(c,{"tab-title":"待评价"},{default:L((()=>[Z])),_:1})])),_:1}),$,_(i,null,{default:L((()=>[_(c,{"tab-title":"全部"},{header:L((()=>[_(o,{name:"dongdong"})])),default:L((()=>[tt])),_:1}),_(c,{"tab-title":"待付款"},{default:L((()=>[et])),_:1}),_(c,{"tab-title":"待收获"},{default:L((()=>[at])),_:1}),_(c,{"tab-title":"已完成"},{default:L((()=>[lt])),_:1}),_(c,{"tab-title":"已取消"},{default:L((()=>[nt])),_:1}),_(c,{"tab-title":"待评价"},{default:L((()=>[st])),_:1})])),_:1}),ct,_(i,{direction:"vertical","animated-time":500,"default-index":2},{default:L((()=>[_(c,{"tab-title":"页签一"},{default:L((()=>[it])),_:1}),_(c,{"tab-title":"页签二"},{default:L((()=>[ot])),_:1}),_(c,{"tab-title":"页签三"},{default:L((()=>[dt])),_:1}),_(c,{"tab-title":"页签四"},{default:L((()=>[ut])),_:1}),_(c,{"tab-title":"页签五"},{default:L((()=>[ft])),_:1}),_(c,{"tab-title":"页签六"},{default:L((()=>[bt])),_:1}),_(c,{"tab-title":"页签七"},{default:L((()=>[pt])),_:1})])),_:1}),_t,t.editList.length>0?(b(),p(i,{key:0,"animated-time":500},{default:L((()=>[(b(!0),p(r,null,h(t.editList,((t,e)=>(b(),p(c,{"tab-title":t.title,key:e},{default:L((()=>[_("p",rt,"这里是页签"+m(e)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):y("",!0),_(d,{type:"primary",onClick:t.changeList},{default:L((()=>[ht])),_:1},8,["onClick"])])}));j.render=mt,j.__scopeId="data-v-5c4081df";export default j;