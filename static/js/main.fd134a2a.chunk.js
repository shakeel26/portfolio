(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{83:function(e,t,i){},84:function(e,t,i){},91:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(11),r=i.n(c),s=(i(83),i(84),i(85),i(140)),o=i(128),l=i(131),j=i(133),m=i(134),d=i(146),h=i(2),u=Object(o.a)((function(e){return{mainContainer:{backgroundColor:"#111a20"},menuItems:{alignItems:"center"}}})),b=function(){var e=u();return Object(h.jsx)(l.a,{position:"static",className:e.mainContainer,children:Object(h.jsxs)(j.a,{className:e.menuItems,children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(m.a,{color:"inherit",href:"",children:"Shakeel"})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(m.a,{color:"inherit",href:"#about",children:"About"})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(m.a,{color:"inherit",href:"#skills",children:"Skills"})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(m.a,{color:"inherit",href:"#projects",children:"Projects"})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(m.a,{color:"inherit",href:"#contact",children:"Contact"})})]})})},p=[{title:"Shakeel here!",description:"Mac Miller Mac Miller Mac Miller Mac Millerv Mac Miller Mac Miller Mac Miller             Mac Miller Mac Miller Mac Millerv Mac Miller Mac Miller Mac Miller             Mac Miller Mac Miller Mac Millerv Mac Miller Mac Miller Mac Miller             Mac Miller Mac Miller Mac Millerv Mac Miller Mac Miller "}],x=[{title:"React Reserve",subtitle:"MERN Stack",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"",link:"https://reactbootcamp.com",tech:["JavaScript","Python","Mongoose"]},{title:"React Tracks",subtitle:"React and Python",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"",link:"https://abc.com",tech:["a","b","c"]},{title:"DevChat",subtitle:"React and Firebase",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"",link:"https://jsbootcamp.com",tech:["a","b","c"]},{title:"Epic Todo App",subtitle:"React Hooks",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"",link:"https://pythonbootcamp.com",tech:["a","b","c"]}],g=[{title:"Hartl Consulting",subtitle:"WordPress using Elementor",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./projects/hartl_consulting_logo.png",link:"https://hartl-consulting.at/",tech:["WordPress","Elementor","CSS"]},{title:"May's Grill",subtitle:"MERN Stack Project",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./projects/mays-grill-logo.png",link:"https://mays-grill.at/",tech:["React","Node.js","Mongoose"]}],O=[{title:"HTML5",image:"./skills/html5.svg"},{title:"JavaScript",image:"./skills/javascript-horizontal.svg"},{title:"jQuery",image:"./skills/jquery-horizontal.svg"},{title:"React",image:"./skills/reactjs.svg"},{title:"Material-UI",image:"./skills/material-ui.svg"},{title:"Wordpress",image:"./skills/wordpress.svg"},{title:"Node.js",image:"./skills/nodejs.svg"},{title:"MongoDB",image:"./skills/mongodb.svg"},{title:"MySQL",image:"./skills/mysql.svg"},{title:"PostgreSQL",image:"./skills/postgresql-horizontal.svg"}],v=i(136),f=i(92),M=i(135),k=i(137),y=Object(o.a)((function(e){return{root:{},cover:{alignItems:"right"},content:{flex:"1 0 auto",marginTop:"5%",marginLeft:"8%"},buttons:{marginLeft:"10%"},button2:{marginLeft:"4%"}}})),S=function(){var e=y();return Object(h.jsx)("section",{id:"about",children:Object(h.jsxs)(M.a,{container:!0,spacing:0,className:e.root,children:[p.map((function(t){return Object(h.jsxs)(M.a,{item:!0,xs:12,md:6,lg:6,children:[Object(h.jsxs)(v.a,{className:e.content,children:[Object(h.jsx)(f.a,{component:"h5",variant:"h5",children:t.title}),Object(h.jsx)(f.a,{children:t.description})]}),Object(h.jsxs)("div",{className:e.buttons,children:[Object(h.jsx)(m.a,{href:"#contact",color:"inherit",children:Object(h.jsx)(k.a,{variant:"contained",children:"Contact"})}),Object(h.jsx)(m.a,{href:"#projects",className:e.button2,color:"inherit",children:Object(h.jsx)(k.a,{variant:"contained",children:"Previous work"})})]})]})})),Object(h.jsx)(M.a,{item:!0,xs:12,md:6,lg:6,children:Object(h.jsx)("img",{className:e.cover,src:"./set-programmer-icon.webp",alt:"cover coding"})})]})})},w=i(29),N=i(53),C=i(138),P=i(139),L=i(145),I=Object(o.a)((function(e){return{media:{height:"120px"},chip:{margin:e.spacing(.5)},listProjects:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},cardHovered:{transform:"scale3d(1, 1.05, 1)"},eachProjectCard:Object(N.a)({padding:e.spacing(1),textAlign:"center",border:"none",marginBottom:"5%",color:e.palette.text.secondary},e.breakpoints.up("md"),{marginLeft:"8%",marginRight:"8%"})}})),R=function(e){var t=Object(a.useState)({raised:!1,shadow:1}),i=Object(w.a)(t,2),n=i[0],c=i[1],r=I();return Object(h.jsx)(M.a,{container:!0,className:r.listProjects,spacing:0,children:e.data.map((function(e){return Object(h.jsx)(M.a,{item:!0,xs:12,sm:6,md:6,lg:4,children:Object(h.jsxs)(C.a,{classes:{root:n.raised?r.cardHovered:""},onMouseOver:function(){return c({raised:!0,shadow:3})},onMouseOut:function(){return c({raised:!1,shadow:1})},raised:n.raised,zdepth:n.shadow,className:r.eachProjectCard,children:[Object(h.jsx)(P.a,{className:r.media,image:e.image,title:e.title}),Object(h.jsxs)(v.a,{children:[Object(h.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(h.jsx)(f.a,{variant:"subtitle1",color:"textPrimary",children:e.subtitle}),Object(h.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description}),Object(h.jsx)(m.a,{href:e.link,target:"_blank",children:e.link}),Object(h.jsx)(f.a,{component:"ul",className:r.listProjects,children:e.tech.map((function(e){return Object(h.jsx)(L.a,{label:e,className:r.chip})}))})]})]})})}))})},T=Object(o.a)((function(e){return{}})),A=function(){T();return Object(h.jsxs)("section",{id:"projects",children:[Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f.a,{component:"h1",variant:"h4",align:"center",children:"Apps have built!"}),Object(h.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",align:"center",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]}),Object(h.jsx)(R,{data:x})]})},F=Object(o.a)((function(e){return{}})),z=function(){F();return Object(h.jsxs)("section",{id:"projects",children:[Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f.a,{component:"h1",variant:"h4",align:"center",children:"Running Projects!"}),Object(h.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",align:"center",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]}),Object(h.jsx)(R,{data:g})]})},B=Object(o.a)((function(){return{listSkills:{display:"inline-flex",justifyContent:"center",margin:0,marginLeft:"30%"},skillIcon:{width:"100px"},skillsHeading:{alignContent:"center",textDecorationLine:"underline"}}})),q=function(){var e=B();return Object(h.jsxs)("section",{id:"skills",children:[Object(h.jsx)(f.a,{className:e.skillsHeading,component:"h1",variant:"h4",align:"center",children:"Skills & Technologies"}),Object(h.jsx)(M.a,{container:!0,xs:6,spacing:0,className:e.listSkills,children:O.map((function(t){return Object(h.jsx)(M.a,{item:!0,xs:6,sm:3,md:6,lg:2,children:Object(h.jsx)("img",{className:e.skillIcon,src:t.image,alt:t.title})})}))})]})},E=i(148),H=i(143),U=Object(o.a)((function(){return Object(E.a)({root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"}})})),D=function(){var e=U();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f.a,{component:"h1",variant:"h4",align:"center",children:"Education"}),Object(h.jsxs)(C.a,{className:e.root,children:[Object(h.jsx)(H.a,{className:e.cover,graduation:!0,name:"graduation cap",size:"massive"}),Object(h.jsx)("div",{className:e.details,children:Object(h.jsxs)(v.a,{className:e.content,children:[Object(h.jsx)(f.a,{component:"h5",variant:"h5",children:Object(h.jsx)(m.a,{href:"https://www.uibk.ac.at/",target:"_blank",children:" Leopold-Franzens Universit\xe4t Innsbruck"})}),Object(h.jsx)(f.a,{variant:"h7",children:"MSc Computer Science"}),Object(h.jsx)(f.a,{variant:"subtitle1",color:"textSecondary",children:"2018 - 2021"})]})})]}),Object(h.jsx)(s.a,{}),Object(h.jsxs)(C.a,{className:e.root,children:[Object(h.jsx)(H.a,{graduation:!0,name:"graduation cap",size:"massive"}),Object(h.jsx)("div",{className:e.details,children:Object(h.jsxs)(v.a,{className:e.content,children:[Object(h.jsx)(f.a,{component:"h5",variant:"h5",children:Object(h.jsx)(m.a,{href:"https://www.comsats.edu.pk/",target:"_blank",children:" COMSATS University Islamabad"})}),Object(h.jsx)(f.a,{variant:"h7",children:"BSc Computer Science"}),Object(h.jsx)(f.a,{variant:"subtitle1",color:"textSecondary",children:"2010 - 2014"})]})})]})]})},W=i(144),_=i(141),Q=Object(o.a)((function(e){return{textArea:{border:"none"}}})),J=function(){var e=Q(),t=Object(a.useState)(""),i=Object(w.a)(t,2),n=i[0],c=i[1],r=Object(a.useState)(""),s=Object(w.a)(r,2),o=s[0],l=s[1],j=Object(a.useState)(""),m=Object(w.a)(j,2),d=m[0],u=m[1];return Object(h.jsxs)("section",{id:"contact",className:"relative",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(f.a,{component:"h1",variant:"h4",align:"center",children:"Get In Touch !"}),Object(h.jsxs)(f.a,{variant:"body2",color:"textSecondary",component:"p",align:"center",children:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum suscipit officia aspernatur veritatis. Asperiores, aliquid? Email me at ",Object(h.jsx)("a",{href:"mailto:someone@example.com",target:"_top",children:"someone@example.com"}),"or call at ",Object(h.jsx)("a",{href:"tel:+436607553781",target:"_top",children:"06607553781"})]})]}),Object(h.jsxs)(M.a,{container:!0,xs:12,spacing:0,children:[Object(h.jsx)(M.a,{item:!0,xs:12,sm:6,md:6,lg:6,children:Object(h.jsx)("iframe",{width:"100%",height:"100%",title:"map",className:"absolute inset-0",frameBorder:0,marginHeight:0,marginWidth:0,style:{filter:"opacity(0.7)"},src:"https://www.google.com/maps/embed/v1/place?q=Hans-Unterm\xfcller-Stra\xdfe+8,+6020+Innsbruck&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"})}),Object(h.jsxs)(M.a,{item:!0,xs:12,sm:6,md:6,lg:6,children:[Object(h.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Address !"}),Object(h.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:"Hans-Unterm\xfcller-Stra\xdfe 8, 6020 Innsbruck, Austria"}),Object(h.jsxs)("form",{netlify:!0,name:"contact",onSubmit:function(e){var t;e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t={"form-name":"contact",name:n,email:o,message:d},Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return alert("Message sent!")})).catch((function(e){return alert(e)}))},spacing:0,children:[Object(h.jsxs)(M.a,{container:!0,xs:12,spacing:0,children:[Object(h.jsxs)(M.a,{item:!0,xs:12,sm:6,md:6,lg:6,children:[Object(h.jsx)(f.a,{variant:"h6",component:"h6",children:"Name"}),Object(h.jsx)(W.a,{required:!0,id:"standard-basic",label:"Full Name",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)(M.a,{item:!0,xs:12,sm:6,md:6,lg:6,children:[Object(h.jsx)(f.a,{variant:"h6",component:"h6",children:"Email"}),Object(h.jsx)(W.a,{required:!0,id:"standard-basic",label:"Your Email",onChange:function(e){return l(e.target.value)}})]})]}),Object(h.jsx)(f.a,{gutterBottom:!0,variant:"h6",component:"h6",children:"Message"}),Object(h.jsx)(_.a,{required:!0,className:e.textArea,minRows:4,id:"standard-basic","aria-label":"maximum height",placeholder:"Write your thougts.",onChange:function(e){return u(e.target.value)}}),Object(h.jsx)(f.a,{gutterBottom:!0,variant:"h6",component:"h6",color:"inherit",children:Object(h.jsx)(k.a,{type:"submit",variant:"contained",children:"Send!"})})]})]})]})]})},Y=i(142),G=Object(o.a)((function(e){return{footer:{marginTop:"10px",backgroundColor:"#111a20"}}})),Z=function(){var e=G();return Object(h.jsx)(l.a,{position:"static",className:e.footer,children:Object(h.jsx)(Y.a,{maxWidth:"md",children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(f.a,{variant:"body1",color:"inherit",children:["Designed and developed by Shakeel Ahmed. Built with React. Copyright \xa9 Shakeel ",(new Date).getFullYear(),"            "]})})})})},K=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(S,{}),Object(h.jsx)(s.a,{}),Object(h.jsx)(A,{}),Object(h.jsx)(s.a,{}),Object(h.jsx)(z,{}),Object(h.jsx)(s.a,{}),Object(h.jsx)(q,{}),Object(h.jsx)(s.a,{}),Object(h.jsx)(D,{}),Object(h.jsx)(s.a,{}),Object(h.jsx)(J,{}),Object(h.jsx)(Z,{})]})},V=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,149)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(K,{})}),document.getElementById("root")),V()}},[[91,1,2]]]);
//# sourceMappingURL=main.fd134a2a.chunk.js.map