# Todo List App
![Project Screenshot](images\No-Task.png)
![Project Screenshot](images\Task-List.png)

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Code Examples](#code-examples)
- [Status](#status)
- [Why?](#why)
- [Contact](#contact)
- [License](#license)

## About
The Todo List App is a simple, user-friendly application that allows users to manage their daily tasks efficiently. Users can add tasks, and mark them as completed by removing tasks as they finish. This project is built with TypeScript and React, ensuring type safety and a robust development experience.

## Features
- Add tasks to a list with a single click.
- Delete tasks from the list.
- Prevent adding empty tasks to ensure data integrity.

## Tech Stack
- React
- TypeScript
- CSS

## Setup
To run this project locally:

1. Clone the repository: `https://github.com/Adrienner1988/To-Do-App.git`
2. `cd To-Do-App`
3. `npm install`
4. `npm run dev`

## Usage
You can access the live version of the application here: [Live Demo](https://dolisttracker.netlify.app/)

1. Open the app in your browser.
2. Add a task by typing into the input field and clicking the "Add Task" button.
3. Remove a task by clicking the delete button next to it.

## Code Examples
```typescript
const addTask = (event: MouseEvent) => {
  event.preventDefault();
  
  if (task.trim() === "") {
    return;
  }
  
  const newTask = { todoTask: task };
  setTodoList([...todoList, newTask]);
  setTask("");
};
```

## Status
The Todo List App is fully functional, but there are plans for additional features and improvements in future updates, such as task categorization and due dates.

## Why
This project was built to reinforce the fundamentals of React and TypeScript while creating a practical and useful application. It serves as a learning tool and a foundation for more complex projects in the future.

## Contact
- Email: `adriennerdaniels@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/adriennerdaniels/`
- GitHub: `Adrienner1988`

## License
This project is currently not licensed.
