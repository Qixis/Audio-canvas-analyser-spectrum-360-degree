var Е­ = 0;
var audio = new Audio();
	audio.src = 'http://freshly-ground.com/data/audio/sm2/SonReal%20-%20I%20Tried.mp3';
	audio.controls = true;
	audio.loop = true;
	audio.autoplay = false;
	
	var 
	canvas, 
	ctx, 
	source, 
  context, 
  analyser, 
  fbc_array, 
  bars, 
  bar_x, 
  bar_width, 
  bar_height;
	// Initialize the MP3 player after the page loads all of its HTML into the window
	window.addEventListener("load", initMp3Player, false);

function initMp3Player(){
    document.getElementById('audio_box').appendChild(audio);
    context = new webkitAudioContext(); // AudioContext object instance
    analyser = context.createAnalyser(); // AnalyserNode method
    canvas = document.getElementById('analyser');
    ctx = canvas.getContext('2d');
  
    // Re-route audio playback into the processing graph of the AudioContext
    source = context.createMediaElementSource(audio); 
    source.connect(analyser);
    analyser.connect(context.destination);
    fr();
}

function fr(){

    window.webkitRequestAnimationFrame(fr);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bars =360;
  	Е­-=.5;
  
    for (var i = 0; i < bars; i=i+3) {
      bar_x = i * 2;
      bar_width = 1;
      bar_height = -(fbc_array[i]/2);
      var magnitude = fbc_array[i + 100];
      
      var hcanvas = canvas.height;	// РґР»РёРЅР° canvas
      var wcanvas = canvas.width;		// С€РёСЂРёРЅР° canvas

      var R1 = 10;												// СЂР°РґРёСѓСЃ Р±РѕР»СЊС€РѕРіРѕ РєСЂСѓРіР°
      var R2 = hcanvas/2-150-bar_height;	// СЂР°РґРёСѓСЃ РјР°Р»РµРЅСЊРєРѕРіРѕ РєСЂСѓРіР°

      var tbX = hcanvas/2; 					// С†РµРЅС‚СЂ
      var tbY = wcanvas/2; 					// С†РµРЅС‚СЂ
      var tb1 = (hcanvas/2)+R2; 		// РєРѕРѕСЂРґРёРЅР°С‚Р° РЅР°С‡Р°Р»СЊРЅРѕР№ С‚РѕС‡РєРё Р±РѕР»СЊС€РѕРіРѕ РєСЂСѓРіР°
      var tb2 = wcanvas/2; 					// РєРѕРѕСЂРґРёРЅР°С‚Р° РЅР°С‡Р°Р»СЊРЅРѕР№ С‚РѕС‡РєРё Р±РѕР»СЊС€РѕРіРѕ РєСЂСѓРіР°
      var tm1 = (hcanvas/2)+R1; 		// РєРѕРѕСЂРґРёРЅР°С‚Р° РЅР°С‡Р°Р»СЊРЅРѕР№ С‚РѕС‡РєРё РјР°Р»РµРЅСЊРєРѕРіРѕ РєСЂСѓРіР°
      var tm2 = wcanvas/2; 					// РєРѕРѕСЂРґРёРЅР°С‚Р° РЅР°С‡Р°Р»СЊРЅРѕР№ С‚РѕС‡РєРё РјР°Р»РµРЅСЊРєРѕРіРѕ РєСЂСѓРіР°

      var Dlina1 = 2*Math.PI*R1;		// РґР»РёРЅР° РґСѓРіРё Р±РѕР»СЊС€РѕРіРѕ РєСЂСѓРіР°
      var Dsegment1 = Dlina1/360;		// РґР»РёРЅР° РѕРґРЅРѕРіРѕ СЃРµРіРјРµРЅС‚Р° Р±РѕР»СЊС€РѕРіРѕ РєСЂСѓРіР°
      var Dlina2 = 2*Math.PI*R2;		// РґР»РёРЅР° РґСѓРіРё РјР°Р»РµРЅСЊРєРѕРіРѕ РєСЂСѓРіР°
      var Dsegment2 = Dlina2/360;		// РґР»РёРЅР° РѕРґРЅРѕРіРѕ СЃРµРіРјРµРЅС‚Р° РјР°Р»РµРЅСЊРєРѕРіРѕ РєСЂСѓРіР°

      var c = tb1 - tb2;  					// СЂР°СЃС‡С‘С‚ РєРѕРѕСЂРґРёРЅР°С‚С‹ РІРµРєС‚РѕСЂР°
      var d = tbX - tbY;  					// СЂР°СЃС‡С‘С‚ РєРѕРѕСЂРґРёРЅР°С‚С‹ РІРµРєС‚РѕСЂР°
      var f1 = Dsegment1/R1;				// Р—РЅР°С‡РµРЅРёРµ СѓРіР»Р° С„ РІ СЂР°РґРёР°РЅР°С…

      var a = tm1 - tm2;  					// СЂР°СЃС‡С‘С‚ РєРѕРѕСЂРґРёРЅР°С‚С‹ РІРµРєС‚РѕСЂР°
      var b = tbX - tbY;  					// СЂР°СЃС‡С‘С‚ РєРѕРѕСЂРґРёРЅР°С‚С‹ РІРµРєС‚РѕСЂР°
      var f2 = Dsegment2/R2;				// Р—РЅР°С‡РµРЅРёРµ СѓРіР»Р° С„ РІ СЂР°РґРёР°РЅР°С…
      
      var E1 = a * Math.cos(f1*i) + b * Math.sin(f1*i) + tbX;
      var E2 = b * Math.cos(f1*i) + a * Math.sin(f1*i) + tbY;
      var E3 = c * Math.cos(f2*i) + d * Math.sin(f2*i) + tbX;
      var E4 = d * Math.cos(f2*i) + c * Math.sin(f2*i) + tbY;

			//var grad = ctx.createRadialGradient(magnitude,105,210,112,magnitude,50);
     	//grad.addColorStop(0.0,"hsla(" + (Е­ % 360) + ",100%,50%,1)");
      //grad.addColorStop(0.5,"hsla(" + (Е­ % 360) + ",50%,100%,1)");
      //grad.addColorStop(1,"hsla(" + (Е­ % 360) + ",20%,80%,1)");
      
      ctx.beginPath();
      ctx.lineWidth =2;
      ctx.moveTo(E3,E4);
      //ctx.strokeStyle = grad;
      ctx.strokeStyle = "hsla(" + (Е­ % 360) + ",100%,50%,1)";
      ctx.quadraticCurveTo(hcanvas/2, wcanvas/2, E1,E2);
      ctx.stroke();
      
      /*ctx.beginPath();
      ctx.lineWidth =2;
      ctx.moveTo(E4,E3);
      ctx.strokeStyle = 'orange';
      ctx.quadraticCurveTo(hcanvas/2, wcanvas/2, E4,E3);
      ctx.stroke();*/
    }
  
    var x1=(Math.PI/180)*0;
    var x2=(Math.PI/180)*360;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.arc(hcanvas/2,wcanvas/2,R1,x1,x2);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.arc(hcanvas/2,wcanvas/2,R1+10,x1,x2);
    ctx.stroke();
}

$(function() {	
    $('#song').change(function(e) {		//РѕР±СЂР°Р±РѕС‚РєР° РІС‹Р±РѕСЂР° Рё РїРѕРґРєР»СЋС‡РµРЅРёСЏ С„Р°Р№Р»Р°
        var file = e.target.files[0];
        var reader = new FileReader();
				reader.readAsDataURL(file);
        reader.onloadend = function (event){
            var e = event || window.event;
            window.audio.src = e.target.result;
				};
    });	
});
