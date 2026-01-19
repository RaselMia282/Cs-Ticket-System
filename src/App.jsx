
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar'
import Layout from './Components/Layout/Layout'
import { Suspense, useState } from 'react';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import Footer from './Components/Footer/Footer';


// fetch data
const fetchData = fetch ("Data.json").then(res=>res.json());


function App() {
  const [clicked,setClicked] =useState([]);
 const handleClick =(data)=>{
    const isExist = clicked.find(c=>c.id ===data.id) ;
   if(!isExist){
    setClicked([...clicked,data]);
    
   } else{
    alert('card already added')
   }

   
 }
   const [progress,setProgress] =useState([]);
   const handleProgress =(data)=>{
    const remaining = clicked.filter(b=>b.id!==data.id)
    setClicked(remaining)
    setProgress([...progress,data])

   }

  return (
    <>
      <Navbar></Navbar>
      <Header progress={progress} clicked={clicked}></Header>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <Layout handleProgress={handleProgress} clicked={clicked} handleClick={handleClick} fetchData={fetchData}></Layout>
      </Suspense>
       <Footer></Footer>
    </>
   
  )
}

export default App
