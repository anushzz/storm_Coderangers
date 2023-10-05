var defaultThreads = [
    {
        id: 1,
        title: "Is there scope in Mechanical Engineering?",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content:"Yes, I'm a mechanical engineer in Germany since 3 years and this field has yet much more to explore. If you are interested in mechanics or physics, totally go for it without a second thought."
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Yes There is. Dream Companies such as mercedes, texa and many more are paying unbelievable amount to mechanical engineers. Also you learn new things everyday."
            }
        ]
    },
    {
        id: 2,
        title: "How do you use Career-compass",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Akash",
                date: Date.now(),
                content: "Just 3 simple steps: 1.make your account; 2.find career suitable to your preferences; 3.explore about every domain."
            },
            {
                author: "Dhruv",
                date: Date.now(),
                content: "I booked a counsellor appointment via this website and it really helped me get a clear vision for my career."
            },
            {
                author: "Dhruv",
                date: Date.now(),
                content: "I booked a counsellor appointment via this website and it really helped me get a clear vision for my career."
            }
        ]
    },
    {
        id: 3,
        title:" Shall I choose Engineering or Medical",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "John",
                date: Date.now(),
                content:"Depends whether you like maths or biology. "
            },
          
        ]
    },
    {
        id: 4,
        title:"Can you recommend any online courses, certifications, or resources that have helped you advance in your career?",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Aditya",
                date: Date.now(),
                content:"Sure you can definitely explore Web development, Machine learning, data science and cloud computing courses from Udemy, aws, etc to enhance your cv  "
            },
            {
                author: "Lenoy",
                date: Date.now(),
                content:"Courses in what field are you asking about?"
            },

          
        ]
    },
    {
        id: 5,
        title:" Can you share your experience with a specific career path or industry? What advice would you give to someone considering that field?",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Dhruv",
                date: Date.now(),
                content:"I personally feel like Engineering is the safest option out there as it helps you to explore much more opportunities during your course-time. Apart from that, its choice-specific. "
            },
            {
                author: "Vaibhav",
                date: Date.now(),
                content:"I am a Law student and i've worked as an intern in the industry for two years. Its really a good place to make your career if you are interested in it."
            },
            {
                author: "Alex",
                date: Date.now(),
                content:"I'm a Medical student preparing for my entrance; and i personally feel like you should only opt for it if you are mentally ready to commit to the overall pressure."
            },
            {
                author: "Fiona",
                date: Date.now(),
                content:"I confuse. Even i want advice."
            },
          
        ]
    },
    {
        id: 6,
        title:" I love creativity. Which field would be best for me to showcase one",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Abraham",
                date: Date.now(),
                content:"You could work as interior designer, fashion designer, an artist in-itself, or get yourself an acting career;"
            },
            {
                author: "Angela",
                date: Date.now(),
                content:"I'm an Architect. I'm pretty creative too!"
            },
          
        ]
    },
    {
        id: 7,
        title:"What are the most common misconceptions or myths about certain careers or industries?",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Archana",
                date: Date.now(),
                content:"I'm a teacher and one of the biggest myth about Teaching is that its an easy job. No; its not. You have no idea how much of courage it takes to teach students who dont care enough about you "
            },
            {
                author: "Vaneesa",
                date: Date.now(),
                content:"Psychologists can read minds and solve all personal problems. HAHAH; we aint Astrologers XD"
            },
        ]
    },
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}