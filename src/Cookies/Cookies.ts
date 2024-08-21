import {ListTask} from "../types/task";
import CookiesConfiguration from "./CookiesConfiguration";

const updateCookie = (listTasks: Array<ListTask>) => {
    for(let i = 0; i < listTasks.length; i++) {
        CookiesConfiguration.setCookie("taskName" + i, listTasks[i].taskName, 30);
        CookiesConfiguration.setCookie("taskDiscipline" + i, listTasks[i].taskDiscipline, 30);
        CookiesConfiguration.setCookie("taskDate" + i, listTasks[i].taskDate, 30);
        let m = 0;
        while(listTasks[i].taskAchievement != null) {
            // @ts-ignore
            CookiesConfiguration.setCookie("taskDiscipline" + i + m, listTasks[i].taskAchievement[m].toString(), 30);
            m++;
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
        // @ts-ignore
        initializationTasks.push({
            id: 0,
            index: i,
            // @ts-ignore
            taskName: CookiesConfiguration.getCookie("taskName" + i).toString(),
            // @ts-ignore
            taskDiscipline: CookiesConfiguration.getCookie("taskDiscipline" + i),
            // @ts-ignore
            taskAchievement: taskAchievement,
            taskDate: CookiesConfiguration.getCookie("taskDate" + i)
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