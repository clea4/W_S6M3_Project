import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
axios.get(URL)
.then(res => {
  console.log(res.data)
  setApod(res.data)
})
 .catch(err => {
   console.log(err.message)
  })
  }
  // fetchPhoto()
   setApod({
       "date": "2024-08-05",
        "explanation": "That's no moon. On the ground, that's the Lars Homestead in Tunisia. And that's not just any galaxy. That's the central band of our own Milky Way galaxy. Last, that's not just any meteor. It is a bright fireball likely from last year's Perseids meteor shower. The featured image composite combines consecutive exposures taken by the same camera from the same location.  This year's Perseids peak during the coming weekend is expected to show the most meteors after the first quarter moon sets, near m...",
        "hdurl": "https://apod.nasa.gov/apod/image/2408/LarsMilkyWay_Larnaout_2048.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Milky Way Over Tunisia",
        "url": "https://apod.nasa.gov/apod/image/2408/LarsMilkyWay_Larnaout_960.jpg"
       })
  }, [])

  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
   <Card
   title={apod.title}
   text={apod.explanation}
   imageURL={apod.url}
   date={apod.date}
   />
   </section>
  )
}




export default App;
