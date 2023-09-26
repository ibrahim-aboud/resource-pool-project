import Image from 'next/image'
import NavBar from '../components/NavBar.js'
import '../styles/globals.css'


export default function Home() {
  var repeat = [1,2,3,4,5,6]
  return (
    <main>
      <NavBar/>
      <div className='bigContainer'>
        <div className='fullImage'>
          {[1,2].map(()=> (
            <div className='imageSeries'>
              {repeat.map(() => (
                <div>
                  <Image
                    src="/assets/patternImage.jpg" // Path to your image in the 'public' directory
                    alt="My Image"
                    width={300} // Desired width of the image
                    height={300} // Desired height of the image
                  />
                </div>

              ))}
            </div>
          ))}
        </div>
        <p>Looking for something usefull ?</p>
        <button>Let's go !</button>
        <p>Find and Share resources that are actually good, for all domains</p>
      </div>



    </main>
  )
}
