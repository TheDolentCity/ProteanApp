import Nav from '../components/nav'
import Page from '../components/page'
import Sheet from '../components/sheet'

export default function IndexPage() {
  return (
    <div class="flex flex-row divide-x divide-gray-300">
      <div class="flex-1 p-4">
        <Nav></Nav>
      </div>
      <div class="flex-1 p-4">
        <Page></Page>
      </div>
      <div class="flex-1 p-4">
        <Sheet></Sheet>
      </div>
    </div>
  )
}
