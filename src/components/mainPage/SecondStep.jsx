import Code from '~/components/common/Code.jsx';
import CodeBlock from '~/components/common/CodeBlock.jsx';

export default function SecondStep() {
  return (
    <div
      className={` bg-step dark:bg-step-dark mx-auto mx-auto flex w-full flex-col items-center border-t border-black/10 dark:border-dark-text/10 `}
    >
      <div className={`my-20 flex w-full max-w-4xl flex-col items-center justify-center px-5 lg:px-0 lg:text-center`}>
        <h2 className={`leading-xl mb-7 max-w-3xl text-5xl font-semibold lg:max-w-xl`}>
          Create user interfaces from components
        </h2>
        <span className={`text-secondary dark:text-secondary-dark max-w-3xl text-lg font-normal`}>
          React lets you build user interfaces out of individual pieces called components. Create your own React
          components like &nbsp;
          <Code content={'Thumbnail'} />
          ,&nbsp; <Code content={'LikeButton'} />
          , and &nbsp;
          <Code content={'Video'} />. Then combine them into entire screens, pages, and apps.
        </span>
      </div>

      <CodeBlock />

      <div className={`flex max-w-3xl flex-col items-center justify-center px-5 lg:text-center`}>
        <span className={`text-secondary dark:text-secondary-dark text-lg font-normal`}>
          Whether you work on your own or with thousands of other developers, using React feels the same. It is designed
          to let you seamlessly combine components written by independent people, teams, and organizations.
        </span>
      </div>
    </div>
  );
}
