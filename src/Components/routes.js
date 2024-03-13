import Task1 from "./Pages/Task1";
import Task2 from "./Pages/Task2";

export const allRoutes = [
    {path: '/task1', element: <Task1/>, exact:true},
    {path: '/task2', element: <Task2/>, exact:true},
]