import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export interface SiteConfiguration {
  branding: SiteBranding;
  navigation: NavItem[];
  classes: DraftTFClassList[];
}

export interface SiteBranding {
  siteName: string;
  siteSubTitle: string;
  logoPath: string;
}

export interface NavItem {
  type: 'tab' | 'divider' | 'module';
  tabConfig?: {
    icon: IconName;
    iconPrefix: IconPrefix;
    name: string;
    link: string;
    external: boolean;
  };
  moduleConfig?: {
    name: string;
    moduleName: string;
  };
}
export type DraftTFClass =
  'Scout' | 'Soldier' | 'Roamer' |
  'Pocket' | 'Pyro' | 'Demoman' |
  'Heavy' | 'Engineer' | 'Medic' |
  'Sniper' | 'Spy' | 'Flex' ;

export interface DraftTFClassList {
  name: DraftTFClass;
  numberPerTeam: number;
}

export interface UserScheme {
  loggedIn?: boolean;
  alias?: string;
  steamid?: string;
  avatar?: string;
}

export interface ChatMessageType {
  username: string;
  userid: string;
  id: string;
  timestamp: number;
  message: string;
}

export interface PreDraftRequirementType {
  name: string;
  state: boolean;
}

export interface CompletionItem {
  name?: string;
  customName?: string;
  url?: string;
}
