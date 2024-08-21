import {routerType} from "../types/router.types";
import Home from "../pages/Home/Home";
import TasksHome from "../pages/Tasks/TasksHome";
import Task from "../pages/Tasks/Task";
import AddTask from "../pages/Tasks/AddTask";

const pagesData: routerType[] = [
    {
        path:"",
        element: <Home/>,
        title:"home"
    },
    {
        path: "",
        element: <TasksHome/>,
        title:"task home",
    },
    {
        path: "/:idTask",
        element: <Task/>,
        title: "task parameters, updated, etc"
    },
    {
        path: "",
        element: <Task/>,
        title: "for home",
    },
    {
        path: "/add",
        element: <AddTask/>,
        title: "add task",
    },
];

export default pagesData;