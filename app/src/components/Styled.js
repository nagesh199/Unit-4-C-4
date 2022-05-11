import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 50%;
  margin: 20px auto;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
`;

export const Select = styled.select`
  background-color: #b6ffdb;
  border: none;
  outline: none;
  padding: 4px 10px;
  font-size: 20px;
`;

export const Flex = styled.div`
.hover {
    box-shadow: none;
}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 12px;
`;