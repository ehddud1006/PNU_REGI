import * as Styled from './Title.styles';

type TitleProps = {
  content: string;
};

const Title = (props: TitleProps) => {
  const { content } = props;

  return (
    <Styled.Root>
      <Styled.Title>{content}</Styled.Title>
    </Styled.Root>
  );
};

export default Title;
