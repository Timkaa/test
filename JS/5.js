var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 

fuction (object)

    for (var attribute in object) {

        if (typeof object[attribute] == 'object') {

            attributeNames.push(attribute);
            recuseLog(object[attribute]);
            attributeNames = attributeNames.slice(0,
                    attributeNames.length - 1);

        } else {

            handleAttributeName(attributeNames.join(".") + "."
                    + attribute);
            handleAttributeValue(object[attribute]);

        }

    }
    recuseLog(arr);