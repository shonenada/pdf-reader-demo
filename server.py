import tornado

from reader.app import app


if __name__ == "__main__":
    app.listen(8000)
    tornado.ioloop.IOLoop.instance().start()