import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTasks"


function App(){
  // Stade (Estado).
  //const h1 = "Gerenciador de tarefas📝."
  return(
    <div>
        <h1>Gerenciador de tarefas📝</h1>
        <AddTasks />
        <Tasks />
    </div>
  );
}

export default App