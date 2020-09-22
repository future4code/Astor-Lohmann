import React from "react";
import { render, fireEvent, getByPlaceholderText, getByText, findByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";


test("usuário cria post", () => {
    //preparação
    const { getByText, getByPlaceholderText } = render(<App />);

    const addButton = getByText(/adicionar/i);
    const textPost = getByPlaceholderText(/Novo post/i)


    //execução
    fireEvent.change(textPost, { target: {value: "test"}})
    fireEvent.click(addButton);
    
    //verificação
    expect(textPost).toHaveDisplayValue("test")

});
