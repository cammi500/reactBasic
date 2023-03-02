//  1 date
 
 const btnOpen = document.querySelector('.btn-open');
 const form =document.querySelector(".fact-form");
 
 btnOpen.addEventListener("click", function (){
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnOpen.textContent="Close";
  }else{
    form.classList.add("hidden");
    btnOpen.textContent ="Share A Fact";
  }
});

//  2 date 
const text ="Yangon is Big Capital of Myanmar";
let voteInteresting = 24;
let voteMindBlowing = 9 ;
let falseVote = 4;

let totalUpVote = voteInteresting + voteMindBlowing;
console.log("Total Up Vote:", totalUpVote);

const isCorrect = totalUpVote >= falseVote;

console.log(isCorrect);
