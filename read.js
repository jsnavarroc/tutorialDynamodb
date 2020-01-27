var AWS = require("aws-sdk");
const config = require('./config/config.js');
AWS.config.update(config.aws_local_config);
const docClient = new AWS.DynamoDB.DocumentClient();
let listProducts = function () {
    const params = {
        TableName: config.table_products,
        Key: {
            "id": "1"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("Este es el error: ", err);
        } else {
            console.log("listado ", data);
        }
    });
}
listProducts();