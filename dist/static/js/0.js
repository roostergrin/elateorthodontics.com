webpackJsonp([0],{"1hkQ":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("4xCk"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);var s=o("AEwf"),c=o("VU/8")(n.a,s.a,!1,null,null,null);e.default=c.exports},"4xCk":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content","alt"],data:function(){return{intersectionOptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:[0,1]},loaded:!1,active:!1,transform:null,percentage:null}},mounted:function(){this.loaded=!0,this.$nextTick(window.addEventListener("scroll",this.onScroll))},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onWaypoint:function(t){var e=t.going;t.direction,t._entry;"in"===e&&(this.active=!0)},onScroll:function(){var t=window.pageYOffset-this.$refs.component.offsetTop,e=this.$refs.component.clientHeight/2,o=window.pageYOffset>=this.$refs.component.offsetTop,i=window.pageYOffset<=this.$refs.component.offsetTop,n=(this.$refs.component.offsetTop-window.pageYOffset)/100,a=-1*n;e>=t&&i&&(this.percentage=1+n/50,this.transform=1.5*a),e>=t&&o&&(this.percentage=1+a/50,this.transform=1.5*n)}}}},AEwf:function(t,e,o){"use strict";var i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"component",staticClass:"block-text-image",class:{"block-text-image--alt":t.alt,"block-text-image--active":t.active}},[t.loaded?o("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"block-text-image__waypoint"}):t._e(),o("div",{staticClass:"block-text-image__container"},[o("div",{staticClass:"block-text-image__col block-text-image__col-1"},[o("div",{staticClass:"block-text-image__image"},[o("div",{staticClass:"block-text-image__image-container"},[o("div",{staticClass:"block-text-image__image-image",style:{backgroundImage:"url("+t.content.image+")",transform:"scale("+this.percentage+")"}})])])]),o("div",{staticClass:"block-text-image__col block-text-image__col-2"},[o("h2",{staticClass:"block-text-image__title",domProps:{innerHTML:t._s(t.content.title)}}),o("div",{staticClass:"block-text-image__body",domProps:{innerHTML:t._s(t.content.body)}})])])])},staticRenderFns:[]};e.a=i}});
//# sourceMappingURL=0.js.map