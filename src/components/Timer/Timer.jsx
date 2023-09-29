import { useEffect, useState } from "react";
import { Button, ButtonContainer, Container, Span, TimeDescription, Title } from "./Timer.styled";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
        let timer;
        if(isRunning) {
            timer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
    
            return() => {
            clearInterval(timer);
            };
        }
        
        return() => {
        clearInterval(timer);
        };
    }, [isRunning])  
  
  const remainingSeconds = seconds % 60;
  const minutes = Math.floor((seconds % 3600) / 60);
  const hours = Math.floor(seconds / 3600);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <Container>
      <Title>Timer</Title>
      <TimeDescription><Span>{hours}</Span> годин <Span>{minutes}</Span> хвилин <Span>{remainingSeconds}</Span> секунд</TimeDescription>

      <ButtonContainer>
        <Button onClick={startTimer}>Старт</Button>
        <Button onClick={pauseTimer}>Пауза</Button>
        <Button onClick={resetTimer}>Скинути</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Timer;