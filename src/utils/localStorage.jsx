const employees = [
    {
        "id": 1,
        "firstName": "John",
        "email": "e@e.com",
        "password": "123",
        "taskCount": { "active": 1, "failed": 0, "completed": 1, "newTask": 1 },
        "tasks": [
            {
                "taskTitle": "Website Audit",
                "taskDescription": "Conduct a full SEO audit on the company website.",
                "taskDate": "2025-02-16",
                "category": "SEO",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Social Media Ads",
                "taskDescription": "Run A/B testing on Facebook ad campaigns.",
                "taskDate": "2025-02-17",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Alice",
        "email": "employee2@example.com",
        "password": "123",
        "taskCount": { "active": 1, "failed": 1, "completed": 1, "newTask": 1 },
        "tasks": [
            {
                "taskTitle": "Email Campaign",
                "taskDescription": "Create an email marketing sequence for new users.",
                "taskDate": "2025-02-18",
                "category": "Email Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Google Ads Optimization",
                "taskDescription": "Optimize Google Ads for better conversion rates.",
                "taskDate": "2025-02-19",
                "category": "PPC",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Blog Content",
                "taskDescription": "Write and publish a blog post on digital marketing trends.",
                "taskDate": "2025-02-20",
                "category": "Content",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Michael",
        "email": "employee3@example.com",
        "password": "123",
        "taskCount": { "active": 2, "failed": 1, "completed": 1, "newTask": 1 },
        "tasks": [
            {
                "taskTitle": "Keyword Research",
                "taskDescription": "Find high-performing keywords for our PPC campaign.",
                "taskDate": "2025-02-21",
                "category": "SEO",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "UX Improvement",
                "taskDescription": "Analyze and improve website UX for better engagement.",
                "taskDate": "2025-02-22",
                "category": "Web Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Competitor Analysis",
                "taskDescription": "Study competitors’ online strategies and compile a report.",
                "taskDate": "2025-02-23",
                "category": "Market Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Content Scheduling",
                "taskDescription": "Plan social media content calendar for next month.",
                "taskDate": "2025-02-24",
                "category": "Social Media",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Sarah",
        "email": "employee4@example.com",
        "password": "123",
        "taskCount": { "active": 2, "failed": 1, "completed": 1, "newTask": 1 },
        "tasks": [
            {
                "taskTitle": "Landing Page Optimization",
                "taskDescription": "Improve landing page conversion rate.",
                "taskDate": "2025-02-25",
                "category": "CRO",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Instagram Engagement",
                "taskDescription": "Increase engagement on Instagram through reels.",
                "taskDate": "2025-02-26",
                "category": "Social Media",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Lead Generation",
                "taskDescription": "Develop a new lead generation funnel.",
                "taskDate": "2025-02-27",
                "category": "Sales",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "firstName": "David",
        "email": "employee5@example.com",
        "password": "123",
        "taskCount": { "active": 1, "failed": 1, "completed": 1, "newTask": 1 },
        "tasks": [
            {
                "taskTitle": "YouTube Ad Strategy",
                "taskDescription": "Develop a YouTube ad campaign for brand awareness.",
                "taskDate": "2025-02-28",
                "category": "Video Marketing",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "E-commerce Optimization",
                "taskDescription": "Improve product page conversion rate.",
                "taskDate": "2025-02-29",
                "category": "E-commerce",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Meet with a new client to discuss marketing needs.",
                "taskDate": "2025-03-01",
                "category": "Client Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "firstName": "Admin",
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () =>{
   const employees = JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));   

   return { employees, admin };
}
