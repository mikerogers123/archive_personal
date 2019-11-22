import React from 'react';
import { connectComponent, ConnectedComponent } from '../redux/connected-components';
import Icon from '../icons/icon';

export class CvDownloadComponent extends ConnectedComponent {
    render() {
        return (
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large">
                    <Icon icon="file_download"></Icon>
                </a>
            </div>
        );
    }
}

export default connectComponent(CvDownloadComponent);
