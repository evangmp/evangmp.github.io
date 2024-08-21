export type Discipline = "physics" | "mathematics";

export type AchievementTable = [number, number, number, number, number, number, number, number, number, number]


export interface ListTask {
    id?: number,
    index: number,
    taskName: string | null,
    taskDiscipline: Discipline | null,
    taskAchievement: AchievementTable | null,
    taskDate: string | null,
}

export interface DateType {
    taskIndex: number[],
    difference: number[],
    taskAchievement: AchievementTable[],
    taskAchievementIndex: number[],
    defaultChecked: boolean[],
    late: boolean[],
}