import React from 'react';
import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';

interface Props {
  onClickHome?: () => void;
  onClickMenu?: (index: number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
    },
    title: {
      color: theme.palette.primary.contrastText,
    },
  }),
);

const BasicAppBar: FunctionComponent<Props> = ({
  onClickHome, onClickMenu,
}) => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);

  const toggleDrawer = (isNewOpened: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpened(isNewOpened);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit"
            onClick={() => setIsOpened(true)}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={onClickHome}>
            <Typography variant="h6" className={classes.title}>
              SKKU X Shinhan Bank
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpened} onClose={toggleDrawer(false)}>
        <div
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={() => onClickMenu(0)}>
              <ListItemIcon><AssessmentIcon /></ListItemIcon>
              <ListItemText primary="리뷰 분석" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default BasicAppBar;
