/* =========================================================
   NEURASHELL CENTER POPUP MENU — FINAL STABLE VERSION
========================================================= */

(function () {

    /* ---------- CREATE POPUP ONCE ---------- */
    $(document).one(':storyready', function () {

        $('body').append(`
            <button id="neura-toggle" aria-label="Open Menu"></button>

            <div id="neura-overlay"></div>

            <div id="neura-popup" role="dialog" aria-hidden="true">
                <button id="neura-close" aria-label="Close Menu"></button>
                <div class="neura-avatar">
                    <img src="images/characters/leona/leona.png" alt="User Avatar">
                </div>

                <h1 class="neura-title">Nurashell Saga</h1>
                <div class="neura-separator"></div>

                <nav class="neura-menu">
                    <ul id="neura-menu-story"></ul>
                    <ul id="neura-menu-core"></ul>
                </nav>
            </div>
        `);
    });


    $(document).on('click', '#neura-close', function () {
        $('#neura-overlay, #neura-popup').removeClass('open');
    });
    


    /* ---------- SAFE MENU REBUILD ---------- */
    function rebuildNeuraMenu() {
        const $story = $('#menu-story');
        const $core  = $('#menu-core');

        if (!$story.length || !$core.length) {
            return; // SugarCube not ready yet
        }

        const $storyTarget = $('#neura-menu-story');
        const $coreTarget  = $('#neura-menu-core');

        if (!$storyTarget.length || !$coreTarget.length) return;

        $storyTarget.empty();
        $coreTarget.empty();

        $story.children('li').clone(true, true).appendTo($storyTarget);
        $core.children('li').clone(true, true).appendTo($coreTarget);
    }


    /* ---------- CALL REBUILD AT THE RIGHT TIMES ---------- */
    $(document).on(':uiupdate', function () {
        // Delay ensures SugarCube finished rebuilding menus
        setTimeout(rebuildNeuraMenu, 0);
    });

    $(document).on(':storyready', function () {
        setTimeout(rebuildNeuraMenu, 0);
    });


    /* ---------- OPEN / CLOSE LOGIC ---------- */
    $(document).on('click', '#neura-toggle', function (e) {
        e.stopPropagation();
        $('#neura-overlay, #neura-popup').addClass('open');
    });

    $(document).on('click', '#neura-overlay', function () {
        $('#neura-overlay, #neura-popup').removeClass('open');
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            $('#neura-overlay, #neura-popup').removeClass('open');
        }
    });

})();
