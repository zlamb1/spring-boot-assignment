$(function() {
    if (urls.length > 0) {
        $('#card-main .card-body > a.btn').attr('href', urls[0]);
    }

    if (images.length > 0) {
        $('#card-main .card-img-top').attr('src', images[0]);
    }

    if (altImageDescriptions.length > 0) {
        $('#card-main .card-img-top').attr('alt', altImageDescriptions[0]);
    }

    $('#accordion-steps .collapse').on('shown.bs.collapse', function() {
        const card = $(this).parents('.card');
        const cardImgTop = card.find('.card-img-top');
        const srcAnchor = card.find('.card-body > a.btn');

        const collapseIndex = $('#accordion-steps .collapse').index(this);
        if (collapseIndex < images.length) {
            cardImgTop.attr('src', images[collapseIndex]);
        }
        if (collapseIndex < altImageDescriptions.length) {
            cardImgTop.attr('alt', altImageDescriptions[collapseIndex]);
        }
        if (collapseIndex < urls.length) {
            srcAnchor.attr('href', urls[collapseIndex]);
        }
    });

});