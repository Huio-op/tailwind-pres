import SearchField from '~/components/form/SearchField.jsx';
import ToggleTheme from '~/components/header/ToggleTheme.jsx';
import ReactLogo from '~/assets/svg/ReactLogo.jsx';
import GithubLogo from '~/assets/svg/GithubLogo.jsx';
import UkraineHeader from '~/components/header/UkraineHeader.jsx';
import Button from '~/components/form/Button.jsx';
import IconButton from '~/components/form/IconButton.jsx';

export default function Header() {
  const openGithubLink = () => {
    window.open('https://github.com/facebook/react/releases', '_blank', 'noreferrer');
  };

  return (
    <>
      <UkraineHeader />
      <div className="flex h-20 items-center gap-3 p-5 dark:bg-dark dark:text-dark-text">
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
