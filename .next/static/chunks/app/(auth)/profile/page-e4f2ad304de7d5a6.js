(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{3685:function(e,s,l){Promise.resolve().then(l.bind(l,386))},386:function(e,s,l){"use strict";l.r(s);var a=l(9268),t=l(6006),r=l(7518);l(8098);var c=l(4214),i=l(6008);s.default=()=>{let{push:e}=(0,i.useRouter)(),[s,l]=(0,t.useState)("loading.."),[n,o]=(0,t.useState)("");return console.log(n),(0,t.useEffect)(()=>{let e=localStorage.getItem("usersOb"),s=JSON.parse(e);l(s),c.Z.get("https://isda-farm.onrender.com/getuni/".concat(null==s?void 0:s.userId)).then(e=>{o(e.data)}).catch(e=>{console.log(e)})},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"card_gradient card_gradient_m overflow-hidden h-screen  relative ",children:[(0,a.jsx)("img",{src:"images/crab3.gif",alt:"fish",className:"w-[140px] h-[140px] fish1 absolute"}),(0,a.jsx)("img",{src:"images/crab3.gif",alt:"fish",className:"w-[160px] h-[160px] fish7 absolute"}),(0,a.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[120px] h-[120px] fish2 absolute"}),(0,a.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[90px] h-[90px] fish3 absolute"}),(0,a.jsx)("img",{src:"images/fish.png",alt:"fish",className:"w-[70px] h-[70px] fish4 absolute"}),(0,a.jsx)("img",{src:"images/crab3.gif",alt:"fish",className:"w-[160px] h-[160px] fish5 absolute"}),(0,a.jsx)("img",{src:"images/crab3.gif",alt:"fish",className:"w-[200px] h-[200px] fish6 absolute"}),(0,a.jsxs)("div",{className:"bubble_wrap ",children:[(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[25px] h-[25px] b1 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b2 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b3 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[20px] h-[20px] b4 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[10px] h-[10px] b5 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[25px] h-[25px] b6 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[13px] h-[13px] b7 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[22px] h-[22px] b8 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b9 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b10 rounded-full absolute"}),(0,a.jsx)("img",{src:"images/b2.png",alt:"bubble",className:"w-[15px] h-[15px] b11 rounded-full absolute"})]}),s?(0,a.jsxs)("div",{className:"h-screen w-full bg-[#00000069] flex-col flex justify-center items-center  absolute top-0 left-0",children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full",children:(0,a.jsx)(r.default,{color:"#fff",visibility:"none",vl:"block",wd:"30%"})}),(0,a.jsx)("div",{className:"w-[350px] justify-center items-center my-4 mx-2 border-[1px] rounded-xl",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center px-5 my-5 items-start",children:[(0,a.jsx)("img",{src:null==s?void 0:s.userprofile,alt:"refer",className:"w-[150px] mx-auto h-[150px] rounded-full"}),(0,a.jsxs)("div",{className:"profile_wrap flex justify-center w-full mt-4 flex-col items-center",children:[(0,a.jsx)("h4",{className:"text-white font-black text-center w-full",children:null==s?void 0:s.username}),(0,a.jsxs)("h4",{className:"text-white font-black text-center w-full",children:["+",null==s?void 0:s.userphone]})]}),(0,a.jsx)("div",{className:"flex mt-3 flex-col justify-center px-5 w-full items-start",children:(0,a.jsxs)("button",{onClick:()=>{localStorage.removeItem("usersOb"),alert("you've logout from your account"),e("/")},className:"w-full rounded-2xl flex justify-center items-center mt-5 text-white py-3 bg-transparent border-[1px] outline-none  px-2 text-md font-black",children:[(0,a.jsx)("span",{className:"mr-3",children:"Logout"})," ",(0,a.jsx)("img",{src:"images/logout.png",alt:"logout",className:"w-[20px] h-[20px]"})]})})]})})]}):void e("/")]})})}},7518:function(e,s,l){"use strict";l.r(s);var a=l(9268),t=l(6006);s.default=e=>{let{color:s,visibility:l,vl:r,wd:c}=e,[i,n]=(0,t.useState)("none");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"w-full h-[70px]",children:(0,a.jsxs)("div",{className:"container naviwrap items-start justify-between flex mx-auto",children:[(0,a.jsxs)("div",{className:"h-[60px] m-3 flex items-center justify-start",children:[(0,a.jsx)("img",{className:"rounded-full h-[53px] w-[55px]",src:"images/logo.png",alt:"log"}),(0,a.jsx)("span",{className:"ml-2 font-black",style:{color:s},children:"Peso Crab"})]}),(0,a.jsxs)("div",{className:"flex menu_wrap justify-between items-center h-[70px] ",style:{width:c,display:i},children:[(0,a.jsx)("button",{onClick:()=>n("none"),className:"w-full flex justify-end",children:(0,a.jsx)("img",{className:"w-[40] h-[40px] rounded-full",src:"images/close.png",alt:"close"})}),(0,a.jsx)("a",{href:"/",style:{color:s,display:l},className:"text-sm font-black",children:"Home"}),(0,a.jsx)("a",{href:"/signup",style:{color:s,display:l},className:"text-sm font-black",children:"Sign up"}),(0,a.jsx)("a",{href:"/login",style:{color:s,display:l},className:"text-sm font-black",children:"Login"}),(0,a.jsx)("a",{href:"/dashboard",style:{color:s,display:r},className:"text-sm font-black",children:"Dashboard"}),(0,a.jsx)("a",{href:"/wallet",style:{color:s,display:r},className:"text-sm font-black",children:"wallet"}),(0,a.jsx)("a",{href:"/referral",style:{color:s,display:r},className:"text-sm font-black",children:"referral"}),(0,a.jsx)("a",{href:"/profile",style:{color:s,display:r},className:"text-sm font-black",children:"profile"})]}),(0,a.jsx)("button",{onClick:()=>n("flex"),className:"w-[40px] navBtn flex justify-end m-4",children:(0,a.jsx)("img",{className:"w-[35px] h-[35px] rounded-md",src:"images/navicon.png",alt:"close"})}),(0,a.jsxs)("div",{className:"flex menu_wrap_web justify-between items-center h-[70px] ",style:{width:c},children:[(0,a.jsx)("a",{href:"/",style:{color:s,display:l},className:"text-sm font-black",children:"Home"}),(0,a.jsx)("a",{href:"/signup",style:{color:s,display:l},className:"text-sm font-black",children:"Sign up"}),(0,a.jsx)("a",{href:"/login",style:{color:s,display:l},className:"text-sm font-black",children:"Login"}),(0,a.jsx)("a",{href:"/dashboard",style:{color:s,display:r},className:"text-sm font-black",children:"Dashboard"}),(0,a.jsx)("a",{href:"/wallet",style:{color:s,display:r},className:"text-sm font-black",children:"wallet"}),(0,a.jsx)("a",{href:"/referral",style:{color:s,display:r},className:"text-sm font-black",children:"referral"}),(0,a.jsx)("a",{href:"/profile",style:{color:s,display:r},className:"text-sm font-black",children:"profile"})]})]})})})}},8098:function(){}},function(e){e.O(0,[15,253,961,744],function(){return e(e.s=3685)}),_N_E=e.O()}]);