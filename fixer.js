//Run the method
init();
function init() {
    //When window loads
    window.onload = function () {
        //Set timeout, since paywall is not appearing until after 1.5 seconds aprox.
        setTimeout(function(){
            //This is the brödtext
            $(".article__body--mask .article__lead").css("max-height", "1000px");
            //This is the klarna one press button buy box
            $(".paywall--active").css("display","none");
            //This removes small shadow on brödtext
            $('.article__body-grid-item > p').css("margin-bottom","2.125rem");
            //This is the article
            $(".article__body--mask .article__premium-content").css("display","block");
        },2300);
    };
}
