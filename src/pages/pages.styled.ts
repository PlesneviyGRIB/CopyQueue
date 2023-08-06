import styled from "styled-components";

const App = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Toolbar = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 10px 20px;
  gap: 1em;
  justify-content: flex-end;
`

const ToolbarRecord = styled.div<{$selected?: boolean}>`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ $selected }) => $selected && "rgb(255,214,214)"};
  
  border: 1px solid transparent;
  border-radius: 3px;
  
  &:hover{
    border-color: black;
    transition: 0.5s;
  }
`

const Page = styled.div`
  background-color: beige;
  flex: 1 1 auto;
`

export const Styled = {
  App,
  Toolbar,
  ToolbarRecord,
  Page,
}