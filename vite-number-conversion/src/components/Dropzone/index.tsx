import React, {useCallback, useState} from 'react';
import { FiUpload } from 'react-icons/fi';
import {useDropzone} from 'react-dropzone';
import {DropzoneDiv} from './styles'
interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
      
    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);

    onFileUploaded(file);
  }, [onFileUploaded]);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <DropzoneDiv {...getRootProps()} onChange={() => {}}>
      <input {...getInputProps()} accept="image/*" name='image'/>
      { selectedFileUrl
        ? <img src={selectedFileUrl} alt="Imagem do Estabelecimento" />
        : (
          <p>
            <FiUpload />
            Imagem do Equipamento
          </p>
        )
      }
    </DropzoneDiv>
  )
}

export default Dropzone;
