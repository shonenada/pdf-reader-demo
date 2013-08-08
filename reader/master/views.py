#-*-coding: utf-8 -*-
import tornado.web


class HomeHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html", title="浪淘沙 36期", pages=[(str(x), str(x)+'.jpg') for x in range(1, 81)])