import fs from 'fs';
import { connect } from 'http2';
import { json } from 'stream/consumers';

// remove starting commands ['node', 'filename']
const args = process.argv.slice(2);

const cmd = args[0];
const task = args[1];
const idNum = args[2];
const description = args[3];
const ID = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const now = new Date();

let newTask = {
    "name": task,
    "ID": ID,
    "description": description,
    "status": "todo",
    "createdAt": now.toLocaleString()
};

let addTask = [];

if (cmd == 'add') {
    // File exits
    if (fs.existsSync("./task.json")) {
        let existingData = fs.readFileSync("./task.json", "utf-8");

        if (existingData.length > 0) {
            addTask = JSON.parse(existingData);
        }
    }
    addTask.push(newTask);
    console.log("Adding task...");

    setTimeout(() => {
        fs.writeFileSync("./task.json", JSON.stringify(addTask, null, 2));
        console.log(`Task added sucessfully, ID: ${ID}`);
    }, 1500)
    
}