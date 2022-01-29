(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(154)),i={id:"hello-table",title:"Table Virtuoso Basic Example",sidebar_label:"Basic Example",slug:"/hello-table/"},l={unversionedId:"hello-table",id:"hello-table",isDocsHomePage:!1,title:"Table Virtuoso Basic Example",description:"The TableVirtuoso component can display large tables with unknown row sizes. It has most of the Virtuoso capabilities sans pinning top items. It also supports sticky table headers.",source:"@site/docs/hello-table.md",slug:"/hello-table/",permalink:"/hello-table/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/hello-table.md",version:"current",sidebar_label:"Basic Example",sidebar:"someSidebar",previous:{title:"Scroll to Group",permalink:"/scroll-to-group/"},next:{title:"Table Virtuoso Example with Fixed Headers",permalink:"/table-fixed-headers/"}},c=[{value:"Styling and markup",id:"styling-and-markup",children:[]},{value:"Table with <code>data</code>",id:"table-with-data",children:[]},{value:"Table with <code>totalCount</code>",id:"table-with-totalcount",children:[]},{value:"Table with <code>windowScroll</code>",id:"table-with-windowscroll",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"TableVirtuoso")," component can display large tables with ",Object(o.b)("strong",{parentName:"p"},"unknown")," row sizes. It has most of the ",Object(o.b)("inlineCode",{parentName:"p"},"Virtuoso")," capabilities sans pinning top items. It also supports sticky table headers.\nYou do not have to configure anything apart from the ",Object(o.b)("inlineCode",{parentName:"p"},"data")," or the ",Object(o.b)("inlineCode",{parentName:"p"},"totalCount")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"itemContent")," renderer."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"itemContent")," render callback accepts ",Object(o.b)("inlineCode",{parentName:"p"},"index"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"item")," parameter (if ",Object(o.b)("inlineCode",{parentName:"p"},"data")," is set),\nwhich specifies the absolute index of the item rendered;\nIt is up to you to build and return the respective content."),Object(o.b)("h2",{id:"styling-and-markup"},"Styling and markup"),Object(o.b)("p",null,"The component renders an HTML table structure. Few CSS settings can affect its look:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"border-collapse: collapse")," setting on ",Object(o.b)("inlineCode",{parentName:"li"},"table")," causes the fixed header borders to scroll away. To fix, use ",Object(o.b)("inlineCode",{parentName:"li"},"border-collapse: separate")," and specify bottom/right borders."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"table")," should not have styling that changes its ",Object(o.b)("inlineCode",{parentName:"li"},"display")," and ",Object(o.b)("inlineCode",{parentName:"li"},"overflow"),".")),Object(o.b)("h2",{id:"table-with-data"},"Table with ",Object(o.b)("inlineCode",{parentName:"h2"},"data")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0}),"import { TableVirtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\n\nexport default function App() {\n  return (\n    <TableVirtuoso\n      style={{ height: 400 }}\n      data={generateUsers(100000)}\n      itemContent={(index, user) => (\n        <>\n          <td style={{ width: 150 }}>{user.name}</td>\n          <td>{user.description}</td>\n        </>\n      )}\n    />\n  )\n}\n")),Object(o.b)("h2",{id:"table-with-totalcount"},"Table with ",Object(o.b)("inlineCode",{parentName:"h2"},"totalCount")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0}),"import { TableVirtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\nimport { useMemo } from 'react'\n\nexport default function App() {\n  const users = useMemo(() => generateUsers(100), [])\n  return (\n    <TableVirtuoso\n      style={{ height: 400 }}\n      totalCount={users.length}\n      itemContent={(index) => {\n        const user = users[index]\n        return (\n          <>\n            <td style={{ width: 150 }}>{user.name}</td>\n            <td>{user.description}</td>\n          </>\n        )\n      }}\n    />\n  )\n}\n")),Object(o.b)("h2",{id:"table-with-windowscroll"},"Table with ",Object(o.b)("inlineCode",{parentName:"h2"},"windowScroll")),Object(o.b)("p",null,"The example below adjusts the ",Object(o.b)("inlineCode",{parentName:"p"},"top")," of the sticky header element, so that the table header doesn't tuck under the site header."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0}),"import { TableVirtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\n\nexport default function App() {\n  return (\n    <TableVirtuoso\n      data={generateUsers(100000)}\n      useWindowScroll\n      fixedHeaderContent={(index, user) => (\n        <tr>\n          <th style={{ width: 150, background: 'blue', color: 'white' }}>Name</th>\n          <th style={{ background: 'blue', color: 'white' }}>Description</th>\n        </tr>\n      )}\n      itemContent={(index, user) => (\n        <>\n          <td style={{ width: 150 }}>{user.name}</td>\n          <td>{user.description}</td>\n        </>\n      )}\n    />\n  )\n}\n")))}d.isMDXComponent=!0}}]);