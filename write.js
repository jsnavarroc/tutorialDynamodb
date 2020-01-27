var AWS = require("aws-sdk");
const config = require('./config/config.js');
AWS.config.update(config.aws_local_config);
const docClient = new AWS.DynamoDB.DocumentClient();

let saveProducts = function () {
    var object = {
        "id": "1",
        "name": "tennis Reebok",
        "amount": "50",
        "cost": "100 USD",
        "created_at": new Date().toString()
    };
    const params = {
        TableName: config.table_products,
        Item: object
    };
    docClient.put(params, function (err, data) {
        if (err) {
            console.log("Este es el error: ", err);
        } else {
            console.log("Guardado correctamente ", data);
        }
    });
}
saveProducts();