(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),c=a(37),o=(a(29),a(36)),i=a(38),u=a(20),m=[{url:"https://starwars-visualguide.com/assets/img/categories/character.jpg",title:"People",id:1},{url:"https://starwars-visualguide.com/assets/img/categories/films.jpg",title:"Films",id:2},{url:"https://starwars-visualguide.com/assets/img/categories/planets.jpg",title:"Planets",id:3},{url:"https://starwars-visualguide.com/assets/img/categories/species.jpg",title:"Species",id:4},{url:"https://starwars-visualguide.com/assets/img/categories/starships.jpg",title:"Starships",id:5},{url:"https://starwars-visualguide.com/assets/img/categories/vehicles.jpg",title:"Vehicles",id:6}],p=function(){return r.a.createElement("div",{className:"home_page-container"},m.map(function(e){var t=e.title,a=e.url,n=e.id;return r.a.createElement("div",{className:"home_page-category",key:n},r.a.createElement("h3",{className:"title-image"},t),r.a.createElement(o.a,{to:t.toLowerCase()},r.a.createElement("img",{src:a,alt:t})))}))},h=a(5),g=a.n(h),d=a(9),f=a(10),v=a(11),E=a(15),b=a(12),w=a(16),k=a(14),j=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={sortColumn:null,sortAsc:!0},a.handleHeaderClick=function(e){a.setState(function(t){return{sortColumn:e,sortAsc:t.sortColumn!==e||!t.sortAsc}})},a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"getSortedItems",value:function(){var e=this.state,t=e.sortColumn,a=e.sortAsc,n=this.props.items;if(!t)return n;var r=a?1:-1,l="number"===typeof n[0][t]?function(e,a){return r*(e[t]-a[t])}:function(e,a){return r*e[t].localeCompare(a[t])};return n.sort(l)}},{key:"render",value:function(){var e=this,t=this.getSortedItems(),a=this.props.config;return r.a.createElement("div",{className:"Datatable"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,Object.entries(a).map(function(t){var a=Object(k.a)(t,2),n=a[0],l=a[1];return r.a.createElement("th",{key:n,className:l.isSortable?"sortable-column":"",onClick:l.isSortable?function(){return e.handleHeaderClick(n)}:null},l.title)}))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",{key:e.name},Object.keys(a).map(function(t){return r.a.createElement("td",{key:t},a[t].render?a[t].render(e):e[t])}))}))))}}]),t}(r.a.Component),y=a(17),S=a(39),P=Object(S.a)(function(e){for(var t=e.location,a=e.count,n=(e.page,e.perPage),l=void 0===n?10:n,s=Math.ceil(a/l),c=[],o=0;o<s;o++)c.push(o+1);var i=function(e){var a=new URLSearchParams(t.search);return a.set("page",e),a.toString()};return console.log(t),r.a.createElement("div",{className:"Pagination"},c.map(function(e){return r.a.createElement(y.a,{key:e,to:{pathname:t.pathname,search:i(e)}},e)}))}),N=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return fetch("https://swapi.co/api"+e).then(function(e){return e.json()})},O=function(e){var t=e.page,a=void 0===t?1:t,n=e.search,r=void 0===n?"e":n,l=new URLSearchParams;return l.set("page",a),l.set("search",r),N("/people?".concat(l.toString()))},L={name:{title:"Name",isSortable:!0,isSearchable:!0,render:function(e){return r.a.createElement(o.a,{to:"/people/".concat(e.id)},e.name)}},mass:{title:"Mass",isSortable:!0},hair_color:{title:"Hair Color"},skin_color:{title:"Skin Color"},birth_year:{title:"Born",isSortable:!0},gender:{title:"Gender"},height:{title:"Height"},species:{title:"Species"},homeworld:{title:"Homeworld "}},C=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!1,people:[],config:L,page:0},a.loadPeople=Object(d.a)(g.a.mark(function e(){var t,n,r,l;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.page,e.next=3,O({page:t});case 3:n=e.sent,r=n.count,l=n.results,a.setState({people:l,count:r,isLoaded:!0});case 7:case"end":return e.stop()}},e)})),a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.updatePageFromURL()}},{key:"componentDidUpdate",value:function(){this.updatePageFromURL()}},{key:"updatePageFromURL",value:function(){var e=this.props.location,t=+new URLSearchParams(e.search).get("page")||1;t!==this.state.page&&this.setState({page:t},this.loadPeople)}},{key:"render",value:function(){var e=this.state,t=e.people,a=e.config,n=e.isLoaded,l=e.count,s=e.page;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"PeoplePage"),n?r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{count:l,page:s}),r.a.createElement(j,{items:t,config:a})):r.a.createElement("h1",null,"Loading..."))}}]),t}(r.a.Component),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"People Details Page"))},U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Star Wars")),r.a.createElement("nav",{className:"NavLink"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.a,{className:"NavLink-items",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.a,{className:"NavLink-items",to:"/people"},"People")))),r.a.createElement("section",null,r.a.createElement(i.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:p}),r.a.createElement(u.a,{exact:!0,path:"/people",component:C}),r.a.createElement(u.a,{exact:!0,path:"/people/:peopleId",component:A}))))};s.a.render(r.a.createElement(c.a,{basename:"/swapi"},r.a.createElement(U,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6ce93a47.chunk.js.map