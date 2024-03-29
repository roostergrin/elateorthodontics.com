webpackJsonp([1],{"+T4J":function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"component",staticClass:"block-doctors",class:{"block-doctors--active":t.showing}},[e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-doctors__waypoint block-doctors__waypoint--in"}),e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"block-doctors__waypoint"}),t._l(t.content,function(o,s){return e("div",{key:"anchor - "+s,staticClass:"block-doctors__anchor",style:{top:"calc(1vh + "+100*s+"vh)"},attrs:{id:t.cleanStr(o.title)}})}),e("div",{staticClass:"block-doctors__content"},t._l(t.content,function(o,s){return e("div",{key:"section-"+(s+1),staticClass:"block-doctors__container"},[e("div",{staticClass:"block-doctors__col-1",class:[{"block-doctors__col-1--active":t.active===s},"block-doctors__col-1--"+s]},[e("h3",{staticClass:"block-doctors__title",class:{"block-doctors__title--active":t.fixed}},[e("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+t.cleanStr(o.title),easing:"linear"},expression:'{ el: "#" + cleanStr(section.title), easing: "linear" }'}],staticClass:"block-doctors__title-text",style:{transitionDelay:.15*s+"s"},domProps:{innerHTML:t._s(o.title)}}),e("div",{staticClass:"block-doctors__title-line",style:{transition:"translateY("+2*t.active+"rem)"}})]),e("div",{staticClass:"block-doctors__body",domProps:{innerHTML:t._s(o.body)}}),"/about-us"===t.$route.path?e("div",{staticClass:"block-doctors__read-more",on:{click:function(e){t.openBio(o)}}},[t._v("Read More")]):t._e(),o.button.href?e("router-link",{staticClass:"block-doctors__button",attrs:{to:o.button.href}},[e("div",{staticClass:"block-doctors__button-click",domProps:{innerHTML:t._s(o.button.label)}})]):t._e()],1),e("div",{staticClass:"block-doctors__col-2"},[e("div",{staticClass:"block-doctors__image",class:{"block-doctors__image--active":t.active===s},style:{backgroundImage:"url("+o.image+")"},attrs:{role:"img","aria-label":"Doctors and their Children"}})])])})),e("transition",{attrs:{name:"fade-in-modal"}},[t.bio?e("ModalBio",{attrs:{props:t.bio},on:{closeBioModal:function(o){t.openBio()}}}):t._e()],1)],2)},staticRenderFns:[]};o.a=s},"3/Nv":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=b(e("95gi")),n=b(e("ZXMY")),i=b(e("6b6g")),l=b(e("O0MH")),a=b(e("Aiet")),c=b(e("MmGL")),r=b(e("1hkQ")),u=b(e("h6ml")),d=b(e("TlHI")),m=b(e("Xzyf")),_=b(e("w37d")),v=b(e("nvA2")),p=b(e("KnmU"));function b(t){return t&&t.__esModule?t:{default:t}}o.default={name:"Home",computed:{props:function(){return this.$store.state.pages.home}},components:{BlockOverlap:s.default,BlockOverlapMobile:n.default,BlockOverlapTablet:i.default,BlockScroll:l.default,BlockScrollMobile:a.default,BlockScrollTablet:c.default,BlockTextImage:r.default,CustomHomeTestimonials:u.default,CustomHomeTreatments:d.default,CustomHomeTreatmentIcons:m.default,CustomHomeWelcome:v.default,CustomHomeSmileAssessment:_.default,BlockDoctors:p.default}}},"699J":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("3/Nv"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("DWQ+"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},"6b6g":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("7tJT"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("OS2f"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},"7tJT":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},scrolling:null,active:0,showing:!1,transformed:!1}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},setActive:function(t){this.active=t},onWaypointIn:function(t){var o=this,e=t.going,s=t.direction;t._entry;"in"===e&&"top"===s&&(this.showing=!0,setTimeout(function(){o.transformed=!0},1250))}}}},"8H42":function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"component",staticClass:"block-scroll",class:{"block-scroll--active":t.showing,"block-scroll--transformed":t.transformed},style:{height:100*t.content.length+"vh"}},[e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-scroll__waypoint block-scroll__waypoint--in"}),e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"block-scroll__waypoint"}),t._l(t.content,function(o,s){return e("div",{key:"anchor - "+s,staticClass:"block-scroll__anchor",style:{top:"calc(1vh + "+100*s+"vh)"},attrs:{id:t.cleanStr(o.title)}})}),e("div",{staticClass:"block-scroll__scroll",class:{"block-scroll__scroll--fixed":t.fixed},style:{transform:t.positionBottom?"translate3d(-50%, calc(100% - 50vh), 0)":"translate3d(-50%, -50%, 0)"}},t._l(t.content,function(o,s){return e("div",{key:"section-"+(s+1),staticClass:"block-scroll__content--active",class:{"block-scroll__content--active":t.active===s}},[e("div",{staticClass:"block-scroll__container"},[e("div",{staticClass:"block-scroll__col-1 block-scroll__col-1--1 block-scroll__col-1--2 block-scroll__col-1--active",class:[{"block-scroll__col-1--active":t.active===s},"block-scroll__col-1--"+s]},[e("h3",{staticClass:"block-scroll__title",class:{"block-scroll__title--active":t.fixed}},[e("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+t.cleanStr(o.title),easing:"linear"},expression:'{ el: "#" + cleanStr(section.title), easing: "linear" }'}],staticClass:"block-scroll__title-text",style:{transitionDelay:.15*s+"s"},domProps:{innerHTML:t._s(o.title)}}),e("div",{staticClass:"block-scroll__title-line",style:{transition:"translateY("+2*t.active+"rem)"}})]),e("div",{staticClass:"block-scroll__body",domProps:{innerHTML:t._s(o.body)}}),"/about-us"===t.$route.path?e("div",{staticClass:"block-scroll__read-more",on:{click:function(e){t.openBio(o)}}},[t._v("Read More")]):t._e(),o.button.href?e("router-link",{staticClass:"block-scroll__button",attrs:{to:o.button.href}},[e("div",{staticClass:"block-scroll__button-click",domProps:{innerHTML:t._s(o.button.label)}})]):t._e()],1),e("div",{staticClass:"block-scroll__col-2"},[e("div",{staticClass:"block-scroll__image block-scroll__image--active",class:{"block-scroll__image--active":t.active===s},style:{backgroundImage:"url("+o.image+")"},attrs:{role:"img","aria-label":"Doctors and their Children"}})])])])})),e("transition",{attrs:{name:"fade-in-modal"}},[t.bio?e("ModalBio",{attrs:{props:t.bio},on:{closeBioModal:function(o){t.openBio()}}}):t._e()],1)],2)},staticRenderFns:[]};o.a=s},"8uGZ":function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"custom-home-treatment-icons"},[e("div",{staticClass:"custom-home-treatment-icons__container"},[e("h2",{staticClass:"custom-home-treatment-icons__title",domProps:{innerHTML:t._s(t.content.title)}}),e("div",{staticClass:"custom-home-treatment-icons__links"},t._l(t.content.type,function(o,s){return e("router-link",{key:"link - "+s,staticClass:"custom-home-treatment-icons__link",attrs:{to:o.href}},[e("img",{staticClass:"custom-home-treatment-icons__image",attrs:{src:o.image,alt:""}}),e("h3",{staticClass:"custom-home-treatment-icons__type",domProps:{innerHTML:t._s(o.title)}})])}),1)])])},staticRenderFns:[]};o.a=s},"95gi":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("UahC"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("Qu4X"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},Aiet:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("d0KF"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("HGLR"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},"DWQ+":function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.props?e("div",{staticClass:"pages-home"},[e("CustomHomeWelcome",{attrs:{content:t.props.welcome}}),e("iframe",{staticStyle:{height:"700px",width:"90vw",border:"0",display:"block",margin:"auto"},attrs:{src:"https://appointments.greyfinch.com/?division=595555",allow:"geolocation"}}),e("BlockDoctors",{attrs:{content:t.props.scroll}}),e("CustomHomeTreatmentIcons",{attrs:{content:t.props.custom_home_treatment_icons}}),e("CustomHomeSmileAssessment",{attrs:{content:t.props.smile_simulation}}),e("BlockTextImage",{attrs:{content:t.props.text_image}}),e("CustomHomeTestimonials",{attrs:{content:t.props.testimonials}})],1):t._e()},staticRenderFns:[]};o.a=s},HGLR:function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"component",staticClass:"block-scroll-mobile",class:{"block-scroll-mobile--active":t.showing,"block-scroll-mobile--transformed":t.transformed}},[e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-scroll-mobile__waypoint block-scroll-mobile__waypoint--in"}),t._l(t.content,function(o,s){return e("div",{key:"anchor - "+s,staticClass:"block-scroll-mobile__anchor",attrs:{id:t.cleanStr(o.title)}})}),e("div",{staticClass:"block-scroll-mobile__container"},[e("div",{staticClass:"block-scroll-mobile__tabs"},t._l(t.content,function(o,s){return e("div",{key:"tab-"+(s+1),staticClass:"block-scroll-mobile__tab",class:{"block-scroll-mobile__tab--active":t.active===s},domProps:{innerHTML:t._s(o.title)},on:{click:function(o){t.setActive(s)}}})})),e("div",{staticClass:"block-scroll-mobile__images"},[e("div",{staticClass:"block-scroll-mobile__background",class:{"block-scroll-mobile__background--active":1===t.active}}),e("div",{staticClass:"block-scroll-mobile__image",class:{"block-scroll-mobile__image--active":1===t.active}},t._l(t.content,function(o,s){return e("div",{key:"tile-"+(s+1),staticClass:"block-scroll-mobile__image-actual",class:{"block-scroll-mobile__image-actual--active":t.active===s},style:{backgroundImage:"url("+o.image+")"},attrs:{role:"img","aria-label":"Doctors and their Children"}})}))]),e("div",{staticClass:"block-scroll-mobile__content"},t._l(t.content,function(o,s){return e("div",{key:"tile-"+(s+1),staticClass:"block-scroll-mobile__text-box",class:{"block-scroll-mobile__text-box--active":t.active===s}},[e("div",{staticClass:"block-scroll-mobile__body",domProps:{innerHTML:t._s(o.body)}}),"/about-us"===t.$route.path?e("div",{staticClass:"block-scroll-mobile__read-more",on:{click:function(e){t.openBio(o)}}},[t._v("Read More")]):t._e(),o.button.href?e("router-link",{staticClass:"block-scroll-mobile__button",attrs:{to:o.button.href}},[e("div",{staticClass:"block-scroll-mobile__button-click",domProps:{innerHTML:t._s("..."+o.button.label)}})]):t._e()],1)}))]),e("transition",{attrs:{name:"fade-in-modal"}},[t.bio?e("ModalBio",{attrs:{props:t.bio},on:{closeBioModal:function(o){t.openBio()}}}):t._e()],1)],2)},staticRenderFns:[]};o.a=s},JmpF:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=i(e("bm7V")),n=i(e("lE8X"));function i(t){return t&&t.__esModule?t:{default:t}}o.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1,fixed:!1,positionBottom:!1,bio:!1}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypointIn:function(t){var o=this,e=t.going,s=t.direction;t._entry;"in"===e&&"top"===s&&(this.showing=!0,setTimeout(function(){o.transformed=!0},1250))},cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},moveTo:function(t){var o=this,e=this.cleanStr(t);this.scrolling=!0,setTimeout(function(){s.default.scrollTo("#"+e,{offset:0,easing:"linear",duration:500})},350),setTimeout(function(){o.scrolling=null},850)},onScroll:function(){var t=(this.content.length-1)/this.content.length,o=this.$refs.component.clientHeight,e=window.pageYOffset-this.$refs.component.offsetTop,s=window.pageYOffset>this.$refs.component.offsetTop;this.fixed=!!(o*t>=e&&s),this.positionBottom=!!(o*t<=e&&s)},onWaypoint:function(t,o){var e=t.going,s=t.direction;t._entry;"out"===e&&"bottom"===s&&(this.active-=1),"in"===e&&"top"===s&&(this.active+=1)},openBio:function(t){this.bio?this.bio=!1:this.bio=t,this.bio?document.body.classList.add("body-stop"):document.body.classList.remove("body-stop")}},components:{ModalBio:n.default}}},KnmU:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("JmpF"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("+T4J"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},MmGL:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("qofE"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("gbih"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},O0MH:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("yOY5"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("8H42"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},OS2f:function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"component",staticClass:"block-overlap-tablet",class:{"block-overlap-tablet--alt":t.alt,"block-overlap-tablet--active":t.showing,"block-overlap-tablet--transformed":t.transformed}},[e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-overlap-tablet__waypoint block-overlap-tablet__waypoint--in"}),t._l(t.content.scroll,function(o,s){return e("div",{key:"anchor - "+s,staticClass:"block-overlap-tablet__anchor",attrs:{id:t.cleanStr(o.title)}})}),e("div",{staticClass:"block-overlap-tablet__scroll",class:{"block-overlap-tablet__scroll--fixed":t.showing}},[e("h2",{staticClass:"block-overlap-tablet__section-title",domProps:{innerHTML:t._s(t.content.title)}}),t._l(t.content.scroll,function(o,s){return e("div",{key:"section-"+(s+1),staticClass:"block-overlap-tablet__content",class:{"block-overlap-tablet__content--active":t.active===s}},[e("div",{staticClass:"block-overlap-tablet__image",class:{"block-overlap-tablet__image--active":t.active===s,"block-overlap-tablet__image--alt":t.alt},style:{backgroundImage:"url("+o.image+")"},attrs:{role:"img","aria-label":"treatment image "+(s+1)}}),e("div",{staticClass:"block-overlap-tablet__container"},[e("div",{staticClass:"block-overlap-tablet__col-1",class:{"block-overlap-tablet__col-1--active":t.active===s},style:{top:2*(s+1)+"rem"}},[e("h3",{staticClass:"block-overlap-tablet__title",class:{"block-overlap-tablet__title--active":t.showing}},[e("div",{staticClass:"block-overlap-tablet__title-text",style:{transition:"opacity .45s "+(.75+.15*s)+"s ease-in"},domProps:{innerHTML:t._s(o.title)},on:{click:function(o){t.setActive(s)}}}),e("div",{staticClass:"block-overlap-tablet__title-line",style:{transition:t.transformed?"transform .35s .35s ease-in":"transform .45s "+(.75+.15*t.content.scroll.length)+"s ease-in"}})]),e("div",{staticClass:"block-overlap-tablet__body",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},domProps:{innerHTML:t._s(o.body)}}),o.button.href?e("router-link",{staticClass:"block-overlap-tablet__button",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},attrs:{to:o.button.href}},[e("div",{staticClass:"block-overlap-tablet__button-click",domProps:{innerHTML:t._s(o.button.label)}})]):t._e()],1)])])})],2)],2)},staticRenderFns:[]};o.a=s},OTGH:function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"component",staticClass:"block-overlap-mobile",class:{"block-overlap-mobile--active":t.active}},t._l(t.content.scroll,function(o,s){return e("div",{key:"section -"+s,staticClass:"block-overlap-mobile",attrs:{id:o.title}},[t.loaded?e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"block-overlap-mobile__waypoint"}):t._e(),e("div",{staticClass:"block-overlap-mobile__container"},[e("div",{staticClass:"block-overlap-mobile__col block-overlap-mobile__col-1"},[e("div",{staticClass:"block-overlap-mobile__image"},[e("div",{staticClass:"block-overlap-mobile__image-container"},[e("div",{staticClass:"block-overlap-mobile__image-image",style:{backgroundImage:"url("+o.image+")",transform:"scale("+t.percentage+")"}})])])]),e("div",{staticClass:"block-overlap-mobile__col block-overlap-mobile__col-2"},[e("h2",{staticClass:"block-overlap-mobile__title",domProps:{innerHTML:t._s(o.title)}}),e("div",{staticClass:"block-overlap-mobile__body",domProps:{innerHTML:t._s(o.body)}})])])])}))},staticRenderFns:[]};o.a=s},P4U2:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["content"]}},Qu4X:function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"component",staticClass:"block-overlap",class:{"block-overlap--alt":t.alt,"block-overlap--active":t.showing,"block-overlap--transformed":t.transformed},style:{height:100*t.content.scroll.length+"vh"}},[e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-overlap__waypoint block-overlap__waypoint--in"}),t._l(t.content.scroll.length-1,function(o,s){return e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],key:"waypoint-"+s,staticClass:"block-overlap__waypoint",style:{top:150+75*s+"vh"}})}),t._l(t.content.scroll,function(o,s){return e("div",{key:"anchor - "+s,staticClass:"block-overlap__anchor",style:{top:"calc(1vh + "+100*s+"vh)"},attrs:{id:t.cleanStr(o.title)}})}),e("div",{staticClass:"block-overlap__scroll",class:{"block-overlap__scroll--fixed":t.fixed},style:{transform:t.positionBottom?"translate3d(-50%, calc("+100*(t.content.scroll.length-1)+"% - 50vh), 0)":"translate3d(-50%, -50%, 0)"}},[e("h2",{staticClass:"block-overlap__section-title",domProps:{innerHTML:t._s(t.content.title)}}),t._l(t.content.scroll,function(o,s){return e("div",{key:"section-"+(s+1),staticClass:"block-overlap__content",class:{"block-overlap__content--active":t.active===s}},[e("div",{staticClass:"block-overlap__image",class:{"block-overlap__image--active":t.active===s},style:{backgroundImage:"url("+o.image+")"},attrs:{role:"img","aria-label":"treatment image "+(s+1)}}),e("div",{staticClass:"block-overlap__container"},[e("div",{staticClass:"block-overlap__col-1",class:{"block-overlap__col-1--active":t.active===s},style:{top:2*(s+1)+"rem"}},[e("h3",{staticClass:"block-overlap__title",class:{"block-overlap__title--active":t.fixed}},[e("div",{staticClass:"block-overlap__title-text",style:{transition:"opacity .45s "+(.75+.15*s)+"s ease-in"},domProps:{innerHTML:t._s(o.title)},on:{click:function(e){t.moveTo(o.title)}}}),e("div",{staticClass:"block-overlap__title-line",style:{transition:t.transformed?"transform .35s .35s ease-in":"transform .45s "+(.75+.15*t.content.scroll.length)+"s ease-in"}})]),e("div",{staticClass:"block-overlap__body",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},domProps:{innerHTML:t._s(o.body)}}),o.button.href?e("router-link",{staticClass:"block-overlap__button",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},attrs:{to:o.button.href}},[e("div",{staticClass:"block-overlap__button-click",domProps:{innerHTML:t._s(o.button.label)}})]):t._e()],1)])])})],2)],2)},staticRenderFns:[]};o.a=s},RdGc:function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"custom-home-treatments"},[t._l(t.content.scroll,function(t,o){return e("div",{key:"background - "+o,staticClass:"custom-home-treatments__background",style:{backgroundImage:"url("+t.image+")"}})}),e("div",{staticClass:"custom-home-treatments__container"},[e("div",{staticClass:"custom-home-treatments__col"},[e("h2",{staticClass:"custom-home-treatments__title",domProps:{innerHTML:t._s(t.content.title)}})]),e("div",{staticClass:"custom-home-treatments__col custom-home-treatments__col--body"},t._l(t.content.scroll,function(o,s){return e("router-link",{key:"link - "+s,staticClass:"custom-home-treatments__link",attrs:{to:o.button.href},domProps:{innerHTML:t._s(o.title)}})}),1)])],2)},staticRenderFns:[]};o.a=s},ReFT:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0,1]},loaded:!1,active:!1,transform:null,percentage:null}},mounted:function(){this.loaded=!0,this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypoint:function(t){var o=t.going;t.direction,t._entry;"in"===o&&(this.active=!0)},onScroll:function(){var t=window.pageYOffset-this.$refs.component.offsetTop,o=this.$refs.component.clientHeight/2,e=window.pageYOffset>=this.$refs.component.offsetTop,s=window.pageYOffset<=this.$refs.component.offsetTop,n=(this.$refs.component.offsetTop-window.pageYOffset)/100,i=-1*n;o>=t&&s&&(this.percentage=1+n/50,this.transform=1.5*i),o>=t&&e&&(this.percentage=1+i/50,this.transform=1.5*n)}}}},TlHI:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("o8FR"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("RdGc"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},UahC:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s,n=e("bm7V"),i=(s=n)&&s.__esModule?s:{default:s};o.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},scrolling:null,active:0,showing:!1,transformed:!1,fixed:!1,positionBottom:!1}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},moveTo:function(t){var o=this.cleanStr(t);i.default.scrollTo("#"+o,{offset:0,easing:"linear",duration:500})},onScroll:function(){var t=(this.content.scroll.length-1)/this.content.scroll.length,o=this.$refs.component.clientHeight,e=window.pageYOffset-this.$refs.component.offsetTop,s=window.pageYOffset>this.$refs.component.offsetTop;this.fixed=!!(o*t>=e&&s),this.positionBottom=!!(o*t<=e&&s)},onWaypointIn:function(t){var o=this,e=t.going,s=t.direction;t._entry;"in"===e&&"top"===s&&(this.showing=!0,setTimeout(function(){o.transformed=!0},1250))},onWaypoint:function(t){var o=t.going,e=t.direction;t._entry;"out"===o&&"bottom"===e&&(this.active-=1),"in"===o&&"top"===e&&(this.active+=1)}}}},WMYw:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},loaded:!1,active:!1,transform:null,percentage:null}},mounted:function(){this.loaded=!0,this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypoint:function(t){var o=t.going;t.direction,t._entry;"in"===o&&(this.active=!0)},onScroll:function(){var t=window.pageYOffset-this.$refs.component.offsetTop,o=this.$refs.component.clientHeight/2,e=window.pageYOffset>=this.$refs.component.offsetTop,s=window.pageYOffset<=this.$refs.component.offsetTop,n=(this.$refs.component.offsetTop-window.pageYOffset)/100,i=-1*n;o>=t&&s&&(this.percentage=1+n/50,this.transform=1.5*i),o>=t&&e&&(this.percentage=1+i/50,this.transform=1.5*n)}}}},Xzyf:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("P4U2"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("8uGZ"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},ZXMY:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("WMYw"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("OTGH"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},d0KF:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s,n=e("lE8X"),i=(s=n)&&s.__esModule?s:{default:s};o.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1,bio:!1}},methods:{onWaypointIn:function(t){var o=this,e=t.going,s=t.direction;t._entry;"in"===e&&"top"===s&&(this.showing=!0,setTimeout(function(){o.transformed=!0},1250))},setActive:function(t){this.active=t},cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},openBio:function(t){this.bio?this.bio=!1:this.bio=t,this.bio?document.body.classList.add("body-stop"):document.body.classList.remove("body-stop")}},components:{ModalBio:i.default}}},e636:function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"component",staticClass:"custom-home-smile-assessment",class:{"custom-home-smile-assessment--alt":t.alt,"custom-home-smile-assessment--active":t.active}},[t.loaded?e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"custom-home-smile-assessment__waypoint"}):t._e(),e("div",{staticClass:"custom-home-smile-assessment__container"},[e("div",{staticClass:"custom-home-smile-assessment__col custom-home-smile-assessment__col-1"},[e("div",{staticClass:"custom-home-smile-assessment__box"},[e("h3",{staticClass:"custom-home-smile-assessment__title",domProps:{innerHTML:t._s(t.content.title)}}),e("div",{staticClass:"custom-home-smile-assessment__body",domProps:{innerHTML:t._s(t.content.body)}}),e("a",{staticClass:"custom-home-smile-assessment__button",attrs:{href:t.content.button.href,target:"_blank"},domProps:{innerHTML:t._s(t.content.button.label)}})])]),e("div",{staticClass:"custom-home-smile-assessment__col custom-home-smile-assessment__col-2"},[e("img",{staticClass:"custom-home-smile-assessment__image",style:{transform:"scale("+this.percentage+")"},attrs:{src:t.content.image,alt:""}})])])])},staticRenderFns:[]};o.a=s},gbih:function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"component",staticClass:"block-scroll-tablet",class:{"block-scroll-tablet--active":t.showing,"block-scroll-tablet--transformed":t.transformed}},[e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-scroll-tablet__waypoint block-scroll-tablet__waypoint--in"}),e("div",{staticClass:"block-scroll-tablet__scroll"},t._l(t.content,function(o,s){return e("div",{key:"section-"+(s+1),staticClass:"block-scroll-tablet__content",class:{"block-scroll-tablet__content--active":t.active===s}},[e("div",{staticClass:"block-scroll-tablet__container"},[e("div",{staticClass:"block-scroll-tablet__col-1",class:[{"block-scroll-tablet__col-1--active":t.active===s},"block-scroll-tablet__col-1--"+s]},[e("h3",{staticClass:"block-scroll-tablet__title",class:{"block-scroll-tablet__title--active":t.showing},on:{click:function(o){t.setActive(s)}}},[e("div",{staticClass:"block-scroll-tablet__title-text",style:{transitionDelay:.15*s+"s"},domProps:{innerHTML:t._s(o.title)}}),e("div",{staticClass:"block-scroll-tablet__title-line",style:{transition:"translateY("+2*t.active+"rem)"}})]),e("div",{staticClass:"block-scroll-tablet__body",domProps:{innerHTML:t._s(o.body)}}),"/about-us"===t.$route.path?e("div",{staticClass:"block-scroll-tablet__read-more",on:{click:function(e){t.openBio(o)}}},[t._v("Read More")]):t._e(),o.button.href?e("router-link",{staticClass:"block-scroll-tablet__button",attrs:{to:o.button.href}},[e("div",{staticClass:"block-scroll-tablet__button-click",domProps:{innerHTML:t._s(o.button.label)}})]):t._e()],1),e("div",{staticClass:"block-scroll-tablet__col-2"},[e("div",{staticClass:"block-scroll-tablet__image",class:{"block-scroll-tablet__image--active":t.active===s},style:{backgroundImage:"url("+o.image+")"},attrs:{role:"img","aria-label":"Doctors and their Children"}})])])])})),e("transition",{attrs:{name:"fade-in-modal"}},[t.bio?e("ModalBio",{attrs:{props:t.bio},on:{closeBioModal:function(o){t.openBio()}}}):t._e()],1)],1)},staticRenderFns:[]};o.a=s},h6ml:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("kCp+"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("tO5a"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},"kCp+":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},activeSlide:0,modalShowing:null,showing:null}},methods:{onWaypoint:function(t){var o=t.going,e=t.direction;t._entry;"in"===o&&"top"===e&&(this.showing=!0)},truncText:function(t){return t.length>175?t.slice(0,175)+"...":t},toggleModal:function(){this.modalShowing?(this.modalShowing=!this.modalShowing,document.body.classList.remove("body-stop")):(this.modalShowing=!this.modalShowing,document.body.classList.add("body-stop"))},setSlide:function(){this.activeSlide===this.content.length-1?this.activeSlide=0:this.activeSlide+=1}}}},o8FR:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["content"]}},qofE:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s,n=e("lE8X"),i=(s=n)&&s.__esModule?s:{default:s};o.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1,bio:!1}},methods:{onWaypointIn:function(t){var o=this,e=t.going,s=t.direction;t._entry;"in"===e&&"top"===s&&(this.showing=!0,setTimeout(function(){o.transformed=!0},1250))},cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},setActive:function(t){this.active=t},openBio:function(t){this.bio?this.bio=!1:this.bio=t,this.bio?document.body.classList.add("body-stop"):document.body.classList.remove("body-stop")}},components:{ModalBio:i.default}}},tO5a:function(t,o,e){"use strict";var s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"custom-home-testimonials",class:{"custom-home-testimonials--showing":t.showing}},[e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"custom-home-testimonials__waypoint"}),e("div",{staticClass:"custom-home-testimonials__slider"},[e("div",{staticClass:"custom-home-testimonials__button",on:{click:this.setSlide}},[t._v("Next >")]),t._l(t.content,function(o,s){return e("div",{key:"image - "+(s+1),staticClass:"custom-home-testimonials__slide",class:{"custom-home-testimonials__slide--active":t.activeSlide===s},style:{backgroundImage:"url("+o.image+")"},attrs:{role:"img","aria-label":"testimonial slide for "+o.name}})})],2),e("div",{staticClass:"custom-home-testimonials__text-box"},t._l(t.content,function(o,s){return e("div",{key:"textbox - "+(s+1),staticClass:"custom-home-testimonials__content",class:{"custom-home-testimonials__content--active":t.activeSlide===s}},[e("Icon",{staticClass:"custom-home-testimonials__quote-left",attrs:{name:"quoteLft"}}),e("div",{staticClass:"custom-home-testimonials__body",domProps:{innerHTML:t._s(o.body)}}),e("div",{staticClass:"custom-home-testimonials__body custom-home-testimonials__body--mobile",domProps:{innerHTML:t._s(t.truncText(o.body))}}),e("div",{staticClass:"custom-home-testimonials__modal-button",on:{click:t.toggleModal}},[t._v("Read More")]),e("div",{staticClass:"custom-home-testimonials__name",domProps:{innerHTML:t._s(o.name)}}),e("Icon",{staticClass:"custom-home-testimonials__quote-right",attrs:{name:"quoteRt"}})],1)})),e("div",{staticClass:"custom-home-testimonials__modal",class:{"custom-home-testimonials__modal--active":t.modalShowing}},[e("div",{staticClass:"custom-home-testimonials__modal-overlay",on:{click:t.toggleModal}}),e("div",{staticClass:"custom-home-testimonials__modal-close",on:{click:t.toggleModal}},[t._v("Close")]),t._l(t.content,function(o,s){return e("div",{key:"textbox - "+(s+1),staticClass:"custom-home-testimonials__modal-content",class:{"custom-home-testimonials__modal-content--active":t.activeSlide===s}},[e("div",{staticClass:"custom-home-testimonials__body custom-home-testimonials__body--mobile",domProps:{innerHTML:t._s(o.body)}}),e("div",{staticClass:"custom-home-testimonials__name custom-home-testimonials__name--mobile",domProps:{innerHTML:t._s(o.name)}})])})],2)])},staticRenderFns:[]};o.a=s},w37d:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("ReFT"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);var l=e("e636"),a=e("VU/8")(n.a,l.a,!1,null,null,null);o.default=a.exports},yOY5:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=i(e("bm7V")),n=i(e("lE8X"));function i(t){return t&&t.__esModule?t:{default:t}}o.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1,fixed:!1,positionBottom:!1,bio:!1}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypointIn:function(t){var o=this,e=t.going,s=t.direction;t._entry;"in"===e&&"top"===s&&(this.showing=!0,setTimeout(function(){o.transformed=!0},1250))},cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},moveTo:function(t){var o=this,e=this.cleanStr(t);this.scrolling=!0,setTimeout(function(){s.default.scrollTo("#"+e,{offset:0,easing:"linear",duration:500})},350),setTimeout(function(){o.scrolling=null},850)},onScroll:function(){},onWaypoint:function(t,o){var e=t.going,s=t.direction;t._entry;"out"===e&&"bottom"===s&&(this.active-=1),"in"===e&&"top"===s&&(this.active+=1)},openBio:function(t){this.bio?this.bio=!1:this.bio=t,this.bio?document.body.classList.add("body-stop"):document.body.classList.remove("body-stop")}},components:{ModalBio:n.default}}}});
//# sourceMappingURL=1.js.map