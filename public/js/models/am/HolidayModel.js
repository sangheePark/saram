define([
  'jquery',
  'underscore',
  'backbone'
], function($, _,Backbone){
    var HolidayModel=Backbone.Model.extend({
        urlRoot: '/holiday',
        
        idAttribute:"date",
        
        initialize: function () {
            
        },
    
        default:{ 
            year : '',
            date : '',
            memo : '',
            lunar : '',
        },
        
    });
    
    return HolidayModel;
});