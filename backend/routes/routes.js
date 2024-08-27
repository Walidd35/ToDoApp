const express = require('express');
const router = express.Router();
const auth = require('../midldeAUTH/auth');

const userCtrl = require ('../controllers/controller.users');
const taskCtrl = require ('../controllers/controller.tasks');

// ROUTES POUR USER 
router.get('/users', auth, userCtrl.getAllUser);
router.get('/users/:id', auth, userCtrl.getById);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/users/:id', auth, userCtrl.delete);

// ROUTES POUR TASKS
router.post('/tasks',auth,taskCtrl.createTask);
router.get('/tasks',taskCtrl.getTask);
// router.get('/tasks', auth, taskCtrl.getAllTasks);
// router.get('/tasks/:id', auth, taskCtrl.getTaskById);
// router.put('/tasks/:id', auth, taskCtrl.updateTask);
// router.delete('/tasks/:id', auth, taskCtrl.deleteTask);

module.exports = router;
