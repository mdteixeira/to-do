import Header from './Components/header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState } from 'react';

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Criar Aplicativo',
            day: 'Dia 5 de Fevereiro - 14:40',
            reminder: true,
        },
        {
            id: 2,
            text: 'Assistir Filmes',
            day: 'Dia 5 de Fevereiro - 14:40',
            reminder: true,
        },
        {
            id: 3,
            text: 'Estudar React',
            day: 'Dia 5 de Fevereiro - 14:40',
            reminder: true,
        },
    ]);

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 100000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    const deletaTarefa = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const mudarReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container">
            <Header
                title="tarefas"
                onAdd={() => setShowAddTask(!showAddTask)}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deletaTarefa}
                    onToggle={mudarReminder}
                />
            ) : (
                'Você não tem tarefas, pode tirar férias!'
            )}
        </div>
    );
}

export default App;
