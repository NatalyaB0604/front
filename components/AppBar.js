import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';
import logotype from './logo_text.png';
import AccountCircle from './account.png';
import menuIcon from './menu.png';

const menuItems = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'О нас',
    children: [
      { title: 'О детском Центре ВундерКидс', link: '/about' },
      { title: 'Публичный договор', link: '/agreement' },
      { title: 'Политика конфиденциальности', link: '/privacy-policy' },
      { title: 'Скидки и акции', link: '/discounts' },
      { title: 'Новости', link: '/news' },
      { title: 'Отзывы', link: '/reviews' },
      { title: 'Вакансии', link: '/careers' },
    ],
  },
  {
    title: 'Курсы и кружки',
    children: [
      { title: 'Раннее развитие (1,2-4 лет)', link: '/courses/early-development' },
      { title: 'Ступеньки к школе (5-7 лет)', link: '/courses/school-prep' },
      { title: 'ОНЛАЙН-Ступеньки к школе (5-7 лет)', link: '/courses/online-school-prep' },
      { title: 'Английский язык (4-16 лет)', link: '/courses/english' },
      { title: 'Немецкий язык (4-16 лет)', link: '/courses/german' },
      { title: 'Живопись (5-16 лет)', link: '/courses/art' },
      { title: 'В помощь школьнику (1-4 класс)', link: '/courses/homework-help' },
      { title: 'Обучение чтению за 12 уроков', link: '/courses/reading' },
      { title: 'Мастер-классы (5-18 лет)', link: '/courses/master-classes' },
    ],
  },
  {
    title: 'Прайс',
    children: [
      { title: 'Стоимость занятий', link: '/pricing' },
      { title: 'Способы оплаты', link: '/payment-methods' },
    ],
  },
];

export default function CustomAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuItemClick = (link) => {
    toggleDrawer();
    window.location.href = link;
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#cad7ff' }}>
        <Toolbar>
          <IconButton edge="start" color="black" aria-label="menu" onClick={toggleDrawer}>
            <img src={menuIcon} alt="Меню" style={{ width: '30px', height: '30px' }} />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            href="/"
            style={{ marginRight: 'auto', marginLeft: 'auto' }}
          >
            <img src={logotype} alt="Логотип" style={{ height: '100px' }} />
          </IconButton>
          <IconButton
            component={Link}
            to="/sign-in"
            sx={{ position: 'absolute', right: '20px' }}
            color="primary"
          >
            <img src={AccountCircle} alt="Аккаунт" style={{ width: '48px', height: '48px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
          <Typography variant="h5" sx={{ marginTop: '8px', marginLeft: '100px' }}>
            Меню
          </Typography>
          <IconButton onClick={toggleDrawer} aria-label="close" sx={{ color: 'black' }}>
            <CloseIcon />
          </IconButton>
        </div>

        <List sx={{ width: 300, padding: 2 }}>
          <ListItem key={0} sx={{ pl: 0, display: 'flex', justifyContent: 'flex-start' }} onClick={() => handleMenuItemClick(menuItems[0].link)}>
            <ListItemText>
              <span style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                <Typography sx={{ marginLeft: 0 }}>{menuItems[0].title}</Typography>
              </span>
            </ListItemText>
          </ListItem>
          <Divider />
          {menuItems.slice(1).map((item, index) => {
            if (item.link) {
              return (
                <ListItem key={index + 1} sx={{ pl: 4 }} onClick={() => handleMenuItemClick(item.link)}>
                  <ListItemText>
                    <span style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                      <Typography sx={{ marginLeft: 0 }}>{item.title}</Typography>
                    </span>
                  </ListItemText>
                </ListItem>
              );
            }

            return (
              <Accordion key={index + 1} sx={{ boxShadow: 'none', backgroundColor: 'inherit' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List disablePadding>
                    {item.children.map((child, childIndex) => (
                      <ListItem key={childIndex} sx={{ pl: 4 }} onClick={() => handleMenuItemClick(child.link)}>
                        <ListItemText>
                          <span style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                            <Typography sx={{ marginLeft: 0 }}>{child.title}</Typography>
                          </span>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
