import Piano from '../../components/Piano';
import Second from '../../routes/root/second_task';

export default [
  {
    path: '/',
    component: Piano,
    exact: true,
  },
  {
    path: '/second_task',
    component: Second,
    exact: true,
  },
];
