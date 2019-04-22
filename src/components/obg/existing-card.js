import { h, Component } from 'preact';
import getBrandStyle from '../../helpers/brand-styles-provider'

export default class ExistingCard extends Component {
	render({ brand, ...props }) {
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
						<input id="INPUT_13" type="tel" name="exp-date" placeholder="mm/yy" />
					</div>
				</div>
				<div id="DIV_14">
					<div id="DIV_15">
						<label for="ember1173" id="LABEL_16">
							CVC
						</label>
						<input name="cvc-field" type="tel" maxlength="3" id="INPUT_17" />
					</div><span id="SPAN_18"></span>
				</div>
			</div>
		);
	}
}