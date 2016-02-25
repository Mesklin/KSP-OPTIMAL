// Data for version 1.0.5
var InitData = 0;
var Bodies = {  Moho:   {g: 2.697,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null }, 
                Eve:    {g: 16.672, atmH: 90.0,  atmPressure: 5.0,  atmoScaleH: 7.3,  atmoCurve: null },
                Gilly:  {g: 0.049,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Kerbin: {g: 9.807,  atmH: 70.0,  atmPressure: 1.0,  atmoScaleH: 5.0,  atmoCurve: null },
                Mun:    {g: 1.628,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Minmus: {g: 0.490,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Duna:   {g: 2.942,  atmH: 50.0,  atmPressure: 0.2,  atmoScaleH: 6.0,  atmoCurve: null },
                Ike:    {g: 1.098,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Dres:   {g: 1.128,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Jool:   {g: 7.846,  atmH: 200.0, atmPressure: 15.0, atmoScaleH: 31.0, atmoCurve: null },
                Laythe: {g: 7.846,  atmH: 50.0,  atmPressure: 0.6,  atmoScaleH: 8.0,  atmoCurve: null },
                Vall:   {g: 2.305,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Tylo:   {g: 7.846,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Bop:    {g: 0.588,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Pol:    {g: 0.373,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null },
                Eeloo:  {g: 1.687,  atmH: 0.0,   atmPressure: 0.0,  atmoScaleH: 0.0,  atmoCurve: null } };

var atmoKerbin = [ { h: 0.0, p: 1.000}, { h: 2.5, p: 0.681}, { h: 5.0, p: 0.450}, { h: 7.5, p: 0.287}, { h: 10.0, p: 0.177}, { h: 15.0, p: 0.066},
                   { h: 20.0, p: 0.025},{ h: 25.0, p: 0.010},{ h: 30.0, p: 0.004},{ h: 40.0, p: 0.001},{ h: 50.0, p: 0.000}, { h: 60.0, p: 0.000},
                   { h: 70.0, p: 0.000} ];

var atmoEve = [ { h: 0.0, p: 5.000},  { h: 2.5, p: 3.249},  { h: 5.0, p: 2.149},  { h: 7.5, p: 1.495},  { h: 10.0, p: 1.080}, 
                { h: 12.5, p: 0.769}, { h: 15.0, p: 0.542}, { h: 20.0, p: 0.287}, { h: 25.0, p: 0.162}, { h: 30.0, p: 0.082},
                { h: 35.0, p: 0.036}, { h: 40.0, p: 0.015}, { h: 50.0, p: 0.005}, { h: 60.0, p: 0.002}, { h: 70.0, p: 0.000},
                { h: 80.0, p: 0.000}, { h: 90.0, p: 0.000} ];
                
var atmoDune = [ { h: 0.0, p: 0.067},  { h: 2.5, p: 0.051},  { h: 5.0, p: 0.037},  { h: 7.5, p: 0.026},  { h: 10.0, p: 0.018}, { h: 15.0, p: 0.007}, 
                 { h: 20.0, p: 0.002}, { h: 25.0, p: 0.001}, { h: 30.0, p: 0.000}, { h: 40.0, p: 0.000}, { h: 50.0, p: 0.000} ];
                                 
var atmoJool = [ { h: 0.0, p: 15.000},  { h: 10.0, p: 10.468}, { h: 20.0, p: 7.734},  { h: 30.0, p: 6.056},  { h: 40.0, p: 4.763},  { h: 50.0, p: 3.683},
                 { h: 60.0, p: 2.793},  { h: 70.0, p: 2.074},  { h: 80.0, p: 1.503},  { h: 90.0, p: 1.059},  { h: 100.0, p: 0.721}, { h: 110.0, p: 0.466},
                 { h: 120.0, p: 0.275}, { h: 130.0, p: 0.134}, { h: 140.0, p: 0.052}, { h: 150.0, p: 0.020}, { h: 160.0, p: 0.007}, { h: 170.0, p: 0.001},
                 { h: 180.0, p: 0.000}, { h: 190.0, p: 0.000}, { h: 200.0, p: 0.000} ];
                 
var atmoLaythe = [ { h: 0.0, p: 0.600},  { h: 2.5, p: 0.465},  { h: 5.0, p: 0.340},  { h: 7.5, p: 0.246},  { h: 10.0, p: 0.176}, { h: 15.0, p: 0.092},
                   { h: 20.0, p: 0.047}, { h: 25.0, p: 0.026}, { h: 30.0, p: 0.015}, { h: 40.0, p: 0.004}, { h: 50.0, p: 0.000} ];              

function InitBodiesData() {
    if (InitData == 0) {
        InitData = 1;
        Bodies.Eve.atmoCurve = atmoEve;
        Bodies.Kerbin.atmoCurve = atmoKerbin;
        Bodies.Dune.atmoCurve = atmoDune;
        Bodies.Jool.atmoCurve = atmoJool;
        Bodies.Laythe.atmoCurve = atmoLaythe;
    }
}

function atmoPressure( Body, Altitude ) {
    if (Altitude >= Body.atmH) { 
        return 0; 
    }
    else {
        var Curve;
        if (Body.atmoCurve != null) 
            { Curve = Body.AtmoCurve; }
        else 
            { return 0.0; }
            
        var n = Curve.length-1;
        
        if (n < 0) { return 0.0; };
        if (Altitude <= Curve[0].h) {
            return Curve[0].p;
        } 
        else if (Altitude >= Curve[n].h) {
            return Curve[n].p;
        }
        else {
            for (var i=1; i<=n; i++) {
                // alert("for " + i + " h= " + Curve[i].h + "  p=" + Curve[i].p + "   Altitude=" + Altitude);
                if (Altitude <= Curve[i].h) {
                    var t = Curve[i-1].p + (Curve[i].p-Curve[i-1].p)*(Altitude-Curve[i-1].h)/(Curve[i].h-Curve[i-1].h);
                    // alert( t );
                    return t; 
                }
            }        
        }
    }
}

