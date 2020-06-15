import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';
import { Entry, Asset } from 'contentful';

interface BoardMemberStore {
  loading: boolean;
  members: {
    name: string;
    image: string;
    role: string;
  }[];
}

export const useBoardMembers = (): BoardMemberStore => {
  const [boardMembers, setBoardMembers] = useState<BoardMemberStore>({
    loading: true,
    members: [],
  });

  useEffect(() => {
    const query = {
      content_type: 'person',
      'fields.role.sys.contentType.sys.id': 'roles',
      'fields.role.fields.isBoardMember': true,
    };

    type ExpectedOutput = {
      name: string;
      image: Asset;
      role: Entry<{ role: string; priority: number }>;
    };

    CONTENTFUL_CLIENT.getEntries<ExpectedOutput>(query)
      .then((response) => {
        const members = response.items
          .map((item) => {
            return {
              name: item.fields.name,
              role: item.fields.role.fields.role,
              priority: item.fields.role.fields.priority,
              image: item.fields.image.fields.file.url,
            };
          })
          .sort(({ priority: a }, { priority: b }) => a - b);

        setBoardMembers({
          loading: false,
          members,
        });
      });
  }, []);
  return boardMembers;
};
