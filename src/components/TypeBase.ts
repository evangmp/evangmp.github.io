import {DateType} from "../types/task";

const DateBase = (): DateType => {
    return {
        taskIndex: [],
        taskAchievement: [],
        difference: [],
        defaultChecked: [],
        taskAchievementIndex: [],
        late: [],
    }
}

const TypeBase = {
    DateBase
};

export default TypeBase;