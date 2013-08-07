
    /*
     * QueryLoader v2 - A simple script to create a preloader for images
     *
     * Copyright (c) 2011 - Gaya Kessler
     *
     * Fork by Andrey Starkov based on 2.3, (c) 2013 (https://github.com/andreystarkov)
     *
     */

(function($) {
    function roundFloat(num,decimals){
        return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
    }

	/*Browser detection patch*/
	jQuery.browser = {};
	jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    var qLimages = [];
    var qLbgimages = [];
    var qLdone = 0;
    var qLdestroyed = false;

    var qLparent = "";
    var qLimageContainer = "";
    var qLoverlay = "";
    var qLbar = "";
    var qLpercentage = "";
    var qLimageCounter = 0;
    var qLstart = 0;

    var qLoptions = {
        onComplete: function () {},
        backgroundColor: "#000",
        barColor: "#fff",
        overlayId: 'qLoverlay',
        barHeight: 1,
        percentage: false,
        deepSearch: true,
        completeAnimation: "fade",
        minimumTime: 500,
        onLoadComplete: function () {
             overlay =  $('#'+qLoptions.overlayId);

            if (qLoptions.completeAnimation == "grow") {
                var animationTime = 500;
                var currentTime = new Date();
                if ((currentTime.getTime() - qLstart) < qLoptions.minimumTime) {
                    animationTime = (qLoptions.minimumTime - (currentTime.getTime() - qLstart));
                }

                $(qLbar).stop().animate({
                    "width": "100px",
                    "height": "100px",
                     minHeight: '100px',
                     minWidth: '100px',
                    "left": "50%",
                    "margin-left": '-45px',
                     borderRadius: '50px'
                }, animationTime, function(){
                            $('#'+qLoptions.overlayId).fadeOut(500, function () {
                                $('.get-down').animate({opacity:1}, 1000);
                                $(this).remove();
                                qLoptions.onComplete();
                            });
                        });



            } else {
                $('#'+qLoptions.overlayId).fadeOut(500, function () {
                    $('#'+qLoptions.overlayId).remove();
                    qLoptions.onComplete();
                });
            }
        }
    };

    var afterEach = function (element) {
        //set parent
        qLparent = element;

        //start timer
        qLdestroyed = false;
        var currentTime = new Date();
        qLstart = currentTime.getTime();

        if (qLimages.length > 0) {
            createPreloadContainer();
            createOverlayLoader();
        } else {
            //no images == instant exit
            destroyQueryLoader();
        }
    };

    var createPreloadContainer = function() {
        qLimageContainer = $("<div></div>").appendTo("body").css({
            display: "none",
            width: 0,
            height: 0,
            overflow: "hidden"
        });

        for (var i = 0; qLbgimages.length > i; i++) {
            $.ajax({
                url: qLbgimages[i],
                type: 'HEAD',
                complete: function (data) {
                    if (!qLdestroyed) {
                        addImageForPreload(this['url']);
                    }
                }
            });
        }

    };

    var addImageForPreload = function(url) {
        var image = $("<img />").attr("src", url).appendTo(qLimageContainer);
        bindLoadEvent(image);
    };

    var bindLoadEvent = function (element) {
        qLimageCounter++;
        element.bind("load error", function () {
            completeImageLoading();
        });
    }

    var completeImageLoading = function () {
        qLdone++;

    // Bar animation starts

        var percentage = (qLdone / qLimageCounter) * 100;
        $(qLbar).stop().animate({
            width: percentage + "%",
            opacity: roundFloat(percentage/100,1),
            minWidth: percentage + "%"
        }, 200);

        if (qLoptions.percentage == true) {
            $(qLpercentage).text(Math.ceil(percentage) + "%");
        }

        if (qLdone == qLimageCounter) {
            destroyQueryLoader();
        }
    };

    var destroyQueryLoader = function () {
        $(qLimageContainer).remove();
        qLdestroyed = true;
        qLoptions.onLoadComplete();
    };

    var createOverlayLoader = function () {
        var overlayPosition = "absolute";
        if (qLparent.prop("tagName") == "BODY") {
            overlayPosition = "fixed";
        } else {
            qLparent.css("position", "relative");
        }

        qLoverlay = $("<div id='"+qLoptions.overlayId+"'></div>").css({
            width: "100%",
            height: "100%",
            backgroundColor: qLoptions.backgroundColor,
            backgroundPosition: "fixed",
            position: overlayPosition,
            zIndex: 666999,
            top: 0,
            left: 0
        }).appendTo(qLparent);
        qLbar = $("<div id='qLbar'></div>").css({
            height: "100px",
            "border-top-right-radius": "50px",
            "border-bottom-right-radius": "50px",
            "box-shadow": "0 0 150px rgba(0,0,0,0.5)",
            backgroundColor: qLoptions.barColor,
            width: "0%",
            opacity: '0.1',
            position: "absolute",
            top: "485px"
        }).appendTo(qLoverlay);
        if (qLoptions.percentage == true) {
            qLpercentage = $("<div id='qLpercentage'></div>").text("0%").css({
                height: "40px",
                width: "100px",
                position: "absolute",
                fontSize: "3em",
                top: "50%",
                left: "50%",
                marginTop: "-" + (59 + qLoptions.barHeight) + "px",
                textAlign: "center",
                marginLeft: "-50px",
                color: qLoptions.barColor
            }).appendTo(qLoverlay);
        }
        if (!qLimages.length) {
        	destroyQueryLoader()
        }
    };

    var findImageInElement = function (element) {
        var url = "";
        var obj = $(element);
        var type = "normal";

        if (obj.css("background-image") != "none") {
            var url = obj.css("background-image");
            var type = "background";
        } else if (typeof(obj.attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
            var url = obj.attr("src");
        }

        if (url.indexOf("gradient") == -1) {
            url = url.replace(/url\(\"/g, "");
            url = url.replace(/url\(/g, "");
            url = url.replace(/\"\)/g, "");
            url = url.replace(/\)/g, "");

            var urls = url.split(", ");

            for (var i = 0; i < urls.length; i++) {
                if (urls[i].length > 0 && qLimages.indexOf(urls[i]) == -1 && !urls[i].match(/^(data:)/i)) {
                    var extra = "";
                    if ($.browser.msie && $.browser.version < 9) {
                        extra = "?" + Math.floor(Math.random() * 3000);

                        qLbgimages.push(urls[i] + extra);
                        qLimages.push(urls[i]);
                    } else {
                        qLimages.push(urls[i]);

                        if (type == "background") {
                            qLbgimages.push(urls[i] + extra);
                        } else {
                            bindLoadEvent(obj);
                        }
                    }
                }
            }
        }
    }

    $.fn.queryLoader2 = function(options) {
        if(options) {
            $.extend(qLoptions, options );
        }

        this.each(function() {
            findImageInElement(this);
            if (qLoptions.deepSearch == true) {
                $(this).find("*:not(script)").each(function() {
                    findImageInElement(this);
                });
            }
        });

        afterEach(this);

        return this;
    };

    //browser detect
    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i=0;i<data.length;i++)	{
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            { 	string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS : [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

    };
    BrowserDetect.init();
    jQuery.browser.version = BrowserDetect.version;
})(jQuery);
