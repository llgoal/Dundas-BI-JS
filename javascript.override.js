/* Add any JavaScript code to run in the site in this document */



$(document).ready(function(){
	window.dundas.context.ready(function () {
		var seat = dundas.context.currentSession.seatKind;
		var currentPage = window.dundas.context.currentPage;
		if(seat != "Developer" || seat == null) {
			document.getElementById("aboutThisProduct").style.display = "none";
			document.getElementById("dialogForm-help").style.display = "none";
			
 (function ($) {
            var oldFunction = dundas.context._createCommands;
            dundas.context._createCommands = function(viewService, baseViewService, extensionService, fileService, canvasService, clickedAdapter) { 
                        //run old function
                        var commands = oldFunction.bind(dundas.context)(viewService, baseViewService, extensionService, fileService, canvasService, clickedAdapter); 
                        
                        var shareCommand = $E(commands).first(function(t) { return t.caption === "Share"; });
                        var linkOption = $E(shareCommand.subCommands).first(function(c) { return c.caption === "PowerPoint"; });
                        shareCommand.subCommands.splice($.inArray(linkOption, shareCommand.subCommands), 1) ;
                        return commands;
            }
})(jQuery);			

		}
	});
});

$(document).ready(function(){         
        window.dundas.context.ready(function(){
               dundas.controls.NotificationDialog = dundas.controls.NotificationDialog.extend({
                       show: function (){
                               var result = this._super();
                               //find the view parameter
							   var viewParameter = window.dundas.context.getService('BaseViewService').currentView.control.viewParameters.filter(function(item){
                                      return item.name === 'layerInfo';
                               });
                               if (viewParameter.length > 0){
									  viewParameter = viewParameter[0];
                                      //find all layers on the dashboard that are visible and add the names to an array
                                      var visibleLayers = [];
                                      var allLayers = dundas.context.canvasService.canvasAdapter.control.layers
                                      for (i = 0; i < allLayers.length; i++){
                                              if (allLayers[i].hidden == false){
                                              visibleLayers.push(allLayers[i].name);
                                              }
                                      }
                                      //write visible layers to comma delimited string
                                      var visibleLayerString = visibleLayers.join(',');
                                      //set string to parameter value
                                      viewParameter.parameterValue.values[0].uniqueName = visibleLayerString;
                                      console.log(viewParameter);
                               }
                       return result;
                       }
               })             
        })
})



