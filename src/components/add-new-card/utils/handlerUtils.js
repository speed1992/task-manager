export const addNewCardHandler = ({ title, description, column, appData: { data, setData } }) => {
    let newAppData = { ...data };
    console.log(data.tasks);
    let newTaskName = "task-" + (Object.keys(data.tasks).length + 1);
    let newTaskObject = { id: newTaskName, title, description };

    newAppData.tasks[newTaskName] = newTaskObject;
    data.columns[column.id].taskIds.push(newTaskName);

    setData(newAppData);
}

export const validate = newCard => newCard.title && newCard.description && newCard.title !== "" && newCard.description !== ""
