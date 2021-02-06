import axios from 'axios';

export const uploadFileRequest = async (formData, progressCallback) => {
  var config = {
    headers: { 'content-type': 'multipart/form-data' },
    onUploadProgress: progressCallback,
    validateStatus: (status) => true,
  };
  var response = await axios.post('/api/uploads', formData, config);
  console.log("AxiosResponse: " + JSON.stringify(response));

  return response.data;
};