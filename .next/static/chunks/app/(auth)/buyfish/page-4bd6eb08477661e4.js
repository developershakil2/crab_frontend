(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{8765:function(e,s,l){Promise.resolve().then(l.bind(l,2892))},2892:function(e,s,l){"use strict";l.r(s);var a=l(9268),t=l(4214),c=l(7518),n=l(6006),i=l(6008);s.default=()=>{let{push:e}=(0,i.useRouter)(),[s,l]=(0,n.useState)(),[r,o]=(0,n.useState)(""),[x,m]=(0,n.useState)(""),[d,u]=(0,n.useState)("none"),[f,b]=(0,n.useState)(null),[h,p]=(0,n.useState)(null),[g,j]=(0,n.useState)(""),[N,y]=(0,n.useState)("none"),[w,v]=(0,n.useState)("block");(0,n.useEffect)(()=>{let e=localStorage.getItem("usersOb");l(JSON.parse(e)),t.Z.get("https://isda-farm.onrender.com/getcat").then(e=>{b(e.data)}).catch(e=>{console.log(e)})},[]);let k=()=>{try{v("none"),setTimeout(()=>{v("block")},4e3),""===r?(y("flex"),j("please enter minumum amount to buy product")):r&&r<1e3?(y("flex"),j("minimum buy 1000 peso ")):t.Z.post("https://isda-farm.onrender.com/buyfish",{userId:s.userId,buyAmount:r,productId:h,isBuy:!0},{headers:{"Content-Type":"application/json"}}).then(s=>{m(s.data),400==s.status?(y("flex"),j(s.data)):200===s.status?(y("flex"),j(s.data),setTimeout(()=>{e("/dashboard")},4e3)):u(none)}).catch(e=>{console.log(e)})}catch(e){console.error("Error:",e)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{display:N},className:"absolute bg-[#7e0beb69] z-50 top-0 left-0 w-full h-screen flex justify-center items-center",children:(0,a.jsxs)("div",{className:"w-[320px] flex flex-col p-10 justify-center items-center h-[320px] rounded-xl bg-white",children:[(0,a.jsx)("h2",{className:"text-md font-bold text-center ",children:g}),(0,a.jsx)("button",{onClick:()=>{y("none"),u("none")},className:"bg-black p-5 mt-5 rounded-full text-white px-20 font-black",children:"Okay"})]})}),(0,a.jsxs)("div",{className:"card_gradient overflow-hidden h-screen  relative ",children:[(0,a.jsx)("img",{src:"images/crab3.gif",alt:"fish",className:"w-[140px] h-[140px] fish1 absolute"}),(0,a.jsx)("img",{src:"images/crab3.gif",alt:"fish",className:"w-[160px] h-[160px] fish7 absolute"}),(0,a.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[120px] h-[120px] fish2 absolute"}),(0,a.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[90px] h-[90px] fish3 absolute"}),(0,a.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[70px] h-[70px] fish4 absolute"}),(0,a.jsx)("img",{src:"images/crab3.gif",alt:"fish",className:"w-[160px] h-[160px] fish5 absolute"}),(0,a.jsx)("img",{src:"images/crab3.gif",alt:"fish",className:"w-[200px] h-[200px] fish6 absolute"}),(0,a.jsxs)("div",{className:"bubble_wrap ",children:[(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[25px] h-[25px] b1 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b2 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b3 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[20px] h-[20px] b4 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[10px] h-[10px] b5 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[25px] h-[25px] b6 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[13px] h-[13px] b7 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[22px] h-[22px] b8 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b9 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b10 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b11 rounded-full absolute"})]}),(0,a.jsxs)("div",{className:"h-screen w-full bg-[#00000069] flex-col flex justify-center items-center  absolute top-0 left-0",children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full",children:(0,a.jsx)(c.default,{color:"#fff",visibility:"none",vl:"block",wd:"30%"})}),(0,a.jsx)("div",{className:" w-full flex justify-center items-center flex-col",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("h2",{className:"mb-10 text-center text-white font-black text-2xl",children:"Select a product and buy and start earning"}),(0,a.jsx)("div",{className:"w-full  flex justify-center items-center",children:(0,a.jsx)("div",{className:"cat_wrap w-[70%] mx-auto flex-row flex justify-between items-center",children:(null==f?void 0:f.length)>0&&f.map(e=>(0,a.jsxs)("div",{onClick:()=>{u("flex"),p("".concat(e._id))},className:"cat_card hover:cursor-pointer my-3 rounded-xl w-[130px] h-[130px] bg-white flex justify-center items-center flex-col",children:[(0,a.jsx)("img",{src:null==e?void 0:e.productIcon,alt:"fish",className:"w-[80px] h-[80px] rounded-full mb-2"}),(0,a.jsx)("h5",{children:null==e?void 0:e.productName})]},null==e?void 0:e._id))})})]})}),(0,a.jsxs)("div",{style:{display:d},className:"w-full flex justify-center flex-col absolute h-screen left-0 top-0 bg-[#00000079] items-center",children:[(0,a.jsx)("div",{className:"flex justify-between bl_wrap items-center",children:(0,a.jsx)("div",{className:"w-[350px]  my-4 mx-2 border-[1px] mt-10 rounded-xl",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center px-5 my-5 items-start",children:[(0,a.jsx)("p",{className:"font-black text-white",children:"Buy Now*"}),(0,a.jsxs)("div",{className:"border-[1px] rounded-lg p-2 flex w-[160px] mb-4  ",children:[(0,a.jsx)("img",{src:"images/crab3.gif",alt:"bank",className:"w-[40px] rounded-lg h-[40px]"}),(0,a.jsxs)("p",{className:"leading-4 ml-3 text-white font-[400]",children:["Peso Crab ",(0,a.jsx)("br",{})," investment"]})]})]})})}),(0,a.jsx)("div",{className:"w-[350px] justify-center items-center my-4 mx-2 border-[1px] rounded-xl",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center px-5 my-5 items-start",children:[(0,a.jsx)("h3",{className:"text-green-400",children:x}),(0,a.jsxs)("div",{className:"flex flex-col justify-center px-5 w-full items-start",children:[(0,a.jsx)("label",{name:"phone",className:"text-white font-bold ml-3 text-sm",children:"minimum buy fish 1000 peso *"}),(0,a.jsx)("input",{type:"number",value:r,onChange:e=>o(e.target.value),className:"w-full text-white rounded-2xl py-3 bg-transparent border-[1px] outline-none  px-2 text-sm font-black",placeholder:"amount   "})]}),(0,a.jsx)("div",{className:"flex flex-col justify-center px-5 w-full items-start",children:(0,a.jsx)("button",{style:{display:w},type:"button",onClick:()=>k(),className:"w-full rounded-2xl mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black",children:"Buy Now"})})]})})]})]})]})]})}},7518:function(e,s,l){"use strict";l.r(s);var a=l(9268),t=l(6006);s.default=e=>{let{color:s,visibility:l,vl:c,wd:n}=e,[i,r]=(0,t.useState)("none");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"w-full h-[70px]",children:(0,a.jsxs)("div",{className:"container naviwrap items-start justify-between flex mx-auto",children:[(0,a.jsxs)("div",{className:"h-[60px] m-3 flex items-center justify-start",children:[(0,a.jsx)("img",{className:"rounded-full h-[53px] w-[55px]",src:"images/logo.png",alt:"log"}),(0,a.jsx)("span",{className:"ml-2 font-black",style:{color:s},children:"Peso Crab"})]}),(0,a.jsxs)("div",{className:"flex menu_wrap justify-between items-center h-[70px] ",style:{width:n,display:i},children:[(0,a.jsx)("button",{onClick:()=>r("none"),className:"w-full flex justify-end",children:(0,a.jsx)("img",{className:"w-[40] h-[40px] rounded-full",src:"images/close.png",alt:"close"})}),(0,a.jsx)("a",{href:"/",style:{color:s,display:l},className:"text-sm font-black",children:"Home"}),(0,a.jsx)("a",{href:"/signup",style:{color:s,display:l},className:"text-sm font-black",children:"Sign up"}),(0,a.jsx)("a",{href:"/login",style:{color:s,display:l},className:"text-sm font-black",children:"Login"}),(0,a.jsx)("a",{href:"/dashboard",style:{color:s,display:c},className:"text-sm font-black",children:"Dashboard"}),(0,a.jsx)("a",{href:"/wallet",style:{color:s,display:c},className:"text-sm font-black",children:"wallet"}),(0,a.jsx)("a",{href:"/referral",style:{color:s,display:c},className:"text-sm font-black",children:"referral"}),(0,a.jsx)("a",{href:"/profile",style:{color:s,display:c},className:"text-sm font-black",children:"profile"})]}),(0,a.jsx)("button",{onClick:()=>r("flex"),className:"w-[40px] navBtn flex justify-end m-4",children:(0,a.jsx)("img",{className:"w-[35px] h-[35px] rounded-md",src:"images/navicon.png",alt:"close"})}),(0,a.jsxs)("div",{className:"flex menu_wrap_web justify-between items-center h-[70px] ",style:{width:n},children:[(0,a.jsx)("a",{href:"/",style:{color:s,display:l},className:"text-sm font-black",children:"Home"}),(0,a.jsx)("a",{href:"/signup",style:{color:s,display:l},className:"text-sm font-black",children:"Sign up"}),(0,a.jsx)("a",{href:"/login",style:{color:s,display:l},className:"text-sm font-black",children:"Login"}),(0,a.jsx)("a",{href:"/dashboard",style:{color:s,display:c},className:"text-sm font-black",children:"Dashboard"}),(0,a.jsx)("a",{href:"/wallet",style:{color:s,display:c},className:"text-sm font-black",children:"wallet"}),(0,a.jsx)("a",{href:"/referral",style:{color:s,display:c},className:"text-sm font-black",children:"referral"}),(0,a.jsx)("a",{href:"/profile",style:{color:s,display:c},className:"text-sm font-black",children:"profile"})]})]})})})}}},function(e){e.O(0,[15,253,961,744],function(){return e(e.s=8765)}),_N_E=e.O()}]);