import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 3px;
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    padding: 12px;
    margin-top: 12px;
    margin-bottom: 10px;
    background-color:${props => (props.isDragging ? '#f6f6f6' : 'white')};
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    ${props => props.isDragging && `
        transform: rotate(45deg);
    `};
    
    &:hover {
        background-color: #f6f6f6;
    }
`

export const Title = styled.div`
  font-size: 16px;
  font-weight: 300;
  color:${props => (props.isDragging ? 'white' : 'initial')};
`

export const Description = styled.p`
    margin-top:5px;
    margin-bottom:5px;
    font-size: 13px;
    font-weight: 300;
    color:${props => (props.isDragging ? 'white' : 'initial')};
`