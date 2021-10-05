import { render, screen } from '@testing-library/react';
import App from './App';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';

//Component Tests

test('Title render correctly', () => {
  const {getByTestId} = render(<Title/>);
  const content = getByTestId('title');
  expect(content).toBeTruthy()
});

test('Check app title', () => {
  const {getByTestId} = render(<Title/>);
  const content = getByTestId('title');
  expect(content.textContent).toBe('To Do App')
});

test('Form component render correctly', () => {
  const {getByTestId} = render(<Form/>);
  const content = getByTestId('add-button');
  expect(content).toBeTruthy()
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent('Add');
});

test('Form render correctly', () => {
  const {getByTestId} = render(<Form/>);
  const content = getByTestId('to-do-form');
  expect(content).toBeTruthy()
});

test('Check input placeholder correctly', () => {
  const {queryAllByPlaceholderText} = render(<App/>);
  const content = queryAllByPlaceholderText('Enter task');
  expect(content).toBeTruthy()
});
