import '../styles/globals.css'
import Header from '../components/header/header'
import Sheet from '../components/sheets/sheet'
import BookNavigation from '../components/navigation/book-navigation';
import Panel from '../components/generic/panels/panel';

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <div className="w-screen h-screen max-h-screen text-gray-900 bg-white font-sans dark:text-gray-100 dark:bg-gray-900">
        <Header css="h-s05 max-h-s05">Protean RPG</Header>
        <div className="flex whitespace-nowrap divide-x divide-gray-300 dark:divide-gray-700">
          <Panel title="Table Of Contents" css="min-w-2/12">
            <BookNavigation></BookNavigation>
          </Panel>
          <Panel title="Protean RPG Book" css="min-w-6/12">
            <Component {...pageProps} />
          </Panel>
          <Panel title="Character Sheet" css="min-w-4/12">
            <Sheet></Sheet>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default MyApp
