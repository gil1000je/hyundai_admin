$(document).ready(function() {

    // 텍스트에어리어 태그에 작성가능한 텍스트 수를 실시간으로 입력해주는 스크립트
    function textAreaTextLength () {

        $('textarea').on('keyup', function() {

            $(this).siblings('.count').html("("+$(this).val().length+" / 1,000)");
     
            if($(this).val().length > 100) {
                $(this).val($(this).val().substring(0, 100));
                $(this).siblings('.count').html("(1000 / 1,000)");
            }
        });

    }
    textAreaTextLength ()

    function radioCheck() {
        $('.radio input[type="radio"]').on('change', function(){

            $(this).parent().siblings().find('input[type="radio"]').prop('checked', false);

        })
    }
    radioCheck()

    // 체크박스 전체선택 스크립트
    function checkboxAll() {

        $('#checkAll').on("change",function(){
            if($(this).prop('checked')){
            
              $(this).parents('.check-group-wrap').siblings().find('input[type="checkbox"]').prop('checked',true);
              $(this).parents('.check-group-wrap').siblings().find('input[type="text"]').attr("disabled", false);
            } else {
                $(this).parents('.check-group-wrap').siblings().find('input[type="checkbox"]').prop('checked',false);
                $(this).parents('.check-group-wrap').siblings().find('input[type="text"]').attr("disabled", true);
            }
        });
        
        $('input[type="checkbox"]').click(function() {

            var previousValue = $(this).data('storedValue');
            
            /* 활성화 일 경우 */
            if (previousValue) {
                $(this).prop('checked', !previousValue);
                $(this).data('storedValue', !previousValue);
                $(this).addClass('active');
                $(this).parents('.check-group').siblings('.input-wrap').find('input[type="text"]').attr("disabled", true);
            }

            /* 비활성화 일 경우 */
            else{
                $(this).data('storedValue', true);
                $("input[type=checkbox]:not(:checked)").data("storedValue", false);
                $(this).parents('.check-group').siblings('.input-wrap').find('input[type="text"]').attr("disabled", false);
            }

            // if ($(this).is(':checked') === true) {
            //   $(this).parents('.check-group').siblings('.input-wrap').find('input[type="text"]').attr("disabled", false);
            // } else {
            //   $(this).parents('.check-group').siblings('.input-wrap').find('input[type="text"]').attr("disabled", true);
            // }

        });

    }
    checkboxAll()

    // 인풋 넘버 타입 스크립트
    function maxLengthCheck(){

        $('.form-number-box input').on("keyup",function(){
            
            if (this.value.length > this.maxLength) {

                this.value =this.value.slice(0,this.maxLength);
        
            }

        })    
    }
    maxLengthCheck()

    // file custom
    $(".file #file").on('change',function(){
        var fileName = $(".file #file").val();
        $(".file input[type='text']").val(fileName);
    });
    
    //select option custom
    var selectTitle = $('.selected-option');
    selectTitle.on('click', function(){
      $(this).next('.option-list').stop().slideToggle('active');
      $(this).toggleClass('active');
    });

    $('.option-list > li').on('click', function(){

      var value = $(this).html();
      $(this).parent().siblings(selectTitle).html(value);
      $(this).parent().siblings(selectTitle).addClass('selectd');
      $(this).parent().siblings(selectTitle).removeClass('active');
      $(this).parent('.option-list').stop().slideToggle('active');

    });

    //팝업
    $('.popup-btn-wrap > a').on('click', function(){
        var index = $(this).index();
        $('.popup-cont').addClass('active');

        $('.modal-wrap').eq(index).addClass('active').siblings().removeClass('active');
    });

});


