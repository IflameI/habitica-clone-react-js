export type ModalsStateType<T, D = void> = {
    name: T,
    isOpen: boolean
    data?: D | null
}
