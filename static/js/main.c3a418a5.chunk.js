(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{10:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(3),s=n(23),a=n(24),i=n(26),o=n(25),c=n(1),u=n.n(c),l=n(6),j=n(11),d=n(0),b=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(i.a)(c,t);var n=Object(o.a)(c);function c(){return Object(s.a)(this,c),n.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),c}(u.a.Component);return Object(j.b)(b)(t)}},124:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(71),s=n(3),a="SEND_MESSAGE",i={dialogs:[{id:1,name:"Andrey"},{id:2,name:"Kate"},{id:3,name:"Misha"},{id:4,name:"Richard"}],messages:[{id:1,message:"messages"},{id:2,message:"Yo"},{id:3,message:"My name is Alexandr"},{id:4,message:"Hi boy"}]},o=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.newMessageBody;return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:10,message:n}])});default:return e}}},129:function(e,t,n){e.exports={avatar:"Preloader_avatar__1O2Uh",follow:"Preloader_follow__2OyxW",selectedPage:"Preloader_selectedPage__1BHA2",pagination:"Preloader_pagination__1_i5Q",loadingSvg:"Preloader_loadingSvg__2t119",user:"Preloader_user__37XKn",info:"Preloader_info__jUxMq",name:"Preloader_name__1QmRK",country:"Preloader_country__1rLGY",showMore:"Preloader_showMore__lJRe_"}},133:function(e,t,n){"use strict";n.r(t),n.d(t,"withRouter",(function(){return L})),n.d(t,"ProfileContainer",(function(){return z}));var r=n(23),s=n(24),a=n(26),i=n(25),o=n(3),c=n(1),u=n.n(c),l=n(45),j=n.n(l),d=n(27),b=n(19),f=n(0),p=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(e.status),i=Object(b.a)(a,2),o=i[0],u=i[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return Object(f.jsxs)("div",{className:j.a.ProfileStatus,children:[!r&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"Non status"})}),r&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onBlur:function(){s(!1),e.updateStatus(o)},autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},value:o})})]})},h=function(e){var t=e.profile,n=e.status,r=e.updateStatus;return t?Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:j.a.image_top,children:Object(f.jsx)("img",{src:"https://www.orangesmile.com/ru/foto/usa/fodder120132.jpg",alt:"image"})}),Object(f.jsx)(p,{status:n,updateStatus:r}),Object(f.jsxs)("div",{className:j.a.userCard,children:[Object(f.jsx)("div",{className:j.a.avatar,children:Object(f.jsx)("img",{src:t.photos.large,alt:""})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:t.fullName}),Object(f.jsx)("p",{children:"props.profile.aboutMe"}),Object(f.jsx)("p",{children:"City: Taganrog"}),Object(f.jsx)("p",{children:"Education: Colledge"}),Object(f.jsx)("p",{children:t.contacts.instagram})]})]})]}):Object(f.jsx)(d.a,{})},O=n(11),g=n(33),m=n(91),v=n.n(m),x=n(72),_=n.n(x),P=function(e){return Object(f.jsxs)("div",{className:_.a.item,children:[Object(f.jsx)("img",{className:_.a.post_avatar,src:"https://cabinet.miem.hse.ru/public-api/user/7/avatar",alt:""}),e.message,Object(f.jsx)("div",{className:_.a.like,children:Object(f.jsx)("span",{children:"like"})})]})},w=n(89),S=n(125),y=n(46),C=n(29),N=Object(y.a)(10),I=u.a.memo((function(e){console.log("RENDER");var t=e.posts.map((function(e){return Object(f.jsx)(P,{post:e.id,message:e.message,likeCount:e.likeCount},e.id)}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:v.a.input,children:Object(f.jsx)(F,{onSubmit:function(t){e.addNewPost(t.newPost)}})}),"My posts:",Object(f.jsx)("div",{className:v.a.list,children:t})]})})),F=Object(S.a)({form:"myPostsForm"})((function(e){return Object(f.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(f.jsx)(w.a,{component:C.b,name:"newPost",placeholder:"Enter new post...",validate:[y.b,N]}),Object(f.jsx)("button",{children:"Add post"})]})})),E=I,k=Object(O.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addNewPost:function(t){e(Object(g.a)(t))}}}))(E),U=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(h,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(f.jsx)(k,{})]})},A=n(6),T=n(123),M=n(9),L=function(e){return function(t){var n=Object(A.h)();return Object(f.jsx)(e,Object(o.a)(Object(o.a)({},t),{},{params:n}))}},z=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.params.userId;e||(e=this.props.authorizationUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(U,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(u.a.Component);t.default=Object(M.d)(Object(O.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizationUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:g.d,getStatus:g.c,updateStatus:g.e}),L,T.a)(z)},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(127),s=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"dca0bffd-93b4-4f32-8b36-9a7d9a4b6c8c"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return s.post("follow/".concat(e))},unFollowUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return s.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolute method/ Please profileAPI object"),i.getProfile(e)}},i={getProfile:function(e){return s.get("profile/"+e)},getStatus:function(e){return s.get("profile/status/"+e)},updateStatus:function(e){return s.put("profile/status",{status:e})}},o={me:function(){return s.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(e,t){return s.delete("auth/login")}}},164:function(e,t,n){},27:function(e,t,n){"use strict";var r=n(129),s=n.n(r),a=(n(1),n.p+"static/media/loading.971c05e8.svg"),i=n(0);t.a=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:s.a.loadingSvg,src:a,alt:"Loading"})})}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(3),s=n(57),a=(n(1),n(54)),i=n.n(a),o=n(89),c=n(0),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=e.children,a=n&&r;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:""),children:[Object(c.jsx)("div",{children:s}),a&&Object(c.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e,t,n,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(c.jsxs)("div",{children:[Object(c.jsx)(o.a,Object(r.a)({name:t,component:s,placeholder:e,validate:n},a)),i]})}},291:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,293)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))},s=n(68),a=n.n(s),i=n(1),o=n.n(i),c=n(23),u=n(24),l=n(26),j=n(25),d=(n(164),n(10)),b=n.n(d),f=n(12),p=n(0),h=function(){return Object(p.jsxs)("nav",{className:b.a.nav,children:[Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/profile",className:function(e){return e.isActive?b.a.active:b.a.item},children:"Profile"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/dialogs",className:function(e){return e.isActive?b.a.active:b.a.item},children:"Messages"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/news",className:function(e){return e.isActive?b.a.active:b.a.item},children:"News"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/music",className:function(e){return e.isActive?b.a.active:b.a.item},children:"Music"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/settings",className:function(e){return e.isActive?b.a.active:b.a.item},children:"Settings"})}),Object(p.jsx)("div",{className:b.a.item,children:Object(p.jsx)(f.b,{to:"/users",className:function(e){return e.isActive?b.a.active:b.a.item},children:"Users"})})]})},O=function(e){return Object(p.jsx)("div",{children:"News"})},g=function(e){return Object(p.jsx)("div",{children:"Settings"})},m=function(e){return Object(p.jsx)("div",{children:"Music"})},v=n(6),x=n(57),_=n(19),P=n(90),w=n.n(P),S=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,a=e.portionSize,o=void 0===a?10:a,c=Math.ceil(t/n),u=[],l=1;l<=c;l++)u.push(l);var j=Math.ceil(c/o),d=Object(i.useState)(1),b=Object(_.a)(d,2),f=b[0],h=b[1],O=(f-1)*o+1,g=f*o;return Object(p.jsxs)("div",{className:w.a.pagination,children:[f>1&&Object(p.jsx)("button",{onClick:function(){return h(f-1)},children:"Prev"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(p.jsx)("span",{className:r===e&&w.a.selectedPage,onClick:function(){s(e)},children:e})})),j>f&&Object(p.jsx)("button",{onClick:function(){return h(f+1)},children:"Next"})]})},y=n.p+"static/media/avatar.ba3e9327.png",C=n(34),N=n.n(C),I=n(16),F=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,s=e.follow,a=e.toggleFollowingProgress;return Object(p.jsxs)("div",{className:N.a.user,children:[Object(p.jsxs)("div",{className:N.a.follow,children:[Object(p.jsx)("div",{className:N.a.avatar,children:Object(p.jsx)(f.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!==t.photos.small?t.photos.small:y,alt:"Loading"})})}),Object(p.jsx)("div",{children:t.following?Object(p.jsx)("button",{disabled:n,onClick:function(){a(!0,t.id),I.c.unFollowUser(t.id).then((function(e){0===e.data.resultCode&&r(t.id),a(!1,t.id)}))},children:"unFollow"}):Object(p.jsx)("button",{disabled:n,onClick:function(){a(!0,t.id),I.c.followUser(t.id).then((function(e){0===e.data.resultCode&&s(t.id),a(!1,t.id)}))},children:"Follow"})})]}),Object(p.jsxs)("div",{className:N.a.info,children:[Object(p.jsxs)("div",{className:N.a.name,children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:"user.status"})]}),Object(p.jsxs)("div",{className:N.a.country,children:[Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]}),Object(p.jsx)("div",{className:N.a.showMore,children:Object(p.jsx)("button",{children:"Show more"})})]})},E=function(e){var t=e.currentPage,n=e.totalItemsCount,r=e.pageSize,s=e.onPageChanged,a=e.users,i=Object(x.a)(e,["currentPage","totalItemsCount","pageSize","onPageChanged","users"]);return Object(p.jsxs)("div",{children:[Object(p.jsx)(S,{currentPage:t,onPageChanged:s,totalItemsCount:n,pageSize:r}),Object(p.jsx)("div",{children:a.map((function(e){return Object(p.jsx)(F,{user:e,toggleFollowingProgress:i.toggleFollowingProgress,followingInProgress:i.followingInProgress,unFollow:i.unFollow,follow:i.follow})}))})]})},k=n(15),U=n.n(k),A=n(28),T=n(3),M=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(T.a)(Object(T.a)({},e),r):e}))},L="FOLLOW",z="UNFOLLOW",R="SET_USERS",D="SET_CURRENT_PAGE",G="SET_USERS_TOTAL_COUNT",B="TOGGLE_IS_FETCHING",W="TOGGLE_IS_FOLLOWING_PROGRESS",X={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:!1},H=function(e){return{type:D,currentPage:e}},K=function(e){return{type:B,isFetching:e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(T.a)(Object(T.a)({},e),{},{users:M(e.users,t.userId,"id",{followed:!0})});case z:return Object(T.a)(Object(T.a)({},e),{},{users:M(e.users,t.userId,"id",{followed:!1})});case R:return Object(T.a)(Object(T.a)({},e),{},{users:t.users});case D:return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.currentPage});case G:return Object(T.a)(Object(T.a)({},e),{},{totalUsersCount:t.count});case B:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});case W:return Object(T.a)(Object(T.a)({},e),{},{followingInProgress:t.isFetching});default:return e}},q=n(11),J=n(27),V=n(9),Y=n(134),Z=Object(Y.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),$=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},re=function(e){return e.usersPage.followingInProgress},se=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(J.a,{}):null,Object(p.jsx)(E,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followinginProgress})]})}}]),n}(o.a.Component),ae=Object(V.d)(Object(q.b)((function(e){return{users:Z(e),pageSize:$(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:re(e)}}),{follow:function(e){return{type:L,userId:e}},unFollow:function(e){return{type:z,userId:e}},setCurrentPage:H,toggleFollowingProgress:function(e,t){return{type:W,isFetching:e,userId:t}},getUsers:function(e,t){return function(){var n=Object(A.a)(U.a.mark((function n(r){var s;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(K(!0)),r(H(e)),n.next=4,I.c.getUsers(e,t);case 4:s=n.sent,r(K(!1)),r((i=s.items,{type:R,users:i})),r((a=s.totalCount,{type:G,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(se),ie=n(133),oe=n(94),ce=n.n(oe),ue=function(e){return Object(p.jsxs)("header",{className:ce.a.header,children:[Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:"https://logoeps.com/wp-content/uploads/2014/09/34405-linkedin-logo-icon-vector-icon-vector-eps.png",alt:""})}),Object(p.jsx)("div",{className:ce.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(f.b,{to:"/login",children:"Login"})})]})},le=n(37),je="auth/SET_USER_DATA",de={usersId:null,email:null,login:null,isAuth:!1},be=function(e,t,n,r){return{type:je,payload:{userId:e,email:t,login:n,isAuth:r}}},fe=function(){return function(){var e=Object(A.a)(U.a.mark((function e(t){var n,r,s,a,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.login,i=r.email,t(be(s,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(T.a)(Object(T.a)({},e),t.payload);default:return e}},he=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(ue,Object(T.a)({},this.props))}}]),n}(o.a.Component),Oe=Object(q.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){I.a.logout().then((function(t){0===t.data.resultCode&&e(be(null,null,null,!1))}))}}})(he),ge=n(125),me=n(54),ve=n.n(me),xe=n(29),_e=n(46),Pe=Object(ge.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsxs)("div",{children:[Object(xe.c)("Email","email",[_e.b],xe.a),Object(xe.c)("password","password",[_e.b],xe.a,{type:"password"}),Object(xe.c)(null,"rememberMe",null,xe.a,{type:"checkbox"},"rememberMe")]}),n&&Object(p.jsx)("div",{className:ve.a.formSummaryError,children:n}),Object(p.jsx)("button",{type:"submit",children:"Login"})]})})})),we=Object(q.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(A.a)(U.a.mark((function r(s){var a,i;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I.a.login(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(fe()):(i=a.data.messages.length>0?a.data.messages[0]:"Some error",s(Object(le.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(v.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Login"}),Object(p.jsx)(Pe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Se="INITIALIZED_SUCCESS",ye={initialized:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(T.a)(Object(T.a)({},e),{},{initialized:!0});default:return e}},Ne=n(33),Ie=n(124),Fe={sidebar:{}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},ke=n(132),Ue=n(126),Ae=Object(V.c)({profilePage:Ne.b,dialogsPage:Ie.a,sidebar:Ee,usersPage:Q,auth:pe,form:Ue.a,app:Ce}),Te=Object(V.e)(Ae,Object(V.d)(Object(V.a)(ke.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));window.store=Te;var Me=Te,Le=o.a.lazy((function(){return n.e(3).then(n.bind(null,294))})),ze=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,133))})),Re=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(Oe,{}),Object(p.jsx)(h,{}),Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsxs)(v.d,{children:[Object(p.jsx)(v.b,{path:"/dialogs",element:Object(p.jsx)(i.Suspense,{fallback:Object(p.jsx)(J.a,{}),children:Object(p.jsx)(Le,{})})}),Object(p.jsx)(v.b,{path:"/profile",element:Object(p.jsx)(i.Suspense,{fallback:Object(p.jsx)(J.a,{}),children:Object(p.jsx)(ze,{})})}),"}/>",Object(p.jsx)(v.b,{path:"/profile/:userId",element:Object(p.jsx)(ze,{})}),Object(p.jsx)(v.b,{path:"/news",element:Object(p.jsx)(O,{})}),Object(p.jsx)(v.b,{path:"/music",element:Object(p.jsx)(m,{})}),Object(p.jsx)(v.b,{path:"/settings",element:Object(p.jsx)(g,{})}),Object(p.jsx)(v.b,{path:"/users",element:Object(p.jsx)(ae,{})}),Object(p.jsx)(v.b,{path:"/login",element:Object(p.jsx)(we,{})})]})})]}):Object(p.jsx)(J.a,{})}}]),n}(o.a.Component),De=Object(V.d)(ie.withRouter,Object(q.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(fe());Promise.all([t]).then((function(){e({type:Se})}))}}}))(Re),Ge=function(e){return Object(p.jsx)(f.a,{children:Object(p.jsx)(q.a,{store:Me,children:Object(p.jsx)(De,{})})})};a.a.render(Object(p.jsx)(Ge,{}),document.getElementById("root")),r()},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(15),s=n.n(r),a=n(28),i=n(71),o=n(3),c=n(16),u="ADD-POST",l="SET_USER_PROFILE",j="SET_STATUS",d="DELETE_POST",b={posts:[{id:1,message:"Hi, how are you?",likeCount:12},{id:2,message:"First post",likeCount:4},{id:3,message:"Second post",likeCount:24},{id:4,message:"Third post",likeCount:14}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},p=function(e){return{type:j,status:e}},h=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:r=t.sent,n((s=r.data,{type:l,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:1,message:t.newPostText,likeCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case l:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case j:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case d:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.idPost}))});default:return e}}},34:function(e,t,n){e.exports={avatar:"Users_avatar__gHOlh",follow:"Users_follow__2SEXO",loadingSvg:"Users_loadingSvg__1G6RP",user:"Users_user__1dQYj",info:"Users_info__W1JxX",name:"Users_name__3Kys8",country:"Users_country__3q8XR",showMore:"Users_showMore__36Q_f"}},45:function(e,t,n){e.exports={userCard:"ProfileInfo_userCard__3Fj9F",content:"ProfileInfo_content__2Io2G",ProfileStatus:"ProfileInfo_ProfileStatus__8fmwU",image_top:"ProfileInfo_image_top__3ddW5",avatar:"ProfileInfo_avatar__3xuFq"}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},54:function(e,t,n){e.exports={"form-control":"FormsControls_form-control__15Wn3",formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},72:function(e,t,n){e.exports={item:"Post_item__ihtu9",post_avatar:"Post_post_avatar__XWwi8",like:"Post_like__oViQh"}},90:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3SIki",pagination:"Paginator_pagination__1asUZ"}},91:function(e,t,n){e.exports={list:"MyPosts_list__3CHZW",input:"MyPosts_input__1BvRL"}},94:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}}},[[291,1,2]]]);
//# sourceMappingURL=main.c3a418a5.chunk.js.map