/* eslint-disable simple-import-sort/imports */
import xw from 'xwind';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { FC, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';

import Button from './Button';

type TWebcamImage = {
  showCam: boolean;
  img: string | null;
  description: string;
  onShowCam: () => void;
  setImg: (img: any) => void;
  icon: FontAwesomeIconProps['icon'];
};

const WebcamImage: FC<TWebcamImage> = ({
  img,
  icon,
  setImg,
  showCam,
  onShowCam,
  description,
}) => {
  const webcamRef = useRef<any>(null);

  // TODO: voltear camara para cel.
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
      {!showCam ? (
        <div
          css={xw`w-72 sm:w-80 h-80 flex flex-col items-center justify-center gap-5 border border-gray-200 rounded-lg`}
        >
          <FontAwesomeIcon icon={icon} size="6x" />

          <p css={xw`text-sm text-gray-500 text-center`}>{description}</p>

          <Button type="button" BPrimary onClick={onShowCam}>
            Tomar foto
          </Button>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default WebcamImage;
