import express from 'express';
// const express=require('express')
import {testing,singup, getUser, loggin, updateUser, httpReq, todoList, updateTodo, getAllTodo, deleateUser, deletTodo} from '../controllers/userController.js'
import {createComment, deleteComment, getAllComets} from '../controllers/blogController.js'
const router=express.Router();
router.get('/hello',testing);
router.get('/all',getUser)
router.post('/register',singup);
router.post('/login',loggin);
router.put('/update/:id',updateUser);
router.post('/todo',todoList);
router.put('/updateTodo/:id',updateTodo);
router.get('/all-todo',getAllTodo);
router.delete('/deleateUser/:id',deleateUser);
router.delete('/deletTodo/:id',deletTodo);
router.post('/comment',createComment);
router.delete('/comment-delet/:id',deleteComment);
router.get('/get-all-comments',getAllComets);
router.get('/new',httpReq)

export default router;
