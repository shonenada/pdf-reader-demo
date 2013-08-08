import tornado.web

from reader.settings import settings
from reader.urls import url_mapping


app = tornado.web.Application(url_mapping, **settings)