webpackJsonp([1],{"3/Nv":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=v(o("95gi")),l=v(o("ZXMY")),n=v(o("6b6g")),i=v(o("O0MH")),a=v(o("Aiet")),c=v(o("MmGL")),r=v(o("1hkQ")),u=v(o("h6ml")),d=v(o("TlHI")),_=v(o("nvA2"));function v(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Home",computed:{props:function(){return this.$store.state.pages.home}},components:{BlockOverlap:s.default,BlockOverlapMobile:l.default,BlockOverlapTablet:n.default,BlockScroll:i.default,BlockScrollMobile:a.default,BlockScrollTablet:c.default,BlockTextImage:r.default,CustomHomeTestimonials:u.default,CustomHomeTreatments:d.default,CustomHomeWelcome:_.default}}},"699J":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("3/Nv"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("TZ25"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},"6b6g":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7tJT"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("OS2f"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},"7tJT":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},scrolling:null,active:0,showing:!1,transformed:!1}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},setActive:function(t){this.active=t},onWaypointIn:function(t){var e=this,o=t.going,s=t.direction;t._entry;"in"===o&&"top"===s&&(this.showing=!0,setTimeout(function(){e.transformed=!0},1250))}}}},"95gi":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("UahC"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("Qu4X"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},Aiet:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("d0KF"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("gyEc"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},ITjw:function(t,e,o){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"custom-home-welcome"},[e("div",{staticClass:"custom-home-welcome__container"},[e("div",{staticClass:"custom-home-welcome__col"},[e("h2",{staticClass:"custom-home-welcome__title",domProps:{innerHTML:this._s(this.content.title)}}),e("div",{staticClass:"custom-home-welcome__body",domProps:{innerHTML:this._s(this.content.body)}})])])])},staticRenderFns:[]};e.a=s},MmGL:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("qofE"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("Y5Nd"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},O0MH:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("yOY5"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("x+OG"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},OS2f:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-overlap-tablet",class:{"block-overlap-tablet--alt":t.alt,"block-overlap-tablet--active":t.showing,"block-overlap-tablet--transformed":t.transformed}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-overlap-tablet__waypoint block-overlap-tablet__waypoint--in"}),t._l(t.content.scroll,function(e,s){return o("div",{key:"anchor - "+s,staticClass:"block-overlap-tablet__anchor",attrs:{id:t.cleanStr(e.title)}})}),o("div",{staticClass:"block-overlap-tablet__scroll",class:{"block-overlap-tablet__scroll--fixed":t.showing}},[o("h2",{staticClass:"block-overlap-tablet__section-title",domProps:{innerHTML:t._s(t.content.title)}}),t._l(t.content.scroll,function(e,s){return o("div",{key:"section-"+(s+1),staticClass:"block-overlap-tablet__content",class:{"block-overlap-tablet__content--active":t.active===s}},[o("div",{staticClass:"block-overlap-tablet__image",class:{"block-overlap-tablet__image--active":t.active===s,"block-overlap-tablet__image--alt":t.alt},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"treatment image "+(s+1)}}),o("div",{staticClass:"block-overlap-tablet__container"},[o("div",{staticClass:"block-overlap-tablet__col-1",class:{"block-overlap-tablet__col-1--active":t.active===s},style:{top:2*(s+1)+"rem"}},[o("h3",{staticClass:"block-overlap-tablet__title",class:{"block-overlap-tablet__title--active":t.showing}},[o("div",{staticClass:"block-overlap-tablet__title-text",style:{transition:"opacity .45s "+(.75+.15*s)+"s ease-in"},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){t.setActive(s)}}}),o("div",{staticClass:"block-overlap-tablet__title-line",style:{transition:t.transformed?"transform .35s .35s ease-in":"transform .45s "+(.75+.15*t.content.scroll.length)+"s ease-in"}})]),o("div",{staticClass:"block-overlap-tablet__body",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},domProps:{innerHTML:t._s(e.body)}}),e.button.href?o("router-link",{staticClass:"block-overlap-tablet__button",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},attrs:{to:e.button.href}},[o("div",{staticClass:"block-overlap-tablet__button-click",domProps:{innerHTML:t._s(e.button.label)}})]):t._e()],1)])])})],2)],2)},staticRenderFns:[]};e.a=s},OTGH:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-overlap-mobile",class:{"block-overlap-mobile--active":t.active}},t._l(t.content.scroll,function(e,s){return o("div",{key:"section -"+s,staticClass:"block-overlap-mobile",attrs:{id:e.title}},[t.loaded?o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"block-overlap-mobile__waypoint"}):t._e(),o("div",{staticClass:"block-overlap-mobile__container"},[o("div",{staticClass:"block-overlap-mobile__col block-overlap-mobile__col-1"},[o("div",{staticClass:"block-overlap-mobile__image"},[o("div",{staticClass:"block-overlap-mobile__image-container"},[o("div",{staticClass:"block-overlap-mobile__image-image",style:{backgroundImage:"url("+e.image+")",transform:"scale("+t.percentage+")"}})])])]),o("div",{staticClass:"block-overlap-mobile__col block-overlap-mobile__col-2"},[o("h2",{staticClass:"block-overlap-mobile__title",domProps:{innerHTML:t._s(e.title)}}),o("div",{staticClass:"block-overlap-mobile__body",domProps:{innerHTML:t._s(e.body)}})])])])}))},staticRenderFns:[]};e.a=s},Qu4X:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-overlap",class:{"block-overlap--alt":t.alt,"block-overlap--active":t.showing,"block-overlap--transformed":t.transformed},style:{height:100*t.content.scroll.length+"vh"}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-overlap__waypoint block-overlap__waypoint--in"}),t._l(t.content.scroll.length-1,function(e,s){return o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],key:"waypoint-"+s,staticClass:"block-overlap__waypoint",style:{top:150+75*s+"vh"}})}),t._l(t.content.scroll,function(e,s){return o("div",{key:"anchor - "+s,staticClass:"block-overlap__anchor",style:{top:"calc(1vh + "+100*s+"vh)"},attrs:{id:t.cleanStr(e.title)}})}),o("div",{staticClass:"block-overlap__scroll",class:{"block-overlap__scroll--fixed":t.fixed},style:{transform:t.positionBottom?"translate3d(-50%, calc("+100*(t.content.scroll.length-1)+"% - 50vh), 0)":"translate3d(-50%, -50%, 0)"}},[o("h2",{staticClass:"block-overlap__section-title",domProps:{innerHTML:t._s(t.content.title)}}),t._l(t.content.scroll,function(e,s){return o("div",{key:"section-"+(s+1),staticClass:"block-overlap__content",class:{"block-overlap__content--active":t.active===s}},[o("div",{staticClass:"block-overlap__image",class:{"block-overlap__image--active":t.active===s},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"treatment image "+(s+1)}}),o("div",{staticClass:"block-overlap__container"},[o("div",{staticClass:"block-overlap__col-1",class:{"block-overlap__col-1--active":t.active===s},style:{top:2*(s+1)+"rem"}},[o("h3",{staticClass:"block-overlap__title",class:{"block-overlap__title--active":t.fixed}},[o("div",{staticClass:"block-overlap__title-text",style:{transition:"opacity .45s "+(.75+.15*s)+"s ease-in"},domProps:{innerHTML:t._s(e.title)},on:{click:function(o){t.moveTo(e.title)}}}),o("div",{staticClass:"block-overlap__title-line",style:{transition:t.transformed?"transform .35s .35s ease-in":"transform .45s "+(.75+.15*t.content.scroll.length)+"s ease-in"}})]),o("div",{staticClass:"block-overlap__body",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},domProps:{innerHTML:t._s(e.body)}}),e.button.href?o("router-link",{staticClass:"block-overlap__button",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},attrs:{to:e.button.href}},[o("div",{staticClass:"block-overlap__button-click",domProps:{innerHTML:t._s(e.button.label)}})]):t._e()],1)])])})],2)],2)},staticRenderFns:[]};e.a=s},RdGc:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-treatments"},[t._l(t.content.scroll,function(t,e){return o("div",{key:"background - "+e,staticClass:"custom-home-treatments__background",style:{backgroundImage:"url("+t.image+")"}})}),o("div",{staticClass:"custom-home-treatments__container"},[o("div",{staticClass:"custom-home-treatments__col"},[o("h2",{staticClass:"custom-home-treatments__title",domProps:{innerHTML:t._s(t.content.title)}})]),o("div",{staticClass:"custom-home-treatments__col custom-home-treatments__col--body"},t._l(t.content.scroll,function(e,s){return o("router-link",{key:"link - "+s,staticClass:"custom-home-treatments__link",attrs:{to:e.button.href},domProps:{innerHTML:t._s(e.title)}})}),1)])],2)},staticRenderFns:[]};e.a=s},TZ25:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.props?o("div",{staticClass:"pages-home"},[o("CustomHomeWelcome",{attrs:{content:t.props.welcome}}),o("BlockScroll",{attrs:{content:t.props.scroll}}),o("BlockScrollTablet",{attrs:{content:t.props.scroll}}),o("BlockScrollMobile",{attrs:{content:t.props.scroll}}),o("BlockTextImage",{attrs:{content:t.props.text_image}}),o("BlockOverlap",{attrs:{content:t.props.scroll_overlap}}),o("BlockOverlapTablet",{attrs:{content:t.props.scroll_overlap}}),o("CustomHomeTreatments",{attrs:{content:t.props.scroll_overlap}}),o("CustomHomeTestimonials",{attrs:{content:t.props.testimonials}})],1):t._e()},staticRenderFns:[]};e.a=s},TlHI:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("o8FR"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("RdGc"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},UahC:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,l=o("bm7V"),n=(s=l)&&s.__esModule?s:{default:s};e.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},scrolling:null,active:0,showing:!1,transformed:!1,fixed:!1,positionBottom:!1}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},moveTo:function(t){var e=this.cleanStr(t);n.default.scrollTo("#"+e,{offset:0,easing:"linear",duration:500})},onScroll:function(){var t=(this.content.scroll.length-1)/this.content.scroll.length,e=this.$refs.component.clientHeight,o=window.pageYOffset-this.$refs.component.offsetTop,s=window.pageYOffset>this.$refs.component.offsetTop;this.fixed=!!(e*t>=o&&s),this.positionBottom=!!(e*t<=o&&s)},onWaypointIn:function(t){var e=this,o=t.going,s=t.direction;t._entry;"in"===o&&"top"===s&&(this.showing=!0,setTimeout(function(){e.transformed=!0},1250))},onWaypoint:function(t){var e=t.going,o=t.direction;t._entry;"out"===e&&"bottom"===o&&(this.active-=1),"in"===e&&"top"===o&&(this.active+=1)}}}},WMYw:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},loaded:!1,active:!1,transform:null,percentage:null}},mounted:function(){this.loaded=!0,this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypoint:function(t){var e=t.going;t.direction,t._entry;"in"===e&&(this.active=!0)},onScroll:function(){var t=window.pageYOffset-this.$refs.component.offsetTop,e=this.$refs.component.clientHeight/2,o=window.pageYOffset>=this.$refs.component.offsetTop,s=window.pageYOffset<=this.$refs.component.offsetTop,l=(this.$refs.component.offsetTop-window.pageYOffset)/100,n=-1*l;e>=t&&s&&(this.percentage=1+l/50,this.transform=1.5*n),e>=t&&o&&(this.percentage=1+n/50,this.transform=1.5*l)}}}},Y5Nd:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-scroll-tablet",class:{"block-scroll-tablet--active":t.showing,"block-scroll-tablet--transformed":t.transformed}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-scroll-tablet__waypoint block-scroll-tablet__waypoint--in"}),o("div",{staticClass:"block-scroll-tablet__scroll"},t._l(t.content,function(e,s){return o("div",{key:"section-"+(s+1),staticClass:"block-scroll-tablet__content",class:{"block-scroll-tablet__content--active":t.active===s}},[o("div",{staticClass:"block-scroll-tablet__container"},[o("div",{staticClass:"block-scroll-tablet__col-1",class:[{"block-scroll-tablet__col-1--active":t.active===s},"block-scroll-tablet__col-1--"+s]},[o("h3",{staticClass:"block-scroll-tablet__title",class:{"block-scroll-tablet__title--active":t.showing},on:{click:function(e){t.setActive(s)}}},[o("div",{staticClass:"block-scroll-tablet__title-text",style:{transitionDelay:.15*s+"s"},domProps:{innerHTML:t._s(e.title)}}),o("div",{staticClass:"block-scroll-tablet__title-line",style:{transition:"translateY("+2*t.active+"rem)"}})]),o("div",{staticClass:"block-scroll-tablet__body",domProps:{innerHTML:t._s(e.body)}}),e.button.href?o("router-link",{staticClass:"block-scroll-tablet__button",attrs:{to:e.button.href}},[o("div",{staticClass:"block-scroll-tablet__button-click",domProps:{innerHTML:t._s(e.button.label)}})]):t._e()],1),o("div",{staticClass:"block-scroll-tablet__col-2"},[o("div",{staticClass:"block-scroll-tablet__image",class:{"block-scroll-tablet__image--active":t.active===s},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"Doctors and their Children"}})])])])}))])},staticRenderFns:[]};e.a=s},ZXMY:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("WMYw"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("OTGH"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},"as/A":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"]}},d0KF:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1}},methods:{onWaypointIn:function(t){var e=this,o=t.going,s=t.direction;t._entry;"in"===o&&"top"===s&&(this.showing=!0,setTimeout(function(){e.transformed=!0},1250))},setActive:function(t){this.active=t},cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")}}}},gyEc:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-scroll-mobile",class:{"block-scroll-mobile--active":t.showing,"block-scroll-mobile--transformed":t.transformed}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-scroll-mobile__waypoint block-scroll-mobile__waypoint--in"}),t._l(t.content,function(e,s){return o("div",{key:"anchor - "+s,staticClass:"block-scroll-mobile__anchor",attrs:{id:t.cleanStr(e.title)}})}),o("div",{staticClass:"block-scroll-mobile__container"},[o("div",{staticClass:"block-scroll-mobile__tabs"},t._l(t.content,function(e,s){return o("div",{key:"tab-"+(s+1),staticClass:"block-scroll-mobile__tab",class:{"block-scroll-mobile__tab--active":t.active===s},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){t.setActive(s)}}})})),o("div",{staticClass:"block-scroll-mobile__images"},[o("div",{staticClass:"block-scroll-mobile__background",class:{"block-scroll-mobile__background--active":1===t.active}}),o("div",{staticClass:"block-scroll-mobile__image",class:{"block-scroll-mobile__image--active":1===t.active}},t._l(t.content,function(e,s){return o("div",{key:"tile-"+(s+1),staticClass:"block-scroll-mobile__image-actual",class:{"block-scroll-mobile__image-actual--active":t.active===s},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"Doctors and their Children"}})}))]),o("div",{staticClass:"block-scroll-mobile__content"},t._l(t.content,function(e,s){return o("div",{key:"tile-"+(s+1),staticClass:"block-scroll-mobile__text-box",class:{"block-scroll-mobile__text-box--active":t.active===s}},[o("div",{staticClass:"block-scroll-mobile__body",domProps:{innerHTML:t._s(e.body)}}),e.button.href?o("router-link",{staticClass:"block-scroll-mobile__button",attrs:{to:e.button.href}},[o("div",{staticClass:"block-scroll-mobile__button-click",domProps:{innerHTML:t._s("..."+e.button.label)}})]):t._e()],1)}))])],2)},staticRenderFns:[]};e.a=s},h6ml:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("kCp+"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("tO5a"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},"kCp+":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},activeSlide:0,modalShowing:null,showing:null}},methods:{onWaypoint:function(t){var e=t.going,o=t.direction;t._entry;"in"===e&&"top"===o&&(this.showing=!0)},truncText:function(t){return t.length>175?t.slice(0,175)+"...":t},toggleModal:function(){this.modalShowing?(this.modalShowing=!this.modalShowing,document.body.classList.remove("body-stop")):(this.modalShowing=!this.modalShowing,document.body.classList.add("body-stop"))},setSlide:function(){this.activeSlide===this.content.length-1?this.activeSlide=0:this.activeSlide+=1}}}},nvA2:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("as/A"),l=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);var i=o("ITjw"),a=o("VU/8")(l.a,i.a,!1,null,null,null);e.default=a.exports},o8FR:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"]}},qofE:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1}},methods:{onWaypointIn:function(t){var e=this,o=t.going,s=t.direction;t._entry;"in"===o&&"top"===s&&(this.showing=!0,setTimeout(function(){e.transformed=!0},1250))},cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},setActive:function(t){this.active=t}}}},tO5a:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-testimonials",class:{"custom-home-testimonials--showing":t.showing}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"custom-home-testimonials__waypoint"}),o("div",{staticClass:"custom-home-testimonials__slider"},[o("div",{staticClass:"custom-home-testimonials__button",on:{click:this.setSlide}},[t._v("Next >")]),t._l(t.content,function(e,s){return o("div",{key:"image - "+(s+1),staticClass:"custom-home-testimonials__slide",class:{"custom-home-testimonials__slide--active":t.activeSlide===s},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"testimonial slide for "+e.name}})})],2),o("div",{staticClass:"custom-home-testimonials__text-box"},t._l(t.content,function(e,s){return o("div",{key:"textbox - "+(s+1),staticClass:"custom-home-testimonials__content",class:{"custom-home-testimonials__content--active":t.activeSlide===s}},[o("Icon",{staticClass:"custom-home-testimonials__quote-left",attrs:{name:"quoteLft"}}),o("div",{staticClass:"custom-home-testimonials__body",domProps:{innerHTML:t._s(e.body)}}),o("div",{staticClass:"custom-home-testimonials__body custom-home-testimonials__body--mobile",domProps:{innerHTML:t._s(t.truncText(e.body))}}),o("div",{staticClass:"custom-home-testimonials__modal-button",on:{click:t.toggleModal}},[t._v("Read More")]),o("div",{staticClass:"custom-home-testimonials__name",domProps:{innerHTML:t._s(e.name)}}),o("Icon",{staticClass:"custom-home-testimonials__quote-right",attrs:{name:"quoteRt"}})],1)})),o("div",{staticClass:"custom-home-testimonials__modal",class:{"custom-home-testimonials__modal--active":t.modalShowing}},[o("div",{staticClass:"custom-home-testimonials__modal-overlay",on:{click:t.toggleModal}}),o("div",{staticClass:"custom-home-testimonials__modal-close",on:{click:t.toggleModal}},[t._v("Close")]),t._l(t.content,function(e,s){return o("div",{key:"textbox - "+(s+1),staticClass:"custom-home-testimonials__modal-content",class:{"custom-home-testimonials__modal-content--active":t.activeSlide===s}},[o("div",{staticClass:"custom-home-testimonials__body custom-home-testimonials__body--mobile",domProps:{innerHTML:t._s(e.body)}}),o("div",{staticClass:"custom-home-testimonials__name custom-home-testimonials__name--mobile",domProps:{innerHTML:t._s(e.name)}})])})],2)])},staticRenderFns:[]};e.a=s},"x+OG":function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-scroll",class:{"block-scroll--active":t.showing,"block-scroll--transformed":t.transformed},style:{height:100*t.content.length+"vh"}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-scroll__waypoint block-scroll__waypoint--in"}),o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"block-scroll__waypoint"}),t._l(t.content,function(e,s){return o("div",{key:"anchor - "+s,staticClass:"block-scroll__anchor",style:{top:"calc(1vh + "+100*s+"vh)"},attrs:{id:t.cleanStr(e.title)}})}),o("div",{staticClass:"block-scroll__scroll",class:{"block-scroll__scroll--fixed":t.fixed},style:{transform:t.positionBottom?"translate3d(-50%, calc(100% - 50vh), 0)":"translate3d(-50%, -50%, 0)"}},t._l(t.content,function(e,s){return o("div",{key:"section-"+(s+1),staticClass:"block-scroll__content",class:{"block-scroll__content--active":t.active===s}},[o("div",{staticClass:"block-scroll__container"},[o("div",{staticClass:"block-scroll__col-1",class:[{"block-scroll__col-1--active":t.active===s},"block-scroll__col-1--"+s]},[o("h3",{staticClass:"block-scroll__title",class:{"block-scroll__title--active":t.fixed}},[o("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+t.cleanStr(e.title),easing:"linear"},expression:'{ el: "#" + cleanStr(section.title), easing: "linear" }'}],staticClass:"block-scroll__title-text",style:{transitionDelay:.15*s+"s"},domProps:{innerHTML:t._s(e.title)}}),o("div",{staticClass:"block-scroll__title-line",style:{transition:"translateY("+2*t.active+"rem)"}})]),o("div",{staticClass:"block-scroll__body",domProps:{innerHTML:t._s(e.body)}}),e.button.href?o("router-link",{staticClass:"block-scroll__button",attrs:{to:e.button.href}},[o("div",{staticClass:"block-scroll__button-click",domProps:{innerHTML:t._s(e.button.label)}})]):t._e()],1),o("div",{staticClass:"block-scroll__col-2"},[o("div",{staticClass:"block-scroll__image",class:{"block-scroll__image--active":t.active===s},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"Doctors and their Children"}})])])])}))],2)},staticRenderFns:[]};e.a=s},yOY5:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,l=o("bm7V"),n=(s=l)&&s.__esModule?s:{default:s};e.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1,fixed:!1,positionBottom:!1}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypointIn:function(t){var e=this,o=t.going,s=t.direction;t._entry;"in"===o&&"top"===s&&(this.showing=!0,setTimeout(function(){e.transformed=!0},1250))},cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},moveTo:function(t){var e=this,o=this.cleanStr(t);this.scrolling=!0,setTimeout(function(){n.default.scrollTo("#"+o,{offset:0,easing:"linear",duration:500})},350),setTimeout(function(){e.scrolling=null},850)},onScroll:function(){var t=(this.content.length-1)/this.content.length,e=this.$refs.component.clientHeight,o=window.pageYOffset-this.$refs.component.offsetTop,s=window.pageYOffset>this.$refs.component.offsetTop;this.fixed=!!(e*t>=o&&s),this.positionBottom=!!(e*t<=o&&s)},onWaypoint:function(t,e){var o=t.going,s=t.direction;t._entry;"out"===o&&"bottom"===s&&(this.active-=1),"in"===o&&"top"===s&&(this.active+=1)}}}}});
//# sourceMappingURL=1.js.map