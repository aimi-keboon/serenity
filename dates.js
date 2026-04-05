/**
 * SOURCE OF TRUTH - RETREAT SCHEDULE
 * Edit the array below to update your website dates and availability.
 */
const retreatDates = [
  {
    "id": "apr26-weekend1",
    "month": "April",
    "dayRange": "10-13",
    "year": "2026",
    "status": "Limited",
    "label": "07-20 April 2026"
  },{
    "id": "apr-2026",
    "month": "April",
    "dayRange": "15-18",
    "year": "2026",
    "status": "Limited",
    "label": "15-18 April 2026"
  },
  {
    "id": "apr26-weekend",
    "month": "April",
    "dayRange": "17-20",
    "year": "2026",
    "status": "Invite-Only",
    "label": "17-20 April 2026"
  },
  {
    "id": "may-10-2026",
    "month": "May",
    "dayRange": "10-13",
    "year": "2026",
    "status": "Limited",
    "label": "10-13 May 2026"
  },
  {
    "id": "jun-22-2026",
    "month": "June",
    "dayRange": "22-25",
    "year": "2026",
    "status": "Available",
    "label": "22-25 June 2026"
  },
  {
    "id": "jul-05-2026",
    "month": "July",
    "dayRange": "05-08",
    "year": "2026",
    "status": "Available",
    "label": "05-08 July 2026"
  }
];

function populateDateDropdown() {
    const dateSelect = document.getElementById('retreat-date');
    if (!dateSelect) return;
    dateSelect.innerHTML = '<option value="" disabled selected>Select an upcoming date...</option>';
    retreatDates.forEach(date => {
        const option = document.createElement('option');
        option.value = date.id;
        option.textContent = `${date.label} — (${date.status})`;
        if (date.status.toLowerCase() === "sold out") option.disabled = true;
        dateSelect.appendChild(option);
    });
}

function populateCalendarList() {
    const listContainer = document.getElementById('schedule-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    retreatDates.forEach(date => {
        const statusClass = date.status.toLowerCase().replace(/\s+/g, '-');
        const strip = document.createElement('div');
        strip.className = `date-strip ${statusClass}`;
        strip.innerHTML = `
            <div class="date-block"><span class="month">${date.month}</span><span class="day">${date.dayRange}</span></div>
            <div class="date-details"><span class="status-pill">${date.status}</span><h3>${date.year} Retreat</h3></div>
            <div class="date-action">${date.status !== "Sold Out" ? `<a href="register.html?date=${date.id}" class="book-link">Select</a>` : "Full"}</div>`;
        listContainer.appendChild(strip);
    });
}

// Export functions if using modules, otherwise they stay global for the script tags