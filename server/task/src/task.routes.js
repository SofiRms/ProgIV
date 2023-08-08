import {Router} from 'express';
import { toggleCompletedTask } from './task.controller';

const TaskRouter = Router();

TaskRouter.get('/get', getTask);
TaskRouter.post('/post', postTask);
TaskRouter.patch('/patch', toggleCompletedTask);

export {TaskRouter}