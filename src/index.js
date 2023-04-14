import React from 'react';
import { createRoot } from 'react-dom/client';

import './scss/main.scss';
import { Hello } from './components/Hello';

const root = createRoot(document.querySelector('#root'));
root.render(<Hello />);