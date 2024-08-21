import {ListTask} from "../types/task";
import CookiesConfiguration from "./CookiesConfiguration";

const updateCookie = (listTasks: Array<ListTask>) => {
    for(let i = 0; i < listTasks.length; i++) {
        CookiesConfiguration.setCookie("taskName" + i, listTasks[i].taskName, 30);
        CookiesConfiguration.setCookie("taskDiscipline" + i, listTasks[i].taskDiscipline, 30);
        CookiesConfiguration.setCookie("taskDate" + i, listTasks[i].taskDate, 30);
        CookiesConfiguration.setCookie("taskAchievement" + i, listTasks[i].taskAchievement, 30);
    }
};

const getCookie = () => {
    const initializationTasks: Array<ListTask> = [];
    let i:number = 0;
    while(CookiesConfiguration.getCookie("taskName" + i) !== null) {
        initializationTasks.push({
            id: 0,
            index: i,
            taskName: CookiesConfiguration.getCookie("taskName" + i).toString(),
            taskDiscipline: CookiesConfiguration.getCookie("taskDiscipline" + i),
            taskAchievement: CookiesConfiguration.getCookie("taskAchievement" + i),
            taskDate: CookiesConfiguration.getCookie("taskDate" + i).toString(),
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