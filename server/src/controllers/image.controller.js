import axios from 'axios'
import FormData from 'form-data'
import fs from 'fs'

export const bgRemoverImage = async (req, res) => {
    try {
        if (!req.file || !req.file.path) {
            return res.status(400).json({ success: false, message: 'No file uploaded.' });
        }
        if (!process.env.CLIPDROP_API_KEY) {
            return res.status(500).json({ success: false, message: 'API key not set.' });
        }

        const imagePath = req.file.path;
        const imageFile = fs.createReadStream(imagePath);

        const formData = new FormData();
        formData.append('image_file', imageFile, {
            filename: req.file.originalname,
            contentType: req.file.mimetype,
        });

        const response = await axios.post(
            'https://clipdrop-api.co/remove-background/v1',
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    'x-api-key': process.env.CLIPDROP_API_KEY,
                },
                responseType: 'arraybuffer',
                validateStatus: () => true, // allow handling non-2xx responses
            }
        );

           // ✅ Handle error response properly
    if (
      response.headers["content-type"] &&
      response.headers["content-type"].includes("application/json")
    ) {
      const errorJson = JSON.parse(response.data.toString("utf8"));
      console.error("ClipDrop API error:", errorJson);
      return res.status(400).json({
        success: false,
        message: "ClipDrop API error",
        details: errorJson,
      });
    }

        const base64Image = Buffer.from(response.data, 'binary').toString('base64');
        const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;
        res.json({
            success: true,
            resultImage,
        });
    } catch (error) {
        if (error.response) {
            // Log ClipDrop API error details
            console.log('ClipDrop API error:', error.response.data);
            return res.status(error.response.status).json({
                success: false,
                message: 'ClipDrop API error',
                details: error.response.data,
            });
        }
        console.log(error);
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}





       

     

     

