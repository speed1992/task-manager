import styled from 'styled-components';

export const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width:220px;
    display:flex;
    flex-direction: column;
    background-color: ${props => (props.isDragging ? 'skyblue' : 'white')};
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
    padding: 10px
`;

export const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
    min-height:100px;
`;