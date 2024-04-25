document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar');
    const monthLabel = document.getElementById('current-month');
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthBackgrounds = [
        "url('background-images/januar.jpeg')", "url('background-images/february.jpg')", "url('background-images/march.jpg')",
        "url('background-images/april.jpg')", "url('background-images/may.jpg')", "url('background-images/june.jpg')",
        "url('background-images/july.jpg')", "url('background-images/august.jpg')", "url('background-images/september.jpg')",
        "url('background-images/october.jpg')", "url('background-images/novemberr.jpg')", "url('background-images/december.jpg')"
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
        calendarContainer.innerHTML = ''; // Clear previous calendar
        for (let day = 1; day <= daysInMonth(month, year); day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            dayElement.onclick = function() {
                alert(`You clicked on ${day} of ${monthNames[month]}, ${year}`);
            };
            calendarContainer.appendChild(dayElement);
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
