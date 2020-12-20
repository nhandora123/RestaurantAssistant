const { ErrorUtil, AppSuccess } = require('../utils/Error.util');
const APIFeatures = require('../utils/Feature.util');

exports.deleteOne = Model => async () => {
    try {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return new ErrorUtil(404, 'fail', 'No document found with that id');
        }

        return{
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

        return{
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

        return{
            status: 'success',
            data: {
                doc
            }
        };

    } catch (error) {
        return new AppError(404, 'fail', error);
    }
};

exports.getOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findById(req.params.id);

        if (!doc) {
            return new ErrorUtil(404, 'fail', 'No document found with that id');
        }

        return{
            status: 'success',
            data: {
                doc
            }
        };
    } catch (error) {
        return new ErrorUtil(404, 'fail', error);
    }
};

exports.getAll = async (Model, queryString) => {
    try {
        const features = new APIFeatures(Model.find(), queryString)
            .sort()
            .paginate();

        const doc = await features.query;

        //console.log(doc)

        return new AppSuccess(200, 'success', {
            results: doc.length,
            data: doc
        });

    } catch (error) {
        return new ErrorUtil(404, 'fail', error);
    }
};