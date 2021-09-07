/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Dashboard,
  Icons,
  TambahLiga,
  ListLiga,
  EditLiga,
  ListJersey,
  TambahJersey,
  EditJersey,
  ListPesanan,
} from "./views";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/liga",
    name: "Mater Liga",
    icon: "nc-icon nc-world-2",
    component: ListLiga,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/liga/tambah",
    name: "Tambah Liga",
    component: TambahLiga,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/liga/edit/:id",
    name: "Edit Liga",
    component: EditLiga,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/jersey",
    name: "Mater Jersey",
    icon: "nc-icon nc-cart-simple",
    component: ListJersey,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/jersey/tambah",
    name: "Tambah Jersey",
    component: TambahJersey,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/jersey/edit/:id",
    name: "Edit Jersey",
    component: EditJersey,
    layout: "/admin",
    sidebar: false,
  },
  {
    path: "/pesanan",
    name: "Mater Pesanan",
    icon: "nc-icon nc-cart-simple",
    component: ListPesanan,
    layout: "/admin",
    sidebar: true,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
    sidebar: true,
  },
];
export default routes;
