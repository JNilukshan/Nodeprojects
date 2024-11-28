const Task = require('../models/taskmodel');


const getAlltasks = async (req, res)=>{
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const createTask = async (req, res)=> {
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const getTask = async (req, res)=> {
    try {
        const {id:taskID}=req.params;
        const task = await Task.findById({_id:taskID});
        if (!task){
            return res.status(404).json({msg:`no task with id ${taskID}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const updateTask = async (req, res)=> {
    try {
        const {id:taskID}= req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {new:true, runValidator:true});
        if (!task){
            return res.status(404).json({msg:`no task with id ${taskID}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:errror});
    }
}

const deleteTask = async (req, res)=> {
    try {
        const {id:taskID}= req.params;
        const task = await Task.findByIdAndDelete({_id:taskID});
        if (!task){
            return res.status(404).json({msg:`no task with id ${taskID}`});
        }
        res.status(200).json({task:null, status: 'success'});
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