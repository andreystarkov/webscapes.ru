$(function () {

/* rgba(0,152,114, 1); */
/* rgba(233,242,241, 1); */
/* rgba(0,152,114, 1); */
/* rgba(41,101,156, 1); */
/* rgba(255,194,84, 1); */
/* rgba(199,66,56, 1); */
    $('.get-down').tooltipster({
       animation: 'grow',
       content:
       'Посмотреть портфолио',
       position: 'bottom', theme: '.tooltipster-punk', maxWidth: 260,
        iconTheme: '.icon-cog',});

    $('.tt-go').tooltipster({
   animation: 'grow',
   arrow: true,
   arrowColor: '',
   content: 'Сделать мне приятно.',
   delay: 200,
   fixedWidth: 0,
   maxWidth: 0,
   functionBefore: function(origin, continueTooltip) {
      continueTooltip();
   },
   functionReady: function(origin, tooltip) {},
   functionAfter: function(origin) {},
   icon: '(?)',
   iconDesktop: false,
   iconTouch: false,
   iconTheme: '.tooltipster-icon',
   interactive: false,
   interactiveTolerance: 350,
   offsetX: 0,
   offsetY: 0,
   onlyOne: true,
   position: 'right',
   speed: 350,
   timer: 0,
   theme: '.tooltipster-punk',
   touchDevices: true,
   trigger: 'hover',
   updateAnimation: true
});


    $('.get-down').hover(function () {
        $('i', this).transition({color: 'rgba(0,0,0,0.4)'});
        $(this).transition({ y: '-15px',
            backgroundColor: 'rgba(0,0,0,0.2)', boxShadow: '0px 8px 16px rgba(0,0,0,0.5)'
        });
    }, function () {
        $('i', this).transition({color: 'rgba(0,0,0,0.2)'});
        $(this).transition({ y: '15px',
            backgroundColor: 'rgba(0,0,0,0.1)', boxShadow: '0px 4px 8px rgba(0,0,0,0.4)'
        });
    });

    $('.get-down').click(function(){

    });

    $('.pf-grid figcaption a').hover(function () {
        $(this).css({
            color: '#fff'
        }).animate({
            backgroundColor: '#e15c2e'
        });
    }, function () {
        $(this).animate({
            backgroundColor: '#EF7247'
        });
    });

    $('.era').hover(function () {

        var pf = $('.point-frame', this);

        $('.timeline').fadeToggle();

        $('.point', this).transition({
            backgroundColor: '#EFEDDF',
            borderBottomColor: '#5DBEA9',
            y: '-30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            color: '#111'
        }, function () {
            pf.transition({
                opacity: 1,
                x: '-50px'
            });
        });

        $(this).animate({
            backgroundColor: '#EFEDDF',
            boxShadow: '1px 4px 16px rgba(0,0,0,0.3)',
            borderLeftColor: '#5DBEA9',
        });

    }, function () {

        $('.timeline').fadeToggle();

        $('.point-frame', this).transition({
            opacity: 0,
            x: '50px'
        });

        $('.point', this).transition({
            y: '30px',
            color: 'rgba(146,47,49,0.2)',
            borderBottomColor: 'rgba(78,63,53,0.1);',
            backgroundColor: 'transparent',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
        });

        $(this).animate({
            backgroundColor: 'transparent',
            color: 'rgba(146,47,49,0.2)',
            boxShadow: '0 3px 6px rgba(0,0,0,0.0)',
            borderLeftColor: 'transparent'
        });
    });
});