const quotes = {
    future: [
        "Your future is created by what you do today, not tomorrow. — Robert T. Kiyosaki",
        "The future depends on what you do today. — Mahatma Gandhi",
        "By failing to prepare, you are preparing to fail. — Benjamin Franklin",
        "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
        "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
        "Plan your work and work your plan. — Napoleon Hill",
        "The more you plan, the more you can accomplish. — Unknown",
        "Setting schedule is the first step in turning the invisible into the visible. — Tony Robbins",
        "Do something today that your future self will thank you for. — Sean Patrick Flanery",
        "What you do today can improve all your tomorrows. — Ralph Marston"
    ],
    time: [
        "Until we can manage time, we can manage nothing else.",
        "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
        "The way we spend our time defines who we are. — Jonathan Estrin",
        "Time is a created thing. To say 'I don't have time' is to say 'I don't want to.' — Lao Tzu",
        "Time management is the key to a balanced life and clearer thinking. — Unknown",
        "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
        "Don’t count the days, make the days count. — Muhammad Ali",
        "Small daily improvements over time lead to stunning results. — Robin Sharma",
        "Lost time is never found again. — Benjamin Franklin",
        "The key is in not spending time, but in investing it. — Stephen R. Covey"
    ],
    yoga: [
        "Yoga does not just change the way we see things, it transforms the person who sees.",
        "The practice of yoga only requires us to act and be attentive to our actions.",
        "Health is a state of complete harmony of the body, mind, and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open. — B.K.S. Iyengar",
        "Yoga is a light, which once lit, will never dim. The better your practice, the brighter your flame. — B.K.S. Iyengar",
        "The very heart of yoga practice is ‘abyhasa’ – steady effort in the direction you want to go. — Sally Kempton",
        "Yoga begins right where I am – not where I was yesterday or where I long to be. — Linda Sparrowe",
        "Yoga is the journey of the self, through the self, to the self. — The Bhagavad Gita",
        "In truth, yoga doesn't take time – it gives time. — Ganga White",
        "Yoga is not about touching your toes, it is what you learn on the way down. — Jigar Gor",
        "Yoga is the perfect opportunity to be curious about who you are. — Jason Crandell"
    ],
    motivation: [
        "The secret of getting ahead is getting started. — Mark Twain",
        "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
        "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
        "Believe you can and you're halfway there. — Theodore Roosevelt",
        "The only way to do great work is to love what you do. — Steve Jobs",
        "Act as if what you do makes a difference. It does. — William James",
        "With the new day comes new strength and new thoughts. — Eleanor Roosevelt",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. — Albert Schweitzer",
        "Your limitation—it's only your imagination. — Unknown",
        "Push yourself, because no one else is going to do it for you. — Unknown"
    ],
    health: [
        "You're not sick; you're thirsty. Don't treat thirst with medication.",
        "Take care of your body. It's the only place you have to live. — Jim Rohn",
        "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear. — Buddha",
        "The greatest wealth is health. — Virgil",
        "Health is not just about what you're eating. It's also about what you're thinking and saying. — Unknown",
        "A healthy outside starts from the inside. — Robert Urich",
        "Early to bed and early to rise, makes a man healthy, wealthy, and wise. — Benjamin Franklin",
        "Health is the crown on the well person’s head that only the ill person can see. — Robin Sharma",
        "It is health that is real wealth and not pieces of gold and silver. — Mahatma Gandhi",
        "The first wealth is health. — Ralph Waldo Emerson"
    ],
    schedule: [
        "Setting schedule is the first step in turning the invisible into the visible. — Tony Robbins",
        "Plan your work and work your plan. — Napoleon Hill",
        "The more you plan, the more you can accomplish. — Unknown",
        "Failing to plan is planning to fail. — Alan Lakein",
        "A goal without a plan is just a wish. — Antoine de Saint-Exupéry",
        "Planning is bringing the future into the present so that you can do something about it now. — Alan Lakein",
        "Schedule your priorities. — Stephen Covey",
        "A man who does not plan long ahead will find trouble at his door. — Confucius",
        "An hour of planning can save you 10 hours of doing. — Dale Carnegie",
        "Good fortune is what happens when opportunity meets with planning. — Thomas Edison"
    ],
    habits: [
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
        "The chains of habit are too weak to be felt until they are too strong to be broken. — Samuel Johnson",
        "Motivation is what gets you started. Habit is what keeps you going. — Jim Ryun",
        "Successful people are simply those with successful habits. — Brian Tracy",
        "Your habits will determine your future. — Jack Canfield",
        "The secret to your future is hidden in your daily routine. — Mike Murdock",
        "Good habits are worth being fanatical about. — John Irving",
        "First we form habits, then they form us. Conquer your bad habits, or they’ll eventually conquer you. — Dr. Rob Gilbert",
        "Habit is a cable; we weave a thread of it each day, and at last we cannot break it. — Horace Mann",
        "The difference between an amateur and a professional is in their habits. An amateur has amateur habits. A professional has professional habits. — Steven Pressfield"
    ]
};

const quotes_name = [quotes.future, quotes.time, quotes.yoga, quotes.motivation, quotes.health, quotes.schedule, quotes.habits];
const link=["p_to_do_list","p_to_do_list","p_heart","p_to_do_list","p_heart","p_to_do_list","p_heart"];
const set_quotes_name = ["Future", "Time", "Yoga", "Motivation", "Health", "Schedule", "Habit"];

function create_s(g_name, g_quote, g_link) {
    const s_s_name = document.createElement('div');
    s_s_name.classList.add("s_s_name");
    s_s_name.innerText = g_name;

    const s_s_quote = document.createElement('div');
    s_s_quote.classList.add("s_s_quote");
    s_s_quote.innerText = g_quote;

    const s_s_click = document.createElement('div');
    s_s_click.classList.add("s_s_click");
    s_s_click.innerText = "Click to start your day!!!";

    const suggest_schedule = document.createElement('div');
    suggest_schedule.classList.add("suggest_schedule");
    suggest_schedule.append(s_s_name, s_s_quote, s_s_click);

    const s_a = document.createElement('a');
    s_a.classList.add("s_a");
    s_a.href = `/${g_link}.html`;
    s_a.appendChild(suggest_schedule);

    const schedule = document.createElement('div');
    schedule.classList.add("schedule");
    schedule.appendChild(s_a);

    const suggest = document.createElement('div');
    suggest.classList.add("s");
    suggest.append(schedule);
    const s1=document.querySelector(".suggest");
    s1.appendChild(suggest);
}

//create_s("kumar", "shashank", "p_heart");

const bg = document.querySelector(".slide_show");
bg.style.backgroundColor = "black";

let i = 1;
const c = ["black", "black", "white", "black", "white", "white", "white", "white", "white", "white", "black", "#ffffe0", "white"];

const slide_des = document.querySelector(".slide_des");
const slide_name = document.querySelector(".slide_name");

let k = 0;
let r = 0;
let u=0;
for(let i=0;i<7;i++)
{
  create_s(set_quotes_name[i], quotes_name[i][0],link[i]);
  
}
function slide() {
    if (i <= 13) {
        setTimeout(() => {
            bg.style.color = c[i - 1];

            if (r > 9) {
                r = 0;
                k = 0;
            }

            slide_name.innerText = set_quotes_name[k];
            slide_des.innerText = quotes_name[k][r];

            bg.style.backgroundImage = `url("/bg/bg${i}.png")`;

            i++;
            k++;

            if (k >= set_quotes_name.length) {
                k = 0;
                r++;
            }

            slide();
        }, 5000);
    } else {
        i = 1;
        slide();
    }
}

slide();
