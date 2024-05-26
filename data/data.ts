const data = {
  activity_hours: [
    {
      date: "2024-05-01",
      exams_completed: 1,
      hours: 5,
      lessons_taken: 2,
    },
    {
      date: "2024-05-02",
      exams_completed: 1,
      hours: 6,
      lessons_taken: 3,
    },
    {
      date: "2024-05-03",
      exams_completed: 1,
      hours: 4,
      lessons_taken: 2,
    },
    {
      date: "2024-05-04",
      exams_completed: 1,
      hours: 5,
      lessons_taken: 2,
    },
    {
      date: "2024-05-05",
      exams_completed: 1,
      hours: 6,
      lessons_taken: 3,
    },
    {
      date: "2024-05-06",
      exams_completed: 1,
      hours: 4,
      lessons_taken: 2,
    },
    {
      date: "2024-05-07",
      exams_completed: 1,
      hours: 5,
      lessons_taken: 2,
    },
  ],
  average_employee_score: "4.3",
  in_progress_courses: [
    {
      assigned_to: "John Doe",
      description:
          "Learn how to actively listen to customers and colleagues to better understand their needs and concerns.",
      due_date: "2022-12-31",
      status: "In Progress",
      title: "Active Listening",
    },
    {
      assigned_to: "Alice Smith",
      description:
          "Develop your negotiation skills to close deals and resolve conflicts effectively.",
      due_date: "2022-12-31",
      status: "In Progress",
      title: "Negotiation Skills",
    },
    {
      assigned_to: "Michael Brown",
      description:
          "Master the basics of Python programming to build powerful applications and tools.",
      due_date: "2022-12-31",
      status: "In Progress",
      title: "Python Fundamentals",
    },
  ],
  skills_in_development: [
    {
      employees: 3,
      skill: "Active Listening",
    },
    {
      employees: 2,
      skill: "Empathy",
    },
    {
      employees: 2,
      skill: "Problem Solving",
    },
    {
      employees: 2,
      skill: "Negotiation",
    },
    {
      employees: 2,
      skill: "Communication",
    },
    {
      employees: 2,
      skill: "Prospecting",
    },
    {
      employees: 5,
      skill: "Python",
    },
    {
      employees: 5,
      skill: "JavaScript",
    },
    {
      employees: 5,
      skill: "React",
    },
    {
      employees: 4,
      skill: "Content Marketing",
    },
    {
      employees: 4,
      skill: "Social Media",
    },
    {
      employees: 4,
      skill: "SEO",
    },
  ],
  teams: [
    {
      description:
          "ensures customers achieve their desired outcomes with a company's products or services by guiding them through onboarding, providing ongoing training and support, and regularly checking in to understand their needs and challenges. They address issues, gather feedback, anticipate customer needs, and offer solutions to enhance their experience. Additionally, they work on ensuring customer renewals, identifying upsell opportunities, and monitoring usage data for trends and potential improvements. Collaboration with sales, marketing, product development, and technical support teams is crucial to maintaining customer satisfaction and driving long-term business growth.",
      employees: [
        {
          current_score: 4.5,
          email: "johndoe@gmail.com",
          lessons_taken: 6,
          name: "John Doe",
          skills_being_developed: [
            "Active Listening",
            "Empathy",
            "Problem Solving",
          ],
          title: "Customer Success Manager",
        },
        {
          current_score: 3.5,
          email: "janedoe@gmail.com",
          lessons_taken: 4,
          name: "Jane Doe",
          skills_being_developed: [
            "Active Listening",
            "Empathy",
            "Problem Solving",
          ],
          title: "Junior Customer Success",
        },
        {
          current_score: 4.8,
          email: "johnsmith@gmail.com",
          lessons_taken: 8,
          name: "John Smith",
          skills_being_developed: ["Active Listening"],
          title: "Senior Customer Success",
        },
      ],
      overall_score: "4.5",
      title: "Customer Success",
      total_employee_count: 3,
    },
    {
      description:
          "responsible for selling a company's products or services by identifying leads, educating prospects on products or services, and closing deals. They generate revenue by meeting or exceeding sales targets, building relationships with prospects and customers, and collaborating with other departments to ensure customer satisfaction. Sales teams use a variety of tools and techniques to identify and engage with potential customers, including cold calling, email campaigns, and social media outreach. They also track sales data, analyze performance metrics, and adjust strategies to maximize revenue and growth.",
      employees: [
        {
          current_score: 4.2,
          email: "alicesmith@gmail.com",
          lessons_taken: 5,
          name: "Alice Smith",
          skills_being_developed: [
            "Negotiation",
            "Communication",
            "Prospecting",
          ],
          title: "Sales Manager",
        },
        {
          current_score: 4.2,
          email: "bobjohnson@gmail.com",
          lessons_taken: 3,
          name: "Bob Johnson",
          skills_being_developed: [
            "Negotiation",
            "Communication",
            "Prospecting",
          ],
          title: "Sales Representative",
        },
      ],
      overall_score: "4.2",
      title: "Sales",
      total_employee_count: 2,
    },
    {
      description:
          "designs, develops, and maintains software applications, systems, and infrastructure. Engineers work on a variety of projects, from building new features and fixing bugs to optimizing performance and scalability. They collaborate with product managers, designers, and other stakeholders to deliver high-quality software that meets customer needs. Engineers use a range of programming languages, frameworks, and tools to build and deploy applications, and they stay up to date on the latest trends and technologies to ensure their work is cutting-edge and competitive.",
      employees: [
        {
          current_score: 4,
          email: "michealbrown@gmail.com",
          lessons_taken: 10,
          name: "Michael Brown",
          skills_being_developed: ["Python", "JavaScript", "React"],
          title: "Software Engineer",
        },
        {
          current_score: 4.5,
          email: "sarahjohnson@gmail.com",
          lessons_taken: 12,
          name: "Sarah Johnson",
          skills_being_developed: ["Python", "JavaScript", "React"],
          title: "Senior Software Engineer",
        },
        {
          current_score: 4.2,
          email: "davidlee@gmail.com",
          lessons_taken: 8,
          name: "David Lee",
          skills_being_developed: ["Python", "JavaScript", "React"],
          title: "Software Architect",
        },
        {
          current_score: 4,
          email: "emilywhite@gmail.com",
          lessons_taken: 10,
          name: "Emily White",
          skills_being_developed: ["Python", "JavaScript", "React"],
          title: "Software Engineer",
        },
        {
          current_score: 4,
          email: "jamesmith@gmail.com",
          lessons_taken: 10,
          name: "James Smith",
          skills_being_developed: ["Python", "JavaScript", "React"],
          title: "Software Engineer",
        },
      ],
      overall_score: "4.0",
      title: "Engineering",
      total_employee_count: 5,
    },
    {
      description:
          "promotes a company's products or services by creating and executing marketing campaigns, analyzing market trends, and engaging with customers through various channels. Marketers use a mix of online and offline strategies to reach target audiences, including social media, email, content marketing, and events. They track campaign performance, measure ROI, and adjust strategies to maximize results. Collaboration with sales, product, and design teams is essential to ensure consistent messaging and brand identity across all channels.",
      employees: [
        {
          current_score: 4.3,
          email: "jessicabrown@gmail.com",
          lessons_taken: 6,
          name: "Jessica Brown",
          skills_being_developed: ["Content Marketing", "Social Media", "SEO"],
          title: "Marketing Manager",
        },
        {
          current_score: 4.5,
          email: "alexjohnson@gmail.com",
          lessons_taken: 8,
          name: "Alex Johnson",
          skills_being_developed: ["Content Marketing", "Social Media", "SEO"],
          title: "Digital Marketing Specialist",
        },
        {
          current_score: 4.2,
          email: "sophialee@gmail.com",
          lessons_taken: 5,
          name: "Sophia Lee",
          skills_being_developed: ["Content Marketing", "Social Media", "SEO"],
          title: "Marketing Analyst",
        },
        {
          current_score: 4,
          email: "oliverwhite@gmail.com",
          lessons_taken: 4,
          name: "Oliver White",
          skills_being_developed: ["Content Marketing", "Social Media", "SEO"],
          title: "Marketing Specialist",
        },
      ],
      overall_score: "4.3",
      title: "Marketing",
      total_employee_count: 4,
    },
  ],
  top_employees: [
    {
      current_score: 4.5,
      email: "johndoe@gmail.com",
      name: "John Doe",
      title: "Customer Success Manager",
    },
    {
      current_score: 4.5,
      email: "sarahjohnson@gmail.com",
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
    },
    {
      current_score: 4.5,
      email: "alexjohnson@gmail.com",
      name: "Alex Johnson",
      title: "Digital Marketing Specialist",
    },
  ],
  top_skills: [
    {
      employees: 3,
      skill: "Active Listening",
    },
    {
      employees: 5,
      skill: "Python",
    },
    {
      employees: 5,
      skill: "JavaScript",
    },
    {
      employees: 5,
      skill: "React",
    },
    {
      employees: 4,
      skill: "Content Marketing",
    },
  ],
  total_completed_courses: 100,
  total_employees: 14,
  upcoming_courses: [
    {
      assigned_to: "Jane Doe",
      description:
          "Learn how to empathize with customers and colleagues to build stronger relationships and resolve conflicts.",
      due_date: "2023-01-31",
      status: "Upcoming",
      title: "Empathy Training",
    },
    {
      assigned_to: "David Lee",
      description:
          "Master the React framework to build interactive and dynamic web applications.",
      due_date: "2023-01-31",
      status: "Upcoming",
      title: "React Development",
    },
    {
      assigned_to: "Oliver White",
      description:
          "Understand the fundamentals of SEO to improve your website ranking and visibility online.",
      due_date: "2023-01-31",
      status: "Upcoming",
      title: "SEO Essentials",
    },
  ],
};
export default data;
