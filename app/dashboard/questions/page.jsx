"use client";
import React, { useState } from "react";

function Questions() {
  const [selectedSection, setSelectedSection] = useState("Full Stack");

  const sections = [
    "Full Stack",
    "Data Analyst",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Machine Learning Engineer",
    "Cybersecurity Specialist",
    "Cloud Architect",
    "Database Administrator",
    "Mobile App Developer",
  ];

  const questions = {
    "Full Stack": [
      {
        question: "What is the difference between SQL and NoSQL databases?",
        answer:
          "SQL databases use structured query language for interacting with data and are well-suited for applications with structured data and relationships, such as banking systems. They support ACID compliance for transaction reliability. NoSQL databases, on the other hand, are non-relational and excel at handling large volumes of unstructured or semi-structured data. They are ideal for scenarios like real-time analytics or IoT, offering flexibility and scalability.",
      },
      {
        question: "Explain the MVC architecture.",
        answer:
          "MVC (Model-View-Controller) is a software design pattern that separates an application into three interconnected components. The Model represents the data and business logic, the View handles the user interface and presentation, and the Controller manages user input, updating the Model and View as necessary. This separation of concerns improves scalability, maintainability, and testability in applications.",
      },
      {
        question: "What are RESTful APIs, and why are they popular?",
        answer:
          "RESTful APIs conform to the principles of REST (Representational State Transfer), a stateless architectural style that uses standard HTTP methods like GET, POST, PUT, and DELETE for operations. They are popular due to their simplicity, scalability, and compatibility with web standards, making them easy to implement and consume across diverse platforms.",
      },
      {
        question: "What is CORS, and how do you handle it?",
        answer:
          "CORS (Cross-Origin Resource Sharing) is a mechanism that allows or restricts web applications running on one domain to access resources from another domain. It is critical for security. To handle CORS, you can configure the server to allow specific origins, methods, and headers, or use middleware in frameworks like Express.js to manage it.",
      },
      {
        question: "Explain the difference between client-side rendering and server-side rendering.",
        answer:
          "Client-side rendering (CSR) loads the web application in the browser, fetching content dynamically through JavaScript. This improves interactivity but may increase initial load times. Server-side rendering (SSR) pre-renders the content on the server and sends it to the browser, improving SEO and reducing initial load times at the expense of interactivity.",
      },
      {
        question: "What are the advantages and disadvantages of microservices architecture?",
        answer:
          "Microservices architecture breaks down an application into small, independent services that can be developed, deployed, and scaled individually. Advantages include scalability, flexibility, and fault isolation. Disadvantages include increased complexity, potential performance overhead from service communication, and the need for robust monitoring.",
      },
      {
        question: "What is a CDN, and how does it improve application performance?",
        answer:
          "A CDN (Content Delivery Network) is a geographically distributed network of servers that deliver content to users based on their location. It improves performance by reducing latency, ensuring faster load times, and handling high traffic by distributing requests across multiple servers.",
      },
      {
        question: "What is WebSocket, and how does it differ from HTTP?",
        answer:
          "WebSocket is a protocol that provides full-duplex communication between the client and server over a single, long-lived connection. Unlike HTTP, which is stateless and requires a new connection for each request, WebSocket allows continuous real-time data exchange, making it ideal for applications like chat, gaming, and live updates.",
      },
      {
        question: "What is OAuth, and how does it work?",
        answer:
          "OAuth is an open standard for access delegation, allowing users to grant third-party applications limited access to their resources without sharing credentials. It uses access tokens issued by an authorization server, enabling secure and controlled access.",
      },
      {
        question: "How would you optimize a full-stack application for performance?",
        answer:
          "Performance optimization in a full-stack application involves techniques like database indexing, caching (e.g., Redis or Memcached), lazy loading of assets, reducing API call latency, using content delivery networks (CDNs), and optimizing server and frontend code to minimize rendering and response times.",
      },
    ],
    "Data Analyst": [
      {
        question: "What is data normalization?",
        answer:
          "Data normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It typically involves dividing a database into smaller tables and establishing relationships between them, which optimizes storage and ensures consistency.",
      },
      {
        question: "What is the purpose of a pivot table?",
        answer:
          "Pivot tables are used to summarize, analyze, and reorganize data. They allow users to group, filter, and calculate data, making it easier to identify trends and gain insights.",
      },
      {
        question: "What is the difference between a left join and an inner join in SQL?",
        answer:
          "An inner join returns only the rows that have matching values in both tables, while a left join returns all rows from the left table and the matched rows from the right table. If no match exists, the result is NULL on the side of the right table.",
      },
      {
        question: "Explain what is meant by 'cleaning data' in data analysis.",
        answer:
          "Cleaning data involves identifying and correcting errors or inconsistencies in the dataset. This can include removing duplicates, filling missing values, correcting typos, and ensuring that all data is consistent and accurate.",
      },
      {
        question: "What is a time-series analysis?",
        answer:
          "Time-series analysis is the process of analyzing data points collected or recorded at specific time intervals. It is used for forecasting, identifying trends, and understanding patterns over time, such as sales trends or stock market performance.",
      },
      {
        question: "What is the purpose of regression analysis?",
        answer:
          "Regression analysis is used to understand relationships between variables and predict outcomes. For example, a data analyst might use linear regression to predict sales based on advertising spend.",
      },
      {
        question: "What is a correlation matrix?",
        answer:
          "A correlation matrix is a table showing correlation coefficients between variables. It helps to identify the relationships between multiple variables and can reveal patterns, such as whether one variable increases as another decreases.",
      },
      {
        question: "What is the difference between descriptive and inferential statistics?",
        answer:
          "Descriptive statistics summarize data from a sample using measures like mean, median, and standard deviation. Inferential statistics use sample data to make predictions or inferences about a population, often using hypothesis testing or confidence intervals.",
      },
      {
        question: "What is a histogram?",
        answer:
          "A histogram is a graphical representation of the distribution of numerical data. It shows how often each range of values occurs and is useful for visualizing the frequency distribution of a dataset.",
      },
      {
        question: "What is a box plot?",
        answer:
          "A box plot is a graphical representation that displays the distribution of data based on a five-number summary: minimum, first quartile, median, third quartile, and maximum. It helps to identify outliers and understand the spread of the data.",
      },
    ],
    "Frontend Developer": [
      {
        question: "What is the purpose of the virtual DOM in React?",
        answer:
          "The virtual DOM is a lightweight JavaScript representation of the actual DOM. It enables React to optimize updates by calculating the differences between the virtual DOM and the real DOM (a process called reconciliation) before making minimal updates to the actual DOM. This improves performance and ensures a smoother user experience.",
      },
      {
        question: "What is CSS specificity?",
        answer:
          "CSS specificity determines which style rule is applied when multiple rules target the same element. It is calculated based on the type of selectors used (inline styles, IDs, classes, etc.), and the most specific rule takes precedence.",
      },
      {
        question: "What is a CSS preprocessor, and why is it used?",
        answer:
          "A CSS preprocessor like Sass or LESS allows developers to write CSS in a more structured way with variables, nesting, and mixins. This makes the stylesheet more maintainable and scalable, especially in large projects.",
      },
      {
        question: "What is the difference between 'display: none' and 'visibility: hidden' in CSS?",
        answer:
          "'display: none' completely removes an element from the document layout, while 'visibility: hidden' hides the element but still occupies space in the layout. 'display: none' affects the flow, whereas 'visibility: hidden' does not.",
      },
      {
        question: "What are media queries in CSS?",
        answer:
          "Media queries are used in CSS to apply different styles based on the device's characteristics, such as screen size, resolution, and orientation. This is a key technique for creating responsive web designs.",
      },
      {
        question: "What is the box model in CSS?",
        answer:
          "The CSS box model describes the rectangular boxes generated for elements, consisting of margins, borders, padding, and the content area. Understanding the box model helps manage element spacing and layout.",
      },
      {
        question: "What are the advantages of using Flexbox over traditional layout techniques?",
        answer:
          "Flexbox offers a more efficient way to create flexible, responsive layouts. It allows elements to dynamically adjust their size and order within a container, making it easier to align and distribute space compared to older layout techniques like floats and positioning.",
      },
      {
        question: "What is the difference between inline and block elements in HTML?",
        answer:
          "Inline elements only take up as much width as necessary and do not start on a new line (e.g., <span>). Block elements take up the full width of their container and start on a new line (e.g., <div>).",
      },
      {
        question: "What is the purpose of the 'z-index' property in CSS?",
        answer:
          "The 'z-index' property controls the stacking order of elements on the z-axis (i.e., their position relative to one another in terms of front-to-back). A higher 'z-index' value places the element in front of elements with a lower value.",
      },
      {
        question: "What are JavaScript closures?",
        answer:
          "A closure is a function that retains access to variables from its lexical scope, even after the function that created those variables has finished executing. Closures are used in callbacks, event handlers, and maintaining private states.",
      },
    ],
    "Backend Developer": [
      {
        question: "What is the role of middleware in web development?",
        answer:
          "Middleware functions in a backend application handle requests and responses. They can perform tasks such as authentication, logging, and error handling. Middleware sits between the server and the application logic, enabling modular and reusable code.",
      },
      {
        question: "What is load balancing, and why is it important?",
        answer:
          "Load balancing distributes incoming traffic across multiple servers to ensure reliability, scalability, and optimal resource utilization. It prevents server overload, ensures high availability, and enhances performance.",
      },
      {
        question: "What is the difference between synchronous and asynchronous programming?",
        answer:
          "Synchronous programming executes tasks sequentially, blocking the process until a task is completed. Asynchronous programming, on the other hand, allows tasks to run in parallel, improving performance and responsiveness by not blocking the execution of other tasks.",
      },
      {
        question: "What is a RESTful API?",
        answer:
          "A RESTful API is an API that adheres to the principles of REST, an architectural style that uses HTTP methods (GET, POST, PUT, DELETE) to manipulate resources. It emphasizes stateless communication, scalability, and simplicity.",
      },
      {
        question: "What is the purpose of caching in web development?",
        answer:
          "Caching is used to store frequently accessed data in a temporary storage location (cache) to reduce retrieval times and improve performance. It helps minimize the need for repetitive computations or database queries.",
      },
      {
        question: "What is the difference between SQL and NoSQL databases?",
        answer:
          "SQL databases are relational and structured, using tables with predefined schemas. NoSQL databases are non-relational and flexible, allowing for unstructured or semi-structured data, making them ideal for handling big data and real-time applications.",
      },
      {
        question: "What are the advantages of using microservices architecture?",
        answer:
          "Microservices architecture breaks down a monolithic application into smaller, independent services that can be developed, deployed, and scaled independently. It offers scalability, fault isolation, and flexibility but introduces complexity in service communication and management.",
      },
      {
        question: "What is a load balancer?",
        answer:
          "A load balancer distributes incoming traffic across multiple servers to ensure no single server is overwhelmed. This improves availability, scalability, and fault tolerance by ensuring high performance even during peak loads.",
      },
      {
        question: "What is the difference between GET and POST requests in HTTP?",
        answer:
          "GET requests retrieve data from a server without changing the server's state, while POST requests send data to the server, potentially modifying the server's state. GET requests are typically idempotent, while POST requests can have side effects.",
      },
      {
        question: "What is a database index, and why is it used?",
        answer:
          "A database index is a data structure that speeds up query retrieval operations by allowing fast lookups. Indexing improves performance but can slow down write operations, as the index must be updated when data is modified.",
      },
    ],
    "DevOps Engineer": [
    {
        question: "What is Continuous Integration (CI)?",
        answer:
        "Continuous Integration (CI) is a software development practice where developers frequently merge their changes into a shared code repository. CI involves automated builds and testing processes to detect errors early, ensuring code quality and reducing integration problems in production. This helps teams to quickly address issues, leading to smoother deployments and faster software releases.",
    },
    {
        question: "What is Continuous Delivery (CD)?",
        answer:
        "Continuous Delivery (CD) is the practice of automatically deploying application changes to production-like environments after successful CI. This ensures that the software is always in a state that can be released to users, reducing the time and effort required for manual deployment and improving the overall efficiency of the release cycle.",
    },
    {
        question: "What is containerization, and how does it work?",
        answer:
        "Containerization is the process of packaging applications and their dependencies into isolated, lightweight containers. These containers can be run consistently across various environments, ensuring that the application behaves the same way regardless of where it is deployed. Popular containerization tools like Docker and Kubernetes provide portability, scalability, and ease of deployment in a distributed system.",
    },
    {
        question: "What is Kubernetes, and how does it help in managing containers?",
        answer:
        "Kubernetes is an open-source container orchestration platform used to automate the deployment, scaling, and management of containerized applications. It provides powerful features like load balancing, self-healing, automatic scaling, and rolling updates. Kubernetes makes it easier to manage microservices architectures, ensuring that containers run efficiently across a cluster of machines.",
    },
    {
        question: "What is the role of monitoring in DevOps?",
        answer:
        "Monitoring in DevOps ensures that applications and infrastructure are running as expected, helping teams identify issues proactively. By continuously tracking performance metrics, error rates, and resource usage, teams can act quickly to resolve issues before they affect end users. Tools like Prometheus, Grafana, and ELK stack are often used to collect, analyze, and visualize data for efficient monitoring.",
    },
    {
        question: "What is Infrastructure as Code (IaC)?",
        answer:
        "Infrastructure as Code (IaC) is a DevOps practice that allows for managing and provisioning infrastructure using machine-readable code instead of manual configuration. IaC provides version-controlled templates for infrastructure, ensuring that environments are reproducible, consistent, and scalable. Tools like Terraform, Ansible, and AWS CloudFormation are commonly used to implement IaC.",
    },
    {
        question: "What is a microservices architecture?",
        answer:
        "Microservices architecture is a design approach where an application is broken down into smaller, independent services that communicate through APIs. Each service is designed to handle a specific business function and can be developed, deployed, and scaled independently. Microservices offer flexibility and scalability but require robust service orchestration and management tools like Kubernetes and Docker.",
    },
    {
        question: "What are the benefits of automation in DevOps?",
        answer:
        "Automation is central to DevOps as it increases speed, reliability, and consistency by eliminating manual intervention in repetitive tasks. Automated processes like builds, tests, deployments, and monitoring lead to fewer errors, faster feedback, and faster delivery of new features or bug fixes to production. Automation tools like Jenkins, GitLab CI, and Ansible streamline the DevOps pipeline.",
    },
    {
        question: "What is the role of version control in DevOps?",
        answer:
        "Version control is a fundamental practice in DevOps that involves tracking changes to the codebase, allowing teams to collaborate effectively and maintain a history of changes. Git is the most popular version control system used in DevOps for managing code repositories, enabling branching, merging, and tracking changes across multiple contributors.",
    },
    {
        question: "What is a blue-green deployment?",
        answer:
        "Blue-Green Deployment is a deployment strategy where two identical environments (Blue and Green) are maintained. The Blue environment is the live production environment, while the Green environment contains the new version of the application. After testing, traffic is switched from Blue to Green, ensuring a seamless transition without downtime. This strategy minimizes the risk of deployment failures.",
    }
    ],
    "Machine Learning Engineer": [
    {
        question: "What is overfitting in machine learning?",
        answer:
        "Overfitting occurs when a model learns the training data too well, including noise and outliers, causing it to perform poorly on unseen data. This typically happens when a model is too complex relative to the amount of training data. To prevent overfitting, techniques like cross-validation, regularization, and pruning are used.",
    },
    {
        question: "What is underfitting in machine learning?",
        answer:
        "Underfitting happens when a model is too simple to capture the underlying patterns in the data. It occurs when the model has high bias and low variance, leading to poor performance on both the training data and new data. To address underfitting, you can increase the model complexity, include more relevant features, or improve data preprocessing.",
    },
    {
        question: "What is cross-validation in machine learning?",
        answer:
        "Cross-validation is a technique used to evaluate the performance of a model by partitioning the dataset into multiple subsets (folds). The model is trained on some folds and tested on the remaining ones. This helps in assessing the model's ability to generalize and reduces the risk of overfitting. K-fold cross-validation is commonly used.",
    },
    {
        question: "What are the differences between supervised and unsupervised learning?",
        answer:
        "Supervised learning involves training a model on a labeled dataset where the input data is paired with correct output labels. Common algorithms include linear regression and decision trees. Unsupervised learning, on the other hand, deals with unlabeled data, where the goal is to find patterns or groupings within the data. Examples include clustering and dimensionality reduction algorithms.",
    },
    {
        question: "What is the bias-variance tradeoff?",
        answer:
        "The bias-variance tradeoff refers to the balance between bias (error due to overly simplistic models) and variance (error due to overly complex models). High bias leads to underfitting, while high variance leads to overfitting. An optimal model minimizes both bias and variance to achieve the best generalization performance.",
    },
    {
        question: "What is gradient descent?",
        answer:
        "Gradient descent is an optimization algorithm used to minimize the cost function in machine learning models. It iteratively adjusts the model's parameters by moving in the direction of the steepest descent, as defined by the negative gradient. Variants of gradient descent include batch, stochastic, and mini-batch gradient descent.",
    },
    {
        question: "What is feature engineering?",
        answer:
        "Feature engineering involves selecting, modifying, or creating new features from raw data to improve the performance of machine learning models. It includes tasks such as normalization, handling missing data, encoding categorical variables, and generating interaction features to better capture patterns in the data.",
    },
    {
        question: "What are decision trees, and how do they work?",
        answer:
        "Decision trees are a supervised learning algorithm used for classification and regression tasks. They split data into subsets based on feature values, creating a tree-like structure. Each internal node represents a decision, and each leaf node represents an outcome. Decision trees are interpretable and easy to implement but can suffer from overfitting if not pruned.",
    },
    {
        question: "What is random forest?",
        answer:
        "Random Forest is an ensemble learning algorithm that combines multiple decision trees to improve the accuracy and robustness of the model. Each tree is trained on a random subset of the data, and the final prediction is made by aggregating the predictions from all the trees. This reduces overfitting and increases generalization.",
    },
    {
        question: "What is the importance of data preprocessing in machine learning?",
        answer:
        "Data preprocessing is crucial because raw data is often messy, inconsistent, or incomplete. Preprocessing steps like data cleaning, normalization, encoding, and feature selection ensure that the model receives high-quality input, which improves its performance and reduces the likelihood of errors or biases in the predictions.",
    }
    ],
    "Cybersecurity Specialist": [
    {
        question: "What is multi-factor authentication (MFA)?",
        answer:
        "Multi-factor authentication (MFA) adds an extra layer of security by requiring users to provide two or more forms of verification. These factors typically include something the user knows (password), something they have (security token or mobile device), and something they are (biometric features like fingerprints).",
    },
    {
        question: "What is a man-in-the-middle (MITM) attack?",
        answer:
        "A Man-in-the-Middle (MITM) attack occurs when an attacker intercepts and potentially alters the communication between two parties without their knowledge. It can compromise sensitive data like passwords or credit card numbers. Secure communication protocols like HTTPS and VPNs are used to prevent MITM attacks.",
    },
    {
        question: "What is SQL injection, and how do you prevent it?",
        answer:
        "SQL injection is a type of attack where an attacker injects malicious SQL queries into an application's input fields to manipulate the database. Prevention involves using parameterized queries or prepared statements, input validation, and ensuring proper access control to databases.",
    },
    {
        question: "What is encryption, and why is it important?",
        answer:
        "Encryption is the process of converting data into a secure format that can only be read by authorized parties. It is vital for protecting sensitive information during transmission or storage. Popular encryption algorithms include AES and RSA. It ensures data confidentiality and prevents unauthorized access.",
    },
    {
        question: "What is the difference between symmetric and asymmetric encryption?",
        answer:
        "Symmetric encryption uses the same key for both encryption and decryption. It is faster but less secure because the key must be shared. Asymmetric encryption uses two keys: a public key for encryption and a private key for decryption. It is slower but more secure, often used in SSL/TLS and digital signatures.",
    },
    {
        question: "What is a DDoS attack, and how do you mitigate it?",
        answer:
        "A Distributed Denial of Service (DDoS) attack involves overwhelming a server, service, or network with a massive amount of traffic to disrupt normal operations. Mitigation strategies include rate-limiting, IP blacklisting, using firewalls, and deploying content delivery networks (CDNs) and DDoS protection services.",
    },
    {
        question: "What is a firewall, and how does it work?",
        answer:
        "A firewall is a network security device that monitors and controls incoming and outgoing traffic based on predefined security rules. It can be hardware or software-based and is used to block unauthorized access while allowing legitimate traffic. Firewalls can be configured to filter traffic by IP address, protocol, or port number.",
    },
    {
        question: "What are security best practices for cloud computing?",
        answer:
        "Cloud security best practices include encrypting sensitive data, implementing identity and access management (IAM), using multi-factor authentication, ensuring secure API connections, and conducting regular security audits. It's also important to choose a reputable cloud service provider that offers strong security controls and compliance certifications.",
    },
    {
        question: "What is a vulnerability assessment?",
        answer:
        "A vulnerability assessment is the process of identifying, quantifying, and prioritizing security vulnerabilities in a system. It involves scanning the system for known weaknesses, evaluating risks, and recommending remediation actions. Regular vulnerability assessments help organizations stay proactive in managing security threats.",
    },
    {
        question: "What is the principle of least privilege?",
        answer:
        "The principle of least privilege states that users should be granted the minimum level of access necessary to perform their job functions. Limiting privileges reduces the attack surface and minimizes the potential damage caused by compromised accounts or accidental actions.",
    }
    ],
    "Cloud Architect": [
    {
        question: "What is Infrastructure as a Service (IaaS)?",
        answer:
        "Infrastructure as a Service (IaaS) is a cloud computing model where cloud providers deliver virtualized computing resources over the internet. These resources include virtual machines, storage, and networking. IaaS eliminates the need for physical hardware and provides scalability, flexibility, and cost-efficiency.",
    },
    {
        question: "What is Platform as a Service (PaaS)?",
        answer:
        "Platform as a Service (PaaS) is a cloud computing model that provides a platform for developing, running, and managing applications without managing the underlying infrastructure. It includes tools for application development, databases, and middleware, allowing developers to focus on coding rather than infrastructure management.",
    },
    {
        question: "What is Software as a Service (SaaS)?",
        answer:
        "Software as a Service (SaaS) is a cloud-based service where applications are hosted and made available over the internet. Users access the software via a browser, and the provider handles maintenance, updates, and security. Examples include Google Workspace, Salesforce, and Microsoft 365.",
    },
    {
        question: "What is hybrid cloud architecture?",
        answer:
        "Hybrid cloud architecture combines on-premises infrastructure with public and private cloud resources. This setup allows organizations to maintain control over sensitive data while leveraging the scalability and cost-efficiency of public clouds for non-sensitive workloads.",
    },
    {
        question: "What is multi-cloud architecture?",
        answer:
        "Multi-cloud architecture refers to the use of multiple cloud computing services from different providers to meet business needs. It provides redundancy, avoids vendor lock-in, and allows organizations to select the best services from various providers for specific requirements.",
    },
    {
        question: "What are cloud security best practices?",
        answer:
        "Cloud security best practices include encryption of data in transit and at rest, implementing strong identity and access management policies, using multi-factor authentication, and monitoring for suspicious activity. Regular security audits, backup strategies, and disaster recovery plans are also essential.",
    },
    {
        question: "What is elasticity in cloud computing?",
        answer:
        "Elasticity in cloud computing refers to the ability to dynamically scale resources up or down based on demand. Cloud environments are designed to handle varying workloads, enabling businesses to quickly adjust resources to maintain performance and reduce costs.",
    },
    {
        question: "What is cloud cost optimization?",
        answer:
        "Cloud cost optimization involves strategies and tools to reduce and manage the costs associated with cloud services. This includes right-sizing instances, using reserved instances, eliminating unused resources, and leveraging auto-scaling features to ensure efficient resource utilization.",
    },
    {
        question: "What is cloud migration?",
        answer:
        "Cloud migration is the process of moving data, applications, or workloads from on-premises infrastructure to the cloud. The migration process typically involves assessing existing infrastructure, selecting a cloud provider, designing the migration strategy, and executing the move with minimal disruption.",
    },
    {
        question: "What is cloud-native application architecture?",
        answer:
        "Cloud-native application architecture involves building and running applications that take full advantage of cloud computing. These applications are designed to be scalable, resilient, and manageable in a cloud environment, typically using microservices, containerization, and continuous integration/continuous deployment (CI/CD) practices.",
    }
    ],
    "Database Administrator": [
    {
        question: "What is indexing in databases?",
        answer:
        "Indexing is a technique used in databases to improve the speed of data retrieval operations. It creates a data structure (usually a B-tree or hash table) that allows for efficient lookups of records. Proper indexing reduces the time complexity of queries and improves database performance.",
    },
    {
        question: "What is normalization in databases?",
        answer:
        "Normalization is the process of organizing data within a database to reduce redundancy and improve data integrity. It involves breaking down large tables into smaller, more manageable ones and creating relationships between them. The goal is to ensure that the database design follows logical rules like eliminating duplicate data and ensuring consistency.",
    },
    {
        question: "What is the role of a database schema?",
        answer:
        "A database schema defines the structure of a database, including tables, columns, data types, and relationships. It acts as a blueprint for how data is organized, stored, and accessed. A well-designed schema ensures data integrity and supports efficient queries.",
    },
    {
        question: "What is ACID in database management?",
        answer:
        "ACID (Atomicity, Consistency, Isolation, Durability) refers to the set of properties that guarantee database transactions are processed reliably. Atomicity ensures that transactions are fully completed or not at all; consistency ensures that transactions leave the database in a valid state; isolation prevents interference between transactions; and durability ensures that committed transactions are preserved.",
    },
    {
        question: "What is SQL injection, and how do you prevent it?",
        answer:
        "SQL injection is a code injection attack that exploits vulnerabilities in an application's database layer. It allows attackers to manipulate SQL queries by inserting malicious code into input fields. Preventing SQL injection involves using prepared statements, parameterized queries, and input validation to secure user inputs.",
    },
    {
        question: "What is a relational database?",
        answer:
        "A relational database is a type of database that stores data in tables with rows and columns. Each table represents an entity, and relationships between tables are defined using primary and foreign keys. SQL (Structured Query Language) is typically used to manage relational databases.",
    },
    {
        question: "What is a backup strategy for databases?",
        answer:
        "A database backup strategy involves creating copies of a database to prevent data loss due to system failures, human error, or disasters. Backup strategies include full backups, incremental backups, and differential backups, along with scheduling regular backup intervals and testing recovery procedures to ensure data availability.",
    },
    {
        question: "What are database transactions?",
        answer:
        "A database transaction is a sequence of one or more operations that are executed as a single unit. Transactions ensure data integrity and consistency. The ACID properties of transactions guarantee that they are processed reliably even in the face of errors or system failures.",
    },
    {
        question: "What is database replication?",
        answer:
        "Database replication is the process of creating copies of a database across multiple servers. This improves data availability and fault tolerance, allowing read-heavy workloads to be distributed and ensuring high availability in case of server failure.",
    },
    {
        question: "What are database views?",
        answer:
        "A database view is a virtual table that provides a way to represent a subset of data from one or more tables. Views can simplify complex queries, encapsulate business logic, and improve security by restricting access to sensitive data while still providing necessary information.",
    }
    ],
    "Mobile App Developer": [
    {
        question: "What is the difference between native and hybrid apps?",
        answer:
        "Native apps are built specifically for a platform (e.g., iOS or Android) using platform-specific languages and tools. Hybrid apps, on the other hand, are developed using web technologies like HTML, CSS, and JavaScript and run inside a web view. Native apps offer better performance, while hybrid apps provide cross-platform compatibility.",
    },
    {
        question: "What are app permissions, and why are they important?",
        answer:
        "App permissions define what resources or data an app can access on a device. Proper permission management ensures security, protecting sensitive user information from unauthorized access. For example, an app requesting camera access must be granted explicit permission by the user to protect privacy.",
    },
    {
        question: "What is the role of an API in mobile app development?",
        answer:
        "APIs (Application Programming Interfaces) allow mobile apps to communicate with external services or back-end servers to retrieve or send data. APIs are essential for providing features like user authentication, cloud storage, and data synchronization between the app and the server.",
    },
    {
        question: "What is responsive design in mobile app development?",
        answer:
        "Responsive design ensures that a mobile app's user interface adapts to different screen sizes, orientations, and resolutions. This is critical for providing an optimal user experience across a variety of devices, such as smartphones and tablets.",
    },
    {
        question: "What are push notifications, and how do they work?",
        answer:
        "Push notifications are messages sent to a user's device to inform them of updates, new content, or alerts. They are triggered by a back-end server and can appear on the device even when the app is not in the foreground. Push notifications are commonly used for user engagement and retention.",
    },
    {
        question: "What is the difference between an emulator and a simulator in mobile app development?",
        answer:
        "An emulator mimics the hardware and software of a physical device, providing an accurate representation of how an app will behave on that device. A simulator, on the other hand, only mimics the software environment and may not perfectly replicate hardware behavior. Emulators are preferred for testing app functionality, while simulators are used for testing user interface elements.",
    },
    {
        question: "What is SQLite, and how is it used in mobile app development?",
        answer:
        "SQLite is a lightweight, serverless, and self-contained relational database engine used for local storage in mobile apps. It allows apps to store and query structured data on the device, making it ideal for handling offline data and caching.",
    },
    {
        question: "What is an app lifecycle, and why is it important?",
        answer:
        "The app lifecycle refers to the series of stages an app goes through from launch to termination. Understanding the app lifecycle is crucial for managing resources efficiently, saving battery life, and maintaining a smooth user experience by handling tasks like app state transitions, background tasks, and notifications.",
    },
    {
        question: "What is mobile app testing, and why is it essential?",
        answer:
        "Mobile app testing involves evaluating an app's functionality, performance, usability, and security on different devices and operating systems. It ensures that the app works as expected, identifies bugs, and improves the user experience before release.",
    },
    {
        question: "What is Firebase, and how does it support mobile app development?",
        answer:
        "Firebase is a platform developed by Google for building and managing mobile and web applications. It offers backend services like real-time databases, authentication, cloud storage, and analytics, simplifying development and scaling for mobile apps.",
    }
    ]
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Questions and Answers</h1>
      {/* Scrollable Sections */}
      <div className="flex gap-4 mb-6 overflow-x-auto hide-scrollbar">
        {sections.map((section) => (
          <button
            key={section}
            className={`p-2 border rounded-lg whitespace-nowrap ${
              selectedSection === section
                ? "bg-primary text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
      {/* Questions and Answers */}
      <div>
        <h2 className="text-2xl font-bold mb-4">{selectedSection} Questions</h2>
        {questions[selectedSection]?.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {questions[selectedSection].map((item, index) => (
              <li key={index} className="p-4 border rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{item.question}</h3>
                <p className="text-gray-700 mt-2">{item.answer}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No questions available for this section.</p>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
      `}</style>

    </div>
  );
}

export default Questions;