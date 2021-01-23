// // query is name Model.Find()
// // queryString is after model.Find()
class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
        this.totalRow = 0;
        this.totalPage = this.totalRow;
        
    }
    
    sort() {
        if (isRealValue(this.queryString.order)) {
            const sortBy = (this.queryString.order).split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }
        return this;
    }

    paginate() {
        //page: trang hiện tại
        //limit: tổng số trang
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        this.totalPage = Math.ceil(this.totalRow/limit);
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }

    populate() {
        const populates = this.queryString.populates;
        if (isRealValue(populates)) {
            populates.forEach(populateItem => {
                this.query = this.query.populate(populateItem);
            });

        }
        return this;
    }
    condition() {
        const conditions = this.queryString.conditions;
        if (isRealValue(conditions)) {
            this.query = this.query.find(conditions);
        }
        return this;
    }
}

function isRealValue(obj) {
    return obj && obj !== 'null' && obj !== 'undefined';
}

module.exports = APIFeatures;