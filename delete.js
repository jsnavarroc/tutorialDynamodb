var AWS = require("aws-sdk");
const config = require('./config/config.js');
AWS.config.update(config.aws_local_config);
const docClient = new AWS.DynamoDB.DocumentClient();
let removeProducts = function(){
    var dateAttri = new Date().toString();
    const params = {
        TableName: config.table_products,
        Key: {
            "id":"1"
        }
    };
    docClient.delete(params,function(err,data){
        if(err){
            console.log("Este es el error: ",err);
        }else{
            console.log("Eliminado correctamente ",data);
        }
    });
}

removeProducts();