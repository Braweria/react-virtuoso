(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(154)),o={id:"range-change-callback",title:"Range Change Callback",sidebar_label:"Range Change Callback",slug:"/range-change-callback/"},c={unversionedId:"range-change-callback",id:"range-change-callback",isDocsHomePage:!1,title:"Range Change Callback",description:"The rangeChanged callback property gets called with the start/end indexes of the visible range.",source:"@site/docs/range-change-callback.md",slug:"/range-change-callback/",permalink:"/range-change-callback/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/range-change-callback.md",version:"current",sidebar_label:"Range Change Callback",sidebar:"someSidebar",previous:{title:"Start from a certain item",permalink:"/initial-index/"},next:{title:"Grouped 10,000 numbers",permalink:"/grouped-numbers/"}},l=[],s={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"rangeChanged")," callback property gets called with the start/end indexes of the visible range."),Object(i.b)("p",null,"Note: the ",Object(i.b)("inlineCode",{parentName:"p"},"rangeChanged")," reports the rendered items, which are affected by the ",Object(i.b)("inlineCode",{parentName:"p"},"overscan")," property - not the ones visible in the viewport.\nIf you must track only the visible items, you can try the workaround from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/petyosi/react-virtuoso/issues/118#issuecomment-642156138"}),"this Github issue"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0}),"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\nimport { useState, useMemo, useRef } from 'react'\n\nexport default function App() {\n  const [visibleRange, setVisibleRange] = useState({\n    startIndex: 0,\n    endIndex: 0,\n  })\n  const users = useMemo(() => generateUsers(100), [])\n  return (\n    <div style={{ height: 400, display: 'flex', flexDirection: 'column' }}>\n      <p>\n        current visible range: {visibleRange.startIndex} - {visibleRange.endIndex}{' '}\n      </p>\n      <Virtuoso\n        data={users}\n        rangeChanged={setVisibleRange}\n        style={{ flex: 1 }}\n        itemContent={(index, user) => (\n          <div\n            style={{\n              backgroundColor: user.bgColor,\n              padding: '1rem 0.5rem',\n            }}\n          >\n            <h4>\n              {user.index}. {user.name}\n            </h4>\n            <div style={{ marginTop: '1rem' }}>{user.description}</div>\n          </div>\n        )}\n      />\n    </div>\n  )\n}\n")))}u.isMDXComponent=!0},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,g=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(g,c(c({ref:n},s),{},{components:t})):a.a.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);