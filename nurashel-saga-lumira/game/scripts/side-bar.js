$(document).one(':storyready', function () {

    // Prevent duplicates
    if ($('#neura-left-bar').length) return;

    // Add left and right sidebars
    $('body').append(`
        <aside id="neura-left-bar">
            <div id="neura-ui-bar-history"></div>
            <div class="neura-left-header">
                <h2 class="neura-game-title">Nurashell Saga - Lumira</h2>
                <span class="neura-game-version">v1.0.2</span>
            </div>
            <div class="neura-left-image">
                <img id="neura-player-image"
                    src="${State.variables.playerImage || 'https://placehold.co/280x500/png'}"
                    alt="Character Image">
            </div>

            <div class="neura-left-location">
                <img id="neura-location-image"
                    src="${State.variables.locationImage || 'https://placehold.co/280x160/png'}"
                    alt="Location Image">
            </div>
        </aside>

        <aside id="neura-right-bar">
            <!-- Reserved for future content -->
        </aside>
    `);


    // Clone the history buttons
    $('#ui-bar-history button').each(function() {
        const $clone = $(this).clone(true);

        // Add text based on original button id
        if ($clone.attr('id') === 'history-backward') {
            $clone.text('←');
        } else if ($clone.attr('id') === 'history-forward') {
            $clone.text('→');
        }

        // Append to your custom history container
        $('#neura-ui-bar-history').append($clone);
    });


});


$(document).on(':passagerender', function () {

    /* PLAYER IMAGE */
    if (State.variables.playerImage && $('#neura-player-image').length) {
        $('#neura-player-image')
            .stop(true, true)
            .fadeOut(200, function () {
                $(this)
                    .attr('src', State.variables.playerImage)
                    .fadeIn(200);
            });
    }

    /* LOCATION IMAGE */
    if (State.variables.locationImage && $('#neura-location-image').length) {
        $('#neura-location-image')
            .stop(true, true)
            .fadeOut(200, function () {
                $(this)
                    .attr('src', State.variables.locationImage)
                    .fadeIn(200);
            });
    }

});



(function () {

    function isMobileView() {
        return window.matchMedia('(max-width: 900px)').matches;
    }

    function ensureMobileButtons() {
        if (!$('#neura-toggle-left').length) {
            $('body').append(`
                <button id="neura-toggle-left" type="button" aria-expanded="false" aria-label="Toggle left sidebar">
                    <span class="neura-dot"></span>
                    <span>Left</span>
                </button>
            `);

            $('#neura-toggle-left').on('click', function () {
                const hidden = $('body').toggleClass('neura-left-hidden')
                                       .hasClass('neura-left-hidden');
                $(this).attr('aria-expanded', (!hidden).toString());
            });
        }

        if (!$('#neura-toggle-right').length) {
            $('body').append(`
                <button id="neura-toggle-right" type="button" aria-expanded="false" aria-label="Toggle right sidebar">
                    <span class="neura-dot"></span>
                    <span>Right</span>
                </button>
            `);

            $('#neura-toggle-right').on('click', function () {
                const hidden = $('body').toggleClass('neura-right-hidden')
                                       .hasClass('neura-right-hidden');
                $(this).attr('aria-expanded', (!hidden).toString());
            });
        }
    }

    function syncAria() {
        const leftHidden = $('body').hasClass('neura-left-hidden');
        const rightHidden = $('body').hasClass('neura-right-hidden');

        $('#neura-toggle-left').attr('aria-expanded', (!leftHidden).toString());
        $('#neura-toggle-right').attr('aria-expanded', (!rightHidden).toString());
    }

    function applyMobileState() {
        if (isMobileView()) {
            // Default: both hidden on mobile
            $('body').addClass('neura-left-hidden neura-right-hidden');
            ensureMobileButtons();
            syncAria();
        } else {
            // Desktop: show both and remove buttons
            $('body').removeClass('neura-left-hidden neura-right-hidden');
            $('#neura-toggle-left, #neura-toggle-right').remove();
        }
    }

    $(document).one(':storyready', function () {
        applyMobileState();
        $(window).on('resize orientationchange', applyMobileState);
    });

})();
