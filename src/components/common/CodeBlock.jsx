import { SandpackCodeViewer, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { useEffect, useState } from 'react';
import { useTheme } from '~/hooks/useTheme.jsx';

const CODE = `function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}`;

const CodePreview = ({ isDarkMode }) => {
  return (
    <div
      className={`shadow-nav dark:shadow-nav-dark flex h-full w-full grow flex-col bg-white dark:bg-gray-950 lg:-m-5 lg:rounded-2xl`}
    >
      <div className={`w-full border-b border-black/5 bg-dark-text dark:border-white/5 dark:bg-black lg:rounded-t-2xl`}>
        <h3 className={`text-tertiary dark:text-tertiary-dark mx-5 my-1 select-none text-start text-sm`}>Video.js</h3>
      </div>
      <div
        className={`flex h-full w-full items-center overflow-hidden overflow-x-auto rounded-b-2xl bg-transparent bg-white shadow-lg shadow-none dark:bg-gray-950`}
      >
        <SandpackProvider theme={isDarkMode ? `dark` : 'light'} template="react">
          <SandpackLayout>
            <SandpackCodeViewer code={CODE} />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
};

const ComponentPreview = () => {
  return (
    <div className={`xs:p-5 relative mt-0 flex w-full grow justify-center p-2.5 lg:-my-20 lg:p-10`}>
      <div
        className={`text-secondary shadow-nav dark:shadow-nav-dark mx-auto w-full max-w-3xl overflow-hidden overflow-y-auto rounded-2xl bg-white leading-normal`}
      ></div>
      <div className={`pointer-events-none absolute inset-0 z-10 transform-gpu opacity-0 transition-opacity`}></div>
    </div>
  );
};

export default function CodeBlock() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const codeElement = document.getElementsByClassName('sp-wrapper')[0];
    console.log(`shjdsabhdjbasdasdas`, codeElement);
    if (codeElement) {
      codeElement.classList.add('w-full');
    }
  }, [document.getElementsByClassName('sp-wrapper'), isDarkMode]);

  return (
    <div
      className={`lg:bg-card lg:dark:bg-card-dark mx-auto mb-2 mt-12 flex w-full w-full max-w-7xl flex-col lg:my-16 lg:rounded-2xl lg:pe-5 lg:ps-10`}
    >
      <div
        className={`lg:bg-gray-10 lg:dark:bg-gray-70 shadow-inner-border dark:shadow-inner-border-dark bg-meta-gradient dark:bg-meta-gradient-dark mx-auto flex w-full grow flex-col items-center gap-0 bg-cover bg-center bg-no-repeat lg:flex-row lg:gap-5 lg:rounded-2xl lg:bg-right ltr:lg:bg-[length:60%_100%]`}
      >
        <CodePreview isDarkMode={isDarkMode} />
        <ComponentPreview />
      </div>
    </div>
  );
}
