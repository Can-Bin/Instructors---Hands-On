import React from 'react'
import Cards from '../components/Cards'
import Sliders from '../components/Sliders'
import datas from "../data/courseData"

const Home = () => {

  return (
    <div>
        <Sliders/>
        <Cards datas={datas}/>
    </div>
  )
}

export default Home