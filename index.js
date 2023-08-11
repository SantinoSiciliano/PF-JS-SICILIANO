const totalDeAutos = parseInt(prompt('total de autos a la venta esta semana' ));
        let contDeAutos = 0;

        for (let cant= 0; cant < totalDeAutos; cant++){
        const resp= prompt(' auto numero ' +  cant  + ' fue vendido ?');
        if (resp === 'si') {
               contDeAutos++; 
            }
        }
        const contadorDeAutosVendidos = contDeAutos * 100/ totalDeAutos;
        alert(contadorDeAutosVendidos + '% de autos fueron vendidos esta semana')