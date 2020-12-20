function ResultDetail(status, resultCode, resutlDescription, data = null) {
    this.status = status;
    this.resultCode = resultCode;
    this.resultDescription = resutlDescription;
    this.data = data
}

module.exports = ResultDetail;