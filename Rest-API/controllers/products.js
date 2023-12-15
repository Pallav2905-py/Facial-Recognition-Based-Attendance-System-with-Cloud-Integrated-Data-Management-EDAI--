const Attendance = require("../models/attendance")


const getAttendance = async (req, res) => {
    
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

    let skip = (page-1)*limit;
    const myData = await Product.find(queryObj).select(selectFix).skip(skip).limit(limit);
    console.log(queryObj)
    res.status(200).json({ myData })

}
const getAllAttendance = async (req, res) => {
    res.status(200).json({ msg: "I am getAllProductsTest" })
}

module.exports = { getAllProucts, getAllProuctsTest };