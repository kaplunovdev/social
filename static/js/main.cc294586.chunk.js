(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(3),a=n(57),s=(n(1),n(37)),o=n.n(s),c=n(92),i=n(0),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(s?o.a.error:""),children:[Object(i.jsx)("div",{children:a}),s&&Object(i.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,Object(r.a)({name:t,component:a,placeholder:e,validate:n},s)),o]})}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),a=n(27),s=n(28),o=n(30),c=n(29),i=n(1),u=n.n(i),l=n(6),j=n(12),d=n(0),f=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(c.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),i}(u.a.Component);return Object(j.b)(f)(t)}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(72),a=n(3),s="SEND_MESSAGE",o={dialogs:[{id:1,name:"Andrey"},{id:2,name:"Kate"},{id:3,name:"Misha"},{id:4,name:"Richard"}],messages:[{id:1,message:"messages"},{id:2,message:"Yo"},{id:3,message:"My name is Alexandr"},{id:4,message:"Hi boy"}]},c=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:10,message:n}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(130),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"dca0bffd-93b4-4f32-8b36-9a7d9a4b6c8c"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e))},unFollowUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolute method/ Please profileAPI object"),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(e,t){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},132:function(e,t,n){e.exports={avatar:"Preloader_avatar__1O2Uh",follow:"Preloader_follow__2OyxW",selectedPage:"Preloader_selectedPage__1BHA2",pagination:"Preloader_pagination__1_i5Q",loadingSvg:"Preloader_loadingSvg__2t119",user:"Preloader_user__37XKn",info:"Preloader_info__jUxMq",name:"Preloader_name__1QmRK",country:"Preloader_country__1rLGY",showMore:"Preloader_showMore__lJRe_"}},136:function(e,t,n){"use strict";n.r(t),n.d(t,"withRouter",(function(){return R})),n.d(t,"ProfileContainer",(function(){return D}));var r=n(27),a=n(28),s=n(30),o=n(29),c=n(3),i=n(1),u=n.n(i),l=n(17),j=n(16),d=n.n(j),f=n(36),b=n(0),p=function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(i.useState)(e.status),o=Object(l.a)(s,2),c=o[0],u=o[1];Object(i.useEffect)((function(){u(e.status)}),[e.status]);return Object(b.jsxs)("div",{className:d.a.ProfileStatus,children:[!r&&Object(b.jsx)("div",{children:Object(b.jsxs)("span",{onDoubleClick:function(){a(!0)},children:[" \u0421\u0442\u0430\u0442\u0443\u0441: ",e.status||"Non status"]})}),r&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{onBlur:function(){a(!1),e.updateStatus(c)},autoFocus:!0,onChange:function(e){u(e.currentTarget.value)},value:c})})]})},h=(n(91),n(10)),O=n(128),g=Object(O.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.status,r=e.updateStatus,a=e.profile,s=e.aboutMe,o=e.error;return Object(b.jsxs)("form",{className:d.a.info,onSubmit:t,children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:d.a.buttonSave,children:"Save"})}),o&&Object(b.jsx)("div",{className:d.a.formSummaryError,children:o}),Object(b.jsxs)("div",{className:d.a.userName,children:["Full name: ",Object(h.c)("Full name","fullName",[],h.a)]}),Object(b.jsxs)("div",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:",Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})]}),Object(b.jsxs)("div",{children:["\u041c\u043e\u0438 \u0441\u043a\u0438\u043b\u043b\u044b:",Object(h.c)("My skills","lookingForAJobDescription",[],h.b)]}),Object(b.jsxs)("div",{children:["\u041e \u0441\u0435\u0431\u0435: ",s,Object(h.c)("About me","aboutMe",[],h.b)]}),Object(b.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(a.contacts).map((function(e){return Object(b.jsxs)("div",{className:d.a.contact,children:[Object(b.jsxs)("b",{children:[e,": "]}),Object(h.c)(e,"contacts."+e,[],h.a)]},e)})),Object(b.jsx)("p",{children:Object(b.jsx)(p,{status:n,updateStatus:r})})]})})),m=function(e){var t=e.profile,n=e.status,r=e.updateStatus,a=e.isOwner,s=e.goToEditMode;return Object(b.jsxs)("div",{className:d.a.info,children:[a&&Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:d.a.editBtn,onClick:s,children:"\u2710"})}),Object(b.jsx)("p",{className:d.a.userName,children:t.fullName}),Object(b.jsx)("p",{children:Object(b.jsx)(p,{status:n,updateStatus:r})}),Object(b.jsxs)("p",{children:["\u041e \u0441\u0435\u0431\u0435:",t.aboutMe||" \u041d\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0438"]}),Object(b.jsxs)("p",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:",t.lookingForAJob?" \u0414\u0430":" \u041d\u0435\u0442"]}),Object(b.jsxs)("p",{children:["\u041c\u043e\u0438 \u0441\u043a\u0438\u043b\u043b\u044b: ",t.lookingForAJobDescription]}),Object(b.jsxs)("p",{children:["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: ",Object.keys(t.contacts).map((function(e){return Object(b.jsx)(v,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},v=function(e){var t=e.contactTitle,n=e.contactValue;return Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:t}),": ",n]})},x=function(e){var t=e.profile,n=e.isOwner,r=e.savePhoto,a=e.saveProfile,s=e.status,o=e.updateStatus,c=Object(i.useState)(!1),u=Object(l.a)(c,2),j=u[0],p=u[1];if(!t)return Object(b.jsx)(f.a,{});return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:d.a.userCard,children:[Object(b.jsxs)("div",{className:d.a.avatar,children:[Object(b.jsx)("img",{src:t.photos&&t.photos.large,alt:""}),n&&Object(b.jsx)("input",{className:d.a.inputChangeImage,type:"file",onChange:function(e){r(e.target.files[0])}})]}),j?Object(b.jsx)(g,{profile:t,onSubmit:function(e){a(e).then((function(){p(!1)}))},initialValues:t}):Object(b.jsx)(m,{profile:t,isOwner:n,status:s,updateStatus:o,goToEditMode:function(){p(!0)}})]})})},_=n(12),P=n(31),w=n(97),S=n.n(w),y=n(74),C=n.n(y),N=function(e){return Object(b.jsxs)("div",{className:C.a.item,children:[Object(b.jsx)("img",{className:C.a.post_avatar,src:"https://cabinet.miem.hse.ru/public-api/user/7/avatar",alt:""}),e.message,Object(b.jsx)("div",{className:C.a.like,children:Object(b.jsx)("span",{children:"like"})})]})},k=n(92),E=n(41),U=(Object(E.a)(10),u.a.memo((function(e){console.log("RENDER");var t=e.posts.map((function(e){return Object(b.jsx)(N,{post:e.id,message:e.message,likeCount:e.likeCount},e.id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:S.a.input,children:Object(b.jsx)(F,{onSubmit:function(t){e.addNewPost(t.newPost)}})}),"My posts:",Object(b.jsx)("div",{className:S.a.list,children:t})]})}))),F=Object(O.a)({form:"myPostsForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)(k.a,{component:h.b,name:"newPost",placeholder:"Enter new post...",validate:[E.b]}),Object(b.jsx)("button",{children:"Add post"})]})})),I=U,A=Object(_.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addNewPost:function(t){e(Object(P.a)(t))}}}))(I),T=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),Object(b.jsx)(A,{})]})},M=n(6),L=n(126),z=n(9),R=function(e){return function(t){var n=Object(M.h)();return Object(b.jsx)(e,Object(c.a)(Object(c.a)({},t),{},{params:n}))}},D=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.params.userId;e||(e=this.props.authorizationUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.refreshProfile()}},{key:"render",value:function(){return Object(b.jsx)(T,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,isOwner:!this.props.params.userId,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),n}(u.a.Component);t.default=Object(z.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizationUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:P.d,getStatus:P.c,updateStatus:P.g,savePhoto:P.e,saveProfile:P.f}),R,L.a)(D)},16:function(e,t,n){e.exports={userCard:"ProfileInfo_userCard__3Fj9F",ProfileStatus:"ProfileInfo_ProfileStatus__8fmwU",editBtn:"ProfileInfo_editBtn__2EkcE",image_top:"ProfileInfo_image_top__3ddW5",avatar:"ProfileInfo_avatar__3xuFq",inputChangeImage:"ProfileInfo_inputChangeImage__2n_9V",buttonSave:"ProfileInfo_buttonSave__1M_Hn",info:"ProfileInfo_info__3dsdE",formSummaryError:"ProfileInfo_formSummaryError__3Pphw",userName:"ProfileInfo_userName__2XnM7"}},167:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},294:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,296)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},a=n(68),s=n.n(a),o=n(1),c=n.n(o),i=n(27),u=n(28),l=n(30),j=n(29),d=(n(167),n(23)),f=n.n(d),b=n(20),p=n(0),h=function(){return Object(p.jsxs)("nav",{className:f.a.nav,children:[Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/profile",className:function(e){return e.isActive?f.a.active:f.a.item},children:"Profile"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/dialogs",className:function(e){return e.isActive?f.a.active:f.a.item},children:"Messages"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/users",className:function(e){return e.isActive?f.a.active:f.a.item},children:"Users"})})]})},O=function(e){return Object(p.jsx)("div",{children:"News"})},g=function(e){return Object(p.jsx)("div",{children:"Settings"})},m=function(e){return Object(p.jsx)("div",{children:"Music"})},v=n(6),x=n(57),_=n(70),P=n(17),w=n(93),S=n.n(w),y=n(94),C=n.n(y),N=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.portionSize,c=void 0===s?10:s,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var j=Math.ceil(i/c),d=Object(o.useState)(1),f=Object(P.a)(d,2),b=f[0],h=f[1],O=(b-1)*c+1,g=b*c;return Object(p.jsxs)("div",{className:C()(S.a.pagination),children:[b>1&&Object(p.jsx)("button",{onClick:function(){return h(b-1)},children:"Prev"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(p.jsx)("span",{className:C()(Object(_.a)({},S.a.selectedPage,r===e)),onClick:function(){a(e)},children:e})})),j>b&&Object(p.jsx)("button",{onClick:function(){return h(b+1)},children:"Next"})]})},k=n(91),E=n(32),U=n.n(E),F=n(13),I=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,a=e.follow,s=e.toggleFollowingProgress;return Object(p.jsxs)("div",{className:U.a.user,children:[Object(p.jsxs)("div",{className:U.a.follow,children:[Object(p.jsx)("div",{className:U.a.avatar,children:Object(p.jsx)(b.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!==t.photos.small?t.photos.small:k.a,alt:"Loading"})})}),Object(p.jsx)("div",{children:t.following?Object(p.jsx)("button",{disabled:n,onClick:function(){s(!0,t.id),F.d.unFollowUser(t.id).then((function(e){0===e.data.resultCode&&r(t.id),s(!1,t.id)}))},children:"unFollow"}):Object(p.jsx)("button",{disabled:n,onClick:function(){s(!0,t.id),F.d.followUser(t.id).then((function(e){0===e.data.resultCode&&a(t.id),s(!1,t.id)}))},children:"Follow"})})]}),Object(p.jsxs)("div",{className:U.a.info,children:[Object(p.jsxs)("div",{className:U.a.name,children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:"user.status"})]}),Object(p.jsxs)("div",{className:U.a.country,children:[Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]})},A=function(e){var t=e.currentPage,n=e.totalItemsCount,r=e.pageSize,a=e.onPageChanged,s=e.users,o=Object(x.a)(e,["currentPage","totalItemsCount","pageSize","onPageChanged","users"]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:U.a.usersBlock,children:s.map((function(e){return Object(p.jsx)(I,{user:e,toggleFollowingProgress:o.toggleFollowingProgress,followingInProgress:o.followingInProgress,unFollow:o.unFollow,follow:o.follow})}))}),Object(p.jsx)(N,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r})]})},T=n(11),M=n.n(T),L=n(21),z=n(3),R=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(z.a)(Object(z.a)({},e),r):e}))},D="FOLLOW",B="UNFOLLOW",G="SET_USERS",H="SET_CURRENT_PAGE",W="SET_USERS_TOTAL_COUNT",X="TOGGLE_IS_FETCHING",J="TOGGLE_IS_FOLLOWING_PROGRESS",V={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:!1},K=function(e){return{type:H,currentPage:e}},Q=function(e){return{type:X,isFetching:e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(z.a)(Object(z.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!0})});case B:return Object(z.a)(Object(z.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!1})});case G:return Object(z.a)(Object(z.a)({},e),{},{users:t.users});case H:return Object(z.a)(Object(z.a)({},e),{},{currentPage:t.currentPage});case W:return Object(z.a)(Object(z.a)({},e),{},{totalUsersCount:t.count});case X:return Object(z.a)(Object(z.a)({},e),{},{isFetching:t.isFetching});case J:return Object(z.a)(Object(z.a)({},e),{},{followingInProgress:t.isFetching});default:return e}},Y=n(12),Z=n(36),$=n(9),ee=n(137),te=Object(ee.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ne=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},se=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ce=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(Z.a,{}):null,Object(p.jsx)(A,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followinginProgress})]})}}]),n}(c.a.Component),ie=Object($.d)(Object(Y.b)((function(e){return{users:te(e),pageSize:ne(e),totalUsersCount:re(e),currentPage:ae(e),isFetching:se(e),followingInProgress:oe(e)}}),{follow:function(e){return{type:D,userId:e}},unFollow:function(e){return{type:B,userId:e}},setCurrentPage:K,toggleFollowingProgress:function(e,t){return{type:J,isFetching:e,userId:t}},getUsers:function(e,t){return function(){var n=Object(L.a)(M.a.mark((function n(r){var a;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Q(!0)),r(K(e)),n.next=4,F.d.getUsers(e,t);case 4:a=n.sent,r(Q(!1)),r((o=a.items,{type:G,users:o})),r((s=a.totalCount,{type:W,count:s}));case 8:case"end":return n.stop()}var s,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ce),ue=n(136),le=n(75),je=n.n(le),de=function(e){return Object(p.jsxs)("header",{className:je.a.header,children:[Object(p.jsx)("div",{className:je.a.logo,children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:"https://logoeps.com/wp-content/uploads/2014/09/34405-linkedin-logo-icon-vector-icon-vector-eps.png",alt:""})})}),Object(p.jsx)("div",{className:je.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(b.b,{to:"/login",children:"Login"})})]})},fe=n(26),be="auth/SET_USER_DATA",pe="security/get-captcha-url/GET_CAPTCHA_URL_SUCCESS",he={usersId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Oe=function(e,t,n,r){return{type:be,payload:{userId:e,email:t,login:n,isAuth:r}}},ge=function(e){return{type:pe,payload:{captchaUrl:e}}},me=function(){return function(){var e=Object(L.a)(M.a.mark((function e(t){var n,r,a,s,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,o=r.email,t(Oe(a,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){return function(){var e=Object(L.a)(M.a.mark((function e(t){var n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(ge(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:case pe:return Object(z.a)(Object(z.a)({},e),t.payload);default:return e}},_e=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(de,Object(z.a)({},this.props))}}]),n}(c.a.Component),Pe=Object(Y.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){F.a.logout().then((function(t){0===t.data.resultCode&&e(Oe(null,null,null,!1))}))}}})(_e),we=n(128),Se=n(37),ye=n.n(Se),Ce=n(10),Ne=n(41),ke=Object(we.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(p.jsx)("div",{className:ye.a.loginWrapper,children:Object(p.jsx)("div",{className:ye.a.login,children:Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsxs)("div",{className:ye.a.inputs,children:[Object(Ce.c)("Email","email",[Ne.b],Ce.a),Object(Ce.c)("password","password",[Ne.b],Ce.a,{type:"password"}),Object(Ce.c)(null,"rememberMe",null,Ce.a,{type:"checkbox"},"Remembe me")]}),r&&Object(p.jsx)("img",{src:r,alt:""}),r&&Object(Ce.c)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b","captcha",[Ne.b],Ce.a,{},"",{}),n&&Object(p.jsx)("div",{className:ye.a.formSummaryError,children:n}),Object(p.jsx)("button",{type:"submit",children:"Login"})]})})})})),Ee=Object(Y.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(L.a)(M.a.mark((function a(s){var o,c;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,F.a.login(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?s(me()):(10===o.data.resultCode&&s(ve()),c=o.data.messages.length>0?o.data.messages[0]:"Some error",s(Object(fe.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(v.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Login"}),Object(p.jsx)(ke,{captchaUrl:e.captchaUrl,onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}})]})})),Ue="INITIALIZED_SUCCESS",Fe={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(z.a)(Object(z.a)({},e),{},{initialized:!0});default:return e}},Ae=n(31),Te=n(127),Me={sidebar:{}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return e},ze=n(135),Re=n(129),De=Object($.c)({profilePage:Ae.b,dialogsPage:Te.a,sidebar:Le,usersPage:q,auth:xe,form:Re.a,app:Ie}),Be=Object($.e)(De,Object($.d)(Object($.a)(ze.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));window.store=Be;var Ge=Be,He=c.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),We=c.a.lazy((function(){return Promise.resolve().then(n.bind(null,136))})),Xe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){if(!this.props.initialized)return Object(p.jsx)(Z.a,{});function e(){return Object(p.jsx)(v.a,{to:"/profile"})}return Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(Pe,{}),Object(p.jsxs)("div",{className:"center",children:[Object(p.jsx)(h,{}),Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsxs)(v.d,{children:[Object(p.jsx)(v.b,{path:"/",element:Object(p.jsx)(e,{})}),Object(p.jsx)(v.b,{path:"/dialogs",element:Object(p.jsx)(o.Suspense,{fallback:Object(p.jsx)(Z.a,{}),children:Object(p.jsx)(He,{})})}),Object(p.jsx)(v.b,{path:"/profile",element:Object(p.jsx)(o.Suspense,{fallback:Object(p.jsx)(Z.a,{}),children:Object(p.jsx)(We,{})})}),"}/>",Object(p.jsx)(v.b,{path:"/profile/:userId",element:Object(p.jsx)(We,{})}),Object(p.jsx)(v.b,{path:"/news",element:Object(p.jsx)(O,{})}),Object(p.jsx)(v.b,{path:"/music",element:Object(p.jsx)(m,{})}),Object(p.jsx)(v.b,{path:"/settings",element:Object(p.jsx)(g,{})}),Object(p.jsx)(v.b,{path:"/users",element:Object(p.jsx)(ie,{})}),Object(p.jsx)(v.b,{path:"/login",element:Object(p.jsx)(Ee,{})}),Object(p.jsx)(v.b,{path:"*",element:Object(p.jsx)("h1",{children:"404 NOT FOUND"})})]})})]})]})}}]),n}(c.a.Component),Je=Object($.d)(ue.withRouter,Object(Y.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){e({type:Ue})}))}}}))(Xe),Ve=function(e){return Object(p.jsx)(b.a,{children:Object(p.jsx)(Y.a,{store:Ge,children:Object(p.jsx)(Je,{})})})};s.a.render(Object(p.jsx)(Ve,{}),document.getElementById("root")),r()},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return _}));var r=n(11),a=n.n(r),s=n(21),o=n(72),c=n(3),i=n(13),u=n(26),l="ADD-POST",j="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",b="SAVE_PHOTO_SUCCESS",p={posts:[{id:1,message:"Hi, how are you?",likeCount:12},{id:2,message:"First post",likeCount:4},{id:3,message:"Second post",likeCount:24},{id:4,message:"Third post",likeCount:14}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:j,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(O(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photo:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(g(s)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:1,message:t.newPostText,likeCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n])});case j:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case f:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.idPost}))});case b:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}},32:function(e,t,n){e.exports={avatar:"Users_avatar__gHOlh",follow:"Users_follow__2SEXO",loadingSvg:"Users_loadingSvg__1G6RP",user:"Users_user__1dQYj",info:"Users_info__W1JxX",name:"Users_name__3Kys8",country:"Users_country__3q8XR",showMore:"Users_showMore__36Q_f",usersBlock:"Users_usersBlock__2PNX-"}},36:function(e,t,n){"use strict";var r=n(132),a=n.n(r),s=(n(1),n.p+"static/media/loading.971c05e8.svg"),o=n(0);t.a=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:a.a.loadingSvg,src:s,alt:"Loading"})})}},37:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S",loginWrapper:"FormsControls_loginWrapper__1yy0u",login:"FormsControls_login__1Kal5",inputs:"FormsControls_inputs__1QLGM"}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},74:function(e,t,n){e.exports={item:"Post_item__ihtu9",post_avatar:"Post_post_avatar__XWwi8",like:"Post_like__oViQh"}},75:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5",logo:"Header_logo__3_SJs"}},91:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar.ba3e9327.png"},93:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3SIki",pagination:"Paginator_pagination__1asUZ"}},97:function(e,t,n){e.exports={list:"MyPosts_list__3CHZW",input:"MyPosts_input__1BvRL"}}},[[294,1,2]]]);