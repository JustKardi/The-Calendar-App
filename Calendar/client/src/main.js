const now = new Date();

class Cell {

    constructor(events, date) {
        this.events = events;
        this.date = date;
    }

    draw() {
        const cell = document.createElement('div');
        cell.classList = 'cal-grid-cell';
        const text = document.createElement('p');
        text.classList = 'cal-grid-cell_date';
        text.textContext = this.date;
        const items = document.createElement('p');
        items.classList = 'cal-grid-cell_events';
        let str = '';
        for (let i = 0; i < this.events.length; i++) {
            str += this.events[i];
            str += '\n';
        }
        items.textContent = str;
        document.querySelector('.cal-container').append(cell);
        cell.append(text);
        cell.append(items);
    }
}