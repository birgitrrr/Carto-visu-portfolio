ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-815106.581113, 4662162.127934, 6347962.013793, 9303363.284581]);
var wms_layers = [];


        var lyr_Positronbasemap_0 = new ol.layer.Tile({
            'title': 'Positron basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_DeviationofmorphsfromanevenmorphfrequencyN5_1 = new ol.format.GeoJSON();
var features_DeviationofmorphsfromanevenmorphfrequencyN5_1 = format_DeviationofmorphsfromanevenmorphfrequencyN5_1.readFeatures(json_DeviationofmorphsfromanevenmorphfrequencyN5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeviationofmorphsfromanevenmorphfrequencyN5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeviationofmorphsfromanevenmorphfrequencyN5_1.addFeatures(features_DeviationofmorphsfromanevenmorphfrequencyN5_1);
var lyr_DeviationofmorphsfromanevenmorphfrequencyN5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeviationofmorphsfromanevenmorphfrequencyN5_1, 
                style: style_DeviationofmorphsfromanevenmorphfrequencyN5_1,
                popuplayertitle: 'Deviation of morphs from an even morph frequency (N>=5)',
                interactive: false,
    title: 'Deviation of morphs from an even morph frequency (N>=5)<br />\
    <img src="styles/legend/DeviationofmorphsfromanevenmorphfrequencyN5_1_0.png" /> 0,013 - 0,045 Very low<br />\
    <img src="styles/legend/DeviationofmorphsfromanevenmorphfrequencyN5_1_1.png" /> 0,046 - 0,073<br />\
    <img src="styles/legend/DeviationofmorphsfromanevenmorphfrequencyN5_1_2.png" /> 0,074 - 0,11<br />\
    <img src="styles/legend/DeviationofmorphsfromanevenmorphfrequencyN5_1_3.png" /> 0,12 - 0,15<br />\
    <img src="styles/legend/DeviationofmorphsfromanevenmorphfrequencyN5_1_4.png" /> 0,16 - 0,21 Very high<br />' });
var format_Cowslipobservationswithpopulationsize_2 = new ol.format.GeoJSON();
var features_Cowslipobservationswithpopulationsize_2 = format_Cowslipobservationswithpopulationsize_2.readFeatures(json_Cowslipobservationswithpopulationsize_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cowslipobservationswithpopulationsize_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cowslipobservationswithpopulationsize_2.addFeatures(features_Cowslipobservationswithpopulationsize_2);
var lyr_Cowslipobservationswithpopulationsize_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cowslipobservationswithpopulationsize_2, 
                style: style_Cowslipobservationswithpopulationsize_2,
                popuplayertitle: 'Cowslip observations with population size',
                interactive: true,
    title: 'Cowslip observations with population size<br />\
    <img src="styles/legend/Cowslipobservationswithpopulationsize_2_0.png" /> Large (>200)<br />\
    <img src="styles/legend/Cowslipobservationswithpopulationsize_2_1.png" /> Medium (100–200)<br />\
    <img src="styles/legend/Cowslipobservationswithpopulationsize_2_2.png" /> Small (<100)<br />\
    <img src="styles/legend/Cowslipobservationswithpopulationsize_2_3.png" /> Missing data<br />' });

lyr_Positronbasemap_0.setVisible(true);lyr_DeviationofmorphsfromanevenmorphfrequencyN5_1.setVisible(false);lyr_Cowslipobservationswithpopulationsize_2.setVisible(true);
var layersList = [lyr_Positronbasemap_0,lyr_DeviationofmorphsfromanevenmorphfrequencyN5_1,lyr_Cowslipobservationswithpopulationsize_2];
lyr_DeviationofmorphsfromanevenmorphfrequencyN5_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'ABSdev_count': 'ABSdev_count', 'ABSdev_median': 'ABSdev_median', });
lyr_Cowslipobservationswithpopulationsize_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Date': 'Date', 'Prim_pop_size': 'Prim_pop_size', 'S_morph': 'S_morph', 'L_morph': 'L_morph', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'Sprop': 'Proportion of S-morphs', 'ABSdev': 'ABSdev', 'count per country': 'count per country', });
lyr_DeviationofmorphsfromanevenmorphfrequencyN5_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'ABSdev_count': 'TextEdit', 'ABSdev_median': 'TextEdit', });
lyr_Cowslipobservationswithpopulationsize_2.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'Date': 'TextEdit', 'Prim_pop_size': 'Hidden', 'S_morph': 'Hidden', 'L_morph': 'Hidden', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'Hidden', 'Sprop': 'Hidden', 'ABSdev': 'TextEdit', 'count per country': 'Hidden', });
lyr_DeviationofmorphsfromanevenmorphfrequencyN5_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'ABSdev_count': 'no label', 'ABSdev_median': 'no label', });
lyr_Cowslipobservationswithpopulationsize_2.set('fieldLabels', {'Date': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'ABSdev': 'inline label - always visible', });
lyr_Cowslipobservationswithpopulationsize_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});