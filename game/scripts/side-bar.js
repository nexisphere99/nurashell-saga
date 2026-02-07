$(document).one(':storyready', function () {

    // Prevent duplicates
    if ($('#neura-left-bar').length) return;

    // Add left and right sidebars
    $('body').append(`
        <aside id="neura-left-bar">
            <div id="neura-ui-bar-history"></div>
            <div class="neura-left-header">
                <h2 class="neura-game-title">Nurashell Saga</h2>
                <span class="neura-game-version">v1.0.1</span>
            </div>
            <div class="neura-left-image">
                <img id="neura-player-image"
                     src="${State.variables.playerImage || 'https://placehold.co/280x500/png'}"
                     alt="Character Image">
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


// Update the image on every passage render
$(document).on(':passagerender', function () {
    if (State.variables.playerImage) {
        $('#neura-player-image').attr('src', State.variables.playerImage);
    }
});


$(document).on(':passagerender', function () {
    if (State.variables.playerImage) {
        $('#neura-player-image').fadeOut(200, function() {
            $(this).attr('src', State.variables.playerImage).fadeIn(200);
        });
    }
});
