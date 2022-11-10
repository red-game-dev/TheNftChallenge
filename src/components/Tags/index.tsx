import { FC } from "react";

import tw from "twin.macro";

const TagContainer = tw.div`w-full flex flex-row flex-wrap justify-center items-center`;
const Tag = tw.div`bg-[#4bffa5] inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden`;
const TagContent = tw.span`ml-2 mr-1 leading-relaxed truncate max-w-xs px-1`;

interface TagsListProps {
  tags: string[];
}

export const TagsList: FC<TagsListProps> = ({ tags = [] }: TagsListProps) => (
  <TagContainer>
    {
      tags.map((tag, index) => (
        <Tag key={index}>
          <TagContent>{tag}</TagContent>
        </Tag>
      ))
    }
</TagContainer>
);
