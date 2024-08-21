import {useNavigate, useParams} from "react-router-dom";
import CookiesConfiguration from "../../Cookies/CookiesConfiguration";
import {useEffect, useState} from "react";
import {Discipline, ListTask} from "../../types/task";
import CSSInput from "../../CSS/CSS-input";
import CSSButton from "../../CSS/CSS-button";
import Cookie from "../../Cookies/Cookies";

const Task = () => {
    const {idTask} = useParams();
    const idUser = CookiesConfiguration.getCookie("login");
    const navigate = useNavigate();

    // for input
    const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | undefined>(undefined);
    const [inputName, setInputName] = useState<string>("");

    // to save all the tasks associate with the user id (and then update or delete a task)
    const [allTheTasks, setAllTheTasks] = useState<Array<ListTask>>([]);

    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        if(idUser)
            getTask();
    }, [idUser]);

    // get method to have the task
    const getTask = () => {
        setAllTheTasks(Cookie.getCookie);
    };

    // method to update the task
    const updateTutorial = () => {
        // early return
        if(selectedDiscipline == null) {
            console.error("L'utilisateur n'a pas sélectionné de discipline");
            setMessage("No discipline selected.");
            return;
        }
        if(inputName === "") {
            console.error("L'utilisateur n'a pas donné de nom à sa tâche");
            setMessage("No name for the task, how dare you ?")
            return;
        }

        const taskToSend: Array<ListTask> = allTheTasks;
        // @ts-ignore
        taskToSend[idTask?.toString()].taskName = inputName;
        // @ts-ignore
        taskToSend[idTask?.toString()].taskDiscipline = selectedDiscipline;

        Cookie.updateCookie(taskToSend);
    };

    // update method for delete task
    const serviceTaskList = (taskToSend: Array<ListTask>, method: string) => {
        Cookie.updateCookie(taskToSend);

        if(method === "delete") {
            navigate("/");
        }

    };

    // to delete a task
    const deleteTutorial = () => {
        const taskToSend: Array<ListTask> = [];

        let i =0;
        for(let m = 0; m < allTheTasks.length; m++) {
            if(m !== Number(idTask)) {
                taskToSend.push({
                    id: 0,
                    index: i,
                    taskName:allTheTasks[m].taskName,
                    taskDate: allTheTasks[m].taskDate,
                    taskDiscipline: allTheTasks[m].taskDiscipline,
                    taskAchievement: allTheTasks[m].taskAchievement,
                })
                i++;
            }
        }
        serviceTaskList(taskToSend, "delete");
    };

    return (
        <div className="taskApp large-container-2">
            <div className="container-edit-form-1">
                <h4 className="edit-title-1">Task</h4>
                <form className="form-edit-1">
                    <div className="form-group-1">
                        <label htmlFor="name" className="form-label-1">Name : </label>
                        <input
                            type="text"
                            className="form-input-1"
                            id="name"
                            name="name"
                            value={inputName}
                            onChange={(event) => setInputName(event.target.value)}
                            style={CSSInput.inputGeneralSettings}
                        />
                    </div>

                    <div className="form-group-2">
                        <label htmlFor="discipline" className="form-label-2">Discipline : </label>
                    </div>
                    <div className="form-group">
                        <input
                            id="physic-checkbox"
                            style={CSSInput.inputGeneralSettings}
                            type="radio"
                            className="checkbox-control-physic"
                            name="physic-checkbox"
                            checked={selectedDiscipline === "physics"}
                            onChange={() => {
                                setSelectedDiscipline("physics");
                            }}
                            value={"physics"}
                        />
                        <label htmlFor="physic-checkbox">Physics</label>

                        <input
                            id="math-checkbox"
                            style={CSSInput.inputGeneralSettings}
                            type="radio"
                            className="checkbox-control-maths"
                            name="math-checkbox"
                            checked={selectedDiscipline === "mathematics"}
                            onChange={() => {
                                setSelectedDiscipline("mathematics");
                            }}
                            value={"mathematics"}
                        />
                        <label htmlFor="math-checkbox">Mathematics</label>
                    </div>
                </form>

                <button
                    style={CSSButton.buttonConnectionPageSettings}
                    className="edit-button-3"
                    onClick={deleteTutorial}
                >
                    Delete
                </button>

                <button
                    style={CSSButton.buttonConnectionPageSettings}
                    type="submit"
                    className="edit-button-4"
                    onClick={updateTutorial}
                >
                    Update
                </button>
                <p className="p-edit-1">{message}</p>
                <div>
                    <button
                        style={CSSButton.buttonConnectionPageSettings}
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Task;