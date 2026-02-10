import SearchBar from "./Components/SearchBar"

function App() {

  function getUser (user){
    console.log(user);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">     
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow">       
        <h1 className="text-3xl font-bold mb-4 text-center">
          AI Resume Analyzer
        </h1>
        <main>
          <SearchBar GetUser={getUser}/>
        </main>
      </div>
    </div>
  )
}

export default App
