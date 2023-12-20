import {TaskType} from "../model/config/task";

export function filterTask<T extends TaskType>(tasks: T[], filter: string): T[] {
    return tasks.filter((task) => filter === 'ALL' ? task :
        task.category === filter)
}
