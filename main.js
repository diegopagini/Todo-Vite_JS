/** @format */
import './style.css';

import todoStore from './src/store/todo.store';
import { App } from './src/todos/app';

todoStore.initStore();

App('#app');
