import '../styles/globals.css'
import Header from '../components/header/header'
import Sheet from '../components/sheets/sheet'
import BookNavigation from '../components/navigation/book-navigation';

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <div className="max-h-screen text-gray-900 bg-white divide-y divide-gray-300 dark:text-gray-100 dark:bg-gray-900 dark:divide-gray-700">
        <Header
          title="Protean RPG">
        </Header>
        <div className="flex max-h-screen whitespace-nowrap divide-x divide-gray-300 dark:divide-gray-700">
          <div className="flex-none min-w-2/12 mt-14 max-h-full whitespace-normal overflow-y-auto p-8">
            <BookNavigation></BookNavigation>
          </div>
          <div className="flex-grow min-w-6/12 mt-14 max-h-full whitespace-normal overflow-y-auto p-8">
            <Component {...pageProps} />
          </div>
          <div className="flex-auto min-w-4/12 mt-14 max-h-full whitespace-normal overflow-y-auto">
            <Sheet></Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp
