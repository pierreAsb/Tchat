$(function()
    {
        $.ajax({
            url: "http://localhost/tchatPn/API/index.php?action=listUsers",
            type:"GET"
               }).done(function(data)
                {
                    console.log(data);
                });
    });
$(function()
{
    $.ajax({
        url: "http://localhost/tchatPn/API/index.php?action=listMessages",
        type:"GET"
    }).done(function(data)
    {
        console.log(data);
    });
});
$(function()
{
    $.ajaxSend({
        url: "http://localhost/tchatPn/API/index.php?action=addMessage",
        type:"GET"
    }).done(function(data)
    {
        console.log("Ajout message bien terminé");

    });
});
$(function()
{
    $.ajaxSend({
        url: "http://localhost/tchatPn/API/index.php?action=userAdd",
        type:"GET"
    }).done(function(data)
    {
        console.log("Ajout utilisateur bien terminé");
    });
});
