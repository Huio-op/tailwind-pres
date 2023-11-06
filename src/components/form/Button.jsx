// eslint-disable-next-line react/prop-types
export default function Button({ onClick, children, className = '', textOnly = false }) {
  return (
    <div
      className={`${className} ${
        textOnly ? 'xs:px-3 px-1.5 py-1.5 sm:px-4' : ''
      } hover: flex cursor-pointer items-center justify-center rounded-full hover:bg-black/5 active:scale-95 dark:hover:bg-dark-text/5`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
