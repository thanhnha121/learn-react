import {withRouter} from 'next/router'
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'

const leasonStyle = {
  border: '5px dashed #ddd',
  width: 'calc(100% - 30px)',
  margin: '10px 0',
  padding: '10px'
}

const Post =  (props) => (
	<div>
		<div style={leasonStyle}>
		  <h2>Reuseable Header</h2>
		  <Header />
		</div>

		<div style={leasonStyle}>
		  <Layout>
		     <h1>{props.show.name}</h1>
		     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
		     <img src={props.show.image.medium}/>
		  </Layout>
		</div>
	</div>
)


Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post