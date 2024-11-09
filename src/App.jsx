import React , {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import Hero from './Components/Hero/Hero'
import image1 from './assets/rolls-images/b3.jpg'
import image2 from './assets/rolls-images/b1.jpg'
import image3 from './assets/rolls-images/e2.jpg'
import image4 from './assets/rolls-images/e3.jpg'
import image5 from './assets/rolls-images/s2.jpg'
import image6 from './assets/rolls-images/s3.jpg'


const App = () => {
  let heroData = [
    {text1: "BLACK BADGE" , text2: "Ghost || series"},
    {text1: "GHOST " , text2: "EKLEIPSIS"},
    {text1: "PHANTOM " , text2: "scintilla"}
  ]
  let heroimages = [
    {img1: image1 , txt1: "The Rolls-Royce Black Badge series represents a daring and powerful iteration of the brand’s luxury cars" , img2: image2 , txt2: " Launched with models like the Wraith, Dawn, and Ghost, the Black Badge series elevates the classic Rolls-Royce design with darkened features," },
    {img1: image3 , txt1: "the EKLEIPSIS model reimagines the concept of modern luxury with a design focused on the symbolism of eclipses. " , img2: image4 , txt2: "It’s likely that Rolls-Royce will incorporate exclusive interior touches and high-grade technology, designed to provide a cocoon-like experience for its occupants."},
    {img1: image5 , text1: "The Phantom Scintilla was introduced at the Monterey Car Week 2024 and is limited to only 10 models." , img2: image6 , txt2: "This model draws inspiration from ancient Greek sculptures, especially the Nike of Samothrace."}
  ]
  const [heroCount , setheroCount] = useState(0)
  const [playstatus , setPlaystatus] = useState(false)
  return (
    <div>
      <Navbar/>
      <Background playstatus = {playstatus} heroCount={heroCount} heroData={heroData[heroCount]} setheroCount={setheroCount} setPlaystatus={setPlaystatus}/>
      <Hero  heroimages={heroimages[heroCount]}/>
    </div>
  )
}

export default App