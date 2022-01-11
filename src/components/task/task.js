import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Container } from './styled-components'

export const Task = ({ task: { id, title, description }, index }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {({ draggableProps, dragHandleProps, innerRef, placeholder }, { isDragging }) => (
                <Container {...draggableProps} {...dragHandleProps} ref={innerRef} isDragging={isDragging}>
                    <div>
                        <div> {title}</div>
                        <div> {description}</div>
                    </div>
                    {placeholder}
                </Container>
            )}
        </Draggable>
    )
}