# -*- coding: utf-8 -*-
{
    'name': 'Odoo Client Action',
    'summary': 'Creating Odoo Client Action',
    'description': 'This module is to create Odoo Client Action',
    'version': '15.0.0.1',
    'author': 'Sonod',
    'company': 'Sonod ERP & IT Solutions',
    'website': 'https://www.sonod.tech',
    'license': 'LGPL-3',
    #'category': ['HR','Accounting','POS','Health','Report','Stock','Project','Web','Manufacturing','Other',],
    'category': 'Other',
    # any module necessary for this one to work correctly
    'depends': ['web'],

    # always loaded
    'data': [
        'views/views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'odoo_client_action/static/src/js/main.js',
            'odoo_client_action/static/src/css/style.css',
        ],
        'web.assets_qweb': [
            'odoo_client_action/static/src/xml/template.xml',
        ],
    },
}
