import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { AddNewCard } from '../add-new-card/add-new-card';
import { Task } from '../task/task';
import { Container, TaskList, Title } from './styled-components';

export const Column = ({ tasks, index, column, ...props }) => {
    return (
        <Draggable draggableId={column.id} index={index}>
            {({ draggableProps, innerRef, dragHandleProps, placeholder }, { isDragging }) => (
                <Container ref={innerRef} {...draggableProps} isDragging={isDragging}>
                    <Title {...dragHandleProps}>{column.title}</Title>
                    <Droppable droppableId={column.id} type='task'>
                        {({ droppableProps, innerRef, placeholder }, { isDraggingOver }) => (
                            <TaskList ref={innerRef} {...droppableProps} isDraggingOver={isDraggingOver}>
                                {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                    {placeholder}
                    <AddNewCard column={column} {...props} />
                </Container>
            )}
        </Draggable>
    )
}