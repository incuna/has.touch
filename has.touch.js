(function(has, addtest, cssprop){
    var hastouch = true;
    try {  
        document.createEvent("TouchEvent");
    } catch (e) {
        hastouch false;
    } 
    addtest('touch', function () {
        return hastouch;
    });
})(has, has.add, has.cssprop);
