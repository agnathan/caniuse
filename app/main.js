require.config({
    baseUrl: 'features-json',
    // waitSeconds : 2,
    paths : {
        text : '../lib/text', //text is required
        json : '../src/json', //alias to plugin
    }
});

// adding the flag `!bust` to the end of dependency name will avoid caching
require(['json!../data.json'], function(feature){
    console.log(feature.title)
});