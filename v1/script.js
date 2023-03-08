const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

async function lodeFact(){
  const res = await fetch("https://qgztzgvwwmijxiwwrvqg.supabase.co/rest/v1/fact" , {
  headers: {
    apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnenR6Z3Z3d21panhpd3dydnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc0NjYsImV4cCI6MTk5Mjk5MzQ2Nn0.aCIaOJl26mDNO-C0tX2BPQg6bg-a46rvxj3Yzz_dsEs",
    authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnenR6Z3Z3d21panhpd3dydnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc0NjYsImV4cCI6MTk5Mjk5MzQ2Nn0.aCIaOJl26mDNO-C0tX2BPQg6bg-a46rvxj3Yzz_dsEs",
  },
}
);
const dataJSON = await res.json();

//const filterData = dataJSON.filter((el)=> el.category ==="society");
createFactElement(dataJSON);

console.log(dataJSON);
}
lodeFact();

//  1 date
 
 const btnOpen = document.querySelector('.btn-open');
 const form =document.querySelector(".fact-form");

 // 3date // 5 mar 2023
 
 const factList =document.querySelector(".fact-list");

 factList.innerHTML="";

 //in function is dynamtic
 function createFactElement(dataArray) {
  const factHTML= dataArray
  .map (
    (data) => `
        <li class="fact">
              <p >
                ${data.text}
                <a class="source" href="${data.source}" target="_blank">(Source)</a>
            </p>
            <span class="tag" style="background-color:${CATEGORIES.find((cat) => cat.name === data.category).color}>${data.category}</span>
            <div class="vote-btn">
            <div class="vote-btn">
                <button>👍 <b>24</b> </button>
                <button>🤯 <b>9</b> </button>
                <button>⛔️ <b>9</b> </button>
            </div>
        </li>
 `);

factList.insertAdjacentHTML("afterbegin", factHTML.join(""));
};


 btnOpen.addEventListener("click", function (){
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnOpen.textContent="Close";
  }else{
    form.classList.add("hidden");
    btnOpen.textContent ="Share A Fact";
  }
});


// //  2 date 
// const text ="Yangon is Big Capital of Myanmar";
// let voteInteresting = 24;
// let voteMindBlowing = 9 ;
// let falseVote = 4;

// let totalUpVote = voteInteresting + voteMindBlowing;
// console.log("Total Up Vote:", totalUpVote);

// const isCorrect = totalUpVote >= falseVote;

// console.log(isCorrect);

// // year
// // function factAge(factYear) {
// //   const age =2023 - factYear;
// //   if (age >0){
// //     return age;

// //   }else {
// //     return "impossible Year";
// //   }
// // }

// const factAge = function (factYear){
//   const age =2023 - factYear;
//   if (age > 0) {
//     return age;
//   }else {
//     return "impossible Year";
//   }
// };

// console.log(factAge(2020));
// console.log(factAge(2025));

// // Es6 error fc
// const age = birthYear =>  2023 - birthYear;
// console.log(age (2003));



// // ternary operator
// // const voteInteresting = 24;
// // const voteMindBlowing = 9 ;
// const voteFalse = 4;
// const totalVote = voteInteresting + voteMindBlowing;

// const message = totalVote > voteFalse ? "The fact is true" : "Might be false ,check back";
// console.log(message);

// //array
// const arr =[2,3,4,8]

// const allStudent =[1,2,3,4,5,6,7];
// console.log(allStudent.length);
// const allarr =[...arr,...allStudent];
// console.log(allarr);

// const factData =[
//   "React is being developed by Meta (formerly facebook)",
//   "https://opensource.fb.com/",
//   "Technology",
//   24,
//   9,
//   4,
// ];
// const [texte,source,category] = factData;
// console.log("texte");
// console.log("source");
// console.log("category");


// // object
// const factObj = {
//   texture:"lori is my friend",
//   category:"socity",
//   creation :2015,
//   incorrect:true,
// }
//  //console.log(factObj.text);//obj
// //console.log(factObj["text"]);//arr

// const {texture,incorrect} =factObj;
// console.log(texture);
// console.log(incorrect);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const colorValue = CATEGORIES.map((obj) => obj.color);
// console.log(colorValue);


// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];
// const factAges =initialFacts.map((el)=> 2023 - el.createdIn);
// console.log(factAges);

// array loop filter
// const newArr = [7,3,64,-23,11].filter((el) => el >10);
//  console.log(newArr);