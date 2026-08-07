# React Practical – 10

# Counter

Counter Application using useState Hook

---

## Aim

To implement state management in React using the **useState** Hook.

---

## Problem Statement

Create a React application using **Create React App**.

Create a component that displays a counter.

The application should contain:

- Heading : Counter Application
- Current Count
- Increment Button
- Decrement Button

---

## Functional Requirements

- Initial count should be **0**
- Clicking **Increment** should increase the count by 1.
- Clicking **Decrement** should decrease the count by 1.

---
# Folder Structure

After creating the React application using **Create React App**, your project should have the following structure.

```
React-Practical-10/
│
├── .github/
│   └── workflows/
│       └── autograding.yml
│
├── public/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ...
│
├── tests/
│   └── test.js
│
├── package.json
├── README.md
└── .gitignore
```

> **Note:**
>
> - Write your solution only in **src/App.js**.
> - Do not modify **package.json**.
> - Do not modify **src/index.js**.
> - Do not modify the **tests** folder.
> - Do not modify the **.github** folder.
> - GitHub Actions will automatically build and evaluate your project after you push it to GitHub.

---
## Instructions

### Step 1

Create a React application.

```bash
npx create-react-app .
```

### Step 2

Run the application.

```bash
npm start
```

### Step 3

Complete the program by editing only

```
src/App.js
```

### Step 4

Commit and Push the project.

---

## Sample Output

```
Counter Application

Count : 0

[ Increment ]

[ Decrement ]
```

---

## Evaluation

| Criteria | Marks |
|----------|------:|
| App Component Created | 2 |
| useState Hook Used | 2 |
| Increment Button | 2 |
| Decrement Button | 2 |
| Counter Displayed | 2 |
| **Total** | **10** |

---

## Submission

Push your project to GitHub.

GitHub Actions will automatically evaluate your assignment.
