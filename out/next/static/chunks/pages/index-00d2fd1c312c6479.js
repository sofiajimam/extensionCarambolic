(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9873)}])},9873:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Home}});var a=t(5893),o=t(7294),r=t(6049),i=t.n(r),s=t(5121);function Index(e){let{navigateToPage:n,checkIfUserIsLoggedIn:t}=e,[r,c]=(0,o.useState)("");(0,o.useEffect)(()=>{t(!0)},[]);let handleSignIn=async()=>{await s.Z.post("".concat("http://localhost:5000","/login"),{email:r},{headers:{"Content-Type":"application/json"}}).then(e=>{console.log("RESPONSE"),console.log(e),localStorage.setItem("token",e.data.token),t(!1)}).catch(e=>{console.log("ERROR"),console.error(e)})};return(0,a.jsx)("div",{className:i().container,children:(0,a.jsxs)("main",{className:i().main,children:[(0,a.jsx)("div",{className:"".concat(i().circle," ").concat(i().circle1)}),(0,a.jsx)("div",{className:"".concat(i().circle," ").concat(i().circle2)}),(0,a.jsx)("div",{className:"".concat(i().circle," ").concat(i().circle3)}),(0,a.jsx)("div",{style:{alignSelf:"left"},children:(0,a.jsx)("img",{src:"/icons/carambolic.png",alt:"Logo",width:"30",height:"30"})}),(0,a.jsx)("h1",{children:"Your bookmarks, on steroids"}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",marginTop:"20px"},children:[(0,a.jsx)("input",{type:"email",value:r,onChange:e=>c(e.target.value),placeholder:"Enter your email",onKeyDown:e=>{"Enter"===e.key&&handleSignIn()},style:{padding:"10px",fontSize:"16px",borderRadius:"5px",border:"1px solid #ccc",width:"100%",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}),(0,a.jsx)("p",{className:i().bottomText,children:"We only need a way to sync your bookmarks with our app"})]})]})})}var c=t(5434);function AlreadySaved(e){let{navigateToPage:n}=e;return(0,a.jsx)("div",{className:i().container,children:(0,a.jsx)("main",{className:i().main,children:(0,a.jsxs)("div",{className:i().content,children:[(0,a.jsx)(c.W3L,{size:40,color:"#FF9500"}),(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Hum, this looks familiar"})}),(0,a.jsx)("p",{className:i().descriptionUnderline,children:"Looks like this link is already in your bookmark library"})]})})})}function Error(e){let{navigateToPage:n}=e;return(0,a.jsx)("div",{className:i().container,children:(0,a.jsx)("main",{className:i().main,children:(0,a.jsxs)("div",{className:i().content,children:[(0,a.jsx)(c.wr$,{size:40,color:"#FF3B30"}),(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Fuck you, we're not saving that"})}),(0,a.jsx)("p",{className:i().descriptionUnderline,children:"We had a problem saving this bookmark, please try again later"})]})})})}function Saved(e){let{navigateToPage:n}=e;return(0,a.jsx)("div",{className:i().container,children:(0,a.jsx)("main",{className:i().main,children:(0,a.jsxs)("div",{className:i().content,children:[(0,a.jsx)(c.HhX,{size:40,color:"#34C759"}),(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Bookmark succesfully saved!"})}),(0,a.jsx)("p",{className:i().descriptionUnderline,children:"You can now find this bookmark in your Carambolic"})]})})})}var l=t(2729),d=t(6429),u=t(7015),m=t(8454);let h=new d.u({uri:"http://localhost:5000/graphql"}),g=new u.f({cache:new m.h,link:h});var x=t(8806);function _templateObject(){let e=(0,l._)(["\n          mutation createBookmark(\n            $thumbnail: String!\n            $title: String!\n            $htmlContent: String!\n            $url: String!\n          ) {\n            bookmarkCreate(\n              input: {\n                bookmarkInput: {\n                  thumbnail: $thumbnail\n                  title: $title\n                  htmlContent: $htmlContent\n                  url: $url\n                }\n              }\n            ) {\n              bookmark {\n                id\n                thumbnail\n                url\n                title\n                summary\n                isTrue\n                user {\n                  id\n                  email\n                  name\n                }\n              }\n            }\n          }\n        "]);return _templateObject=function(){return e},e}function Introduction(e){let{navigateToPage:n,readArticle:t}=e;async function createBookmark(e,t,a,o){let r=function(){try{return localStorage.getItem("token")}catch(e){return console.error(e),null}}();if(!r){console.error("No token found");return}await g.mutate({mutation:(0,x.Ps)(_templateObject()),variables:{thumbnail:e,title:t,htmlContent:a,url:o},context:{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}},fetchPolicy:"network-only"}).then(e=>{console.log("response",e),null==e.data.bookmarkCreate?n("already_saved"):n("saved")}).catch(e=>{if(console.log("error",e),e.message.includes("Url has already been taken")){n("already_saved");return}n("error")})}return(0,o.useEffect)(()=>{t&&chrome.runtime.sendMessage({message:"getCurrentTabInfo"},e=>{if(chrome.runtime.lastError)console.log("ERROR"),console.error(chrome.runtime.lastError);else{console.log("RESULT"),console.log(e);let n=e.favicon,t=e.title,a=e.pTexts.map(e=>"<p>".concat(e,"</p>")).join(", "),o=e.url;createBookmark(n,t,a,o)}})},[]),(0,a.jsx)("div",{className:i().container,children:(0,a.jsx)("main",{className:i().main,children:(0,a.jsxs)("div",{className:i().content,children:[(0,a.jsx)(c.gwC,{size:40,color:"#1A73E8"}),(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"You are in!"})}),(0,a.jsx)("p",{className:i().descriptionUnderline,children:"Try using the extension now! You can save any article you want. Just close the extension and open it again to save another article."})]})})})}function Home(){let[e,n]=(0,o.useState)("index"),[t,r]=(0,o.useState)(!1),navigateToPage=e=>{n(e)};return(0,a.jsxs)(a.Fragment,{children:["index"===e&&(0,a.jsx)(Index,{navigateToPage:navigateToPage,checkIfUserIsLoggedIn:e=>{let n=localStorage.getItem("token");n&&(navigateToPage("introduction"),r(e))}}),"saved"===e&&(0,a.jsx)(Saved,{navigateToPage:navigateToPage}),"error"===e&&(0,a.jsx)(Error,{navigateToPage:navigateToPage}),"introduction"===e&&(0,a.jsx)(Introduction,{navigateToPage:navigateToPage,readArticle:t}),"already_saved"===e&&(0,a.jsx)(AlreadySaved,{navigateToPage:navigateToPage})]})}},6049:function(e){e.exports={container:"Pages_container__nsidX",circle:"Pages_circle__oebVn",circle1:"Pages_circle1__GKQ9F",circle2:"Pages_circle2__8nEx_",circle3:"Pages_circle3__D5Z2e",main:"Pages_main__YBDSF",content:"Pages_content__YkMoy",description:"Pages_description__kuqfn",descriptionUnderline:"Pages_descriptionUnderline__pOG_R",bottomText:"Pages_bottomText__b6tFV"}}},function(e){e.O(0,[228,631,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);