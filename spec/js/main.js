$(function() {

    $('.header').jrumble({ x: 5, y: 5 });

    function randomInt(minValue,maxValue){
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }

    // fucking hell starts now.

    function dwarfDance(obj){

        var a = randomInt(1, 0);

        obj.delay(2500).transition({ rotate: randomInt(3, 10)+'deg', x: randomInt(-5, -20)+'px', delay: randomInt(1500, 3600) }, randomInt(800, 3500), function(){
            obj.transition({ rotate: '7deg', x: randomInt(5, 20)+'px', delay: randomInt(300, 3000)}, randomInt(800, 3500) , function(){
                obj.transition({ x: randomInt(5, 20)+'px', delay: randomInt(800, 3500)}, randomInt(800, 3500), function(){
                     obj.transition({ x: randomInt(-5, -20)+'px', delay: randomInt(800, 3500)}, randomInt(1000, 2500), function(){
                                                    $('.back').animate({backgroundColor: 'rgba(255,255,255,0.8)'}, 500, function(){
                                 $('.back').animate({backgroundColor: 'rgba(0,0,0,1)'}, 200);
                            });
                        if (a == 1) {
                            obj.transition({ y: randomInt(5, 20)+'px', delay: randomInt(800, 3500)}, randomInt(800, 3500), function(){
                                  obj.transition({ y: randomInt(-5, -20)+'px', delay: randomInt(800, 3500)}, randomInt(1000, 2500), function(){
                                    dwarfDance(obj);
                                  });
                            });
                        } else {
                            dwarfDance(obj);
                        }

                    });
               });

            });

        });

    }


    $('.item').hover(function(){

        $(this).animate({backgroundColor: 'rgba(255,255,255,0.1)', borderBottomColor: 'rgba(146,47,49,0.6);'});
    }, function(){
        $(this).animate({backgroundColor: 'rgba(255,255,255,0)', borderBottomColor: 'rgba(0,0,0,0);'});
    });

    $('.hammer').animate({'left': '15%'}, function(){ $('.hammer').transition({ rotate: '360deg' });

       $('.header').trigger('startRumble');
        $('.kaboom').animate({'opacity': '1'}, function(){
            $('.hole').fadeTo(200, 1); $('.back').animate({'opacity': '1'}, function(){
                 $('.header').trigger('stopRumble');

                $('.man').delay(2000).animate({'right': '130px', 'opacity': '1'}, 1000, function(){
                    dwarfDance($('.man'));
                });
                    $('.message').animate({'top': '230px'}).transition({rotate: '-10deg'}, 200, function(){
                        $('.message').transition({rotate: '5deg'}, 200, function(){
                              $('.bottom').slideToggle();
                              $('.message').transition({rotate: '0deg'}, 200);
                        });
                    });



            });
        });
    });

});
