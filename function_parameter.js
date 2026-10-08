// সাধারণ ফাংশন ডিক্লেয়ারেশন
function showFriends(names) {
    console.log("আমার বন্ধুদের তালিকা:");
    
    // লুপ চালিয়ে অ্যারের ডেটা প্রিন্ট করা
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// ফাংশন কল করার সময় অ্যারে পাস করা হচ্ছে
// var myFriends = ["Rahim", "Karim", "Jamal"];
showFriends(["Rahim", "Karim", "Jamal"]);


// names = [] দিয়ে ডিফল্ট একটি ফাঁকা অ্যারে সেট করা হয়েছে
// const showFriendsES6 = (names) => {
//     // names.forEach(name => console.log(name));
//     names.forEach((name) => {
//         console.log(name);
//     });
// };

let showFriendsES6 = (names) => {
    // names.forEach((name)=> {
    //     console.log(name);
    // })
    names.forEach(name => console.log(name))
} 


showFriendsES6(["Alice", "Bob"]); // আউটপুট: Alice, Bob
// showFriendsES6(); // কোনো এরর দেবে না, কারণ ডিফল্ট [] সেট করা আছে