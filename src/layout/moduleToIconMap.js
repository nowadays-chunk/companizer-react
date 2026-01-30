// src/layout/moduleToIconMap.js
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GavelIcon from '@mui/icons-material/Gavel';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';

import BalanceIcon from '@mui/icons-material/Balance';
import CampaignIcon from '@mui/icons-material/Campaign';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export const moduleToIconMap = {
  'financial-management': AccountBalanceIcon,
  'operations-asset-management': Inventory2Icon,
  'hr-management': PeopleAltIcon,
  'compliance-legal': GavelIcon,
  'sales-marketing': TrendingUpIcon,
  'project-task-management': WorkOutlineIcon,
  'governance-strategy': CorporateFareIcon,
  'logistics-supply-chain': LocalShippingIcon,
  'real-estate-property-management': BusinessIcon,
  'information-technology': DevicesIcon,
  'customer-support': SupportAgentIcon,
  'environmental-social-governance': PublicIcon,
  'intellectual-human-capital': SchoolIcon,
  'external-relationships': HandshakeIcon,
  'legal-compliance': BalanceIcon,
  'corporate-communication': CampaignIcon,
  'training-development': SchoolIcon,
  'corporate-social-responsibility': PublicIcon,
  'mergers-acquisitions': MergeTypeIcon,
  'crisis-risk-management': ReportProblemIcon,
  // fallback modules (if you add more later)
  'sustainability-initiatives': PublicIcon,
  'knowledge-base': EmojiObjectsIcon,
};
