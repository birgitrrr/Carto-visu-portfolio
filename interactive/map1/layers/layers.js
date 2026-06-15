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
var format_CowslipobservationswithproportionofSmorphs_1 = new ol.format.GeoJSON();
var features_CowslipobservationswithproportionofSmorphs_1 = format_CowslipobservationswithproportionofSmorphs_1.readFeatures(json_CowslipobservationswithproportionofSmorphs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CowslipobservationswithproportionofSmorphs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CowslipobservationswithproportionofSmorphs_1.addFeatures(features_CowslipobservationswithproportionofSmorphs_1);
var lyr_CowslipobservationswithproportionofSmorphs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CowslipobservationswithproportionofSmorphs_1, 
                style: style_CowslipobservationswithproportionofSmorphs_1,
                popuplayertitle: 'Cowslip observations with proportion of S-morphs (%)',
                interactive: true,
    title: 'Cowslip observations with proportion of S-morphs (%)<br />\
    <img src="styles/legend/CowslipobservationswithproportionofSmorphs_1_0.png" /> 0 - 49<br />\
    <img src="styles/legend/CowslipobservationswithproportionofSmorphs_1_1.png" /> 50<br />\
    <img src="styles/legend/CowslipobservationswithproportionofSmorphs_1_2.png" /> 51 - 100<br />' });

lyr_Positronbasemap_0.setVisible(true);lyr_CowslipobservationswithproportionofSmorphs_1.setVisible(true);
var layersList = [lyr_Positronbasemap_0,lyr_CowslipobservationswithproportionofSmorphs_1];
lyr_CowslipobservationswithproportionofSmorphs_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Date': 'Date', 'Prim_pop_size': 'Population size', 'S_morph': 'S-morphs', 'L_morph': 'L-morphs', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'Sprop': 'Proportion of S-morphs', 'ABSdev': 'ABSdev', });
lyr_CowslipobservationswithproportionofSmorphs_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Date': 'TextEdit', 'Prim_pop_size': 'TextEdit', 'S_morph': 'Range', 'L_morph': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'Sprop': 'TextEdit', 'ABSdev': 'TextEdit', });
lyr_CowslipobservationswithproportionofSmorphs_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Date': 'inline label - visible with data', 'Prim_pop_size': 'inline label - visible with data', 'S_morph': 'inline label - visible with data', 'L_morph': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Country': 'hidden field', 'Sprop': 'inline label - visible with data', 'ABSdev': 'hidden field', });
lyr_CowslipobservationswithproportionofSmorphs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});