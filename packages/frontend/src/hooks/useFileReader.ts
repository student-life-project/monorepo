import { useCallback } from 'react';

interface IUseReadFile {
  readFile: (file: File) => Promise<string | ArrayBuffer>;
}

function useFileReader(): IUseReadFile {
  const readFile = useCallback((file: File) => {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result);
        } else {
          reject(Error('Failed converting to base64'));
        }
      };
    });
  }, []);

  return {
    readFile,
  };
}

export default useFileReader;
