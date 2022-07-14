$(document).ready(function() {

    // 고객지원 - FAQ
    function faqSlideUpandDown () {

        const question = $('.faq .faq-question')
        const answer = $('.faq-answer')

        question.on("click",function(){
            answer.not($(this).next()).stop().slideUp()
            $(this).next().stop().slideToggle()
        })
        answer.on("click",function(){
            answer.stop().slideUp()
        })

    }
    faqSlideUpandDown ()

    // 푸터 서브 - 경영이념
    function ftSubTabs(){

        // 푸터 서브 - 경영이념
        $('#boardTab.ft_tabs .board-tab-list > li').on('click', function(){
            var index = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $('.cont-item').eq(index).addClass('active').siblings().removeClass('active');
        });

        // 푸터 서브 - 연혁, 창업자 말씀
        $('.etc-tab-list li').on('click', function(){

            var index = $(this).index();

            $(this).addClass('active').siblings('li').removeClass('active');
            $('.cont-item').eq(index).addClass('active').siblings().removeClass('active');

            // 창업자 말씀
            if ($('#ceo')) {

                if(index == 0) $("#ceo").removeClass('page02').addClass('page01')
                else if (index == 1) $("#ceo").removeClass('page01').addClass('page02')

            }

        });

    }
    ftSubTabs()

})

