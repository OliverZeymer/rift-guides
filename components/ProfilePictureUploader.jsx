import { useContext, useState } from "react";
import TokenContext from "@contexts/TokenContext";
import axios from "axios";

export default function ProfilePictureForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { token } = useContext(TokenContext);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setSelectedFile(base64);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:3000/api/user/uploadavatar", {
      image: selectedFile,
      email: token.user.email,
    });
    console.log(res);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col">
      <label htmlFor="file" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Upload a profile picture
      </label>
      <input
        type="file"
        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
        onChange={handleFileChange}
      />
      {selectedFile && <img src={selectedFile} alt="Selected" height="200px" width="200px" />}
      <button type="submit">Submit</button>
    </form>
  );
}
