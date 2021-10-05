import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../../App";

beforeEach(()=>{
    render(<App/>)
});
test ("Input element is initially empty", ()=>{
const inputElement = screen.getByPlaceholderText(/enter task/i);
expect(inputElement).toHaveValue("");
});

test ("Add task", ()=>{
    const inputElement = screen.getByPlaceholderText(/enter task/i);
    const button = screen.getByRole("button");
    expect(inputElement).toHaveValue("");
    userEvent.type(inputElement,"test task");
    userEvent.click(button)
    expect(inputElement).toHaveValue("");
    const task = screen.getByText(/test task/i);
    expect(task).toBeTruthy();
   
    });

    test ("Add task", ()=>{
        const inputElement = screen.getByPlaceholderText(/enter task/i);
        const button = screen.getByRole("button");
        expect(inputElement).toHaveValue("");
        userEvent.type(inputElement,"double space  task");
        userEvent.click(button)
        expect(inputElement).toHaveValue("");
        const task = screen.getByText(/double space task/i);
        expect(task).toBeTruthy();
       
        });