$(document).one(':storyready', function () {

    // Only show if first time
    if (!State.variables.firstTimeSplash) return;

    // Add full-screen splash
    $('body').append(`
        <div id="neura-splash">
            <div class="neura-splash-content step1">
                <h1>Nurashell Saga</h1>
                <button id="neura-splash-next">Next</button>
            </div>

            <div class="neura-splash-content step2">
                <p class="neura-warning">
                    ⚠️ This game is 18+ and contains gender bender themes.<br>
                    Leave if you are under 18 or not interested in these themes.
                </p>
                <button id="neura-splash-continue">Continue</button>
            </div>
        </div>
    `);

    // Step 1 → Step 2
    $(document).on('click', '#neura-splash-next', function () {
        $('#neura-splash .step1').addClass('fade-out-scale');
        setTimeout(() => {
            $('#neura-splash .step1').hide();
            $('#neura-splash .step2').show().addClass('fade-in-scale');
        }, 600);
    });

    // Step 2 → Close splash and show story
    $(document).on('click', '#neura-splash-continue', function () {
        $('#neura-splash .step2').addClass('fade-out-scale');
        setTimeout(() => {
            $('#neura-splash').fadeOut(400, function() {
                $(this).remove();
            });
        }, 600);

        // Mark that splash has been shown
        State.variables.firstTimeSplash = false;
    });
});