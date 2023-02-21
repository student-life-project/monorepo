/* eslint-disable simple-import-sort/imports */
import xw from 'xwind';
import { FC, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';

import Button from './Button';

type TWebcamImage = {
  img: string | null;
  setImg: (img: any) => void;
};

const WebcamImage: FC<TWebcamImage> = ({ img, setImg }) => {
  const webcamRef = useRef<any>(null);

  // TODO: voltear camara para cel.
  // TODO: no activar las camaras hasta que le den clic en icon
  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: 'user',
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImg(imageSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  return (
    <div css={xw`flex flex-col gap-5`}>
      {img === null ? (
        <>
          <Webcam
            mirrored
            width={300}
            height={300}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />

          <Button type="button" BPrimary onClick={capture}>
            Capturar foto
          </Button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />

          <Button type="button" FDanger onClick={() => setImg(null)}>
            Volver a tomar
          </Button>
        </>
      )}
    </div>
  );
};

export default WebcamImage;
