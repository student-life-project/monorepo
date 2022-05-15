import { faBullhorn, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

import Options from '../common/Options';

type TItemComment = {
  comments: any;
};

const ItemComment: FC<TItemComment> = ({ comments }) => (
  <>
    {comments?.map((item) => (
      <section key={item.id} css={xw`my-8`}>
        <div css={xw`w-full flex items-center`}>
          <div css={xw`w-full flex items-center gap-4`}>
            <img
              alt={item.name}
              src={item.userImage}
              css={xw`w-10 h-10 rounded-full bg-gray-400`}
            />

            <p>{item.name}</p>
          </div>

          <div css={xw`relative`}>
            <Options>
              <button type="button" onClick={() => alert('Repotar')}>
                <FontAwesomeIcon icon={faBullhorn} height="1.2rem" />
                <span css={xw`ml-2`}>Reportar</span>
              </button>

              <button type="button" onClick={() => alert('Editar')}>
                <FontAwesomeIcon icon={faPen} height="1.2rem" />
                <span css={xw`ml-2`}>Editar</span>
              </button>

              <button type="button" onClick={() => alert('Eliminar')}>
                <FontAwesomeIcon icon={faTrash} height="1.2rem" />
                <span css={xw`ml-2`}>Eliminar</span>
              </button>
            </Options>
          </div>
        </div>

        <p css={xw`mt-4 mb-1`}>{item.comment}</p>
        <em css={xw`text-sm`}>{item.date}</em>
      </section>
    ))}
  </>
);

export default ItemComment;
