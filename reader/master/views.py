#-*-coding: utf-8 -*-
import os

import tornado.web

from reader.settings import settings


class HomeHandler(tornado.web.RequestHandler):
    def get(self):
        test = open(os.path.join(settings['static_path'], "pdfs/pic/1.jpg"), 'rb')
        self.render("index.html", title="浪淘沙 36期", pages=[(str(x), str(x)+'.jpg') for x in range(1, 4)], test=test.read())