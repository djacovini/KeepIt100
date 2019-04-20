(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(66)},31:function(e,t,a){},51:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(21),r=a.n(o),c=a(5),i=a(6),s=a(8),u=a(7),m=a(9),h=a(69),d=a(71),p=a(70),E=a(22);a(31);var f=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var b=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},v=a(10),g=a.n(v),k={getBooks:function(){return g.a.get("/api/books")},getBook:function(e){return g.a.get("/api/books/"+e)},deleteBook:function(e){return g.a.delete("/api/books/"+e)},saveBook:function(e){return g.a.post("/api/books",e)}},y=a(68);function j(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function B(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function w(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(51);function O(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function C(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function z(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function S(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],title:"",author:"",synopsis:""},a.loadBooks=function(){k.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){k.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(E.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&k.saveBook({title:a.state.title,author:a.state.author,synopsis:a.state.synopsis}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(j,{fluid:!0},l.a.createElement(B,null,l.a.createElement(w,{size:"md-6"},l.a.createElement(b,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(C,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),l.a.createElement(C,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Author (required)"}),l.a.createElement(z,{value:this.state.synopsis,onChange:this.handleInputChange,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(S,{disabled:!(this.state.author&&this.state.title),onClick:this.handleFormSubmit},"Submit Book"))),l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement(b,null,l.a.createElement("h1",null,"Books On My List")),this.state.books.length?l.a.createElement(O,null,this.state.books.map(function(t){return l.a.createElement(N,{key:t._id},l.a.createElement(y.a,{to:"/books/"+t._id},l.a.createElement("strong",null,t.title," by ",t.author)),l.a.createElement(f,{onClick:function(){return e.deleteBook(t._id)}}))})):l.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={book:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(j,{fluid:!0},l.a.createElement(B,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(b,null,l.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),l.a.createElement(B,null,l.a.createElement(w,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,this.state.book.synopsis)))),l.a.createElement(B,null,l.a.createElement(w,{size:"md-2"},l.a.createElement(y.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component);var A=function(){return l.a.createElement(j,{fluid:!0},l.a.createElement(B,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(b,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var M=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))},F=a(23),R=a.n(F),W=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=R.a.parse(this.props.location.search);e.token&&(window.localStorage.setItem("jwt",e.token),this.props.history.push("/"))}},{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(M,null),l.a.createElement(d.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:I}),l.a.createElement(p.a,{exact:!0,path:"/books",component:I}),l.a.createElement(p.a,{exact:!0,path:"/books/:id",component:x}),l.a.createElement(p.a,{component:A})),l.a.createElement("a",{href:"http://localhost:4000/auth/google",class:"button"},l.a.createElement("div",null,l.a.createElement("span",{class:"svgIcon t-popup-svg"},l.a.createElement("svg",{class:"svgIcon-use",width:"25",height:"37",viewBox:"0 0 25 25"},l.a.createElement("g",{fill:"none","fill-rule":"evenodd"},l.a.createElement("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),l.a.createElement("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),l.a.createElement("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),l.a.createElement("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})))),l.a.createElement("span",{class:"button-label"},"Sign in with Google")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h.a,null,l.a.createElement(d.a,null,l.a.createElement(p.a,{path:"/",component:W}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.b51e20ec.chunk.js.map