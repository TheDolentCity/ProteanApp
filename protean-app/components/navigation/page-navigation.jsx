import Link from 'next/link'
import { Component } from 'react'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

class PageNavigation extends Component {
  render() {
    return (
      <nav>
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

export default PageNavigation;