

const { json } = require("express");
var array = [{'name':'manuel'},{'name':'juan'} ];
const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');
  
  const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
JSONtoCSV(array)
/*  


function arrayObjToCsv(ar) {
    //comprobamos compatibilidad
    
		var contenido = ""
		//creamos contenido del archivo
		for (var i = 0; i < ar.length; i++) {
			//construimos cabecera del csv
			if (i == 0)
				contenido += Object.keys(ar[i]).join(";") + "\n";
			//resto del contenido
			contenido += Object.keys(ar[i]).map(function(key){
							return ar[i][key];
						}).join(";") + "\n";
		}
		//creamos el blob
		let blob =  new Blob(["\ufeff", contenido], {type: 'text/csv'});
		//creamos el reader
		var reader = new FileReader();
		reader.onload = function (event) {
			//escuchamos su evento load y creamos un enlace en dom
			 "log_"+".csv";
		}
		//leemos como url
		reader.readAsDataURL(blob);

};


	arrayObjToCsv(array); */
