var size = 0;
var placement = 'point';

var style_CowslipobservationswithproportionofSmorphs_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Sprop");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.499000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.5 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.499000 && value <= 0.501000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.5 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.501000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.5 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
