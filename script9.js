const func = () => {
    let g1 = document.getElementById('1st').value;
    let g2 = document.getElementById('2nd').value;
    let g3 = document.getElementById('3rd').value;
    let g4 = document.getElementById('4th').value;
    let g5 = document.getElementById('5th').value;
    let g6 = document.getElementById('6th').value;
    let g7 = document.getElementById('7th').value;
    let g8 = document.getElementById('8th').value;
    let g9 = document.getElementById('9th').value;
    let u1 = document.getElementById('1st-2').value;
    let u2 = document.getElementById('2nd-2').value;
    let u3 = document.getElementById('3rd-2').value;
    let u4 = document.getElementById('4th-2').value;
    let u5 = document.getElementById('5th-2').value;
    let u6 = document.getElementById('6th-2').value;
    let u7 = document.getElementById('7th-2').value;
    let u8 = document.getElementById('8th-2').value;
    let u9 = document.getElementById('9th-2').value;

    let avg1 = parseFloat(g1) * parseFloat(u1);
    let avg2 = parseFloat(g2) * parseFloat(u2);
    let avg3 = parseFloat(g3) * parseFloat(u3);
    let avg4 = parseFloat(g4) * parseFloat(u4);
    let avg5 = parseFloat(g5) * parseFloat(u5);
    let avg6 = parseFloat(g6) * parseFloat(u6);
    let avg7 = parseFloat(g7) * parseFloat(u7);
    let avg8 = parseFloat(g8) * parseFloat(u8);
    let avg9 = parseFloat(g9) * parseFloat(u9);

    let unit = parseFloat(u1)+parseFloat(u2)+parseFloat(u3)+parseFloat(u4)+parseFloat(u5)+parseFloat(u6)+parseFloat(u7)+parseFloat(u8)+parseFloat(u9);

    let total = (avg1 + avg2 + avg3 + avg4 + avg5 + avg6 + avg7 + avg8 + avg9)/unit;

    let gwa = total.toPrecision(5);

    if(gwa<=1.45 && g1<=2.4 && g2<=2.4 && g3<=2.4 && g4<=2.4 && g5<=2.4 && g6<=2.4 && g7<=2.4 && g8<=2.4 && g9<=2.4 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0){
        document.getElementById('showData-1').innerHTML = ""+ gwa;
        document.getElementById('showData-2').innerHTML = `<h3 style="color:white; font-size:15px">You're a <strong style="color:yellow;">PRESIDENT'S LISTER.</strong> Congratulations!</h3>`
    }
    else if(gwa<=1.75 && g1<=2.4 && g2<=2.4 && g3<=2.4 && g4<=2.4 && g5<=2.4 && g6<=2.4 && g7<=2.4 && g8<=2.4 && g9<=2.4 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0){
        document.getElementById('showData-1').innerHTML = ""+ gwa;
        document.getElementById('showData-2').innerHTML = `<h3 style="color:white; font-size:15px">You're a <strong style="color:orange;">DEAN'S LISTER.</strong> Congratulations!</h3>`
    } else if (gwa<=5 && g1>0 && g1<=5 && g2>0 && g2<=5 && g3>0 && g3<=5 && g4>0 && g4<=5 && g5>0 && g5<=5 && g6>0 && g6<=5 && g7>0 && g7<=5 && g8>0 && g8<=5 && g9>0 && g9<=5 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0){
        document.getElementById('showData-1').innerHTML = ""+ gwa;
        document.getElementById('showData-2').innerHTML = `<h3 style="color:white; font-size:15px">Ginawa ko naman lahat, hindi pa rin sapat</h3>`
    } else {
        document.getElementById('showData-1').innerHTML = `<h1 style="color:red; font-size:18px">ERROR</h1>`
        document.getElementById('showData-2').innerHTML = `Wala ka na ginawang tama`
    }
}
