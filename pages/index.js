import Link from 'next/link'

export default function Home() {
  return (
    <div>
      This is the TOP at the Home page/route
      <div style={{height: '10000px', background: 'linear-gradient(45deg,red,blue)'}}></div>
      <Link href="/about">
        <a>Link to About at the bottom</a>
      </Link>
    </div>
  )
}
