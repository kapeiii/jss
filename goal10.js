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
    let g10 = document.getElementById('10th').value;
    let u1 = document.getElementById('1st-2').value;
    let u2 = document.getElementById('2nd-2').value;
    let u3 = document.getElementById('3rd-2').value;
    let u4 = document.getElementById('4th-2').value;
    let u5 = document.getElementById('5th-2').value;
    let u6 = document.getElementById('6th-2').value;
    let u7 = document.getElementById('7th-2').value;
    let u8 = document.getElementById('8th-2').value;
    let u9 = document.getElementById('9th-2').value;
    let u10 = document.getElementById('10th-2').value;
    let remaining = document.getElementById('us').value;

    let avg1 = parseFloat(g1) * parseFloat(u1);
    let avg2 = parseFloat(g2) * parseFloat(u2);
    let avg3 = parseFloat(g3) * parseFloat(u3);
    let avg4 = parseFloat(g4) * parseFloat(u4);
    let avg5 = parseFloat(g5) * parseFloat(u5);
    let avg6 = parseFloat(g6) * parseFloat(u6);
    let avg7 = parseFloat(g7) * parseFloat(u7);
    let avg8 = parseFloat(g8) * parseFloat(u8);
    let avg9 = parseFloat(g9) * parseFloat(u9);
    let avg10 = parseFloat(g10) * parseFloat(u10);

    let unit = parseFloat(u1)+parseFloat(u2)+parseFloat(u3)+parseFloat(u4)+parseFloat(u5)+parseFloat(u6)+parseFloat(u7)+parseFloat(u8)+parseFloat(u9)+parseFloat(u10);

    let total = (avg1 + avg2 + avg3 + avg4 + avg5 + avg6 + avg7 + avg8 + avg9 + avg10)/unit;

    let gwa = total.toPrecision(5);

    let tAverage = avg1 + avg2 + avg3 + avg4 + avg5 + avg6 + avg7 + avg8 + avg9 + avg10;
    let tUnitsRequired = unit + parseFloat(remaining);
    
    let probabilityPL = (1.45 * tUnitsRequired) - tAverage;
    let pl = probabilityPL/remaining;
    let finalPL = pl.toPrecision(5);

    let probabilityDL = (1.75 * tUnitsRequired) - tAverage;
    let dl = probabilityDL/remaining;
    let finalDL = dl.toPrecision(5);

    if (finalDL<1 && g1<=2.4 && g1>=1 && g2<=2.4 && g2>=1 && g3<=2.4 && g3>=1 && g4<=2.4 && g4>=1 && g5<=2.4 && g5>=1 && g6<=2.4 && g6>=1 && g7<=2.4 && g7>=1 && g8<=2.4 && g8>=1 && g9<=2.4 && g9>=1 && g10<=2.4 && g10>=1 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0 && u10>0 && remaining>=1){
        document.getElementById('showData-1').innerHTML = `<strong style="color:yellow;"> CURRENT GWA </strong>`
        document.getElementById('showData-2').innerHTML = "";
        document.getElementById('showData-3').innerHTML = gwa;
        document.getElementById('showData-4').innerHTML = `<strong style="color:yellow;"> President Lister Goal </strong>`
        document.getElementById('showData-5').innerHTML = "";
        document.getElementById('showData-6').innerHTML = `impossible`;
        document.getElementById('showData-7').innerHTML = `<strong style="color:yellow;"> Dean Lister Goal </strong>`
        document.getElementById('showData-8').innerHTML = "";
        document.getElementById('showData-9').innerHTML = `impossible`;
        document.getElementById('showData-10').innerHTML = `------------------`;
    }
    else if (finalPL>=2.4 && g1>=1 && g2<=2.4 && g2>=1 && g3<=2.4 && g3>=1 && g4<=2.4 && g4>=1 && g5<=2.4 && g5>=1 && g6<=2.4 && g6>=1 && g7<=2.4 && g7>=1 && g8<=2.4 && g8>=1 && g9<=2.4 && g9>=1 && g10<=2.4 && g10>=1 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0 && u10>0 && remaining>=1){
        document.getElementById('showData-1').innerHTML = `<strong style="color:yellow;"> CURRENT GWA </strong>`
        document.getElementById('showData-2').innerHTML = "";
        document.getElementById('showData-3').innerHTML = gwa;
        document.getElementById('showData-4').innerHTML = `<strong style="color:yellow;"> President Lister Goal </strong>`
        document.getElementById('showData-5').innerHTML = `SECURED`;
        document.getElementById('showData-6').innerHTML = `(maintain remaining subject/s above 2.5)`;
        document.getElementById('showData-7').innerHTML = "";
        document.getElementById('showData-8').innerHTML = "";
        document.getElementById('showData-9').innerHTML = "";
        document.getElementById('showData-10').innerHTML = `------------------`;
    }
    else if (finalDL<=2.4 && finalPL<1 && g1<=2.4 && g1>=1 && g2<=2.4 && g2>=1 && g3<=2.4 && g3>=1 && g4<=2.4 && g4>=1 && g5<=2.4 && g5>=1 && g6<=2.4 && g6>=1 && g7<=2.4 && g7>=1 && g8<=2.4 && g8>=1 && g9<=2.4 && g9>=1 && g10<=2.4 && g10>=1 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0 && u10>0 && remaining>=1){
        document.getElementById('showData-1').innerHTML = `<strong style="color:yellow;"> CURRENT GWA </strong>`
        document.getElementById('showData-2').innerHTML = "";
        document.getElementById('showData-3').innerHTML = gwa;
        document.getElementById('showData-4').innerHTML = `<strong style="color:yellow;"> President Lister Goal </strong>`
        document.getElementById('showData-5').innerHTML = "";
        document.getElementById('showData-6').innerHTML = `impossible`;
        document.getElementById('showData-7').innerHTML = `<strong style="color:yellow;"> Dean Lister Goal </strong>`
        document.getElementById('showData-8').innerHTML = finalDL;
        document.getElementById('showData-9').innerHTML = `(minimum grade for each remaining subjects)`;
        document.getElementById('showData-10').innerHTML = `------------------`;
    }
    else if (finalPL<1 && finalDL>2.4 && g1<=2.4 && g1>=1 && g2<=2.4 && g2>=1 && g3<=2.4 && g3>=1 && g4<=2.4 && g4>=1 && g5<=2.4 && g5>=1 && g6<=2.4 && g6>=1 && g7<=2.4 && g7>=1 && g8<=2.4 && g8>=1 && g9<=2.4 && g9>=1 && g10<=2.4 && g10>=1 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0 && u10>0 && remaining>=1){
        document.getElementById('showData-1').innerHTML = `<strong style="color:yellow;"> CURRENT GWA </strong>`
        document.getElementById('showData-2').innerHTML = "";
        document.getElementById('showData-3').innerHTML = gwa;
        document.getElementById('showData-4').innerHTML = `<strong style="color:yellow;"> President Lister Goal </strong>`
        document.getElementById('showData-5').innerHTML = "";
        document.getElementById('showData-6').innerHTML = `impossible`;
        document.getElementById('showData-7').innerHTML = `<strong style="color:yellow;"> Dean Lister Goal </strong>`
        document.getElementById('showData-8').innerHTML = `SECURED`;
        document.getElementById('showData-9').innerHTML = `(maintain remaining subject/s above 2.5)`;
        document.getElementById('showData-10').innerHTML = `------------------`;
    }
    else if (finalDL<2.4 && finalPL<2.4 && g1<=2.4 && g1>=1 && g2<=2.4 && g2>=1 && g3<=2.4 && g3>=1 && g4<=2.4 && g4>=1 && g5<=2.4 && g5>=1 && g6<=2.4 && g6>=1 && g7<=2.4 && g7>=1 && g8<=2.4 && g8>=1 && g9<=2.4 && g9>=1 && g10<=2.4 && g10>=1 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0 && u10>0 && remaining>=1){
        document.getElementById('showData-1').innerHTML = `<strong style="color:yellow;"> CURRENT GWA </strong>`
        document.getElementById('showData-2').innerHTML = "";
        document.getElementById('showData-3').innerHTML = gwa;
        document.getElementById('showData-4').innerHTML = `<strong style="color:yellow;"> President Lister Goal </strong>`
        document.getElementById('showData-5').innerHTML = finalPL;
        document.getElementById('showData-6').innerHTML = `(minimum grade for each remaining subjects)`;
        document.getElementById('showData-7').innerHTML = `<strong style="color:yellow;"> Dean Lister Goal </strong>`
        document.getElementById('showData-8').innerHTML = finalDL;
        document.getElementById('showData-9').innerHTML = `(minimum grade for each remaining subjects)`;
        document.getElementById('showData-10').innerHTML = `------------------`;
    }
    else if (finalPL<2.4 && finalDL>=2.4 && g1<=2.4 && g1>=1 && g2<=2.4 && g2>=1 && g3<=2.4 && g3>=1 && g4<=2.4 && g4>=1 && g5<=2.4 && g5>=1 && g6<=2.4 && g6>=1 && g7<=2.4 && g7>=1 && g8<=2.4 && g8>=1 && g9<=2.4 && g9>=1 && g10<=2.4 && g10>=1 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0 && u10>0 && remaining>=1){
        document.getElementById('showData-1').innerHTML = `<strong style="color:yellow;"> CURRENT GWA </strong>`
        document.getElementById('showData-2').innerHTML = "";
        document.getElementById('showData-3').innerHTML = gwa;
        document.getElementById('showData-4').innerHTML = `<strong style="color:yellow;"> President Lister Goal </strong>`
        document.getElementById('showData-5').innerHTML = finalPL;
        document.getElementById('showData-6').innerHTML = `(minimum grade for each remaining subjects)`;
        document.getElementById('showData-7').innerHTML = `<strong style="color:yellow;"> Dean Lister Goal </strong>`
        document.getElementById('showData-8').innerHTML = `SECURED`;
        document.getElementById('showData-9').innerHTML = `(maintain remaining subject/s above 2.5)`;
        document.getElementById('showData-10').innerHTML = `------------------`;
    }
    else if (g1>=1 && g1<5 && g2>=1 && g2<5 && g3>=1 && g3<5 && g4>=1 && g4<5 && g5>=1 && g5<5 && g6>=1 && g6<5 && g7>=1 && g7<5 && g8>=1 && g8<5 && g9>=1 && g9<5 && g10>=1 && g10<5 && u1>0 && u2>0 && u3>0 && u4>0 && u5>0 && u6>0 && u7>0 && u8>0 && u9>0 && u10>0 && remaining>=1){
        document.getElementById('showData-1').innerHTML = `<strong style="color:yellow;"> CURRENT GWA </strong>`
        document.getElementById('showData-2').innerHTML = "";
        document.getElementById('showData-3').innerHTML = gwa;
        document.getElementById('showData-4').innerHTML = `<strong style="color:yellow;"> President Lister Goal </strong>`
        document.getElementById('showData-5').innerHTML = "";
        document.getElementById('showData-6').innerHTML = `impossible`;
        document.getElementById('showData-7').innerHTML = `<strong style="color:yellow;"> Dean Lister Goal </strong>`
        document.getElementById('showData-8').innerHTML = "";
        document.getElementById('showData-9').innerHTML = `impossible`;
        document.getElementById('showData-10').innerHTML = `------------------`;
    }
    else {
        document.getElementById('showData-1').innerHTML = `<h1 style="color:red; font-size:18px">ERROR</h1>`
        document.getElementById('showData-2').innerHTML = `Hmm, that didn't work. Try again?`
        document.getElementById('showData-3').innerHTML = "";
        document.getElementById('showData-4').innerHTML = "";
        document.getElementById('showData-5').innerHTML = "";
        document.getElementById('showData-6').innerHTML = "";
        document.getElementById('showData-7').innerHTML = "";
        document.getElementById('showData-8').innerHTML = "";
        document.getElementById('showData-9').innerHTML = "";
        document.getElementById('showData-10').innerHTML = "";
    }
    

    


}