import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddNewCard } from "../add-new-card/add-new-card";
import { Column } from "../column/column";
import { Container } from "./styled-components";
import { onDragEnd } from "./utils/handlerUtils";
import { getDataDefaultState, useLocalStorage } from "./utils/utils";

export const HomePage = () => {
    const [data, setData] = useState(() => getDataDefaultState());

    useLocalStorage(data);

    const { columns, columnOrder } = data;

    return (<>
        <DragDropContext onDragEnd={result => onDragEnd({ result, data, setData })}>
            <Droppable droppableId='all-columns' direction='horizontal' type='column'>
                {({ droppableProps, innerRef, placeholder }) => (
                    <Container  {...droppableProps} ref={innerRef}>
                        {columnOrder && columnOrder.map((id, index) => {
                            const column = columns[id]
                            const tasks = column.taskIds.map(taskId => data.tasks[taskId])
                            return (<div key={column.id}>
                                <Column key={column.id} column={column} tasks={tasks} index={index} />
                                <AddNewCard />
                            </div>)
                        })}
                        {placeholder}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
    </>)
}