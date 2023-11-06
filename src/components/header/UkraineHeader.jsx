export default function UkraineHeader() {
  return (
    <div
      className={`hidden h-10 w-10 w-full flex-col items-center justify-center gap-1 bg-gray-100 py-2 text-base dark:bg-gray-700 sm:flex-row sm:py-0 md:text-lg lg:flex`}
    >
      <div className={`hidden sm:block`}>Support Ukraine 🇺🇦</div>
      <a
        className={`text-light-link dark:text-dark-link hover:underline`}
        href="https://opensource.fb.com/support-ukraine"
      >
        Help Provide Humanitarian Aid to Ukraine.
      </a>
    </div>
  );
}
