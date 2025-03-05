$(function() {
    $(".h-btn .navbar-toggler").on("click", function(a) {
        $("body").addClass("show-menu");
        a.stopPropagation()
    });
    $(document).on("click", function(a) {
        if ($(a.target).is("body") === false) {
            $("body").removeClass("show-menu");
        }
    });
});


$('.partner-slide').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    loop: true,
    margin: 20,
    items: 6,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        },
        1400: {
            items: 6,
            nav: false
        }
    }
});


$('.blog-slider').owlCarousel({
    autoplay: false,
    loop: false,
    margin: 20,
    items: 3,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        768: {
            items: 2,
            nav: false
        },
        1200: {
            items: 3,
            nav: false
        }
    }
});


$(".faq-box-list > a").on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
            .siblings(".content")
            .slideUp(200);
    } else {
        $(".faq-box-list > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
            .siblings(".content")
            .slideDown(200);
    }
});


// Your Calendly link to display in the embed
var mainURL = 'https://calendly.com/abbylester';

// Function to parse page URL for UTM parameter
function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

// Function that will call the popup widget
var showCalendly = (function() {
    Calendly.initPopupWidget({
        url: mainURL,
        prefill: {
            utm: {
                // This will assign the values from the utm parameters in the url as values to the utm parameters in the embed.
                utmSource: getURLParameter('utm_source'),
                utmMedium: getURLParameter('utm_medium'),
                utmCampaign: getURLParameter('utm_campaign'),
                utmTerm: getURLParameter('utm_term'),
                utmContent: getURLParameter('utm_content'),
            },
        },
    })
});