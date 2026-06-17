import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Task1 from '../Pages/Task1'
import Task2 from '../Pages/Task2'
import Task3 from '../Pages/Task3'
import Task4 from '../Pages/Task4'
import Task5 from '../Pages/Task5'

const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Task1/>}/>
            <Route path="/task2" element={<Task2/>}/>
            <Route path="/task3" element={<Task3/>}/>
            <Route path="/task4" element={<Task4/>}/>
            <Route path="/task5" element={<Task5/>}/>
        </Routes>
  )
}

export default AppRoutes