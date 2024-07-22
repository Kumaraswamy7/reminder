const s_m = document.querySelector(".s");
const s = document.querySelector(".schedule");

s.addEventListener('click', () => {
  s_m.style.display = "flex";
});

let taskIdCounter = 0;
let delete_t = "";

function add(alarmDate, taskText) {
  const m = document.querySelector(".main_to_do_list");
  const a = document.createElement('div');
  a.classList.add('add');
  a.style.width = "18vh";
  a.style.fontSize = "3vh";
  a.style.backgroundColor = "#fff";

  let day = (alarmDate.getHours() >= 12) ? "PM" : "AM";
  let hours = alarmDate.getHours() % 12;
  hours = hours ? hours : 12; 

  a.innerText = `${hours} : ${alarmDate.getMinutes().toString().padStart(2, '0')} ${day}`;

  const b = document.createElement('div');
  b.classList.add('add_list');
  b.innerText = taskText;

  const bc = document.createElement('div');
  bc.classList.add('add');
  bc.innerHTML = '<i class="fa-solid fa-trash"></i>';

  const c = document.createElement('div');
  c.classList.add('schedule');
  c.id = `t_${taskIdCounter}`;
  taskIdCounter++; // Increment the counter for the next task
  c.dataset.taskText = taskText; // Store the task text in a data attribute
  c.append(a, b, bc);
  delete_t = c;
  m.prepend(c);
  s_m.style.display = "none";

  bc.addEventListener("click", () => {
    c.remove();
    clearTimeout(timeoutId);

  });
}

const u = document.querySelector(".btn");
u.addEventListener('click', sent);
const v = document.querySelector(".btn1");
v.addEventListener('click', ()=>{
  s_m.style.display = "none";
});

function sent() {
  const now = new Date();
  const alarmTime = document.querySelector('.alarmTime').value;
  const taskText = document.querySelector('.text').value;

  if (!alarmTime) {
    alert('Please set an alarm time.');
    return;
  }

  let alarmDate = new Date();
  const [hours, minutes] = alarmTime.split(':');
  alarmDate.setHours(hours);
  alarmDate.setMinutes(minutes);
  alarmDate.setSeconds(0);

  const send = alarmDate - now;
  if (send > 0) {
    add(alarmDate, taskText);
    let d_t = delete_t;
    setTimeout(() => {
      p(d_t);
    }, send);
  } else {
    alert("The future time is already past.");
    console.log("The future time is already past.");
  }
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}

function p(u_d_t) {
  const taskText = u_d_t.dataset.taskText; // Access the stored task text
  const task = document.querySelector(".t_a");
  task.style.display = "flex";
  const alarmDate = new Date();
  let day = (alarmDate.getHours() >= 12) ? "PM" : "AM";
  let hours = alarmDate.getHours() % 12;
  hours = hours ? hours : 12; 
  const task_time = document.querySelector(".task_ask_time");
  task_time.innerText = `${hours} : ${alarmDate.getMinutes().toString().padStart(2, '0')} ${day}`;
  const task_task = document.querySelector(".task_ask_task");
  task_task.innerText = taskText;

  const yes = document.querySelector(".yes");
  const cancel = document.querySelector(".cancle");
  const postpone = document.querySelector(".postpone");

  yes.addEventListener("click", () => {
    task.style.display = "none";
    u_d_t.remove();
  });

  cancel.addEventListener("click", () => {
    task.style.display = "none";
    u_d_t.remove();
  });

  postpone.addEventListener("click", () => {
    task.style.display = "none";
  });

  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      speak(taskText);
    }, i * 2000);
  }
}
