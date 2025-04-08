let currentWorkIndex = 0;
let currentStudentKey = null;
let zIndexCounter = 100;

$(document).ready(function () {

    // student data per program
    // each student has a name and an array of works
    // each work has a title, image, and description
    const students = {
        "Graphic Design": {
            name: "Student 1",
            works: [
                {
                    title: "Artwork Title 1",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
                { 
                    title: "Artwork Title 2",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
                { 
                    title: "Artwork Title 3",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
            ]
        },
        "Photography": {
            name: "Student 2",
            works: [
                {
                    title: "Photo Title 1",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
                { 
                    title: "Photo Title 2",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
                { 
                    title: "Photo Title 3",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
            ]
        },
        "Industrial Design": {
            name: "Student 3",
            works: [
                {
                    title: "Design Title 1",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
                { 
                    title: "Design Title 2",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
                { 
                    title: "Design Title 3",
                    img: "images/sample-work.png", 
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor non nisl semper, dignissim accumsan massa condimentum. Mauris sodales lacus sit amet sem fermentum, et fermentum massa ornare. Donec lacinia, ligula et malesuada iaculis, eros eros sagittis enim, quis blandit ex ligula sed sapien. Phasellus vitae nisl nunc. Suspendisse dignissim, lacus auctor sagittis eleifend, ligula lorem egestas elit, sit amet sodales arcu metus finibus lectus. Nullam vulputate at ante vitae ultricies. Nunc in porttitor dolor, vulputate ullamcorper diam. Aenean vestibulum enim eu facilisis sagittis."},
            ]
        }
    };

    // focus a window and update the taskbar
    function focusWindow($win) {
        const winId = $win.attr('id');
        $win.css('z-index', ++zIndexCounter);
        $('.taskbar-app').removeClass('focused');
        $(`.taskbar-app[data-window="${winId}"]`).addClass('focused');
    }   

    // draggable windows using jQuery UI
    // specifically used https://jqueryui.com/draggable/#constrain-movement for reference
    $('.window').draggable({
        handle: '.title-bar',
        containment: 'window',
        start: function () {
            focusWindow($(this));
        }
    });      

    // focus window on mouse click because earlier method would not call focusWindow
    // when the window is already focused and the title bar is clicked
    $('.window').on('mousedown', function () {
        focusWindow($(this));
    });

    // listen for changes in select dropdown
    // when a student is selected, display name and works
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

    // handles click event on the student-launch button (view student button)
    $(document).on('click', '.student-launch', function () {
        currentStudentKey = $(this).data('student');
        currentWorkIndex = 0;
        const student = students[currentStudentKey];
        const winId = 'student-work';
        const $win = $('#' + winId);

        $win.find('.title-bar-text').text(`${student.name} — ${currentStudentKey}`);
        const work = student.works[currentWorkIndex];
        $win.find('.student-work-title').text(work.title);
        $win.find('.student-work-img').attr('src', work.img).attr('alt', work.title);
        $win.find('.student-work-desc').text(work.desc);        

        $win.show();
        focusWindow($win);

        if ($(`#taskbar-apps .taskbar-app[data-window="${winId}"]`).length === 0) {
            $('#taskbar-apps').append(`
                <div class="taskbar-app" data-window="${winId}">${student.name}</div>
            `);
        }
    });

    // handles click event on next and previous buttons for student work window
    // when next is clicked, increase work index and update display
    // when previous is clicked, subtract work index and update display
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

    // handles click event on desktop icons (except github icon cause its a link)
    // when icon clicked, show corresponding window and add to the taskbar if not present
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

    // handles click event on taskbar icons
    // if window visible, hide and remove focus from taskbar
    // if hidden, show and focus window
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

    // handles click event on minimize and close buttons in windows
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

    // CLOCK YAYYYYYY
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