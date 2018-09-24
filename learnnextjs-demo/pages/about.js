import Header from '../components/Header'

const leasonStyle = {
  border: '5px dashed #ddd',
  width: 'calc(100% - 30px)',
  margin: '10px 0',
  padding: '10px'
}

export default () => (
  <div>
	  <div style={leasonStyle}>
	    <h2>Reuseable Header</h2>
	    <Header />
	  </div>

  	<p>This is the about page.</p>
	</div>
)
