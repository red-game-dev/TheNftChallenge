import { FC } from "react";

import tw from "twin.macro";

const ErrorContainer = tw.div`bg-red-50 border-l-8 border-red-700 mb-2`;
const ErrorCotent = tw.div`flex items-center p-2`;
const Icon = tw.span`ml-2 text-red-700`;
const Paragraph = tw.p`px-6 py-4 text-red-700 font-semibold text-lg`;

interface ErrorDetailProps {
  text: string;
}

export const ErrorDetail: FC<ErrorDetailProps> = ({ text }: ErrorDetailProps) => (
  <ErrorContainer>
      <ErrorCotent>
        <Icon className="fa-duotone fa-circle-xmark" />
        <Paragraph>{text}</Paragraph>
      </ErrorCotent>
  </ErrorContainer>
);
