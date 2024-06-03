"use strict";(self.webpackChunkfe_backoffice=self.webpackChunkfe_backoffice||[]).push([[0],{2499:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(8168),r=n(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};var c=n(2172),l=function(e,t){return r.createElement(c.A,(0,o.A)({},e,{ref:t,icon:a}))};const i=r.forwardRef(l)},1376:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(8168),r=n(5043);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};var c=n(2172),l=function(e,t){return r.createElement(c.A,(0,o.A)({},e,{ref:t,icon:a}))};const i=r.forwardRef(l)},4e3:(e,t,n)=>{n.d(t,{A:()=>nt});var o=n(6436),r=n(436),a=n(5043),c=n(8139),l=n.n(c),i=n(7419),s=n(3290),d=n(8887);function u(e){const[t,n]=a.useState(e);return a.useEffect((()=>{const t=setTimeout((()=>{n(e)}),e.length?0:10);return()=>{clearTimeout(t)}}),[e]),t}var f=n(6647),m=n(4414),p=n(5814),g=n(7770),h=n(8365),b=n(7060);const y=e=>{const{componentCls:t}=e,n="".concat(t,"-show-help"),o="".concat(t,"-show-help-item");return{[n]:{transition:"opacity ".concat(e.motionDurationSlow," ").concat(e.motionEaseInOut),"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[o]:{overflow:"hidden",transition:"height ".concat(e.motionDurationSlow," ").concat(e.motionEaseInOut,",\n                     opacity ").concat(e.motionDurationSlow," ").concat(e.motionEaseInOut,",\n                     transform ").concat(e.motionDurationSlow," ").concat(e.motionEaseInOut," !important"),["&".concat(o,"-appear, &").concat(o,"-enter")]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},["&".concat(o,"-leave-active")]:{transform:"translateY(-5px)"}}}}},v=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:"".concat((0,f.zA)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorder)},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:"0 0 0 ".concat((0,f.zA)(e.controlOutlineWidth)," ").concat(e.controlOutline)},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),x=(e,t)=>{const{formItemCls:n}=e;return{[n]:{["".concat(n,"-label > label")]:{height:t},["".concat(n,"-control-input")]:{minHeight:t}}}},w=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},(0,m.dF)(e)),v(e)),{["".concat(t,"-text")]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},x(e,e.controlHeightSM)),"&-large":Object.assign({},x(e,e.controlHeightLG))})}},C=e=>{const{formItemCls:t,iconCls:n,componentCls:o,rootPrefixCls:r,labelRequiredMarkColor:a,labelColor:c,labelFontSize:l,labelHeight:i,labelColonMarginInlineStart:s,labelColonMarginInlineEnd:d,itemMarginBottom:u}=e;return{[t]:Object.assign(Object.assign({},(0,m.dF)(e)),{marginBottom:u,verticalAlign:"top","&-with-help":{transition:"none"},["&-hidden,\n        &-hidden.".concat(r,"-row")]:{display:"none"},"&-has-warning":{["".concat(t,"-split")]:{color:e.colorError}},"&-has-error":{["".concat(t,"-split")]:{color:e.colorWarning}},["".concat(t,"-label")]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:i,color:c,fontSize:l,["> ".concat(n)]:{fontSize:e.fontSize,verticalAlign:"top"},["&".concat(t,"-required:not(").concat(t,"-required-mark-optional)::before")]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:a,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',["".concat(o,"-hide-required-mark &")]:{display:"none"}},["".concat(t,"-optional")]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,["".concat(o,"-hide-required-mark &")]:{display:"none"}},["".concat(t,"-tooltip")]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:s,marginInlineEnd:d},["&".concat(t,"-no-colon::after")]:{content:'"\\a0"'}}},["".concat(t,"-control")]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,["&:first-child:not([class^=\"'".concat(r,"-col-'\"]):not([class*=\"' ").concat(r,"-col-'\"])")]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:"color ".concat(e.motionDurationMid," ").concat(e.motionEaseOut)},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},["&-with-help ".concat(t,"-explain")]:{height:"auto",opacity:1},["".concat(t,"-feedback-icon")]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:p.nF,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},O=e=>{const{componentCls:t,formItemCls:n}=e;return{["".concat(t,"-horizontal")]:{["".concat(n,"-label")]:{flexGrow:0},["".concat(n,"-control")]:{flex:"1 1 0",minWidth:0},["".concat(n,"-label[class$='-24'], ").concat(n,"-label[class*='-24 ']")]:{["& + ".concat(n,"-control")]:{minWidth:"unset"}}}}},E=e=>{const{componentCls:t,formItemCls:n,inlineItemMarginBottom:o}=e;return{["".concat(t,"-inline")]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:o,"&-row":{flexWrap:"nowrap"},["> ".concat(n,"-label,\n        > ").concat(n,"-control")]:{display:"inline-block",verticalAlign:"top"},["> ".concat(n,"-label")]:{flex:"none"},["".concat(t,"-text")]:{display:"inline-block"},["".concat(n,"-has-feedback")]:{display:"inline-block"}}}}},j=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),S=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:o}=e;return{["".concat(n," ").concat(n,"-label")]:j(e),["".concat(t,":not(").concat(t,"-inline)")]:{[n]:{flexWrap:"wrap",["".concat(n,"-label, ").concat(n,"-control")]:{['&:not([class*=" '.concat(o,'-col-xs"])')]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},I=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:o}=e;return{["".concat(t,"-vertical")]:{[n]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},["".concat(t,"-item-control")]:{width:"100%"}}},["".concat(t,"-vertical ").concat(n,"-label,\n      .").concat(o,"-col-24").concat(n,"-label,\n      .").concat(o,"-col-xl-24").concat(n,"-label")]:j(e),["@media (max-width: ".concat((0,f.zA)(e.screenXSMax),")")]:[S(e),{[t]:{[".".concat(o,"-col-xs-24").concat(n,"-label")]:j(e)}}],["@media (max-width: ".concat((0,f.zA)(e.screenSMMax),")")]:{[t]:{[".".concat(o,"-col-sm-24").concat(n,"-label")]:j(e)}},["@media (max-width: ".concat((0,f.zA)(e.screenMDMax),")")]:{[t]:{[".".concat(o,"-col-md-24").concat(n,"-label")]:j(e)}},["@media (max-width: ".concat((0,f.zA)(e.screenLGMax),")")]:{[t]:{[".".concat(o,"-col-lg-24").concat(n,"-label")]:j(e)}}}},k=(e,t)=>(0,h.h1)(e,{formItemCls:"".concat(e.componentCls,"-item"),rootPrefixCls:t}),A=(0,b.OF)("Form",((e,t)=>{let{rootPrefixCls:n}=t;const o=k(e,n);return[w(o),C(o),y(o),O(o),E(o),I(o),(0,g.A)(o),p.nF]}),(e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:"0 0 ".concat(e.paddingXS,"px"),verticalLabelMargin:0,inlineItemMarginBottom:0})),{order:-1e3}),M=[];function F(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{key:"string"===typeof e?e:"".concat(t,"-").concat(o),error:e,errorStatus:n}}const N=e=>{let{help:t,helpStatus:n,errors:c=M,warnings:f=M,className:m,fieldId:p,onVisibleChanged:g}=e;const{prefixCls:h}=a.useContext(o.hb),b="".concat(h,"-item-explain"),y=(0,d.A)(h),[v,x,w]=A(h,y),C=(0,a.useMemo)((()=>(0,s.A)(h)),[h]),O=u(c),E=u(f),j=a.useMemo((()=>void 0!==t&&null!==t?[F(t,"help",n)]:[].concat((0,r.A)(O.map(((e,t)=>F(e,"error","error",t)))),(0,r.A)(E.map(((e,t)=>F(e,"warning","warning",t)))))),[t,n,O,E]),S={};return p&&(S.id="".concat(p,"_help")),v(a.createElement(i.Ay,{motionDeadline:C.motionDeadline,motionName:"".concat(h,"-show-help"),visible:!!j.length,onVisibleChanged:g},(e=>{const{className:t,style:n}=e;return a.createElement("div",Object.assign({},S,{className:l()(b,t,w,y,m,x),style:n,role:"alert"}),a.createElement(i.aF,Object.assign({keys:j},(0,s.A)(h),{motionName:"".concat(h,"-show-help-item"),component:!1}),(e=>{const{key:t,error:n,errorStatus:o,className:r,style:c}=e;return a.createElement("div",{key:t,className:l()(r,{["".concat(b,"-").concat(o)]:o}),style:c},n)})))})))};var P=n(8072),W=n(5296),z=n(8440),R=n(9122),H=n(7063);const q=e=>"object"==typeof e&&null!=e&&1===e.nodeType,_=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,T=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return _(n.overflowY,t)||_(n.overflowX,t)||(e=>{const t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},L=(e,t,n,o,r,a,c,l)=>a<e&&c>t||a>e&&c<t?0:a<=e&&l<=n||c>=t&&l>=n?a-e-o:c>t&&l<n||a<e&&l>n?c-t+r:0,B=e=>{const t=e.parentElement;return null==t?e.getRootNode().host||null:t},D=(e,t)=>{var n,o,r,a;if("undefined"==typeof document)return[];const{scrollMode:c,block:l,inline:i,boundary:s,skipOverflowHiddenElements:d}=t,u="function"==typeof s?s:e=>e!==s;if(!q(e))throw new TypeError("Invalid target");const f=document.scrollingElement||document.documentElement,m=[];let p=e;for(;q(p)&&u(p);){if(p=B(p),p===f){m.push(p);break}null!=p&&p===document.body&&T(p)&&!T(document.documentElement)||null!=p&&T(p,d)&&m.push(p)}const g=null!=(o=null==(n=window.visualViewport)?void 0:n.width)?o:innerWidth,h=null!=(a=null==(r=window.visualViewport)?void 0:r.height)?a:innerHeight,{scrollX:b,scrollY:y}=window,{height:v,width:x,top:w,right:C,bottom:O,left:E}=e.getBoundingClientRect(),{top:j,right:S,bottom:I,left:k}=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);let A="start"===l||"nearest"===l?w-j:"end"===l?O+I:w+v/2-j+I,M="center"===i?E+x/2-k+S:"end"===i?C+S:E-k;const F=[];for(let N=0;N<m.length;N++){const e=m[N],{height:t,width:n,top:o,right:r,bottom:a,left:s}=e.getBoundingClientRect();if("if-needed"===c&&w>=0&&E>=0&&O<=h&&C<=g&&w>=o&&O<=a&&E>=s&&C<=r)return F;const d=getComputedStyle(e),u=parseInt(d.borderLeftWidth,10),p=parseInt(d.borderTopWidth,10),j=parseInt(d.borderRightWidth,10),S=parseInt(d.borderBottomWidth,10);let I=0,k=0;const P="offsetWidth"in e?e.offsetWidth-e.clientWidth-u-j:0,W="offsetHeight"in e?e.offsetHeight-e.clientHeight-p-S:0,z="offsetWidth"in e?0===e.offsetWidth?0:n/e.offsetWidth:0,R="offsetHeight"in e?0===e.offsetHeight?0:t/e.offsetHeight:0;if(f===e)I="start"===l?A:"end"===l?A-h:"nearest"===l?L(y,y+h,h,p,S,y+A,y+A+v,v):A-h/2,k="start"===i?M:"center"===i?M-g/2:"end"===i?M-g:L(b,b+g,g,u,j,b+M,b+M+x,x),I=Math.max(0,I+y),k=Math.max(0,k+b);else{I="start"===l?A-o-p:"end"===l?A-a+S+W:"nearest"===l?L(o,a,t,p,S+W,A,A+v,v):A-(o+t/2)+W/2,k="start"===i?M-s-u:"center"===i?M-(s+n/2)+P/2:"end"===i?M-r+j+P:L(s,r,n,u,j+P,M,M+x,x);const{scrollLeft:c,scrollTop:d}=e;I=0===R?0:Math.max(0,Math.min(d+I/R,e.scrollHeight-t/R+W)),k=0===z?0:Math.max(0,Math.min(c+k/z,e.scrollWidth-n/z+P)),A+=d-I,M+=c-k}F.push({el:e,top:I,left:k})}return F},V=e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"};var X=n(5593);const K=["parentNode"],G="form_item";function $(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function Q(e,t){if(!e.length)return;const n=e.join("_");if(t)return"".concat(t,"_").concat(n);return K.includes(n)?"".concat(G,"_").concat(n):n}function Y(e,t,n,o,r,a){let c=o;return void 0!==a?c=a:n.validating?c="validating":e.length?c="error":t.length?c="warning":(n.touched||r&&n.validated)&&(c="success"),c}function J(e){return $(e).join("_")}function U(e){const[t]=(0,P.mN)(),n=a.useRef({}),o=a.useMemo((()=>null!==e&&void 0!==e?e:Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:e=>t=>{const o=J(e);t?n.current[o]=t:delete n.current[o]}},scrollToField:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=function(e,t){const n=t.getFieldInstance(e),o=(0,X.rb)(n);if(o)return o;const r=Q($(e),t.__INTERNAL__.name);return r?document.getElementById(r):void 0}(e,o);n&&function(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;const n=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);if((e=>"object"==typeof e&&"function"==typeof e.behavior)(t))return t.behavior(D(e,t));const o="boolean"==typeof t||null==t?void 0:t.behavior;for(const{el:r,top:a,left:c}of D(e,V(t))){const e=a-n.top+n.bottom,t=c-n.left+n.right;r.scroll({top:e,left:t,behavior:o})}}(n,Object.assign({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:e=>{const t=J(e);return n.current[t]}})),[e,t]);return[o]}var Z=n(3130),ee=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const te=(e,t)=>{const n=a.useContext(z.A),{getPrefixCls:r,direction:c,form:i}=a.useContext(W.QO),{prefixCls:s,className:u,rootClassName:f,size:m,disabled:p=n,form:g,colon:h,labelAlign:b,labelWrap:y,labelCol:v,wrapperCol:x,hideRequiredMark:w,layout:C="horizontal",scrollToFirstError:O,requiredMark:E,onFinishFailed:j,name:S,style:I,feedbackIcons:k,variant:M}=e,F=ee(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),N=(0,R.A)(m),q=a.useContext(Z.A);const _=(0,a.useMemo)((()=>void 0!==E?E:!w&&(!i||void 0===i.requiredMark||i.requiredMark)),[w,E,i]),T=null!==h&&void 0!==h?h:null===i||void 0===i?void 0:i.colon,L=r("form",s),B=(0,d.A)(L),[D,V,X]=A(L,B),K=l()(L,"".concat(L,"-").concat(C),{["".concat(L,"-hide-required-mark")]:!1===_,["".concat(L,"-rtl")]:"rtl"===c,["".concat(L,"-").concat(N)]:N},X,B,V,null===i||void 0===i?void 0:i.className,u,f),[G]=U(g),{__INTERNAL__:$}=G;$.name=S;const Q=(0,a.useMemo)((()=>({name:S,labelAlign:b,labelCol:v,labelWrap:y,wrapperCol:x,vertical:"vertical"===C,colon:T,requiredMark:_,itemRef:$.itemRef,form:G,feedbackIcons:k})),[S,b,v,x,C,T,_,G,k]);a.useImperativeHandle(t,(()=>G));const Y=(e,t)=>{if(e){let n={block:"nearest"};"object"===typeof e&&(n=e),G.scrollToField(t,n)}};return D(a.createElement(o.Pp.Provider,{value:M},a.createElement(z.X,{disabled:p},a.createElement(H.A.Provider,{value:N},a.createElement(o.Op,{validateMessages:q},a.createElement(o.cK.Provider,{value:Q},a.createElement(P.Ay,Object.assign({id:S},F,{name:S,onFinishFailed:e=>{if(null===j||void 0===j||j(e),e.errorFields.length){const t=e.errorFields[0].name;if(void 0!==O)return void Y(O,t);i&&void 0!==i.scrollToFirstError&&Y(i.scrollToFirstError,t)}},form:G,style:Object.assign(Object.assign({},null===i||void 0===i?void 0:i.style),I),className:K}))))))))};const ne=a.forwardRef(te);var oe=n(8566),re=n(3758),ae=n(2701),ce=n(9478),le=n(2149);const ie=()=>{const{status:e,errors:t=[],warnings:n=[]}=(0,a.useContext)(o.$W);return{status:e,errors:t,warnings:n}};ie.Context=o.$W;const se=ie;var de=n(5818);var ue=n(6590),fe=n(2664),me=n(8574),pe=n(4320);const ge=(0,a.createContext)({}),he=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},be=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:o,gridColumns:r}=e,a={};for(let c=r;c>=0;c--)0===c?(a["".concat(o).concat(t,"-").concat(c)]={display:"none"},a["".concat(o,"-push-").concat(c)]={insetInlineStart:"auto"},a["".concat(o,"-pull-").concat(c)]={insetInlineEnd:"auto"},a["".concat(o).concat(t,"-push-").concat(c)]={insetInlineStart:"auto"},a["".concat(o).concat(t,"-pull-").concat(c)]={insetInlineEnd:"auto"},a["".concat(o).concat(t,"-offset-").concat(c)]={marginInlineStart:0},a["".concat(o).concat(t,"-order-").concat(c)]={order:0}):(a["".concat(o).concat(t,"-").concat(c)]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:"0 0 ".concat(c/r*100,"%"),maxWidth:"".concat(c/r*100,"%")}],a["".concat(o).concat(t,"-push-").concat(c)]={insetInlineStart:"".concat(c/r*100,"%")},a["".concat(o).concat(t,"-pull-").concat(c)]={insetInlineEnd:"".concat(c/r*100,"%")},a["".concat(o).concat(t,"-offset-").concat(c)]={marginInlineStart:"".concat(c/r*100,"%")},a["".concat(o).concat(t,"-order-").concat(c)]={order:c});return a["".concat(o).concat(t,"-flex")]={flex:"var(--".concat(n).concat(t,"-flex)")},a})(e,t),ye=(0,b.OF)("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),ve=(0,b.OF)("Grid",(e=>{const t=(0,h.h1)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[he(t),be(t,""),be(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({["@media (min-width: ".concat((0,f.zA)(t),")")]:Object.assign({},be(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({})));var xe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function we(e,t){const[n,o]=a.useState("string"===typeof e?e:"");return a.useEffect((()=>{(()=>{if("string"===typeof e&&o(e),"object"===typeof e)for(let n=0;n<pe.ye.length;n++){const r=pe.ye[n];if(!t[r])continue;const a=e[r];if(void 0!==a)return void o(a)}})()}),[JSON.stringify(e),t]),n}const Ce=a.forwardRef(((e,t)=>{const{prefixCls:n,justify:o,align:r,className:c,style:i,children:s,gutter:d=0,wrap:u}=e,f=xe(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:m,direction:p}=a.useContext(W.QO),[g,h]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[b,y]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),v=we(r,b),x=we(o,b),w=a.useRef(d),C=(0,pe.Ay)();a.useEffect((()=>{const e=C.subscribe((e=>{y(e);const t=w.current||0;(!Array.isArray(t)&&"object"===typeof t||Array.isArray(t)&&("object"===typeof t[0]||"object"===typeof t[1]))&&h(e)}));return()=>C.unsubscribe(e)}),[]);const O=m("row",n),[E,j,S]=ye(O),I=(()=>{const e=[void 0,void 0];return(Array.isArray(d)?d:[d,void 0]).forEach(((t,n)=>{if("object"===typeof t)for(let o=0;o<pe.ye.length;o++){const r=pe.ye[o];if(g[r]&&void 0!==t[r]){e[n]=t[r];break}}else e[n]=t})),e})(),k=l()(O,{["".concat(O,"-no-wrap")]:!1===u,["".concat(O,"-").concat(x)]:x,["".concat(O,"-").concat(v)]:v,["".concat(O,"-rtl")]:"rtl"===p},c,j,S),A={},M=null!=I[0]&&I[0]>0?I[0]/-2:void 0;M&&(A.marginLeft=M,A.marginRight=M);const[F,N]=I;A.rowGap=N;const P=a.useMemo((()=>({gutter:[F,N],wrap:u})),[F,N,u]);return E(a.createElement(ge.Provider,{value:P},a.createElement("div",Object.assign({},f,{className:k,style:Object.assign(Object.assign({},A),i),ref:t}),s)))}));const Oe=Ce;var Ee=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function je(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}const Se=["xs","sm","md","lg","xl","xxl"],Ie=a.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:o}=a.useContext(W.QO),{gutter:r,wrap:c}=a.useContext(ge),{prefixCls:i,span:s,order:d,offset:u,push:f,pull:m,className:p,children:g,flex:h,style:b}=e,y=Ee(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),v=n("col",i),[x,w,C]=ve(v),O={};let E={};Se.forEach((t=>{let n={};const r=e[t];"number"===typeof r?n.span=r:"object"===typeof r&&(n=r||{}),delete y[t],E=Object.assign(Object.assign({},E),{["".concat(v,"-").concat(t,"-").concat(n.span)]:void 0!==n.span,["".concat(v,"-").concat(t,"-order-").concat(n.order)]:n.order||0===n.order,["".concat(v,"-").concat(t,"-offset-").concat(n.offset)]:n.offset||0===n.offset,["".concat(v,"-").concat(t,"-push-").concat(n.push)]:n.push||0===n.push,["".concat(v,"-").concat(t,"-pull-").concat(n.pull)]:n.pull||0===n.pull,["".concat(v,"-rtl")]:"rtl"===o}),n.flex&&(E["".concat(v,"-").concat(t,"-flex")]=!0,O["--".concat(v,"-").concat(t,"-flex")]=je(n.flex))}));const j=l()(v,{["".concat(v,"-").concat(s)]:void 0!==s,["".concat(v,"-order-").concat(d)]:d,["".concat(v,"-offset-").concat(u)]:u,["".concat(v,"-push-").concat(f)]:f,["".concat(v,"-pull-").concat(m)]:m},p,E,w,C),S={};if(r&&r[0]>0){const e=r[0]/2;S.paddingLeft=e,S.paddingRight=e}return h&&(S.flex=je(h),!1!==c||S.minWidth||(S.minWidth=0)),x(a.createElement("div",Object.assign({},y,{style:Object.assign(Object.assign(Object.assign({},S),b),O),className:j,ref:t}),g))}));const ke=Ie,Ae=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{["".concat(t,"-control")]:{display:"flex"}}}},Me=(0,b.bf)(["Form","item-item"],((e,t)=>{let{rootPrefixCls:n}=t;const o=k(e,n);return[Ae(o)]})),Fe=e=>{const{prefixCls:t,status:n,wrapperCol:r,children:c,errors:i,warnings:s,_internalItemRender:d,extra:u,help:f,fieldId:m,marginBottom:p,onErrorVisibleChanged:g}=e,h="".concat(t,"-item"),b=a.useContext(o.cK),y=r||b.wrapperCol||{},v=l()("".concat(h,"-control"),y.className),x=a.useMemo((()=>Object.assign({},b)),[b]);delete x.labelCol,delete x.wrapperCol;const w=a.createElement("div",{className:"".concat(h,"-control-input")},a.createElement("div",{className:"".concat(h,"-control-input-content")},c)),C=a.useMemo((()=>({prefixCls:t,status:n})),[t,n]),O=null!==p||i.length||s.length?a.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},a.createElement(o.hb.Provider,{value:C},a.createElement(N,{fieldId:m,errors:i,warnings:s,help:f,helpStatus:n,className:"".concat(h,"-explain-connected"),onVisibleChanged:g})),!!p&&a.createElement("div",{style:{width:0,height:p}})):null,E={};m&&(E.id="".concat(m,"_extra"));const j=u?a.createElement("div",Object.assign({},E,{className:"".concat(h,"-extra")}),u):null,S=d&&"pro_table_render"===d.mark&&d.render?d.render(e,{input:w,errorList:O,extra:j}):a.createElement(a.Fragment,null,w,O,j);return a.createElement(o.cK.Provider,{value:x},a.createElement(ke,Object.assign({},y,{className:v}),S),a.createElement(Me,{prefixCls:t}))};var Ne=n(8168);const Pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};var We=n(2172),ze=function(e,t){return a.createElement(We.A,(0,Ne.A)({},e,{ref:t,icon:Pe}))};const Re=a.forwardRef(ze);var He=n(370),qe=n(4440),_e=n(8016),Te=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const Le=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:c,labelAlign:i,colon:s,required:d,requiredMark:u,tooltip:f}=e;var m;const[p]=(0,He.A)("Form"),{vertical:g,labelAlign:h,labelCol:b,labelWrap:y,colon:v}=a.useContext(o.cK);if(!n)return null;const x=c||b||{},w=i||h,C="".concat(t,"-item-label"),O=l()(C,"left"===w&&"".concat(C,"-left"),x.className,{["".concat(C,"-wrap")]:!!y});let E=n;const j=!0===s||!1!==v&&!1!==s;j&&!g&&"string"===typeof n&&""!==n.trim()&&(E=n.replace(/[:|\uff1a]\s*$/,""));const S=function(e){return e?"object"!==typeof e||a.isValidElement(e)?{title:e}:e:null}(f);if(S){const{icon:e=a.createElement(Re,null)}=S,n=Te(S,["icon"]),o=a.createElement(_e.A,Object.assign({},n),a.cloneElement(e,{className:"".concat(t,"-item-tooltip"),title:"",onClick:e=>{e.preventDefault()},tabIndex:null}));E=a.createElement(a.Fragment,null,E,o)}const I="optional"===u,k="function"===typeof u;k?E=u(E,{required:!!d}):I&&!d&&(E=a.createElement(a.Fragment,null,E,a.createElement("span",{className:"".concat(t,"-item-optional"),title:""},(null===p||void 0===p?void 0:p.optional)||(null===(m=qe.A.Form)||void 0===m?void 0:m.optional))));const A=l()({["".concat(t,"-item-required")]:d,["".concat(t,"-item-required-mark-optional")]:I||k,["".concat(t,"-item-no-colon")]:!j});return a.createElement(ke,Object.assign({},x,{className:O}),a.createElement("label",{htmlFor:r,className:A,title:"string"===typeof n?n:""},E))};var Be=n(2499),De=n(8528),Ve=n(1376),Xe=n(164);const Ke={success:Be.A,warning:Ve.A,error:De.A,validating:Xe.A};function Ge(e){let{children:t,errors:n,warnings:r,hasFeedback:c,validateStatus:i,prefixCls:s,meta:d,noStyle:u}=e;const f="".concat(s,"-item"),{feedbackIcons:m}=a.useContext(o.cK),p=Y(n,r,d,null,!!c,i),{isFormItemInput:g,status:h,hasFeedback:b,feedbackIcon:y}=a.useContext(o.$W),v=a.useMemo((()=>{var e;let t;if(c){const o=!0!==c&&c.icons||m,i=p&&(null===(e=null===o||void 0===o?void 0:o({status:p,errors:n,warnings:r}))||void 0===e?void 0:e[p]),s=p&&Ke[p];t=!1!==i&&s?a.createElement("span",{className:l()("".concat(f,"-feedback-icon"),"".concat(f,"-feedback-icon-").concat(p))},i||a.createElement(s,null)):null}const o={status:p||"",errors:n,warnings:r,hasFeedback:!!c,feedbackIcon:t,isFormItemInput:!0};return u&&(o.status=(null!==p&&void 0!==p?p:h)||"",o.isFormItemInput=g,o.hasFeedback=!!(null!==c&&void 0!==c?c:b),o.feedbackIcon=void 0!==c?o.feedbackIcon:y),o}),[p,c,u,g,h]);return a.createElement(o.$W.Provider,{value:v},t)}var $e=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function Qe(e){const{prefixCls:t,className:n,rootClassName:r,style:c,help:i,errors:s,warnings:d,validateStatus:f,meta:m,hasFeedback:p,hidden:g,children:h,fieldId:b,required:y,isRequired:v,onSubItemMetaChange:x}=e,w=$e(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),C="".concat(t,"-item"),{requiredMark:O}=a.useContext(o.cK),E=a.useRef(null),j=u(s),S=u(d),I=void 0!==i&&null!==i,k=!!(I||s.length||d.length),A=!!E.current&&(0,ue.A)(E.current),[M,F]=a.useState(null);(0,fe.A)((()=>{if(k&&E.current){const e=getComputedStyle(E.current);F(parseInt(e.marginBottom,10))}}),[k,A]);const N=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Y(e?j:m.errors,e?S:m.warnings,m,"",!!p,f)}(),P=l()(C,n,r,{["".concat(C,"-with-help")]:I||j.length||S.length,["".concat(C,"-has-feedback")]:N&&p,["".concat(C,"-has-success")]:"success"===N,["".concat(C,"-has-warning")]:"warning"===N,["".concat(C,"-has-error")]:"error"===N,["".concat(C,"-is-validating")]:"validating"===N,["".concat(C,"-hidden")]:g});return a.createElement("div",{className:P,style:c,ref:E},a.createElement(Oe,Object.assign({className:"".concat(C,"-row")},(0,me.A)(w,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),a.createElement(Le,Object.assign({htmlFor:b},e,{requiredMark:O,required:null!==y&&void 0!==y?y:v,prefixCls:t})),a.createElement(Fe,Object.assign({},e,m,{errors:j,warnings:S,prefixCls:t,status:N,help:i,marginBottom:M,onErrorVisibleChanged:e=>{e||F(null)}}),a.createElement(o.jC.Provider,{value:x},a.createElement(Ge,{prefixCls:t,meta:m,errors:m.errors,warnings:m.warnings,hasFeedback:p,validateStatus:N},h)))),!!M&&a.createElement("div",{className:"".concat(C,"-margin-offset"),style:{marginBottom:-M}}))}const Ye=a.memo((e=>{let{children:t}=e;return t}),((e,t)=>function(e,t){const n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&n.every((n=>{const o=e[n],r=t[n];return o===r||"function"===typeof o||"function"===typeof r}))}(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every(((e,n)=>e===t.childProps[n]))));const Je=function(e){const{name:t,noStyle:n,className:c,dependencies:i,prefixCls:s,shouldUpdate:u,rules:f,children:m,required:p,label:g,messageVariables:h,trigger:b="onChange",validateTrigger:y,hidden:v,help:x}=e,{getPrefixCls:w}=a.useContext(W.QO),{name:C}=a.useContext(o.cK),O=function(e){if("function"===typeof e)return e;const t=(0,le.A)(e);return t.length<=1?t[0]:t}(m),E="function"===typeof O,j=a.useContext(o.jC),{validateTrigger:S}=a.useContext(P._z),I=void 0!==y?y:S,k=!(void 0===t||null===t),M=w("form",s),F=(0,d.A)(M),[N,z,R]=A(M,F);(0,ce.rJ)("Form.Item");const H=a.useContext(P.EF),q=a.useRef(),[_,T]=function(e){const[t,n]=a.useState(e),o=(0,a.useRef)(null),r=(0,a.useRef)([]),c=(0,a.useRef)(!1);return a.useEffect((()=>(c.current=!1,()=>{c.current=!0,de.A.cancel(o.current),o.current=null})),[]),[t,function(e){c.current||(null===o.current&&(r.current=[],o.current=(0,de.A)((()=>{o.current=null,n((e=>{let t=e;return r.current.forEach((e=>{t=e(t)})),t}))}))),r.current.push(e))}]}({}),[L,B]=(0,oe.A)((()=>({errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}))),D=(e,t)=>{T((n=>{const o=Object.assign({},n),a=[].concat((0,r.A)(e.name.slice(0,-1)),(0,r.A)(t)).join("__SPLIT__");return e.destroy?delete o[a]:o[a]=e,o}))},[V,X]=a.useMemo((()=>{const e=(0,r.A)(L.errors),t=(0,r.A)(L.warnings);return Object.values(_).forEach((n=>{e.push.apply(e,(0,r.A)(n.errors||[])),t.push.apply(t,(0,r.A)(n.warnings||[]))})),[e,t]}),[_,L.errors,L.warnings]),K=function(){const{itemRef:e}=a.useContext(o.cK),t=a.useRef({});return function(n,o){const r=o&&"object"===typeof o&&o.ref,a=n.join("_");return t.current.name===a&&t.current.originRef===r||(t.current.name=a,t.current.originRef=r,t.current.ref=(0,re.K4)(e(n),r)),t.current.ref}}();function G(t,o,r){return n&&!v?a.createElement(Ge,{prefixCls:M,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:L,errors:V,warnings:X,noStyle:!0},t):a.createElement(Qe,Object.assign({key:"row"},e,{className:l()(c,R,F,z),prefixCls:M,fieldId:o,isRequired:r,errors:V,warnings:X,meta:L,onSubItemMetaChange:D}),t)}if(!k&&!E&&!i)return N(G(O));let Y={};return"string"===typeof g?Y.label=g:t&&(Y.label=String(t)),h&&(Y=Object.assign(Object.assign({},Y),h)),N(a.createElement(P.D0,Object.assign({},e,{messageVariables:Y,trigger:b,validateTrigger:I,onMetaChange:e=>{const t=null===H||void 0===H?void 0:H.getKey(e.name);if(B(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}:e,!0),n&&!1!==x&&j){let n=e.name;if(e.destroy)n=q.current||n;else if(void 0!==t){const[e,o]=t;n=[e].concat((0,r.A)(o)),q.current=n}j(e,n)}}}),((n,o,c)=>{const l=$(t).length&&o?o.name:[],s=Q(l,C),d=void 0!==p?p:!(!f||!f.some((e=>{if(e&&"object"===typeof e&&e.required&&!e.warningOnly)return!0;if("function"===typeof e){const t=e(c);return t&&t.required&&!t.warningOnly}return!1}))),m=Object.assign({},n);let g=null;if(Array.isArray(O)&&k)g=O;else if(E&&(!u&&!i||k));else if(!i||E||k)if(a.isValidElement(O)){const t=Object.assign(Object.assign({},O.props),m);if(t.id||(t.id=s),x||V.length>0||X.length>0||e.extra){const n=[];(x||V.length>0)&&n.push("".concat(s,"_help")),e.extra&&n.push("".concat(s,"_extra")),t["aria-describedby"]=n.join(" ")}V.length>0&&(t["aria-invalid"]="true"),d&&(t["aria-required"]="true"),(0,re.f3)(O)&&(t.ref=K(l,O));new Set([].concat((0,r.A)($(b)),(0,r.A)($(I)))).forEach((e=>{t[e]=function(){for(var t,n,o,r,a,c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];null===(o=m[e])||void 0===o||(t=o).call.apply(t,[m].concat(l)),null===(a=(r=O.props)[e])||void 0===a||(n=a).call.apply(n,[r].concat(l))}}));const n=[t["aria-required"],t["aria-invalid"],t["aria-describedby"]];g=a.createElement(Ye,{control:m,update:O,childProps:n},(0,ae.Ob)(O,t))}else g=E&&(u||i)&&!k?O(c):O;else;return G(g,s,d)})))};Je.useStatus=se;const Ue=Je;var Ze=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const et=e=>{var{prefixCls:t,children:n}=e,r=Ze(e,["prefixCls","children"]);const{getPrefixCls:c}=a.useContext(W.QO),l=c("form",t),i=a.useMemo((()=>({prefixCls:l,status:"error"})),[l]);return a.createElement(P.B8,Object.assign({},r),((e,t,r)=>a.createElement(o.hb.Provider,{value:i},n(e.map((e=>Object.assign(Object.assign({},e),{fieldKey:e.key}))),t,{errors:r.errors,warnings:r.warnings}))))};const tt=ne;tt.Item=Ue,tt.List=et,tt.ErrorList=N,tt.useForm=U,tt.useFormInstance=function(){const{form:e}=(0,a.useContext)(o.cK);return e},tt.useWatch=P.FH,tt.Provider=o.Op,tt.create=()=>{};const nt=tt}}]);
//# sourceMappingURL=0.81548e43.chunk.js.map