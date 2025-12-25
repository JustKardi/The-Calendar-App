const now = new Date();

class Cell {
    constructor(events, date) {
        this.events = events;
        this.date = date;
    }

    draw() {
        const cell = document.createElement('div');
        cell.className = 'cal-grid-cell';

        const text = document.createElement('p');
        text.className = 'cal-grid-cell_date';
        text.textContent = this.date.getDate();

        const items = document.createElement('p');
        items.className = 'cal-grid-cell_events';
        items.textContent = this.events.join('\n');

        cell.append(text, items);
        document.querySelector('.cal-container').append(cell);

        return cell;
    }
}


let displayDates = [];

function getCalendarDates(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const cells = [];

    const firstOfMonth = new Date(year, month, 1);

    const startDay = firstOfMonth.getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startDay; i++) {
        cells.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        cells.push(new Date(year, month, day));
    }

    while (cells.length % 7 !== 0) {
        cells.push(null);
    }

    return cells;
}

function isToday(date) {
    return (
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
    );
}


displayDates = getCalendarDates(now);

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

days.forEach(day => {
    const el = document.createElement('div');
    el.className = 'cal-day-header';
    el.textContent = day;
    document.querySelector('.cal-container').append(el);
});

displayDates.forEach(date => {
    if (date === null) {
        const cell = document.createElement('div');
        cell.className = 'cal-grid-cell empty';
        document.querySelector('.cal-container').append(cell);
    } else {
        const cellObj = new Cell([], date);
        const cellEl = cellObj.draw();

        if (isToday(date)) {
            cellEl.classList.remove('cal-grid-cell')
            cellEl.classList.add('now-cell');
        }
    }
});

