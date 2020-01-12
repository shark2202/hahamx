//joke-list-item


//alert(elements.id);

//alert(typeof eval(layx));
//var id = layx.msg(elements.id,{style:"z-index:999999"});

//alert(id);

window.initWebChannel(function(){

    if(window.core.someProperty == 'new'){
        var elements = document.getElementsByClassName("joke-list-item")[0];

        window.core.gotoJoke("",elements.id.substring("joke-".length));
    }else{
        var elements = document.getElementsByClassName("joke-main")[0];

        //window.core.receiveText(elements.id);
        var msg = {
            id:0
            ,text:""
            ,img:""
        }

        msg['id'] = elements.id.substring("joke-".length);

        if(elements.getElementsByClassName("joke-main-content-text").length > 0){
            msg['text'] = elements.getElementsByClassName("joke-main-content-text")[0].innerText;
        }

        var imgGet = document.getElementsByClassName("joke-main-content")[0].getElementsByTagName("img");
        if(imgGet.length > 0){
            msg['img'] = imgGet[0].src;
        }


        window.core.receiveText(msg);
    }

    window.core.sendText.connect(function(message) {
        //output("Received message-" + core.someProperty + " : " + message);
        if(message == 'pre'){
            document.getElementsByClassName("joke-nav-prev")[0].click();
        }else if(message == 'next'){
            document.getElementsByClassName("joke-nav-next")[0].click();
        }
    });
})

