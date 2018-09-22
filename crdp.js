$(document).ready(function(){
            //Let's first setup the redirect
        function redirect(){
            window.location.assign('https://dagangpulsa.com');
        }

            //which things we got to check
        function check(){
                if($('#footer-dp').length === 0){
                    redirect();
                }

                else if($('#footer-dp1').length === 0){
                    redirect();
                }

                else if($("#footer-dp1").attr("href") !== "https://dagangpulsa.com"){
                    redirect();
                }

                else if($('#footer-dp1').text() !== "agen pulsa murah"){
                    redirect();
                } 
                
                if($('#footer-dp').length === 0){
                    redirect();
                }

                else if($('#footer-dp2').length === 0){
                    redirect();
                }

                else if($("#footer-dp2").attr("href") !== "https://dagangpulsa.com"){
                    redirect();
                }

                else if($('#footer-dp2').text() !== "jual pulsa murah"){
                    redirect();
                } 
            }
        //execute the function on page load
        check();
        //excute the function at the intervals of 5 seconds.
        setInterval(function () {check()}, 5000);
        });