(this["webpackJsonpproject-dawn"]=this["webpackJsonpproject-dawn"]||[]).push([[0],{224:function(e,t,a){e.exports=a(471)},229:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},236:function(e,t,a){},265:function(e,t){},267:function(e,t){},297:function(e,t){},298:function(e,t){},342:function(e,t){},344:function(e,t){},367:function(e,t){},458:function(e,t,a){},459:function(e,t,a){e.exports=a.p+"static/media/Enigma Coming soon.abcb073d.png"},460:function(e,t,a){e.exports=a.p+"static/media/EnigmaTopics.687b0223.png"},461:function(e,t,a){e.exports=a.p+"static/media/CodeRed Inductions.150802d1.png"},462:function(e,t,a){},463:function(e,t,a){},464:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(40),r=a.n(c),o=(a(229),a(230),a(231),a(130),a(13)),i=a(14),s=a(15),m=a(16),u=a(17),d=a(79),E=a(51),p=(a(232),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(){a.elem&&a.elem.offsetTop>0?a.setState({scrolled:!0}):a.setState({scrolled:!1})},a.state={scrolled:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,{className:this.state.scrolled?"color-nav":"",collapseOnSelect:!0,expand:"md",variant:"dark",sticky:"top",ref:function(t){return e.elem=t}},l.a.createElement(d.a.Brand,{className:"nav-brand",href:"/"},"CODE RED"),l.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(E.a,{className:"mr-auto"},l.a.createElement(E.a.Link,{href:"/project-dawn/enigma"},"Enigma-NITR"),l.a.createElement(E.a.Link,{href:"/project-dawn/ide"},"IDE"),l.a.createElement(E.a.Link,{href:"/project-dawn/apply"},"Join")),l.a.createElement(E.a,null,l.a.createElement(E.a.Link,{href:"/project-dawn/login"},"Login"),l.a.createElement(E.a.Link,{href:"/project-dawn/signup"},"SignUp"))))}}]),t}(n.Component)),h=(a(236),a(223)),g=a(214),f=a.n(g),v=(a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(473)),b=a(474),w=a(475),N=a(476),k=a(250),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).modes=[{value:"c_cpp",label:"C/C++",language:"cpp17",versionIndex:0},{value:"java",language:"java",label:"Java",versionIndex:3},{value:"python",label:"Python3",language:"python3",versionIndex:3}],a.selected=0,a.onModeChange=function(e){a.selected=a.modes.indexOf(e),a.setState({mode:e.value})},a.onScriptChange=function(e){return a.setState({script:e})},a.onStdInChange=function(e){return a.setState({stdin:e.target.value})},a.onClear=function(){return a.setState({script:""})},a.onRun=function(){a.setState({executing:!0,stdout:"Compiling and Executing your program..."}),k({url:"https://codered-web-server.herokuapp.com/api/execute",method:"POST",json:{script:a.state.script,language:a.modes[a.selected].language,versionIndex:a.modes[a.selected].versionIndex,stdin:a.state.stdin}},(function(e,t,n){t&&a.setState({stdout:t.body.output||"",executing:!1})}))},a.state={script:"",theme:"monokai",mode:a.modes[a.selected].value,stdin:"",stdout:"",executing:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ide bottomPadding",id:"ide"},l.a.createElement("div",{className:"center bottomPadding"},l.a.createElement("span",{style:{color:"#ffffff"}},"Select Language:")," ",l.a.createElement(h.a,{className:"inline langSelect",name:"mode",placeholder:this.modes[this.selected].label,value:this.state.mode,onChange:this.onModeChange,options:this.modes,isSearchable:!1}),l.a.createElement(f.a,{className:"editor",mode:this.state.mode,theme:this.state.theme,fontSize:14,height:"300px",width:"50%",tabSize:2,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0},value:this.state.script,onChange:this.onScriptChange}),l.a.createElement(v.a,{className:"btnBar"},this.state.executing?l.a.createElement(b.a,{animation:"grow",variant:"danger"}):l.a.createElement(w.a,{className:"actions",id:this.state.executing?"running":"run",type:"button",disabled:this.state.executing,onClick:this.onRun},this.state.executing?"Running...":"Run"),l.a.createElement(w.a,{className:"actions",id:"clear",type:"button",onClick:this.onClear},"Clear"))),l.a.createElement(N.a,{className:"center wd65",borderless:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"StdIn"),l.a.createElement("th",null,"StdOut")))),l.a.createElement("div",{className:"IO center wd65"},l.a.createElement("div",{className:"center inline wd50"},l.a.createElement("textarea",{className:"inp noLeftBorder",placeholder:" Enter custom input",value:this.state.stdin,onChange:this.onStdInChange})),l.a.createElement("div",{className:"center inline wd50"},l.a.createElement("textarea",{className:"out noRightBorder",placeholder:" Run to generate output",value:this.state.stdout,readOnly:!0}))))}}]),t}(n.Component),S=(a(458),a(0)),y=a(478),x=a(215),I=function(){return l.a.createElement("div",null)},j=function(){var e=Object(n.useRef)(null);return l.a.createElement("div",{className:"bottomPadding contain center"},l.a.createElement("div",{className:"bottomPadding"},l.a.createElement(y.a,null,l.a.createElement(y.a.Item,null,l.a.createElement(y.a.Caption,null,l.a.createElement("div",{className:"bounce",onClick:function(){return window.scrollTo(0,e.current.offsetTop)}},l.a.createElement(S.b.Provider,{value:{color:"#FA3264",size:"3em"}},l.a.createElement(x.a,null))))),l.a.createElement(y.a.Item,null,l.a.createElement("img",{src:a(459)})),l.a.createElement(y.a.Item,null,l.a.createElement("img",{src:a(460)})),l.a.createElement(y.a.Item,null,l.a.createElement("img",{src:a(461)})))),l.a.createElement("div",{ref:e},l.a.createElement(I,null)))},O=a(220),T=a(49),R=(a(477),a(216),a(462),a(463),a(78)),L=a(217),P=a(128),_=a(218),A=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"foot"},l.a.createElement("div",{className:"about f-inline"},l.a.createElement("div",{className:"f-title"},"ABOUT"),l.a.createElement("div",{className:"f-body"},"Code Red is a club under the Technical Society of National Institute of Technology Rourkela, centralized on improving the coding culture of the college. We conduct workshops, regular classes, and online contests to indulge budding minds in the sport of competitive programming."),l.a.createElement("div",{className:"social-links"},l.a.createElement(S.b.Provider,{value:{color:"#FA3264",size:"2em"}},l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.facebook.com/coderednitrkl"},l.a.createElement(R.a,null)),l.a.createElement("a",{href:"https://www.instagram.com/codered.nitrkl/"},l.a.createElement(R.c,null)),l.a.createElement("a",{href:"https://www.linkedin.com/company/the-code-red-club/"},l.a.createElement(R.d,null)),l.a.createElement("a",{href:"https://www.github.com/codered-nitr"},l.a.createElement(R.b,null)))))),l.a.createElement("div",{className:"events f-inline"},l.a.createElement("div",{className:"f-title"},"EVENTS"),l.a.createElement("div",{className:"f-body"},"To be updated soon.")),l.a.createElement("div",{className:"contact-info f-inline"},l.a.createElement("div",{className:"f-title"},"CONTACT INFO"),l.a.createElement("div",{className:"f-body"},l.a.createElement("p",null,l.a.createElement("strong",{className:"cinfo"},"Address: "),"Student Activity Centre, Sector 1, National Institute of Technology, Rourkela. Odisha, India. PIN:769008"),l.a.createElement("p",null,l.a.createElement("strong",{className:"cinfo"},"Email: "),l.a.createElement("a",{href:"mailto:codered.nitrkl@gmail.com"},"codered.nitrkl@gmail.com")))),l.a.createElement("div",{className:"nitr-logo f-inline"},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/NIT_Rourkela_Colour_Logo_SVG.svg/1200px-NIT_Rourkela_Colour_Logo_SVG.svg.png"}))),l.a.createElement("div",{className:"sub-footer"},l.a.createElement("div",{className:"center"},l.a.createElement(S.b.Provider,{value:{color:"#FA3264",size:"1.5em"}},l.a.createElement(P.a,null)," with ",l.a.createElement(L.a,null)," & ",l.a.createElement(P.b,null))),l.a.createElement("div",{className:"center"},l.a.createElement(S.b.Provider,{value:{color:"#FA3264",size:"1.5em"}},l.a.createElement("a",{href:"https://www.github.com/codered-nitr/project-dawn"},l.a.createElement(_.a,null))))))},B=(a(464),function(){return l.a.createElement("div",{className:"center maintenance"},l.a.createElement("h1",null,"This web page is under maintenance!"),l.a.createElement("img",{src:"https://www.gadgeon.com/theme/cms_image/1559541421_application-maintenance.png"}),l.a.createElement("h3",null,"Please come back later."))}),z=a(219);var F=function(){return l.a.createElement("div",{className:"area rain"},l.a.createElement(z.Helmet,null,l.a.createElement("title",null,"Code Red NIT-R")),l.a.createElement(O.a,{basename:"/project-dawn"},l.a.createElement("div",{className:"appBody"},l.a.createElement(p,null),l.a.createElement("hr",null),l.a.createElement("ul",{className:"circles"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)),l.a.createElement(T.c,null,l.a.createElement(T.a,{exact:!0,path:"/",component:j}),l.a.createElement(T.a,{path:"/enigma",component:B}),l.a.createElement(T.a,{path:"/ide",component:C}),l.a.createElement(T.a,{path:"/apply",component:B}),l.a.createElement(T.a,{path:"/login",component:B}),l.a.createElement(T.a,{path:"/signup",component:B})),l.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[224,1,2]]]);
//# sourceMappingURL=main.9ed7d3da.chunk.js.map