import React,{useState,useCallback,useMemo,ImageCapture} from "react";
import Webcam from "react-webcam";
import Bill from "../Bill";

const Sales = () => {


  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const onCapture = (imageData) => {
   
    setImgSrc(imageData.webP);
   
    setImgFile(imageData.file);
   
  };
  
  const onError = useCallback((error) => { console.log(error) }, []);
  

  const config = useMemo(() => ({ video: true }), []);

  const formData = new FormData();
  formData.append("file", imgFile);


  return (
    <>
    <Bill />
     <h1>Sales</h1>
     <Webcam />
     <button>Take a Photo</button>

     {/* <ImageCapture
        onCapture={onCapture}
        onError={onError}
        width={300}
        userMediaConfig={config}
      />
      {imgSrc &&
        <div>
          <div>Captured Image:</div>
          <img src={imgSrc} alt="captured-img" />
        </div>
      } */}
    </>
  );
};

export default Sales;


