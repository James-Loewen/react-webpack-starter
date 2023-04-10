import React from 'react';
import { createRoot } from 'react-dom/client';
import { Hello } from './components/Hello';

const helloDiv = document.createElement('div');
helloDiv.innerHTML = 'Hello from Javascript!';
document.body.appendChild(helloDiv);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Hello />);