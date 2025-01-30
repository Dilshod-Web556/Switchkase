// let a = 2 + 2; 
// switch (a) {
//   case 3:
//     alert("not enoght");
//     break;
//   case 4:
//     alert("exectly");
//     break;
//   case 5:
//     alert("more than enoght");
//     break;
//     default:
// //         alert("not"); 
// // }

// let a = '1';
// let b = 0;
// switch(+a){
//     case b+1:
//         alert('works')
//         break;


//         default:
//             alert('not works');
// }

// let a = 4; 
// switch (a) {
//   case 4:
//     alert("enoght");
//     break;
//   case 3:
//   case 5:
//     alert("more than enoght");
//     alert("think more");
//     break;
//     default:
//         alert("not"); 
// }

// let browser = prompt('which browser you use?');
// if(browser === 'edge'){
//     alert('you have got the Edge');
// }else if(browser == 'chrome'
//     || 'firefox' || 'safari' ||'opere'){
//     alert('okay we support these browers too');
// }else{
//     alert('we hope that this page looks ok!');
// }

//HOME TASK
function orderFood(){
    let userInput = parseInt(prompt("Qiyqiriq сет nechita zakaz qimoqchisiz?"));

    switch (userInput) {
        case 1:
                let confirm1 = confirm(`1ta Qiyqiriq сет narxi : 45 000 som
                maxsulotni zakaz qilasizmi?`);
                if (confirm1) {
                    alert("zakaz qabul qilindi");
                } else {
                    alert("zakaz qabul qilinmadi");
                }
            break;
        case 2:
            let confirm2 = confirm(`2ta Qiyqiriq сет narxi : 90 000 som
                maxsulotni zakaz qilasizmi?`);
                if (confirm2) {
                    alert("zakaz qabul qilindi");
                } else {
                    alert("zakaz qabul qilinmadi");
                }
            break;
        case 3:
            let confirm3 = confirm(`3ta Qiyqiriq сет narxi : 135 000 som
                maxsulotni zakaz qilasizmi?`);
                if (confirm3) {
                    alert("zakaz qabul qilindi");
                } else {
                    alert("zakaz qabul qilinmadi");
                }
            break;
        default:
            alert("Xatolik");
    }
}
