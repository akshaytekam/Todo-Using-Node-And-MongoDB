TodoList = require('./todoListModel');

// Handle index actions
exports.index = function (req, res) {
    TodoList.get(function (err, lists) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "TodoList retrieved successfully",
            data: lists
        });
    });
};
// Handle create todolist actions
exports.new = function (req, res) {
    var todolist = new TodoList();
    todolist.title = req.body.title ? req.body.title : todolist.title;
    todolist.description = req.body.description;

    // save the contact and check for errors
    todolist.save(function (err) {
        res.json({
            message: 'New todo item created!',
            data: todolist
        });
    });
};
// Handle view todolist info
exports.view = function (req, res) {
    TodoList.findById(req.params.todo_id, function (err, todoitem) {
        if (err)
            res.send(err);
        res.json({
            message: 'Todo item details loading..',
            data: todoitem
        });
    });
};
// Handle update todo info
exports.update = function (req, res) {
    TodoList.findById(req.params.todo_id, function (err, todolist) {
        if (err)
            res.send(err);
        todolist.title = req.body.title ? req.body.title : todolist.title;
        todolist.description = req.body.description;
        todolist.status = req.body.status;

        todolist.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Todo Info updated',
                data: todolist
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    TodoList.remove({
        _id: req.params.todo_id
    }, function (err, todolist) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Todo item deleted'
        });
    });
};