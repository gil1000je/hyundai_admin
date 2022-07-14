$(document).ready(function(){

    function addClassActive () {

        // 엑티브 효과 부여
        const productList = $('#productListSwiper li.swiper-slide')
        const productTab = $('#product .tab li')
        const newsList = $('#news .news-list > li')

        productList.on("click", function (){
            $(this).addClass('active').siblings().removeClass('active')
        })
        productTab.on("click", function (){
            $(this).addClass('active').siblings().removeClass('active')
        })
        newsList.on("click",function() {
            $(this).addClass('active').siblings().removeClass('active')
        })

    } 

    addClassActive ()

    // 히어로비주얼 슬라이드
    function heroSlide() {

        var heroVisualSwiper = new Swiper("#heroVisualSwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: true,
            pagination: {
                el: "#heroVisualSwiper .swiper-pagination",
            },
        });

    }
    heroSlide()

    // PC 슬라이드 스크립트 (PRODUCT, CASES)
    function slidePC() {

        // PRODUCT 섹션 탭 슬라이드
        var productListSwiper = new Swiper("#productListSwiper", {

            slidesPerView: "auto",
            spaceBetween:30,
            direction:"vertiacl",
            touchRatio: 0,

        });

        // CASES 섹션 슬라이드
        var casesSwiper = new Swiper("#casesSlide", {

            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,

        });

    }

    // MOBILE 슬라이드 스크립트 (PRODUCT, CASES)
    function slideMB() {

        // PRODUCT 섹션 탭 슬라이드
        var productListSwiper = new Swiper("#productListSwiper", {

            slidesPerView: "auto",
            spaceBetween: 15,
            direction:"horizontal",
            touchRatio:1,

        });

        // CASES 섹션 슬라이드
        var casesSwiper = new Swiper("#casesSlide", {

            slidesPerView: "auto",
            spaceBetween: 20,
            loop: false,
            centeredSlides: false,

        });

    }

    // 슬라이드 반응형 (리사이즈 Resize)
    function slideResize() {

        function resizeScript() {

            var width = $(window).width()

            if(width > 1024) {
                // PC
                slidePC()
            } else {
                // MB
                slideMB()
            }

        } resizeScript()
        
        $(window).resize( $.throttle( 500, function(e) {
            resizeScript()
        }))

    }

    slideResize()

})