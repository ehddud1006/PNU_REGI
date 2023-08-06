import * as Styled from './Text.styles';

type TextProps = {
  content: string;
  to?: string;
  className?: string;
};

const Text = (props: TextProps) => {
  const { content, className } = props;

  return <Styled.Text className={className}>{content}</Styled.Text>;
};

Text.StrongText = function StrongText(props: TextProps) {
  const { content, className } = props;

  return <Styled.StrongText className={className}>{content}</Styled.StrongText>;
};

Text.RedText = function RedText(props: TextProps) {
  const { content, className } = props;

  return <Styled.RedText className={className}>{content}</Styled.RedText>;
};

Text.BlueText = function BlueText(props: TextProps) {
  const { content, className } = props;

  return <Styled.BlueText className={className}>{content}</Styled.BlueText>;
};

Text.BlueBottomDashText = function BlueBottomDashText(props: TextProps) {
  const { content, to, className } = props;

  if (to === undefined) return null;

  return (
    <Styled.BlueBottomDashText to={to} target='_blank' rel='noreferrer' className={className}>
      {content}
    </Styled.BlueBottomDashText>
  );
};

export default Text;
