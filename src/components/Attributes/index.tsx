import tw from "twin.macro";

const AttributesContainer = tw.div`w-full flex flex-row flex-wrap justify-center items-center`;
const AttributeItem = tw.div`w-full lg:w-1/4 text-center rounded-lg p-2 m-2 bg-[#4bffa5]`;
const AttributeTitle = tw.div`text-sm text-white font-bold mb-2 bg-black rounded-md px-8`;
const AttributeContent = tw.div`text-xs text-gray-900 font-normal`;

interface AttributeListItemProps {
  title: string;
  description?: string;
}

const AttributeListItem = ({ title, description }: AttributeListItemProps) => (
  <AttributeItem>
    <AttributeTitle>{title}</AttributeTitle>
    {
      description && <AttributeContent>{description}</AttributeContent>
    }
  </AttributeItem>
);

interface AttributeListProps {
  attributes: AttributeListItemProps[];
}

export const AttributeList = ({ attributes }: AttributeListProps) => (
    <AttributesContainer>
      {
        attributes.map((attribute, index) => <AttributeListItem
          key={index}
          title={attribute.title} description={attribute.description}
        />)
      }
  </AttributesContainer>
);
