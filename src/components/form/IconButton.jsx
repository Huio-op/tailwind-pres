import Button from '~/components/form/Button.jsx';

export default function IconButton({ onClick, children }) {
  return (
    <Button onClick={onClick} className={`h-12 w-12`}>
      {children}
    </Button>
  );
}
