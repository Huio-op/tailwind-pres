// eslint-disable-next-line react/prop-types
export default function Code({ content }) {
  return (
    <code className={`dark:bg-secondary inline rounded-lg bg-react-grey-light px-1 py-0.5 text-left`}>{content}</code>
  );
}
