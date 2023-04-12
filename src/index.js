import React from 'react';
import './scss/_main.scss';
import { createRoot } from 'react-dom/client';
import { Hello } from './components/Hello';

const root = createRoot(document.querySelector('#root'));
root.render(<Hello />);