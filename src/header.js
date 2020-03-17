import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Header } from 'semantic-ui-react'
import CloseIcon from '@material-ui/icons/Close';

export const HeaderComponent = function HeaderComponent() {
	const useStyles = makeStyles({

		list: {
			width: 1500,
			height: '100vh',
			background: "#8E0E00",  /* fallback for old browsers */
			background: "-webkit-linear-gradient(to right, #1F1C18, #8E0E00)",  /* Chrome 10-25, Safari 5.1-6 */
			background: "linear-gradient(to right, #1F1C18, #8E0E00)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			color: "white",
			padding: '30px'
		},
		cross: {
			background: "#8E0E00",  /* fallback for old browsers */
			background: "-webkit-linear-gradient(to right, #1F1C18, #8E0E00)",  /* Chrome 10-25, Safari 5.1-6 */
			background: "linear-gradient(to right, #1F1C18, #8E0E00)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			color: "white",
			padding: '20px',
			fontSize:'20px',
			alignItems:'center'

		},
		fullList: {
			width: 'auto',

		},
	});

	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [side]: open });
	};


	const sideList = side => (
		<>
			<div className={classes.cross}
				onClick={toggleDrawer(side, false)}
				onKeyDown={toggleDrawer(side, false)}
			>
				<CloseIcon style={{fontSize:'50px'}}/>
			</div>
			<div
				className={classes.list}
				role="presentation"
				onClick={toggleDrawer(side, false)}
				onKeyDown={toggleDrawer(side, false)}

			>

				<List >
					
						<ListItem button  >
							{/* <ListItemIcon style={{ color: "white" }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
							
							<ListItemText primary="About" style={{ fontFamily: 'yellowtail', fontSize: '40px' }} />
						</ListItem>
					
				</List>
			</div>
		</>

	);


	return (

		<>


			<div className="ui container">
				<div className="ui grid">
					<div className="ui  two column row wide">
						<div className="ui  left aligned column">
							<Header as='h2' sub='hui' style={{ color: 'white', fontFamily: 'yellowtail', padding: '15px', fontSize: '40px' }} content='YAGYA' />
							<sub style={{ fontSize: '20px' }}>Software Developer</sub>
						</div>
						<div className="right aligned column">
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={toggleDrawer('left', true)}
								edge="start"
								style={{ color: 'white' }}
							>
								<MenuIcon style={{ fontSize: '40px' }} />
							</IconButton >
							<Drawer open={state.left} onClose={toggleDrawer('left', false)} style={{ opacity: '0.8' }}>
								{sideList('left')}
							</Drawer>
						</div>

					</div>
				</div>
			</div>



		</>
	)

}