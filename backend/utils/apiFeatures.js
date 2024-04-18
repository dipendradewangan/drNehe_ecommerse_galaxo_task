class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr
    }


    // search feature
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            },
        } : {}


        this.query = this.query.find({ ...keyword })
        return this;
    }

    // filter feature
    filter() {
        const queryCopy = { ...this.queryStr }

        console.log(queryCopy)
        
        const removeFields = ["keyword", "page", "limit"]
        
        removeFields.forEach( key => delete queryCopy[key])
        
        console.log(queryCopy)

        let queryStr = JSON.stringify(queryCopy)
        console.log(queryStr)

        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key)=> `$${key}`)
        console.log(queryStr)
        this.query = this.query.find(JSON.parse(queryStr))
        console.log(this.query)

        return this
    }
}

module.exports = ApiFeatures