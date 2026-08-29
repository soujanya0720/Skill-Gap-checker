# Student Skill Gap Checker

A simple and interactive web application that helps students identify their current skills, compare them with the skills required for a selected job role, and discover areas they need to improve.

##  About the Project

Students often know some technical skills but may not know which additional skills are required for their desired career.

The **Student Skill Gap Checker** solves this problem by allowing students to select their target job role and existing skills. The application compares the student's skills with the required skills for that role and generates a skill-match percentage, identifies missing skills, and provides learning recommendations.

##  Objectives

- Help students understand their current technical skills.
- Identify skills required for different job roles.
- Find the gap between existing and required skills.
- Calculate the student's skill-match percentage.
- Provide personalized learning recommendations.
- Help students prepare for their desired career.

##  Features

-  Student name input
-  Multiple career/job roles
-  Multiple technical skills
-  Skill-match percentage
-  Skill gap identification
-  Personalized recommendations
-  Career readiness progress bar
-  Responsive design
-  LocalStorage support
-  Reset analysis option
-  No backend or database required

##  Available Job Roles

The application currently supports:

- Java Developer
- Full Stack Developer
- Frontend Developer
- Python Developer
- Data Analyst
- Software Tester

##  Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage

##  Project Structure

```text
Student-Skill-Gap-Checker/
│
├── index.html
├── style.css
├── script.js
└── README.md
⚙️ How It Works
Student
   ↓
Enter Name
   ↓
Select Target Job Role
   ↓
Select Existing Skills
   ↓
Click "Analyze My Skills"
   ↓
Compare Student Skills
       with
Required Job Skills
   ↓
Calculate Skill Match
   ↓
Identify Skill Gaps
   ↓
Generate Recommendations
📊 Example

Suppose a student selects:

Target Role: Java Developer

Existing skills:

Java
OOP
HTML
CSS
SQL
Git

Required skills:

Java
OOP
Data Structures
SQL
Git
Spring Boot
REST API
HTML
CSS

The system identifies the missing skills:

Data Structures
Spring Boot
REST API

It then calculates the skill-match percentage and provides recommendations.

 How to Run
1. Download or Clone the Repository

Clone this repository using Git:

git clone YOUR_GITHUB_REPOSITORY_URL
2. Open the Project

Open the project folder in Visual Studio Code or any code editor.

3. Run the Application

Open:

index.html

in your web browser.

You can also use the Live Server extension in Visual Studio Code.

 LocalStorage

The application uses browser LocalStorage to save the latest skill analysis.

No MySQL or backend server is required for this version.

 Future Enhancements

The project can be extended with:

Java Spring Boot backend
MySQL database
Student login and registration
Admin dashboard
Resume analysis
Job recommendation system
Coding assessment
Aptitude assessment
Interview preparation
Personalized learning roadmap
Job vacancy integration
AI-based skill recommendations
 Educational Purpose

This project was developed as a student-focused web development project to demonstrate practical use of:

HTML
CSS
JavaScript
DOM manipulation
Arrays and objects
Conditional logic
LocalStorage
Responsive web design
