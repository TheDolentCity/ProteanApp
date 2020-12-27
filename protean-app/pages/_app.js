import '../styles/globals.css'
import NavigationPanel from '../components/navigation/NavigationPanel'
import Sheet from '../components/sheets/Sheet'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-row h-screen text-gray-900 bg-gray-50 divide-x divide-gray-300 dark:text-gray-100 dark:bg-gray-900 dark:divide-gray-700">
      <div className="flex-1 max-h-screen overflow-y-auto p-12">
        <NavigationPanel></NavigationPanel>
      </div>
      <div className="flex-1 max-h-screen overflow-y-auto p-12">
        <Component {...pageProps} />
      </div>
      <div className="flex-1 max-h-screen overflow-y-auto p-12">
        <Sheet></Sheet>
      </div>
    </div>
  );
}

export default MyApp
