const Wines = require('./winesModel');

exports.params = function (req, res, next, id) {
    Wines.findById(id)
        .then((wine) => {
            if (!wine) {
                next(new Error('No wine with that id'));
            } else {
                req.wine = wine;
                next();
            }
        }, (err) => {
            next(err);
        });
};

exports.get = function (req, res, next) {
    Wines.find({})
        .then((wine) => {
            res.json(wine);
        }, (err) => {
            next(err);
        });
};

exports.getSearch = function (req, res, next) {
    Wines.find(req.params)
        .then((wine) => {
            res.json(wine);
        }, (err) => {
            next(err);
        });
};

exports.getOne = function (req, res, next) {
    const wine = req.wine;
    res.json(wine);
};

exports.put = function (req, res, next) {
    Wines.findByIdAndUpdate(
        req.params.id,
        req.body, { new: false },
        (err) => {
            if (err) return next(err);
            return res.json(req.body);
        },
    );
};

exports.post = function (req, res, next) {
    const newWine = req.body;

    Wines.create(newWine)
        .then((wine) => {
            res.json(wine);
        }, (err) => {
            next(err);
        });
};

exports.delete = function (req, res, next) {
    Wines.findByIdAndRemove(req.params.id,
        (err, wine) => res.status(200).send('sucess: true'));
};
