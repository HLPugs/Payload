import React from 'react';
import { Link } from 'react-router-dom';
import Linkify from 'react-linkify';
import { ChatMessageType } from '../../../../common/types';
import { NimbleEmoji } from 'emoji-mart';
import data from 'emoji-mart/data/twitter.json';
import { CustomEmoji } from 'emoji-mart';
import moment from 'moment';
import './style.scss';

interface MessageElement {
  name?: string;
  customName?: string;
  url?: string;
  offset?: number;
  length?: number;
  message?: string;
}

interface ChatMessageProps {
  customEmojis: CustomEmoji[];
  alias?: string;
}

class ChatMessage extends React.PureComponent<ChatMessageType & ChatMessageProps, {}> {
  renderMessage = (message: string, id: string) => {
    const colonsRegex = new RegExp('(^|\\s)(:[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?)', 'g');

    let match;
    const emojis: MessageElement[] = [];

    // eslint-disable-next-line
    while (match = colonsRegex.exec(message)) {
      const name = match[2];
      const offset: number = match.index + match[1].length;
      const length = name.length;

      if (Object.keys(data.emojis).indexOf(name.slice(1, name.length - 1)) !== -1) {
        emojis.push({
          name: name,
          offset: offset,
          length: length
        });
      } else {
        for (const emoji of this.props.customEmojis) {
          if (`:${emoji.short_names[0]}:` === name) {
            emojis.push({
              customName: name,
              url: emoji.imageUrl,
              offset: offset,
              length: length
            });
          }
        }
      }
    }

    let lastPos = 0;
    const elements: MessageElement[] = [];

    if (!emojis.length) {
      return <span>{message}</span>;
    }

    for (const emoji of emojis) {
      if (lastPos !== emoji.offset) {
        elements.push({
          message: message.substring(lastPos, emoji.offset)
        });
      }

      if (emoji.name) {
        elements.push({
          name: emoji.name
        });
      } else {
        elements.push({
          customName: emoji.customName,
          url: emoji.url
        });
      }

      if (emoji.offset !== undefined && emoji.length) {
        lastPos = emoji.offset + emoji.length;
      }
    }

    if (lastPos !== message.length) {
      elements.push({
        message: message.substring(lastPos, message.length)
      });
    }

    return elements.map((element: MessageElement, index: number) => {
      if (element.name) {
        return (
          <NimbleEmoji data={data} emoji={element.name} size={20} set="twitter" sheetSize={32} tooltip={true} key={index} />
        );
      } else if (element.customName) {
        return (
          <span
            title={element.customName.slice(1, element.customName.length - 1)}
            className="emoji-mart-emoji"
            key={index}
          >
            <span className="customEmoji" style={{ backgroundImage: `url(${element.url})` }} />
          </span>
        );
      }
      return (
        <span key={index}>{element.message}</span>
      );
    });
  }

  highlight = () => {
    if (this.props.alias && this.props.message.split(' ').indexOf(`@${this.props.alias}`) > -1) {
      if (moment(new Date()).diff(moment(this.props.timestamp)) < 1000) {
        new Notification(`${this.props.username} sent a message!`, {
          body: this.props.message
        });
      }
      return 'highlight';
    }

    return '';
  }

  render() {
    return (
      <div className={'message ' + this.highlight()}>
        <div className="info">
          <Link to={`/player/${this.props.userid}`} target="blank" className="username">
            {this.props.username}
          </Link>
          <div className="timestamp">
            <span>{moment(this.props.timestamp).calendar()}</span>
          </div>
        </div>
        <div className="messageContent">
          <Linkify properties={{ target: 'blank' }}>
            {this.renderMessage(this.props.message, this.props.id)}
          </Linkify>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
