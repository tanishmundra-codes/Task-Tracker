import fs from 'fs';
import { connect } from 'http2';
import { json } from 'stream/consumers';

// remove starting commands ['node', 'filename']
const args = process.argv.slice(2);

const cmd = args[0];
const task = args[1];
const idNum = args[2];
const description = args[3];
const ID = Math.random(1, 100);
const now = new Date();

let newTask = {
        "name": task,
        "ID" : ID,
        "description": description,
        "status" : "todo",
        "createdAt" : now.toLocaleString()
    };

if(cmd == 'add'){
    
    console.log(`Task added sucessfully Id: ${ID}`);
}

if(cmd == 'update'){
    console.log("Task updated sucessfully");
}

if(cmd == 'delete'){
    console.log("Task deleted sucessfully")
}

if(cmd = 'mark-in-progress'){
    console.log("Task marked-in-progress sucessfully");
}

if(cmd == 'mark-done'){
    console.log("Task marked as done sucessfully");
}

if(cmd == 'list' || 'list todo' || 'list in-progress'){
    console.log("List all tasks")
}