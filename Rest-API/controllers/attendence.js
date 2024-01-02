const Attendence = require("../models/attendance")


const temp = async (req, res) => {
    //?The above two lines are just in case any one field out of atlest 2 don't exist but 1 atleast Should.
    //!Inshort Making API better!
    //!Matlab ek property ko priority de diye hai, baki property ignoreee!!
    const { userId, completed, title, select } = req.query;
    const queryObj = {};
    if (userId) {
        queryObj.userId = userId;
    }
    if (completed) {
        queryObj.completed = completed;
    }
    if (title) {
        queryObj.title = { $regex: title, $options: "i" }
    }

    if (select) {
        var selectFix = select.split(",").join(" ");
        // const apiData = await Product.find(queryObj).select(selectFix);
    }
    const apiData = await Product.find(queryObj);

    let page = Number(req.query.page) || 1; //?By default 1(ONE).
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;
    const myData = await Product.find(queryObj).select(selectFix).skip(skip).limit(limit);
    console.log(queryObj)
    res.status(200).json({ myData })
}

const fetchAllAttendence = async (req, res) => {
    let page = Number(req.query.page) || 1; //?By default 1(ONE).
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;
    const data = await Attendence.find().skip(skip).limit(limit);
    res.status(200).send(data)
    console.log(data)
}

const fetchForMember = async (req, res) => {
    const { email } = req.query;
    const data = await Attendence.find({ email: email })
    res.status(200).json(data)

}

module.exports = { fetchAllAttendence, fetchForMember };