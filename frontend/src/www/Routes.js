
import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import  HomePage from './pages/HomePage';
import  StudentPage from './pages/StudentPage'

export const Rotas = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to ="/students" />}/>
                <Route path="/students" element={<HomePage />}/>
                <Route path="/students/:studentID" element={<StudentPage />}/>
            </Routes> 
       </BrowserRouter> 
    )
}