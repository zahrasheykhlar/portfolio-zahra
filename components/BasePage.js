
import {Container} from 'reactstrap';
import {PropTypes} from 'prop-types';




const BasePage = (props) => {
	const {className} = props;
	//const className = props.classname || '';
	return (
			<div className={`base-page ${className}`}>
				<container>
				{props.children}
				</container>
			</div>
		)
}
// BasePage.defaultProps = {
// 	className:''
// }

BasePage.propTypes= {
	className: PropTypes.any.isRequired
}

export default BasePage;