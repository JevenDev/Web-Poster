let currentWorkIndex = 0;
let currentStudentKey = null;
let zIndexCounter = 100;

$(document).ready(function () {
    const students = {
        "Graphic Design": {
            name: "Student 1",
            works: [
                {
                    title: "Artwork Title 1",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
                { 
                    title: "Artwork Title 2",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
                { 
                    title: "Artwork Title 3",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
            ]
        },
        "Photography": {
            name: "Student 2",
            works: [
                {
                    title: "Photo Title 1",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
                { 
                    title: "Photo Title 2",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
                { 
                    title: "Photo Title 3",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
            ]
        },
        "Industrial Design": {
            name: "Student 3",
            works: [
                {
                    title: "Design Title 1",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
                { 
                    title: "Design Title 2",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
                { 
                    title: "Design Title 3",
                    img: "images/sample-work.png", 
                    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."` },
            ]
        }
    };

    function focusWindow($win) {
        const winId = $win.attr('id');
        $win.css('z-index', ++zIndexCounter);
        $('.taskbar-app').removeClass('focused');
        $(`.taskbar-app[data-window="${winId}"]`).addClass('focused');
    }

    $('.window').draggable({
        handle: '.title-bar',
        start: function () {
            focusWindow($(this));
        }
    });

    $('.window').on('mousedown', function () {
        focusWindow($(this));
    });

    $('#student-select').on('change', function () {
        const selected = $(this).val();
        const student = students[selected];
        if (student) {
            $('#student-display').html(`
                <button class="student-launch" data-student="${selected}">
                    View ${student.name}
                </button>
            `);
        } else {
            $('#student-display').empty();
        }
    });

    $(document).on('click', '.student-launch', function () {
        currentStudentKey = $(this).data('student');
        currentWorkIndex = 0;
        const student = students[currentStudentKey];
        const winId = 'student-work';
        const $win = $('#' + winId);

        $win.find('.title-bar-text').text(`${student.name} — ${currentStudentKey}`);
        $win.find('.student-work-title').text(student.works[0].title);
        const work = student.works[currentWorkIndex];
        $win.find('.student-work-img').attr('src', work.img).attr('alt', student.title);
        $win.find('.student-work-desc').text(work.desc);

        $win.show();
        focusWindow($win);

        if ($(`#taskbar-apps .taskbar-app[data-window="${winId}"]`).length === 0) {
            $('#taskbar-apps').append(`
                <div class="taskbar-app" data-window="${winId}">${student.name}</div>
            `);
        }
    });

    $('#next-work').on('click', function () {
        const student = students[currentStudentKey];
        currentWorkIndex = (currentWorkIndex + 1) % student.works.length;
        const work = student.works[currentWorkIndex];
        $('.student-work-title').text(work.title);
        $('.student-work-img').attr('src', work.img);
        $('.student-work-desc').text(work.desc);        
    });

    $('#prev-work').on('click', function () {
        const student = students[currentStudentKey];
        currentWorkIndex = (currentWorkIndex - 1 + student.works.length) % student.works.length;
        const work = student.works[currentWorkIndex];
        $('.student-work-title').text(work.title);
        $('.student-work-img').attr('src', work.img);
        $('.student-work-desc').text(work.desc);        
    });

    $('.icon:not(.github)').on('click', function () {
        const targetId = $(this).data('window');
        const $win = $('#' + targetId);
        const title = $win.find('.title-bar-text').text();

        $win.show();
        focusWindow($win);

        if ($(`#taskbar-apps .taskbar-app[data-window="${targetId}"]`).length === 0) {
            $('#taskbar-apps').append(`
                <div class="taskbar-app" data-window="${targetId}">${title}</div>
            `);
        }
    });

    $(document).on('click', '.taskbar-app', function () {
        const winId = $(this).data('window');
        const $win = $('#' + winId);

        if ($win.is(':visible')) {
            $win.hide();
            $(this).removeClass('focused');
        } else {
            $win.show();
            focusWindow($win);
        }
    });

    $(document).on('click', '.minimize-btn', function () {
        const $win = $(this).closest('.window');
        const winId = $win.attr('id');
        $win.hide();
        $(`.taskbar-app[data-window="${winId}"]`).removeClass('focused');
    });

    $(document).on('click', '.close-btn', function () {
        const $win = $(this).closest('.window');
        const winId = $win.attr('id');
        $win.hide();
        $(`.taskbar-app[data-window="${winId}"]`).remove();
    });

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