gsap.registerPlugin(ScrollTrigger);

$(document).ready(function() {

   // PRODUCT 섹션 탭 슬라이드
   var productListSwiper = new Swiper("#productListSwiper", {

        slidesPerView: "auto",
        spaceBetween: 15,
        direction:"horizontal",
        touchRatio:1,
        breakpoints: {
            1024: {
                direction:"vertiacl",
                slidesPerView: "auto",
                spaceBetween:30,
                touchRatio: 0,
            }
        }

    });

    // PRODUCT 섹션 비디오 탭 슬라이드
    var productVideosSwiper = new Swiper("#productVideosSwiper", {

        slidesPerView: 1,
        spaceBetween: 30,
        touchRatio:1,
        loop:true,
        pagination: {
            el: "#productVideosSwiper .videos-pagination",
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween:60,
                touchRatio: 0,
            }
        }
    });

    // 로봇활용사례 "방역로봇 기업내 활용" 섹션 슬라이드
    var spaceSwiper = new Swiper("#spaceSwiper", {

    slidesPerView: 1,
    spaceBetween: 30,
    touchRatio:1,
    loop:true,
    pagination: {
        el: ".space-pagination",
    },
    navigation: {
        nextEl: ".space-next-btn",
        prevEl: ".space-prev-btn",
    },

    });

    // 로봇활용사례 "다른 활용사례" 섹션 슬라이드
    var otherCasesSwiper = new Swiper("#otherCasesSwiper", {

    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: true,
    loop:true,
    freeMode: true,
    pagination: {
        el: "#otherCasesSwiper .other-cases-pagination",
    },
    breakpoints: {
        1024: {
            centeredSlides: false,
            slidesPerView: 4,
            spaceBetween:40,
            loop:true,
        }
    }

    });


    // 제품소개 페이지 스크롤 스크립트
    function productTabScroll() {

        let lastScrollY = 0;
        let tabLi = $('.product-info-box .tab > ul li')
        let productImg = $('.product-img-box img') // 지워질 예정
        let index = 0
        let width = $(window).width()
        
        // PRODUCT 섹션 탭 슬라이드
        var productListSwiper = new Swiper("#productImgSwiper", {

            slidesPerView: 1,
            spaceBetween: 0,
            touchRatio:1,
            effect:"fade",
        
        });

        productListSwiper.on('activeIndexChange', function () {
            
            tabLi.eq(productListSwiper.realIndex).addClass('active').siblings().removeClass('active');
        
        });

        // 클릭시 이미지 변경
        function tabClickScript() {

            tabLi.on("click",function() {

                let thisIndex = $(this).index()

                index = thisIndex;

                $(this).addClass('active').siblings().removeClass('active');
                productImg.eq(index).addClass('active').siblings().removeClass('active')
                productListSwiper.slideTo(index)

            })

            $(document).on("click",".top-btn",function(){
                $('.product-tab-wrap').removeClass('end')
                index = 0;
            })

        }
        tabClickScript()

        function scroll() {

            function init() {
                gsap.set(".product-tab-wrap",{opacity:0})
            }

            init()

            // 스크롤 방향 감지 및 그 외 스크롤 관련 이벤트
            function scrollScript() {

                $(window).scroll( $.throttle( 200, e => {
                    
                    const scrollY = window.scrollY;
                    
                    // 이전의 스크롤 위치와 비교하기
                    const direction = scrollY > lastScrollY ? "down" : "up"; 
            
                    // 현재의 스크롤 값을 저장
                    lastScrollY = scrollY;
                    
                    if (index < tabLi.length - 1 && direction == "down") {
                        
                        $('.product-tab-wrap').addClass('end')

                        index += 1;
                        tabLi.eq(index).addClass('active').siblings().removeClass('active');
                        productImg.eq(index).addClass('active').siblings().removeClass('active');  // 지워질 예정
                        productListSwiper.slideTo(index)
                                                
                        return true;
            
                    } else if (index <= tabLi.length && index > 0 && direction == "up") {
                        
                        $('.product-tab-wrap').removeClass('end')

                        index -= 1;
                        tabLi.eq(index).addClass('active').siblings().removeClass('active');
                        productImg.eq(index).addClass('active').siblings().removeClass('active');  // 지워질 예정
                        productListSwiper.slideTo(index)

                        return true;                   
            
                    }
                    
                }))
            }

            // 제품소개 섹션 진입시 애니메이션 효과 및 진입 후 scrollScript()가 활성화
            function scrollIn() {
                
                $('body').addClass('no-scrollbar')
                if($('.product-tab-wrap').hasClass('end')){

                    index = 3;
                    tabLi.eq(index).addClass('active').siblings().removeClass('active');

                } else {

                    index = 0;
                    tabLi.eq(index).addClass('active').siblings().removeClass('active');

                }

                
                gsap.to(".product-tab-wrap",{ top:"-50rem", opacity:1, duration:0.8, ease:'ease', 
                
                    onStart:function() {
                        $('body').addClass('fixed')
                        
                    },
                    onComplete : function() {

                        setTimeout(function() {
                            scrollScript()
                            $('body').removeClass('fixed')
                        },1)

                    }})

            }

            // 제품소개 섹션 이탈시 애니메이션 효과 및 이탈 후 scrollScript()가 비활성화
            function scrollOut() {

                let target = $('#productList').parent().next().offset().top - 85

                $('body').removeClass('no-scrollbar')
                gsap.to(".product-tab-wrap",{top:"0", opacity:0, duration:0.8, ease:'linear'})
                $(window).off('scroll')
        
                if($('.product-tab-wrap').hasClass('end')){

                    gsap.to("body,html", {duration: 1, scrollTo:target,

                        onStart:function() {
                            // $('body').addClass('fixed')
                        },
                        onComplete : function() {
                            setTimeout(function() {
                                // $('body').removeClass('fixed')
                            },1)
                        }
                    
                    });

                }
                
            }

            // 제품소개 섹션 타임라인 
            let tl = gsap.timeline({

                scrollTrigger: {

                trigger: "section#productList",
                pin: true,
                start: "-=50",
                end: "+=800",
                scrub: true,
                onEnter:() => scrollIn(),
                onLeave:() => scrollOut(),
                onEnterBack:() => scrollIn(),
                onLeaveBack:() => scrollOut()

                }

            });


        }

        function resizeScript () {

            if (width > 1024) {

                scroll()

            } else {

            }

        }

        resizeScript () 

    }

    productTabScroll()

    // 제품소개 페이지 AOS Animate 부여
    function viewCheck() {

        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".aos-init").forEach(function(elem) {
            
            ScrollTrigger.create({

                trigger: elem,
                start:"top 700rem",
                end: "bottom -300rem",
                opacity:1,
                // markers: true,
                onEnter : function() { elem.classList.add('aos-animate') }, 
                // onEnterBack : function() { elem.classList.add('aos-animate') },
                // onLeave : function() { elem.classList.remove('aos-animate') }

            })

        });

    }
    viewCheck();

    function AOS_MOBILE() {
    if (matchMedia("screen and (max-width: 1025px)").matches) {
        $('.aos-init').attr('data-aos-delay', '0');
        $('section#productFeatures .product-features-details .text-box').attr('data-aos', 'fade-right');

        // $('.productList').attr('data-aos', 'fade-up');
    }
    }
    AOS_MOBILE();

});