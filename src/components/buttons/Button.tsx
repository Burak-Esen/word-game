interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  exp: string
}

export const Button: React.FC<Props> = (props: Props) => {
  return (
    <div>Button</div>
  );
};
