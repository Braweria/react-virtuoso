(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),c=(r(0),r(154)),i={id:"custom-scroll-container",title:"Customize Root Element",sidebar_label:"Customize Scroller",slug:"/custom-scroll-container/"},a={unversionedId:"custom-scroll-container",id:"custom-scroll-container",isDocsHomePage:!1,title:"Customize Root Element",description:"The React Virtuoso component accepts the standard set of HTML attributes and passes them to the root scrollable DOM div.",source:"@site/docs/custom-scroll-container.md",slug:"/custom-scroll-container/",permalink:"/custom-scroll-container/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/custom-scroll-container.md",version:"current",sidebar_label:"Customize Scroller",sidebar:"someSidebar",previous:{title:"RB DND + Window Scroller",permalink:"/react-beautiful-dnd-window-scroller/"},next:{title:"Customize Rendering",permalink:"/customize-structure/"}},s=[{value:"List with custom styling",id:"list-with-custom-styling",children:[]},{value:"List with custom scroller",id:"list-with-custom-scroller",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The React Virtuoso component accepts the standard set of HTML attributes and passes them to the root scrollable DOM div.\nYou can use this to customize the styling and to bind to DOM events like ",Object(c.b)("inlineCode",{parentName:"p"},"onScroll"),". If you want to customize the wrapper further, you can pass a custom component as ",Object(c.b)("inlineCode",{parentName:"p"},"components.Scroller"),"."),Object(c.b)("h2",{id:"list-with-custom-styling"},"List with custom styling"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"import { Virtuoso } from 'react-virtuoso'\n\nexport default function App() {\n  return (\n    <Virtuoso\n      onScroll={(e) => console.log(e.target.scrollTop)}\n      totalCount={1000}\n      itemContent={(idx) => `Item ${idx}`}\n      style={{\n        border: '5px dashed gray',\n        borderRadius: '4px',\n        height: 400\n      }}\n    />\n  )\n}\n")),Object(c.b)("p",null,"The example above changes the scroller element with a custom component. This approach is useful for integrating the component with a custom scroller library."),Object(c.b)("h2",{id:"list-with-custom-scroller"},"List with custom scroller"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"import { Virtuoso } from 'react-virtuoso'\nimport React from 'react'\n\nexport default function App() {\n  return (\n    <Virtuoso\n      style={{ height: 400 }}\n      onScroll={(e) => console.log(e.target.scrollTop)}\n      totalCount={1000}\n      itemContent={(idx) => `Item ${idx}`}\n      components={{\n        Scroller: React.forwardRef(({ style, ...props }, ref) => {\n          // an alternative option to assign the ref is\n          // <div ref={(r) => ref.current = r}>\n          return <div style={{ ...style, border: '5px solid gray' }} ref={ref} {...props} />\n        }),\n      }}\n    />\n  )\n}\n")))}u.isMDXComponent=!0},154:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return r?o.a.createElement(f,a(a({ref:t},l),{},{components:r})):o.a.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);