const Task = require('../models/taskmodel');


const getAlltasks = async (req, res)=>{
    try {
        res.status(201).json('All tasks');
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const createTask = async (req, res)=> {
    try {
        const task = await Task.create(req.body)
        if(!task){
            return res.status(404).json({error:'task not found'});
        }
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const getTask = async (req, res)=> {
    try {
        res.status(201).json({id:req.params.id});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const updateTask = async (req, res)=> {
    try {
        const {id}= req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, {new:true, runValidator:true});
    } catch (error) {
        res.status(500).json({msg:errror});
    }
}

const deleteTask = async (req, res)=> {
    try {
        const {id}= req.params;
        const task = await Task.findByIdAndDelete(id);
    } catch (error) {
        res.status(500).json({msg:error});
    }
}



module.exports = {
    getAlltasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}