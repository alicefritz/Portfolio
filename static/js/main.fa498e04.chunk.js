(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"id":1,"name":"CUL8R","description":"A node chat room using Socket.io! Users can connect to chat in realtime with other connected users, have nudge-wars (just like on MSN!) and tag other users among other things.","madeWith":"HTML CSS JS Node","image":"./images/cul8r_img.jpg","github":"https://github.com/alicefritz/cul8r","live":"https://cul8r.herokuapp.com/"},{"id":2,"name":"Thoughts","description":"A shared diary or bulletin board built with React. Users can share their thoughts as well as leave comments on other people\'s thoughts. Utilizes the Thoughts API.","madeWith":"HTML CSS React","image":"./images/thoughts.jpg","github":"https://github.com/alicefritz/thoughts","live":"https://af-thoughts.herokuapp.com/"},{"id":3,"name":"Thoughts API","description":"CRUD (or actually more like CR for now..) API built with Node and a MySQL database.","madeWith":"Node MySQL","image":"./images/thoughts-api.jpg","github":"https://github.com/alicefritz/thoughts-api","live":"https://af-thoughts-api.herokuapp.com/"},{"id":4,"name":"LenaSYS","description":"School Project. Worked on teacher/admin interfaces which are unfortunately not available without a teacher level account on the live site. See user \\"c14jonfr\\" for my contributions.","madeWith":"HTML CSS JS PHP MySQL","image":"./images/lenasysimg.jpg","github":"https://github.com/HGustavs/LenaSYS","live":"https://dugga.iit.his.se/DuggaSys/courseed.php"}]')},18:function(e){e.exports=JSON.parse('[{"id":1,"title":"Hope","src":"./songs/hope.mp3","img":"./images/cria.jpg"},{"id":2,"title":"Fortitude","src":"./songs/fortitude.mp3","img":"./images/fortitude.jpg"},{"id":3,"title":"Sleep","src":"./songs/sleep.mp3","img":"./images/fortitude.jpg"},{"id":4,"title":"The Farm","src":"./songs/farm.mp3","img":"./images/fortitude.jpg"}]')},19:function(e,t,a){e.exports=a(30)},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),l=a(8),o=a(6),s=a(1);function m(){return r.a.createElement("div",{className:"container about"},r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,"My name is Alice Fritz. I'm currently studying my final year at the Wev Development program at the University of Sk\xf6vde. I have previously studied Game Development (specialized towards Game Music) and worked an industrial job before settling with Web Development as the thing I'd like to do in the foreseeable future."),r.a.createElement("p",null,"I'm currently living in Sk\xf6vde, Sweden as I finish my studies in late May/early June. After my final exam I am looking for the first few steps of my professional development career and for my next step in my personal life (to clarify - I am more than willing to relocate!)."),r.a.createElement("p",null,"In my free time I like to work on side projects, produce music, cook and just spend time away from the screen in general. During the warmer months I try to go camping or fishing."))}function u(e){var t=e.setTheme,a=e.setCurrentLink,i=e.activeLink,c=e.isDarkMode;return Object(n.useEffect)((function(){a(),t()}),[a,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c?"toggleThemeButton invert":"toggleThemeButton",onClick:t},c?"\ud83c\udf19":"\u2600\ufe0f"),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-links"},r.a.createElement(o.b,{to:"/",className:"#/"===i?"nav-link-active":void 0,onClick:a},"HOME"),r.a.createElement(o.b,{to:"/projects",className:"#/projects"===i?"nav-link-active":void 0,onClick:a},"PROJECTS"),r.a.createElement(o.b,{to:"/about",className:"#/about"===i?"nav-link-active":void 0,onClick:a},"ABOUT"),r.a.createElement(o.b,{to:"/music",className:"#/music"===i?"nav-link-active":void 0,onClick:a},"MUSIC"))),r.a.createElement("div",{className:"nav-contact-links"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/alicefritz"},r.a.createElement("i",{className:"fab fa-2x fa-github"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/alice-fritz-9551b8147/"},r.a.createElement("i",{className:"fab fa-2x fa-linkedin-in"}))))}function d(e){var t=e.isDarkMode,a=e.setCurrentLink;return console.log("darkmode on? ".concat(t)),r.a.createElement("div",{className:"container landing"},r.a.createElement("div",{className:"landing-img"},r.a.createElement("img",{className:!0===t?"invert":void 0,src:"./images/teemu-paananen-OOE4xAnBhKo-unsplash.jpg",alt:"fern"})),r.a.createElement("div",{className:"landing-intro"},r.a.createElement("h1",null,"Alice Fritz"),r.a.createElement("h2",null,"Front End Developer"),r.a.createElement(o.b,{to:"/projects",onClick:a},r.a.createElement("button",{className:"projectButton"},"Projects"))))}var g=a(17);function h(e){var t=e.data,a=e.isDarkMode;return r.a.createElement("div",{className:"project-preview"},r.a.createElement("div",{className:"project-image"},r.a.createElement("img",{alt:"project",className:a?"invert":void 0,src:t.image?t.image:"https://source.unsplash.com/random"})),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.description),r.a.createElement("div",{className:a?"divider invert":"divider"},r.a.createElement("div",{className:"made-with"},r.a.createElement("p",null,t.madeWith)),r.a.createElement("div",{className:"links"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.github},r.a.createElement("i",{className:"fab fa-2x fa-github"})),t.live?r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.live},"Live"):r.a.createElement("p",null,"Not live")))))}function p(e){var t=e.isDarkMode;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"projects"},g.map((function(e){return r.a.createElement(h,{key:e.id,data:e,isDarkMode:t})}))))}function f(e){var t=e.song,a=e.selectSong,n=e.currentSong;return r.a.createElement("div",{onClick:a,className:n.title===t.title?"audiotrack currentlyPlaying":"audiotrack",song:t,songsrc:t.src,title:t.title,img:t.img},t.title)}var v=a(18);function E(e){var t=e.isDarkMode,a=v,i=Object(n.useState)(!1),c=Object(l.a)(i,2),o=c[0],s=c[1],m=Object(n.useState)(a[0]),u=Object(l.a)(m,2),d=u[0],g=u[1],h=Object(n.useState)(.5),p=Object(l.a)(h,2),E=p[0],k=p[1],b=Object(n.useRef)(),N=function(e){var t=e.target.getAttribute("title"),n=a.find((function(e){return e.title===t}));S(),console.log(a),g(n),w(),j()},y=function(){var e=a.findIndex((function(e){return e.title===d.title}));void 0===a[e+1]&&(e=-1),S(),g(a[e+1]),w(),j()},j=function(){b.current.play(),s(!0)},S=function(){b.current.pause(),s(!1)},w=function(){b.current.load()};return Object(n.useEffect)((function(){b.current.volume=E,console.log(d)}),[E]),r.a.createElement(r.a.Fragment,null,r.a.createElement("audio",{volume:E,id:"audioplayer",onTimeUpdate:function(){var e=Math.round(b.current.currentTime)/b.current.duration;document.getElementById("trackprogressbar").style.width=100*e+"%"},onEnded:y,ref:b},r.a.createElement("source",{src:d.src})),r.a.createElement("div",{className:"audioplayer"},r.a.createElement("div",{className:"playlistartcontainer"},r.a.createElement("div",{className:"playlist"},a.map((function(e){return r.a.createElement(f,{key:e.id,song:e,img:e.img,songsrc:e.src,selectSong:N,currentSong:d})}))),r.a.createElement("div",{className:"albumart"},r.a.createElement("img",{alt:"album art",className:!0===t?"invert":void 0,src:d.img}))),r.a.createElement("div",{className:"musicnavigator",onClick:function(e){var t=e.target.getBoundingClientRect().width,a=e.clientX-e.target.getBoundingClientRect().left,n=b.current.duration,r=(t-(t-a))/t;b.current.currentTime=r*n}},r.a.createElement("div",{id:"trackprogressbar"})),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{onClick:function(){var e=a.findIndex((function(e){return e.title===d.title}));void 0===a[e-1]&&(e=a.length),S(),g(a[e-1]),w(),j()},className:"controlsbutton",id:"previous"},r.a.createElement("i",{className:"fas fa-3x fa-backward centerprevious"})),r.a.createElement("button",{onClick:function(){o?S():j()},className:"controlsbutton",id:"playpause"},r.a.createElement("i",{className:o?"fas fa-4x fa-pause":"fas fa-4x fa-play centerplay"})),r.a.createElement("button",{onClick:y,className:"controlsbutton",id:"next"},r.a.createElement("i",{className:"fas fa-3x fa-forward centernext"}))),r.a.createElement("div",{className:"volume"},r.a.createElement("i",{className:"fas fa-volume-off"}),r.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",value:E,className:"volumeslider",onChange:function(e){k(e.target.value)}}),r.a.createElement("i",{className:"fas fa-volume-up"}))))}function k(e){var t=e.isDarkMode;return r.a.createElement("div",{className:"container"},r.a.createElement(E,{isDarkMode:t}))}a(29);function b(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),g=Object(l.a)(c,2),h=g[0],f=g[1],v=function(e){f(e?e.target.getAttribute("href"):window.location.hash),E()},E=function(){var e,t=h&&h.substring(2);t||(t="home"),e=(t=t.charAt(0).toUpperCase()+t.slice(1))+" - Alice Fritz",document.title=e};return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(u,{setTheme:function(e){e?i(!a):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&i(!0),a?document.getElementsByTagName("html")[0].classList.add("dark-mode"):document.getElementsByTagName("html")[0].classList.remove("dark-mode")},setCurrentLink:v,activeLink:h,isDarkMode:a}),r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(d,{isDarkMode:a,setCurrentLink:v,activeLink:h})),r.a.createElement(s.a,{exact:!0,path:"/about"},r.a.createElement(m,{isDarkMode:a,setCurrentLink:v,activeLink:h})),r.a.createElement(s.a,{exact:!0,path:"/projects"},r.a.createElement(p,{isDarkMode:a,setCurrentLink:v,activeLink:h})),r.a.createElement(s.a,{exact:!0,path:"/music"},r.a.createElement(k,{isDarkMode:a,setCurrentLink:v,activeLink:h}))))}c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fa498e04.chunk.js.map