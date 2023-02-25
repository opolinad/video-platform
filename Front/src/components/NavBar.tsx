import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { Link } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            marginBottom: '4vh',
            backgroundColor: 'rgba(241,60,69)',
        }}>
            <Toolbar disableGutters sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%',
                margin:'auto'
            }}>
                <Box sx={{ display: 'flex' }}>
                    <OndemandVideoIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 3, fontSize: '35px' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        NS Video Creator
                    </Typography>

                    <OndemandVideoIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="User profile">
                        <Link href={'/user'} sx={{ textDecoration: 'none' }}>
                            <Avatar alt="Remy Sharp" src="" />
                        </Link>
                    </Tooltip>
                </Box>

            </Toolbar>
        </AppBar>
    );
}
export default NavBar;