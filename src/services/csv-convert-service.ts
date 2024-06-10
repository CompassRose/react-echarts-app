

interface MyObjType {
    key: string;
}

import csvtojson from 'csvtojson';

export function clusterCsvJSON(csvData) {
    return csvtojson()
        .fromString(csvData)
        .then(jsonData => {
            // perform any additional processing here...
            return jsonData;
        });
}

export function clusterCsvJSON2(csv: any) {

    const lines = csv.split(/[\r\n]+/);
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(/\s/, '');
    }
    let result: MyObjType[] = [];
    const headers = lines[0].split(',');

    headers.unshift('Destination')
    headers.unshift('Origin')

    for (let i = 1; i < lines.length; i++) {
        //const obj = {};
        let obj: any = { key: 'value' };
        const currentline = lines[i].split(',');
        currentline.unshift('')
        currentline.unshift('')
        // if (i < 10) {
        //   console.log(' --- Line ', currentline, ' headers ', headers)

        // }
        for (let j = 0; j < headers.length; j++) {

            const Origin = currentline[2].substring(0, 3);
            const Destination = currentline[2].substring(3, 6);

            //console.log(' Origin ', Origin, ' dest ', Destination)
            currentline[0] = Origin;
            currentline[1] = Destination;

            obj[headers[j].toString()] = currentline[j];
        }
        result.push(obj);
    }
    return result;
    // return JSON.stringify(result); //JSON
}