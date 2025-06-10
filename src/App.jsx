import DsSwitch from './components/DsSwitch'
import Photo from './components/Photo'
import Icons from './components/Icons'

function App() {
  return (
    <div className="bg-white min-h-screen relative">
      {/* NAVBAR */}
      <nav className="w-full h-16 px-8 flex items-center bg-green-600 text-white justify-between">
        <p className="text-lg font-bold">Yassir Chakour</p>
        <div className="flex gap-8">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Me</a>
          <a href="#" className="hover:underline">Projects</a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-white text-green-600 px-4 py-1 rounded hover:bg-green-100 transition cursor-pointer">
            Contact Me
          </button>
        </div>
      </nav>

      {/* Dark Mode Switch (Top Right) */}
      <div className="fixed top-3 right-3 z-50">
        <DsSwitch />
      </div>

      {/* HERO SECTION */}
      <div className="flex items-center justify-center mt-24 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-red-700 text-white p-12 rounded-xl shadow-lg w-full max-w-5xl">
          {/* Text */}
          <div className="md:w-3/5 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Yassir Chakour | Full Stack Developer
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Hi, I'm Yassir Chakour, a 20-year-old from Morocco with 3 years of experience in development.
              I'm currently studying for my bachelor's degree and speak four languages fluently. 
              I'm a quick learner, always curious, and passionate about growing both personally and 
              professionally.
            </p>
            <div className="flex flex-row items-center justify-start gap-8 mt-6">
              <button className="px-6 py-3 cursor-pointer border-2 border-white rounded-full hover:bg-white hover:text-red-700 transition-all duration-300 ease-in-out">
                Download CV
              </button>
              <Icons />
            </div>
          </div>
          {/* Photo */}
          <Photo />
        </div>
      </div>
    </div>
  )
}

export default App
