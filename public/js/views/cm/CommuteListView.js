/**
 * 근태 자료 관리
 */
define([
        'jquery',
        'underscore',
        'backbone',
        'util',
        'schemas',
        'grid',
        'dialog',
        'datatables',
        'moment',
        'core/BaseView',
        'data/code',
        'text!templates/default/head.html',
        'text!templates/default/content.html',
        'text!templates/default/right.html',
        'text!templates/default/button.html',
        'text!templates/layout/default.html',      
        'text!templates/default/row.html',
        'text!templates/default/datepickerRange.html',
        'text!templates/default/rowbuttoncontainer.html',
        'text!templates/default/rowbutton.html',
        'models/sm/SessionModel',
        'models/cm/CommuteModel',
        'collection/cm/CommuteCollection',
        'views/cm/popup/CommuteUpdatePopupView',
        'views/cm/popup/CommentPopupView',
        'views/cm/popup/ChangeHistoryPopupView',
        'views/component/ProgressbarView',
        'text!templates/cm/searchFormTemplate.html',
        'text!templates/cm/btnCommentAddTemplate.html'
], function(
		$, _, Backbone, Util, Schemas, Grid, Dialog, Datatables, Moment,BaseView, Code,
		HeadHTML, ContentHTML, RightBoxHTML, ButtonHTML, LayoutHTML, RowHTML, DatePickerHTML, RowButtonContainerHTML, RowButtonHTML,
		SessionModel, CommuteModel, CommuteCollection,
		CommuteUpdatePopupView, CommentPopupView, ChangeHistoryPopupView, ProgressbarView,
		searchFormTemplate, btnCommentAddTemplate){

	
	// 출퇴근 시간 셀 생성
	function _createHistoryCell(cellType, cellData, change) {
		if (cellData[change]){
			var data = JSON.stringify({
				change_column : cellType,
				idx : cellData.idx
			});
			var aHrefStr = "<a class='td-in-out-time' data='" + data +"'  href='-' onclick='return false'>" + _getTimeCell( cellData[cellType] ) + "</a>";
			return aHrefStr;
 		} else {
 			return _getTimeCell( cellData[cellType] );
 		}
		 
	}
	
	// 시간 값을 두 줄로 표시 
	function _getTimeCell(time) {
		if (Util.isNotNull(time) ) {
			var tArr = time.split(" ");
			if (tArr.length == 2) {
				return tArr[0] + "</br>" + tArr[1]; 
			}
		}
		return null;
	}
	
	// comment Cell 페이지 링크 
	function _createCommentCell(cellData) {
		 var data = JSON.stringify({
			 idx : cellData.idx
		 });
		 
		 var url = "#commutemanager/comment/" + cellData.id + "/" + cellData.date;
		 var aHrefStr = "<a class='td-comment' data='" + data +"'  href='"+ url +"' >" + cellData.comment_count + " 건</a>";
		 return aHrefStr;
	}
	
	// comment Cell 추가 팝어 버튼 
	function _createCommentCellAddBtn(cellData, tpl) {
		 var data = JSON.stringify({
			 idx : cellData.idx
		 });
		 var tp = $(tpl);
		 tp.find(".btn").attr("data", data);
		 return tp.html();
	}
	
	function _getCommuteUpdateBtn(that) {
		return {
	        type:"custom",
	        name:"edit",
	        click:function(_grid){
	        	var selectItem =_grid.getSelectItem();
	        	if ( Util.isNull(selectItem) ) {
        			Dialog.warning("사원을 선택 하여 주시기 바랍니다.");
        			return;
	        	}
	        	
	            var commuteUpdatePopupView = new CommuteUpdatePopupView(selectItem);
	            Dialog.show({
	                title:"출퇴근시간 수정", 
                    content: commuteUpdatePopupView,
                    buttons: [{
                        id: 'updateCommuteBtn',
                        cssClass: Dialog.CssClass.SUCCESS,
                        label: '수정',
                        action: function(dialog) {
                        	commuteUpdatePopupView.updateCommute().done(function(result){
            					console.log(result);
            					var current = result.models[0];
            					var yesterday = result.models[1];
            					current.set({idx : selectItem.idx});
            					that.grid.updateRow(current.attributes);
            					var yesterdayRow = that.grid.getRowByFunction(
            						function(idx, data, node){
	            						if(data.date === yesterday.get("date") && data.id === yesterday.get("id")){
	            							return true;
	            							
	            						}else{
	            							return false;
	            						}
	            					}
	            				);
	            				yesterday.set({idx : yesterdayRow.data().idx});
	            				yesterdayRow.data(yesterday.attributes);
            					
        						Dialog.show("성공", function() {
                    				dialog.close();
                    			})
            				}).fail(function(){

            				});
                        }
                    }, {
                        label : "취소",
                        action : function(dialog){
                            dialog.close();
                        }
                    }]
	            })
	        }
	    };
	}
	var commuteListView = BaseView.extend({
        el:$(".main-container"),
    	initialize:function(){
    		this.commuteCollection = new CommuteCollection();
    		this.gridOption = {
        		    el:"commute_content",
        		    id:"commuteDataTable",
        		    column:[
     	                   	{ data : "date", 			"title" : "일자" },
     	                   	{ data : "department", 		"title" : "부서" },
     	                   	{ data : "name", 			"title" : "이름", 
     	                   		render: function(data, type, full, meta) {
     	                   			return full.name + "</br>(" +full.id + ")";
     	                   		}
     	                   	},
     	                   	{ data : "work_type", 	"title" : "근무</br>타입",
     	                   		render : function(data, type, full, meta){
     	                   			return Code.getCodeName(Code.WORKTYPE, data);
     	                   		}
     	                   	},
     	                   	{ data : "out_office_code", 	"title" : "외근</br>정보",
     	                   		render : function(data, type, full, meta){
     	                   			return Code.getCodeName(Code.OFFICE, data);
     	                   		}
     	                   	},
     	                   	{ data : "in_time", "title" : "출근</br>시간",
     	                   		render: function(data, type, full, meta) {
   	                    			return  _createHistoryCell("in_time", full,"in_time_change" );
     	                   		}
     	                    },
     	                    { data : "out_time", "title" : "퇴근</br>시간",
     	                    	render: function(data, type, full, meta) {
									return _createHistoryCell("out_time", full, "out_time_change");
     	                   		}
     	                    },
     	                    { data : "late_time", 		"title" : "지각</br>시간"}, 
     	                   	{ data : "overtime_code", 		"title" : "초과</br>근무",
     	                   		render : function(data, type, full, meta){
     	                   			return Code.getCodeName(Code.OVERTIME, data);
     	                   		}
     	                   	},
     	                    { data : "comment_count", "title" : "비고",
     	                     	render: function(data, type, full, meta) {
     	                   			if (full.comment_count) {
     	                            	return _createCommentCell(full) + _createCommentCellAddBtn(full, btnCommentAddTemplate);
     	                            } else {
     	                            	return "0 건" + _createCommentCellAddBtn(full, btnCommentAddTemplate);
     	                            }
     	                   		}
     	                     },
     	                     {"title": "출근타입", "data": "in_time_type", visible: false},
                    		 {"title": "퇴근타입", "data": "out_time_type" , visible: false},
             	        ],
             	    rowCallback: function(row, data){
             	    	if(data.work_type == 21 || data.work_type == 22){ // 결근 처리
             	    		$(row).css("background-color", "rgb(236, 131, 131)");
             	    	}
             	    	
             	    	if(data.in_time_type != "1"){
             	    		$('td:eq(5)', row).css("background-color", "rgb(247, 198, 142)");
             	    	}
             	    	
             	    	if(data.out_time_type != "1"){
             	    		$('td:eq(6)', row).css("background-color", "rgb(247, 198, 142)");
             	    	}
             	    },
        		    collection:this.commuteCollection,
        		    dataschema:["date", "department", "id", "name", "work_type_name", "vacation_name", "out_office_name", "overtime_pay", "late_time", "over_time", "in_time", "out_time", "comment_count"],
        		    detail: true,
        		    buttons:["search"],
        		    fetch: false
        	};    		
    		this.buttonInit();
    	},
    	events: {
        	'click #ccmSearchBtn' : 'onClickSearchBtn',
        	'click #commuteDataTable .td-in-out-time' : 'onClickOpenChangeHistoryPopup',
        	'click #commuteDataTable .btn-comment-add' : 'onClickOpenInsertCommentPopup'
    	},
    	buttonInit: function(){
    	    var that = this;
    	    // tool btn
    	    if (SessionModel.get("user").admin == 1 ) {
    	    	this.gridOption.buttons.push(_getCommuteUpdateBtn(that));
    	    }
    	},
    	render:function(){
    	    //var _view=this;
    	    var _headSchema=Schemas.getSchema('headTemp');
    	    var _headTemp=_.template(HeadHTML);
    	    var _layOut=$(LayoutHTML);
    	    var _head=$(_headTemp(_headSchema.getDefault({title:"근태 관리 ", subTitle:"근태 자료 관리"})));
    	    
    	    _head.addClass("no-margin");
    	    _head.addClass("relative-layout");

 			var _row=$(RowHTML);
    	    var _datepickerRange=$(_.template(DatePickerHTML)(
    	    	{ obj : 
    	    		{
    	    			fromId : "ccmFromDatePicker",
    	    			toId : "ccmToDatePicker"
    	    		}
    	    		
    	    	})
    	    );
    	    var _btnContainer = $(_.template(RowButtonContainerHTML)({
    	            obj: {
    	                id: "ccmBtnContainer"
    	            }
    	        })
    	    );
    	    
    	    var _searchBtn = $(_.template(RowButtonHTML)({
    	            obj: {
    	                id: "ccmSearchBtn",
    	                label: "검색"
    	            }
    	        })
	        );
	        _btnContainer.append(_searchBtn);
	        
    	    _row.append(_datepickerRange);
    	    _row.append(_btnContainer);
    	    var _content=$(ContentHTML).attr("id", this.gridOption.el);
    	    this.progressbar = new ProgressbarView();
    	    
    	    
    	    _layOut.append(_head);
    	    _layOut.append(_row);
    	    _layOut.append(_content);
    	    _layOut.append(this.progressbar.render());

    	    $(this.el).html(_layOut);
    	    
			var today = new Date();
    	    var firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    	    
    	    $(this.el).find("#ccmFromDatePicker").datetimepicker({
            	pickTime: false,
		        language: "ko",
		        todayHighlight: true,
		        format: "YYYY-MM-DD",
		        defaultDate: Moment(firstDay).format("YYYY-MM-DD")
            });
            
            $(this.el).find("#ccmToDatePicker").datetimepicker({
            	pickTime: false,
		        language: "ko",
		        todayHighlight: true,
		        format: "YYYY-MM-DD",
		        defaultDate: Moment(today).format("YYYY-MM-DD")
            });
            
            this.progressbar.disabledProgressbar(true);
            
    	    var _gridSchema=Schemas.getSchema('grid');
    	    this.grid= new Grid(_gridSchema.getDefault(this.gridOption));
            this.grid.render();
            
			
            return this;
     	},
     	onClickSearchBtn: function(evt) {
     		this.selectCommute();
     	},
     	onClickOpenInsertCommentPopup: function(evt) {
			var data = JSON.parse( $(evt.currentTarget).attr('data') );
     		// 0부터 시작
        	var selectItem = this.grid.getDataAt(data.idx-1);
        	
            var commentPopupView = new CommentPopupView(selectItem);
            var that = this;
            Dialog.show({
                title:"Comment 등록", 
                content: commentPopupView,
                buttons: [{
                    id: 'updateCommuteBtn',
                    cssClass: Dialog.CssClass.SUCCESS,
                    label: '수정',
                    action: function(dialog) {
                    	commentPopupView.insertComment({
                    		success: function(model, response) {
                    			Dialog.show("성공", function() {
                    				dialog.close();
                    				selectItem.comment_count++;	 // comment 수 증가 
                    				that.grid.updateRow(selectItem, selectItem.idx -1 );	// index 0부터 시작 
                    			});
                         	}, error : function(model, res){
                         		Dialog.show("업데이트가 실패했습니다.");
                         	}
                        });
                    }
                }, {
                    label : "취소",
                    action : function(dialog){
                        dialog.close();
                    }
                }]
            })
     	},
     	onClickOpenChangeHistoryPopup: function(evt) {
			var data = JSON.parse( $(evt.currentTarget).attr('data') );
        	var selectItem = this.grid.getDataAt(data.idx-1); // 0부터 시작
			var searchData = {
					id : selectItem.id,
					year : selectItem.year, 
					date : selectItem.date,
					change_column : data.change_column
			};
        	
            var changeHistoryPopupView = new ChangeHistoryPopupView(searchData);
            Dialog.show({
                title: ( (data.change_column == "in_time")? "출근 시간 변경 이력":"퇴근 시간 변경 이력" ), 
                content: changeHistoryPopupView,
                buttons: [{
                    label : "취소",
                    action : function(dialog){
                        dialog.close();
                    }
                }]
            });
     	},
    	selectCommute: function() {
    	    this.progressbar.disabledProgressbar(false);
     		var data = {
     		    startDate : $(this.el).find("#ccmFromDatePicker").data("DateTimePicker"),
     		    endDate : $(this.el).find("#ccmToDatePicker").data("DateTimePicker")
     		};
     		   		
     		data.startDate.getText() === "" ? null : data.startDate = data.startDate.getDate().format("YYYY-MM-DD");
     		data.endDate.getText() === "" ? null : data.endDate = data.endDate.getDate().format("YYYY-MM-DD");
     		
     		if (_.isNull(data.startDate) || _.isNull(data.endDate)) {
     			Dialog.error("시작일 / 종료일을 입력해 주십시오");
     			return;
     		}
     		
            var _this = this;
     		this.commuteCollection.fetch({ 
     			data: data,
	 			success: function(result) {
	 				_this.grid.render();
	 				_this.progressbar.disabledProgressbar(true);
	 			},
	 			error : function(result) {
	 				alert("데이터 조회가 실패했습니다.");
	 			}
     		});     		
     		
    	}
	});
	return commuteListView;
});