import { AppContext } from "./AppContex";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

const AppProvider = ({children}) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [resultImg, setResultImg] = useState(null);
     // Load saved values from localStorage (if available)
//   const [image, setImage] = useState(() => {
//     const saved = localStorage.getItem("image");
//     return saved ? JSON.parse(saved) : null;
//   });

//   const [resultImg, setResultImg] = useState(() => {
//     return localStorage.getItem("resultImg") || null;
//   });

//   // Persist image + resultImg when they change
//   useEffect(() => {
//     if (image) {
//       localStorage.setItem("image", JSON.stringify(image));
//     }
//   }, [image]);

//   useEffect(() => {
//     if (resultImg) {
//       localStorage.setItem("resultImg", resultImg);
//     }
//   }, [resultImg]);

    const bgRemover = async (imageFile) => {
        try {
            console.log(imageFile)
            setImage(imageFile);

            const formData = new FormData();
            formData.append('image', imageFile);

            const { data } = await axios.post('http://localhost:8080/api/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('API response:', data);

            if (data && data.success && data.resultImage) {
                setResultImg(data.resultImage);
                navigate('/result');
            } else {
                setResultImg(null);
                console.error('No resultImage in response:', data);
            }
        } catch (error) {
            setResultImg(null);
            console.log(error);
        }
    }
    const value = {
        bgRemover,
        image, 
        setImage,
        resultImg, 
        setResultImg
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;  