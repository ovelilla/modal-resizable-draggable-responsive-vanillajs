(()=>{"use strict";const t=(()=>{const t=[{name:"x-lg",paths:[{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}]}];return{get:e=>{const s=t.find((t=>t.name===e));return s?(t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("width",`${t.width||16}`),e.setAttribute("height",`${t.height||16}`),e.setAttribute("fill","currentColor"),e.setAttribute("viewBox",`0 0 ${t.width||16} ${t.height||16}`),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.paths.forEach((t=>{const s=document.createElementNS("http://www.w3.org/2000/svg","path");t.fillRule&&s.setAttribute("fill-rule",t.fillRule),s.setAttribute("d",t.d),e.appendChild(s)})),e})(s):null}}})(),e=async t=>new Promise((e=>{t.addEventListener("animationend",e,{once:!0})})),s=class{constructor(t){Object.assign(this,t),this.init()}init(){this.iconButton=this.create()}get(){return this.iconButton}create(){const t=document.createElement("button");switch(t.type=this.type??"button",t.ariaLabel=this.ariaLabel??"",t.classList.add("icon-btn"),this.buttonSize){case"small":t.classList.add("btn-size-small");break;case"medium":t.classList.add("btn-size-medium");break;case"large":t.classList.add("btn-size-large");break;case"xl":t.classList.add("btn-size-xl");break;default:t.classList.add("btn-medium-small")}switch(this.svgSize){case"xs":t.classList.add("svg-size-xs");break;case"small":t.classList.add("svg-size-small");break;case"medium":default:t.classList.add("svg-size-medium");break;case"large":t.classList.add("svg-size-large");break;case"xl":t.classList.add("svg-size-xl")}return t.addEventListener("click",(t=>{t.stopPropagation(),this.onClick()})),t.addEventListener("mousedown",(t=>t.stopPropagation())),t.addEventListener("touchstart",(t=>t.stopPropagation()),{passive:!0}),t.addEventListener("mousemove",(t=>t.stopPropagation())),t.appendChild(this.icon),t}},i=class{constructor(t){Object.assign(this,t),this.init()}init(){this.button=this.create()}get(){return this.button}create(){const t=document.createElement("button");return t.type=this.type??"button",t.textContent=this.text??"",t.ariaLabel=this.ariaLabel??"",this.classes&&t.classList.add(...this.classes),this.icon&&t.appendChild(this.icon),t.addEventListener("click",(t=>{t.stopPropagation(),this.onClick()})),t}},n=class{constructor(t){Object.assign(this,t),this.init()}init(){this.button=this.create()}get(){return this.button}create(){const t=document.createElement("button");this.classes&&t.classList.add(...this.classes),t.classList.add("loading-btn"),t.type=this.type??"button",t.addEventListener("click",this.handleClick.bind(this));const e=document.createElement("span");e.classList.add("text"),e.textContent=this.text,t.appendChild(e);const s=document.createElement("div");s.classList.add("loading-icon"),t.appendChild(s);const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","25 25 50 50"),s.appendChild(i);const n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("cx","50"),n.setAttribute("cy","50"),n.setAttribute("r","20"),n.setAttribute("fill","none"),n.setAttribute("stroke-width","5"),n.setAttribute("stroke-miterlimit","10"),i.appendChild(n),t}handleClick(){this.button.style.width=`${this.button.offsetWidth}px`,this.button.classList.add("loading"),this.onClick&&this.onClick()}stop(){this.button.classList.remove("loading"),this.button.removeAttribute("style")}},h=class{constructor(t,e){return new{IconButton:s,TextButton:i,LoadingButton:n}[t](e)}},l=(()=>{const t=[{name:"plus",paths:[{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}]},{name:"plus-lg",paths:[{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"}]},{name:"x",paths:[{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}]},{name:"x-lg",paths:[{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}]},{name:"question",paths:[{d:"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"}]},{name:"question-lg",paths:[{fillRule:"evenodd",d:"M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"}]},{name:"arrows-fullscreen",paths:[{fillRule:"evenodd",d:"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"}]}];return{get:e=>{const s=t.find((t=>t.name===e));return s?(t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("width",`${t.width||16}`),e.setAttribute("height",`${t.height||16}`),e.setAttribute("fill","currentColor"),e.setAttribute("viewBox",`0 0 ${t.width||16} ${t.height||16}`),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.paths.forEach((t=>{const s=document.createElementNS("http://www.w3.org/2000/svg","path");t.fillRule&&s.setAttribute("fill-rule",t.fillRule),s.setAttribute("d",t.d),e.appendChild(s)})),e})(s):null}}})(),a=async t=>new Promise((e=>{t.addEventListener("animationend",e,{once:!0})}));function o(){const t=document.createElement("div"),e=document.createElement("p");return e.textContent="Modal content",t.appendChild(e),t}document.querySelector("#open-modal-btn").addEventListener("click",(async()=>{new class{constructor(t){Object.assign(this,t),this.isClose=!1,this.isFullscreen=!1,this.loadingButtons=[],this.autoOpen&&this.init()}async init(){await this.open()}async open(){this.modal=this.render(),document.body.appendChild(this.modal),document.body.scrollHeight>document.body.clientHeight&&document.body.classList.add("noscroll"),this.modal.classList.add("in"),await a(this.modal),this.onOpen&&this.onOpen()}render(){const t=document.createElement("div");t.classList.add("modal"),this.isFullscreen&&t.classList.add("fullscreen"),t.addEventListener("mousedown",this.checkClose.bind(this)),t.addEventListener("touchstart",this.checkClose.bind(this),{passive:!0}),t.addEventListener("click",this.handleClose.bind(this));const e=document.createElement("div");e.classList.add("content"),this.maxWidth?e.style.maxWidth=this.maxWidth+"px":e.style.maxWidth="600px",e.addEventListener("click",(t=>t.stopPropagation())),t.appendChild(e);const s=document.createElement("div");if(s.classList.add("header"),e.appendChild(s),this.customTitle)s.appendChild(this.customTitle());else{const t=document.createElement("div");t.classList.add("title"),t.textContent=this.title,s.appendChild(t)}const i=document.createElement("div");if(i.classList.add("actions"),s.appendChild(i),this.headerActions.forEach((t=>{const e=new h("IconButton",{icon:t.icon,buttonSize:"large",svgSize:"large",ariaLabel:t.ariaLabel,onClick:t.onClick});i.appendChild(e.get())})),this.fullscreen){const t=new h("IconButton",{icon:l.get("arrows-fullscreen"),buttonSize:"large",svgSize:"large",ariaLabel:"Pantalla completa",onClick:()=>{this.isFullscreen=!this.isFullscreen,this.rerender(),this.onFullscreen&&this.onFullscreen(this.isFullscreen)}});i.appendChild(t.get())}this.isFullscreen?(t.classList.add("fullscreen"),e.removeAttribute("style")):t.classList.remove("fullscreen");const n=new h("IconButton",{icon:l.get("x-lg"),buttonSize:"large",svgSize:"large",ariaLabel:"Cerrar modal",onClick:()=>{this.isClose=!0,this.handleClose()}});i.appendChild(n.get()),this.body=document.createElement("div"),this.body.classList.add("body"),this.body.appendChild(this.content),e.appendChild(this.body);const a=document.createElement("div");a.classList.add("footer"),e.appendChild(a);const o=new h("TextButton",{type:"button",text:"Cerrar",ariaLabel:"Cerrar modal",classes:["btn","secondary-btn"],onClick:()=>{this.isClose=!0,this.handleClose()}});a.appendChild(o.get()),this.footerActions.forEach((t=>{const e=new h(t.loading?"LoadingButton":"TextButton",{type:t.type,text:t.text,ariaLabel:t.ariaLabel,classes:t.classes,onClick:t.onClick});a.appendChild(e.get()),t.loading&&this.loadingButtons.push(e)}));const d=new class{constructor(t){Object.assign(this,t),this.isStart=!1,this.isResize=!1,this.isDrag=!1,this.direction="",this.start={x:0,y:0,width:0,height:0,top:0,left:0},this.curr={x:0,y:0,width:0,height:0},this.diff={x:0,y:0},this.limit={x:!1,y:!1},this.style={top:0,left:0,width:0,height:0},this.init()}init(){this.el.addEventListener("mousemove",this.handleMove.bind(this)),this.el.addEventListener("touchstart",this.handleMove.bind(this),{passive:!0}),this.el.addEventListener("mousedown",this.handleStart.bind(this)),this.el.addEventListener("touchstart",this.handleStart.bind(this),{passive:!0})}handleMove(t){if(this.isResize||this.isDrag)return;const e=this.el.firstChild.getBoundingClientRect(),s=(t.clientX??t.touches[0].clientX)-e.left,i=(t.clientY??t.touches[0].clientY)-e.top,n=e.width,h=e.height;let l="";this.isStart=!0,s>10&&s<n-10&&i>=-10&&i<=10?l="top":s>=n-10&&s<=n+10&&i>=-10&&i<=10?l="top-right":s>=n-10&&s<=n+10&&i>10&&i<h-10?l="right":s>=-10&&s<=10&&i>=h-10&&i<=h+10?l="bottom-left":s>10&&s<n-10&&i>=h-10&&i<=h+10?l="bottom":s>=n-10&&s<=n+10&&i>=h-10&&i<=h+10?l="bottom-right":s>=-10&&s<=10&&i>10&&i<h-10?l="left":s>=-10&&s<=10&&i>=-10&&i<=10?l="top-left":this.isStart=!1,this.direction!==l&&(this.el.classList.remove("resize-"+this.direction),this.isStart&&this.el.classList.add("resize-"+l),this.direction=l)}handleStart(t){if(!this.isStart)return;this.isResize=!0,this.onResize(this.isResize);const e=this.el.firstChild.getBoundingClientRect();this.el.firstChild.style.top=e.top+"px",this.el.firstChild.style.left=e.left+"px",this.el.firstChild.style.width=e.width+"px",this.el.firstChild.style.height=e.height+"px",this.el.firstChild.style.position="absolute",this.el.classList.remove("fullscreen"),this.start.x=t.clientX??t.touches[0].clientX,this.start.y=t.clientY??t.touches[0].clientY,this.start.width=e.width,this.start.height=e.height,this.start.top=e.top,this.start.bottom=e.bottom,this.start.left=e.left,this.start.right=e.right,this.limit.x=!1,this.limit.y=!1,this.resize=this.handleResize.bind(this),this.end=this.handleEnd.bind(this),document.addEventListener("mousemove",this.resize),document.addEventListener("touchmove",this.resize,{passive:!0}),document.addEventListener("mouseup",this.end),document.addEventListener("touchend",this.end)}handleResize(t){this.el.firstChild.style.removeProperty("max-width"),this.rect=this.el.firstChild.getBoundingClientRect();const e=t.clientX??t.touches[0].clientX,s=t.clientY??t.touches[0].clientY;switch(this.curr.x=e-this.rect.left,this.curr.y=s-this.rect.top,this.curr.width=this.el.firstChild.offsetWidth,this.curr.height=this.el.firstChild.offsetHeight,this.diff.x=e-this.start.x,this.diff.y=s-this.start.y,this.start.x=e,this.start.y=s,this.style.top=this.rect.top,this.style.left=this.rect.left,this.style.width=this.rect.width,this.style.height=this.rect.height,this.direction){case"top":this.top();break;case"top-right":this.top(),this.right();break;case"right":this.right();break;case"bottom-left":this.bottom(),this.left();break;case"bottom":this.bottom();break;case"bottom-right":this.bottom(),this.right();break;case"left":this.left();break;case"top-left":this.top(),this.left()}this.direction&&(this.el.firstChild.style.top=this.style.top+"px",this.el.firstChild.style.left=this.style.left+"px",this.el.firstChild.style.height=this.style.height+"px",this.el.firstChild.style.width=this.style.width+"px")}top(){this.style.top=Math.ceil(this.rect.top+this.diff.y),this.style.height=this.curr.height-this.diff.y,this.style.top+this.style.height>this.start.bottom&&(this.style.top=this.start.bottom-this.style.height),this.limit.y&&this.curr.y>0||this.curr.height-this.diff.y<208?(this.limit.y=!0,this.style.top=this.start.top+this.start.height-208,this.style.height=208):this.limit.y=!1}right(){this.style.width=this.curr.width+this.diff.x,this.limit.x&&this.curr.x<300||this.curr.width+this.diff.x<300?(this.limit.x=!0,this.style.width=300):this.limit.x=!1}bottom(){this.style.height=this.curr.height+this.diff.y,this.limit.y&&this.curr.y<208||this.curr.height+this.diff.y<208?(this.limit.y=!0,this.style.height=208):this.limit.y=!1}left(){this.style.left=this.rect.left+this.diff.x,this.style.width=this.curr.width-this.diff.x,this.style.left+this.style.width>this.start.right&&(this.style.left=this.start.right-this.style.width),this.limit.x&&this.curr.x>0||this.curr.width-this.diff.x<300?(this.limit.x=!0,this.style.left=this.start.left+this.start.width-300,this.style.width=300):this.limit.x=!1}handleEnd(){this.isStart=!1,this.isResize=!1,this.onResize(this.isResize),document.removeEventListener("mousemove",this.resize),document.removeEventListener("touchmove",this.resize),document.removeEventListener("mouseup",this.end),document.removeEventListener("touchend",this.end)}}({el:t,maxWidth:this.maxWidth,onResize:t=>{c.isResize=t}}),c=new class{constructor(t){Object.assign(this,t),this.isStart=!1,this.isDrag=!1,this.isResize=!1,this.start={x:0,y:0},this.curr={x:0,y:0},this.style={top:0,left:0},this.init()}init(){this.el.addEventListener("mousemove",this.handleMove.bind(this)),this.el.addEventListener("touchstart",this.handleMove.bind(this),{passive:!0}),this.el.addEventListener("mousedown",this.handleStart.bind(this)),this.el.addEventListener("touchstart",this.handleStart.bind(this),{passive:!0})}handleMove(t){if(this.isDrag||this.isResize)return;const e=this.el.firstChild.getBoundingClientRect(),s=(t.clientX??t.touches[0].clientX)-e.left,i=(t.clientY??t.touches[0].clientY)-e.top,n=e.width,h=this.el.querySelector(".header").offsetHeight;s>10&&s<n-10&&i>10&&i<h?(this.isStart=!0,this.el.classList.add("drag")):(this.isStart=!1,this.el.classList.remove("drag"))}handleStart(t){this.isStart&&(this.isDrag=!0,this.onDrag(this.isDrag),this.start.x=t.clientX??t.touches[0].clientX,this.start.y=t.clientY??t.touches[0].clientY,this.el.classList.contains("fullscreen")&&(this.el.classList.remove("fullscreen"),this.el.firstChild.style.top="0px",this.el.firstChild.style.maxWidth=this.maxWidth+"px",this.el.firstChild.style.position="absolute"),this.drag=this.handleDrag.bind(this),this.end=this.handleEnd.bind(this),document.addEventListener("mousemove",this.drag),document.addEventListener("touchmove",this.drag,{passive:!0}),document.addEventListener("mouseup",this.end),document.addEventListener("touchend",this.end,{passive:!0}))}handleDrag(t){const e=t.clientX??t.touches[0].clientX,s=t.clientY??t.touches[0].clientY;this.curr.x=e-this.start.x,this.curr.y=s-this.start.y,this.start.x=e,this.start.y=s;const i=this.el.firstChild.getBoundingClientRect();this.style.top=i.top+this.curr.y,this.style.left=i.left+this.curr.x,this.el.firstChild.style.top=this.style.top+"px",this.el.firstChild.style.left=this.style.left+"px",this.el.firstChild.style.position="absolute"}handleEnd(){this.isStart=!1,this.isDrag=!1,this.onDrag(this.isDrag),document.removeEventListener("mousemove",this.drag),document.removeEventListener("touchmove",this.drag,{passive:!0}),document.removeEventListener("mouseup",this.end),document.removeEventListener("touchend",this.end,{passive:!0})}}({el:t,maxWidth:this.maxWidth,onDrag:t=>{this.isFullscreen=!1,d.isDrag=t}});return t}checkClose(t){if(t.target!==this.modal)return;const e=this.modal.firstChild.getBoundingClientRect(),s=t.clientX-e.left,i=t.clientY-e.top,n=this.modal.firstChild.offsetWidth,h=this.modal.firstChild.offsetHeight;s>=-10&&s<=n+10&&i>=-10&&i<=h+10||(this.isClose=!0)}async handleClose(){if(this.isClose){if(this.confirmClose){const s=new class{constructor(t){Object.assign(this,t),this.isClose=!1,this.init()}init(){this.open()}question(){return new Promise(((t,e)=>{this.confirm&&this.acceptButton&&this.cancelButton&&this.closeButton?(this.confirm.addEventListener("click",(()=>{t(null),this.close()})),this.acceptButton.addEventListener("click",(()=>{t(!0),this.close()})),this.cancelButton.addEventListener("click",(()=>{t(!1),this.close()})),this.closeButton.addEventListener("click",(()=>{t(null),this.close()}))):e("There was a problem creating the modal window")}))}async open(){this.confirm=this.create(),document.body.appendChild(this.confirm),document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&document.body.classList.add("noscroll"),await e(this.confirm)}create(){const e=document.createElement("div");e.addEventListener("mousedown",this.checkClose.bind(this)),e.addEventListener("touchstart",this.checkClose.bind(this),{passive:!0}),e.addEventListener("click",(()=>{this.isClose&&this.close()})),e.classList.add("confirm","in");const s=document.createElement("div");s.classList.add("content"),s.addEventListener("click",(t=>t.stopPropagation())),e.appendChild(s);const i=document.createElement("div");i.classList.add("header"),s.appendChild(i);const n=document.createElement("div");n.classList.add("title"),n.textContent=this.title,i.appendChild(n),this.closeButton=document.createElement("button"),this.closeButton.type="button",this.closeButton.classList.add("close"),i.appendChild(this.closeButton);const h=t.get("x-lg");this.closeButton.appendChild(h);const l=document.createElement("div");l.classList.add("body"),s.appendChild(l);const a=document.createElement("div");a.classList.add("description"),a.textContent=this.description,l.appendChild(a);const o=document.createElement("div");return o.classList.add("footer"),s.appendChild(o),this.cancelButton=document.createElement("button"),this.cancelButton.type="button",this.cancelButton.arialLabel="Cancelar",this.cancelButton.classList.add("btn","secondary-btn"),this.cancelButton.textContent=this.cancel,o.appendChild(this.cancelButton),this.acceptButton=document.createElement("button"),this.acceptButton.type="button",this.acceptButton.arialLabel="Aceptar",this.acceptButton.classList.add("btn","primary-btn"),this.acceptButton.textContent=this.accept,o.appendChild(this.acceptButton),e}checkClose(t){t.target===this.confirm&&(this.isClose=!0)}async close(){this.isClose=!1,document.body.classList.remove("noscroll"),this.confirm.classList.add("out"),await e(this.confirm),this.destroy()}destroy(){this.confirm.remove()}}({title:"¿Cerrar ventana?",description:"¿Estás seguro de que deseas cerrar? Los datos que no hayan sido guardados se perderán.",accept:"Cerrar",cancel:"Cancelar"});if(!await s.question())return void(this.isClose=!1)}this.close()}}async close(){this.loadingButtons.forEach((t=>{t.stop()})),this.modal.classList.add("out"),await a(this.modal),this.modal.remove(),document.querySelector(".modal")||document.body.classList.remove("noscroll"),this.onClose&&this.onClose()}rerender(t=this.content){this.content=t,this.modal.remove(),this.modal=this.render(),document.body.appendChild(this.modal)}}({title:"Título modal",content:o(),maxWidth:700,autoOpen:!0,fullscreen:!0,confirmClose:!0,headerActions:[{ariaLabel:"Ayuda",icon:l.get("question-lg"),onClick:()=>{console.log("Ayuda")}}],footerActions:[{text:"Crear",type:"button",ariaLabel:"Crear presupuesto",classes:["btn","primary-btn"],loading:!0,onClick:()=>{console.log("Crear")}}],onOpen:()=>{console.log("Abrir")},onClose:()=>{console.log("Cerrar")},onFullscreen:t=>{console.log(t)}})}))})();