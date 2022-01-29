(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(2),o=t(6),l=(t(0),t(154)),i={id:"scroll-seek-placeholders",title:"Scroll Seek Placeholders",sidebar_label:"Scroll Seek Placeholders",slug:"/scroll-seek-placeholders/"},a={unversionedId:"scroll-seek-placeholders",id:"scroll-seek-placeholders",isDocsHomePage:!1,title:"Scroll Seek Placeholders",description:"The scrollSeekConfiguration property allows you to render a placeholder element instead of the actual item if the user scrolls too fast.",source:"@site/docs/scroll-seek-placeholders.md",slug:"/scroll-seek-placeholders/",permalink:"/scroll-seek-placeholders/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/scroll-seek-placeholders.md",version:"current",sidebar_label:"Scroll Seek Placeholders",sidebar:"someSidebar",previous:{title:"Stick to Bottom",permalink:"/stick-to-bottom/"},next:{title:"MUI List",permalink:"/material-ui-endless-scrolling/"}},s=[],c={rightToc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"scrollSeekConfiguration")," property allows you to render a placeholder element instead of the actual item if the user scrolls too fast. "),Object(l.b)("p",null,"This improves scrolling performance and delays the actual load of data from the server."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0}),'import { Virtuoso } from \'react-virtuoso\'\nimport { user, generateUsers, toggleBg } from \'./data\'\nimport { useState, useMemo, useCallback, useEffect, useRef } from \'react\'\n\nexport default function App() {\n  const randomHeights = useMemo(\n    () =>\n      Array(10)\n        .fill(true)\n        .map(() => Math.round(Math.random() * 14) + 1),\n    []\n  );\n\n  const users = useMemo(() => generateUsers(1000), [])\n\n  // use the visible range to provide information\n  // about the list current position.\n  const [visibleRange, setVisibleRange] = useState(["-", "-"]);\n\n  return (\n    <div style={{ display: "flex", flexDirection: \'column\', height: \'100%\' }}>\n      <div>\n        Current visible range:{" "}\n        <div>\n          <strong>\n            {visibleRange[0]} - {visibleRange[1]}\n          </strong>\n        </div>{" "}\n      </div>\n\n      <div style={{ flex: 1 }}>\n        <Virtuoso\n          style={{ height: 400 }}\n          data={users}\n          itemContent={(index, user) => <div style={{ backgroundColor: toggleBg(index) }}>{user.name}</div>}\n          components={{\n            // You can use index to randomize\n            // and make the placeholder list more organic.\n            // the height passed is the one measured for the real item. \n            // the placeholder should be the same size.\n            ScrollSeekPlaceholder: ({ height, index }) => (\n              <div\n                style={{\n                  height,\n                  padding: "8px",\n                  boxSizing: "border-box",\n                  overflow: "hidden",\n                }}\n              >\n                <div\n                  style={{\n                    background: index % 2 ? "blue": "green",\n                    height: randomHeights[index % 10],\n                  }}\n                ></div>\n              </div>\n            ),\n          }}\n          scrollSeekConfiguration={{\n            enter: (velocity) => Math.abs(velocity) > 50,\n            exit: (velocity) => {\n              const shouldExit = Math.abs(velocity) < 10;\n              if (shouldExit) {\n                setVisibleRange(["-", "-"]);\n              }\n              return shouldExit;\n            },\n            change: (_velocity, { startIndex, endIndex }) => setVisibleRange([startIndex, endIndex])\n          }}\n        />\n      </div>\n    </div>\n  )\n}\n')))}d.isMDXComponent=!0},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),d=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=r,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||l;return t?o.a.createElement(m,a(a({ref:n},c),{},{components:t})):o.a.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);