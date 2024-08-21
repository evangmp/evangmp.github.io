import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Discipline, ListTask} from "../../types/task";
import CSSButton from "../../CSS/CSS-button";
import CSSInput from "../../CSS/CSS-input";
import Cookie from "../../Cookies/Cookies";

const AddTask = () => {
    const navigate = useNavigate();

    useEffect(() => {
        getUserTask();
    }, []);

    // boolean to set the discipline checkboxes
    const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | undefined>(undefined);
    const [inputName, setInputName] = useState<string>("");

    const [taskSaved, setTaskSaved] = useState<boolean>(false);

    // initialization for setAllTheTasks
    const [allTheTasks, setAllTheTasks] = useState<Array<ListTask>>([]);

    // get method to have all the tasks
    const getUserTask = () => {
        setAllTheTasks(Cookie.getCookie());
    };

    // reset all the fields to create a new task
    const resetInputs = () => {
        setTaskSaved(!taskSaved);
        setSelectedDiscipline(undefined);
        setInputName("");
    };

    // to set for post method and save the new task
    const submitTask = () => {
        // early return
        if (selectedDiscipline == null) {
            console.error("L'utilisateur n'a pas sélectionné de discipline");
            return;
        }
        if (inputName === "") {
            console.error("L'utilisateur n'a pas donné de nom à sa tâche");
            return;
        }

        let listToSend: Array<ListTask> = allTheTasks;

        listToSend.push({
            id: 0,
            index: listToSend.length,
            taskName: inputName,
            taskDate: new Date().toLocaleString(),
            taskAchievement: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            taskDiscipline: selectedDiscipline,
        });
        Cookie.updateCookie(listToSend);
    };

    const navigationButton = (link: string) => {
        navigate(link);
    };

    return (
        <div className="submit-form">
            {taskSaved ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button
                        style={CSSButton.buttonGeneralSettings}
                        className="btn btn-success"
                        onClick={resetInputs}
                    >
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Enter Name : </label>
                        <input
                            style={CSSInput.inputGeneralSettings}
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={inputName}
                            onChange={(event) => {
                                setInputName(event.target.value);
                            }}
                            name="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="choice">Choose a discipline : </label>
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
                    <button
                        style={CSSButton.buttonMainPageSettings}
                        onClick={submitTask}
                        className="btn btn-success"
                    >
                        Submit
                    </button>
                    <button
                        style={CSSButton.buttonMainPageSettings}
                        onClick={() => navigationButton("/")}
                    >
                        Return back
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddTask;