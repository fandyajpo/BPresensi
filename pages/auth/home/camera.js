import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css';
import Header from '../../../component/Header'
// import { Camera } from 'react-cam';
// import { Fragment, useRef } from 'react';
import 'react-cam/lib/lib/style.css'
import { HomeContext } from '../../../context/HomeContext';
import { useContext } from 'react';

const Presensi = () => {
    const home = useContext(HomeContext)

    // const cam = useRef(null)

    const handleTakePhoto = (dataUri) => {
        console.log('take photo');
    } 
    return (
        <div className="w-screen h-screen">
            <Header title={home.data.camera}/>
            <div className="h-full w-full">
                <Camera 
                    onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                    // isFullscreen={true}    
                />
                {/* <Fragment>
                <Camera
                    showFocus={true}
                    front={false}
                    capture={handleTakePhoto}
                    ref={cam}
                    width="80%"
                    height="auto"
                    focusWidth="80%"
                    focusHeight="60%"
                    btnColor="white"
                />
                <button onClick={img => cam.current.handleTakePhoto(img)}>Take image</button>
                </Fragment> */}
            </div>
        </div>
    )
}

export default Presensi