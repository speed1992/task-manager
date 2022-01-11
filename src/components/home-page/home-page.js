import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddNewCard } from "../add-new-card/add-new-card";
import { Column } from "../column/column";
import { Container } from "../container/container";
import { getDataDefaultState, onDragEnd, useLocalStorage } from "./utils";

export const HomePage = () => {
    const [data] = useState(() => getDataDefaultState());
    
    useLocalStorage(data);

    return (<>
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='all-columns' direction='horizontal' type='column'>
                {( droppableProps, innerRef, placeholder ) => (
                    <Container droppableProps={droppableProps} ref={innerRef}>
                        {data.columnOrder.map((id, index) => {
                        const column = data.columns[id]
                        const tasks = column.taskIds.map(taskId => data.tasks[taskId])
                        return (<><Column key={column.id} column={column} tasks={tasks} index={index} />
                            <AddNewCard /></>)
                        })}
                        {placeholder}
                    </Container>
                )}
                
            </Droppable>
        </DragDropContext>
    </>)
}