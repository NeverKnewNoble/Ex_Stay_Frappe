import{g as d,c as p,b as o,w as n,r as t,o as c,a as u,u as f,j as _,f as w,s as r}from"./index-CJFPErz_.js";const g={class:"m-3 flex flex-row items-center justify-center"},h=d({__name:"Login",setup(x){function l(a){let e=new FormData(a.target);r.login.submit({email:e.get("email"),password:e.get("password")})}return(a,e)=>{const s=t("Input"),i=t("Button"),m=t("Card");return c(),p("div",g,[o(m,{title:"Login to your FrappeUI App!",class:"w-full max-w-md mt-4"},{default:n(()=>[u("form",{class:"flex flex-col space-y-2 w-full",onSubmit:w(l,["prevent"])},[o(s,{required:"",name:"email",type:"text",placeholder:"johndoe@email.com",label:"User ID"}),o(s,{required:"",name:"password",type:"password",placeholder:"••••••",label:"Password"}),o(i,{loading:f(r).login.loading,variant:"solid"},{default:n(()=>e[0]||(e[0]=[_("Login")])),_:1},8,["loading"])],32)]),_:1})])}}});export{h as default};
