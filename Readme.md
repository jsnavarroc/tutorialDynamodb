Dynamo

viernes, 24 de enero de 2020
16:19

Entender estructura para crear una tabla
Instalar AWS https://docs.aws.amazon.com/es_es/cli/latest/userguide/install-windows.html 
Ejecutar aws configure https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
Se levanta el demonio en el archivo donde este dynamo D:\BD\dynamodb 
    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
Descargar Dynamo https://docs.aws.amazon.com/es_es/cli/latest/userguide/install-macos.html
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html
Básicos :
	 TableKeySchema https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-keyschema.html
	ProvisionedThroughput: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-provisionedthroughput.html
	
	{
	    "TableName": "production_products",
	    "KeySchema": [{
	        "AttributeName": "id", //Nombre de la columna del key principal.
	        "KeyType": "HASH" // Tipo de key
	    }],
	    "AttributeDefinitions": [{
	        "AttributeName": "id", // Nombre de columna 
	        "AttributeType": "S" // String
	    }],
	    "ProvisionedThroughput": { // Cuantas unidades puede leer y escribir por segundo
	        "ReadCapacityUnits": 1,
	        "WriteCapacityUnits": 1
	    }
	}
	
	Con este comando se permite ejecutar la tabla de products
	aws dynamodb create-table --cli-input-json file:///Proyectos\ReactNative\labortatorio\tutorialDynamodb\config\products.json --endpoint-url http://localhost:8000

	Con este comando se comprueba si se creo la tabla exitosamente 
	aws dynamodb list-tables --endpoint-url http://localhost:8000
