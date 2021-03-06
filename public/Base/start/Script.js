$.easing.jswing = jQuery.easing.swing;
$.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a;
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a;
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a;
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a;
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a;
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a;
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a;
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a;
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a;
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a;
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a;
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a;
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a;
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a;
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a;
        }
        if (f == g) {
            return a + h;
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * 0.3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * 0.3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k / 2) == 2) {
            return e + l;
        }
        if (!j) {
            j = k * (0.3 * 1.5);
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e;
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a;
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a;
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a;
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a;
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a;
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a;
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a;
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
    }
});
$.fn.notice = function(n) {
    n = jQuery.extend({
        ev: 'click'
    }, n);
    return this.each(function() {
        var href = $(this).attr('href');
        if (n.ev == 'click') {
            $(this).unbind('click').click(function(e) {
                e.preventDefault();
                e.returnValue = false;
                $(href).fadeToggle(200, 'easeInCubic');
                $(this).blur()
            })
        } else if (n.ev == 'hover') {
            $(this).unbind('click').click(function(e) {
                e.preventDefault();
                e.returnValue = false
            });
            $(this).unbind('mouseenter').mouseenter(function() {
                $(href).show()
            }).unbind('mouseleave').mouseleave(function() {
                $(href).hide()
            })
        }
        $(href).find('.close').unbind('click').click(function() {
            $(this).parent().fadeOut(200, 'easeOutCubic')
        })
    })
};
var bsq = {};
bsq.gamestart = function() {
    var
        i, pos, documentWidth, documentHeight, mouseX, mouseY;
    pos = [{
        top: 203,
        left: 288,
        ratio: Math.random() * 0.01
    }, {
        top: 124,
        left: 246,
        ratio: Math.random() * 0.01
    }, {
        top: 203,
        left: 305,
        ratio: Math.random() * 0.01
    }, {
        top: 109,
        left: 244,
        ratio: Math.random() * 0.01
    }, {
        top: 133,
        left: 219,
        ratio: Math.random() * 0.01
    }, {
        top: 107,
        left: 183,
        ratio: Math.random() * 0.01
    }, {
        top: 130,
        left: 235,
        ratio: Math.random() * 0.01
    }, {
        top: 174,
        left: 24,
        ratio: Math.random() * 0.01
    }, {
        top: 211,
        left: 25,
        ratio: Math.random() * 0.01
    }, {
        top: 261,
        left: 0,
        ratio: Math.random() * 0.01
    }, ];
    $('.wrapper').bind('mousemove', function(event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    });
    $('.gamestart .bg div').hide();
    $('.gamestart .btn_default').show();
    $('.btn_gamestart').bind("mouseout", function() {
        $('.gamestart .bg div').hide();
        $('.gamestart .btn_default').show();
    });
    $('.btn_gamestart').bind('mouseenter', function() {
        var ranX, i, delay;
        $('.gamestart .btn_default').hide();
        $('.gamestart .bg div').show();
        for (i = 1; i < 7; i++) {
            ranX = Math.random() * 270;
            delay = Math.random() * 300;
            $('.gamestart .bg .over .piece' + i).delay(delay).css('left', ranX).css('top', -10).css('opacity', 1).animate({
                top: 80,
                opacity: 0,
                easing: 'easeInQuad',
                queue: false
            }, 200);
        }
        $('.gamestart .bg .img').animate({
            top: 0 + Math.random() * 5 - 3,
            left: Math.random() * 5 - 3,
            easing: 'easeInQuad',
            queue: false
        }, 40).animate({
            top: 0 + Math.random() * 5 - 3,
            left: Math.random() * 5 - 3,
            easing: 'easeInQuad',
            queue: false
        }, 40).animate({
            top: 0 + Math.random() * 5 - 3,
            left: Math.random() * 5 - 3,
            easing: 'easeInQuad',
            queue: false
        }, 40).animate({
            top: 0,
            left: 0,
            easing: 'easeInQuad',
            queue: false
        }, 40);
        $('.gamestart .bg .txt').animate({
            top: 39 + Math.random() * 2 - 1,
            left: 18 + Math.random() * 2 - 1,
            easing: 'easeInQuad',
            queue: false
        }, 40).animate({
            top: 44 + Math.random() * 2 - 1,
            left: 18 + Math.random() * 2 - 1,
            easing: 'easeInQuad',
            queue: false
        }, 40).animate({
            top: 39 + Math.random() * 2 - 1,
            left: 18 + Math.random() * 2 - 1,
            easing: 'easeInQuad',
            queue: false
        }, 40).animate({
            top: 44,
            left: 18,
            easing: 'easeInQuad',
            queue: false
        }, 40);
        $('.gamestart .bg .over .dust').stop(true, true).css('opacity', 0).css('left', 0).animate({
            opacity: 1,
            left: 10,
            queue: false
        }, 2000).animate({
            opacity: 0,
            left: 20,
            queue: false
        }, 2000)
    });
    $('.gamestart .bg .light').css('opacity', 0);
    setInterval(function() {
        $('.gamestart .bg .light').animate({
            opacity: 0.8,
            easing: 'easeOutQuad',
            queue: false
        }, 500).animate({
            opacity: 0,
            easing: 'easeOutQuad',
            queue: false
        }, 500);
    }, 1200);
    setInterval(function() {
        $('.gamestart .bg div').each(function(idx, elem) {
            var posX, posY;
            documentWidth = $(document).width();
            documentHeight = $(document).height();
            posX = mouseX - (Math.round((documentWidth - 1130) / 2) + 824);
            posY = mouseY - 312;
            if (idx < 7 && idx > 2) {
                $(elem).css('left', pos[idx - 1].left + posX * pos[idx - 1].ratio);
                $(elem).css('top', pos[idx - 1].top + posY * pos[idx - 1].ratio);
            }
        });
    }, 33);
};
bsq.gun = function() {
    $('.trainig-gun .btn_notice').notice();
    $('.gun-view .btn_lending').not('.completed').unbind('mouseenter mouseleave').bind('mouseenter', function() {
        $(this).stop().animate({
            right: 0
        }, 'easeOutQuad');
    }).bind('mouseleave', function() {
        $(this).stop().animate({
            right: -323
        }, 'easeOutQuad');
    });
}
$(function() {
    bsq.gamestart(false);
    if (typeof pmangpub !== 'undefined' && pmangpub.setOnloadView) {
        pmangpub.setOnloadView(function() {
            $('.select, .hd_faq_question .SelectHelpdesk').selectbox();
            layerPopup();
            $.helpdeskReady(helpdeskOption);
        });
    }
});