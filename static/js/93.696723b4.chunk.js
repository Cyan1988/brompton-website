(self.webpackChunkbrompton_website=self.webpackChunkbrompton_website||[]).push([[93],{4093:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var i=n(4942),r=n(9439),o=n(7462),l=n(1413),a=n(5671),s=n(3144),c=n(7326),d=n(136),u=n(7277),p=n(2791),f=n(1002),h=n(4925),v={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},g=n(6119),S=n(1694),y=n.n(S);function k(e,t,n){return Math.max(t,Math.min(e,n))}var Z=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},m=function(e){for(var t=[],n=w(e),i=b(e),r=n;r<i;r++)e.lazyLoadedList.indexOf(r)<0&&t.push(r);return t},w=function(e){return e.currentSlide-T(e)},b=function(e){return e.currentSlide+C(e)},T=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},C=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},L=function(e){return e&&e.offsetWidth||0},x=function(e){return e&&e.offsetHeight||0},E=function(e){var t,n,i,r,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,i=Math.atan2(n,t),(r=Math.round(180*i/Math.PI))<0&&(r=360-Math.abs(r)),r<=45&&r>=0||r<=360&&r>=315?"left":r>=135&&r<=225?"right":!0===o?r>=35&&r<=135?"up":"down":"vertical"},M=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},z=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n},H=function(e){var t,n=p.Children.count(e.children),i=e.listRef,r=Math.ceil(L(i)),o=e.trackRef&&e.trackRef.node,a=Math.ceil(L(o));if(e.vertical)t=r;else{var s=e.centerMode&&2*parseInt(e.centerPadding);"string"===typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(s*=r/100),t=Math.ceil((r-s)/e.slidesToShow)}var c=i&&x(i.querySelector('[data-index="0"]')),d=c*e.slidesToShow,u=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(u=n-1-e.initialSlide);var f=e.lazyLoadedList||[],h=m((0,l.Z)((0,l.Z)({},e),{},{currentSlide:u,lazyLoadedList:f})),v={slideCount:n,slideWidth:t,listWidth:r,trackWidth:a,currentSlide:u,slideHeight:c,listHeight:d,lazyLoadedList:f=f.concat(h)};return null===e.autoplaying&&e.autoplay&&(v.autoplaying="playing"),v},W=function(e){var t=e.waitForAnimate,n=e.animating,i=e.fade,r=e.infinite,o=e.index,a=e.slideCount,s=e.lazyLoad,c=e.currentSlide,d=e.centerMode,u=e.slidesToScroll,p=e.slidesToShow,f=e.useCSS,h=e.lazyLoadedList;if(t&&n)return{};var v,g,S,y=o,Z={},w={},b=r?o:k(o,0,a-1);if(i){if(!r&&(o<0||o>=a))return{};o<0?y=o+a:o>=a&&(y=o-a),s&&h.indexOf(y)<0&&(h=h.concat(y)),Z={animating:!0,currentSlide:y,lazyLoadedList:h,targetSlide:y},w={animating:!1,targetSlide:y}}else v=y,y<0?(v=y+a,r?a%u!==0&&(v=a-a%u):v=0):!M(e)&&y>c?y=v=c:d&&y>=a?(y=r?a:a-1,v=r?0:a-1):y>=a&&(v=y-a,r?a%u!==0&&(v=0):v=a-p),!r&&y+p>=a&&(v=a-p),g=q((0,l.Z)((0,l.Z)({},e),{},{slideIndex:y})),S=q((0,l.Z)((0,l.Z)({},e),{},{slideIndex:v})),r||(g===S&&(y=v),g=S),s&&(h=h.concat(m((0,l.Z)((0,l.Z)({},e),{},{currentSlide:y})))),f?(Z={animating:!0,currentSlide:v,trackStyle:Y((0,l.Z)((0,l.Z)({},e),{},{left:g})),lazyLoadedList:h,targetSlide:b},w={animating:!1,currentSlide:v,trackStyle:j((0,l.Z)((0,l.Z)({},e),{},{left:S})),swipeLeft:null,targetSlide:b}):Z={currentSlide:v,trackStyle:j((0,l.Z)((0,l.Z)({},e),{},{left:S})),lazyLoadedList:h,targetSlide:b};return{state:Z,nextState:w}},O=function(e,t){var n,i,r,o,a=e.slidesToScroll,s=e.slidesToShow,c=e.slideCount,d=e.currentSlide,u=e.targetSlide,p=e.lazyLoad,f=e.infinite;if(n=c%a!==0?0:(c-d)%a,"previous"===t.message)o=d-(r=0===n?a:s-n),p&&!f&&(o=-1===(i=d-r)?c-1:i),f||(o=u-a);else if("next"===t.message)o=d+(r=0===n?a:n),p&&!f&&(o=(d+a)%c+n),f||(o=u+a);else if("dots"===t.message)o=t.index*t.slidesToScroll;else if("children"===t.message){if(o=t.index,f){var h=G((0,l.Z)((0,l.Z)({},e),{},{targetSlide:o}));o>t.currentSlide&&"left"===h?o-=c:o<t.currentSlide&&"right"===h&&(o+=c)}}else"index"===t.message&&(o=Number(t.index));return o},P=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},I=function(e,t,n){return"IMG"===e.target.tagName&&Z(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},R=function(e,t){var n=t.scrolling,i=t.animating,r=t.vertical,o=t.swipeToSlide,a=t.verticalSwiping,s=t.rtl,c=t.currentSlide,d=t.edgeFriction,u=t.edgeDragged,p=t.onEdge,f=t.swiped,h=t.swiping,v=t.slideCount,g=t.slidesToScroll,S=t.infinite,y=t.touchObject,k=t.swipeEvent,m=t.listHeight,w=t.listWidth;if(!n){if(i)return Z(e);r&&o&&a&&Z(e);var b,T={},C=q(t);y.curX=e.touches?e.touches[0].pageX:e.clientX,y.curY=e.touches?e.touches[0].pageY:e.clientY,y.swipeLength=Math.round(Math.sqrt(Math.pow(y.curX-y.startX,2)));var L=Math.round(Math.sqrt(Math.pow(y.curY-y.startY,2)));if(!a&&!h&&L>10)return{scrolling:!0};a&&(y.swipeLength=L);var x=(s?-1:1)*(y.curX>y.startX?1:-1);a&&(x=y.curY>y.startY?1:-1);var z=Math.ceil(v/g),H=E(t.touchObject,a),W=y.swipeLength;return S||(0===c&&("right"===H||"down"===H)||c+1>=z&&("left"===H||"up"===H)||!M(t)&&("left"===H||"up"===H))&&(W=y.swipeLength*d,!1===u&&p&&(p(H),T.edgeDragged=!0)),!f&&k&&(k(H),T.swiped=!0),b=r?C+W*(m/w)*x:s?C-W*x:C+W*x,a&&(b=C+W*x),T=(0,l.Z)((0,l.Z)({},T),{},{touchObject:y,swipeLeft:b,trackStyle:j((0,l.Z)((0,l.Z)({},t),{},{left:b}))}),Math.abs(y.curX-y.startX)<.8*Math.abs(y.curY-y.startY)?T:(y.swipeLength>10&&(T.swiping=!0,Z(e)),T)}},D=function(e,t){var n=t.dragging,i=t.swipe,r=t.touchObject,o=t.listWidth,a=t.touchThreshold,s=t.verticalSwiping,c=t.listHeight,d=t.swipeToSlide,u=t.scrolling,p=t.onSwipe,f=t.targetSlide,h=t.currentSlide,v=t.infinite;if(!n)return i&&Z(e),{};var g=s?c/a:o/a,S=E(r,s),y={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(u)return y;if(!r.swipeLength)return y;if(r.swipeLength>g){var k,m;Z(e),p&&p(S);var w=v?h:f;switch(S){case"left":case"up":m=w+A(t),k=d?N(t,m):m,y.currentDirection=0;break;case"right":case"down":m=w-A(t),k=d?N(t,m):m,y.currentDirection=1;break;default:k=w}y.triggerSlideHandler=k}else{var b=q(t);y.trackStyle=Y((0,l.Z)((0,l.Z)({},t),{},{left:b}))}return y},N=function(e,t){var n=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,i=e.infinite?-1*e.slidesToShow:0,r=[];n<t;)r.push(n),n=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return r}(e),i=0;if(t>n[n.length-1])t=n[n.length-1];else for(var r in n){if(t<n[r]){t=i;break}i=n[r]}return t},A=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,i=e.listRef,r=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(r).every((function(i){if(e.vertical){if(i.offsetTop+x(i)/2>-1*e.swipeLeft)return n=i,!1}else if(i.offsetLeft-t+L(i)/2>-1*e.swipeLeft)return n=i,!1;return!0})),!n)return 0;var o=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-o)||1}return e.slidesToScroll},X=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)},j=function(e){var t,n;X(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var i=e.slideCount+2*e.slidesToShow;e.vertical?n=i*e.slideHeight:t=_(e)*e.slideWidth;var r={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";r=(0,l.Z)((0,l.Z)({},r),{},{WebkitTransform:o,transform:a,msTransform:s})}else e.vertical?r.top=e.left:r.left=e.left;return e.fade&&(r={opacity:1}),t&&(r.width=t),n&&(r.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?r.marginTop=e.left+"px":r.marginLeft=e.left+"px"),r},Y=function(e){X(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=j(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},q=function(e){if(e.unslick)return 0;X(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,i=e.slideIndex,r=e.trackRef,o=e.infinite,l=e.centerMode,a=e.slideCount,s=e.slidesToShow,c=e.slidesToScroll,d=e.slideWidth,u=e.listWidth,p=e.variableWidth,f=e.slideHeight,h=e.fade,v=e.vertical;if(h||1===e.slideCount)return 0;var g=0;if(o?(g=-F(e),a%c!==0&&i+c>a&&(g=-(i>a?s-(i-a):a%c)),l&&(g+=parseInt(s/2))):(a%c!==0&&i+c>a&&(g=s-a%c),l&&(g=parseInt(s/2))),t=v?i*f*-1+g*f:i*d*-1+g*d,!0===p){var S,y=r&&r.node;if(S=i+F(e),t=(n=y&&y.childNodes[S])?-1*n.offsetLeft:0,!0===l){S=o?i+F(e):i,n=y&&y.children[S],t=0;for(var k=0;k<S;k++)t-=y&&y.children[k]&&y.children[k].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(u-n.offsetWidth)/2}}return t},F=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},B=function(e){return e.unslick||!e.infinite?0:e.slideCount},_=function(e){return 1===e.slideCount?1:F(e)+e.slideCount+B(e)},G=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+U(e)?"left":"right":e.targetSlide<e.currentSlide-K(e)?"right":"left"},U=function(e){var t=e.slidesToShow,n=e.centerMode,i=e.rtl,r=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(r)>0&&(o+=1),i&&t%2===0&&(o+=1),o}return i?0:t-1},K=function(e){var t=e.slidesToShow,n=e.centerMode,i=e.rtl,r=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(r)>0&&(o+=1),i||t%2!==0||(o+=1),o}return i?t-1:0},V=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},$=function(e){var t,n,i,r,o;return i=(o=e.rtl?e.slideCount-1-e.index:e.index)<0||o>=e.slideCount,e.centerMode?(r=Math.floor(e.slidesToShow/2),n=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-r-1&&o<=e.currentSlide+r&&(t=!0)):t=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":i,"slick-current":o===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},J=function(e,t){return e.key+"-"+t},Q=function(e){var t,n=[],i=[],r=[],o=p.Children.count(e.children),a=w(e),s=b(e);return p.Children.forEach(e.children,(function(c,d){var u,f={message:"children",index:d,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};u=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(d)>=0?c:p.createElement("div",null);var h=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}((0,l.Z)((0,l.Z)({},e),{},{index:d})),v=u.props.className||"",g=$((0,l.Z)((0,l.Z)({},e),{},{index:d}));if(n.push(p.cloneElement(u,{key:"original"+J(u,d),"data-index":d,className:y()(g,v),tabIndex:"-1","aria-hidden":!g["slick-active"],style:(0,l.Z)((0,l.Z)({outline:"none"},u.props.style||{}),h),onClick:function(t){u.props&&u.props.onClick&&u.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(f)}})),e.infinite&&!1===e.fade){var S=o-d;S<=F(e)&&o!==e.slidesToShow&&((t=-S)>=a&&(u=c),g=$((0,l.Z)((0,l.Z)({},e),{},{index:t})),i.push(p.cloneElement(u,{key:"precloned"+J(u,t),"data-index":t,tabIndex:"-1",className:y()(g,v),"aria-hidden":!g["slick-active"],style:(0,l.Z)((0,l.Z)({},u.props.style||{}),h),onClick:function(t){u.props&&u.props.onClick&&u.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(f)}}))),o!==e.slidesToShow&&((t=o+d)<s&&(u=c),g=$((0,l.Z)((0,l.Z)({},e),{},{index:t})),r.push(p.cloneElement(u,{key:"postcloned"+J(u,t),"data-index":t,tabIndex:"-1",className:y()(g,v),"aria-hidden":!g["slick-active"],style:(0,l.Z)((0,l.Z)({},u.props.style||{}),h),onClick:function(t){u.props&&u.props.onClick&&u.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(f)}})))}})),e.rtl?i.concat(n,r).reverse():i.concat(n,r)},ee=function(e){(0,d.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return e=t.call.apply(t,[this].concat(o)),(0,i.Z)((0,c.Z)(e),"node",null),(0,i.Z)((0,c.Z)(e),"handleRef",(function(t){e.node=t})),e}return(0,s.Z)(n,[{key:"render",value:function(){var e=Q(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return p.createElement("div",(0,o.Z)({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}]),n}(p.PureComponent),te=function(e){(0,d.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,i=t.onMouseOver,r=t.onMouseLeave,o=t.infinite,a=t.slidesToScroll,s=t.slidesToShow,c=t.slideCount,d=t.currentSlide,u=(e={slideCount:c,slidesToScroll:a,slidesToShow:s,infinite:o}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,f={onMouseEnter:n,onMouseOver:i,onMouseLeave:r},h=[],v=0;v<u;v++){var g=(v+1)*a-1,S=o?g:k(g,0,c-1),Z=S-(a-1),m=o?Z:k(Z,0,c-1),w=y()({"slick-active":o?d>=m&&d<=S:d===m}),b={message:"dots",index:v,slidesToScroll:a,currentSlide:d},T=this.clickHandler.bind(this,b);h=h.concat(p.createElement("li",{key:v,className:w},p.cloneElement(this.props.customPaging(v),{onClick:T})))}return p.cloneElement(this.props.appendDots(h),(0,l.Z)({className:this.props.dotsClass},f))}}]),n}(p.PureComponent),ne=function(e){(0,d.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:y()(e),style:{display:"block"},onClick:t},i={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?p.cloneElement(this.props.prevArrow,(0,l.Z)((0,l.Z)({},n),i)):p.createElement("button",(0,o.Z)({key:"0",type:"button"},n)," ","Previous")}}]),n}(p.PureComponent),ie=function(e){(0,d.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});M(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:y()(e),style:{display:"block"},onClick:t},i={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?p.cloneElement(this.props.nextArrow,(0,l.Z)((0,l.Z)({},n),i)):p.createElement("button",(0,o.Z)({key:"1",type:"button"},n)," ","Next")}}]),n}(p.PureComponent),re=n(474),oe=["animating"],le=function(e){(0,d.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;(0,a.Z)(this,n),r=t.call(this,e),(0,i.Z)((0,c.Z)(r),"listRefHandler",(function(e){return r.list=e})),(0,i.Z)((0,c.Z)(r),"trackRefHandler",(function(e){return r.track=e})),(0,i.Z)((0,c.Z)(r),"adaptHeight",(function(){if(r.props.adaptiveHeight&&r.list){var e=r.list.querySelector('[data-index="'.concat(r.state.currentSlide,'"]'));r.list.style.height=x(e)+"px"}})),(0,i.Z)((0,c.Z)(r),"componentDidMount",(function(){if(r.props.onInit&&r.props.onInit(),r.props.lazyLoad){var e=m((0,l.Z)((0,l.Z)({},r.props),r.state));e.length>0&&(r.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),r.props.onLazyLoad&&r.props.onLazyLoad(e))}var t=(0,l.Z)({listRef:r.list,trackRef:r.track},r.props);r.updateState(t,!0,(function(){r.adaptHeight(),r.props.autoplay&&r.autoPlay("playing")})),"progressive"===r.props.lazyLoad&&(r.lazyLoadTimer=setInterval(r.progressiveLazyLoad,1e3)),r.ro=new re.Z((function(){r.state.animating?(r.onWindowResized(!1),r.callbackTimers.push(setTimeout((function(){return r.onWindowResized()}),r.props.speed))):r.onWindowResized()})),r.ro.observe(r.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=r.props.pauseOnFocus?r.onSlideFocus:null,e.onblur=r.props.pauseOnFocus?r.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",r.onWindowResized):window.attachEvent("onresize",r.onWindowResized)})),(0,i.Z)((0,c.Z)(r),"componentWillUnmount",(function(){r.animationEndCallback&&clearTimeout(r.animationEndCallback),r.lazyLoadTimer&&clearInterval(r.lazyLoadTimer),r.callbackTimers.length&&(r.callbackTimers.forEach((function(e){return clearTimeout(e)})),r.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",r.onWindowResized):window.detachEvent("onresize",r.onWindowResized),r.autoplayTimer&&clearInterval(r.autoplayTimer),r.ro.disconnect()})),(0,i.Z)((0,c.Z)(r),"componentDidUpdate",(function(e){if(r.checkImagesLoad(),r.props.onReInit&&r.props.onReInit(),r.props.lazyLoad){var t=m((0,l.Z)((0,l.Z)({},r.props),r.state));t.length>0&&(r.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(t)}})),r.props.onLazyLoad&&r.props.onLazyLoad(t))}r.adaptHeight();var n=(0,l.Z)((0,l.Z)({listRef:r.list,trackRef:r.track},r.props),r.state),i=r.didPropsChange(e);i&&r.updateState(n,i,(function(){r.state.currentSlide>=p.Children.count(r.props.children)&&r.changeSlide({message:"index",index:p.Children.count(r.props.children)-r.props.slidesToShow,currentSlide:r.state.currentSlide}),e.autoplay===r.props.autoplay&&e.autoplaySpeed===r.props.autoplaySpeed||(!e.autoplay&&r.props.autoplay?r.autoPlay("playing"):r.props.autoplay?r.autoPlay("update"):r.pause("paused"))}))})),(0,i.Z)((0,c.Z)(r),"onWindowResized",(function(e){r.debouncedResize&&r.debouncedResize.cancel(),r.debouncedResize=(0,g.D)(50,(function(){return r.resizeWindow(e)})),r.debouncedResize()})),(0,i.Z)((0,c.Z)(r),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(r.track&&r.track.node)){var t=(0,l.Z)((0,l.Z)({listRef:r.list,trackRef:r.track},r.props),r.state);r.updateState(t,e,(function(){r.props.autoplay?r.autoPlay("update"):r.pause("paused")})),r.setState({animating:!1}),clearTimeout(r.animationEndCallback),delete r.animationEndCallback}})),(0,i.Z)((0,c.Z)(r),"updateState",(function(e,t,n){var i=H(e);e=(0,l.Z)((0,l.Z)((0,l.Z)({},e),i),{},{slideIndex:i.currentSlide});var o=q(e);e=(0,l.Z)((0,l.Z)({},e),{},{left:o});var a=j(e);(t||p.Children.count(r.props.children)!==p.Children.count(e.children))&&(i.trackStyle=a),r.setState(i,n)})),(0,i.Z)((0,c.Z)(r),"ssrInit",(function(){if(r.props.variableWidth){var e=0,t=0,n=[],i=F((0,l.Z)((0,l.Z)((0,l.Z)({},r.props),r.state),{},{slideCount:r.props.children.length})),o=B((0,l.Z)((0,l.Z)((0,l.Z)({},r.props),r.state),{},{slideCount:r.props.children.length}));r.props.children.forEach((function(t){n.push(t.props.style.width),e+=t.props.style.width}));for(var a=0;a<i;a++)t+=n[n.length-1-a],e+=n[n.length-1-a];for(var s=0;s<o;s++)e+=n[s];for(var c=0;c<r.state.currentSlide;c++)t+=n[c];var d={width:e+"px",left:-t+"px"};if(r.props.centerMode){var u="".concat(n[r.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(u,") / 2 ) ")}return{trackStyle:d}}var f=p.Children.count(r.props.children),h=(0,l.Z)((0,l.Z)((0,l.Z)({},r.props),r.state),{},{slideCount:f}),v=F(h)+B(h)+f,g=100/r.props.slidesToShow*v,S=100/v,y=-S*(F(h)+r.state.currentSlide)*g/100;return r.props.centerMode&&(y+=(100-S*g/100)/2),{slideWidth:S+"%",trackStyle:{width:g+"%",left:y+"%"}}})),(0,i.Z)((0,c.Z)(r),"checkImagesLoad",(function(){var e=r.list&&r.list.querySelectorAll&&r.list.querySelectorAll(".slick-slide img")||[],t=e.length,n=0;Array.prototype.forEach.call(e,(function(e){var i=function(){return++n&&n>=t&&r.onWindowResized()};if(e.onclick){var o=e.onclick;e.onclick=function(t){o(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(r.props.lazyLoad?e.onload=function(){r.adaptHeight(),r.callbackTimers.push(setTimeout(r.onWindowResized,r.props.speed))}:(e.onload=i,e.onerror=function(){i(),r.props.onLazyLoadError&&r.props.onLazyLoadError()}))}))})),(0,i.Z)((0,c.Z)(r),"progressiveLazyLoad",(function(){for(var e=[],t=(0,l.Z)((0,l.Z)({},r.props),r.state),n=r.state.currentSlide;n<r.state.slideCount+B(t);n++)if(r.state.lazyLoadedList.indexOf(n)<0){e.push(n);break}for(var i=r.state.currentSlide-1;i>=-F(t);i--)if(r.state.lazyLoadedList.indexOf(i)<0){e.push(i);break}e.length>0?(r.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),r.props.onLazyLoad&&r.props.onLazyLoad(e)):r.lazyLoadTimer&&(clearInterval(r.lazyLoadTimer),delete r.lazyLoadTimer)})),(0,i.Z)((0,c.Z)(r),"slideHandler",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r.props,i=n.asNavFor,o=n.beforeChange,a=n.onLazyLoad,s=n.speed,c=n.afterChange,d=r.state.currentSlide,u=W((0,l.Z)((0,l.Z)((0,l.Z)({index:e},r.props),r.state),{},{trackRef:r.track,useCSS:r.props.useCSS&&!t})),p=u.state,f=u.nextState;if(p){o&&o(d,p.currentSlide);var v=p.lazyLoadedList.filter((function(e){return r.state.lazyLoadedList.indexOf(e)<0}));a&&v.length>0&&a(v),!r.props.waitForAnimate&&r.animationEndCallback&&(clearTimeout(r.animationEndCallback),c&&c(d),delete r.animationEndCallback),r.setState(p,(function(){i&&r.asNavForIndex!==e&&(r.asNavForIndex=e,i.innerSlider.slideHandler(e)),f&&(r.animationEndCallback=setTimeout((function(){var e=f.animating,t=(0,h.Z)(f,oe);r.setState(t,(function(){r.callbackTimers.push(setTimeout((function(){return r.setState({animating:e})}),10)),c&&c(p.currentSlide),delete r.animationEndCallback}))}),s))}))}})),(0,i.Z)((0,c.Z)(r),"changeSlide",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,l.Z)((0,l.Z)({},r.props),r.state),i=O(n,e);if((0===i||i)&&(!0===t?r.slideHandler(i,t):r.slideHandler(i),r.props.autoplay&&r.autoPlay("update"),r.props.focusOnSelect)){var o=r.list.querySelectorAll(".slick-current");o[0]&&o[0].focus()}})),(0,i.Z)((0,c.Z)(r),"clickHandler",(function(e){!1===r.clickable&&(e.stopPropagation(),e.preventDefault()),r.clickable=!0})),(0,i.Z)((0,c.Z)(r),"keyHandler",(function(e){var t=P(e,r.props.accessibility,r.props.rtl);""!==t&&r.changeSlide({message:t})})),(0,i.Z)((0,c.Z)(r),"selectHandler",(function(e){r.changeSlide(e)})),(0,i.Z)((0,c.Z)(r),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),(0,i.Z)((0,c.Z)(r),"enableBodyScroll",(function(){window.ontouchmove=null})),(0,i.Z)((0,c.Z)(r),"swipeStart",(function(e){r.props.verticalSwiping&&r.disableBodyScroll();var t=I(e,r.props.swipe,r.props.draggable);""!==t&&r.setState(t)})),(0,i.Z)((0,c.Z)(r),"swipeMove",(function(e){var t=R(e,(0,l.Z)((0,l.Z)((0,l.Z)({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));t&&(t.swiping&&(r.clickable=!1),r.setState(t))})),(0,i.Z)((0,c.Z)(r),"swipeEnd",(function(e){var t=D(e,(0,l.Z)((0,l.Z)((0,l.Z)({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));if(t){var n=t.triggerSlideHandler;delete t.triggerSlideHandler,r.setState(t),void 0!==n&&(r.slideHandler(n),r.props.verticalSwiping&&r.enableBodyScroll())}})),(0,i.Z)((0,c.Z)(r),"touchEnd",(function(e){r.swipeEnd(e),r.clickable=!0})),(0,i.Z)((0,c.Z)(r),"slickPrev",(function(){r.callbackTimers.push(setTimeout((function(){return r.changeSlide({message:"previous"})}),0))})),(0,i.Z)((0,c.Z)(r),"slickNext",(function(){r.callbackTimers.push(setTimeout((function(){return r.changeSlide({message:"next"})}),0))})),(0,i.Z)((0,c.Z)(r),"slickGoTo",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";r.callbackTimers.push(setTimeout((function(){return r.changeSlide({message:"index",index:e,currentSlide:r.state.currentSlide},t)}),0))})),(0,i.Z)((0,c.Z)(r),"play",(function(){var e;if(r.props.rtl)e=r.state.currentSlide-r.props.slidesToScroll;else{if(!M((0,l.Z)((0,l.Z)({},r.props),r.state)))return!1;e=r.state.currentSlide+r.props.slidesToScroll}r.slideHandler(e)})),(0,i.Z)((0,c.Z)(r),"autoPlay",(function(e){r.autoplayTimer&&clearInterval(r.autoplayTimer);var t=r.state.autoplaying;if("update"===e){if("hovered"===t||"focused"===t||"paused"===t)return}else if("leave"===e){if("paused"===t||"focused"===t)return}else if("blur"===e&&("paused"===t||"hovered"===t))return;r.autoplayTimer=setInterval(r.play,r.props.autoplaySpeed+50),r.setState({autoplaying:"playing"})})),(0,i.Z)((0,c.Z)(r),"pause",(function(e){r.autoplayTimer&&(clearInterval(r.autoplayTimer),r.autoplayTimer=null);var t=r.state.autoplaying;"paused"===e?r.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==t&&"playing"!==t||r.setState({autoplaying:"focused"}):"playing"===t&&r.setState({autoplaying:"hovered"})})),(0,i.Z)((0,c.Z)(r),"onDotsOver",(function(){return r.props.autoplay&&r.pause("hovered")})),(0,i.Z)((0,c.Z)(r),"onDotsLeave",(function(){return r.props.autoplay&&"hovered"===r.state.autoplaying&&r.autoPlay("leave")})),(0,i.Z)((0,c.Z)(r),"onTrackOver",(function(){return r.props.autoplay&&r.pause("hovered")})),(0,i.Z)((0,c.Z)(r),"onTrackLeave",(function(){return r.props.autoplay&&"hovered"===r.state.autoplaying&&r.autoPlay("leave")})),(0,i.Z)((0,c.Z)(r),"onSlideFocus",(function(){return r.props.autoplay&&r.pause("focused")})),(0,i.Z)((0,c.Z)(r),"onSlideBlur",(function(){return r.props.autoplay&&"focused"===r.state.autoplaying&&r.autoPlay("blur")})),(0,i.Z)((0,c.Z)(r),"render",(function(){var e,t,n,i=y()("slick-slider",r.props.className,{"slick-vertical":r.props.vertical,"slick-initialized":!0}),a=(0,l.Z)((0,l.Z)({},r.props),r.state),s=z(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=r.props.pauseOnHover;if(s=(0,l.Z)((0,l.Z)({},s),{},{onMouseEnter:c?r.onTrackOver:null,onMouseLeave:c?r.onTrackLeave:null,onMouseOver:c?r.onTrackOver:null,focusOnSelect:r.props.focusOnSelect&&r.clickable?r.selectHandler:null}),!0===r.props.dots&&r.state.slideCount>=r.props.slidesToShow){var d=z(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),u=r.props.pauseOnDotsHover;d=(0,l.Z)((0,l.Z)({},d),{},{clickHandler:r.changeSlide,onMouseEnter:u?r.onDotsLeave:null,onMouseOver:u?r.onDotsOver:null,onMouseLeave:u?r.onDotsLeave:null}),e=p.createElement(te,d)}var f=z(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);f.clickHandler=r.changeSlide,r.props.arrows&&(t=p.createElement(ne,f),n=p.createElement(ie,f));var h=null;r.props.vertical&&(h={height:r.state.listHeight});var v=null;!1===r.props.vertical?!0===r.props.centerMode&&(v={padding:"0px "+r.props.centerPadding}):!0===r.props.centerMode&&(v={padding:r.props.centerPadding+" 0px"});var g=(0,l.Z)((0,l.Z)({},h),v),S=r.props.touchMove,k={className:"slick-list",style:g,onClick:r.clickHandler,onMouseDown:S?r.swipeStart:null,onMouseMove:r.state.dragging&&S?r.swipeMove:null,onMouseUp:S?r.swipeEnd:null,onMouseLeave:r.state.dragging&&S?r.swipeEnd:null,onTouchStart:S?r.swipeStart:null,onTouchMove:r.state.dragging&&S?r.swipeMove:null,onTouchEnd:S?r.touchEnd:null,onTouchCancel:r.state.dragging&&S?r.swipeEnd:null,onKeyDown:r.props.accessibility?r.keyHandler:null},Z={className:i,dir:"ltr",style:r.props.style};return r.props.unslick&&(k={className:"slick-list"},Z={className:i}),p.createElement("div",Z,r.props.unslick?"":t,p.createElement("div",(0,o.Z)({ref:r.listRefHandler},k),p.createElement(ee,(0,o.Z)({ref:r.trackRefHandler},s),r.props.children)),r.props.unslick?"":n,r.props.unslick?"":e)})),r.list=null,r.track=null,r.state=(0,l.Z)((0,l.Z)({},v),{},{currentSlide:r.props.initialSlide,slideCount:p.Children.count(r.props.children)}),r.callbackTimers=[],r.clickable=!0,r.debouncedResize=null;var s=r.ssrInit();return r.state=(0,l.Z)((0,l.Z)({},r.state),s),r}return(0,s.Z)(n,[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,i=Object.keys(this.props);n<i.length;n++){var r=i[n];if(!e.hasOwnProperty(r)){t=!0;break}if("object"!==(0,f.Z)(e[r])&&"function"!==typeof e[r]&&e[r]!==this.props[r]){t=!0;break}}return t||p.Children.count(this.props.children)!==p.Children.count(e.children)}}]),n}(p.Component),ae=n(5477),se=n.n(ae),ce={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return p.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return p.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},de=function(e){(0,d.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,i.Z)((0,c.Z)(r),"innerSliderRefHandler",(function(e){return r.innerSlider=e})),(0,i.Z)((0,c.Z)(r),"slickPrev",(function(){return r.innerSlider.slickPrev()})),(0,i.Z)((0,c.Z)(r),"slickNext",(function(){return r.innerSlider.slickNext()})),(0,i.Z)((0,c.Z)(r),"slickGoTo",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.innerSlider.slickGoTo(e,t)})),(0,i.Z)((0,c.Z)(r),"slickPause",(function(){return r.innerSlider.pause("paused")})),(0,i.Z)((0,c.Z)(r),"slickPlay",(function(){return r.innerSlider.autoPlay("play")})),r.state={breakpoint:null},r._responsiveMediaHandlers=[],r}return(0,s.Z)(n,[{key:"media",value:function(e,t){var n=window.matchMedia(e),i=function(e){e.matches&&t()};n.addListener(i),i(n),this._responsiveMediaHandlers.push({mql:n,query:e,listener:i})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,i){var r;r=0===i?se()({minWidth:0,maxWidth:n}):se()({minWidth:t[i-1]+1,maxWidth:n}),V()&&e.media(r,(function(){e.setState({breakpoint:n})}))}));var n=se()({minWidth:t.slice(-1)[0]});V()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){e.mql.removeListener(e.listener)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":(0,l.Z)((0,l.Z)((0,l.Z)({},ce),this.props),t[0].settings):(0,l.Z)((0,l.Z)({},ce),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var i=p.Children.toArray(this.props.children);i=i.filter((function(e){return"string"===typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var r=[],a=null,s=0;s<i.length;s+=e.rows*e.slidesPerRow){for(var c=[],d=s;d<s+e.rows*e.slidesPerRow;d+=e.slidesPerRow){for(var u=[],f=d;f<d+e.slidesPerRow&&(e.variableWidth&&i[f].props.style&&(a=i[f].props.style.width),!(f>=i.length));f+=1)u.push(p.cloneElement(i[f],{key:100*s+10*d+f,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));c.push(p.createElement("div",{key:10*s+d},u))}e.variableWidth?r.push(p.createElement("div",{key:s,style:{width:a}},c)):r.push(p.createElement("div",{key:s},c))}if("unslick"===e){var h="regular slider "+(this.props.className||"");return p.createElement("div",{className:h},i)}return r.length<=e.slidesToShow&&(e.unslick=!0),p.createElement(le,(0,o.Z)({style:this.props.style,ref:this.innerSliderRefHandler},e),r)}}]),n}(p.Component),ue=de,pe=n(1929),fe=n(5564),he=n(9922),ve=n(7521),ge=function(e){var t,n=e.componentCls,r=e.antCls,o=e.carouselArrowSize,l=e.carouselDotOffset,a=1.25*-o,s=e.marginXXS;return(0,i.Z)({},n,Object.assign(Object.assign({},(0,ve.Wf)(e)),{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":(t={pointerEvents:"none"},(0,i.Z)(t,"input".concat(r,"-radio-input, input").concat(r,"-checkbox-input"),{visibility:"hidden"}),(0,i.Z)(t,"&.slick-active",(0,i.Z)({pointerEvents:"auto"},"input".concat(r,"-radio-input, input").concat(r,"-checkbox-input"),{visibility:"visible"})),(0,i.Z)(t,"> div > div",{verticalAlign:"bottom"}),t)},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"},".slick-arrow.slick-hidden":{display:"none"},".slick-prev, .slick-next":{position:"absolute",top:"50%",display:"block",width:o,height:o,marginTop:-o/2,padding:0,color:"transparent",fontSize:0,lineHeight:0,background:"transparent",border:0,outline:"none",cursor:"pointer","&:hover, &:focus":{color:"transparent",background:"transparent",outline:"none","&::before":{opacity:1}},"&.slick-disabled::before":{opacity:.25}},".slick-prev":{insetInlineStart:a,"&::before":{content:'"\u2190"'}},".slick-next":{insetInlineEnd:a,"&::before":{content:'"\u2192"'}},".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,listStyle:"none","&-bottom":{bottom:l},"&-top":{top:l,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:e.dotWidth,height:e.dotHeight,marginInline:s,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:"all ".concat(e.motionDurationSlow),button:{position:"relative",display:"block",width:"100%",height:e.dotHeight,padding:0,color:"transparent",fontSize:0,background:e.colorBgContainer,border:0,borderRadius:1,outline:"none",cursor:"pointer",opacity:.3,transition:"all ".concat(e.motionDurationSlow),"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:-s,content:'""'}},"&.slick-active":{width:e.dotWidthActive,"& button":{background:e.colorBgContainer,opacity:1},"&: hover, &:focus":{opacity:1}}}}}))},Se=function(e){var t=e.componentCls,n=e.carouselDotOffset,r=e.marginXXS,o={width:e.dotHeight,height:e.dotWidth};return(0,i.Z)({},"".concat(t,"-vertical"),{".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:e.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:n},"&-right":{insetInlineEnd:n,insetInlineStart:"auto"},li:Object.assign(Object.assign({},o),{margin:"".concat(r,"px 0"),verticalAlign:"baseline",button:o,"&.slick-active":Object.assign(Object.assign({},o),{button:o})})}})},ye=function(e){var t=e.componentCls;return[(0,i.Z)({},"".concat(t,"-rtl"),{direction:"rtl",".slick-dots":(0,i.Z)({},"".concat(t,"-rtl&"),{flexDirection:"row-reverse"})}),(0,i.Z)({},"".concat(t,"-vertical"),{".slick-dots":(0,i.Z)({},"".concat(t,"-rtl&"),{flexDirection:"column"})})]},ke=(0,fe.Z)("Carousel",(function(e){var t=e.controlHeightLG,n=e.controlHeightSM,i=(0,he.TS)(e,{carouselArrowSize:t/2,carouselDotOffset:n/2});return[ge(i),Se(i),ye(i)]}),{dotWidth:16,dotHeight:3,dotWidthActive:24}),Ze=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n},me=p.forwardRef((function(e,t){var n,o=e.dots,l=void 0===o||o,a=e.arrows,s=void 0!==a&&a,c=e.draggable,d=void 0!==c&&c,u=e.dotPosition,f=void 0===u?"bottom":u,h=e.vertical,v=void 0===h?"left"===f||"right"===f:h,g=Ze(e,["dots","arrows","draggable","dotPosition","vertical"]),S=p.useContext(pe.E_),k=S.getPrefixCls,Z=S.direction,m=p.useRef(),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m.current.slickGoTo(e,t)};p.useImperativeHandle(t,(function(){return{goTo:w,autoPlay:m.current.innerSlider.autoPlay,innerSlider:m.current.innerSlider,prev:m.current.slickPrev,next:m.current.slickNext}}),[m.current]);var b=p.useRef(p.Children.count(g.children));p.useEffect((function(){b.current!==p.Children.count(g.children)&&(w(g.initialSlide||0,!1),b.current=p.Children.count(g.children))}),[g.children]);var T=Object.assign({vertical:v},g);"fade"===T.effect&&(T.fade=!0);var C=k("carousel",T.prefixCls),L="slick-dots",x=!!l,E=y()(L,"".concat(L,"-").concat(f),"boolean"!==typeof l&&(null===l||void 0===l?void 0:l.className)),M=ke(C),z=(0,r.Z)(M,2),H=z[0],W=z[1],O=y()(C,(n={},(0,i.Z)(n,"".concat(C,"-rtl"),"rtl"===Z),(0,i.Z)(n,"".concat(C,"-vertical"),T.vertical),n),W);return H(p.createElement("div",{className:O},p.createElement(ue,Object.assign({ref:m},T,{dots:x,dotsClass:E,arrows:s,draggable:d}))))}));var we=me},5477:function(e,t,n){var i=n(2806),r=function(e){var t="",n=Object.keys(e);return n.forEach((function(r,o){var l=e[r];(function(e){return/[height|width]$/.test(e)})(r=i(r))&&"number"===typeof l&&(l+="px"),t+=!0===l?r:!1===l?"not "+r:"("+r+": "+l+")",o<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,i){t+=r(n),i<e.length-1&&(t+=", ")})),t):r(e)}},2806:function(e){e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}}}]);
//# sourceMappingURL=93.696723b4.chunk.js.map