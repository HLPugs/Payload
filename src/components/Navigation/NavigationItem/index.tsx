import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../../common/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

interface NavigationItemProps {
    properties: NavItem;
    key: number;
}

class NavigationItem extends React.Component<NavigationItemProps, {}> {
    render() {
        if (this.props.properties.type === 'divider') {
            return (
                <div className="navDivider" />
            );
        } else if (this.props.properties.type === 'tab' && this.props.properties.tabConfig) {
            if (this.props.properties.tabConfig.external) {
                return (
                    <a 
                        className="navTab"
                        href={this.props.properties.tabConfig.link} 
                        data-tooltip={this.props.properties.tabConfig.name} 
                        data-tooltip-position="right"
                        target="blank"
                    >
                        <div>
                            <FontAwesomeIcon
                                icon={
                                    [this.props.properties.tabConfig.iconPrefix, this.props.properties.tabConfig.icon]
                                }
                            />
                        </div>
                        <span>{this.props.properties.tabConfig.name}</span>
                    </a>
                );
            } else if (!this.props.properties.tabConfig.external) {
                return (
                    <Link
                        className="navTab" 
                        to={this.props.properties.tabConfig.link} 
                        data-tooltip={this.props.properties.tabConfig.name}
                        data-tooltip-position="right"
                    >
                        <div>
                            <FontAwesomeIcon 
                                icon={
                                    [this.props.properties.tabConfig.iconPrefix, this.props.properties.tabConfig.icon]
                                }
                            />
                        </div>
                        <span>{this.props.properties.tabConfig.name}</span>
                    </Link>
                );
            }
        } else if (this.props.properties.type === 'module') {
            return (null);
        }
        
        return (null);
    }
}

export default NavigationItem;