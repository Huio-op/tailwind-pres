import MoonIcon from '~/assets/svg/MoonIcon.jsx';
import SunIcon from '~/assets/svg/SunIcon.jsx';
import Button from '~/components/form/Button.jsx';
import IconButton from '~/components/form/IconButton.jsx';

export default function ToggleTheme() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <IconButton onClick={toggleTheme}>
      <MoonIcon className={'block dark:hidden'} />
      <SunIcon className={'hidden text-dark-text dark:block'} />
    </IconButton>
  );
}
