import { h, Component } from 'preact';
import getBrandStyle from '../../helpers/brand-styles-provider'

export default class NewCard extends Component {
	render({ brand }) {
		return (
			<div id="DIV_1" style={getBrandStyle(brand)}>
				<div id="DIV_2">
					<div id="DIV_3">
						<label for="ember1228" id="LABEL_4">
							Card holder
						</label>
						<input name="cardownername" type="text" id="INPUT_5" />
					</div>
				</div>
				<div id="DIV_6">
					<div id="DIV_7">
						<div id="DIV_8">
							<label for="ember1232" id="LABEL_9">
								Card number
							</label>
							<input name="cardnumber" type="tel" maxlength="24" id="INPUT_10" />
						</div>
					</div>
				</div>
				<div id="DIV_11">
					<div id="DIV_12">
						<label for="ember1165" id="LABEL_13">
							Expiry date
						</label>
						<input id="INPUT_14" type="tel" name="exp-date" placeholder="mm/yy" />
					</div>
				</div>
				<div id="DIV_15">
					<div id="DIV_16">
						<label for="ember1173" id="LABEL_17">
							CVC
						</label>
						<input name="cvc-field" type="tel" maxlength="3" id="INPUT_18" />
					</div><span id="SPAN_19"></span>
				</div>
			</div>
		);
	}
}