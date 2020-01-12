;(function(){
    //loading qwebchannel.js

    var injectCss = function(key,path){
        if(typeof cacheInjectCSS == "undefined"){
            cacheInjectCSS = {};
        }
        if(typeof cacheInjectCSS[key] == "undefined"){
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.url = path;
            document.getElementsByTagName('head')[0].appendChild(link);

            cacheInjectCSS[key] = path;
            console.log(cacheInjectCSS);
        }
    }

    var injectJs = function(key,path){
        if(typeof cacheInject == "undefined"){
            cacheInject = {};
        }
        if(typeof cacheInject[key] == "undefined"){
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = path;
            document.getElementsByTagName("head")[0].appendChild(script);

            cacheInject[key] = path;

            console.log(cacheInject);
        }
    }

    injectJs("myqwebchannel","https://zd04.github.io/hahamx/js/qwebchannel.js");

    var output = function(msg){
        console.log(msg);
        //alert(msg);
    }

    var initWebChannel = function(fn) {

        if(typeof window[socket] != 'undefined'){
            fn();
            return;
        }

        //if (location.search != "")
        //    var baseUrl = (/[?&]webChannelBaseUrl=([A-Za-z0-9\-:/\.]+)/.exec(location.search)[1]);
        //else
            var baseUrl = "ws://localhost:12345";

        output("Connecting to WebSocket server at " + baseUrl + ".");
        var socket = new WebSocket(baseUrl);

        socket.onclose = function() {
            console.error("web channel closed");
        };
        socket.onerror = function(error) {
            console.error("web channel error: " + error);
        };
        socket.onopen = function() {
            output("WebSocket connected, setting up QWebChannel.");

            new QWebChannel(socket, function(channel) {
                // make core object accessible globally

                window.core = channel.objects.core;

                //core.receiveText("QWebChannel INIT");
                output("Connected to WebChannel, ready to send/receive messages!");

                fn();

                //input.innerHTML = core.someProperty;
                //document.getElementById("send").onclick = function() {
                //    var input = document.getElementById("input");

                //    var text = input.value;
                //    if (!text) {
                        return;
                //    }
               //     output("Sent message: " + text );
               //     input.value = "";
               //     core.receiveText(text + " From HTML");
               // }

                //core.sendText.connect(function(message) {
                //    output("Received message-" + core.someProperty + " : " + message);
                //});

                //core.receiveText("Client connected, ready to send/receive messages!");
            });
        }
    }

    window.initWebChannel = initWebChannel;

    //initWebChannel();
    //window.addEventListener('load', initWebChannel);
    //window.onload = initWebChannel;

    //injectCss("layxcss","qrc:///layx/js/layx/layx.min.css");
    //injectJs("layx","qrc:///layx/js/layx/layx.min.js");

    injectJs("myhaha","https://zd04.github.io/hahamx/js/hahamx.js");

//    var input = document.getElementById("kw");
//    input.value = "this is a test";

//    console.log("screen: "+window.screen.height+" , "+window.screen.width)

//    console.log("screen avail: " + window.screen.availHeight+" , "+window.screen.availWidth)

//    console.log("client: " + document.body.clientHeight+" , "+document.body.clientWidth)

   //return "ok";
})();
