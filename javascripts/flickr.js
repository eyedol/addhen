/*
 * Bootstrap Image Gallery JS Demo 3.0.0
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global window, document, blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from flickr:
    $.ajax({
        url: (window.location.protocol === 'https:' ?
                'https://secure' : 'http://api') +
                '.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.people.getPublicPhotos',
            user_id: '73308752@N00',
            per_page: 42,
            api_key: '7ffd3c4b9d9f3a486b67124d5b530f11'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var el = $('#imgs '),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:
        $.each(result.photos.photo, function (index, photo) {
            baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a/>').append(
                    $('<img>').prop('src', baseUrl + '_q.jpg')
            ).prop('href', baseUrl + '_b.jpg')
             .prop('title', photo.title)
             .attr('data-gallery', '')
             .appendTo(el);
        });
        $("#imgs").mCustomScrollbar("update");
    });

    $("#imgs").mCustomScrollbar({
        horizontalScroll:true,
        scrollButtons:{
            enable:true
        },
        theme:"light-2"
    });

    /* Isotype */

    // cache container
    var $container = $('#project');
    // initialize isotope
    $container.isotope({
         // options...
    });

    // filter items when filter link is clicked
    $('#filters a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });

    // full year
    $("#year").text( (new Date).getFullYear() );
});