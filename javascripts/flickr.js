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
            method: 'flickr.photosets.getPhotos',
            user_id: '73308752@N00',
            photoset_id: '72157637475399933',
            per_page: 18,
            api_key: '7ffd3c4b9d9f3a486b67124d5b530f11'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var el = $('#imgs '),
        thumb = $('.items--small'),
        big_img = $('.items--big'),
        baseUrl;
        // Add the demo images as links with thumbnails to the page:
        $.each(result.photoset.photo, function (index, photo) {
            baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            // build thumbnail
            $('<li/>').append($('<a/>').append($('<img>').prop('src', baseUrl + '_q.jpg')).prop('href','#')).addClass('item').appendTo(thumb);
            $('<li/>').append($('<a/>').append($('<figure>').append($('<img>').prop('src', baseUrl + '_z.jpg')).append($('<figcaption>').text(photo.title).addClass('img-caption')) ).prop('href','#').prop('title', photo.title)).addClass('item--big').appendTo(big_img);

           /* $('<a/>').append($('<img>').prop('src', baseUrl + '_q.jpg')).prop('href', baseUrl + '_b.jpg')
             .prop('title', photo.title)
             .attr('data-gallery', '')
             .appendTo(el);*/
        });
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

    $('#gallery-container').sGallery({
        fullScreenEnabled: true
      });

    // full year
    $("#year").text( (new Date).getFullYear() );
});