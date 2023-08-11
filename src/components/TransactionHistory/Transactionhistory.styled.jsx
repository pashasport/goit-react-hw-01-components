import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 3px solid black;
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 2px solid black;
  }

  & th {
    background-color: rgb(72, 175, 208);
    font-weight: bold;
    border: 2px solid black;
  }

  & td {
    background-color: white;
    border: 2px solid black;
  }

  & tr:nth-of-type(even) {
    background-color: lightblue;
  }

  & tr:last-of-type td {
    border-bottom: none;
  }

  & td:hover,
  & td:hover ~ td {
    background-color: lightyellow;
  }
`;
