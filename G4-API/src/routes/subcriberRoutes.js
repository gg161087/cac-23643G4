import { Router } from 'express';

import { getSubscriberById, getAllSubscribers, createSubscriber, updateSubscriberById, deleteSubscriberById } from './../controllers/subscriberController.js';

export const subscriberRouter = Router();

subscriberRouter.get('/:id', getSubscriberById);
subscriberRouter.get('/', getAllSubscribers);
subscriberRouter.post('/', createSubscriber);
subscriberRouter.put('/:id', updateSubscriberById);
subscriberRouter.delete('/:id', deleteSubscriberById);