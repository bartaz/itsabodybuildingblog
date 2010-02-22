import os
from google.appengine.ext.webapp import template
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

class Error404Handler(webapp.RequestHandler):

    def get(self):
        self.error(404)
        path = os.path.join(os.path.dirname(__file__), '404.html')
        self.response.out.write(template.render(path, locals()))

def main():
    application = webapp.WSGIApplication([('/.*', Error404Handler)],
                                         debug=True)
    run_wsgi_app(application)

if __name__ == '__main__':
    main()

