$(document).ready(function(e){
    //strings
    //create a synth and connect it to the master output (your speakers)
    var synth = new Tone.Synth().toMaster();
    //play a middle 'C' for the duration of an 8th note
    // synth.triggerAttackRelease('C3', '8n');
    $(".c3").on('click || mouseover',function(e){
        synth.triggerAttackRelease('C3', '8n');
    });
    $(".d3").on('click || mouseover',function(e){
        synth.triggerAttackRelease('D3', '8n');
    });
    $(".e3").on('click || mouseover',function(e){
        synth.triggerAttackRelease('E3', '8n');
    });
    $(".f3").on('click || mouseover',function(e){
        synth.triggerAttackRelease('F3', '8n');
    });
    $(".g3").on('click || mouseover',function(e){
        synth.triggerAttackRelease('G3', '8n');
    });
    $(".a3").on('click || mouseover',function(e){
        synth.triggerAttackRelease('A3', '8n');
    });
    $(".b3").on('click || mouseover',function(e){
        synth.triggerAttackRelease('B3', '8n');
    });
    $(".c4").on('click || mouseover',function(e){
        synth.triggerAttackRelease('C4', '8n');
    });
    $(".d4").on('click || mouseover',function(e){
        synth.triggerAttackRelease('D4', '8n');
    });
    $(".e4").on('click || mouseover',function(e){
        synth.triggerAttackRelease('E4', '8n');
    });
    $(".f4").on('click || mouseover',function(e){
        synth.triggerAttackRelease('F4', '8n');
    });
    $(".g4").on('click || mouseover',function(e){
        synth.triggerAttackRelease('G4', '8n');
    });
    $(".a4").on('click || mouseover',function(e){
        synth.triggerAttackRelease('A4', '8n');
    });
    $(".b4").on('click || mouseover',function(e){
        synth.triggerAttackRelease('B4', '8n');
    });
    $(".c5").on('click || mouseover',function(e){
        synth.triggerAttackRelease('C5', '8n');
    });
    $(".d5").on('click || mouseover',function(e){
        synth.triggerAttackRelease('D5', '8n');
    });
    $(".e5").on('click || mouseover',function(e){
        synth.triggerAttackRelease('E5', '8n');
    });
    $(".f5").on('click || mouseover',function(e){
        synth.triggerAttackRelease('F5', '8n');
    });
    $(".g5").on('click || mouseover',function(e){
        synth.triggerAttackRelease('G5', '8n');
    });
    $(".a5").on('click || mouseover',function(e){
        synth.triggerAttackRelease('A5', '8n');
    });
    $(".b5").on('click || mouseover',function(e){
        synth.triggerAttackRelease('B5', '8n');
    });

    //keyboard event
    $(document).keypress(function(e){
        var x = e.keyCode;
        console.log(x);
        if(x == 97){
            synth.triggerAttackRelease('C3', '8n');
        } else if(x == 115){
            synth.triggerAttackRelease('D3', '8n');
        } else if(x == 100){
            synth.triggerAttackRelease('E3', '8n');
        } else if(x == 102){
            synth.triggerAttackRelease('F3', '8n');
        } else if(x == 103){
            synth.triggerAttackRelease('G3', '8n');
        } else if(x == 104){
            synth.triggerAttackRelease('A3', '8n');
        } else if(x == 106){
            synth.triggerAttackRelease('B3', '8n');
        } else if(x == 107){
            synth.triggerAttackRelease('C4', '8n');
        }
        else if(x == 93){
            synth.triggerAttackRelease('B5', '8n');
        } else if(x == 91){
            synth.triggerAttackRelease('A5', '8n');
        } else if(x == 112){
            synth.triggerAttackRelease('G5', '8n');
        } else if(x == 111){
            synth.triggerAttackRelease('F5', '8n');
        } else if(x == 105){
            synth.triggerAttackRelease('E5', '8n');
        } else if(x == 117){
            synth.triggerAttackRelease('D5', '8n');
        } else if(x == 121){
            synth.triggerAttackRelease('C5', '8n');
        } else if(x == 116){
            synth.triggerAttackRelease('B4', '8n');
        } else if(x == 114){
            synth.triggerAttackRelease('A4', '8n');
        } else if(x == 101){
            synth.triggerAttackRelease('G4', '8n');
        } else if(x == 119){
            synth.triggerAttackRelease('F4', '8n');
        } else if(x == 113){
            synth.triggerAttackRelease('E4', '8n');
        } else if(x == 108){
            synth.triggerAttackRelease('D4', '8n');
        }
    });

});