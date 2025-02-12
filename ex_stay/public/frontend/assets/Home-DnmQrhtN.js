import{_ as g,r as p,o as i,c as l,a as e,b as s,w as x,d as v,n as k,F as C,e as j,t as u,f as _,g as G,h as A,i as S}from"./index-CJFPErz_.js";const U="/assets/ex_stay/frontend/assets/logogreencp-rldII14W.png",D={name:"NavBarComponent",data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}},H={class:"bg-white py-2 w-full max-w-screen-lg mx-auto rounded-sm px-4 md:px-20"},M={class:"flex justify-between items-center"},O={class:"flex items-center gap-2"},N={key:0,class:"md:hidden bg-white shadow-md rounded-sm"};function B(n,t,r,h,c,a){const o=p("router-link");return i(),l("nav",H,[e("div",M,[e("div",null,[s(o,{to:"/"},{default:x(()=>t[1]||(t[1]=[e("img",{src:U,alt:"logo",class:"w-[140px]"},null,-1)])),_:1})]),e("div",O,[t[3]||(t[3]=e("ul",{class:"hidden md:flex mr-2"},[e("li",{class:"inline-block px-2 hover:text-[#7ebd9c] cursor-pointer"},"CATALOGS")],-1)),e("button",{class:"md:hidden p-2",onClick:t[0]||(t[0]=(...m)=>a.toggleMenu&&a.toggleMenu(...m))},t[2]||(t[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)])),t[4]||(t[4]=e("button",{class:"border px-6 py-2 rounded-sm cursor-pointer bg-[#7ebd9c] text-white transition-colors hover:bg-white hover:text-black"},"Login",-1))])]),c.isMenuOpen?(i(),l("div",N,t[5]||(t[5]=[e("ul",{class:"flex flex-col"},[e("li",{class:"px-4 py-2 hover:text-[#7ebd9c] cursor-pointer font-semibold"},"HOME"),e("li",{class:"px-4 py-2 hover:text-[#7ebd9c] cursor-pointer font-semibold"},"CATALOGS")],-1)]))):v("",!0)])}const F=g(D,[["render",B]]),L={name:"GuestDropdown",data(){return{categories:[{name:"Adult",description:"Ages 13 or above",count:1},{name:"Children",description:"Ages 2–12",count:0},{name:"Infant",description:"Under 2",count:0},{name:"Pet",description:"Bringing a service animal?",count:0}],dropdownOpen:!1}},computed:{guestSummary(){return this.categories.filter(t=>t.count>0).map(t=>t.name==="Children"?`${t.count} Children`:`${t.count} ${t.name}${t.count>1?"s":""}`).join(", ")||"Add guests"}},methods:{toggleDropdown(){this.dropdownOpen=!this.dropdownOpen},increment(n){const t=this.categories.find(r=>r.name===n);t&&t.count++},decrement(n){const t=this.categories.find(r=>r.name===n);t&&t.count>0&&t.count--}}},I=["value"],E={key:0,class:"mb-4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg"},V={class:"text-sm font-semibold text-gray-800"},z={class:"text-xs text-gray-500"},P={class:"flex items-center"},T=["onClick","disabled"],R={class:"mx-3 text-gray-700 font-medium"},W=["onClick"];function Y(n,t,r,h,c,a){return i(),l("div",null,[e("div",{onClick:t[0]||(t[0]=(...o)=>a.toggleDropdown&&a.toggleDropdown(...o)),class:"cursor-pointer p-3 h-[40px] bg-white border border-gray-300 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center"},[e("input",{type:"text",readonly:"",value:a.guestSummary,class:"bg-transparent focus:outline-none text-gray-700 font-medium w-[436px]"},null,8,I),e("span",{class:k(["text-gray-500 transform transition-transform duration-200",{"rotate-180":c.dropdownOpen}])}," ▼ ",2)]),c.dropdownOpen?(i(),l("div",E,[(i(!0),l(C,null,j(c.categories,o=>(i(),l("div",{key:o.name,class:"flex items-center justify-between mb-3"},[e("div",null,[e("div",V,u(o.name),1),e("div",z,u(o.description),1)]),e("div",P,[e("button",{class:"p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none transition-colors duration-200",onClick:_(m=>a.decrement(o.name),["stop"]),disabled:o.count===0}," - ",8,T),e("span",R,u(o.count),1),e("button",{class:"p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none transition-colors duration-200",onClick:_(m=>a.increment(o.name),["stop"])}," + ",8,W)])]))),128))])):v("",!0)])}const q=g(L,[["render",Y],["__scopeId","data-v-f659e318"]]),J={name:"listingCard",props:{location:String,distance:Number,price:String,imageUrl:String},computed:{imageSrc(){return new URL(this.imageUrl,import.meta.url).href}}},K={class:"max-w-sm rounded-2xl overflow-hidden shadow-lg hover:drop-shadow-2xl transition-all bg-white"},Q={class:"w-full h-[260px]"},X=["src"],Z={class:"p-4"},ee={class:"text-xl font-semibold text-gray-800"},te={class:"text-gray-500 text-sm"},se={class:"mt-2 flex items-center justify-between"},ne={class:"text-lg font-bold text-green-600"};function oe(n,t,r,h,c,a){return i(),l("div",K,[e("div",Q,[e("img",{src:a.imageSrc,alt:"Location Image",class:"w-full h-full object-cover"},null,8,X)]),e("div",Z,[e("h3",ee,u(r.location),1),e("p",te,u(r.distance)+" kilometers away",1),e("div",se,[e("p",ne,u(r.price)+" / night",1)])])])}const ae=g(J,[["render",oe]]),re={name:"FooterComponent"};function ie(n,t,r,h,c,a){return i(),l("div",null,t[0]||(t[0]=[e("footer",{class:"bg-[#7ebd9c] w-full py-[50px] px-[40px] flex items-center justify-between"},[e("div",{class:"text-white text-[30px]"},"Ex Stay"),e("div",{class:"text-white"},"Copyright © 2025 Ex Stay Inc.")],-1)]))}const le=g(re,[["render",ie]]),ce="/assets/ex_stay/frontend/assets/mountaintroup-DeL_uHpg.jpg",de=G({name:"HomePage",components:{Navbar:F,GuestDropdown:q,listingCard:ae,FooterComponent:le},setup(){return{page:A(2)}}}),pe={class:"w-full h-screen bg-gray-200 text-black"},ue={class:"w-full h-[680px] relative"},me={class:"absolute top-2 left-0 w-full"},ge={class:"flex bg-white justify-center items-center h-auto"},he={class:"flex bg-gray-100 p-4 shadow-lg rounded-lg mt-10 h-auto"},fe={class:"flex items-center justify-center gap-2"},_e={class:"flex items-center"},xe={class:"flex items-center"},ve={class:"w-full bg-white min-h-screen pt-10 px-15 pb-20"},be={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-x-2"},we={class:"flex items-center justify-center pt-15"};function ye(n,t,r,h,c,a){const o=p("Navbar"),m=p("n-date-picker"),b=p("GuestDropdown"),d=p("listingCard"),w=p("router-link"),y=p("n-pagination"),$=p("FooterComponent");return i(),l("div",pe,[e("section",ue,[t[2]||(t[2]=e("img",{src:ce,class:"w-full h-full object-cover",alt:"homebanner"},null,-1)),e("div",me,[s(o)]),t[3]||(t[3]=S('<div class="absolute top-120 left-0 w-full flex items-center justify-center"><div class="relative"><input type="text" id="search" name="search" placeholder="Search For Your Destination" class="bg-gray-100 sm:w-[680px] md:w-[800px] lg:w-[1020px] h-[48px] transition rounded-full pl-5 pr-12 focus:border-none focus:bg-white outline-none"><button type="submit" aria-label="Search" class="w-[42px] h-[42px] absolute right-[3px] top-1/2 transform -translate-y-1/2 bg-[#7ebd9c] rounded-full flex items-center justify-center hover:bg-[#6daa8b] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></div></div>',1))]),e("section",ge,[e("div",he,[e("div",fe,[e("div",_e,[s(m,{value:n.range,"onUpdate:value":t[0]||(t[0]=f=>n.range=f),type:"daterange",clearable:"",class:"text-black"},null,8,["value"])]),e("div",xe,[s(b)])])])]),e("section",ve,[e("div",be,[s(w,{to:"/booking",class:"cursor-pointer"},{default:x(()=>[s(d,{location:"Accra, Ghana",distance:25,price:"GH₵499",imageUrl:"../../assets/images/savvana.jpg"})]),_:1}),s(d,{location:"Accra, Ghana",distance:25,price:"GH₵499",imageUrl:"../../assets/images/sundown.jpg"}),s(d,{location:"Accra, Ghana",distance:25,price:"GH₵499",imageUrl:"../../assets/images/beachvue.jpg"}),s(d,{location:"Accra, Ghana",distance:25,price:"GH₵499",imageUrl:"../../assets/images/homebanner.jpg"}),s(d,{location:"Accra, Ghana",distance:25,price:"GH₵499",imageUrl:"../../assets/images/savvana.jpg"}),s(d,{location:"Accra, Ghana",distance:25,price:"GH₵499",imageUrl:"../../assets/images/savvana.jpg"}),s(d,{location:"Accra, Ghana",distance:25,price:"GH₵499",imageUrl:"../../assets/images/savvana.jpg"}),s(d,{location:"Accra, Ghana",distance:25,price:"GH₵499",imageUrl:"../../assets/images/savvana.jpg"})]),e("div",we,[s(y,{page:n.page,"onUpdate:page":t[1]||(t[1]=f=>n.page=f),"page-count":100},null,8,["page"])])]),s($)])}const ke=g(de,[["render",ye]]);export{ke as default};
