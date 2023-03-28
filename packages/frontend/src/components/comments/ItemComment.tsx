import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBullhorn, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

import { TElementId } from '@/types';

import Options from '../common/Options';
import Avatar from '../profile/Avatar';

type TItemComment = {
  comments: any;
  userId: TElementId;
  openUserReport: () => void;
  openModalDelete: (id: TElementId) => void;
  openModalEdit: (id: TElementId) => void;
};

// TODO: Las opciones de editar y eliminar solo son para el owner.
// TODO: En caso contrario se le puede mostrar la opción de reportar usuario.
const ItemComment: FC<TItemComment> = ({
  userId,
  comments,
  openUserReport,
  openModalDelete,
  openModalEdit,
}) => (
  <>
    {comments?.map((item) => (
      <section key={item.id} css={xw`my-8`}>
        <div css={xw`w-full flex items-center`}>
          <div css={xw`w-full flex items-center gap-4`}>
            <Avatar alt={item.name} url={item.userImage} small />

            <p>{item.name}</p>
          </div>

          <div css={xw`relative`}>
            <Options>
              {userId !== item.userId && (
                <button type="button" onClick={openUserReport}>
                  <FontAwesomeIcon
                    icon={faBullhorn as IconProp}
                    height="1.2rem"
                  />
                  <span css={xw`ml-2`}>Reportar</span>
                </button>
              )}

              {userId === item.userId && (
                <button type="button" onClick={() => openModalEdit(item.id)}>
                  <FontAwesomeIcon icon={faPen as IconProp} height="1.2rem" />
                  <span css={xw`ml-2`}>Editar</span>
                </button>
              )}

              {userId === item.userId && (
                <button type="button" onClick={() => openModalDelete(item.id)}>
                  <FontAwesomeIcon icon={faTrash as IconProp} height="1.2rem" />
                  <span css={xw`ml-2`}>Eliminar</span>
                </button>
              )}
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
