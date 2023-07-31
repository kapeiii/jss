const func = () => {
    let g1 = document.getElementById('1st').value;
    let g2 = document.getElementById('2nd').value;
    let g3 = document.getElementById('3rd').value;
    let g4 = document.getElementById('4th').value;
    let u1 = document.getElementById('1st-2').value;
    let u2 = document.getElementById('2nd-2').value;
    let u3 = document.getElementById('3rd-2').value;
    let u4 = document.getElementById('4th-2').value;

    let avg1 = parseFloat(g1) * parseFloat(u1);
    let avg2 = parseFloat(g2) * parseFloat(u2);
    let avg3 = parseFloat(g3) * parseFloat(u3);
    let avg4 = parseFloat(g4) * parseFloat(u4);

    let unit = parseFloat(u1)+parseFloat(u2)+parseFloat(u3)+parseFloat(u4);

    let total = (avg1 + avg2 + avg3 + avg4)/unit;

    let gwa = total.toPrecision(5);

    if(gwa<=1.75 && g1<2.5 && g2<2.5 && g3<2.5 && g4<2.5){
        document.getElementById('showData-1').innerHTML = ""+ gwa;
        document.getElementById('showData-2').innerHTML = `<h3 style="color:white; font-size:15px">You're a <strong style="color:orange;">DEAN LISTER.</strong> Congratulations!</h3>`
    } else if (g1<=0 || g1>5 || g2<=0 || g2>5 || g3<=0 || g3>5 || g4<=0 || g4>5 || u1<=0 || u2<=0 || u3<=0 || u4<=0){
        document.getElementById('showData-1').innerHTML = `<h1 style="color:red; font-size:18px">ERROR</h1>`
        document.getElementById('showData-2').innerHTML = `Something went wrong. Please make sure that you fill out all of the needed information.`
    } else {
        document.getElementById('showData-1').innerHTML = ""+ gwa;
        document.getElementById('showData-2').innerHTML = `<h3 style="color:white; font-size:15px">Nice work. Keep it up!</h3>`
    }
}
