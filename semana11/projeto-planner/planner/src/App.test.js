import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("testes do app"), () => {
  const createPost = postText => {
    const input = screen.getByPlaceholderText("Novo post");

    fireEvent.change(input, { target: { value: postText } });

    expect(input).toHaveValue(postText);

    const button = screen.getByText("Adicionar");

    fireEvent.click(button);
  };

  const createPostAndRender = () => {
    const utils = render(<App />);

    createPost("teste post");

    return utils;
  };
}