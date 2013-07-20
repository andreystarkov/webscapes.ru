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

    $('.tt-dev').tooltipster({
   animation: 'grow',
   arrow: true,
   arrowColor: '',
   content: 'Посмотреть в живую.',
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
   position: 'bottom',
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

        $('.timeline').fadeToggle();
        $('.point-frame', this).transition({
                opacity: 1,
                x: '-50px'
            });

        $('.point', this).transition({
            backgroundColor: '#cbc3ba',
            borderBottomColor: '#b16e52',
            y: '-30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            color: '#111'
        }, function () {

        });

        $(this).animate({
            backgroundColor: '#c4b7ab',
            boxShadow: '1px 4px 16px rgba(0,0,0,0.3)',
            borderLeftColor: '#b16e52',
        });

    }, function () {

        $('.timeline').fadeToggle();

        $('.point-frame', this).transition({
            opacity: 0,
            x: '50px'
        });

        $('.point', this).transition({
            y: '30px',
            color: 'rgba(229,222,215,0.5);',
            borderBottomColor: 'rgba(229,222,215,0.2);',
            backgroundColor: 'transparent',
            boxShadow: '0 1px 3px rgba(0,0,0,0)'
        });

        $(this).animate({
            backgroundColor: 'transparent',
            color: 'rgba(146,47,49,0.2)',
            boxShadow: '0 3px 6px rgba(0,0,0,0.0)',
            borderLeftColor: 'transparent'
        });
    });
});