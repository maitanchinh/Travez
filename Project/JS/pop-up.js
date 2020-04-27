// JavaScript Document
function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
    }
}
 
function setCookie(c_name, value, expires)
{
    var today = new Date();
    today.setTime( today.getTime() );
    if ( expires )
    {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date( today.getTime() + (expires) );
    document.cookie = c_name + "=" +escape( value ) +
    ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" );
}
$(document).ready(function()
{
    var ever = getCookie("ever");
    if(ever)
    {
        $("#popup").css("display", "none");
        return false;
    }
    else
    {
        $("#popup").css("display", "block");      
        var $scrollingDiv = $("#lightbox");
        $(window).scroll(function () {
            setCookie("ever",1,1);
            if ($(window).scrollTop() > 100)
            {
                $scrollingDiv.stop().animate({
                        "marginTop": ($(window).scrollTop()+20)+"px"                    
                    }, "slow");
            }
            else
            {
                $scrollingDiv.stop().animate({
                        "marginTop": "20px"                    
                    }, "slow");  
            }
        });
    }
});
function close()
{
    setCookie("ever",1,1);
    console.log('a');
    $("#popup").hide();
}
 