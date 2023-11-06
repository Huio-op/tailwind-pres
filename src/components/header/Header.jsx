import SearchField from '~/components/form/SearchField.jsx';
import ToggleTheme from '~/components/header/ToggleTheme.jsx';
import ReactLogo from '~/assets/svg/ReactLogo.jsx';
import GithubLogo from '~/assets/svg/GithubLogo.jsx';
import UkraineHeader from '~/components/header/UkraineHeader.jsx';
import Button from '~/components/form/Button.jsx';
import IconButton from '~/components/form/IconButton.jsx';
import { useRef, useState } from 'react';

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const openGithubLink = () => {
    window.open('https://github.com/facebook/react/releases', '_blank', 'noreferrer');
  };

  window.onscroll = function () {
    if (window.scrollY !== 0) {
      console.log(`aiudsabuidbsayiudsadsa`);
      setIsTop(false);
    } else if (!isTop) {
      setIsTop(true);
    }
  };

  return (
    <>
      <UkraineHeader />
      <div
        className={`${
          !isTop ? 'shadow-nav dark:shadow-nav-dark' : ''
        } sticky top-0 flex h-20 items-center gap-3 bg-white p-5 dark:bg-black dark:text-dark-text`}
      >
        <a>
          <ReactLogo className={'text-react-blue'} />
        </a>
        <SearchField />
        <div className={`hidden gap-1.5 lg:flex`}>
          <Button textOnly>Learn</Button>
          <Button textOnly>Reference</Button>
          <Button textOnly>Community</Button>
          <Button textOnly>Blog</Button>
        </div>
        <ToggleTheme />
        <IconButton onClick={openGithubLink}>
          <GithubLogo />
        </IconButton>
      </div>
    </>
  );
}
