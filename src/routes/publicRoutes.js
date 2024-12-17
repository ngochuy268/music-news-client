import HomePage from '../views/components/Home/HomePage';
import Contact from '../views/components/Contact';
import News from '../views/components/News/News';
import Singer from '../views/components/Singer/Singer';
import Type from '../views/components/Type/Type';

export const publicRoutes = [
  { path: '/', element: HomePage },
  { path: '/contact', element: Contact },
  { path: '/:articleTitle', element: News },
  { path: '/singer/:singerName', element: Singer },
  { path: '/type/:typeName', element: Type }
];