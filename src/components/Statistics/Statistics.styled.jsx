import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;

  background-color: blanchedalmond;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  color: grey;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  font-size: 20px;
  font-weight: 700;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const StatList = styled.ul`
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  padding: 10px 5px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 18px;
  margin-top: 5px;
`;
