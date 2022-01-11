import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Container, Description, Title } from './styled-components'

export const Task = ({ task: { id, title, description }, index, beginDrag }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {({ draggableProps, dragHandleProps, innerRef, placeholder }, { isDragging }) => (
                <Container key={id} {...draggableProps} {...dragHandleProps} ref={innerRef} isDragging={isDragging}>
                    <div>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </div>
                    {placeholder}
                </Container>
            )
            }
        </Draggable >
    )
}