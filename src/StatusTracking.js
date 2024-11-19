import React, { useState } from 'react';
import axios from 'axios';

function StatusTracking() {
  const [transactionId, setTransactionId] = useState('');
  const [fileContent, setFileContent] = useState(null);

  const handleCheckStatus = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/dataretrieval/getProcessedFile?transactionId=${transactionId}`
    );
    setFileContent(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        placeholder="Enter Transaction ID"
      />
      <button onClick={handleCheckStatus}>Check Status</button>
      {fileContent && <pre>{JSON.stringify(fileContent, null, 2)}</pre>}
    </div>
  );
}

export default StatusTracking;
