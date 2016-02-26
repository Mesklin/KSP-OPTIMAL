var g_base = 9.807;

var Engines =  [ 
    { picture: "LV-1R",    name: 'LV-1R "Spider"',           mass: 0.02, thrust: 2.0,    IspCurve: [ {p: 0.0, Isp: 290.0 }, {p: 1.0, Isp: 260.0 }, {p: 8.0, Isp: 0.001 } ] },
    { picture: "LV-1",     name: 'LV-1 "Ant"',               mass: 0.02, thrust: 2.0,    IspCurve: [ {p: 0.0, Isp: 315.0 }, {p: 1.0, Isp: 80.0 },  {p: 3.0, Isp: 0.001 } ] },
    { picture: "24-77",    name: '24-77 "Twitch"',           mass: 0.09, thrust: 16.0,   IspCurve: [ {p: 0.0, Isp: 290.0 }, {p: 1.0, Isp: 250.0 }, {p: 7.0, Isp: 0.001 } ] },
    { picture: "48-7S",    name: '48-7S "Spark"',            mass: 0.10, thrust: 18.0,   IspCurve: [ {p: 0.0, Isp: 300.0 }, {p: 1.0, Isp: 270.0 }, {p: 7.0, Isp: 0.001 } ] },
    { picture: "Mk-55",    name: 'Mk-55 "Thud"',             mass: 0.9,  thrust: 120.0,  IspCurve: [ {p: 0.0, Isp: 305.0 }, {p: 1.0, Isp: 275.0 }, {p: 9.0, Isp: 0.001 } ] },
    { picture: "LV-T30",   name: 'LV-T30 "Reliant"',         mass: 1.25, thrust: 215.0,  IspCurve: [ {p: 0.0, Isp: 300.0 }, {p: 1.0, Isp: 280.0 }, {p: 7.0, Isp: 0.001 } ] },
    { picture: "LV-T45",   name: 'LV-T45 "Swivel"',          mass: 1.5,  thrust: 200.0,  IspCurve: [ {p: 0.0, Isp: 320.0 }, {p: 1.0, Isp: 270.0 }, {p: 6.0, Isp: 0.001 } ] },
    { picture: "LV-909",   name: 'LV-909 "Terrier"',         mass: 0.5,  thrust: 60.0,   IspCurve: [ {p: 0.0, Isp: 345.0 }, {p: 1.0, Isp: 85.0 },  {p: 3.0, Isp: 0.001 } ] },
    { picture: "CR-7",     name: 'CR-7 R.A.P.I.E.R.',        mass: 2.0,  thrust: 180.0,  IspCurve: [ {p: 0.0, Isp: 305.0 }, {p: 1.0, Isp: 275.0 }, {p: 9.0, Isp: 0.001 } ] },
    { picture: "T-1",      name: 'T-1 Toroidal "Aerospike"', mass: 1.0,  thrust: 180.0,  IspCurve: [ {p: 0.0, Isp: 340.0 }, {p: 1.0, Isp: 290.0 }, {p: 5.0, Isp: 230.0 }, {p: 10.0, Isp: 170.0 }, {p: 20.0, Isp: 0.001 } ] },
    { picture: "Poodle",   name: 'Rockomax "Poodle"',        mass: 1.75, thrust: 250.0,  IspCurve: [ {p: 0.0, Isp: 350.0 }, {p: 1.0, Isp: 90.0 },  {p: 3.0, Isp: 0.001 } ] },
    { picture: "Mainsail", name: 'Rockomax "Mainsail"',      mass: 6.0,  thrust: 1500.0, IspCurve: [ {p: 0.0, Isp: 310.0 }, {p: 1.0, Isp: 285.0 }, {p: 9.0, Isp: 0.001 } ] },
    { picture: "Skipper",  name: 'Rockomax "Skipper"',       mass: 3.0,  thrust: 650.0,  IspCurve: [ {p: 0.0, Isp: 320.0 }, {p: 1.0, Isp: 280.0 }, {p: 6.0, Isp: 0.001 } ] },
    { picture: "LV-N",     name: 'LV-N "Nerv"',              mass: 3.0,  thrust: 60.0,   IspCurve: [ {p: 0.0, Isp: 800.0 }, {p: 1.0, Isp: 185.0 }, {p: 2.0, Isp: 0.001 } ] },
    { picture: "KR-1x2",   name: 'LFB KR-1x2 "Twin-Boar"',   mass: 6.0,  thrust: 2000.0, IspCurve: [ {p: 0.0, Isp: 300.0 }, {p: 1.0, Isp: 280.0 }, {p: 9.0, Isp: 0.001 } ] },
    { picture: "KR-2L",    name: 'Kerbodyne KR-2L+ "Rhino"', mass: 8.5,  thrust: 2000.0, IspCurve: [ {p: 0.0, Isp: 340.0 }, {p: 1.0, Isp: 255.0 }, {p: 5.0, Isp: 0.001 } ] },
    { picture: "KS-25x4",  name: 'S3 KS-25x4 "Mammoth"',     mass: 15.0, thrust: 4000.0, IspCurve: [ {p: 0.0, Isp: 315.0 }, {p: 1.0, Isp: 295.0 }, {p: 12.0, Isp: 0.001 } ] },
    { picture: "KS-25",    name: 'S3 KS-25 "Vector"',        mass: 4.0,  thrust: 1000.0, IspCurve: [ {p: 0.0, Isp: 315.0 }, {p: 1.0, Isp: 295.0 }, {p: 12.0, Isp: 0.001 } ] }
];
                 
