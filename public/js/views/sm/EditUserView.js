define([
  'jquery',
  'underscore',
  'underscore.string',
  'backbone',
  'core/BaseView',
  'log',
  'dialog',
  'i18n!nls/common',
  'lib/component/form',
  'models/sm/UserModel',
  'collection/common/CodeCollection',
  'text!templates/default/input.html',
], function($, _, _S, Backbone, BaseView, log, Dialog, i18nCommon, Form, UserModel, CodeCollection, container){
    var LOG= log.getLogger("EditUserView");
    var EditUserView = BaseView.extend({
    	initialize:function(data){
    		$(this.el).html('');
    	    $(this.el).empty();
    	    
    	    this.model=new UserModel(data);
    	    _.bindAll(this, "submitSave");
    	},
    	render:function(el){
    	    var dfd= new $.Deferred();
    	    var _view=this;
    	    if (!_.isUndefined(el)){
    	        this.el=el;
    	    }
    	    
    	    var codeCollection= new CodeCollection("dept");
    	    $.when(codeCollection.fetch()).done(function(){
                var _model=_view.model.attributes;
        	    var _form = new Form({
        	        el:_view.el,
        	        form:undefined,
        	        childs:[{
        	                type:"input",
        	                name:"id",
        	                label:i18nCommon.USER.ID,
        	                value:_model.id
        	        },{
        	                type:"input",
        	                name:"name",
        	                label:i18nCommon.USER.NAME,
        	                value:_model.name
        	        },{
        	                type:"combo",
        	                name:"dept_code",
        	                label:i18nCommon.USER.DEPT,
        	                value:_model.dept_code,
        	                collection:codeCollection,
        	                linkField:"dept_name"// text 값을 셋팅 해줌 type은 hidden
        	        },{
        	                type:"hidden",
        	                name:"dept_name",
        	                value:_model.dept_name,
        	                collection:codeCollection,
        	        },{
        	                type:"input",
        	                name:"name_commute",
        	                label:i18nCommon.USER.NAME_COMMUTE,
        	                value:_model.name_commute
        	        },{
        	                type:"date",
        	                name:"join_company",
        	                label:i18nCommon.USER.JOIN_COMPANY,
        	                value:_model.join_company,
        	                format:"YYYY-MM-DD"
        	        },{
        	                type:"date",
        	                name:"leave_company",
        	                label:i18nCommon.USER.LEAVE_COMPANY,
        	                value:_model.leave_company,
        	                format:"YYYY-MM-DD"
        	        },
        	       // {
        	       //         type:"combo",
        	       //         name:"privilege",
        	       //         label:i18nCommon.USER.PRIVILEGE,
        	       //         value:_model.privilege,
        	       //         collection:[{key:1,value:i18nCommon.CODE.PRIVILEGE_1},{key:2,value:i18nCommon.CODE.PRIVILEGE_2},{key:3,value:i18nCommon.CODE.PRIVILEGE_3}]
        	       // },
        	        {
        	                type:"combo",
        	                name:"admin",
        	                label:i18nCommon.USER.ADMIN,
        	                value:_model.admin,
        	                collection:[{key:0,value:i18nCommon.CODE.ADMIN_0},{key:1,value:i18nCommon.CODE.ADMIN_1}]
        	        }]
        	    });
        	    
        	    _form.render().done(function(){
        	        _view.form=_form;
        	        dfd.resolve();
        	    }).fail(function(){
        	        dfd.reject();
        	    });  
    	    }).fail(function(e){
    	        Dialog.error(i18nCommon.ERROR.USER_EDIT_VIEW.FAIL_RENDER);
    	        LOG.error(e.responseJSON.message);
                dfd.reject();    	      
    	    });
    	    return dfd.promise();
     	},
    	submitSave : function(e){
    	    var dfd= new $.Deferred();
    	    var _view=this,_form=this.form,_data=_form.getData();
    	    var _userModel= new UserModel(_data);
    	    _userModel.attributes._id="-2";
    	    var _validate=_userModel.validation(_data);
    	    _userModel.save({},{
    	        success:function(model, xhr, options){
    	            dfd.resolve(_data);
    	        },
    	        error:function(model, xhr, options){
    	            var respons=xhr.responseJSON;
    	            Dialog.error(respons.message);
    	            dfd.reject();
    	        },
    	        wait:false
    	    });
    	    
    	    return dfd.promise();
    	},
    	initializePassword:function(){
    	    var dfd= new $.Deferred();
    	    var _view=this,_form=this.form,_data=_form.getData();
    	    _data.password="";
    	    var _userModel= new UserModel(_data);
    	    _userModel.attributes._id="-2";
    	    var _validate=_userModel.validation(_data);
    	    _userModel.save({},{
    	        success:function(model, xhr, options){
    	            dfd.resolve(_data);
    	        },
    	        error:function(model, xhr, options){
    	            var respons=xhr.responseJSON;
    	            Dialog.error(respons.message);
    	            dfd.reject();
    	        },
    	        wait:false
    	    });
    	    
    	    return dfd.promise();  
    	}
    });
    return EditUserView;
});