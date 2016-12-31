/**
 * Created by Administrator on 2016/12/29.
 */
$(document).ready(function () {
    $(document).ready(function () {
        $(".loginbnt").click(function () {
            if($(".username").val()=="admin" && $(".password").val()=="jingdong"){
                window.location = "index.html?projectname=项目&projectarea=区域";
            }else if($(".username").val()=="" && $(".password").val()==""){
                alert("请输入用户名");
            }else {
                alert("密码不正确");
            }
        });
        $("body").keydown(function() {
            if (event.keyCode == "13") {//keyCode=13是回车键
                if($(".password").val()==""){
                    $(".password").focus();
                }else {
                    $(".loginbnt").click();
                }
            }
        });

        $(".username").focus(function () {
            $(".user").css("border-color","#ffaf15");
            $('.userimg').css({"background":"url('images/用户名选中.png')","background-size":"15px 15px"});
            $(".usernamep1").css("border-color","#ffaf15");
        });
        $(".username").focus()
        $(".username").blur(function () {
            $(".user").css("border-color","#c6c6c6");
            $('.userimg').css({"background":"url('images/用户名.png')","background-size":"15px 15px"});
            $(".usernamep1").css("border-color","#c6c6c6");
        });
        $(".password").focus(function () {
            $(".pass").css("border-color","#ffaf15");
            $('.pwdimg').css({"background":"url('images/密码--选中.png')","background-size":"15px 15px"});
            $(".pwdp1").css("border-color","#ffaf15");

        });
        $(".password").blur(function () {
            $(".pass").css("border-color","#c6c6c6");
            $('.pwdimg').css({"background":"url('images/密码.png')","background-size":"15px 15px"});
            $(".pwdp1").css("border-color","#c6c6c6");

        });
        var num=1;
        $(".checkbox").click(function () {
            ++num
            if(num%2==0){
                $(this).addClass("checked");
            }else{
                $(this).removeClass("checked");
            }
        });
    }); 
});