var arr = [{ name: 'Lava H.', elixir: '7', dps: '37' }, { name: 'minion', elixir: '3', dps: '84' }, { name: 'Meg. min.', elixir: '3', dps: '219' }, { name: 'Golem', elixir: '8', dps: 85 }];

function buscarElixirMayor(elixir) {
    var arrr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].elixir > elixir) {
            arrr.push(arr[i]);
        }
    }
    return arrr
}

function buscarElixirMenor(elixir) {
    var arrer = [];
    for (var e = 0; e < arr.length; e++) {
        if (arr[e].elixir < elixir) {
            arrer.push(arr[e]);
        }
    }
    return arrer
}

function buscarDPSMenor(DPS) {
    var arrir = [];
    for (var t = 0; t < arr.length; t++) {
        if (arr[t].dps < DPS) {
            arryr.push(arr[t])
        }
        return arrir
    }

    function buscarDPSMayor(DPS) {
        var arryr = [];
        for (var f = 0; f < arr.length; f++) {
            if (arr[f].dps > DPS) {
                arryr.push(arr[f])
            }
        }
        return arryr
    }
    var mayorQueXElixir = buscarElixirMayor(3);
    console.log('mayorQueXElixir', mayorQueXElixir)
    var menorQueXElixir = buscarElixirMenor(4);
    console.log('menorQueXElixir', menorQueXElixir)
    var menorQueXDPS = buscarDPSMenor(2);
    console.log('menorQueXDPS', menorQueXDPS)
    var mayorQueXDPS = buscarDPSMayor(2);
    console.log('mayorQueXDPS', mayorQueXDPS)
        //hacer otra funcion que retorne lo mismo pero con dps
        //hacer otra funcion que retorne mayor dps
