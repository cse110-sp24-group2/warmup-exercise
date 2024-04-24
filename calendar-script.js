document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar');
    const monthLabel = document.getElementById('current-month');
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthBackgrounds = [
        "url('images/january.jpg')", "url('images/february.jpg')", "url('images/marchh.jpg')",
        "url('images/april.jpg')", "url('images/may.jpg')", "url('images/june.jpg')",
        "url('images/july.jpg')", "url('images/august.jpg')", "url('images/september.jpg')",
        "url('images/october.jpg')", "url('images/november.jpg')", "url('images/december.jpg')"
    ];

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    const monthClasses = ["january", "february", "march", "april", "may", "june",
                          "july", "august", "september", "october", "november", "december"];

    function updateMonthYear() {
        monthLabel.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        document.body.style.backgroundImage = monthBackgrounds[currentMonth];
        monthLabel.className = ''; // Clear previous class
        monthLabel.classList.add(monthClasses[currentMonth]); // Apply new class for font color
    }

    function daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    function createCalendar(month, year) {
        updateMonthYear();

        // Get some of the info to build dates
        let firstDay = new Date(year, month, 1).getDay();
        let lastDate = new Date(year, month + 1, 0).getDate();
        let lastDay = new Date(year, month + 1, 0).getDay();
        let lastDatePrevMonth = new Date(year, month, 0).getDate();

        calendarContainer.innerHTML = ''; // Clear previous calendar

        // Add the beginning days of the previous month
        for (let i = firstDay; i > 0; i--) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'diff-month');
            dayElement.textContent = lastDatePrevMonth - i + 1;
            calendarContainer.appendChild(dayElement);
        }
        // Add the days of the current month
        for (let day = 1; day <= daysInMonth(month, year); day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            dayElement.onclick = function() {
                alert(`You clicked on ${day} of ${monthNames[month]}, ${year}`);
            };
            calendarContainer.appendChild(dayElement);
        }

        // Fill the week with days from the next month
        let num = 1;
        for (let i = lastDay+1; i <= 6; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'diff-month');
            dayElement.textContent = num;
            calendarContainer.appendChild(dayElement);
            num++;
        }
    }

    document.getElementById('prev-month').addEventListener('click', () => changeMonth(-1));
    document.getElementById('next-month').addEventListener('click', () => changeMonth(1));

    function changeMonth(change) {
        currentMonth += change;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        createCalendar(currentMonth, currentYear);
    }

    createCalendar(currentMonth, currentYear);
});
