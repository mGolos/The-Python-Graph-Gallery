(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("AK/e");var n=t("Wbzz"),l=t("q1tI"),r=t.n(l),i=t("NDdm"),c=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var a=e.chartType,t=e.caption,l=e.link,o=c.includes(a);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement(n.Link,{to:l},r.a.createElement(i.a,{chartType:a})),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sectionLogoContainer"},r.a.createElement(n.Link,{to:l},r.a.createElement(i.a,{chartType:a}),r.a.createElement("div",{className:"sectionLogoOverlay"},r.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n),r=t("eynx"),i=t("JI6e"),c=t("Wbzz");function o(e){var a=e.imgName,t=e.caption,n=e.linkTo;return l.a.createElement(i.a,{xs:12,md:4},l.a.createElement(c.Link,{to:n},l.a.createElement(r.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),i=t("9eSz"),c=t.n(i),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(o.includes(a))return l.a.createElement("p",null,"TODO");var n=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(c.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}},hwLn:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t("q1tI"),l=t.n(n),r=t("4/Vk"),i=t("7oih"),c=t("7vrA"),o=t("6+GL"),m=t("3Z9Z"),u=t("59G+"),s=t("pJaR"),p=t("Hrqu"),d=t("gMBH"),h=t("Wbzz"),b=t("eynx");function E(){return l.a.createElement(i.a,{title:"Circular Barplot"},l.a.createElement(r.a,{title:"Circular Barplot",description:"<p>A <a href='https://www.data-to-viz.com/graph/circularbarplot.html'>circular barplot</a> is pretty much the same as a <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>, but using polar coordinates instead of cartesian coordinates. They are a bit tricky to build with <code>Python</code> and less accurate than usual barplot, but they come with an eye-catching effect that sometimes make them worth it.</p>"}),l.a.createElement(c.a,null,l.a.createElement("h2",{id:"Matplotlib"},l.a.createElement(p.b,null),"Circular barplot with ",l.a.createElement("code",null,"Matplotlib")),l.a.createElement("p",null,l.a.createElement("code",null,"Matplotlib")," allows to build circular barplots thanks to the ",l.a.createElement("code",null,"polar")," Layout option of the ",l.a.createElement("code",null,"subplot()")," function. Examples below should guide you from the most simple version to some more customization."),l.a.createElement("p",null,"It starts by explaining how the polar coordinates of ",l.a.createElement("code",null,"matplotlib")," works, show how to use it to draw bars and finally goes into the trickiness of adding labels."),l.a.createElement(m.a,null,l.a.createElement(u.a,{imgName:"circular-barplot-basic1",caption:"Explanation of the polar coordinates with Matplotlib.",linkTo:"/circular-barplot-basic"}),l.a.createElement(u.a,{imgName:"circular-barplot-basic2",caption:"Most basic circular barplot with Python and Matplotlib.",linkTo:"/circular-barplot-basic"}),l.a.createElement(u.a,{imgName:"circular-barplot-basic4",caption:"Reorder items.",linkTo:"/circular-barplot-basic"})),l.a.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.a.createElement(h.Link,{to:"/circular-barplot-basic"},l.a.createElement(b.a,{imgName:"circular-barplot-basic3",caption:"Circular barplot with labels"})))),l.a.createElement(d.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(c.a,null,l.a.createElement(s.a,{chartFamily:"ranking"}))),l.a.createElement(d.a,null),l.a.createElement(c.a,null,l.a.createElement(o.a,null)),l.a.createElement(d.a,null))}},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("9d5C");var n=t("q1tI"),l=t.n(n),r=t("3Z9Z"),i=t("JI6e"),c=t("2Bqf"),o=t("qXiB"),m=t("jhdv"),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){var a=e.chartFamily,t=o.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(m.a)(e.pythonURL);return l.a.createElement(i.a,{key:a,xs:4,md:2},l.a.createElement(c.a,{link:t,chartType:e.logo,caption:e.label}))}));return l.a.createElement("div",null,l.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==u?void 0:u[a]),l.a.createElement(r.a,null,t))}}}]);
//# sourceMappingURL=component---src-pages-circular-barplot-js-f40580716e84217879db.js.map