import { useState } from 'react'
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600">LoanDoc Pipeline</h1>
      <p>Upload a borrower document to get started.</p>
      
      <input 
        type="file" 
        accept=".pdf"
        onChange={(event) => setSelectedFile(event.target.files[0])}
      />
      
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <p>Size: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
  )
}

export default App