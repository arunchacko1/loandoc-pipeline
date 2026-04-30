import { useState } from 'react'
import { Upload } from 'lucide-react'
import './App.css'

function App() {
  const [selectedFiles, setSelectedFiles] = useState([])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12">
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <h1 className="text-4xl font-bold text-blue-600">LoanDoc Pipeline</h1>
          <p className="text-gray-600">Upload a borrower document to get started.</p>
          
          <label className="block border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50">
            <input 
              type="file" 
              accept=".pdf"
              multiple
              className="hidden"
              onChange={(event) => {
                const newFiles = Array.from(event.target.files)
                setSelectedFiles([...selectedFiles, ...newFiles])
              }}
            />
            <Upload className="w-12 h-12 text-gray-400 mx-auto"/>
            <p className="text-gray-500">Drag PDFs here or click to browse</p>
          </label>
          
          {selectedFiles.length > 0 && (
            <div className="space-y-2">
              {selectedFiles.map((file, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded flex justify-between items-center">
                  <div>
                  <p>{file.name}</p>
                  <p className="text-sm text-gray-500">{file.size} bytes</p>
                  </div>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium"
                   onClick={() => setSelectedFiles(selectedFiles.filter((_, i) => i !== index))}>
                    Remove
                  </button>
                </div>
          ))}
  </div>
)}
        </div>
      </div>
    </div>
  )
}

export default App