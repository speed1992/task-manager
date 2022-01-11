import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    padding: 10px 10px 130px 10px;
    margin: 10px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    width: 220px;
    display:flex;
    flex-direction: column;
    background: ${props => (props.isDragging ? 'linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)' : 'rgb(235, 236, 240)')};
`;

export const Title = styled.div`
    font-weight: bold;
    cursor: pointer!important;
`;

export const TaskList = styled.div`
    background-color: white;
    border-radius: 3px;
    background-color: ${props => (props.isDraggingOver ? '#67b8f7' : 'inherit')};
    min-height:100%;
`;