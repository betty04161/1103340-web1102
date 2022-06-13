$(function(){
    $("input").on("click",function(){
        var numberOfListItem=$("li").length - 1;
        //floor 取向下整數，random取[0,1)之間的數
        var randomChance = Math.round(Math.random()*100);

        // debugger;
        if(randomChance<40){
            var randomChildNumber = numberOfListItem;
            console.log("機率40%");
        }else{
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
            console.log("機率60%");
        }

        console.log(randomChildNumber);
        if(randomChildNumber==0){
            $("#myPic").attr("src","拉麵.jpeg");
        }else if(randomChildNumber==1){
            $("#myPic").attr("src","滷肉飯.jpeg");
        }else if(randomChildNumber==2){
            $("#myPic").attr("src","水餃.jpeg");
        }
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});