function Calc() { // main function - connected to "Find Optimal" button
    var g_body, payloadMass, dV, minTWR, AtmoPressure, Z, Z_inp;
    
    var selBody = document.forms[0].targetSelect.value;
    g_body = Bodies[selBody].g;
    //alert( g_body );
    var h = document.forms[0].altitudeInput.value*1.0;
    AtmoPressure = atmoPressure( Bodies[selBody], h );
    //alert( "AtrmoPressure=" + AtmoPressure );
    RecalcIsp( Engines, AtmoPressure );

    payloadMass = document.forms[0].payloadInput.value*1.0;
    // alert("payload= " + payloadMass);
    dV = document.forms[0].dvInput.value*1.0;
    // alert("desired dV= " + dV);
    minTWR = document.forms[0].minTWRInput.value*1.0;
    // alert("min TWR= " + minTWR);
    Z_inp = (document.forms[0].tankKindSelect.value == "Regular tanks") ? 9 : 8;
    //alert(document.forms[0].tankKindSelect.value + " -- " + Z_inp);
    
    var C, C1, N, maxDV;
    for (var i=0; i < Engines.length; i++) {
        Z = (Engines[i].name == 'LV-N "Nerv"') ? 8 : Z_inp; // for LV-N engine I am using always spaceplane's fuel only tanks with Z=8
        C = Math.exp(dV/Engines[i].Isp/g_base);
        C1 = (Z - 1.0)/(Z/C - 1.0);
        N = payloadMass/(Engines[i].thrust/minTWR/g_body/C1 - Engines[i].mass);
        Engines[i].Num = N < 0 ? N: Math.ceil(N)*1.0;
        maxDV = Engines[i].Isp*g_base*Math.log(Z/(1 + (Z - 1)*minTWR*g_body*Engines[i].mass/Engines[i].thrust));
        // alert(Engines[i].name + " : Num=" + N + "  C=" + C + "  C1=" + C1 + " : MaxDV=" + maxDV);
        Engines[i].maxDV = Math.floor(maxDV)*1.0;
        Engines[i].totalMass = (Engines[i].Num*Engines[i].mass + payloadMass)*C1;
        Engines[i].TWR = Engines[i].Num*Engines[i].thrust/Engines[i].totalMass/g_body;
        // alert(Engines[i].name + ": " + Engines[i].mass + " : Num=" + Engines[i].Num + "  totalMass=" + Engines[i].totalMass + "  TWR=" + Engines[i].TWR);
    }
    
    Engines.sort( function(a,b){return (a.totalMass > b.totalMass) ? 1 : (a.totalMass < b.totalMass) ? -1 : 0;} )
    
    var tbl = document.getElementById("optimalTable");
    var tblFull = document.getElementById("EnginesTable");
    
    // delete old results
    for (i=1; i < tblFull.rows.length;) {
        tblFull.deleteRow(1);
    }

    //show table with all acceptable results
    var j = -1;
    for (i=0; i < Engines.length; i++) {
        if (Engines[i].totalMass > 0) { 
            if (j < 0) { j = i; }
            AddLineTable( tblFull, Engines[i] );
        }
    }

    //alert(Engines[i].name + " : Num=" +  tbl.rows[1].cells[1].innerHTML + "  TWR=" + Engines[i].TWR + "  Mass=" + Engines[i].totalMass + " : MaxDV=" + Engines[i].maxDV);
    // show optimal engine
    ShowCalculatedEngine( tbl, (j <0) ? null : Engines[j]  ); 
}

