(this.webpackJsonpdeployment=this.webpackJsonpdeployment||[]).push([[0],{41:function(e){e.exports=JSON.parse('{"deploymentPlans":[{"created":"2021-03-08T14:39:54+00:00","creator":{"email":"someone@email.com","externalId":"1","name":"Someone"},"deployments":[{"device":{"actionLog":[{"action":"install","affectedSoftwareComponent":{"externalId":"4","externalVersionId":"2","name":"Component #1","version":"2.3.3"},"executor":{"email":"another.one@email.com","externalId":"2","name":"Another One"},"timestamp":"2021-03-09T10:11:07+00:00"},{"action":"install","affectedSoftwareComponent":{"externalId":"4","externalVersionId":"3","name":"Component #1","version":"2.3.4"},"executor":{"email":"another.one@email.com","externalId":"2","name":"Another One"},"timestamp":"2021-03-09T09:08:07+00:00"}],"description":"Some description for device 1","id":"a30f250a-eb74-4667-9d79-2df02dc2f99a","name":"Device #1"},"softwareComponents":[{"externalId":"4","externalVersionId":"3","name":"Component #1","version":"2.3.4"},{"externalId":"20","externalVersionId":"58","name":"Component #2","version":"1.5.4"}]},{"device":{"actionLog":[],"description":"Some description for device 2","id":"29d0688d-d30d-4952-a2fa-e4fb481e6be7","name":"Device #2"},"softwareComponents":[{"externalId":"4","externalVersionId":"3","name":"Component #1","version":"2.3.4"}]}],"description":"This is an open deployment plan","id":"2bdb0e71-bc2b-4b10-811b-a00a70f9c4f3","locked":false,"name":"Test open deployment Plan"},{"created":"2021-03-03T16:00:51+00:00","creator":{"email":"someone@email.com","externalId":"1","name":"Someone"},"deployments":[{"device":{"actionLog":[{"action":"install","affectedSoftwareComponent":{"externalId":"56","externalVersionId":"129","name":"Component #3","version":"5.2.123"},"executor":{"email":"another.one@email.com","externalId":"2","name":"Another One"},"timestamp":"2021-03-05T15:38:06+00:00"},{"action":"install","affectedSoftwareComponent":{"externalId":"97","externalVersionId":"344","name":"Component #4","version":"0.4.3"},"executor":{"email":"another.one@email.com","externalId":"2","name":"Another One"},"timestamp":"2021-03-04T08:18:00+00:00"}],"description":"Description","id":"efc6c4b8-06d4-485f-b0e3-0d88ca69b144","name":"Device #2"},"softwareComponents":[{"externalId":"56","externalVersionId":"129","name":"Component #3","version":"5.2.123"},{"externalId":"97","externalVersionId":"344","name":"Component #4","version":"0.4.3"}]}],"description":"This is a locked deployment plan","id":"f86d063d-8c75-4985-93c0-79e6a93bcc34","locked":true,"name":"Test locked deployment plan"}]}')},69:function(e,n,a){},70:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),o=a(11),r=a.n(o),i=a(35),s=a(41),l=a(48),d=a(87),m=a(88),j=a(90),x=a(89),p=a(91),b=a(42),O=a.n(b),h=a(43),f=a.n(h),v=a(86),u=a(2);function I(e){var n=e.device.actionLog;return Object(u.jsx)(v.a,{fixed:!0,children:Object(u.jsxs)(d.a,{size:"small",children:[Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(x.a,{children:[Object(u.jsxs)(j.a,{colSpan:1,className:"deviceNameCell",children:[Object(u.jsx)("b",{children:"Device Name:"}),e.device.name]}),Object(u.jsxs)(j.a,{colSpan:2,children:[Object(u.jsx)("b",{children:"Device ID:"}),e.device.id]}),Object(u.jsxs)(j.a,{colSpan:2,children:[Object(u.jsx)("b",{children:"Device Description:"}),e.device.description]})]}),Object(u.jsxs)(x.a,{className:"innerTableHead",children:[Object(u.jsx)(j.a,{children:"Software Components"}),Object(u.jsx)(j.a,{children:"Version"}),Object(u.jsx)(j.a,{children:"Executor"}),Object(u.jsx)(j.a,{children:"TimeStamp"}),Object(u.jsx)(j.a,{children:"Status"})]})]}),Object(u.jsx)(p.a,{children:e.softwareComponents.map((function(e){var a=n.find((function(n){return n.affectedSoftwareComponent.name===e.name&&n.affectedSoftwareComponent.version===e.version}));return Object(u.jsxs)(x.a,{className:"innerTableBody",children:[Object(u.jsx)(j.a,{children:e.name}),Object(u.jsx)(j.a,{children:e.version}),Object(u.jsxs)(j.a,{children:[a?a.executor.name:"-"," "]}),Object(u.jsx)(j.a,{children:a?a.timestamp:"-"}),Object(u.jsxs)(j.a,{children:[a?"Installed":"Not Installed",a?Object(u.jsx)(O.a,{color:"primary"}):Object(u.jsx)(f.a,{color:"primary"})," "]})]},e.externalId)}))})]})})}var y=a(95),C=a(97),N=a(96),S=a(45),w=a.n(S),D=a(44),T=a.n(D),V=a(47),g=a.n(V),k=a(46),A=a.n(k);var L=function(e){var n=c.a.useState(!1),a=Object(l.a)(n,2),t=a[0],o=a[1];return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)(x.a,{className:"secondaryRow",children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(N.a,{size:"small",onClick:function(){return o(!t)},children:t?Object(u.jsx)(T.a,{color:"primary"}):Object(u.jsx)(w.a,{color:"primary"})})}),Object(u.jsx)(j.a,{component:"th",scope:"row",children:e.id}),Object(u.jsx)(j.a,{children:e.name}),Object(u.jsx)(j.a,{children:e.creator.name}),Object(u.jsx)(j.a,{children:e.created}),Object(u.jsx)(j.a,{children:e.locked?Object(u.jsx)(A.a,{color:"primary"}):Object(u.jsx)(g.a,{color:"primary"})})]}),Object(u.jsx)(x.a,{children:Object(u.jsx)(j.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(u.jsx)(C.a,{in:t,timeout:"auto",unmountOnExit:!0,children:Object(u.jsxs)(y.a,{margin:1,children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Deployment Description: "})," ",e.description]}),e.deployments.map((function(e){return Object(u.jsx)(I,Object(i.a)({},e),e.device.id)}))]})})})})]})},z=a(92),B=a(93);var E=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(v.a,{fixed:!0,children:[Object(u.jsx)("span",{align:"center",children:Object(u.jsx)("h2",{children:"Deployment Visualization"})}),Object(u.jsx)(z.a,{component:B.a,children:Object(u.jsxs)(d.a,{size:"small",children:[Object(u.jsx)(m.a,{children:Object(u.jsxs)(x.a,{className:"primaryRow",children:[Object(u.jsx)(j.a,{}),Object(u.jsx)(j.a,{className:"fieldName",children:"Deployment ID"}),Object(u.jsx)(j.a,{className:"fieldName",children:"Deployment Name"}),Object(u.jsx)(j.a,{className:"fieldName",children:"Creator"}),Object(u.jsx)(j.a,{className:"fieldName",children:"Created"}),Object(u.jsx)(j.a,{className:"fieldName",children:"Locked"})]})}),Object(u.jsx)(p.a,{children:s.deploymentPlans.map((function(e){return Object(u.jsx)(L,Object(i.a)({},e),e.id)}))})]})})]})})};a(69);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.25bc2367.chunk.js.map