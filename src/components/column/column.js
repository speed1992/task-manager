import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Task } from '../task/task';
import { Container, TaskList, Title } from './styled-components';

export const Column = ({ tasks, index, column }) => {
    return (
        <Draggable draggableId={column.id} index={index}>
            {({ draggableProps, innerRef, dragHandleProps, placeholder }) => (
                <Container
                    ref={innerRef}
                    {...draggableProps}>
                    <Title {...dragHandleProps}>{column.title}</Title>
                    <Droppable droppableId={column.id} type='task'>
                        {({ droppableProps, innerRef }, { isDraggingOver }) => (
                            <TaskList ref={innerRef} {...droppableProps} isDraggingOver={isDraggingOver}>
                                {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>

            )}
        </Draggable>
    )
}