function AddLineTable( tbl, Engine ) { // add one line in table of engines performance 
    var s = "<td class=res-col4>" + "<div align=center><img src=images/" + Engine.picture + ".png height=30></div>" + "</td>";
    s = s + "<td class=res-col4>" + Engine.name + "</td>";
    s = s + "<td class=res-col5>" + number_format(Engine.totalMass, 3, '.', ' ' ) + " t" + "</td>";
    s = s + "<td class=res-col5>" + Engine.Num + "</td>";
    s = s + "<td class=res-col5>" + number_format(Engine.TWR, 2, '.', ' ' ) + "</td>";
    s = s + "<td class=res-col5>" + number_format(Engine.Isp, 0, '.', ' ' ) + "</td>";
    s = s + "<td class=res-col5>" + number_format(Engine.maxDV, 0, '.', ' ' ) + " m/s" + "</td>";
    tbl.insertRow(tbl.rows.length).innerHTML = s;
}

function ShowCalculatedEngine( tbl, Engine = null) { // fill result table with information about optimal engine 
    if (Engine == null) {
        tbl.rows[0].cells[1].innerHTML="None";
        tbl.rows[0].cells[2].innerHTML="";
        tbl.rows[1].cells[1].innerHTML="-";
        tbl.rows[2].cells[1].innerHTML="-";
        tbl.rows[3].cells[1].innerHTML="-";    
    }
    else {
        tbl.rows[0].cells[1].innerHTML=Engine.name;
        tbl.rows[0].cells[2].innerHTML="<img src=images/" + Engine.picture + ".png height=30>";
        tbl.rows[1].cells[1].innerHTML=Engine.Num;
        tbl.rows[2].cells[1].innerHTML=number_format(Engine.TWR, 2, '.', ' ' );
        tbl.rows[3].cells[1].innerHTML=number_format(Engine.totalMass, 3, '.', ' ' ) + " t";    
    }
}

function LinearApprox( Curve, AtmoPressure ) { // linear approximation for AtmoPressure for Curve array (firts element in array is pressure, second - Isp)
    var n = Curve.length-1;
    
    if (n < 0) { return 0.001; };
    if (AtmoPressure <= Curve[0].p) { return Curve[0].Isp; }
    if (AtmoPressure >= Curve[n].p) { return Curve[n].Isp; }
    for (var i=1; i<=n; i++) {
        // alert("for " + i + " isp= " + Curve[i].Isp + "  p=" + Curve[i].p + "   press=" + AtmoPressure);
        if (AtmoPressure <= Curve[i].p) {
            var t = Curve[i-1].Isp + (Curve[i].Isp-Curve[i-1].Isp)*(AtmoPressure-Curve[i-1].p)/(Curve[i].p-Curve[i-1].p);
            // alert( t );
            return t; 
        }
    }
    return 0.001;
}
                 	
function RecalcIsp( Engines, AtmoPressure ) { // recalc current Isp for engines based on AtmoPressure
    for( var i = 0; i < Engines.length; i++ ) {
        Engines[i].Isp = LinearApprox( Engines[i].IspCurve, AtmoPressure );
        // alert( Engines[i].name + " Isp = " + Engines[i].Isp ); 
    }   
}

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}

