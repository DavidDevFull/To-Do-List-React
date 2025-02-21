import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTasks"
import React from "react";


function App(){
  // Stade (Estado).
  //const h1 = "Gerenciador de tarefas📝."
  return(
    <div>
        <AddTasks />
        <Tasks />
    </div>
  );
}

export default App