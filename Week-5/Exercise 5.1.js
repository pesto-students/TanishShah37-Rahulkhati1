// Generator
function doTask1() {

    return console.log("Print task1 is successfull");
}
  
function doTask2() {

    return console.log("Print task2 is successfull");
}
  
function doTask3() {

    return console.log("Print task3 is successfull");
}
  
function* doAllTasks() {

    try {
      console.log("inside generator function");
      yield doTask1();
      yield doTask2();
      yield doTask3();
    } catch (e) {
      console.log(e.message);
    }
}
  
const doTasks = doAllTasks();
doTasks.next();
doTasks.next();
doTasks.next();
  
async function doAllTasksAsynAwait() {

    try {
      console.log("insdie async function");
      await doTask1();
      await doTask2();
      await doTask3();
    } catch (e) {
      console.log(e.message);
    }
}
  
doAllTasksAsynAwait();