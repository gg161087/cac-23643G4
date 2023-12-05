import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './config.js';

import { categoryRouter } from './src/routes/categoryRoutes.js';
import { productRouter } from './src/routes/productRoutes.js';
import { userRouter } from './src/routes/userRoutes.js';
import { provinceRouter } from './src/routes/provinceRoutes.js';
import { branchOfficeRouter } from './src/routes/branchOfficeRoutes.js';

const app = express();

//Settings
app.set('port', PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/provinces', provinceRouter);
app.use('/api/branch_offices', branchOfficeRouter)

export default app;