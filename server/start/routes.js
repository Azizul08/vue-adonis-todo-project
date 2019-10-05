'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Route.post('auth/register',()=>{
//   return {
//     message:'Hello World',
//   }
// });

// Route.post('auth/register','UserController.register');
Route.group(()=>{
  Route.post('auth/register','UserController.register');
  Route.post('auth/login','UserController.login');

  Route.get('projects','ProjectController.index').middleware('auth');
})
 .prefix('api/v1');