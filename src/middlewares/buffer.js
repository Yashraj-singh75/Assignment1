const buffer = require('./config/Cloudinary');

function uploadbuffer(buffer, folder = "data")
{
    return new Promise((resolve, reject) => 
    { 
        const data = cloudinary.uploader.upload_data
        (
            { 
                folder, resource_type: "image" 
            },

            (err, errorout) => 
            {
                    if(err) return reject(err);
                    resolve(errorout);
            }
        )
        
        data.end(buffer);
    })
}

module.exports = { uploadbuffer };