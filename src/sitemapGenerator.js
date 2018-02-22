require('babel-register')
const _ = require('underscore')
const xmlbuilder = require('xmlbuilder');
const fs = require('fs')

const reactRoutes = require('./common/routes.jsx');

const domain = 'http://reactexample.dev.johngeddes.tech'

reactRouteElements = reactRoutes.default().props.children
routes = []

var sitemapXmlRoot = xmlbuilder.create('urlset')
sitemapXmlRoot.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')

_.map(reactRouteElements, routeElement => {
    sitemapXmlRoot.ele('url').ele('loc', {}, domain + routeElement.props.path)
})

let xml = sitemapXmlRoot.end({ pretty: true })

fs.writeFileSync('dist/sitemap.xml', xml)
