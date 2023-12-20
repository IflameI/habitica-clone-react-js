export type TaskFiltersType = {
    title: string,
    category: string,
}[]

export type TaskType = {
    id: number;
    titleText: string;
    supText: string;
    category: string;

    cost?: number;
    isCompletedTask?: boolean;
    count?: number;
    exp?: number;
    health?: number;
    diff?: number;
    remainDay?: number;
    isBadTask?: boolean;
    isSuccessTask?: boolean;
}
