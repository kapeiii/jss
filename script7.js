const func = () => {
    let g1 = document.getElementById('1st').value;
    let g2 = document.getElementById('2nd').value;
    let g3 = document.getElementById('3rd').value;
    let g4 = document.getElementById('4th').value;
    let g5 = document.getElementById('5th').value;
    let g6 = document.getElementById('6th').value;
    let g7 = document.getElementById('7th').value;
    let u1 = document.getElementById('1st-2').value;
    let u2 = document.getElementById('2nd-2').value;
    let u3 = document.getElementById('3rd-2').value;
    let u4 = document.getElementById('4th-2').value;
    let u5 = document.getElementById('5th-2').value;
    let u6 = document.getElementById('6th-2').value;
    let u7 = document.getElementById('7th-2').value;

    let avg1 = parseFloat(g1) * parseFloat(u1);
    let avg2 = parseFloat(g2) * parseFloat(u2);
    let avg3 = parseFloat(g3) * parseFloat(u3);
    let avg4 = parseFloat(g4) * parseFloat(u4);
    let avg5 = parseFloat(g5) * parseFloat(u5);
    let avg6 = parseFloat(g6) * parseFloat(u6);
    let avg7 = parseFloat(g7) * parseFloat(u7);

    let unit = parseFloat(u1)+parseFloat(u2)+parseFloat(u3)+parseFloat(u4)+parseFloat(u5)+parseFloat(u6)+parseFloat(u7);

    let total = (avg1 + avg2 + avg3 + avg4 + avg5 + avg6 + avg7)/unit;

    let gwa = total.toPrecision(5);

    if(gwa<=1.75 && g1<2.5 && g2<2.5 && g3<2.5 && g4<2.5 && g5<2.5 && g6<2.5 && g7<2.5){
        document.getElementById('showData-1').innerHTML = ""+ gwa;
        document.getElementById('showData-2').innerHTML = `<h3 style="color:white; font-size:15px">You're a <strong style="color:orange;">DEAN LISTER.</strong> Congratulations!</h3>`
    } else if (g1<=0 || g1>5 || g2<=0 || g2>5 || g3<=0 || g3>5 || g4<=0 || g4>5 || g5<=0 || g5>5 || g6<=0 || g6>5 || g7<=0 || g7>5 || u1<=0 || u2<=0 || u3<=0 || u4<=0 || u5<=0 || u6<=0 || u7<=0){
        document.getElementById('showData-1').innerHTML = `<h1 style="color:red; font-size:18px">ERROR</h1>`
        document.getElementById('showData-2').innerHTML = `Something went wrong. Please make sure that you fill out all of the needed information.`
    } else {
        document.getElementById('showData-1').innerHTML = ""+ gwa;
        document.getElementById('showData-2').innerHTML = `<h3 style="color:white; font-size:15px">Nice work. Keep it up!</h3>`
    }
}
