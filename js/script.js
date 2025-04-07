$(document).ready(function () {
    // make windows draggable
    $('.window').draggable({
        handle: '.title-bar'
    });

    // open windows when folder icon is clicked
    $('.icon').on('click', function () {
        const targetId = $(this).data('window');
        const $win = $('#' + targetId);
        const title = $win.find('.title-bar-text').text();

        // show window and bring it to front
        $win.show().css('z-index', Date.now());

        // only add to taskbar if it doesn't already exist
        if ($(`#taskbar-apps .taskbar-app[data-window="${targetId}"]`).length === 0) {
        $('#taskbar-apps').append(`
            <div class="taskbar-app" data-window="${targetId}">
            ${title}
            </div>
        `);
        }
    });

    // close window and remove taskbar tab
    $('.close-btn').on('click', function () {
        const $win = $(this).closest('.window');
        const winId = $win.attr('id');
        $win.hide();
        $(`.taskbar-app[data-window="${winId}"]`).remove();
    });

    // click taskbar tab to toggle window on/off
    $(document).on('click', '.taskbar-app', function () {
        const winId = $(this).data('window');
        const $win = $('#' + winId);
        if ($win.is(':visible')) {
        $win.hide();
        } else {
        $win.show().css('z-index', Date.now());
        }
    });

    // clock
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
        $('#clock').text(`${hours}:${paddedMinutes} ${ampm}`);
    }

    updateClock();
    setInterval(updateClock, 60000);
});