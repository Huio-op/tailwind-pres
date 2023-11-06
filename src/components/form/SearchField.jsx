import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchField() {
  return (
    <button
      className={
        'inline-flex h-10 flex-grow items-center rounded-xl bg-react-grey-light p-1 pl-4 text-react-grey-normal'
      }
    >
      <MagnifyingGlassIcon width={15} className={'me-3'} />
      Search
      <span className={'me-1 ms-auto'}>
        <kbd
          className={
            'dark:bg-dark text-gray-30 me-1 inline-flex h-5 w-10 items-center justify-center rounded-md border border-transparent bg-white p-0 text-center align-middle text-xs'
          }
        >
          Ctrl
        </kbd>
        <kbd
          className={
            'dark:bg-dark text-gray-30 me-1 inline-flex h-5 w-10 items-center justify-center rounded-md border border-transparent bg-white p-0 text-center align-middle text-xs'
          }
        >
          K
        </kbd>
      </span>
    </button>
  );
}
