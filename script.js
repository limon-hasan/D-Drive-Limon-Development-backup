// // এই লেখাটি সরাসরি আপনার Node.js টার্মিনালে বা ব্রাউজারের কনসোলে দেখাবে
// console.log("জাভাস্ক্রিপ্ট ফাইলটি সফলভাবে রান হচ্ছে!");

// // HTML-এর বাটন ক্লিক করলে এই ফাংশনটি কাজ করবে
// function changeText() {
//     let textElement = document.getElementById("message");
//     textElement.innerHTML = "অভিনন্দন! আপনার HTML এবং JavaScript ঠিকঠাক কাজ করছে! 🎉";
//     textElement.style.color = "green";
//     textElement.style.fontWeight = "bold";
    
//     console.log("বাটনে ক্লিক করা হয়েছে!");
// }



function calculator(a, b, callBack) {
    let sum = a + b;
    callBack(sum);
}
function showResult(result) {
    console.log(result);
}

(calculator(4,5, showResult))