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