import {AchievementTable, ListTask} from "../types/task";
import CookiesConfiguration from "./CookiesConfiguration";
import task from "../pages/Tasks/Task";

const updateCookie = (listTasks: Array<ListTask>) => {
    for(let i = 0; i < listTasks.length; i++) {
        CookiesConfiguration.setCookie("taskName" + i, listTasks[i].taskName, 30);
        CookiesConfiguration.setCookie("taskDiscipline" + i, listTasks[i].taskDiscipline, 30);
        CookiesConfiguration.setCookie("taskDate" + i, listTasks[i].taskDate, 30);
        for (let m = 0; i < listTasks[i].taskAchievement.length; m++) {
            CookiesConfiguration.setCookie("taskDiscipline" + i + m, listTasks[i].taskAchievement[m].toString(), 30);
        }

    }
};

const getCookie = () => {
    const initializationTasks: Array<ListTask> = [];
    let i:number = 0;
    while(CookiesConfiguration.getCookie("taskName" + i) !== null) {
        const taskAchievement:  number[] = [];
        for (let m = 0; m < 11; m++) {
            taskAchievement.push(Number(CookiesConfiguration.getCookie("taskAchievement"+ i + m)));
        }
        initializationTasks.push({
            id: 0,
            index: i,
            taskName: CookiesConfiguration.getCookie("taskName" + i).toString(),
            taskDiscipline: CookiesConfiguration.getCookie("taskDiscipline" + i),
            taskAchievement: CookiesConfiguration.getCookie("taskAchievement" + i),
            taskDate: taskAchievement,
        });
        i++
    }
    return initializationTasks;
}

const Cookie = {
    updateCookie,
    getCookie,
}

export default Cookie;