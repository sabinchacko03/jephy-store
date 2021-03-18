var mysql = require('mysql');

var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "react-store"
});

exports.get_products = function(req, res){
    pool.getConnection(function(err, con){
        if(err) throw err;
        con.query('SELECT * FROM products', function(err, result, fields){
            con.release();
            if(err) throw err;
            res.send(result);
        });
    });    
}

exports.update_product = function(req, res){
    console.log(req.body);
    pool.getConnection(function(err, con){
        // if(err) throw err;
        // con.query('UPDATE products SET sku=?, name=?, stock=?, price=? WHERE id=?', [req.sku, req.name, req.stock, req.price, req.id] function(err, result, fields){
        //     con.release();
        //     if(err) throw err;
        // });
    })
}