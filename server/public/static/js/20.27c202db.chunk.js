(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[20],{1369:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(21),i=a(23),c=a(22),o=a(24),s=a(0),l=a.n(s),u=a(56),p=(a(434),a(433)),d=(a(540),a(538)),m=(a(199),a(112)),f=(a(86),a(33)),g=a(34),h=a.n(g),b=(a(110),a(41)),v=a(58),y=(a(638),a(760)),E=(a(483),a(480)),O=a(75),j=a(137),w=E.a.Option,C=y.a.Text,k=2,x={marginLeft:"0.5rem"},S=function(e){function t(){var e;Object(n.a)(this,t),(e=Object(i.a)(this,Object(c.a)(t).call(this))).state={pageNum:1,selectValue:"1",productListSource:[],total:0,btnLoading:!1,tableLoading:!1,inputPlaceholder:"\u8bf7\u8f93\u5165\u540d\u79f0",inputValue:"",loading:!1},e.\u4e0a\u67b6_\u4e0b\u67b6=function(){var t=Object(v.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),n={productId:a._id},a.status?n.status=0:n.status=1,t.next=5,Object(O.n)(n);case 5:0===t.sent.status&&(e.setState({loading:!1}),b.a.success("\u66f4\u65b0\u6210\u529f\uff01"),e.getProductList(e.pageNum));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.productUpdate=function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.history.push("/product/add",a);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.productDelete=function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.i)({_id:a._id});case 2:0===t.sent.status&&e.getProductList(1);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.productDetail=function(t){e.props.history.push({pathname:"/product/detail",state:t})},e.selectHandleChange=function(t){e.setState({selectValue:t,inputPlaceholder:"1"===t?"\u8bf7\u8f93\u5165\u540d\u79f0":"\u8bf7\u8f93\u5165\u63cf\u8ff0",inputValue:""})},e.inputValue=function(t){e.setState({inputValue:t.target.value})},e.addProductBtn=function(t){t.stopPropagation(),e.props.history.push("/product/add")},e.getProductList=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r,i,c,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state.inputValue,e.pageNum=a,e.setState({tableLoading:!0}),!n){t.next=10;break}return e.setState({btnLoading:!0}),t.next=7,Object(O.q)({pageNum:a,pageSize:k});case 7:r=t.sent,t.next=13;break;case 10:return t.next=12,Object(O.m)({pageNum:a,pageSize:k});case 12:r=t.sent;case 13:i=r.data,c=i.total,o=i.list,0===r.status&&o.length>0&&(o.forEach((function(e){e.price=Object(j.a)(e.price)})),e.setState({total:c,productListSource:o,tableLoading:!1,btnLoading:!1}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var a=e.state.loading;return e.columns=[{title:"\u5546\u54c1\u540d\u79f0",dataIndex:"name"},{title:"\u4ef7\u683c",dataIndex:"price",render:function(e){return"\uffe5".concat(e)}},{title:"\u5546\u54c1\u63cf\u8ff0",dataIndex:"desc"},{title:"\u72b6\u6001",render:function(t){return l.a.createElement("span",null,l.a.createElement(C,{type:t.status?"success":"danger"},t.status?"\u5728\u552e":"\u4e0b\u67b6"),l.a.createElement(f.a,{size:"small",style:x,loading:a,onClick:function(){return e.\u4e0a\u67b6_\u4e0b\u67b6(t)},type:"primary"},t.status?"\u4e0b\u67b6":"\u4e0a\u67b6"))}},{title:"\u64cd\u4f5c",render:function(t){return l.a.createElement("span",null,l.a.createElement(f.a,{type:"link",onClick:function(){return e.productDetail(t)}},"\u8be6\u60c5"),l.a.createElement(f.a,{type:"link",onClick:function(){return e.productUpdate(t)}},"\u4fee\u6539"),l.a.createElement(f.a,{type:"link",loading:e.state.btnLoading,onClick:function(){return e.productDelete(t)}},"\u5220\u9664"))}}],e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getProductList(1)}},{key:"render",value:function(){var e=this,t=this.state,a=t.tableLoading,n=t.productListSource,r=t.total,i=t.btnLoading,c=t.inputPlaceholder,o=t.inputValue;return l.a.createElement(p.a,{title:l.a.createElement("div",null,l.a.createElement(E.a,{defaultValue:"1",style:{width:"7rem"},onChange:e.selectHandleChange},l.a.createElement(w,{value:"1"},"\u6309\u540d\u79f0\u641c\u7d22"),l.a.createElement(w,{value:"2"},"\u6309\u63cf\u8ff0\u641c\u7d22")),l.a.createElement(m.a,{style:{width:200,marginLeft:6,marginRight:6},placeholder:c,onChange:e.inputValue,value:o}),l.a.createElement(f.a,{type:"primary",style:{transform:"scale(1)"},onClick:function(){return e.getProductList(1)},loading:i},"\u641c\u7d22")),extra:l.a.createElement("span",null,l.a.createElement(f.a,{icon:"plus",type:"primary",onClick:e.addProductBtn},"\u6dfb\u52a0\u5546\u54c1"))},l.a.createElement(d.a,{size:"small",dataSource:n,columns:this.columns,rowKey:"_id",bordered:!0,loading:a,pagination:{current:this.pageNum,total:r,defaultPageSize:k,showQuickJumper:!0,onChange:this.getProductList}}))}}]),t}(s.Component),L=Object(u.g)(S),I=(a(888),a(1356)),P=(a(200),a(66)),D=(a(145),a(6)),V=a(609),R=a(486),T=(a(203),a(146)),_=(a(1362),a(1353)),N=a(153);function B(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}var z=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={previewVisible:!1,previewImage:"",fileList:[]},a.handleCancel=function(){return a.setState({previewVisible:!1})},a.handlePreview=function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,B(t.originFileObj);case 3:t.preview=e.sent;case 4:a.setState({previewImage:t.url||t.preview,previewVisible:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getImgs=function(){return a.state.fileList.map((function(e){return e.name}))},a.handleChange=function(){var e=Object(v.a)(h.a.mark((function e(t){var n,r,i,c,o,s,l,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.file,r=t.fileList,t.event,i=n.response,"done"!==(c=n.status)){e.next=10;break}o=i.data,s=o.name,l=o.url,(u=r[r.length-1]).name=s,u.url=l,e.next=15;break;case 10:if("removed"!==c){e.next=15;break}return e.next=13,Object(O.g)({name:n.name});case 13:0===e.sent.status&&b.a.success("\u5220\u9664\u6210\u529f\uff01");case 15:a.setState({fileList:r});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var r=a.props.imgSrc,o=void 0===r?[]:r;if(o.length){var s=o.map((function(e,t){return{uid:-t,name:e,status:"done",url:N.imgUrl+e}}));a.state={fileList:s}}return a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.previewVisible,a=e.previewImage,n=e.fileList,r=l.a.createElement("div",null,l.a.createElement(D.a,{type:"plus"}),l.a.createElement("div",{className:"ant-upload-text"},"\u56fe\u7247\u4e0a\u4f20"));return l.a.createElement("div",{className:"clearfix"},l.a.createElement(_.a,{accept:"image/*",action:"/manage/img/upload",listType:"picture-card",name:"image",fileList:n,onPreview:this.handlePreview,onChange:this.handleChange,showUploadList:!0},n.length>=4?null:r),l.a.createElement(T.a,{visible:t,footer:null,onCancel:this.handleCancel},l.a.createElement("img",{alt:"upload_img",style:{width:"100%"},src:a})))}}]),t}(l.a.Component),F=a(557),U=a(1033),q=a(1034),H=a.n(q),J=a(1035),A=a.n(J),M=(a(1036),function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={editorState:F.EditorState.createEmpty()},a.onEditorStateChange=function(e){a.setState({editorState:e})},a.getInputData=function(){var e=a.state.editorState;return H()(Object(F.convertToRaw)(e.getCurrentContent()))},a.uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","/manage/img/upload");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText),a=e.status,r=e.data;0===a&&t({data:{link:r.url}})})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))};var r=a.props.preDetail;if(!r)return Object(i.a)(a);var o=A()(r);if(o){var s=F.ContentState.createFromBlockArray(o.contentBlocks),l=F.EditorState.createWithContent(s);a.state={editorState:l}}return a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.editorState;return l.a.createElement("div",null,l.a.createElement(U.Editor,{editorState:e,editorStyle:{border:"1px solid rgba(0, 0, 0, 0.65)",minHeight:"100px",lineHeight:"0.1rem",textIndent:"2rem"},onEditorStateChange:this.onEditorStateChange,toolbar:{image:{uploadCallback:this.uploadImageCallBack,alt:{present:!0,mandatory:!0}}}}))}}]),t}(s.Component));function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=m.a.TextArea,X=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={loading:!1,productClassList:[],cardTitle:"\u6dfb\u52a0\u5546\u54c1"},a.handleSubmit=function(e){e.preventDefault();var t=a.myRef.current.getImgs(),n=a.richEditTextRef.current.getInputData();a.props.form.validateFields(function(){var e=Object(v.a)(h.a.mark((function e(r,i){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=7;break}return a.setState({loading:!0}),c={categoryId:i.prdCategory[1]?i.prdCategory[1]:i.prdCategory[0],pCategoryId:i.prdCategory[0],name:i.prdName,price:i.prdPrice,desc:i.prdDesc,status:1,imgs:t,detail:n},e.next=5,a.isUpdate?Object(O.o)(Q({},c,{_id:a.oldData._id})):Object(O.b)(c);case 5:0===e.sent.status&&(a.setState({loading:!1}),b.a.success("\u6dfb\u52a0\u6210\u529f\uff01"),a.props.location.state=null,a.props.form.resetFields());case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},a.getProductClass=function(){var e=Object(v.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.f)({parentId:t});case 2:if(n=e.sent,r=n.data,"0"!==t){e.next=7;break}return a.initSelectOptions(r),e.abrupt("return");case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.productLoadData=function(){var e=Object(v.a)(h.a.mark((function e(t){var n,r,i,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t[t.length-1]).loading=!0,r=n.value,e.next=5,a.getProductClass(r);case 5:i=e.sent,n.loading=!1,i&&i.length>0?(c=i.map((function(e){return{value:e._id,label:e.name,isLeaf:!0}})),n.children=c):n.isLeaf=!0,a.setState({productClassList:Object(V.a)(a.state.productClassList)});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.initSelectOptions=function(){var e=Object(v.a)(h.a.mark((function e(t){var n,r,i,c,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.map((function(e){return{value:e._id,label:e.name,isLeaf:!1}})),r=a.oldData,i=r.categoryId,c=r.pCategoryId,!i){e.next=9;break}return e.next=5,a.getProductClass(c);case 5:o=e.sent,s=o.map((function(e){return{value:e._id,label:e.name,isLeaf:!1}})),n.find((function(e){return e.value===c})).children=s;case 9:a.setState({productClassList:n});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.priceValidator=function(e,t,a){if(1*t>=0)return a();a("\u4ef7\u683c\u5e94\u5927\u4e8e0")},a.myRef=l.a.createRef(),a.richEditTextRef=l.a.createRef();var r=a.props.location.state;return a.title=l.a.createElement("span",null,l.a.createElement(D.a,{type:"arrow-left",onClick:function(){a.props.history.goBack()},style:{fontSize:20,marginRight:4}}),r?"\u4fee\u6539\u5546\u54c1":"\u6dfb\u52a0\u5546\u54c1"),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getProductClass("0")}},{key:"render",value:function(){var e=[],t=this.props.location.state||{};this.oldData=t;var a=t.categoryId,n=t.pCategoryId,r=t.imgs,i=t.detail;this.isUpdate=!!n,a?e.push(n,a):n&&e.push(n);var c=this.state,o=c.productClassList,s=c.loading,u=this.props.form.getFieldDecorator;return l.a.createElement(p.a,{title:this.title},l.a.createElement(P.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:2}},wrapperCol:{xs:{span:24},sm:{span:18}}},{onSubmit:this.handleSubmit}),l.a.createElement(P.a.Item,{label:"\u5546\u54c1\u540d\u79f0"},u("prdName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0!"}],initialValue:t.name})(l.a.createElement(m.a,{placeholder:"\u5546\u54c1\u540d\u79f0"}))),l.a.createElement(P.a.Item,{label:"\u5546\u54c1\u63cf\u8ff0"},u("prdDesc",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u63cf\u8ff0!"}],initialValue:t.desc})(l.a.createElement(W,{placeholder:"\u5546\u54c1\u63cf\u8ff0",autosize:!0}))),l.a.createElement(P.a.Item,{label:"\u5546\u54c1\u4ef7\u683c"},u("prdPrice",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ef7\u683c\uff01"},{validator:this.priceValidator}],initialValue:t.price})(l.a.createElement(m.a,{prefix:"\uffe5",placeholder:"\u5546\u54c1\u4ef7\u683c",suffix:"\u5143"}))),l.a.createElement(P.a.Item,{label:"\u5546\u54c1\u5206\u7c7b"},u("prdCategory",{initialValue:e,rules:[{type:"array",required:!0,message:"\u8bf7\u8f93\u5165\u9009\u62e9\u5206\u7c7b!"}]})(l.a.createElement(I.a,{placeholder:"\u8bf7\u9009\u62e9\u5546\u54c1\u5206\u7c7b",options:o,loadData:this.productLoadData}))),l.a.createElement(P.a.Item,{label:"\u5546\u54c1\u56fe\u7247"},l.a.createElement(z,{imgSrc:r,ref:this.myRef})),l.a.createElement(P.a.Item,{label:"\u5546\u54c1\u8be6\u60c5"},l.a.createElement(M,{preDetail:i,ref:this.richEditTextRef})),l.a.createElement(P.a.Item,{wrapperCol:{sm:{span:10,offset:10}}},l.a.createElement(f.a,{type:"primary",htmlType:"submit",loading:s},"\u589e\u52a0"))))}}]),t}(s.Component),G=P.a.create({name:"normal_login"})(Object(u.g)(X)),Y=(a(1038),a(1360)),Z=y.a.Text,$={fontSize:15,marginRight:"1rem"},ee=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(c.a)(t).call(this))).state={},e.goBack=function(t){e.props.history.goBack()},e.title=l.a.createElement(D.a,{type:"arrow-left",onClick:e.goBack,style:{fontSize:20}}),e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=["\u5546\u54c1\u540d\u79f0","\u5546\u54c1\u63cf\u8ff0","\u5546\u54c1\u4ef7\u683c","\u6240\u5c5e\u5206\u7c7b","\u5546\u54c1\u56fe\u7247","\u5546\u54c1\u8be6\u60c5"];return l.a.createElement(p.a,{title:this.title},l.a.createElement(Y.a,{header:l.a.createElement("div",null,"\u5546\u54c1\u8be6\u60c5"),bordered:!0},l.a.createElement(Y.a.Item,null,l.a.createElement(Z,{style:$},t[0],":"),e.name),l.a.createElement(Y.a.Item,null,l.a.createElement(Z,{style:$},t[1],":"),e.desc),l.a.createElement(Y.a.Item,null,l.a.createElement(Z,{style:$},t[2],":"),e.price),l.a.createElement(Y.a.Item,null,l.a.createElement(Z,{style:$},t[3],":"),e.categoryId,"-",e.pCategoryId),l.a.createElement(Y.a.Item,null,l.a.createElement(Z,{style:$},t[4],":"),"\u56fe\u7247"),l.a.createElement(Y.a.Item,null,l.a.createElement(Z,{style:$},t[5],":"),e.detail)))}}]),t}(s.Component),te=Object(u.g)(ee);a.d(t,"default",(function(){return ae}));var ae=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/product",component:L}),l.a.createElement(u.b,{path:"/product/add",component:G}),l.a.createElement(u.b,{path:"/product/detail",component:te}),l.a.createElement(u.a,{to:"/product"}))}}]),t}(s.Component)}}]);