module.exports.add = (req, res) => {
    res.send(`<h1> sum: ${req.body.n1 + req.body.n2} </h1>`);
}

module.exports.subtract = (req, res) => {
    res.send(`<h1> diff: ${req.body.n1 - req.body.n2} </h1>`);
}
module.exports.multiply = (req, res) => {
    res.send(`<h1> product: ${req.body.n1 * req.body.n2} </h1>`);
}

module.exports.divide = (req, res) => {
    res.send(`<h1> division: ${req.body.n1 / req.body.n2} </h1>`);
}