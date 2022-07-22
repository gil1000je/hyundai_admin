$(document).ready(function() {

    // 테이블 타입 4의 메니페스토 설정 페이지 관련 스크립트
    function manifesto() {

        $('.manifesto .input-wrap.radio input[type="radio"]').on('change',function(){
            

            if($(this).hasClass('link_btn')) {

                $(this).parents('tr').find('.btn-wrap .common-btn').hide()
                $(this).parents('tr').find('.input-wrap.file').hide()
                $(this).parents('tr').find('.title').hide()
                $(this).parents('tr').find('.link').show()

            } else {
                $(this).parents('tr').find('.btn-wrap .common-btn').show()
                $(this).parents('tr').find('.input-wrap.file').show()
                $(this).parents('tr').find('.title').show()
                $(this).parents('tr').find('.link').hide()

                
            }

        })

    }
    manifesto()
    
    // table-wrap에 empty 부여하면 TD 내용 제거
    function tableEmpty() {
        $('.table-wrap.empty').find('td').html("")
    }
    tableEmpty()

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

    // 라디오 버튼 중복 체크 방지 스크립트
    function radioCheck() {
        $('.radio input[type="radio"]').on('change', function(){

            $(this).parent().siblings().find('input[type="radio"]').prop('checked', false);

        })
    }
    radioCheck()

    //전체선택 스크립트
    function checkAll() {

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

        $('th input[type="checkbox"]').on('change', function(){

            if ($(this).is(':checked') === true) {
                $(this).parents('.table-wrap').find('td input[type="checkbox"]').prop("checked", true);
            } else {
                $(this).parents('.table-wrap').find('td input[type="checkbox"]').prop("checked", false);
            }
            
        })
        $('td input[type="checkbox]').on('change',function(){

            if ($(this).is(':checked') === true) {

                $(this).parents('.table-wrap').find('th input[type="checkbox"]').prop("checked", true);
                
            } else {
    
                $(this).parents('.table-wrap').find('th input[type="checkbox"]').prop("checked", false);
            }

        })

        $('.check.all').find('input').on('change',function(){

            if($(this).is(':checked')){
                $(this).parents('.table-wrap').find('input').prop('checked', true);
            } else {
                $(this).parents('.table-wrap').find('input').prop('checked', false);
            }

        })

    }

    checkAll()

    // 인풋 넘버 타입 스크립트
    function maxLengthCheck(){

        $('input[type="number"]').on("keyup",function(){
            
            if (this.value.length > this.maxLength) {

                this.value =this.value.slice(0,this.maxLength);
        
            }

        })    
    }
    maxLengthCheck()

    // 파일 타입 인풋박스 스크립트
    function fileInput() {

        // file custom
        $(".file #file").on('change',function(){

            var fileName = $(this).val();
            $(this).parents('.file').find("input[type='text']").val(fileName);
        });

    }
    fileInput()
    
    // 셀렉트 박스 스크립트
    function selectBox() {

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

    }
    selectBox()

    //팝업
    function ShowPopup () {

        $('.popup-btn-wrap > a').on('click', function(){
            var index = $(this).index();
            $('.popup-cont').addClass('active');
    
            $('.modal-wrap').eq(index).addClass('active').siblings().removeClass('active');
        });

    }
    ShowPopup ()
    
    //캘린더
    $.datepicker.setDefaults({
        
        dateFormat: 'yy-mm-dd',
        dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

    });
    $(function(){
        $('.datepicker').datepicker();
    })

    //검색
    // var btnClear = document.querySelectorAll('.btn-clear');
    // btnClear.forEach(function(btn){
    //     btn.addEventListener('click', function(){
    //         btn.parentNode.querySelector('input[type="search"]').value = "";
    //     })
    // });

    // $('.search-input').each(function(){
    //   $(this).find('input[type="search"]').on('keyup focus', function(){
    //     $(this).siblings('.btn-clear').attr('style', 'visibility: visible');
  
    //     if($(this).val().length == 0){
    //       $(this).siblings('.btn-clear').attr('style', 'visibility: hidden');
    //     } else {
    //       $(this).siblings('.btn-clear').attr('style', 'visibility: visible');
    //     }
    //   });
    
    //   $(this).find('input[type="search"]').on('blur', function(){
    //     $(this).siblings('.btn-clear').attr('style', 'visibility: hidden');
    //   });
    
    //   $(this).find('.btn-clear').on('click touchstart', function(){
    //     $(this).closest('.search-input').find('input[type="search"]').val('');
    //     $(this).closest('.search-input').find('.btn-clear').attr('style', 'visibility: hidden');
    //     return false;
    //   });
    // });
});


