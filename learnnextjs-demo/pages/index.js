import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/Layout.js'
import PostLink from '../components/PostLink.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const leasonStyle = {
  border: '5px dashed #ddd',
  width: 'calc(100% - 30px)',
  margin: '10px 0',
  padding: '10px'
}

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const Index = (props) => (
  <div>
    <div style={leasonStyle}>
      <h2>Reuseable Header</h2>
      <Header />
    </div>

    <div style={leasonStyle}>
      <Layout>
        <h1>My Blog</h1>
        <ul>
          {getPosts().map((post) => (
            <li key={post.id}>
              <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    </div>

  	<div style={leasonStyle}>
      <h2>isomorphic-unfetch</h2>
      <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
          {props.shows.map(({show}) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </div>

    <div style={leasonStyle}>
      <h2>The Layout Component</h2>
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink id="hello-nextjs" title="Hello Next.js"/>
          <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
          <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
        </ul>
      </Layout>
    </div>

    <div style={leasonStyle}>
    	<h2>Getting Started</h2>
    	<p>Hello Next.js</p>
    </div>

  	<div style={leasonStyle}>
  		<h2>Nav Link</h2>
			<Link href="/about">
			  <a>About Page</a>
			</Link>

			<Link href="/about">
			  <a style={{ fontSize: 30 }}>About Page</a>
			</Link>

			<Link href="/about">
			  <button>Go to About Page</button>
			</Link>
  	</div>

  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index