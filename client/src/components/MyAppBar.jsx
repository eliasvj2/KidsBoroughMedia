import { 
    AppBar,
    LocalesMenuButton,
    ToggleThemeButton,
    LoadingIndicator,

} from 'react-admin';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';
import SettingsDropdown from './SettingsDropdown';

const SettingsButton = () => (
    <IconButton color="inherit">
        <SettingsIcon />
    </IconButton>
);

export const MyAppBar = () => (
    <AppBar toolbar={
        <>
            <LocalesMenuButton />
            <ToggleThemeButton />
            <SettingsDropdown/>
        
           
           
        </>
    } />
);