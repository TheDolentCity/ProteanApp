import Nav from '../components/navigation/Nav'
import Book from '../components/book/Book'
import Sheet from '../components/sheets/Sheet'

export default function IndexPage() {
  return (
    <div className="flex flex-row divide-x divide-gray-300">
      <div className="flex-1 p-8">
        <Nav></Nav>
      </div>
      <div className="flex-1 p-8">
        <Book></Book>
      </div>
      <div className="flex-1 p-8">
        <Sheet></Sheet>
      </div>
    </div>
  )
}
