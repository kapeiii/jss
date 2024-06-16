const func = () => {
    let name = document.getElementById('name').value;
    let fail = document.getElementById('fail').value;
    let g1 = document.getElementById('1st').value;
    let g2 = document.getElementById('2nd').value;
    let g3 = document.getElementById('3rd').value;
    let g4 = document.getElementById('4th').value;
    let g5 = document.getElementById('5th').value;
    let g6 = document.getElementById('6th').value;
    let g7 = document.getElementById('7th').value;
    let g8 = document.getElementById('8th').value;
    let u1 = document.getElementById('1st-2').value;
    let u2 = document.getElementById('2nd-2').value;
    let u3 = document.getElementById('3rd-2').value;
    let u4 = document.getElementById('4th-2').value;
    let u5 = document.getElementById('5th-2').value;
    let u6 = document.getElementById('6th-2').value;
    let u7 = document.getElementById('7th-2').value;
    let u8 = document.getElementById('8th-2').value;

    let avg1 = parseFloat(g1) * parseFloat(u1);
    let avg2 = parseFloat(g2) * parseFloat(u2);
    let avg3 = parseFloat(g3) * parseFloat(u3);
    let avg4 = parseFloat(g4) * parseFloat(u4);
    let avg5 = parseFloat(g5) * parseFloat(u5);
    let avg6 = parseFloat(g6) * parseFloat(u6);
    let avg7 = parseFloat(g7) * parseFloat(u7);
    let avg8 = parseFloat(g8) * parseFloat(u8);

    let unit = parseFloat(u1)+parseFloat(u2)+parseFloat(u3)+parseFloat(u4)+parseFloat(u5)+parseFloat(u6)+parseFloat(u7)+parseFloat(u8);

    let total = (avg1 + avg2 + avg3 + avg4 + avg5 + avg6 + avg7 + avg8)/unit;

    let gwa = total.toPrecision(5);

    if(gwa<=1.25 && fail==0 && g1<=5.0 && g2<=5.0 && g3<=5.0 && g4<=5.0 && g5<=5.0 && g6<=5.0 && g7<=5.0 && g8<=5.0 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0){
        document.getElementById('showData-1').innerHTML = '<strong style="color:gold; text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);">SUMMA CUM LAUDE</strong>'
        document.getElementById('showData-2').innerHTML = name;
        document.getElementById('showData-3').innerHTML = gwa;
    }
    else if(gwa<=1.45 && fail==0 && g1<=5.0 && g2<=5.0 && g3<=5.0 && g4<=5.0 && g5<=5.0 && g6<=5.0 && g7<=5.0 && g8<=5.0 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0){
        document.getElementById('showData-1').innerHTML = '<strong style="color:gold;text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);">MAGNA CUM LAUDE</strong>'
        document.getElementById('showData-2').innerHTML = name;
        document.getElementById('showData-3').innerHTML = gwa;
    }
    else if(gwa<=1.75 && fail==0 && g1<=5.0 && g2<=5.0 && g3<=5.0 && g4<=5.0 && g5<=5.0 && g6<=5.0 && g7<=5.0 && g8<=5.0 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0){
        document.getElementById('showData-1').innerHTML = '<strong style="color:gold;text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);">CUM LAUDE</strong>'
        document.getElementById('showData-2').innerHTML = name;
        document.getElementById('showData-3').innerHTML = gwa;
    }
     else if (gwa<=5 && fail>=1 && g1>0 && g1<=5 && g2>0 && g2<=5 && g3>0 && g3<=5 && g4>0 && g4<=5 && g5>0 && g5<=5 && g6>0 && g6<=5 && g7>0 && g7<=5 && g8>0 && g8<=5 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0){
        document.getElementById('showData-1').innerHTML = "";
        document.getElementById('showData-2').innerHTML = 'Congratulations on reaching this milestone!'
        document.getElementById('showData-3').innerHTML = gwa;
    } else {
        document.getElementById('showData-1').innerHTML = `<h1 style="color:red; font-size:18px">ERROR</h1>`
        document.getElementById('showData-2').innerHTML = `Hmm, that didn't work. Try again?`
        document.getElementById('showData-3').innerHTML = "";
    }
}
