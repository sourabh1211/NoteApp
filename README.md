<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MERN Stack Notes App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li::before {
            content: "✅ ";
            color: green;
        }
        .tech-stack {
            font-weight: bold;
            color: #007bff;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>MERN Stack Notes App 📝</h1>
        <p>This is a full-stack Notes App built with the <span class="tech-stack">MERN stack (MongoDB, Express.js, React, Node.js)</span>. It includes a rich text editor (Jodit Editor) for creating and editing notes with formatting options.</p>
        
        <h2>✨ Features:</h2>
        <ul>
            <li>Login and Signup functionality</li>
            <li>Create, Read, Update, and Delete (CRUD) Notes</li>
            <li>Jodit Editor Integration for rich text formatting</li>
            <li>MongoDB as Database for storing notes</li>
            <li>Express & Node.js Backend for API handling</li>
            <li>React Frontend with a user-friendly UI</li>
        </ul>
        
        <h2>📌 Tech Stack:</h2>
        <p><span class="tech-stack">Frontend:</span> React, Jodit Editor</p>
        <p><span class="tech-stack">Backend:</span> Node.js, Express.js</p>
        <p><span class="tech-stack">Database:</span> MongoDB</p>
        <p><span class="tech-stack">Styling:</span> CSS/Tailwind</p>
        
        <div class="footer">Made with ❤️ by Sourabh Verma</div>
    </div>
</body>
</html>
