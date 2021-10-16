// import React from "react";

// const Collection = () => {
//   const [radio, setRadio] = React.useState();
//   const handleChange = e => {
//     const target = e.target;
//     if (target.checked) {
//       setRadio(target.value);
     
//     }
//   };

//   return (
   
//       <div>
//         <label>
//           <input  type="radio" value="yes" checked={radio == "yes"} onChange={handleChange} />
//           yes
//         </label>
//         <label>
//           <input type="radio" value="no"  checked={radio == "no"}  onChange={handleChange} />
//           no
//         </label>
//         { console.log(radio)}
//       </div>
      
   
//   );
// };

// export default Collection;

// import React,{useState} from "react";

// function Collection() {
//   const [file, setFile] = useState("");
//   function handleUpload(event) {
//     setFile(event.target.files[0]);
//   }
//   return (
//     <div >
//       <input type="file" onChange={handleUpload}  />
//        {/* <p>Filename: {file.name}</p>
//       <p>File type: {file.type}</p>
//       <p>File size: {file.size} bytes</p> */}
//       {file && <ImageThumb image={file} />}
      
//     </div>
//   );
// }
// const ImageThumb = ({ image }) => {
//   return <img src={URL.createObjectURL(image)} alt={image.name} className="w-64 h-48" />;
// };


import React, { useState } from "react";
import Bill from "../Bill";

  const Collection = () => {
  const [picture, setPicture] = useState(null);

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]) );
};
  return (
    
               <div> 
                 <Bill />
                 <input  type="file" onChange={onChangePicture}/>
                <img   src={picture && picture} />      
                </div>     
  );
}


export default Collection;