import React, { useState } from 'react';
import axios from 'axios';

function UploadFile() {
  const [transactionId, setTransactionId] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:5000/api/data/processEdiFile', { ediContent: file });
    setTransactionId(response.data.transactionId);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload File</button>
      {transactionId && <p>Transaction ID: {transactionId}</p>}
    </div>
  );
}

export default UploadFile;
