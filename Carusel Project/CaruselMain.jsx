import React, { useState } from 'react'
import Change from './Change'
import rasm from "./img/user2.png"
import user2 from "./img/user3.png"

const CaruselMain = () => {
  const [img, setImg] = useState(rasm)
  const [title, setTitle] = useState("Susan Smith")
  const [job, setJob] = useState("Web Developer")
  const [paragraph, setParagraph] = useState("I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry")

    function dataChange (){
        if(title == "Susan Smith"){
            setTitle("Bill Gates")
            setJob("BOSS")
            setParagraph("Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.")
        }
        else if(title == "Bill Gates"){
            setTitle("Thomas Shelby")
            setJob("Movie Professor")
            setParagraph("Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.")
        }
        else if(title == "Thomas Shelby"){
            setTitle("Abduqodir Siddiqov")
            setJob("Ximoyachi")
            setParagraph("Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag. Hi there my name is hello world there is nothing")
        }
        else if (title == "Abduqodir Siddiqov"){
            setTitle("Susan Smith")
            setJob("Web Developer")
            setParagraph("I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry")
        }
    }
    // function (){
    //     if(title == "Susan Smith"){
    //         setJob("Web Developer")
    //     }
    //     else if(title == "Bill Gates"){
    //         setJob("BOSS")
    //     }
    //     else if(title == "Thomas Shelby"){
    //         setJob("Movie Professor")
    //     }
    //     else if (title == "Abduqodir Xusanov"){
    //         setJob("Ximoyachi")
    //     }
    // }

  return (
    <>
        <center>
            <h1 className='text-6xl font-semibold mt-10'>Our <span className='py-2 bor'>Rev</span>iews</h1>
        </center>
        <Change img = {img} title = {title} job = {job} paragraph = {paragraph} dataChange = {dataChange}/>
    </>
  )
}

export default CaruselMain