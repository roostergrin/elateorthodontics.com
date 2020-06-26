webpackJsonp([3],{"+T4J":function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-doctors",class:{"block-doctors--active":t.showing},style:{height:100*t.content.length+"vh"}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-doctors__waypoint block-doctors__waypoint--in"}),o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"block-doctors__waypoint"}),t._l(t.content,function(e,s){return o("div",{key:"anchor - "+s,staticClass:"block-doctors__anchor",style:{top:"calc(1vh + "+100*s+"vh)"},attrs:{id:t.cleanStr(e.title)}})}),o("div",{staticClass:"block-doctors__content"},t._l(t.content,function(e,s){return o("div",{key:"section-"+(s+1),staticClass:"block-doctors__container"},[o("div",{staticClass:"block-doctors__col-1",class:[{"block-doctors__col-1--active":t.active===s},"block-doctors__col-1--"+s]},[o("h3",{staticClass:"block-doctors__title",class:{"block-doctors__title--active":t.fixed}},[o("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+t.cleanStr(e.title),easing:"linear"},expression:'{ el: "#" + cleanStr(section.title), easing: "linear" }'}],staticClass:"block-doctors__title-text",style:{transitionDelay:.15*s+"s"},domProps:{innerHTML:t._s(e.title)}}),o("div",{staticClass:"block-doctors__title-line",style:{transition:"translateY("+2*t.active+"rem)"}})]),o("div",{staticClass:"block-doctors__body",domProps:{innerHTML:t._s(e.body)}}),"/about-us"===t.$route.path?o("div",{staticClass:"block-doctors__read-more",on:{click:function(o){t.openBio(e)}}},[t._v("Read More")]):t._e(),e.button.href?o("router-link",{staticClass:"block-doctors__button",attrs:{to:e.button.href}},[o("div",{staticClass:"block-doctors__button-click",domProps:{innerHTML:t._s(e.button.label)}})]):t._e()],1),o("div",{staticClass:"block-doctors__col-2"},[o("div",{staticClass:"block-doctors__image",class:{"block-doctors__image--active":t.active===s},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"Doctors and their Children"}})])])})),o("transition",{attrs:{name:"fade-in-modal"}},[t.bio?o("ModalBio",{attrs:{props:t.bio},on:{closeBioModal:function(e){t.openBio()}}}):t._e()],1)],2)},staticRenderFns:[]};e.a=s},"8uGZ":function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-treatment-icons"},[o("div",{staticClass:"custom-home-treatment-icons__container"},[o("h2",{staticClass:"custom-home-treatment-icons__title",domProps:{innerHTML:t._s(t.content.title)}}),o("div",{staticClass:"custom-home-treatment-icons__links"},t._l(t.content.type,function(e,s){return o("router-link",{key:"link - "+s,staticClass:"custom-home-treatment-icons__link",attrs:{to:e.href}},[o("img",{staticClass:"custom-home-treatment-icons__image",attrs:{src:e.image}}),o("h4",{staticClass:"custom-home-treatment-icons__type",domProps:{innerHTML:t._s(e.title)}})])}),1)])])},staticRenderFns:[]};e.a=s},JmpF:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(o("bm7V")),n=i(o("lE8X"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1,fixed:!1,positionBottom:!1,bio:!1}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypointIn:function(t){var e=this,o=t.going,s=t.direction;t._entry;"in"===o&&"top"===s&&(this.showing=!0,setTimeout(function(){e.transformed=!0},1250))},cleanStr:function(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()\s]/g,"")},moveTo:function(t){var e=this,o=this.cleanStr(t);this.scrolling=!0,setTimeout(function(){s.default.scrollTo("#"+o,{offset:0,easing:"linear",duration:500})},350),setTimeout(function(){e.scrolling=null},850)},onScroll:function(){var t=(this.content.length-1)/this.content.length,e=this.$refs.component.clientHeight,o=window.pageYOffset-this.$refs.component.offsetTop,s=window.pageYOffset>this.$refs.component.offsetTop;this.fixed=!!(e*t>=o&&s),this.positionBottom=!!(e*t<=o&&s)},onWaypoint:function(t,e){var o=t.going,s=t.direction;t._entry;"out"===o&&"bottom"===s&&(this.active-=1),"in"===o&&"top"===s&&(this.active+=1)},openBio:function(t){this.bio?this.bio=!1:this.bio=t,this.bio?document.body.classList.add("body-stop"):document.body.classList.remove("body-stop")}},components:{ModalBio:n.default}}},KnmU:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("JmpF"),n=o.n(s);for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);var a=o("+T4J"),c=o("VU/8")(n.a,a.a,!1,null,null,null);e.default=c.exports},P4U2:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"]}},ReFT:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0,1]},loaded:!1,active:!1,transform:null,percentage:null}},mounted:function(){this.loaded=!0,this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypoint:function(t){var e=t.going;t.direction,t._entry;"in"===e&&(this.active=!0)},onScroll:function(){var t=window.pageYOffset-this.$refs.component.offsetTop,e=this.$refs.component.clientHeight/2,o=window.pageYOffset>=this.$refs.component.offsetTop,s=window.pageYOffset<=this.$refs.component.offsetTop,n=(this.$refs.component.offsetTop-window.pageYOffset)/100,i=-1*n;e>=t&&s&&(this.percentage=1+n/50,this.transform=1.5*i),e>=t&&o&&(this.percentage=1+i/50,this.transform=1.5*n)}}}},S7GJ:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("nhR8"),n=o.n(s);for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);var a=o("wr4a"),c=o("VU/8")(n.a,a.a,!1,null,null,null);e.default=c.exports},Xzyf:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("P4U2"),n=o.n(s);for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);var a=o("8uGZ"),c=o("VU/8")(n.a,a.a,!1,null,null,null);e.default=c.exports},e636:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"custom-home-smile-assessment",class:{"custom-home-smile-assessment--alt":t.alt,"custom-home-smile-assessment--active":t.active}},[t.loaded?o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"custom-home-smile-assessment__waypoint"}):t._e(),o("div",{staticClass:"custom-home-smile-assessment__container"},[o("div",{staticClass:"custom-home-smile-assessment__col custom-home-smile-assessment__col-1"},[o("div",{staticClass:"custom-home-smile-assessment__box"},[o("h3",{staticClass:"custom-home-smile-assessment__title",domProps:{innerHTML:t._s(t.content.title)}}),o("div",{staticClass:"custom-home-smile-assessment__body",domProps:{innerHTML:t._s(t.content.body)}}),o("a",{staticClass:"custom-home-smile-assessment__button",attrs:{href:t.content.button.href,target:"_blank"},domProps:{innerHTML:t._s(t.content.button.label)}})])]),o("div",{staticClass:"custom-home-smile-assessment__col custom-home-smile-assessment__col-2"},[o("img",{staticClass:"custom-home-smile-assessment__image",style:{transform:"scale("+this.percentage+")"},attrs:{src:t.content.image}})])])])},staticRenderFns:[]};e.a=s},h6ml:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("kCp+"),n=o.n(s);for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);var a=o("tO5a"),c=o("VU/8")(n.a,a.a,!1,null,null,null);e.default=c.exports},"kCp+":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},activeSlide:0,modalShowing:null,showing:null}},methods:{onWaypoint:function(t){var e=t.going,o=t.direction;t._entry;"in"===e&&"top"===o&&(this.showing=!0)},truncText:function(t){return t.length>175?t.slice(0,175)+"...":t},toggleModal:function(){this.modalShowing?(this.modalShowing=!this.modalShowing,document.body.classList.remove("body-stop")):(this.modalShowing=!this.modalShowing,document.body.classList.add("body-stop"))},setSlide:function(){this.activeSlide===this.content.length-1?this.activeSlide=0:this.activeSlide+=1}}}},nhR8:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(o("1hkQ")),n=r(o("h6ml")),i=r(o("Xzyf")),a=r(o("w37d")),c=r(o("nvA2")),l=r(o("KnmU"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Home",computed:{props:function(){return this.$store.state.pages.home}},components:{BlockTextImage:s.default,CustomHomeTestimonials:n.default,CustomHomeTreatmentIcons:i.default,CustomHomeWelcome:c.default,CustomHomeSmileAssessment:a.default,BlockDoctors:l.default}}},tO5a:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-home-testimonials",class:{"custom-home-testimonials--showing":t.showing}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"custom-home-testimonials__waypoint"}),o("div",{staticClass:"custom-home-testimonials__slider"},[o("div",{staticClass:"custom-home-testimonials__button",on:{click:this.setSlide}},[t._v("Next >")]),t._l(t.content,function(e,s){return o("div",{key:"image - "+(s+1),staticClass:"custom-home-testimonials__slide",class:{"custom-home-testimonials__slide--active":t.activeSlide===s},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"testimonial slide for "+e.name}})})],2),o("div",{staticClass:"custom-home-testimonials__text-box"},t._l(t.content,function(e,s){return o("div",{key:"textbox - "+(s+1),staticClass:"custom-home-testimonials__content",class:{"custom-home-testimonials__content--active":t.activeSlide===s}},[o("Icon",{staticClass:"custom-home-testimonials__quote-left",attrs:{name:"quoteLft"}}),o("div",{staticClass:"custom-home-testimonials__body",domProps:{innerHTML:t._s(e.body)}}),o("div",{staticClass:"custom-home-testimonials__body custom-home-testimonials__body--mobile",domProps:{innerHTML:t._s(t.truncText(e.body))}}),o("div",{staticClass:"custom-home-testimonials__modal-button",on:{click:t.toggleModal}},[t._v("Read More")]),o("div",{staticClass:"custom-home-testimonials__name",domProps:{innerHTML:t._s(e.name)}}),o("Icon",{staticClass:"custom-home-testimonials__quote-right",attrs:{name:"quoteRt"}})],1)})),o("div",{staticClass:"custom-home-testimonials__modal",class:{"custom-home-testimonials__modal--active":t.modalShowing}},[o("div",{staticClass:"custom-home-testimonials__modal-overlay",on:{click:t.toggleModal}}),o("div",{staticClass:"custom-home-testimonials__modal-close",on:{click:t.toggleModal}},[t._v("Close")]),t._l(t.content,function(e,s){return o("div",{key:"textbox - "+(s+1),staticClass:"custom-home-testimonials__modal-content",class:{"custom-home-testimonials__modal-content--active":t.activeSlide===s}},[o("div",{staticClass:"custom-home-testimonials__body custom-home-testimonials__body--mobile",domProps:{innerHTML:t._s(e.body)}}),o("div",{staticClass:"custom-home-testimonials__name custom-home-testimonials__name--mobile",domProps:{innerHTML:t._s(e.name)}})])})],2)])},staticRenderFns:[]};e.a=s},w37d:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("ReFT"),n=o.n(s);for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);var a=o("e636"),c=o("VU/8")(n.a,a.a,!1,null,null,null);e.default=c.exports},wr4a:function(t,e,o){"use strict";var s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.props?o("div",{staticClass:"pages-home"},[o("CustomHomeWelcome",{attrs:{content:t.props.welcome}}),o("BlockDoctors",{attrs:{content:t.props.scroll}}),o("CustomHomeTreatmentIcons",{attrs:{content:t.props.custom_home_treatment_icons}}),o("CustomHomeSmileAssessment",{attrs:{content:t.props.smile_simulation}}),o("BlockTextImage",{attrs:{content:t.props.text_image}}),o("CustomHomeTestimonials",{attrs:{content:t.props.testimonials}})],1):t._e()},staticRenderFns:[]};e.a=s}});
//# sourceMappingURL=3.js.map