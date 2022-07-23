import React, { useState, useRef, useEffect } from 'react';
import '../styles/snake.css';
import { useInterval } from './snake-components/useInterval';
import {
  CANVAS_SIZE,
  SNAKE_START,
  FOOD_START,
  SCALE,
  DIRECTIONS,
} from './snake-components/constants';

const App = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [food, setFood] = useState(FOOD_START);
  const [dir, setDir] = useState([0, -1]);
  const [speedpregame, setSpeedpregame] = useState(100);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  var newScore = 0;

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createFood = () =>
    food.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkFoodCollision = (newSnake) => {
    if (newSnake[0][0] === food[0] && newSnake[0][1] === food[1]) {
      let newFood = createFood();
      while (checkCollision(newFood, newSnake)) {
        newFood = createFood();
      }

      newScore = score;
      newScore++;
      setScore(newScore);

      setFood(newFood);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkFoodCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setFood(FOOD_START);
    setDir([0, -1]);
    setSpeed(speedpregame);
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = '#edf0f1'; // White
    var first_fill = true;
    snake.forEach(([x, y]) => {
      if (first_fill) {
        context.fillStyle = '#edf0f1'; // White
        first_fill = false;
      }
      context.fillRect(x, y, 1, 1);
      context.fillStyle = '#7e7e7e'; // Gray
    });
    context.fillStyle = '#0096bb'; // React blue
    context.fillRect(food[0], food[1], 1, 1);
  }, [snake, food, gameOver]);

  return (
    <div
      className='snake'
      role='button'
      tabIndex='0'
      onKeyDown={(e) => moveSnake(e)}
    >
      <div>
        <span>Rychlost hry v ms = {speedpregame}ms</span>
        <button
          className='btn_speed'
          onClick={() => {
            var base = speedpregame;
            base = base + 100;
            setSpeedpregame(base);
          }}
        >
          +
        </button>
        <button
          className='btn_speed'
          onClick={() => {
            var base = speedpregame;
            if (base >= 200) base = base - 100;
            setSpeedpregame(base);
          }}
        >
          -
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      <div>Score = {score}</div>

      {gameOver && <div>GAME OVER!</div>}
      <button className='btn_start' onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default App;
