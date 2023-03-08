import "./style.css";


function App(){
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="My Website Logo" weight="68 " height="68"/>
          <h1>React Project</h1>
        </div>
          <button class="btn btn-large btn-open">Share a face</button>
      </header>
      <NewFactForm/>
      <CategoryFilter />
    </>
    
  );
}

function NewFactForm(){
  return <form>Fact Form</form>
}
function CategoryFilter() {
  return <aside>Category Filter</aside>
}

export default App;
