import { useCallback, useState } from 'react'
import {FileWithPath, useDropzone } from 'react-dropzone'
import { Button } from '../ui/button'




type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
}

const FileUploader = ({fieldChange, mediaUrl} : FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles:FileWithPath[])  => {
    // Do something with the files
    setFiles(acceptedFiles);
    fieldChange(acceptedFiles); 
    setFileUrl(URL.createObjectURL(acceptedFiles[0]));
  }, [files])

  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg', '.svg']
    }
  })



  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
      <input {...getInputProps()} className='cursor-pointer' />
      {
        fileUrl ? (
          <>
          <div className='flex flex-1 justify-center w-full p-5 lg:10 '>
            <img
            src={fileUrl}
            alt='image'
            className='file_uploader-img'
            />
           </div>
            <p className='file_uploader-label'>Click or drag photo to replace</p>
           </>
        ) : (
          <div className='file_uploader-box'>
            <img
              src='/assets/icons/file-upload.svg'
              width={80}
              height={70}
              alt='file-upload'
            />
            <h3 className=' base-medium text-light-4 mb-2 mt-6'>Drag photos here</h3>
            <p className='text-light-4 samll-regular mb-6'>PNG, JPG, SVG</p>

            <Button className='shad-button_dark_4'>
              Select to upload
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default FileUploader;