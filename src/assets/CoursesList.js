export const techCourses = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    image: " ../src/assets/images/javascript.webp",

    category: "Programming",
    description:
      "Learn the basics of JavaScript, including variables, loops, and functions.",
    duration: "4 weeks",
    level: "Beginner",
    instructor: "John Doe",
    price: 49.99,
    rating: 4.5,
    studentsEnrolled: 1200,
    techStack: ["JavaScript", "ES6+", "DOM Manipulation", "Event Handling"],
    goals: [
      "Understand JavaScript fundamentals",
      "Work with variables, loops, and functions",
      "Manipulate the DOM using JavaScript",
      "Handle user interactions with events",
    ],
    highlights: [
      "Beginner-friendly with hands-on projects",
      "Taught by an industry expert",
      "Covers modern ES6+ features",
    ],
    idealFor: [
      "Absolute beginners who want to learn JavaScript",
      "Students and professionals looking to enter web development",
      "Anyone interested in learning how websites work",
    ],
    sections: [
      {
        title: "Introduction to JavaScript",
        lectures: [
          "What is JavaScript?",
          "Setting up your environment",
          "Running your first JavaScript program",
        ],
      },
      {
        title: "JavaScript Fundamentals",
        lectures: [
          "Variables and Data Types",
          "Operators and Expressions",
          "Control Flow: If-Else and Switch Statements",
        ],
      },
      {
        title: "Functions and DOM Manipulation",
        lectures: [
          "Writing Functions in JavaScript",
          "Working with the DOM",
          "Handling User Events",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development with React Native",
    image: "../src/assets/images/reactjs.webp",
    category: "Mobile Development",
    description:
      "Learn to build cross-platform mobile apps using React Native.",
    duration: "6 weeks",
    level: "Intermediate",
    instructor: "Emily Brown",
    price: 0,
    rating: 4.7,
    studentsEnrolled: 2200,
    techStack: ["React Native", "JavaScript", "Expo", "Redux"],
    goals: [
      "Understand React Native fundamentals",
      "Develop cross-platform mobile apps",
      "Use Redux for state management",
      "Deploy apps to the App Store and Google Play",
    ],
    highlights: [
      "Covers both Android and iOS development",
      "Hands-on projects with real-world applications",
      "Taught by an experienced mobile developer",
    ],
    idealFor: [
      "Front-end developers looking to transition to mobile development",
      "Entrepreneurs wanting to build mobile apps",
      "Anyone interested in mobile app development",
    ],
    sections: [
      {
        title: "Introduction to React Native",
        lectures: [
          "Setting Up React Native Environment",
          "Understanding React Native Components",
          "Building Your First App",
        ],
      },
      {
        title: "State Management and Navigation",
        lectures: [
          "Using Hooks and Context API",
          "React Navigation Basics",
          "Handling API Calls in React Native",
        ],
      },
      {
        title: "Deploying and Publishing Apps",
        lectures: [
          "Preparing for App Store & Google Play",
          "Debugging and Testing Mobile Apps",
          "Optimizing Performance",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "DevOps & CI/CD Pipelines",
    image: " ../src/assets/images/docker.webp",
    category: "DevOps",
    description:
      "Master DevOps practices and continuous integration/deployment pipelines.",
    duration: "10 weeks",
    level: "Advanced",
    instructor: "Robert Wilson",
    price: 179.99,
    rating: 4.8,
    studentsEnrolled: 2900,
    techStack: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
    goals: [
      "Understand DevOps principles",
      "Implement CI/CD pipelines",
      "Deploy applications using Docker and Kubernetes",
      "Automate infrastructure with Terraform",
    ],
    highlights: [
      "Hands-on labs with real cloud deployments",
      "Industry-standard DevOps tools",
      "Covers security and monitoring best practices",
    ],
    idealFor: [
      "Software engineers looking to specialize in DevOps",
      "IT professionals wanting to automate deployments",
      "Companies aiming to optimize software delivery",
    ],
    sections: [
      {
        title: "Introduction to DevOps",
        lectures: [
          "What is DevOps?",
          "DevOps Culture and Mindset",
          "Version Control with Git and GitHub",
        ],
      },
      {
        title: "Continuous Integration & Deployment",
        lectures: [
          "Setting Up a CI/CD Pipeline with Jenkins",
          "Automated Testing and Deployment",
          "Using Docker for Containerization",
        ],
      },
      {
        title: "Kubernetes and Cloud Deployment",
        lectures: [
          "Introduction to Kubernetes",
          "Deploying Applications to AWS",
          "Monitoring and Scaling Infrastructure",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Algorithms & Data Structures",
    image: " ../src/assets/images/java-data-structures.webp",
    category: "Computer Science",
    description:
      "Learn fundamental algorithms and data structures to solve complex problems efficiently.",
    duration: "12 weeks",
    level: "Intermediate",
    instructor: "Alice Johnson",
    price: 149.99,
    rating: 4.7,
    studentsEnrolled: 3200,
    techStack: ["Python", "C++", "Java", "Big-O Notation"],
    goals: [
      "Master sorting and searching algorithms",
      "Understand and implement key data structures",
      "Analyze algorithm efficiency with Big-O notation",
      "Solve coding problems with optimized solutions",
    ],
    highlights: [
      "Hands-on coding exercises",
      "Real-world problem-solving scenarios",
      "Covers time and space complexity analysis",
    ],
    idealFor: [
      "Aspiring software engineers",
      "Competitive programmers",
      "Students preparing for coding interviews",
    ],
    sections: [
      {
        title: "Introduction to Algorithms",
        lectures: [
          "What is an Algorithm?",
          "Algorithm Efficiency and Complexity",
          "Big-O Notation Explained",
        ],
      },
      {
        title: "Sorting Algorithms",
        lectures: [
          "Bubble Sort and Selection Sort",
          "Merge Sort and Quick Sort",
          "Heap Sort and Counting Sort",
        ],
      },
      {
        title: "Data Structures",
        lectures: [
          "Arrays and Linked Lists",
          "Stacks and Queues",
          "Trees and Graphs",
        ],
      },
      {
        title: "Advanced Algorithms",
        lectures: [
          "Dynamic Programming Basics",
          "Greedy Algorithms",
          "Graph Algorithms (DFS, BFS, Dijkstra's)",
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Ethical Hacking & Cybersecurity",
    image: " ../src/assets/images/linux-fundamentals.webp",
    category: "Cybersecurity",
    description:
      "Learn how to identify vulnerabilities and secure computer systems.",
    duration: "10 weeks",
    level: "Advanced",
    instructor: "Sarah Lee",
    price: 149.99,
    rating: 4.9,
    studentsEnrolled: 3100,
    techStack: ["Linux", "Kali Linux", "Networking", "Penetration Testing"],
    goals: [
      "Understand ethical hacking techniques",
      "Identify security vulnerabilities",
      "Perform penetration testing",
      "Apply cybersecurity best practices",
    ],
    highlights: [
      "Hands-on cybersecurity labs",
      "Real-world penetration testing scenarios",
      "Guidance from cybersecurity experts",
    ],
    idealFor: [
      "IT security professionals",
      "Students interested in ethical hacking",
      "Anyone wanting to improve cybersecurity skills",
    ],
    sections: [
      {
        title: "Introduction to Ethical Hacking",
        lectures: [
          "What is Ethical Hacking?",
          "Setting Up a Hacking Lab",
          "Networking Basics for Hackers",
        ],
      },
      {
        title: "Penetration Testing Techniques",
        lectures: [
          "Reconnaissance and Information Gathering",
          "Exploiting System Vulnerabilities",
          "Post-Exploitation Techniques",
        ],
      },
      {
        title: "Cybersecurity Defense Strategies",
        lectures: [
          "Incident Response and Mitigation",
          "Firewall and Intrusion Detection Systems",
          "Security Best Practices",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Version Control with Git & GitHub",
    image: " ../src/assets/images/git-for-professionals.webp",
    category: "Software Development",
    description:
      "Learn Git and GitHub to manage code efficiently, collaborate with teams, and contribute to open-source projects.",
    duration: "6 weeks",
    level: "Beginner",
    instructor: "Michael Smith",
    price: 99.99,
    rating: 4.9,
    studentsEnrolled: 4100,
    techStack: ["Git", "GitHub", "Git Bash", "CLI", "Git Workflows"],
    goals: [
      "Understand the fundamentals of Git",
      "Manage repositories and branches effectively",
      "Collaborate using GitHub",
      "Master Git workflows for real-world development",
    ],
    highlights: [
      "Hands-on projects with real repositories",
      "Covers GitHub Actions and Pull Requests",
      "Best practices for team collaboration",
    ],
    idealFor: [
      "Software developers and engineers",
      "Students learning version control",
      "Anyone contributing to open-source projects",
    ],
    sections: [
      {
        title: "Introduction to Git",
        lectures: [
          "What is Version Control?",
          "Installing Git and Setting Up",
          "Basic Git Commands (init, add, commit, status)",
        ],
      },
      {
        title: "Working with GitHub",
        lectures: [
          "Creating and Cloning Repositories",
          "Understanding Commits and History",
          "Branching and Merging",
        ],
      },
      {
        title: "Advanced Git Features",
        lectures: [
          "Rebasing and Resolving Merge Conflicts",
          "Using Git Stash and Reset",
          "Git Hooks and Aliases",
        ],
      },
      {
        title: "Collaborating with GitHub",
        lectures: [
          "Pull Requests and Code Reviews",
          "GitHub Actions for Automation",
          "Open Source Contributions and Best Practices",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Spring & Spring Boot for Java Developers",
    image: " ../src/assets/images//spring-boot.webp",
    category: "Backend Development",
    description:
      "Master Spring Framework and Spring Boot to build powerful Java applications.",
    duration: "10 weeks",
    level: "Intermediate",
    instructor: "Alex Johnson",
    price: 159.99,
    rating: 4.8,
    studentsEnrolled: 2800,
    techStack: [
      "Java",
      "Spring Framework",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
    ],
    goals: [
      "Understand the Spring ecosystem",
      "Develop RESTful APIs with Spring Boot",
      "Secure applications with Spring Security",
      "Use Hibernate and JPA for database management",
    ],
    highlights: [
      "Covers Spring Core, Boot, Security, and JPA",
      "Build real-world backend applications",
      "Best practices for scalable applications",
    ],
    idealFor: [
      "Java developers looking to specialize in Spring",
      "Backend developers building microservices",
      "Students and professionals wanting to master Java backend development",
    ],
    sections: [
      {
        title: "Getting Started with Spring",
        lectures: [
          "Introduction to Spring Framework",
          "Dependency Injection and Beans",
          "Spring Boot vs Spring Framework",
        ],
      },
      {
        title: "Building REST APIs with Spring Boot",
        lectures: [
          "Creating RESTful Endpoints",
          "Spring Boot Controllers and Services",
          "Exception Handling and Validation",
        ],
      },
      {
        title: "Security and Database Integration",
        lectures: [
          "Spring Security Basics",
          "User Authentication and JWT",
          "Using Hibernate and JPA with Spring",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Mastering SQL & Databases",
    image: " ../src/assets/images/sql-and-db-fundamentals.webp",
    category: "Database Management",
    description:
      "Learn SQL from scratch and master database management for efficient data storage and retrieval.",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    instructor: "Sophia Martinez",
    price: 129.99,
    rating: 4.8,
    studentsEnrolled: 3500,
    techStack: ["SQL", "MySQL", "PostgreSQL", "SQLite", "Database Design"],
    goals: [
      "Understand relational databases",
      "Write efficient SQL queries",
      "Design and normalize databases",
      "Work with MySQL and PostgreSQL",
    ],
    highlights: [
      "Hands-on database projects",
      "Real-world case studies",
      "Covers indexing, optimization, and transactions",
    ],
    idealFor: [
      "Aspiring data analysts and engineers",
      "Software developers working with databases",
      "Students preparing for database-related interviews",
    ],
    sections: [
      {
        title: "Introduction to Databases",
        lectures: [
          "What is a Database?",
          "Types of Databases (Relational vs. NoSQL)",
          "Introduction to SQL",
        ],
      },
      {
        title: "SQL Basics",
        lectures: [
          "SELECT, INSERT, UPDATE, DELETE",
          "Filtering Data with WHERE",
          "Sorting and Aggregating Data",
        ],
      },
      {
        title: "Database Design & Normalization",
        lectures: [
          "Primary and Foreign Keys",
          "Normalization (1NF, 2NF, 3NF)",
          "Entity-Relationship Diagrams (ERD)",
        ],
      },
      {
        title: "Advanced SQL & Optimization",
        lectures: [
          "Joins and Subqueries",
          "Indexing and Query Optimization",
          "Transactions and ACID Properties",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Full-Stack Development with MERN Stack",
    image: " ../src/assets/images/javascript-mastery.webp",
    category: "Full-Stack Development",
    description:
      "Learn to build full-stack applications using MongoDB, Express, React, and Node.js.",
    duration: "12 weeks",
    level: "Advanced",
    instructor: "Sarah Thompson",
    price: 189.99,
    rating: 4.9,
    studentsEnrolled: 3500,
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "JWT Authentication",
    ],
    goals: [
      "Develop full-stack applications using MERN",
      "Create a RESTful API with Node.js and Express",
      "Build dynamic front-end applications with React",
      "Secure and deploy MERN applications",
    ],
    highlights: [
      "End-to-end full-stack development",
      "Includes authentication with JWT and Redux",
      "Deploy applications to cloud services",
    ],
    idealFor: [
      "Front-end developers looking to learn backend",
      "Full-stack developers wanting to master the MERN stack",
      "Students and professionals interested in building scalable applications",
    ],
    sections: [
      {
        title: "Building the Backend with Node.js & Express",
        lectures: [
          "Setting Up a Node.js Server",
          "Creating Express Routes",
          "Connecting to MongoDB with Mongoose",
        ],
      },
      {
        title: "Developing the Frontend with React",
        lectures: [
          "React Components and State Management",
          "Using Redux for Global State",
          "Fetching Data from a Backend API",
        ],
      },
      {
        title: "Authentication and Deployment",
        lectures: [
          "Implementing JWT Authentication",
          "Protecting Routes in React",
          "Deploying the MERN App to Heroku",
        ],
      },
    ],
  },
];
