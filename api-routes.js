// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var todoListController = require('./todoListController');
// Contact routes
router.route('/todolist')
    .get(todoListController.index)
    .post(todoListController.new);
     router.route('/todolist/:todo_id')
     .get(todoListController.view)
     .put(todoListController.update)
     .delete(todoListController.delete);
// Export API routes
module.exports = router;