(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f53c128"],{"09fe":function(t,i,n){"use strict";var e=n("80f2"),o=n.n(e);o.a},"0fa6":function(t,i,n){"use strict";var e=n("4695"),o=n.n(e);o.a},1016:function(t,i,n){"use strict";var e=n("fdeb"),o=n.n(e);o.a},"10e6":function(t,i,n){"use strict";var e=n("9628"),o=n.n(e);o.a},"16b3":function(t,i,n){"use strict";var e=n("e63a"),o=n.n(e);o.a},"1c92":function(t,i,n){"use strict";var e=n("3644"),o=n.n(e);o.a},"30df":function(t,i,n){"use strict";var e=n("ee7d"),o=n.n(e);o.a},"34c9":function(t,i,n){"use strict";var e=n("7a90"),o=n.n(e);o.a},3644:function(t,i,n){},"389c":function(t,i,n){"use strict";var e=n("3908"),o=n.n(e);o.a},3908:function(t,i,n){},"3d8a":function(t,i,n){"use strict";var e=n("6e78"),o=n.n(e);o.a},4583:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"hollow-dots-spinner",style:t.spinnerStyle},t._l(t.dotsStyles,(function(t,i){return n("div",{key:i,staticClass:"dot",style:t})})),0)},o=[],r=(n("a9e3"),{name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin:function(){return this.dotSize/2},spinnerStyle:function(){return{height:"".concat(this.dotSize,"px"),width:"".concat((this.dotSize+2*this.horizontalMargin)*this.dotsNum,"px")}},dotStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),width:"".concat(this.dotSize,"px"),height:"".concat(this.dotSize,"px"),margin:"0 ".concat(this.horizontalMargin,"px"),borderWidth:"".concat(this.dotSize/5,"px"),borderColor:this.color}},dotsStyles:function(){for(var t=[],i=.3,n=1e3,e=1;e<=this.dotsNum;e++){var o=Object.assign({animationDelay:"".concat(n*e*i,"ms")},this.dotStyle);t.push(o)}return t}}}),c=r,a=(n("16b3"),n("2877")),s=Object(a["a"])(c,e,o,!1,null,"5a033c16",null),l=(s.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"pixel-spinner",style:t.spinnerStyle},[n("div",{staticClass:"pixel-spinner-inner",style:t.spinnerInnerStyle})])}),u=[],h=(n("99af"),{appendKeyframes:function(t,i){const n=document.createElement("style");n&&(n.setAttribute("id",t),n.innerHTML=`@keyframes ${t} {${i}}`,document.body.appendChild(n))},removeKeyframes:function(t){const i=document.getElementById(t);if(!i)return;const n=i.parentNode;n.removeChild(i)}}),p={name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationName:"pixel-spinner-animation-".concat(Date.now())}},computed:{pixelSize:function(){return this.size/7},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},spinnerInnerStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.animationName,width:"".concat(this.pixelSize,"px"),height:"".concat(this.pixelSize,"px"),backgroundColor:this.color,color:this.color,boxShadow:"\n                      ".concat(1.5*this.pixelSize,"px ").concat(1.5*this.pixelSize,"px 0 0,\n                      ").concat(-1.5*this.pixelSize,"px ").concat(-1.5*this.pixelSize,"px 0 0,\n                      ").concat(1.5*this.pixelSize,"px ").concat(-1.5*this.pixelSize,"px 0 0,\n                      ").concat(-1.5*this.pixelSize,"px ").concat(1.5*this.pixelSize,"px 0 0,\n                      0 ").concat(1.5*this.pixelSize,"px 0 0,\n                      ").concat(1.5*this.pixelSize,"px 0 0 0,\n                      ").concat(-1.5*this.pixelSize,"px 0 0 0,\n                      0 ").concat(-1.5*this.pixelSize,"px 0 0\n                    ")}}},watch:{size:{handler:"updateAnimation",immediate:!0}},mounted:function(){this.updateAnimation()},beforeDestroy:function(){h.removeKeyframes(this.animationName)},methods:{updateAnimation:function(){h.removeKeyframes(this.animationName),h.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes:function(){return"\n      50% {\n        box-shadow:  ".concat(2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     0 ").concat(this.pixelSize,"px 0 0,\n                     ").concat(this.pixelSize,"px 0 0 0,\n                     ").concat(-1*this.pixelSize,"px 0 0 0,\n                     0 ").concat(-1*this.pixelSize,"px 0 0;\n      }\n\n\n      75% {\n        box-shadow:  ").concat(2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     0 ").concat(this.pixelSize,"px 0 0,\n                     ").concat(this.pixelSize,"px 0 0 0,\n                     ").concat(-1*this.pixelSize,"px 0 0 0,\n                     0 ").concat(-1*this.pixelSize,"px 0 0;\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }")}}},f=p,d=(n("6bc6"),Object(a["a"])(f,l,u,!1,null,"c76fc818",null)),m=(d.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"flower-spinner",style:t.spinnerStyle},[n("div",{staticClass:"dots-container",style:t.dotsContainerStyle},[n("div",{staticClass:"big-dot",style:t.biggerDotStyle},[n("div",{staticClass:"small-dot",style:t.smallerDotStyle})])])])}),y=[],S={name:"FlowerSpinner",props:{animationDuration:{type:Number,default:2500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{smallDotName:"flower-spinner-small-dot-".concat(Date.now()),bigDotName:"flower-spinner-big-dot-".concat(Date.now())}},computed:{dotSize:function(){return this.size/7},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},dotsContainerStyle:function(){return{width:"".concat(this.dotSize,"px"),height:"".concat(this.dotSize,"px")}},smallerDotStyle:function(){return{background:this.color,animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.smallDotName}},biggerDotStyle:function(){return{background:this.color,animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.bigDotName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},beforeDestroy:function(){h.removeKeyframes(this.smallDotName),h.removeKeyframes(this.bigDotName)},methods:{updateAnimation:function(){h.removeKeyframes(this.smallDotName),h.appendKeyframes(this.smallDotName,this.generateSmallDotKeyframes()),h.removeKeyframes(this.bigDotName),h.appendKeyframes(this.bigDotName,this.generateBigDotKeyframes())},generateSmallDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }\n                25%, 75% {\n                  box-shadow: ").concat(1.4*this.dotSize,"px 0 0 ").concat(this.color,",\n                              -").concat(1.4*this.dotSize,"px 0 0 ").concat(this.color,",\n                              0 ").concat(1.4*this.dotSize,"px 0 ").concat(this.color,",\n                              0 -").concat(1.4*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(this.dotSize,"px -").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(this.dotSize,"px ").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(this.dotSize,"px -").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(this.dotSize,"px ").concat(this.dotSize,"px 0 ").concat(this.color,";\n\n                }\n                100% {\n                  box-shadow: 0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }")},generateBigDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }\n                50% {\n                  transform: rotate(180deg);\n                }\n                25%, 75% {\n                  box-shadow: ").concat(2.6*this.dotSize,"px 0 0 ").concat(this.color,",\n                              -").concat(2.6*this.dotSize,"px 0 0 ").concat(this.color,",\n                              0 ").concat(2.6*this.dotSize,"px 0 ").concat(this.color,",\n                              0 -").concat(2.6*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(1.9*this.dotSize,"px -").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(1.9*this.dotSize,"px ").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(1.9*this.dotSize,"px -").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(1.9*this.dotSize,"px ").concat(1.9*this.dotSize,"px 0 ").concat(this.color,";\n\n                }\n                100% {\n                  transform: rotate(360deg);\n                  box-shadow: 0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }")}}},x=S,b=(n("389c"),Object(a["a"])(x,m,y,!1,null,"f15101b8",null)),z=(b.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"intersecting-circles-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinnerBlock",style:t.spinnerBlockStyle},t._l(t.circleStyles,(function(t,i){return n("span",{key:i,staticClass:"circle",style:t})})),0)])}),g=[],v=(n("d81d"),{name:"IntersectingCirclesSpinner",props:{animationDuration:{type:Number,default:1200},size:{type:Number,default:70},color:{type:String,default:"#fff"}},computed:{circleSize:function(){return this.size/2},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},spinnerBlockStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),width:"".concat(this.circleSize,"px"),height:"".concat(this.circleSize,"px")}},circleStyle:function(){return{borderColor:this.color}},circleStyles:function(){var t=this,i=[{top:0,left:0},{left:"".concat(-.36*this.circleSize,"px"),top:"".concat(.2*this.circleSize,"px")},{left:"".concat(-.36*this.circleSize,"px"),top:"".concat(-.2*this.circleSize,"px")},{left:0,top:"".concat(-.36*this.circleSize,"px")},{left:"".concat(.36*this.circleSize,"px"),top:"".concat(-.2*this.circleSize,"px")},{left:"".concat(.36*this.circleSize,"px"),top:"".concat(.2*this.circleSize,"px")},{left:0,top:"".concat(.36*this.circleSize,"px")}];return i.map((function(i){return Object.assign(i,t.circleStyle)}))}}}),D=v,C=(n("4e68"),Object(a["a"])(D,z,g,!1,null,"91c71956",null)),N=(C.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"orbit-spinner",style:t.spinnerStyle},[n("div",{staticClass:"orbit one",style:t.orbitStyle}),n("div",{staticClass:"orbit two",style:t.orbitStyle}),n("div",{staticClass:"orbit three",style:t.orbitStyle})])}),w=[],_={name:"OrbitSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},orbitStyle:function(){return{borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}}}},q=_,O=(n("1c92"),Object(a["a"])(q,N,w,!1,null,"34a3fdef",null)),j=(O.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"fingerprint-spinner",style:t.spinnerStyle},t._l(t.ringsStyles,(function(t,i){return n("div",{key:i,staticClass:"spinner-ring",style:t})})),0)}),k=[],E={name:"FingerprintSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:9,containerPadding:2}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),padding:"".concat(this.containerPadding,"px")}},ringStyle:function(){return{borderTopColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ringsStyles:function(){for(var t=[],i=this.outerRingSize/this.ringsNum,n=i,e=1;e<=this.ringsNum;e++){var o=Object.assign({animationDelay:"".concat(50*e,"ms"),height:"".concat(i+(e-1)*n,"px"),width:"".concat(i+(e-1)*n,"px")},this.ringStyle);t.push(o)}return t}}},K=E,$=(n("10e6"),Object(a["a"])(K,j,k,!1,null,"077ae5a6",null)),R=($.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"trinity-rings-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle circle1",style:t.ring1Style}),n("div",{staticClass:"circle circle2",style:t.ring2Style}),n("div",{staticClass:"circle circle3",style:t.ring3Style})])}),W=[],A={name:"TrinityRingsSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{containerPadding:3}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),padding:"".concat(this.containerPadding,"px")}},ring1Style:function(){return{height:"".concat(this.outerRingSize,"px"),width:"".concat(this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ring2Style:function(){return{height:"".concat(.65*this.outerRingSize,"px"),width:"".concat(.65*this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ring3Style:function(){return{height:"".concat(.1*this.outerRingSize,"px"),width:"".concat(.1*this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}}}},T=A,P=(n("fed0"),Object(a["a"])(T,R,W,!1,null,"19bbdf0e",null)),B=(P.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"fulfilling-square-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinner-inner",style:t.spinnerInnerStyle})])}),L=[],I={name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color}},spinnerInnerStyle:function(){return{backgroundColor:this.color}}}},M=I,F=(n("89df"),Object(a["a"])(M,B,L,!1,null,"3f451d6f",null)),H=(F.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"circles-to-rhombuses-spinner",style:t.spinnertStyle},t._l(t.circlesStyles,(function(t,i){return n("div",{key:i,staticClass:"circle",style:t})})),0)}),J=[],G={name:"CirclesToRhombusesSpinner",props:{animationDuration:{type:Number,default:1200},circleSize:{type:Number,default:15},color:{type:String,default:"#fff"},circlesNum:{type:Number,default:3}},computed:{circleMarginLeft:function(){return 1.125*this.circleSize},spinnertStyle:function(){return{height:"".concat(this.circleSize,"px"),width:"".concat((this.circleSize+this.circleMarginLeft)*this.circlesNum,"px")}},circleStyle:function(){return{borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms"),height:"".concat(this.circleSize,"px"),width:"".concat(this.circleSize,"px"),marginLeft:"".concat(this.circleMarginLeft,"px")}},circlesStyles:function(){for(var t=[],i=150,n=1;n<=this.circlesNum;n++){var e=Object.assign({animationDelay:"".concat(n*i,"ms")},this.circleStyle);1===n&&(e.marginLeft=0),t.push(e)}return t}}},Q=G,U=(n("0fa6"),Object(a["a"])(Q,H,J,!1,null,"7a6e17e5",null)),V=(U.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"semipolar-spinner",style:t.spinnerStyle},t._l(t.ringsStyles,(function(t,i){return n("div",{key:i,staticClass:"ring",style:t})})),0)}),X=[],Y={name:"SemipolarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:5}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},ringStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),borderTopColor:this.color,borderLeftColor:this.color}},ringsStyles:function(){for(var t=[],i=.1,n=.05*this.size,e=2*n,o=.2*this.size,r=0;r<this.ringsNum;r++){var c="".concat(this.size-o*r,"px"),a="".concat(e*r,"px"),s=Object.assign({animationDelay:"".concat(this.animationDuration*i*(this.ringsNum-r-1),"ms"),height:c,width:c,left:a,top:a,borderWidth:"".concat(n,"px")},this.ringStyle);t.push(s)}return t}}},Z=Y,tt=(n("30df"),Object(a["a"])(Z,V,X,!1,null,"9544fc1a",null)),it=(tt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"breeding-rhombus-spinner",style:t.spinnerStyle},[t._l(t.rhombusesStyles,(function(t,i){return n("div",{key:i,staticClass:"rhombus",class:"child-"+(i+1),style:t})})),n("div",{staticClass:"rhombus big",style:t.bigRhombusStyle})],2)}),nt=[],et={name:"BreedingRhombusSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:150},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"breeding-rhombus-spinner-animation-child",rhombusesNum:8}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},rhombusStyle:function(){return{height:"".concat(this.size/7.5,"px"),width:"".concat(this.size/7.5,"px"),animationDuration:"".concat(this.animationDuration,"ms"),top:"".concat(this.size/2.3077,"px"),left:"".concat(this.size/2.3077,"px"),backgroundColor:this.color}},rhombusesStyles:function(){for(var t=[],i=.05*this.animationDuration,n=1;n<=this.rhombusesNum;n++)t.push(Object.assign({animationDelay:"".concat(i*(n+1),"ms")},this.rhombusStyle));return t},bigRhombusStyle:function(){return{height:"".concat(this.size/3,"px"),width:"".concat(this.size/3,"px"),animationDuration:"".concat(this.animationDuration),top:"".concat(this.size/3,"px"),left:"".concat(this.size/3,"px"),backgroundColor:this.color}}}},ot=et,rt=(n("e2f6"),Object(a["a"])(ot,it,nt,!1,null,"8fa7a3fc",null)),ct=(rt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"swapping-squares-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,i){return n("div",{key:i,staticClass:"square",class:"square-"+(i+1),style:t})})),0)}),at=[],st={name:"SwappingSquaresSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"swapping-squares-animation-child",squaresNum:4}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},squareStyle:function(){return{height:"".concat(.25*this.size/1.3,"px"),width:"".concat(.25*this.size/1.3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),borderWidth:"".concat(.04*this.size/1.3,"px"),borderColor:this.color}},squaresStyles:function(){for(var t=[],i=.5*this.animationDuration,n=1;n<=this.squaresNum;n++)t.push(Object.assign({animationDelay:"".concat(n%2===0?i:0,"ms")},this.squareStyle));return t}}},lt=st,ut=(n("ca9a"),Object(a["a"])(lt,ct,at,!1,null,"8265a670",null)),ht=(ut.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"scaling-squares-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,i){return n("div",{key:i,staticClass:"square",class:"square-"+(i+1),style:t})})),0)}),pt=[],ft={name:"ScalingSquaresSpinner",props:{animationDuration:{type:Number,default:1250},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:4}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},squareStyle:function(){return{height:"".concat(.25*this.size/1.3,"px"),width:"".concat(.25*this.size/1.3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),borderWidth:"".concat(.04*this.size/1.3,"px"),borderColor:this.color}},squaresStyles:function(){for(var t=[],i=1;i<=this.squaresNum;i++)t.push(Object.assign({},this.squareStyle));return t}}},dt=ft,mt=(n("09fe"),Object(a["a"])(dt,ht,pt,!1,null,"dbacb9de",null)),yt=(mt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"fulfilling-bouncing-circle-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle",style:t.circleStyle}),n("div",{staticClass:"orbit",style:t.orbitStyle})])}),St=[],xt={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},orbitStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color,borderWidth:"".concat(.03*this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},circleStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color,color:this.color,borderWidth:"".concat(.1*this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}}}},bt=xt,zt=(n("5d60"),Object(a["a"])(bt,yt,St,!1,null,"e5e606d8",null)),gt=(zt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"radar-spinner",style:t.spinnerStyle},t._l(t.circlesStyles,(function(i,e){return n("div",{key:e,staticClass:"circle",style:i},[n("div",{staticClass:"circle-inner-container",style:t.circleInnerContainerStyle},[n("div",{staticClass:"circle-inner",style:t.circleInnerStyle})])])})),0)}),vt=[],Dt={name:"RadarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:110},color:{type:String,default:"#fff"}},data:function(){return{circlesNum:4}},computed:{borderWidth:function(){return 5*this.size/110},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms")}},circleInnerContainerStyle:function(){return{borderWidth:"".concat(this.borderWidth,"px")}},circleInnerStyle:function(){return{borderLeftColor:this.color,borderRightColor:this.color,borderWidth:"".concat(this.borderWidth,"px")}},circlesStyles:function(){for(var t=[],i=.15*this.animationDuration,n=0;n<this.circlesNum;n++)t.push(Object.assign({padding:"".concat(2*this.borderWidth*n,"px"),animationDelay:"".concat(n===this.circlesNum-1?0:i,"ms")},this.circleStyle));return t}}},Ct=Dt,Nt=(n("3d8a"),Object(a["a"])(Ct,gt,vt,!1,null,"5710a196",null)),wt=(Nt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"self-building-square-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,i){return n("div",{key:i,staticClass:"square",class:{clear:i&&i%3===0},style:t})})),0)}),_t=[],qt={name:"SelfBuildingSquareSpinner",props:{animationDuration:{type:Number,default:6e3},size:{type:Number,default:40},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:9}},computed:{squareSize:function(){return this.size/4},initialTopPosition:function(){return 2*-this.squareSize/3},spinnerStyle:function(){return{top:"".concat(-this.initialTopPosition,"px"),height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},squareStyle:function(){return{height:"".concat(this.squareSize,"px"),width:"".concat(this.squareSize,"px"),top:"".concat(this.initialTopPosition,"px"),marginRight:"".concat(this.squareSize/3,"px"),marginTop:"".concat(this.squareSize/3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),background:this.color}},squaresStyles:function(){for(var t=[],i=[6,7,8,3,4,5,0,1,2],n=.05*this.animationDuration,e=0;e<this.squaresNum;e++)t.push(Object.assign({animationDelay:"".concat(n*i[e],"ms")},this.squareStyle));return t}}},Ot=qt,jt=(n("e2ed"),Object(a["a"])(Ot,wt,_t,!1,null,"eb840b8e",null)),kt=(jt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"spring-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spring-spinner-part top",style:t.spinnerPartStyle},[n("div",{staticClass:"spring-spinner-rotator",style:t.rotatorStyle})]),n("div",{staticClass:"spring-spinner-part bottom",style:t.spinnerPartStyle},[n("div",{staticClass:"spring-spinner-rotator",style:t.rotatorStyle})])])}),Et=[],Kt={name:"SpringSpinner",props:{animationDuration:{type:Number,default:3e3},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationName:"spring-spinner-animation-".concat(Date.now())}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},spinnerPartStyle:function(){return{height:"".concat(this.size/2,"px"),width:"".concat(this.size,"px")}},rotatorStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderRightColor:this.color,borderTopColor:this.color,borderWidth:"".concat(this.size/7,"px"),animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.animationName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},mounted:function(){this.updateAnimation()},beforeDestroy:function(){h.removeKeyframes(this.animationName)},methods:{updateAnimation:function(){h.removeKeyframes(this.animationName),h.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes:function(){return"\n        0% {\n          border-width: ".concat(this.size/7,"px;\n        }\n        25% {\n          border-width: ").concat(this.size/23.33,"px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: ").concat(this.size/7,"px;\n        }\n        75% {\n          border-width: ").concat(this.size/23.33,"px;\n         }\n        100% {\n         border-width: ").concat(this.size/7,"px;\n        }")}}},$t=Kt,Rt=(n("34c9"),Object(a["a"])($t,kt,Et,!1,null,"1ae1dc20",null)),Wt=(Rt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"looping-rhombuses-spinner",style:t.spinnerStyle},t._l(t.rhombusesStyles,(function(t,i){return n("div",{staticClass:"rhombus",style:t,attrs:{ikey:i}})})),0)}),At=[],Tt={name:"LoopingRhombusesSpinner",props:{animationDuration:{type:Number,default:2500},rhombusSize:{type:Number,default:15},color:{type:String,default:"#fff"}},data:function(){return{rhombusesNum:3}},computed:{spinnerStyle:function(){return{height:"".concat(this.rhombusSize,"px"),width:"".concat(4*this.rhombusSize,"px")}},rhombusStyle:function(){return{height:"".concat(this.rhombusSize,"px"),width:"".concat(this.rhombusSize,"px"),backgroundColor:this.color,animationDuration:"".concat(this.animationDuration,"ms"),left:"".concat(4*this.rhombusSize,"px")}},rhombusesStyles:function(){for(var t=[],i=-this.animationDuration/1.5,n=1;n<=this.rhombusesNum;n++){var e=Object.assign({animationDelay:"".concat(n*i,"ms")},this.rhombusStyle);t.push(e)}return t}}},Pt=Tt,Bt=(n("1016"),Object(a["a"])(Pt,Wt,At,!1,null,"49d9ad28",null)),Lt=(Bt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"half-circle-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle circle-1",style:t.circle1Style}),n("div",{staticClass:"circle circle-2",style:t.circle2Style})])}),It=[],Mt={name:"HalfCircleSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{borderWidth:"".concat(this.size/10,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},circle1Style:function(){return Object.assign({borderTopColor:this.color},this.circleStyle)},circle2Style:function(){return Object.assign({borderBottomColor:this.color},this.circleStyle)}}},Ft=Mt,Ht=(n("66d3"),Object(a["a"])(Ft,Lt,It,!1,null,"669f3b60",null)),Jt=Ht.exports,Gt=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"atom-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinner-inner"},[n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-circle",style:t.circleStyle},[t._v(" ● ")])])])},Qt=[],Ut={name:"AtomSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{color:this.color,fontSize:"".concat(.24*this.size,"px")}},lineStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),borderLeftWidth:"".concat(this.size/25,"px"),borderTopWidth:"".concat(this.size/25,"px"),borderLeftColor:this.color}}}},Vt=Ut,Xt=(n("741b"),Object(a["a"])(Vt,Gt,Qt,!1,null,"fb9a33c4",null));Xt.exports;n.d(i,"a",(function(){return Jt}))},4695:function(t,i,n){},"4e68":function(t,i,n){"use strict";var e=n("e7a7"),o=n.n(e);o.a},5404:function(t,i,n){},"549e":function(t,i,n){},"5d60":function(t,i,n){"use strict";var e=n("cbf1"),o=n.n(e);o.a},"66d3":function(t,i,n){"use strict";var e=n("fb6d"),o=n.n(e);o.a},"6bc6":function(t,i,n){"use strict";var e=n("bf98"),o=n.n(e);o.a},"6e78":function(t,i,n){},"741b":function(t,i,n){"use strict";var e=n("96f5"),o=n.n(e);o.a},"742f":function(t,i,n){},"7a90":function(t,i,n){},"80f2":function(t,i,n){},8418:function(t,i,n){"use strict";var e=n("c04e"),o=n("9bf2"),r=n("5c6c");t.exports=function(t,i,n){var c=e(i);c in t?o.f(t,c,r(0,n)):t[c]=n}},"89df":function(t,i,n){"use strict";var e=n("742f"),o=n.n(e);o.a},9628:function(t,i,n){},"96f5":function(t,i,n){},"99af":function(t,i,n){"use strict";var e=n("23e7"),o=n("d039"),r=n("e8b5"),c=n("861d"),a=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),h=n("1dde"),p=n("b622"),f=n("2d00"),d=p("isConcatSpreadable"),m=9007199254740991,y="Maximum allowed index exceeded",S=f>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),x=h("concat"),b=function(t){if(!c(t))return!1;var i=t[d];return void 0!==i?!!i:r(t)},z=!S||!x;e({target:"Array",proto:!0,forced:z},{concat:function(t){var i,n,e,o,r,c=a(this),h=u(c,0),p=0;for(i=-1,e=arguments.length;i<e;i++)if(r=-1===i?c:arguments[i],b(r)){if(o=s(r.length),p+o>m)throw TypeError(y);for(n=0;n<o;n++,p++)n in r&&l(h,p,r[n])}else{if(p>=m)throw TypeError(y);l(h,p++,r)}return h.length=p,h}})},a640:function(t,i,n){"use strict";var e=n("d039");t.exports=function(t,i){var n=[][t];return!!n&&e((function(){n.call(null,i||function(){throw 1},1)}))}},bdb4:function(t,i,n){},bf98:function(t,i,n){},ca9a:function(t,i,n){"use strict";var e=n("bdb4"),o=n.n(e);o.a},cbf1:function(t,i,n){},d81d:function(t,i,n){"use strict";var e=n("23e7"),o=n("b727").map,r=n("1dde"),c=n("ae40"),a=r("map"),s=c("map");e({target:"Array",proto:!0,forced:!a||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e2ed:function(t,i,n){"use strict";var e=n("facb"),o=n.n(e);o.a},e2f6:function(t,i,n){"use strict";var e=n("549e"),o=n.n(e);o.a},e63a:function(t,i,n){},e7a7:function(t,i,n){},ee7d:function(t,i,n){},facb:function(t,i,n){},fb6d:function(t,i,n){},fdeb:function(t,i,n){},fed0:function(t,i,n){"use strict";var e=n("5404"),o=n.n(e);o.a}}]);
//# sourceMappingURL=chunk-4f53c128.bccb6339.js.map