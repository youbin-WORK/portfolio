$(function(){
    //alert('경고')

    $('.headerpage').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
        //헤더페이지에서 스크롤 금지
      });


    //headericon 누르면 maintitle 뜨기
    $('#icon1').click(function(){
        $('.headericon').find('p').hide()
        $(this).find('p').show()
        $('#main1').hide()
        $('#main2').show()
        $('#main3').hide()
        $('.headerpage').removeClass('on')
        $('.headerpage').removeClass('on2')
        $('.headercontent .content2').addClass('on')
        $('.headercontent .content2').removeClass('on1')
        $('.headercontent .content2').removeClass('on2')


    })
    
    $('#icon2').click(function(){
        $('.headericon').find('p').hide()
        $(this).find('p').show()
        $('#main2').hide()
        $('#main1').show()
        $('#main3').hide()
        $('.headerpage').addClass('on')
        $('.headerpage').removeClass('on2')
        $('.headercontent .content2').addClass('on1')
        $('.headercontent .content2').removeClass('on')
        $('.headercontent .content2').removeClass('on2')
    })

    $('#icon3').click(function(){
        $('.headericon').find('p').hide()
        $(this).find('p').show()
        $('#main2').hide()
        $('#main3').show()
        $('#main1').hide()
        $('.headerpage').addClass('on2')
        $('.headerpage').removeClass('on')
        $('.headercontent .content2').addClass('on2')
        $('.headercontent .content2').removeClass('on')
        $('.headercontent .content2').removeClass('on1')
    })


    //headericon

    //headernav 아이콘 누르면 text 효과
    $('.headernav ul li a').click(function(){
        $('.text1').hide();
        $('.text2').fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn().delay(1000).fadeOut().fadeIn();
    })

    //스크롤 내리면 text 애니메이션 멈춤
    $('main > section').each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
               $('.text').stop().fadeOut()
            }
    })

    //text2 누르면 p1로 스크롤 이동, 헤더페이지 배경색 초기화
    $('.text2').click(function(){
        $('.headerpage').addClass('on')
        //$(this).addClass('on').siblings().removeClass('on')

        let section = $('.p1')
        let distance = section.offset().top
        $('html, body').animate({
            scrollTop : distance
        })
    })    

    //#btn2 hover 했을 때 headerpage배경색 변경
    $('#btn1').click(function(){
        $('.headerpage').addClass('on')
    })

    $(window).scroll(function(){
        $('main > section').each(function(){
            if($(window).scrollTop() >= 300){
                $('.page2bar').show()
            }else{
                $('.page2bar').hide()
            }
        })
    })

    $('.page2bar nav ul .li1 p').click(function(){
        //$(this).addClass('on').siblings().removeClass('on')

        let idx = $(this).index()
        let section = $('.p2').eq(idx)
        let distance = section.offset().top
        $('html, body').animate({
            scrollTop : distance
        })
    })
    $('.page2bar nav ul .li2 p').click(function(){
        //$(this).addClass('on').siblings().removeClass('on')

        let idx = $(this).index()
        let section = $('.p3').eq(idx)
        let distance = section.offset().top
        $('html, body').animate({
            scrollTop : distance
        })
    })
    $('.page2bar nav ul .li3 p').click(function(){
        //$(this).addClass('on').siblings().removeClass('on')

        let idx = $(this).index()
        let section = $('.p4').eq(idx)
        let distance = section.offset().top
        $('html, body').animate({
            scrollTop : distance
        })
    })



    // btn 클릭했을 때 위치 이동, on
    $('#btn1').click(function(){
        //$(this).addClass('on').siblings().removeClass('on')

        let idx = $(this).index()
        let section = $('.p2').eq(idx)
        let distance = section.offset().top
        $('html, body').animate({
            scrollTop : distance
        })
    })
    $('#btn2').click(function(){
        //$(this).addClass('on').siblings().removeClass('on')

        let idx = $(this).index()
        let section = $('.p3').eq(idx)
        let distance = section.offset().top
        $('html, body').animate({
            scrollTop : distance
        })
    })
    $('#btn3').click(function(){
        //$(this).addClass('on').siblings().removeClass('on')

        let idx = $(this).index()
        let section = $('.p4').eq(idx)
        let distance = section.offset().top
        $('html, body').animate({
            scrollTop : distance
        })
    })
})

//pagebar 뜨는 법 


//자판기 button 누르면 음료배출구로 스크롤이동
$('.portvendbtn button').click(function(){
    $('.port #img1').addClass('on')
    //$(this).addClass('on').siblings().removeClass('on')

    let idx = $(this).index()
    let section = $('.dropplace').eq(idx)
    let distance = section.offset().top -230
    $('html, body').delay(500).animate({
        scrollTop : distance
    })
})


var animData = {
    container: document.getElementById('container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://www.micelistudios.com/balance.json'
};
// var anim = bodymovin.loadAnimation(animData);

// 현재 스크롤 위치를 가져오는 함수
function getScrollPosition() {
    var scrollPosition = window.scrollY;
    console.log("현재 스크롤 위치: " + scrollPosition + "px");
}

//프로필 상세페이지 이동 모션
$('.p2 .inner .contentb .lever img').click(function(){
    $(this).animate({rotate: '180deg'})
    $('.p2-m0').show()
    $("html, body").animate({ scrollTop: 5600 }, "slow");
})

$(".p2-m0").animate({ scrollTop: 5600 }, "slow")
//p2-m0 누르면 profile 상세페이지 넘기는 애니메이션
$('.p2-m0 p').click(function(){
    $(".p2-m0").animate({'left':'-3000px'}, "slow")
    $('.p2-m1').show();
})

$('.p2-m1').click(function(){
    $(".p2-m1").animate({'left':'-3000px'}, "slow")
    $('.p2-m2').show();
})
$('.p2-m2').click(function(){
    $(".p2-m2").animate({'left':'-3000px'}, "slow")
    $('.p2-m3').show();
})
$('.p2-m3').click(function(){
    $(".p2-m3").animate({'left':'-3000px'}, "slow")
    $('.p2-m4').show();
    next();
})

$('#btn4').click(function(){
    let section = $('.p5')
    let distance = section.offset().top
    $('html, body').animate({
        scrollTop : distance
    })
    $(".p2-m0").css({'left':'47.5%'})
    $(".p2-m1").css({'left':'10%'})
    $(".p2-m2").css({'left':'10%'})
    $(".p2-m3").css({'left':'10%'})
    $(".p2-m4").css({'left':'10%'})
})


// reloadDivArea(); //함수실행

// function reloadDivArea(){
//     $('#profile').load(window.location.href+' #profile');
// }





// go top 버튼코드
// $(window).click(function(){
//     if($(this).scrollTop()>=300){
//         $('.gotop').fadeIn()
//     }else{
//         $('.gotop').fadeOut()
//     }
// })

// gotop 클릭하면 맨위로 올라가기
$('.gotop').click(function(e){
    e.preventDefault()
    $('html,body').stop().animate({
        scrollTop : '0'
    }, 500)
    
})

// //새로고침시 스크롤 맨위로 로드
// $(function(){
//     $("html, body").animate({ scrollTop: 0 }, "fast"); 
// });

    
