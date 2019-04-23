import { h, Component } from 'preact';
import linkState from 'linkstate';
import getBrandStyle from '../../helpers/brand-styles-provider'

export default class ExistingCard extends Component {
	state = {
		cvc: "",
		expiry: ""
	}

	showState = (event) => {
		if (event.data.type === "do-a-barrel-roll") {
			console.log(this.state);
		}
	}

	componentDidMount() {
		addEventListener('message', this.showState, { passive:true });
	}

	componentWillUnmount() {
		removeEventListener('message', this.showState, { passive:true });
	}

	render({ brand, ...props }, {expiry, cvc}) {
		return (
			<div id="DIV_1" style={getBrandStyle(brand)}>
				<div id="DIV_2">
					<label id="LABEL_3">
						Card number
					</label> <span id="SPAN_4">{props.first}</span>
					<div id="DIV_5">
						<div id="DIV_6">
							<label for="ember1139" id="LABEL_7">
								Card digits
							</label>
							<input name="ember1139" type="tel" id="INPUT_8" />
						</div>
					</div> <span id="SPAN_9">{props.last}</span>
				</div>
				<div id="DIV_10">
					<div id="DIV_11">
						<label for="ember1165" id="LABEL_12">
							Expiry date
						</label>
						<input id="INPUT_13" type="tel" name="exp-date" placeholder="mm/yy"  onInput={linkState(this, 'expiry')} />
					</div>
				</div>
				<div id="DIV_14">
					<div id="DIV_15">
						<label for="ember1173" id="LABEL_16">
							CVC
						</label>
						<input name="cvc-field" type="tel" maxlength="3" id="INPUT_17" onInput={linkState(this, 'cvc')} />
					</div><span id="SPAN_18"></span>
				</div>
			</div>
		);
	}
}