webpackJsonp([4],{"6uYE":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("TDcE"),s=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);var r=o("MbXy"),i=o("VU/8")(s.a,r.a,!1,null,null,null);e.default=i.exports},MbXy:function(t,e,o){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return this.props?e("div",{staticClass:"pages-treatments"},[e("BlockTextImage",{attrs:{id:"invisalign",content:this.props.text_image,alt:!0}}),e("BlockScrollOverlap",{attrs:{content:this.props.scroll_overlap,alt:!0}})],1):this._e()},staticRenderFns:[]};e.a=n},QYZA:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Ycbo"),s=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);var r=o("RDZa"),i=o("VU/8")(s.a,r.a,!1,null,null,null);e.default=i.exports},RDZa:function(t,e,o){"use strict";var n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-scroll-overlap",class:{"block-scroll-overlap--alt":t.alt,"block-scroll-overlap--active":t.showing,"block-scroll-overlap--transformed":t.transformed},style:{height:100*t.content.scroll.length+"vh"},attrs:{id:"ceramic"}},[o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypointIn,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypointIn, options: intersectionOptions }"}],staticClass:"block-scroll-overlap__waypoint block-scroll-overlap__waypoint--in"}),t._l(t.content.scroll.length-1,function(e,n){return o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],key:"waypoint-"+n,staticClass:"block-scroll-overlap__waypoint",style:{top:150+75*n+"vh"},attrs:{id:"metal"}})}),o("div",{staticClass:"block-scroll-overlap__scroll",style:{transform:"translate3d(0, "+t.offset+"px, 0)"}},[o("h2",{staticClass:"block-scroll-overlap__section-title",domProps:{innerHTML:t._s(t.content.title)}}),t._l(t.content.scroll,function(e,n){return o("div",{key:"section-"+(n+1),staticClass:"block-scroll-overlap__content",class:{"block-scroll-overlap__content--active":t.active===n}},[o("div",{staticClass:"block-scroll-overlap__image",class:{"block-scroll-overlap__image--active":t.active===n},style:{backgroundImage:"url("+e.image+")"},attrs:{role:"img","aria-label":"treatment image "+(n+1)}}),o("div",{staticClass:"block-scroll-overlap__container"},[o("div",{staticClass:"block-scroll-overlap__col-1",class:{"block-scroll-overlap__col-1--active":t.active===n},style:{top:2*(n+1)+"rem"}},[o("h3",{staticClass:"block-scroll-overlap__title"},[o("div",{staticClass:"block-scroll-overlap__title-text",style:{transition:"opacity .45s "+(.75+.15*n)+"s ease-in"},domProps:{innerHTML:t._s(e.title)}}),o("div",{staticClass:"block-scroll-overlap__title-line",style:{transition:t.transformed?"transform .35s .35s ease-in":"transform .45s "+(.75+.15*t.content.scroll.length)+"s ease-in"}})]),o("div",{staticClass:"block-scroll-overlap__body",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},domProps:{innerHTML:t._s(e.body)}}),e.button.href?o("router-link",{staticClass:"block-scroll-overlap__button",style:{transitionDelay:t.transformed?"inherit":.75+.15*t.content.scroll.length+"s"},attrs:{to:e.button.href}},[o("div",{staticClass:"block-scroll-overlap__button-click",domProps:{innerHTML:t._s(e.button.label)}})]):t._e()],1)])])})],2)],2)},staticRenderFns:[]};e.a=n},TDcE:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(o("QYZA")),s=l(o("1hkQ"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Home",computed:{props:function(){return this.$store.state.pages.treatments}},components:{BlockScrollOverlap:n.default,BlockTextImage:s.default}}},Ycbo:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0]},active:0,showing:!1,transformed:!1,offset:0}},mounted:function(){this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var t=(this.content.scroll.length-1)/this.content.scroll.length,e=this.$refs.component.clientHeight,o=window.pageYOffset-this.$refs.component.offsetTop,n=window.pageYOffset>this.$refs.component.offsetTop;e*t>=o&&n&&(this.offset=window.pageYOffset-this.$refs.component.offsetTop)},onWaypointIn:function(t){var e=this,o=t.going,n=t.direction;t._entry;"in"===o&&"top"===n&&(this.showing=!0,setTimeout(function(){e.transformed=!0},1250))},onWaypoint:function(t){var e=t.going,o=t.direction;t._entry;"out"===e&&"bottom"===o&&(this.active-=1),"in"===e&&"top"===o&&(this.active+=1)}}}}});
//# sourceMappingURL=4.js.map