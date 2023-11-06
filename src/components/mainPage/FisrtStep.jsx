import ReactLogo from '~/assets/svg/ReactLogo.jsx';
import Button from '~/components/form/Button.jsx';

export default function FisrtStep() {
  return (
    <div className={`mx-5 mb-20 mt-12 flex flex-col items-center justify-center gap-4 lg:mb-32 lg:mt-24`}>
      <ReactLogo className={`mb-3 mt-4 h-full w-24 text-react-blue lg:w-28`} />
      <h1 className={`text-5xl font-semibold text-black dark:text-dark-text`}>React</h1>
      <span className={`py-1 text-center text-4xl`}>The library for web and native user interfaces</span>
      <div className={`flex w-full justify-center gap-2`}>
        <Button className={`bg-react-blue px-4 py-3 text-white`} textOnly>
          Learn React
        </Button>
        <Button className={`shadow-secondary-button dark:shadow-secondary-button-dark px-4 py-3 outline-none`} textOnly>
          API REFERENCE
        </Button>
      </div>
    </div>
  );
}
