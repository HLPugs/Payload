import React from 'react';
import './style.scss';

interface UserInfoProps {
  alias?: string;
  avatar?: string;
}

class UserInfo extends React.Component<UserInfoProps, {}> {
  render() {
    return (
      <div id="userInfo">
        <div id="userIcon" style={{backgroundImage: `url(${this.props.avatar})`}} />
        <div id="userName">
          {this.props.alias}
        </div>
      </div>
    );
  }
}

export default UserInfo;