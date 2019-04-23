import { h, Component } from 'preact';
import { Router, Route, route } from 'preact-router';

import OranjeNewCard from './oranje/new-card';
import OranjeExistingCard from './oranje/existing-card';
import ObgNewCard from './obg/new-card';
import ObgExistingCard from './obg/existing-card';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	showState = (event) => {
		if (event.data.type === "card-reload") {

			console.log(event.data);
			route(`${event.data.cardType}/${event.data.brand}`);
		}
	}

	componentDidMount() {
		addEventListener('message', this.showState, { passive:true });
	}

	componentWillUnmount() {
		removeEventListener('message', this.showState, { passive:true });n
	}

	//https://github.com/developit/preact-router
	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Route path="/new-card/oranje" brand="oranje" component={OranjeNewCard}/>
					<Route path="/existing-card/oranje" brand="oranje" component={OranjeExistingCard}/>

					<ObgNewCard path="/new-card/:brand" />
					<ObgExistingCard path="/existing-card/:brand" />
				</Router>
			</div>
		);
	}
}
