import Link from 'next/link'

export default function About() {
  return (
    <div>
      This is the TOP at the about page/route
      <div style={{height: '10000px', background: 'linear-gradient(45deg,cyan,pink)'}}></div>
      <Link href="/">
        <a>Link to Home at the bottom</a>
      </Link>
    </div>
  )
}
