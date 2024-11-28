const express = require('express');
const router = express.Router();

const {getAlltasks,
        getTask,
        createTask,
        updateTask,
        deleteTask} = require('../controllers/taskcontroller');

router.route('/').get(getAlltasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask);




module.exports = router;
