var swiper = new Swiper('.swiper-container', {
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});
$(".box div").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
});

$(".add").click(function(){
    $(".mask").show().children().addClass("show");
});
$(".submit").click(function(){
   $(".mask").hide().children().removeClass("show");
});
$(".close").click(function(){
    $(".mask").hide().children().removeClass("show");
});
$(".submit").click(function(){
    if($("#text").val()===""){
        $(".tips").html("请输入文字").addClass("tipsShow");
        return;
    }
    var val=$("#text").val();
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let days = date.getDate();
    let time = `${year}-${month}-${days}`;
    let data = getData();
    data.push({text:val,isDone:false,isStar:false,time});
    saveData();
    render();

});
function getData(){
    return localStorage.todo?JSON.parse(localStorage.todo):[];
}
function saveData(data){
    localStorage.todo=JSON.stringify(data);
}
function render(){
    let data=getData();
    var str="";
    $.each(data,function(index,val){
        str+=`
        <li>
            <p>${val.text}</p>
            <time>${val.time}</time>
            <i>o</i>
        </li>
        `
    });
    $(".content ul").html(str);

}
render();
$(".tips").on("animationend",function () {
    console.log(1);
    $(".tips").css("display","none").removeClass("tipsShow");
});

/*function getDate(time){
    var date=new Date();
    date.setTime(time);
    var year=date.getFullYear();
    var month=setZero(date.getMonth()+1);
    var day=setZero(date.getDate());

}
function setZero(n){
    return n<10?"0"+n:n;
}*/
