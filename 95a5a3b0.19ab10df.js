(window.webpackJsonp=window.webpackJsonp||[]).push([[42,14,32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(143)),c=n(52),i=n(48),l={id:"virtuoso-grid-api-reference",title:"Virtuoso Grid API Reference",sidebar_label:"Virtuoso Grid",slug:"/virtuoso-grid-api-reference/"},b={unversionedId:"virtuoso-grid-api-reference",id:"virtuoso-grid-api-reference",isDocsHomePage:!1,title:"Virtuoso Grid API Reference",description:"All properties are optional - by default, the component will render empty.",source:"@site/docs/virtuoso-grid-api-reference.md",slug:"/virtuoso-grid-api-reference/",permalink:"/virtuoso-grid-api-reference/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/virtuoso-grid-api-reference.md",version:"current",sidebar_label:"Virtuoso Grid",sidebar:"someSidebar",previous:{title:"Virtuoso API Reference",permalink:"/virtuoso-api-reference/"},next:{title:"Interface: Components",permalink:"/api/interfaces/_interfaces_.components"}},s=[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],p={rightToc:s};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All properties are optional - by default, the component will render empty. "),Object(a.b)("p",null,"  If you are using TypeScript and want to use correctly typed component ",Object(a.b)("inlineCode",{parentName:"p"},"ref"),", you can use ",Object(a.b)("inlineCode",{parentName:"p"},"VirtuosoGridHandle")," types."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso'\n//...\nconst ref = useRef<VirtuosoGridHandle>(null)\n//...\n<VirtuosoGrid ref={ref} /*...*/ />\n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("div",{className:"generated-api"},Object(a.b)(c.default,{mdxType:"Props"})),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("div",{className:"generated-api"},Object(a.b)(i.default,{mdxType:"Methods"})))}m.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,u=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(u,i(i({ref:t},b),{},{components:n})):o.a.createElement(u,i({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(143)),c={id:"_components_.virtuosohandle",title:"Interface: VirtuosoHandle",sidebar_label:"VirtuosoHandle"},i={unversionedId:"api/interfaces/_components_.virtuosohandle",id:"api/interfaces/_components_.virtuosohandle",isDocsHomePage:!1,title:"Interface: VirtuosoHandle",description:'"components".VirtuosoHandle',source:"@site/docs/api/interfaces/_components_.virtuosohandle.md",slug:"/api/interfaces/_components_.virtuosohandle",permalink:"/api/interfaces/_components_.virtuosohandle",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_components_.virtuosohandle.md",version:"current",sidebar_label:"VirtuosoHandle"},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"scrollBy",id:"scrollby",children:[]},{value:"scrollIntoView",id:"scrollintoview",children:[]},{value:"scrollTo",id:"scrollto",children:[]},{value:"scrollToIndex",id:"scrolltoindex",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_components_"}),'"components"'),".VirtuosoHandle"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"{}"),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"VirtuosoHandle")))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"scrollby"},"scrollBy"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollBy"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": ScrollToOptions): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L338"}),"src/components.tsx:338"))),Object(a.b)("p",null,"Scrolls the component with the specified amount. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions (MDN)")),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ScrollToOptions")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollintoview"},"scrollIntoView"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollIntoView"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": ScrollIntoViewLocation): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L330"}),"src/components.tsx:330"))),Object(a.b)("p",null,"Scrolls the item into view if necessary. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://virtuoso.dev/keyboard-navigation/"}),"the website example")," for an implementation."),Object(a.b)("h4",{id:"parameters-1"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ScrollIntoViewLocation")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollto"},"scrollTo"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollTo"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": ScrollToOptions): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L334"}),"src/components.tsx:334"))),Object(a.b)("p",null,"Scrolls the component to the specified location. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"}),"ScrollToOptions (MDN)")),Object(a.b)("h4",{id:"parameters-2"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ScrollToOptions")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrolltoindex"},"scrollToIndex"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"scrollToIndex"),"(",Object(a.b)("inlineCode",{parentName:"p"},"location"),": number ","|"," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.indexlocationwithalign"}),"IndexLocationWithAlign"),"): void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L326"}),"src/components.tsx:326"))),Object(a.b)("p",null,"Scrolls the component to the specified item index. See {{IndexLocationWithAlign}} for more options."),Object(a.b)("h4",{id:"parameters-3"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"location")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number ","|"," ",Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"/api/interfaces/_interfaces_.indexlocationwithalign"}),"IndexLocationWithAlign"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," void"))}s.isMDXComponent=!0},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(143)),c={id:"_components_.virtuosogridprops",title:"Interface: VirtuosoGridProps<T>",sidebar_label:"VirtuosoGridProps"},i={unversionedId:"api/interfaces/_components_.virtuosogridprops",id:"api/interfaces/_components_.virtuosogridprops",isDocsHomePage:!1,title:"Interface: VirtuosoGridProps<T>",description:'"components".VirtuosoGridProps',source:"@site/docs/api/interfaces/_components_.virtuosogridprops.md",slug:"/api/interfaces/_components_.virtuosogridprops",permalink:"/api/interfaces/_components_.virtuosogridprops",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_components_.virtuosogridprops.md",version:"current",sidebar_label:"VirtuosoGridProps"},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"atBottomStateChange",id:"atbottomstatechange",children:[]},{value:"atTopStateChange",id:"attopstatechange",children:[]},{value:"components",id:"components",children:[]},{value:"computeItemKey",id:"computeitemkey",children:[]},{value:"endReached",id:"endreached",children:[]},{value:"isScrolling",id:"isscrolling",children:[]},{value:"itemClassName",id:"itemclassname",children:[]},{value:"itemContent",id:"itemcontent",children:[]},{value:"key",id:"key",children:[]},{value:"listClassName",id:"listclassname",children:[]},{value:"overscan",id:"overscan",children:[]},{value:"rangeChanged",id:"rangechanged",children:[]},{value:"ref",id:"ref",children:[]},{value:"scrollSeekConfiguration",id:"scrollseekconfiguration",children:[]},{value:"scrollerRef",id:"scrollerref",children:[]},{value:"startReached",id:"startreached",children:[]},{value:"totalCount",id:"totalcount",children:[]},{value:"useWindowScroll",id:"usewindowscroll",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_components_"}),'"components"'),".VirtuosoGridProps"),Object(a.b)("h2",{id:"type-parameters"},"Type parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"T"))))),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"{} & {} & {} & ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#gridrootprops"}),"GridRootProps")," & RefAttributes","<","MethodsFromPropMap","<","SystemSpec","<","[SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","SystemSpecs, (Anonymous function)>], (Anonymous function)>, { events: { atBottomStateChange: ",'"',"atBottomStateChange",'"',' = "atBottomStateChange"; atTopStateChange: ','"',"atTopStateChange",'"',' = "atTopStateChange"; endReached: ','"',"endReached",'"',' = "endReached"; isScrolling: ','"',"isScrolling",'"',' = "isScrolling"; rangeChanged: ','"',"rangeChanged",'"',' = "rangeChanged"; startReached: ','"',"startReached",'"',' = "startReached" } ; methods: { scrollBy: ','"',"scrollBy",'"',' = "scrollBy"; scrollTo: ','"',"scrollTo",'"',' = "scrollTo"; scrollToIndex: ','"',"scrollToIndex",'"',' = "scrollToIndex" } ; optional: { ItemContainer: ','"',"ItemContainer",'"',' = "ItemContainer"; ListContainer: ','"',"ListContainer",'"',' = "ListContainer"; ScrollContainer: ','"',"ScrollContainer",'"',' = "ScrollContainer"; components: ','"',"components",'"',' = "components"; computeItemKey: ','"',"computeItemKey",'"',' = "computeItemKey"; initialItemCount: ','"',"initialItemCount",'"',' = "initialItemCount"; item: ','"',"item",'"',' = "item"; itemClassName: ','"',"itemClassName",'"',' = "itemClassName"; itemContent: ','"',"itemContent",'"',' = "itemContent"; listClassName: ','"',"listClassName",'"',' = "listClassName"; overscan: ','"',"overscan",'"',' = "overscan"; scrollSeek: ','"',"scrollSeek",'"',' = "scrollSeek"; scrollSeekConfiguration: ','"',"scrollSeekConfiguration",'"',' = "scrollSeekConfiguration"; scrollerRef: ','"',"scrollerRef",'"',' = "scrollerRef"; totalCount: ','"',"totalCount",'"',' = "totalCount"; useWindowScroll: ','"',"useWindowScroll",'"',' = "useWindowScroll" }  }>>'),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"VirtuosoGridProps")))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"atbottomstatechange"},"atBottomStateChange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"atBottomStateChange"),": (atBottom: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L294"}),"src/components.tsx:294"))),Object(a.b)("p",null,"Called with true / false when the list has reached the bottom / gets scrolled up.\nCan be used to load newer items, like ",Object(a.b)("inlineCode",{parentName:"p"},"tail -f"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"attopstatechange"},"atTopStateChange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"atTopStateChange"),": (atTop: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L299"}),"src/components.tsx:299"))),Object(a.b)("p",null,"Called with ",Object(a.b)("inlineCode",{parentName:"p"},"true")," / ",Object(a.b)("inlineCode",{parentName:"p"},"false")," when the list has reached the top / gets scrolled down."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"components"},"components"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"components"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.gridcomponents"}),"GridComponents")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L248"}),"src/components.tsx:248"))),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"components")," property for advanced customization of the elements rendered by the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"computeitemkey"},"computeItemKey"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"computeItemKey"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.gridcomputeitemkey"}),"GridComputeItemKey")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L260"}),"src/components.tsx:260"))),Object(a.b)("p",null,"If specified, the component will use the function to generate the ",Object(a.b)("inlineCode",{parentName:"p"},"key")," property for each list item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"endreached"},"endReached"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"endReached"),": (index: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L278"}),"src/components.tsx:278"))),Object(a.b)("p",null,"Gets called when the user scrolls to the end of the list.\nReceives the last item index as an argument. Can be used to implement endless scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"isscrolling"},"isScrolling"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"isScrolling"),": (isScrolling: boolean) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L272"}),"src/components.tsx:272"))),Object(a.b)("p",null,"Called when the list starts/stops scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemclassname"},"itemClassName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemClassName"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L314"}),"src/components.tsx:314"))),Object(a.b)("p",null,"Sets the grid items' className"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"itemcontent"},"itemContent"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"itemContent"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.griditemcontent"}),"GridItemContent")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L243"}),"src/components.tsx:243"))),Object(a.b)("p",null,"Set the callback to specify the contents of the item."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"key"},"key"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"key"),": Key ","|"," null"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_components_.virtuosogridprops"}),"VirtuosoGridProps"),".",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_components_.virtuosogridprops#key"}),"key"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in node_modules/@types/react/index.d.ts:137")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"listclassname"},"listClassName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"listClassName"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L309"}),"src/components.tsx:309"))),Object(a.b)("p",null,"Sets the className for the list DOM element"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"overscan"},"overscan"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"overscan"),": number ","|"," { main: number ; reverse: number  }"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L255"}),"src/components.tsx:255"))),Object(a.b)("p",null,'Set the overscan property to make the component "chunk" the rendering of new items on scroll.\nThe property causes the component to render more items than the necessary, but reduces the re-renders on scroll.\nSetting ',Object(a.b)("inlineCode",{parentName:"p"},"{ main: number, reverse: number }")," lets you extend the list in both the main and the reverse scrollable directions."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"rangechanged"},"rangeChanged"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"rangeChanged"),": (range: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.listrange"}),"ListRange"),") => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L288"}),"src/components.tsx:288"))),Object(a.b)("p",null,"Called with the new set of items each time the list items are rendered due to scrolling."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ref"},"ref"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"ref"),": Ref","<","T>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_components_.virtuosogridprops"}),"VirtuosoGridProps"),".",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_components_.virtuosogridprops#ref"}),"ref"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in node_modules/@types/react/index.d.ts:140")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollseekconfiguration"},"scrollSeekConfiguration"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"scrollSeekConfiguration"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekconfiguration"}),"ScrollSeekConfiguration")," ","|"," false"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L267"}),"src/components.tsx:267"))),Object(a.b)("p",null,"Use to display placeholders if the user scrolls fast through the list."),Object(a.b)("p",null,"Set ",Object(a.b)("inlineCode",{parentName:"p"},"components.ScrollSeekPlaceholder")," to change the placeholder content."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollerref"},"scrollerRef"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"scrollerRef"),": (ref: HTMLElement ","|"," null) => any"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L304"}),"src/components.tsx:304"))),Object(a.b)("p",null,"Provides access to the root DOM element"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"startreached"},"startReached"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"startReached"),": (index: number) => void"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L283"}),"src/components.tsx:283"))),Object(a.b)("p",null,"Called when the user scrolls to the start of the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"totalcount"},"totalCount"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"totalCount"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L238"}),"src/components.tsx:238"))),Object(a.b)("p",null,"The total amount of items to be rendered."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usewindowscroll"},"useWindowScroll"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"useWindowScroll"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/f91400e/src/components.tsx#L319"}),"src/components.tsx:319"))),Object(a.b)("p",null,"Uses the document scroller rather than wrapping the grid in its own."))}s.isMDXComponent=!0}}]);