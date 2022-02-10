import '../styles/globals.css'
import { HomeContext } from '../context/HomeContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [modalHome, setModalHome] = useState(false)
  const [rekapitulasi, setRekapitulasi] = useState('')
  const [camera, setCamera] = useState('')
  const home = {
    data : {
      showModalHome : modalHome,
      rekap : rekapitulasi,
      camera : camera
    },
    setShowModalHome : setModalHome,
    setRekap : setRekapitulasi,
    setCamera : setCamera
  }
  
  const Layout = Component.layout || (({children}) => <>{children}</>)
  return (
    <Layout>
      <HomeContext.Provider value={home}>
        <Component {...pageProps} />
      </HomeContext.Provider>
    </Layout>
  )
}

export default MyApp
