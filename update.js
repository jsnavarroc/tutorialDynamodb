var AWS = require("aws-sdk");
const config = require('./config/config.js');
AWS.config.update(config.aws_local_config);
const docClient = new AWS.DynamoDB.DocumentClient();
let updateProducts = function () {
    var dateAttri = new Date().toString();
    const params = {
        TableName: config.table_products,
        Key: {
            "id": "1"
        },
        UpdateExpression: "set created_at= :newDateAttri, #name= :newNameAttri",
        ExpressionAttributeValues: {
            ":newDateAttri": dateAttri,
            ":newNameAttri": "Tenis Adidas"
        },
        ExpressionAttributeNames: {
            "#name": "name"
        },
        ReturnValues: "UPDATED_NEW"
    };
    docClient.update(params, function (err, data) {
        if (err) {
            console.log("Este es el error: ", err);
        } else {
            console.log("Actualizado correctamente ", data);
        }
    });
}
updateProducts();