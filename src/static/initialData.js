export let dataSet = {
    tasks: {
        "task-1": { id: "task-1", title: "Technical Design", description: "Description for task 1" },
        "task-2": { id: "task-2", title: "Initialize Project", description: "Description for task-2" },
        "task-3": { id: "task-3", title: "Deliver Features", description: "Description for task-3" },
        "task-4": { id: "task-4", title: "Deployment", description: "Description for task-4" }
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To Do",
            taskIds: ['task-4']
        },
        "column-2": {
            id: "column-2",
            title: "In Progress",
            taskIds: ['task-3']
        },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds: ['task-1', 'task-2']
        },
    },
    columnOrder: ["column-1", "column-2", "column-3"]
}

export default dataSet