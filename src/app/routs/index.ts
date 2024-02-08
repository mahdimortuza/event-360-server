import Router from 'express';
import { EventItemRoutes } from '../modules/eventItems/eventItem.route';
import { RecentEventRoutes } from '../modules/reventEvents/recentEvent.route';
import { ServiceRoutes } from '../modules/services/service.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/event-item',
    route: EventItemRoutes,
  },
  {
    path: '/recent-event',
    route: RecentEventRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
