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

    // 라디오버튼 중복선택을 막는 스크립트 및 텍스트 활성화
    function radioBtnNoOverlap () {

        /* 체크박스 중복 클릭 기능 및 시 텍스트 활성화 */
        $('input[type="radio"]').click(function() {

            var previousValue = $(this).data('storedValue');
            
            /* 활성화 일 경우 */
            if (previousValue) {
                $(this).prop('checked', !previousValue);
                $(this).data('storedValue', !previousValue);
                $(this).addClass('active');
                $(this).parent('.radio-group').next('input[type="text"]').attr("disabled", true);
            }
        
            /* 비활성화 일 경우 */
            else{
                $(this).data('storedValue', true);
                $("input[type=radio]:not(:checked)").data("storedValue", false);
                $(this).parent('.radio-group').next('input[type="text"]').attr("disabled", false);
            }
            
            /* overlap 클래스를 넣을 경우 라디오버튼 중복 선택이 가능하게 됨 */
            if(! $(this).parents().hasClass('overlap')) {

                $(this).parents('li.radio-group-wrap').siblings().find('input').prop('checked', false);

            } 
            
        });
      
    }

    radioBtnNoOverlap ()

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
    $(".form-file-box #file").on('change',function(){
        var fileName = $(".form-file-box #file").val();
        $(".form-file-box .upload-name").val(fileName);
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

});


