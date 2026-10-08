// const frameworks = ["React", "Next.js", "Node.js"];

// const [a, b] = frameworks;

// console.log(a);  // আউটপুট: "React"
// console.log(b); // আউটপুট: "Next.js"
// console.log("hlll")


// console.log("ABBBBBA");



// const frameworks : string[] = ["React", "Next.js", "Node.js"];
// const output = (frameworks : string[]) : void => {
//     frameworks.forEach((val) => {
//         console.log(val);
//     })
// }
// output(frameworks);


// ১. প্রথমে একটি Type তৈরি করে নিলাম
// type Developer = {
//     name: string;
//     major: string;
//     currentFocus: string;
// };

// ২. এবার সেই Type ব্যবহার করে একটি অবজেক্ট বানালাম
const devProfile: {
    name: string;
    major: string;
    currentFocus: string;
} = {
    name: "Limon",
    major: "Software Engineering",
    currentFocus: "Next.js & Node.js"
};

// ৩. ডিস্ট্রাকচারিং: অবজেক্ট থেকে শুধু নাম এবং ফোকাস বের করে আনছি
const { name : deviceName, ... othersInfo} = devProfile;

console.log(deviceName);         // আউটপুট: Limon
console.log(othersInfo); // আউটপুট: Next.js & Node.js


// // একটি সাধারণ স্ট্রিং অ্যারে
// const techStack = ["HTML", "Next.js", "Node.js", "TypeScript"];

// // ডিস্ট্রাকচারিং: সিরিয়াল অনুযায়ী প্রথম ও দ্বিতীয় আইটেমটি নিচ্ছি
// const [basic,,] = techStack;

// console.log(basic);     // আউটপুট: HTML
// // console.log(framework); // আউটপুট: Next.js

// const st = ["abba", 'amama'];
// const ans : number[] = [st];
// console.log(ans);

// const colors = ["Red"];

// // অ্যারেতে দ্বিতীয় কোনো আইটেম নেই, তাই fallbackColor অটোমেটিক "Blue" নিয়ে নেবে
// const [mainColor, fallbackColor = "yellow"] = colors;

// console.log(mainColor);     // আউটপুট: "Red"
// console.log(fallbackColor); // আউটপুট: "Blue"

const techStack = ["HTML", "Next.js", "Node.js", "TypeScript"];
const st = ["abba", 'amama'];

// '...' দিয়ে দুটি অ্যারের সব আইটেম বের করে একটি সিঙ্গেল অ্যারেতে রাখা হলো
const ans: number[] = [...techStack, ...st]; 

console.log(ans); 
// আউটপুট: ["HTML", "Next.js", "Node.js", "TypeScript", "abba", "amama"]


const priceText = "250.50 Taka";

// স্ট্রিং থেকে শুধু সংখ্যাটি বের করে আনবে
// const actualPrice = parseFloat(priceText); 
console.log(parseFloat(priceText))
// console.log(actualPrice); // আউটপুট: 250.5

function checkAge(age: number) {
    if (age < 0) {
        // বয়স ঋণাত্মক হলে আমরা একটি কাস্টম এরর তৈরি করছি
        throw new Error("বয়স কখনো ঋণাত্মক (negative) হতে পারে না!");
    }
    console.log("আপনার বয়স:", age);
}

checkAge(22); // এটি সুন্দরভাবে কাজ করবে
// checkAge(-5); // এখানে এসে প্রোগ্রাম সাথে সাথে থেমে যাবে এবং আমাদের লেখা লাল এরর মেসেজটি দেখাবে