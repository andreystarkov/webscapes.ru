<!DOCTYPE HTML>
<html>
    <head>
        <title>Webscapes</title>

        <meta charset="utf-8">

        <meta name="description" content="" />
        <meta name="keywords" content="разрабока сайтов, ui, front end, оренбург" />

        <link rel="stylesheet" type="text/css" href="css/portfolio.css" />

        <link rel="icon" type="image/png" href="/images/favicon.png" />

        <script src="js/modernizr.custom.js"></script>

        <link rel="apple-touch-icon" sizes="144x144" href="images/apple/ws-144.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="images/apple/ws-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="images/apple/ws-72.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="images/apple/ws-57.png" />

        <link rel="stylesheet" type="text/css"  href="css/root.css" />

        <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/tooltipster.css">
        <link rel="stylesheet" href="css/bootstrap.css">

        <!--[if IE 7]>
          <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome-ie7.min.css">
        <![endif]-->

        <noscript>
            <link rel="stylesheet" href="css/skel-noscript.css" />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="css/style-desktop.css" />
        </noscript>
        <!--[if lte IE 9]><link rel="stylesheet" href="css/ie9.css" /><![endif]-->
        <!--[if lte IE 8]><script src="js/html5shiv.js"></script><link rel="stylesheet" href="css/ie8.css" /><![endif]-->
        <!--[if lte IE 7]><link rel="stylesheet" href="css/ie7.css" /><![endif]-->

    <style>
        .focused { opacity: 1; width: 110%; position: absolute; height: 671px; z-index: 2; top: 0px; left: -5%; background: url(images/px/focus.png) left top; }
        .blurry { width: 110%; position: absolute; height: 671px; top: 0px; left: -5%; background: url(images/px/back.jpg) left top; }
        .darkclouds { opacity: 0.7; width: 110%; position: absolute; height: 671px; top: 0px; z-index: 3; left: -5%; background: url(images/px/darkclouds-2x.png) left top; }

        .raindrops { opacity: 1; width: 110%; position: absolute; height: 671px; top: 0px; z-index: 3; left: -5%; background: url(images/px/raindrops.png) left top; }

        .flash { opacity:0.3; width: 110%; position: absolute; height: 671px; top: 0px; z-index: 3; left: -5%; background: url(images/px/flash-2x.png) left top; }
        .water { opacity:0.8; width: 110%; position: absolute; height: 671px; top: 0px; z-index: 3; left: -5%; background: url(images/px/water.png) left top; }
        .ball-blur { opacity:0.8; width: 400px; position: absolute; height: 494px; top: 210px; z-index: 3; right: 15%; background: url(images/px/ball-blur.png) left top; }
        .ball-focus { opacity:1; width: 577px; position: absolute; height: 494px; top: 160px; z-index: 3; left: 0px; background: url(images/px/ball-focus.png) left top; }
        .px-box { width: 100%; height: 670px; padding: 0; margin:0; position: absolute; left:0; top: 0;}
    </style>

    </head>
    <body>

    <!-- Nav -->

        <nav id="nav">
            <ul>
                <li><a href="#top"><i style="text-decoration: none" class="icon-long-arrow-up"></i></a></li>
                <li><a href="#work">История</a></li>
                <li><a href="#contact">Связаться онлайн</a></li>
            </ul>
        </nav>

    <!-- Home -->

        <div class="wrapper wrapper-style1 wrapper-first" style="height: 670px">

        <div id="px-box" class="px-box">
            <ul id="scene" class="scene">

                <li class="layer" data-depth="0.10"><div class="darkclouds trigger"></div></li>
                <li class="layer" data-depth="0.20"><div class="blurry trigger"></div></li>
                <li class="layer" data-depth="0.80"><div class="focused target"></div></li>
                <li class="layer" data-depth="0.50"><div class="ball-blur"></div></li>
                <li class="layer" data-depth="1.00"><div class="ball-focus"></div></li>
                <li class="layer" data-depth="0.40"><div class="flash"></div></li>
                <li class="layer" data-depth="0.90"><div class="water"></div></li>
            </ul>
        </div>

            <article class="container" id="top">
                <div class="row">

                    <!--  <div class="4u">
                        <span class="me image image-full"><img  src="images/me.jpg" alt="" /></span>
                    </div>-->
                    <div class="15u intro-text">
                        <h1>Вебскейпс</h1>
                        <span>виртуальные пространства</span>

                        <div class="get-down">
                            <a href="#work">
                            <i style="text-decoration: none" class="icon-long-arrow-down icon-3x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>

    <!-- Portfolio -->

        <div class="wrapper wrapper-style3 wrapper-shadow">

            <article id="work">

                <header>
                    <h2 class="thin">The important thing is not to stop questioning. </h2>
                    <span>Curiosity has its own reason for existing.</span>
                </header>

            <div class="container">

                <div class="timeline">

                </div>

                <ul class="pf-grid">

                    <? include "backend/content/pf-icons.inc.htm"; ?>

                </ul>

            </div>

                <footer>
                    <p>And most important, have the courage to follow your heart and intuition.  <br>
                       &mdash; Everything else is secondary.
                    </p>
                <!-- <a href="#contact" class="button button-big">Связаться со мной</a> -->
                </footer>
            </article>
        </div>

        <!-- Contact -->

        <div class="wrapper wrapper-style4">
            <article id="contact">
                <header>
                    <h2>У вас есть интересная идея?</h2>
                    <span>Или же, просто есть о чем сказать?</span>
                </header>
                <div class="call-box" style="margin-top: 20px">
                    <div class="row">
                        <div class="12u">

                            <form method="post" action="#">
                                <div>
                                    <div class="row half">
                                        <div class="6u">
                                            <input type="text" name="name" id="name" placeholder="Ваше имя." />
                                        </div>
                                        <div class="6u">
                                            <input type="text" class="tt-warning" name="email" id="email" placeholder="Способ обратной связи." />
                                        </div>
                                    </div>
                                    <div class="row half">
                                        <div class="12u">
                                            <textarea name="text" id="message" placeholder="Задайте свой вопрос! Или предложите ответ."></textarea>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="12u">
                                            <div id="button-send" class="btn-flat tt-sent">Отправить сообщение</div>

                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

                <footer>
                    <p id="copyright">

                    </p>
                </footer>
            </article>
        </div>

        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<!--    <script src="js/loader.js"></script>   -->
        <script src="js/toucheffects.js"></script>
        <script src="js/transit.js"></script>
        <script src="js/colors.js"></script>
        <script src="js/tooltipster.js"></script>
        <script src="js/shadow.js"></script>
        <script src="js/parallax.js"></script>
        <script src="js/timers.js"></script>
        <script src="js/config.js"></script>
        <script src="js/cookie.js"></script>
        <script src="js/skel.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <link href="http://vjs.zencdn.net/4.1/video-js.css" rel="stylesheet">
        <script src="http://vjs.zencdn.net/4.1/video.js"></script>

        <script src="js/engine.js"></script>

        <script>
            $('#scene').parallax();
        </script>

        <? include "backend/content/modals.inc.htm"; ?>

        <script>

          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-42994394-1', 'webscapes.ru');
          ga('send', 'pageview');

        </script>

    </body>
</html>