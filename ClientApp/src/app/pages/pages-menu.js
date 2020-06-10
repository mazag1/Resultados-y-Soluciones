"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MENU_ITEMS = void 0;
exports.MENU_ITEMS = [
    {
        title: '',
        group: true,
    },
    {
        title: 'Login',
        icon: 'person-outline',
        link: '/pages/login',
    },
    {
        title: 'Gestiones',
        icon: 'headphones-outline',
        children: [
            {
                title: 'Mantenimiento de gestiones',
                link: '/pages/forms/layouts',
            }
        ],
    },
    {
        title: 'Usuarios',
        icon: 'people-outline',
        children: [
            {
                title: 'Mantenimiento Usuarios',
                link: '/pages/tables/smart-table',
            },
        ],
    },
    {
        title: 'Archivos',
        icon: 'folder-outline',
        children: [
            {
                title: 'Cargar archivos',
                link: '/pages/uploader',
            },
            {
                title: 'Error al Subir Archivo',
                link: '/pages/errorarchivo',
            },
            {
                title: 'prueba',
                link: '/pages/prueba',
            },
        ],
    },
];
//# sourceMappingURL=pages-menu.js.map