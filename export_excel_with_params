// Get the parent view.
var parentView = this.parentView;

// Get the export service.
var exportService = this.getService('ExportService');

// Get the view service.
var viewService = this.getService('ViewService');

// Get the web app service.
var webAppService = this.getService('WebAppService');

// Get the view parameters.
var viewParameters = 
    parentView.control.viewParameters;

// Using the library, get the view parameter based on it's name
var viewParameter = 
    viewParameters.toEnumerable().first(
      function (viewParameterItem) { return viewParameterItem.name === "viewParameter1";}
    );

// Set the parameter.
var dataRequest = 
    new dundas.data.Request( { 
      // The object ID in this case is referring to the 
      // metric set id.
      objectId: chart1.metricSetBindings[0].metricSetId, 
      parameterValues: [ viewParameter.parameterValue ] 
    });

// Create the export request.
var exportRequest = 
    new dundas._export.ExportRequest(
      {
        isLegacyExport: false,
        // Export Excel
        providerId: dundas.constants.STANDARD_EXCEL_EXPORT_PROVIDER_ID,
        viewId: this.parentView.id,
        requests: [ dataRequest ],
        viewData: this.getService("CanvasService").canvas.viewModel.businessObject.control
      });

// Create parameter value to pass to the request.
var parameterValue1 = new dundas.data.SingleNumberValue;
var parameterValue2 = new dundas.data.CollectionStringValue;
var parameterValue3 = new dundas.data.SingleBooleanValue;
var parameterValue4 = new dundas.data.SingleBooleanValue;
var parameterValue5 = new dundas.data.SingleBooleanValue;
var parameterValue6 = new dundas.data.SingleBooleanValue;

// From the export provider code itself -> Dundas.BI.Export.StandardExportProviders.ExcelPropertyIds.AdapterIds
var adapterIdsParameterId1 = "482E5D18-4183-493A-9CDC-F3ADF9637F79";
var adapterIdsParameterId2 = "27674367-5117-4B44-8972-0AB668B9A20E";
var adapterIdsParameterId3 = "DE83B54D-1E2C-44B5-9466-1F25EB1274F6";
var adapterIdsParameterId4 = "D614E156-7908-499B-BA79-23CAC5E84AEA";
var adapterIdsParameterId5 = "885DCDCB-7975-4F86-870D-77EB50D81B72";
var adapterIdsParameterId6 = "4AB81086-0857-427F-9D22-BAFB9ABE9EF4";

parameterValue1.parameterId = adapterIdsParameterId1;
parameterValue2.parameterId = adapterIdsParameterId2;
parameterValue3.parameterId = adapterIdsParameterId3;
parameterValue4.parameterId = adapterIdsParameterId4;
parameterValue5.parameterId = adapterIdsParameterId5;
parameterValue6.parameterId = adapterIdsParameterId6;

parameterValue1.value = 1;
parameterValue2.value = "534fa55d-dded-2d07-eefb-3534e4f4c052"; //id of your visualization
parameterValue3.value = true;
parameterValue4.value = true;
parameterValue5.value = false;
parameterValue6.value = true;

// Push the parameter value to export request.
exportRequest.parameterValues.push(parameterValue1);
exportRequest.parameterValues.push(parameterValue2);
exportRequest.parameterValues.push(parameterValue3);
exportRequest.parameterValues.push(parameterValue4);
exportRequest.parameterValues.push(parameterValue5);
exportRequest.parameterValues.push(parameterValue6);        
              
// Get the perform export promise.
var exportPromise = 
    exportService.performExport(exportRequest);

// Setup a loading dialog.
viewService.showLoadingRestCall(exportPromise);

exportPromise.done(
  function(exportId)
            {
            // Get the Url for the export file.
            var exportFileUrl =
                        webAppService.getExportResultUrl(exportId);
      
            // Force the browser to download the file.  
            window.location.replace(exportFileUrl);
            }
);
