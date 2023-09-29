import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 60px;
  line-height: 20px;
  font-weight: 800;
`;

export const TimeDescription = styled.p`
  font-size: 48px;
  line-height: 20px;
  font-weight: 400;
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 168px;
  height: 48px;
  padding: 12px 50px;
  margin-top: 10px;
  margin-bottom: 40px;
  border-radius: 12px;
  background: rgba(52, 112, 255, 1);
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;

  &:hover, &:focus {
  background-color: rgba(11, 68, 205, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;