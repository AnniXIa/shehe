
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
                $(".loginbnt").click();
            }
        });

        $(".username,.auchcode ,.newpwd ,.okpwd").focus(function () {
            $(this).prev().css("border-color","#ffaf15");
            $(this).parent().css("border-color","#ffaf15");
        });
        $(".username").focus(function () {
            $('.userimg').css({"background":"url('images/手机号--选中.png')"});
        });
        $(".auchcode").focus(function () {
            $('.auchcodeimg').css({"background":"url('images/验证码--选中.png')"});
            if($(".username").val().length == 11){
                $(".getAuchcode").css("color","#ffaf15")
            }
        });
        $(".newpwd").focus(function () {
            $('.newpwdimg').css({"background":"url('images/密码--选中.png')"});
        });
        $(".okpwd").focus(function () {
            $('.okpwdimg').css({"background":"url('images/密码--选中.png')"});
        });

        $(".username").focus();
        $(".username,.auchcode ,.newpwd ,.okpwd").blur(function () {
            $(this).prev().css("border-color","#c6c6c6");
            $(this).parent().css("border-color","#c6c6c6");
        });
        $(".username").blur(function () {
            $('.userimg').css({"background":"url('images/手机号--.png')"});
        });
        $(".auchcode").blur(function () {
            $('.auchcodeimg').css({"background":"url('images/验证码--.png')"});
        });
        $(".newpwd").blur(function () {
            $('.newpwdimg').css({"background":"url('images/密码.png')"});
        });
        $(".okpwd").blur(function () {
            $('.okpwdimg').css({"background":"url('images/密码.png')"});
        });

    });
