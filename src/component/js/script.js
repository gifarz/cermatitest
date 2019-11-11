window.onload = function(){
    document.getElementById('close-x').onclick = function(){
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
    };
};