(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{163:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(155),s=a(52),o=a.n(s);function i(e){var t=e.sidebar;return 0===t.items.length?null:r.a.createElement("div",{className:o.a.sidebar},r.a.createElement("h3",{className:o.a.sidebarItemTitle},t.title),r.a.createElement("ul",{className:o.a.sidebarItemList},t.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:o.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:o.a.sidebarItemLink,activeClassName:o.a.sidebarItemLinkActive},e.title))}))))}},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(157),s=a(154),o=a(165),i=a(155),m=a(171),c=a(159),u=a(57),d=a.n(u),g=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,u,h,p=e.children,f=e.frontMatter,v=e.metadata,b=e.truncated,E=e.isBlogPostPage,k=void 0!==E&&E,N=v.date,x=v.permalink,w=v.tags,y=v.readingTime,_=f.author,M=f.title,T=f.image,j=f.keywords,C=f.author_url||f.authorURL,I=f.author_title||f.authorTitle,P=f.author_image_url||f.authorImageURL,R=Object(c.a)(T,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,j&&j.length&&r.a.createElement("meta",{name:"keywords",content:j.join(",")}),T&&r.a.createElement("meta",{property:"og:image",content:R}),T&&r.a.createElement("meta",{property:"twitter:image",content:R}),T&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M})),r.a.createElement("article",{className:k?void 0:"margin-bottom--xl"},(t=k?"h1":"h2",a=N.substring(0,10).split("-"),n=a[0],u=g[parseInt(a[1],10)-1],h=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},k?M:r.a.createElement(i.a,{to:x},M)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:d.a.blogPostDate},u," ",h,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},P&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:C,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:P,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:C,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},I)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(s.a,{components:m.a},p)),(w.length>0||b)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),b&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:v.permalink,"aria-label":"Read more about "+M},r.a.createElement("strong",null,"Read More"))))))}},169:function(e,t,a){"use strict";var n=a(170),r=a(0),l=a.n(r),s=a(156);a(53);t.a=function(e){var t=Object(s.a)().siteConfig.themeConfig.sandpack,a=e.children,r=e.template,o=void 0===r?"react":r,i=e.file,m=void 0===i?"/App.js":i,c=e.theme,u=void 0===c?t.theme:c;if(e.live){var d,g=a.split(/(```([\s\S]*?(?:(?!\\)[\s\S]))```)/gm).filter((function(e){return e.startsWith("```")})),h=g.reduce((function(e,t){var a,n,r,l=t.replace(/```/g,"").split("\n"),s=l[0],o=l.slice(1),i=null!==(a=null===(n=s.match(/file=(.+)/))||void 0===n?void 0:n[1])&&void 0!==a?a:"";return Object.assign({},e,((r={})[i]={code:o.join("\n")},r))}),{});return l.a.createElement(n.a,{editorHeight:600,customSetup:{dependencies:Object.assign({"react-virtuoso":"latest"},e["include-data"]?{faker:"5.1.0",lodash:"latest"}:{},"@mui/material"===e.import?{"@mui/material":"latest","@emotion/styled":"latest","@emotion/react":"latest"}:{},"react-table"===e.import?{"react-table":"latest"}:{},"react-sortable-hoc"===e.import?{"react-sortable-hoc":"^1.11.0"}:{},"react-beautiful-dnd"===e.import?{"react-beautiful-dnd":"latest"}:{},"@emotion/styled"===e.import?{"@emotion/styled":"latest","@emotion/react":"latest"}:{})},files:a?g.length?h:Object.assign((d={},d[m]=a,d),e["include-data"]?{"/data.js":{code:"\nimport faker from 'faker'\nimport { groupBy } from 'lodash'\nimport React from 'react'\n\nconst randomHeight = () => Math.floor(Math.random() * 30 + 24)\n\nconst generateRandomItems = (count) => {\n  return Array.from({ length: count }).map((_, i) => ({\n    text: `Item ${i + 1}`,\n    height: randomHeight(),\n    longText: faker.lorem.paragraphs(1),\n  }))\n}\n\nconst generated = []\n\nexport function toggleBg(index) {\n  return index % 2 ? '#f5f5f5' : 'white'\n}\n\nexport function user(index = 0) {\n  let firstName = faker.name.firstName()\n  let lastName = faker.name.lastName()\n\n  return {\n    index: index + 1,\n    bgColor: toggleBg(index),\n    name: `${firstName} ${lastName}`,\n    initials: `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`,\n    jobTitle: faker.name.jobTitle(),\n    description: faker.lorem.sentence(10),\n    longText: faker.lorem.paragraphs(1),\n  }\n}\n\nexport const getUser = (index) => {\n  if (!generated[index]) {\n    generated[index] = user(index)\n  }\n\n  return generated[index]\n}\n\nconst userSorter = (a, b) => {\n  if (a.name < b.name) {\n    return -1\n  }\n  if (a.name > b.name) {\n    return 1\n  }\n  return 0\n}\n\nexport function generateUsers(length, startIndex = 0) {\n  return Array.from({ length }).map((_, i) => getUser(i + startIndex))\n}\n\nexport function generateGroupedUsers(length) {\n  const users = Array.from({ length })\n    .map((_, i) => getUser(i))\n    .sort(userSorter)\n  const groupedUsers = groupBy(users, (user) => user.name[0])\n  const groupCounts = Object.values(groupedUsers).map((users) => users.length)\n  const groups = Object.keys(groupedUsers)\n\n  return { users, groupCounts, groups }\n}\n\nexport const avatar = () =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: 'blue',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n        paddingTop: 15,\n        paddingLeft: 15,\n        color: 'white',\n        boxSizing: 'border-box'\n      },\n    },\n    \"AB\"\n  )\n\nexport const avatarPlaceholder = (text = ' ') =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: '#eef2f4',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n      },\n    },\n    text\n  )\n\nconst range = (len) => {\n  const arr = []\n  for (let i = 0; i < len; i++) {\n    arr.push(i)\n  }\n  return arr\n}\n\nconst newPerson = () => {\n  const statusChance = Math.random()\n  return {\n    firstName: faker.name.firstName(),\n    lastName: faker.name.lastName(),\n    age: Math.floor(Math.random() * 30),\n    visits: Math.floor(Math.random() * 100),\n    progress: Math.floor(Math.random() * 100),\n    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',\n  }\n}\n\nexport function makeData(...lens) {\n  const makeDataLevel = (depth = 0) => {\n    const len = lens[depth]\n    return range(len).map((d) => {\n      return {\n        ...newPerson(),\n        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,\n      }\n    })\n  }\n\n  return makeDataLevel()\n}\n",hidden:!0}}:{}):void 0,template:o,theme:u})}return l.a.createElement(n.c,{customSetup:{entry:"index.ts",files:{"index.ts":a.trim()}}},l.a.createElement(n.d,{theme:u},l.a.createElement("button",{className:"sandpack__copy-button",onClick:function(){navigator.clipboard.writeText(a.trim())}},l.a.createElement("svg",{fill:"none",height:"100%",viewBox:"0 0 12 13",width:"100%"},l.a.createElement("g",{clipPath:"url(#a)"},l.a.createElement("path",{d:"M8.21 1.344H2.317c-.54 0-.983.463-.983 1.03v7.212h.983V2.374H8.21v-1.03Zm1.474 2.06H4.281c-.54 0-.983.464-.983 1.03v7.213c0 .566.442 1.03.983 1.03h5.403c.54 0 .983-.464.983-1.03V4.435c0-.567-.442-1.03-.983-1.03Zm0 8.243H4.281V4.435h5.403v7.212Z",fill:"currentColor"})),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"a"},l.a.createElement("path",{d:"M0 0h12v12H0z",fill:"currentColor",transform:"translate(0 .676)"}))))),l.a.createElement(n.b,null)))}},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(164),s=a(166),o=a(155),i=a(163);t.default=function(e){var t=e.metadata,a=e.items,n=e.sidebar,m=t.allTagsPath,c=t.name,u=t.count;return r.a.createElement(l.a,{title:'Posts tagged "'+c+'"',description:'Blog | Tagged "'+c+'"'},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(i.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,u," ",function(e,t){return e>1?t+"s":t}(u,"post"),' tagged with "',c,'"'),r.a.createElement(o.a,{href:m},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.a.createElement(s.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.a.createElement(t,null))})))))))}}}]);