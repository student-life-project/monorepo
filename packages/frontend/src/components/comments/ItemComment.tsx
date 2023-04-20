import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBullhorn, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

import { TElementId } from '@/types';
import { formatDate } from '@/utils/managerDate';

import Options from '../common/Options';
import Avatar from '../profile/Avatar';

type TItemComment = {
  comments: any;
  userId: TElementId;
  openUserReport: () => void;
  openModalEdit: (id: TElementId) => void;
  openModalDelete: (id: TElementId) => void;
};

const ItemComment: FC<TItemComment> = ({
  userId,
  comments,
  openUserReport,
  openModalDelete,
  openModalEdit,
}) => (
  <>
    {comments?.map((item) => (
      <section key={item._id} css={xw`my-8`}>
        <div css={xw`w-full flex items-center`}>
          <div css={xw`w-full flex items-center gap-4`}>
            <Avatar
              small
              alt={item.ownerId.firstName}
              url={item.ownerId.picture || '/images/avatar.png'}
            />

            <p>
              {item.ownerId.firstName} {item.ownerId.lastName}
            </p>
          </div>

          <div css={xw`relative`}>
            <Options>
              {userId !== item.ownerId._id && (
                <button type="button" onClick={openUserReport}>
                  <FontAwesomeIcon
                    icon={faBullhorn as IconProp}
                    height="1.2rem"
                  />
                  <span css={xw`ml-2`}>Reportar</span>
                </button>
              )}

              {userId === item.ownerId._id && (
                <button type="button" onClick={() => openModalEdit(item)}>
                  <FontAwesomeIcon icon={faPen as IconProp} height="1.2rem" />
                  <span css={xw`ml-2`}>Editar</span>
                </button>
              )}

              {userId === item.ownerId._id && (
                <button type="button" onClick={() => openModalDelete(item._id)}>
                  <FontAwesomeIcon icon={faTrash as IconProp} height="1.2rem" />
                  <span css={xw`ml-2`}>Eliminar</span>
                </button>
              )}
            </Options>
          </div>
        </div>

        <p css={xw`mt-4 mb-1`}>{item.comment}</p>
        <em css={xw`text-sm`}>
          {item.createdAt && formatDate(item.createdAt)}
        </em>
      </section>
    ))}
  </>
);

export default ItemComment;
