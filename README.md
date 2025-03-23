
# FactoryFlow AI

FactoryFlow AI is an intelligent manufacturing automation platform that streamlines production processes using AI-driven task allocation, predictive analytics, and real-time monitoring. The system is designed to optimize resource management and minimize downtime, ensuring a smooth and efficient production workflow.

## Overview

FactoryFlow AI leverages modern web technologies and machine learning techniques to create a smart factory environment. By dynamically allocating tasks to robotic units based on real-time data and historical performance, the platform increases throughput, reduces maintenance-related disruptions, and provides actionable insights through interactive dashboards.

## Key Features

- **AI-Driven Task Allocation:**  
  Efficiently assign tasks to robots using predictive analytics and real-time workload data.
  
- **Predictive Maintenance:**  
  Analyze sensor data and historical maintenance records to proactively schedule servicing and minimize unexpected downtime.

- **Interactive Dashboards:**  
  Visualize production efficiency, task status distribution, and resource allocation with dynamic charts and tables.

- **Real-Time Monitoring:**  
  Get live updates and insights into production performance, enabling quick decision-making.

- **User-Friendly Interface:**  
  Modern, responsive UI built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and interactions.

## Technology Stack

- **Frontend:**  
  - Next.js (React framework)  
  - Tailwind CSS  
  - Framer Motion  
  - Chart.js (via react-chartjs-2)

- **Backend:**  
  - Node.js  
  - Express.js  
  - MongoDB (with Mongoose)

## Team

- **Krishna K** – Backend Developer, Database Manager & Team Lead  
- **Naveen Kumar B** – Simulation Specialist  
- **Sriram S** – Frontend Developer and UI&UX

## Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (or MongoDB Atlas)
- Git

### Clone the Repository

```bash
git clone https://github.com/CyberKnightsHack/FactoryFlow-AI.git
cd FactoryFlow-AI
```

### Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   The frontend will be available at [http://localhost:3000](http://localhost:3000).

### Backend Setup

1. Open a new terminal and navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Create a `.env` file in the backend folder and add the following (replace the placeholders with your credentials):

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
   PORT=4000
   ```

   *Note:* If using a local MongoDB instance, you can use:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/yourDatabaseName
   PORT=4000
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The backend server will run on [http://localhost:4000](http://localhost:4000).

## Usage

- **Dashboard:**  
  The main dashboard displays key production metrics through interactive graphs and tables, giving you real-time insights into task status, resource allocation, and efficiency.

- **Task Optimization:**  
  The system automatically assigns tasks based on real-time analytics, reducing idle time and ensuring balanced workloads.

- **Predictive Maintenance:**  
  Leverage sensor data and historical records to anticipate maintenance needs and schedule servicing before issues occur.

## Contributing

Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request. When contributing, please follow the existing coding style and include relevant tests where applicable.

