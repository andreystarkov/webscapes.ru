$(function () {

function eraHide(obj){

        $('.timeline').fadeToggle();

        $('.point-frame', obj).transition({
            opacity: 0,
            x: '50px'
        });

        $('.point', obj).transition({
            y: '30px',
            color: 'rgba(229,222,215,0.5);',
            borderBottomColor: 'rgba(229,222,215,0.2);',
            backgroundColor: 'transparent',
            boxShadow: '0 1px 3px rgba(0,0,0,0)'
        });

        $(obj).animate({
            backgroundColor: 'transparent',
            color: 'rgba(146,47,49,0.2)',
            boxShadow: '0 3px 6px rgba(0,0,0,0.0)',
            borderLeftColor: 'transparent'
        });
}

function eraShow(obj){

        $('.timeline').fadeToggle();
        $('.point-frame', obj).transition({
                opacity: 1,
                x: '-50px'
        });

        $('.point', obj).transition({
            backgroundColor: '#cbc3ba',
            borderBottomColor: '#b16e52',
            y: '-30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            color: '#111'
        }, function () {

        });

        $(obj).animate({
            backgroundColor: '#c4b7ab',
            boxShadow: '1px 4px 16px rgba(0,0,0,0.3)',
            borderLeftColor: '#b16e52',
        });

}

  if($.cookie('sent') == '1'){
      $('#button-send').html('<i class="icon-ok-circle icon-large"></i> Ваша заявка принята');
      $('#button-send').animate({color: 'rgba(255,255,255,1)'});
      $('#button-send').animate({backgroundColor: '#93cb5d', borderBottomColor: '#618d37', boxShadow: 'inset 0px 0px 0px 1px #618d37, inset 0px 2px 1px 0px rgba(255,255,255,0.75)', color: 'rgba(255,255,255,0)'});
    }



  $('#button-send').click( function(){
    var name = $('#name').val();
    var email = $('#email').val();
    var text = $('textarea#message').val();

      if($.cookie('sent') != '1'){

        if(email == ""){
          $('.tt-warning').tooltipster('enable');
          $('.tt-warning').tooltipster('show');
        } else {

          $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: {
              'name': name,
              'email': email,
              'text': text
            },

            success: function(msg){
              $.cookie('sent', '1',{ expires: 1});
              $('.tt-sent').tooltipster('enable');
              $('.tt-sent').tooltipster('show');
              $('#button-send').animate({backgroundColor: '#93cb5d', borderBottomColor: '#618d37', boxShadow: 'inset 0px 0px 0px 1px #618d37, inset 0px 2px 1px 0px rgba(255,255,255,0.75)', color: 'rgba(255,255,255,0)'},
              function(){
              $('#button-send').html('<i class="icon-ok-circle icon-large"></i> Ваша заявка принята');
              $('#button-send').animate({color: 'rgba(255,255,255,1)'});
              });
            }
          });
      }
      } else {
         $('.tt-sent').tooltipster('enable');
         $('.tt-sent').tooltipster('update', '<i class="icon-warning-sign icon-4x tt-ico"></i><span class="tt-txt">Вы уже отправили одну заявку несколько минут назад. Чтобы отправить ещё одну с этого же компьютера &mdash; подождите несколько минут. </span>');
         $('.tt-sent').tooltipster('show');
      }

  });

    $('.tt').tooltipster({animation: 'swing'});

    $('.tt-sent').tooltipster({
       animation: 'grow',
       content:  '<i class="icon-ok-circle tt-ico icon-4x"></i><span class="tt-txt">Спасибо за обращение! Ваша заявка была отправлена. Мы свяжемся с вами, удобным для Вас способом в кратчайшие сроки.</span>',
       position: 'top', theme: '.tooltipster-punk', maxWidth: 510, trigger: 'click' });
  $('.tt-sent').tooltipster('disable');

    $('.tt-warning').tooltipster({
       animation: 'grow',
       content:  'Вы должны ввести контакную информацию (E-Mail или номер телефона), что бы наш менеджер мог связаться с Вами.',
       position: 'bottom', theme: '.tooltipster-punk', maxWidth: 260, trigger: 'click' });
  $('.tt-warning').tooltipster('disable');


    $('.get-down').hover(function () {
        $('i', this).transition({color: 'rgba(0,0,0,0.4)'});
        $(this).transition({ y: '-10px',
            backgroundColor: 'rgba(0,0,0,0.2)', boxShadow: '0px 8px 16px rgba(0,0,0,0.5)'
        });
    }, function () {
        $('i', this).transition({color: 'rgba(0,0,0,0.2)'});
        $(this).transition({ y: '10px',
            backgroundColor: 'rgba(0,0,0,0.1)', boxShadow: '0px 4px 8px rgba(0,0,0,0.4)'
        });
    });

    $('.get-down').click(function(){

    });

    $('.pf-grid figcaption a').hover(function () {
        $(this).transition({
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.3)',
            backgroundColor: 'rgba(116, 136, 148, 1)'
        });
    }, function () {
        $(this).transition  ({
            boxShadow: 'inset 0 0 0 rgba(0,0,0,0)',
            backgroundColor: 'rgba(116, 136, 148, 0.5)'

        });
    });


    $('.era').hover(function () {
        eraShow($(this));
    }, function () {
        eraHide($(this));
    });

});