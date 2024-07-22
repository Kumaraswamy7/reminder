let e = [];
const yearSelect = document.querySelector('.year');
const monthSelect = document.querySelector('.month');
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

// Populate month select
for (let m = 0; m < 12; m++) {
    const option = document.createElement('option');
    option.value = m;
    option.text = monthNames[m];
    monthSelect.appendChild(option);
}

// Populate year select
for (let year = 1900; year <= currentYear + 50; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
}

yearSelect.value = currentYear;
monthSelect.value = currentMonth;

// Update function
function update() {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);

    function n_day(y, m) {
        return new Date(y, m + 1, 0).getDate();
    }

    function w_day(y, m) {
        return new Date(y, m, 1).getDay();
    }

    const daysInMonth = n_day(year, month);
    const firstDay = w_day(year, month);

    let table = "<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";
    let day = 1;
    let u = 0;

    // Fill in the blanks before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        table += "<td></td>";
        u++;
    }

    // Fill in the days of the month
    for (let i = firstDay; day <= daysInMonth; i++) {
        table += `<td onclick="event_c(new Date(${year}, ${month}, ${day}))">${day}</td>`;
        day++;
        if (i % 7 === 6 && day <= daysInMonth) {
            table += "</tr><tr>";
        }
        u++;
    }

    // Fill in the blanks after the last day of the month
    for (let i = u; i < 42; i++) {
        if ((u - 1) % 7 === 6 && i === u) {
            table += "</tr><tr>";
        }
        table += "<td style='color:#00000000'>.</td>";
        if (i % 7 === 6) {
            table += "</tr><tr>";
        }
    }

    table += "</tr></table>";
    const c = document.querySelector(".calender");
    c.innerHTML = table;
}

yearSelect.addEventListener('change', update);
monthSelect.addEventListener('change', update);

function add(s_date, msg, e_t) {
    const e_date = document.createElement('div');
    e_date.classList.add('date');
    e_date.innerText = `Date : ${s_date.getDate()} - ${s_date.getMonth() + 1} - ${s_date.getFullYear()}`;
    const e_time = document.createElement('div');
    e_time.classList.add('time');
    e_time.innerText = `Time : ${e_t} `;
    const e_text = document.createElement('div');
    e_text.classList.add('e_text');
    e_text.innerText = `Event : ${msg}`;
    const m_s_e_l = document.createElement('div');
    m_s_e_l.classList.add('e_l');
    m_s_e_l.append(e_date, e_time, e_text);
    const e_delete = document.createElement('div');
    e_delete.classList.add('delete');
    e_delete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    e_delete.addEventListener("click", () => {
        removeEventFromList(s_date, msg);
    });
    const m_e_list = document.createElement('div');
    m_e_list.classList.add('e_list');
    m_e_list.append(m_s_e_l, e_delete);
    const e_list = document.querySelector(".m_e_list");
    e_list.append(m_e_list);

    // Add event to the array and schedule it
    e.push({ date: s_date, time: e_t, message: msg, element: m_e_list });
    scheduleSpeakingEvent(s_date, e_t, msg);
}

function event_c(s_date) {
    console.log(s_date.getMonth());
    const set_event = document.querySelector(".set_event");
    set_event.style.display = "flex";
    
    // Clear previous input values
    const e_time = document.querySelector(".e_time");
    const e_text_t = document.querySelector(".e_text_t");
    e_time.value = "";
    e_text_t.value = "";
    const e_submit = document.querySelector(".e_submit");
    const e_cancle = document.querySelector(".e_cancle");

    // Remove previous event listeners to avoid duplicate event handling
    const newSubmit = e_submit.cloneNode(true);
    e_submit.parentNode.replaceChild(newSubmit, e_submit);
    
    const newCancel = e_cancle.cloneNode(true);
    e_cancle.parentNode.replaceChild(newCancel, e_cancle);

    newSubmit.addEventListener("click", () => {
        set_event.style.display = "none";
        const e_t = e_time.value;
        const msg = e_text_t.value;
        const [hours, minutes] = e_t.split(':').map(Number);
        const now = new Date();
        const futureDate = new Date(s_date);
        futureDate.setHours(hours, minutes, 0, 0);
        
        if (futureDate.getTime() > now.getTime()) {
            if (msg && e_t) {
                add(s_date, msg, e_t);
            } else {
                alert("Please enter an event message and time");
            }
        } else {
            alert("Please enter a future time");
        }
    });

    newCancel.addEventListener("click", () => {
        set_event.style.display = "none";
    });
}

function scheduleSpeakingEvent(date, time, message) {
    const [hours, minutes] = time.split(':').map(Number);
    date.setHours(hours, minutes, 0, 0);

    const now = new Date();
    const delay = date.getTime() - now.getTime();
for(let i=0;i<4;i++){
    if (delay > 0) {
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(message);
            speechSynthesis.speak(utterance);
            removeEventFromList(date, message);
        }, delay);
    }
}
}

function removeEventFromList(date, message) {
    e = e.filter(event => {
        if (event.date.getTime() === date.getTime() && event.message === message) {
            event.element.remove();
            return false;
        }
        return true;
    });
}

update();
