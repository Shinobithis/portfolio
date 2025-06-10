import DsSwitch from './components/DsSwitch'

function App() {
  return (
    <div>
      <nav className="w-full h-16 px-8 flex items-center bg-green-600 text-white justify-between">
        <p className="text-lg font-bold">Yassir Chakour</p>
        <div className="flex gap-30">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Me</a>
          <a href="#" className="hover:underline">Projects</a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-white text-green-600 px-4 py-1 rounded hover:bg-green-100 transition cursor-pointer mr-7">
            Contact Me
          </button>
        </div>
      </nav>

      <div className="fixed top-3 right-2 z-50">
        <DsSwitch />
      </div>
    </div>
  )
}

export default App
