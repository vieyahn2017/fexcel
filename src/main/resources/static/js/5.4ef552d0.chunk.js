(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{823:function(e,t,a){},827:function(e,t,a){"use strict";a.r(t);a(610);var n=a(606),o=(a(483),a(481)),l=(a(506),a(503)),i=(a(552),a(589)),s=(a(553),a(586)),c=(a(551),a(505)),r=a(508),p=a(509),u=a(546),h=a(510),m=a(547),d=(a(554),a(608)),g=(a(555),a(580)),f=(a(556),a(607)),w=a(6),E=a.n(w),F=(a(823),a(121)),S=a(60),b=a(16),v=a(59),y=f.a.Item,x=g.a.Content,C=d.a.info,k=d.a.error,P=d.a.success,I={md:24,lg:12,xl:8},L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).getFileList=function(){a.props.actions.getFileList()},a.loadPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;a.setState({pageNo:e},function(){a.props.form.validateFields(function(n,o){if(!n){var l={};l.pageNo=e,l.pageSize=t,l.tableName=o.fileId,a.props.actions.getTableCollumPage(l),a.setState({selectedRowKeys:[],selectedRows:[]})}})})},a.handlePageChange=function(e,t){a.loadPage(e,t)},a.handleShowSizeChange=function(e,t){a.loadPage(1,t)},a.handleSearch=function(e){e&&e.preventDefault(),a.loadPage()},a.batchUpdate=function(){a.state.selectedRowKeys;var e=a.props.form.getFieldValue,t=a.props.columnListPage,n=[],o=e("fileId");o&&""!==o?(t.forEach(function(t){var a=e("checkbox-group_".concat(t.id)),o=[];a.includes("can_search")?o.push(1):o.push(0),a.includes("can_edit")?o.push(1):o.push(0),a.includes("can_view")?o.push(1):o.push(0),n.push({id:t.id,value:o})}),a.props.actions.tableCollumManager({list:n,tableName:e("fileId")})):d.a.error({title:"Tips",content:"Please select the file!"})},a.showSuccess=function(e){P({title:"Success",content:e,okText:"Confirm",okType:"info",onOk:function(){a.loadPage()}})},a.showError=function(e){k({title:"Faild",content:e,okText:"Confirm",okType:"info"})},a.showInfo=function(e){C({title:"Tips",content:e,okText:"Confirm",okType:"info"})},a.changeSelectGroup=function(e){e&&""!==e&&a.loadPage()},a.resetForm=function(){a.setState({selectedRowKeys:[],selectedRows:[]}),a.props.actions.clearData(),a.props.form.resetFields()},a.state={selectedRowKeys:[],selectedRows:[],columnsObj:[{title:"\u5217\u540d(Column names)",key:"excel_collum_name",dataIndex:"excel_collum_name"},{title:"\u591a\u9009\u64cd\u4f5c(Multi Operation)",key:"isEdit",render:function(e,t){return E.a.createElement(f.a.Item,{label:""},a.props.form.getFieldDecorator("checkbox-group_".concat(t.id),{initialValue:t.initialChecked||[]})(E.a.createElement(c.a.Group,{style:{width:"100%"}},E.a.createElement(i.a,null,E.a.createElement(s.a,{span:8},E.a.createElement(c.a,{value:"can_edit"},"\u662f\u5426\u53ef\u7f16\u8f91(canEdit)")),E.a.createElement(s.a,{span:8},E.a.createElement(c.a,{value:"can_view"},"\u662f\u5426\u53ef\u5c55\u793a(canShow)")),E.a.createElement(s.a,{span:8},E.a.createElement(c.a,{value:"can_search"},"\u662f\u5426\u53ef\u641c\u7d22(canSearch)"))))))}}]},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getFileList(),this.resetForm()}},{key:"componentWillReceiveProps",value:function(e){this.props.operateSuccessFlag!==e.operateSuccessFlag&&!0===e.operateSuccessFlag&&(this.showSuccess(e.operateInfo),this.props.actions.resetState()),this.props.operateFailFlag!==e.operateFailFlag&&!0===e.operateFailFlag&&(this.showError(e.operateInfo),this.props.actions.resetState())}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,a=t.columnListPage,c=t.fileList,r=this.state,p=(r.selectedRowKeys,r.columnsObj),u=this.props.pageInfo,h={current:u.pageNum,total:u.total,pageSize:u.pageSize,showSizeChanger:!0,showQuickJumper:!0,onChange:this.handlePageChange,onShowSizeChange:this.handleShowSizeChange};return E.a.createElement("div",{className:"page-index"},E.a.createElement(x,null,E.a.createElement(f.a,{className:"ant-advanced-search-form",onSubmit:this.handleSearch},E.a.createElement(i.a,{gutter:24},E.a.createElement(s.a,{span:10,style:{height:70}},E.a.createElement(y,{labelCol:{span:6},wrapperCol:{span:18},label:"\u6587\u4ef6(File)"},e("fileId",{rules:[{required:!0,whitespace:!0,message:"Please select the file!"}]})(E.a.createElement(l.a,{showSearch:!0,optionFilterProp:"children",allowClear:!0,style:{width:400},placeholder:"\u8bf7\u9009\u62e9",onSelect:this.changeSelectGroup},c&&c.length>0&&c.map(function(e){return E.a.createElement(l.a.Option,{title:e.excelName,key:"tableFile_".concat(e.id),value:e.tableName},e.excelName)})))))),E.a.createElement(i.a,{gutter:24},E.a.createElement(s.a,Object.assign({},I,{style:{marginLeft:"100px",marginBottom:"15px"}}),E.a.createElement(o.a,{type:"default",onClick:this.resetForm},"\u91cd\u7f6e(Reset)")))),E.a.createElement("h3",{style:{margin:"0 0 5px",paddingTop:"25px",borderTop:"1px solid #ddd"}}),E.a.createElement(i.a,{gutter:24,style:{marginBottom:"10px"}},E.a.createElement(s.a,{style:{textAlign:"left"},span:12},E.a.createElement(o.a,{type:"primary",onClick:this.batchUpdate},"\u6279\u91cf\u66f4\u65b0(Batch Update)"),"\xa0\xa0\xa0\xa0",E.a.createElement(v.a,{to:"/admin"},"\u8df3\u8f6c\u4fe1\u606f\u7f16\u8f91(Jump Edit Info)")),E.a.createElement(s.a,{style:{textAlign:"right"},span:12},E.a.createElement("div",{className:"search-count"},"\u5171 ",h.total," \u6761"))),E.a.createElement(n.a,{scroll:{x:"max-content"},rowKey:"id",className:"table-list",dataSource:a,columns:p,pagination:h})))}}]),t}(w.PureComponent),O=f.a.create()(L);t.default=Object(F.connect)(function(e){var t=e.resumeReducer;return{resultList:t.resultList,operateSuccessFlag:t.operateSuccessFlag,operateFailFlag:t.operateFailFlag,operateInfo:t.operateInfo,tableList:t.tableList,fileList:t.fileList,refreshFileFlag:t.refreshFileFlag,columnListPage:t.columnListPage,pageInfo:t.pageInfo,loading:t.loading}},function(e){return{actions:Object(S.bindActionCreators)(b.a,e)}})(O)}}]);
//# sourceMappingURL=5.4ef552d0.chunk.js.map