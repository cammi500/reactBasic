import { Fragment,useState } from "react";
import "./style.css";


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
//in react input lartime usestate thone dom update
function App(){
  const[showForm ,setShowForm] = useState(false);
  const [facts,setFacts]=useState(initialFacts);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <NewFactForm setFacts={setFacts}/>: null }
      <main className="main">
        <CategoryFilter/>
        <FactList facts={facts}/>
      </main>
    </>
  );
}

function Header({showForm,setShowForm}) {
  const appTitle="React Project";
  return (
    <header className="header">
        <div className="logo">
          <img src="logo.png" alt="My Website Logo" weight="68 " height="68"/>
          <h1>{appTitle}</h1>
        </div>
          <button className="btn btn-large btn-open"
          onClick={() => setShowForm((show) => !show)}>
             {showForm?"close":"Share a face"}
            </button>
      </header>
     
  );
}
// function Counter(){
//   // const [count, setCount] = useState(0);
//    const [count,setCount]= useState(10);
//   return (
//   <div>
//     <span style={{fontSize: "40px" }}>{count}</span>
//     <button className="btn btn-large" 
  
//     </button>
//   </div>
//   );
// }


function NewFactForm({setFacts}){
 const[text,setText] =useState("");
 const[source,setSource] =useState("");
 const[category,setCategory] =useState("");

 const textLength =text.length;

 function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
console.log("http://example.com: "+isValidHttpUrl("https://example.com"));
console.log("example.com: "+isValidHttpUrl("example.com"));

function handleSubmit(e){
  // browser
 e.preventDefault();
//  console.log(text,source,category);
 if(text&&isValidHttpUrl(source)&&category&& textLength<=200){

 const newFact= {
  id: Math.round(Math.round()*100000),
      text,
      source,
      category,
    votesInteresting: 0,
    votesMindblowing: 0,
    votesFalse: 0,
    createdIn: new Date().getFullYear(),
 };
 setFacts((currentFacts)=>[newFact,...currentFacts]);
 setText("")
 setSource("")
 setCategory("")
}

//
}


  return (<form  className="fact-form " onSubmit={handleSubmit}>
     <input type="text" placeholder="Share A Fact with the Words...."
     value={text}
     onChange={(e)=> setText(e.target.value)} />
        <span className="spanner">{200- textLength}</span>
        <input type="text" placeholder="Share A Fact with the Words"
        value={source}
        onChange={(e)=> setSource(e.target.value)}
        />
        <select name="" id="" 
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
        >
            <option value="">Choose </option>
            {CATEGORIES.map((cat)=>(
                <option value={cat.name} >{cat.name.toUpperCase()}</option>
            ))}
       
            <option value="science">Science </option>
            <option value="finance">Finance</option>
        </select>
        <button className="btn btn-large">post</button>
  </form>)
}
function CategoryFilter() {
  return (<aside>
    <ul>
    <li className="category"> <button className="btn btn-all-catrgory" >All</button></li>
    {CATEGORIES.map((cat)=>(
      <li key={cat.name} className="category">
        <button className="btn btn-catrgory" style= {{backgroundColor: cat.color}}>{cat.name}</button></li>
    ))}
    </ul>
  </aside>)
}

function FactList({ facts }) {//parent

  return (
    <section>
      <ul className="fact-list">
      {facts.map((fact) => (
      <Fact key={fact.id} fact= {fact} test="25"/>//jsx 
     ) )}
      </ul>
        <p>There are {facts.length} facts </p>
    </section>
  );
}
// props dataoneplace to one placetransfer
function Fact(props) {//child

  const {fact} = props;
  return <li  className="fact" >
  <p >
     {fact.text}
      <a className="source" href={fact.source} target="_blank"> (source)</a>
  </p>
  <span className="tag" style={{ backgroundColor:CATEGORIES.find(
    (cat)=> cat.name === fact.category ).color,
    }}>
    {fact.category}
  </span>
  <div className="vote-btn">
      <button>👍 {fact.votesInteresting} </button>
      <button>🤯  {fact.votesMindblowing}</button>
      <button>⛔️ {fact.votesFalse}</button>
  </div>
</li>
}
export default App;
