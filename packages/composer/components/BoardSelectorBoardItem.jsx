import React from 'react';
import AppActionCreators from '../action-creators/AppActionCreators';
import Button from '../components/Button';
import styles from './css/BoardSelectorBoardItem.css';

class BoardSelectorBoardItem extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object.isRequired,
    board: React.PropTypes.object.isRequired,
    canUnselectSubprofiles: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,
  };

  onClick = () => (
    this.isBoardSelected() ? this.onSelectedBoardClick() : this.onUnselectedBoardClick()
  );

  onSelectedBoardClick = () => {
    if (this.props.canUnselectSubprofiles) {
      AppActionCreators.unselectSubprofile(this.props.profile.id, this.props.board.id);
      AppActionCreators.trackUserAction(['composer', 'deselected_profile']);
      this.props.onChange();
    }
  };

  onUnselectedBoardClick = () => {
    AppActionCreators.selectSubprofile(this.props.profile.id, this.props.board.id);
    AppActionCreators.trackUserAction(['composer', 'selected_profile']);
    this.props.onChange();
  };

  isBoardSelected = () => this.props.profile.selectedSubprofileId === this.props.board.id;

  render() {
    const { board, canUnselectSubprofiles } = this.props;

    const boardClassName =
      !this.isBoardSelected() ? styles.board :
      canUnselectSubprofiles ? styles.selectedBoard : styles.nonUnselectableSelectedBoard;

    const defaultAvatarToOverride = 'https://static.bufferapp.com/images/app/pin_2x.png';
    const defaultAvatar = '/images/app/img_pin@2x.png';
    const avatar = (board.avatar !== defaultAvatarToOverride) ? board.avatar : defaultAvatar;

    const sharedBoardIconClassName = [
      styles.sharedBoardIcon,
      'bi bi-persons',
    ].join(' ');

    const selectionStateIconClassName = [
      this.isBoardSelected() ? styles.selectedBoardIcon : styles.unselectedBoardIcon,
      this.isBoardSelected() && canUnselectSubprofiles ?
        'bi bi-circle-x' : 'bi bi-circle-checkmark',
    ].join(' ');

    return (
      <Button
        className={boardClassName} onClick={this.onClick}
        title={board.name}
        aria-selected={this.isBoardSelected()}
      >
        <img className={styles.boardThumbnail} src={avatar} alt="" />

        <span className={styles.iconsContainer}>
          {board.isShared &&
            <div className={sharedBoardIconClassName}></div>}

          <span className={selectionStateIconClassName} />
        </span>

        <span className={styles.boardName}>{board.name}</span>
      </Button>
    );
  }
}

export default BoardSelectorBoardItem;
