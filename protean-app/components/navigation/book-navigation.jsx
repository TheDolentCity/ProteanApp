import Link from 'next/link'
import { Component } from 'react'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

class BookNavigation extends Component {
  render() {
    return (
      <nav className="flex-none min-w-2/12 mt-14 max-h-full whitespace-normal overflow-y-auto p-8">
        {links.map(({ href, label }) => (
          <div key={`${href}${label}`} className="">
            <a href={href} className="no-underline btn-blue">
              {label}
            </a>
          </div>
        ))}
      </nav>
    );
  }
}

export default BookNavigation;