import fs from 'fs';
import { json } from 'stream/consumers';

const args = process.argv.slice(2);
// remove starting commands ['node', 'filename']

// add command
const addCmd = args[0];
const task = args[1];
const description = args[2];

let taskObj = JSON.stringify({
        "name": task,
        "ID" : 1,
        "description": description,
        "status" : "todo"
    });

if(addCmd == 'add'){
    if(fs.existsSync('./task.json')){
        fs.appendFileSync("./task.json", taskObj);
        console.log("Adding task...")
        setTimeout(() => {
            console.log("Task added sucessfully");
        }, 1500)
    }
    else{
        fs.writeFileSync('./task.json', taskObj);
        console.log("Adding task...")
        setTimeout(() => {
            console.log("Task added sucessfully");
        }, 1500)
    }
}