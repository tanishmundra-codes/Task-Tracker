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

    if (fs.existsSync("./task.json")) {
        // read existing data
        let existingData = fs.readFileSync("./task.json", "utf-8");

        // merge existing data with new data
        if (existingData.length > 0) {
            addTask = JSON.parse(existingData);
        }
    }
    addTask.push(newTask);
    console.log("Adding task...");

    setTimeout(() => {
        // write merged data to file
        fs.writeFileSync("./task.json", JSON.stringify(addTask, null, 2));
        console.log(`Task added sucessfully, ID: ${ID}`);
    }, 1500)

}

if (cmd == 'list') {
    try {
        let tasks = fs.readFileSync("./task.json", "utf-8");
        // addTask = []
        addTask = JSON.parse(tasks);
        // addtask = [{Some task}]
        console.log(addTask);
    } catch (err) {
        console.log("Task list is empty");
    }
}

if (cmd == "update") {
    try {
        let tasks = fs.readFileSync("./task.json", "utf-8");
        addTask = JSON.parse(tasks);
   
        for (let i = 0; i < addTask.length; i++) {
            if (addTask[i].ID == idNum) {
                addTask[i].name = newTask.name;
            }
        }
        fs.writeFileSync("./task.json", JSON.stringify(addTask));
        console.log("Task upadted sucessfully");

    }catch(err){
        console.log("Task not update", err);
    }
    
}