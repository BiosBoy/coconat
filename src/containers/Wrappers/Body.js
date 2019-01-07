import { connect } from 'react-redux';
import { Body } from '../../components';
import { switchImage } from '../../modules/actions';

const mapStateToProps = state => ({
  imageToShow: state.app.imageToShow
});

const mapDispatchToProps = dispatch => ({
  switchImage: imageID => dispatch(switchImage(imageID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
