

    var x = window.matchMedia("(max-width: 665px)");
    var y = window.matchMedia("(max-width: 465px)");

    $('#dLabel').click(function(){
        if (x.matches) {
            window.location.replace("./notifications.html");
        }
        else{}
    })

    $(document).on('click', function(e) {
        var dentroMenu = e.target.closest('#mySidepanel');
        var Menu = e.target.closest('#botao1');
        var dentroMenu2 = e.target.closest('#mySidepanel2');
        var Menu2 = e.target.closest('#botao2');
        var dentroNotif = e.target.closest('#mySidepanel3');
        var Notif = e.target.closest('#botao3');
        if(Menu){
            var id = 'mySidepanel'
        }
        if(Menu2){
            var id = 'mySidepanel2'
        }
        if(Notif){
            var id = 'mySidepanel3'
        }
        if (!dentroMenu){
            if (!Menu){
                document.getElementById('mySidepanel').style.width = "0";
            }
        }
        if (!dentroMenu2){
            if (!Menu2){
                document.getElementById('mySidepanel2').style.width = "0";
            }
        }
        if (!dentroNotif){
            if (!Notif){
                document.getElementById('mySidepanel3').style.width = "0";
            }
        }
        if (y.matches) {
            if(Menu || Menu2 || Notif){
                if (document.getElementById(id).style.width == "100%"){
                    document.getElementById(id).style.width = "0";
                }
                else{
                    document.getElementById(id).style.width = "100%";
                }
            }
        }
        else{
            if(Menu || Menu2){
                if (document.getElementById(id).style.width == "240px"){
                    document.getElementById(id).style.width = "0";
                }
                else{
                    document.getElementById(id).style.width = "240px";
                }
            }
            if (Notif){
                if (document.getElementById('mySidepanel3').style.width == "500px"){
                    document.getElementById('mySidepanel3').style.width = "0";
                }
                else{
                    document.getElementById('mySidepanel3').style.width = "500px";
                }
            }
        }
    })
