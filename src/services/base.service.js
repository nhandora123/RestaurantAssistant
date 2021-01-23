const {
    ErrorUtil,
    SuccessUtil
} = require('../utils/response.util');
const APIFeatures = require('../utils/Feature.util');

exports.deleteOne = Model => async () => {
    try {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return new ErrorUtil(404, 'fail', 'No document found with that id');
        }
        return {
            status: 'success',
            data: null
        };
    } catch (error) {
        return new ErrorUtil(404, 'fail', error);
    }
};

exports.updateOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!doc) {
            return new ErrorUtil(404, 'fail', 'No document found with that id');
        }

        return {
            status: 'success',
            data: {
                doc
            }
        };

    } catch (error) {
        return new ErrorUtil(404, 'fail', error);
    }
};

exports.createOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.create(req.body);

        return {
            status: 'success',
            data: {
                doc
            }
        };

    } catch (error) {
        return new ErrorUtil(404, 'fail', error);
    }
};

exports.getOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findById(req.params.id);

        if (!doc) {
            return new ErrorUtil(404, 'fail', 'No document found with that id');
        }

        return {
            status: 'success',
            data: {
                doc
            }
        };
    } catch (error) {
        return new ErrorUtil(404, 'fail', error);
    }
};

exports.getAll = (Model, queryString) => async (req, res, next) => {
        try {
            queryString = {
                ...queryString,
                order: req.query.order,
                page: req.query.page,
                limit: req.query.limit
            }
            const features = new APIFeatures(Model.find(), queryString)
            .condition()
            .sort()
            .populate()
            
            const totalData = await features.query;
            const data = await features.paginate().query;

            if (!data) {
                res.json(new ErrorUtil(404, 'fail', 'No document found with that id'));
            }
            res.json(new SuccessUtil(200, 1, 'success', {
                totalRow: totalData.length,
                page: queryString.page * 1 || 1,
                limit: queryString.limit * 1 || 10,
                data
            }))
            //return 1//SuccessUtil(200, 1, 'success', {
            //     results: doc.length,
            //     data: doc
            // });

        } catch (error) {
            res.json(new ErrorUtil(404, 'fail', error));
        }
    }
