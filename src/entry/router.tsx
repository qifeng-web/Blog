/*
 * @Author: gaofan05
 * @Date: 2024-03-25 20:04:06
 * @LastEditors: gaofan05
 * @Description: 路由
 */
import { createBrowserHistory } from 'history';
import { RouteConfig } from 'react-router-config';
import loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

export const history = createBrowserHistory();

/**
 * 欢迎页
 */
const WelcomeComponent = loadable({
	loader: () => import(/* webpackChunkName: "Welcome" */ '../pages/Welcome'),
	loading: () => <></>,
});

/**
 * 首页
 */
const HomeComponent = loadable({
	loader: () => import(/* webpackChunkName: "Home" */ '../pages/Home'),
	loading: () => <></>,
});

export const routesConfig: RouteConfig[] = [
	{
		path: '/',
		exact: true,
		strict: true,
		component: () => <Redirect from="/" to="/home" />,
	},
	{
		path: '/welcome',
		exact: true,
		component: WelcomeComponent,
		meta: {
			showHeader: false,
		},
	},
	{
		path: '/home',
		component: HomeComponent,
	},
	
	{
		path: '*',
		component: () => <Redirect to="/home" />,
	},
];