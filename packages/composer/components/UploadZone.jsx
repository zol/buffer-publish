 /**
 * Component that inserts a transparent layer with uploading abilities
 * inside another component.
 *
 * Note: The component is transparent as it's expected to be displayed
 * on top of any UI to unleash its uploading power: make sure that it's
 * the last child of that parent, or play with z-index, in order for it
 * to register clicks. The parent should be positioned.
 */

import React from 'react';
import Dropzone from 'react-dropzone';
import ComposerActionCreators from '../action-creators/ComposerActionCreators';
import Button from '../components/Button';
import styles from './css/UploadZone.css';
import { getHumanReadableSize } from '../utils/StringUtils';
import NotificationActionCreators from '../action-creators/NotificationActionCreators';
import { NotificationScopes } from '../AppConstants';

class UploadZone extends React.Component {
  static propTypes = {
    draftId: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    classNames: React.PropTypes.shape({
      uploadZone: React.PropTypes.string,
      uploadZoneActive: React.PropTypes.string,
    }),
    uploadFormatsConfig: React.PropTypes.object,
    disabled: React.PropTypes.bool,
    visibleNotifications: React.PropTypes.array.isRequired,
    uploadType: React.PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
  };

  onClick = (e) => {
    const { disabled } = this.props;
    if (disabled) return;
    this.dropzone.open();
  };

  uploadFile = (file) => {
    const { draftId } = this.props;

    if (!this.isNewFileUploadable(file)) return;
    ComposerActionCreators.uploadDraftFile(draftId, file, this.props.uploadType);
  }

  cleanUpNotifications = () =>
    NotificationActionCreators.removeNotificatonsByScope(NotificationScopes.FILE_UPLOAD);

  onDrop = (acceptedFiles) => {
    this.cleanUpNotifications();

    if (acceptedFiles.length === 0) return;

    this.uploadFile(acceptedFiles[0]);
  }

  onNewFileSelected = (e) => {
    this.cleanUpNotifications();

    const files = e.target.files;
    if (files.length === 0) return;

    this.uploadFile(files.item(0));
  };

  isNewFileUploadable = (file) => {
    const { uploadFormatsConfig } = this.props;
    const fileNameParts = file.name.split('.');
    const fileFormat = fileNameParts[fileNameParts.length - 1].toUpperCase();
    const acceptedFiles = [...uploadFormatsConfig.keys()].join(', ');

    if (!uploadFormatsConfig.has(fileFormat)) {
      NotificationActionCreators.queueError({
        scope: NotificationScopes.FILE_UPLOAD,
        message: `We can't quite use that type of file. Could you try one of the
                  following instead: ${acceptedFiles}?`,

      });
      return false;
    }

    const uploadFormatConfig = uploadFormatsConfig.get(fileFormat);
    if (file.size > uploadFormatConfig.maxSize) {
      const formattedMaxSize = getHumanReadableSize(uploadFormatConfig.maxSize);
      NotificationActionCreators.queueError({
        scope: NotificationScopes.FILE_UPLOAD,
        message: `This is all our fault, we can only handle files up to
                  ${formattedMaxSize}! Could you try a smaller file?`,
      });
      return false;
    }
    return true;
  };

  render() {
    const transparentClickZoneClassName =
      [styles.transparentClickZone, this.props.classNames.uploadZone].join(' ');

    const acceptedFileExtensions = Array.from(this.props.uploadFormatsConfig.keys())
                                  .map((format) => `.${format.toLowerCase()}`)
                                  .join();

    return (
      <div>
        <Dropzone
          activeClassName={this.props.classNames.uploadZoneActive}
          className={transparentClickZoneClassName} onDrop={this.onDrop}
          ref={(node) => { this.dropzone = node; }}
        />
        <Button
          className={styles.hiddenA11yButton}
          onClick={this.onClick}
          title="Upload media"
        />
      </div>

    );
  }
}

export default UploadZone;
