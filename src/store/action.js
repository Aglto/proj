export const ActionType = {
    CHANGE_LIST: `/changeList`,
}

export const ActionCreator = {
    changeList: () => ({
        type: ActionType.CHANGE_LIST,
    }),
};