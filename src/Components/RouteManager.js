import React, { useEffect, useState } from 'react';
import LoginPage from './LoginPage';
import SceneManager from './SceneManager';


export default function RouteManager() {

  const [isLogin, setIsLogin] = useState(false);
  const [isSceneManager, setSceneManager] = useState(true);

  const [formData, setFormData] = useState({});



  useEffect(() => {
    console.log("Form Data", formData)
  }, [formData])


  return (
    <>

      {isLogin && <LoginPage setIsLogin={setIsLogin} setSceneManager={setSceneManager} setFormData={setFormData} />}

      {isSceneManager && <SceneManager formData={formData} />}

    </>
  )
}
