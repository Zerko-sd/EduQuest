 EduQuest – Gamified Learning Platform 
EduQuest is an AI-driven gamified learning platform designed to make studying more engaging and interactive. Built with Next.js, Tailwind CSS, Firebase, and Deepseek LLM, it offers AI-generated content, quizzes, social learning communities, and gamification features to enhance the learning experience.

Features
AI-Powered Content & Quizzes – Uses Deepseek LLM to generate personalized learning material & quizzes.
Gamification Elements – Earn points, badges, streaks, and rewards for completing challenges.
Leaderboards & Competitions – Compete with other learners for the top spot.
Social Learning Communities – Engage in discussions, collaborate, and learn with peers.
PDF Upload & Quiz Generation – Upload PDFs, summarize content, and create quizzes automatically.
User Dashboard & Progress Tracking – Monitor learning progress with detailed analytics.
AI-Powered Study Recommendations – Get suggested topics based on performance & interests.
Apple-Like UI in Light Mode – Clean, modern, and responsive design for a seamless experience.

Tech Stack
Frontend: Next.js, Tailwind CSS
Backend: Firebase (Authentication & Firestore)
AI Integration: Deepseek LLM for adaptive learning content
Storage: Firebase Storage for user data
Hosting: Vercel (Frontend), Firebase Hosting (Backend)
Getting Started
Clone the Repository
sh
Copy
Edit
git clone https://github.com/Zerko-sd/EduQuest
cd eduquest
Install Dependencies
sh
Copy
Edit
npm install
Setup Environment Variables
Create a .env.local file and add the following:
sh
Copy
Edit
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_DEEPSEEK_API_KEY=your_deepseek_api_key

Start the Development Server
sh
Copy
Edit
npm run dev
Access the platform at http://localhost:3000 

Deployment
Backend: Firebase Functions + Firestore
Hosting: Firebase Hosting
📜 License
MIT License

💡 EduQuest – Learn Smarter, Play Harder! 🚀
