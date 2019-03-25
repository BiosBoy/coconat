import { connect } from 'react-redux';
import { Body } from '../../components';
import { switchImage } from '../../modules/actions';

interface ISwitchImage {
  type: string
  imageID: number
}

interface IStore {
  app: {
    imageToShow: number
  }
  dispatch: (someFunc: ISwitchImage) => void
}

const mapStateToProps = (state: IStore) => ({
  imageToShow: state.app.imageToShow
});

const mapDispatchToProps = (dispatch: IStore['dispatch']) => ({
  switchImage: (imageID: ISwitchImage['imageID']) => dispatch(switchImage(imageID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
