import {useNavigate} from "react-router-dom";
import Home from "../Home/Home";
import {Route, Routes} from "react-router-dom";
import CSSButton from "../../CSS/CSS-button";
import TasksList from "./TasksList";
import Task from "./Task";

const TasksHome = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <Home/>
            </div>

            <div>
                <div>
                    <nav>
                        <button style={CSSButton.buttonMainPageSettings}
                                className="choice-button"
                                onClick={() => navigate("/add")}
                        >
                            Add
                        </button>
                    </nav>

                    <Routes>
                        <Route path="/" element={<TasksList/>}/>
                        <Route path="/:idTask" element={<Task/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default TasksHome;