import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
      } else {
        const result = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(result));
      };
  };

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      } else {
        const result = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(result));
      };
  };

  const handleMultiNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
      } else {
        const result = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(result));
      };
  };

  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
      } else {
        const result = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(result));
      };
  };

  const handlePowerNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('^');
      } else {
        const result = Math.pow(Number(firstNumber), Number(currentNumber));
        setCurrentNumber(String(result));
      };
  };

  const handleSqrtNumbers = () => {
    setCurrentNumber('');
    setCurrentNumber(prev => `√${prev}`);
    setOperation('√');
  };

  const handleBackspace = () => {
    setCurrentNumber(prev => `${prev.length > 1 ? prev.slice(0, -1) : 0}`);
  };

  const handleEquals = () => {
    if (operation === '√') {
      const number = currentNumber.slice(1);
      const result = Math.sqrt(Number(number));
      setCurrentNumber(String(result));
      setOperation('');

    } else if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleSubNumbers();
          break;

        case 'x':
          handleMultiNumbers();
          break;

        case '/':
          handleDivisionNumbers();
          break;

        case '^':
          handlePowerNumbers();
          break;

        case '√':
          handleSqrtNumbers();
          break;

        default:
          break;
      };
      
      } else {
        const result = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(result));
      };
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiNumbers}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
          <Button label="C" onClick={() => handleOnClear()}/>
          <Button label="<" onClick={handleBackspace} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
          </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="^" onClick={handlePowerNumbers}/>
        </Row>
        <Row>
          <Button label="√" onClick={handleSqrtNumbers}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
