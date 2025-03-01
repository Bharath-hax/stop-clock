import {useState} from 'react'

const About = () => {
  const [data, setData] = useState(0)
  return (
    <div>
      <p>Count: {data}</p>
      <button onClick={()=>{setData(data+1)}}>Increase</button>
    </div>
  )
}

export default About