const router = require('express').Router();
const controller = require('./winesController');

router.param('id', controller.params);

router.route('/')
    .get(controller.get)
    .post(controller.post);

router.route('/:id')
    .get(controller.getOne)
    .put(controller.put)
    .delete(controller.delete);

router.route('/year/:year')
    .get(controller.getSearch);

router.route('/name/:name')
    .get(controller.getSearch);

router.route('/type/:type')
    .get(controller.getSearch);

router.route('/country/:country')
    .get(controller.getSearch);

module.exports = router;
