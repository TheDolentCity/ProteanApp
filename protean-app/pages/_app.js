import '../styles/globals.css'
import Header from '../components/header/header'
import Sheet from '../components/sheets/Sheet'
import BookNavigation from '../components/navigation/book-navigation';

function MyApp({ Component, pageProps }) {
  return (
    <div className="text-gray-900 bg-gray-50 divide-y divide-gray-300 dark:text-gray-100 dark:bg-gray-900 dark:divide-gray-700">
      <Header></Header>
      <div className="flex flex-row h-screen divide-x divide-gray-300 dark:divide-gray-700">
        <div className="flex-initial max-h-screen overflow-y-auto p-8">
          <BookNavigation></BookNavigation>
        </div>
        <div className="flex-1 max-h-screen overflow-y-auto p-8">
          <Component {...pageProps} />
        </div>
        <div className="flex-1 max-h-screen overflow-y-auto p-8">
          <Sheet></Sheet>
        </div>
      </div>
    </div>
  );
}

export default MyApp
