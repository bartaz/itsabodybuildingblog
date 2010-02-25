verbose false

OUTPUT_PATH = './_site'

CLEAN = FileList[OUTPUT_PATH]
HTML = FileList[File.join(OUTPUT_PATH, '/**/*.html')]
JS = FileList[File.join(OUTPUT_PATH, '/**/*.js')]

task :default => :build

desc "Builds the site from scratch"
task :build => ['clean', 'jekyll', 'minify']

desc "Cleans output directory"
task :clean do
  CLEAN.each do |f|
    sh 'rm ' + ('-r ' if File.directory? f) + f
  end
end

desc "Deploys site on server"
task :deploy => ['gae:update']


namespace "gae" do

  GAE_PATH = '~/google_appengine'

  desc "Uploads site to Google App Engine"
  task :update => ['build'] do
    sh File.join(GAE_PATH, 'appcfg.py') + ' update ' + OUTPUT_PATH
  end

  desc "Runs Google App Engine development server"
  task :server do
    sh File.join(GAE_PATH, 'dev_appserver.py') + ' -p 4000 '  + OUTPUT_PATH
  end

end

desc "Runs Jekyll (shortcut)"
task :jekyll => ["jekyll:run"]

namespace "jekyll" do

  desc "Runs Jekyll with default options"
  task :run do
    jekyll
  end

  desc "Runs Jekyll with auto-regeneration and server"
  task :server do
    jekyll "--auto", "--server"
  end

  def jekyll(*args)
    # store original ARGV and put new args for Jekyll executable
    command_argv = ARGV
    ARGV.clear.push(OUTPUT_PATH).concat(args)

    # Load additional stuff into Jekyll
    require './_lib/extra_filters'

    # Run Jekyll
    require 'rubygems'
    gem 'jekyll'
    load Gem.bin_path('jekyll', 'jekyll')

    # restore original ARGV (just in case)
    ARGV.clear.concat command_argv
  end
end


desc "Minifies everything"
task :minify => ['minify:html', 'minify:js']

namespace "minify" do

  desc "Minifies HTML files in output directory"
  task :html do
    HTML.each do |file|
     sh "sed -e 's/^\s*//g' -e 's/\s*$//g' -e '/^$/d' < #{file} > .tmp"
     sh "cp .tmp #{file}"
     sh "rm .tmp"
    end
  end

  desc "Minifies JavaScript files using Google Closure Compiler"
  task :js do
    JS.each do |file|
     sh "java -jar _lib/compiler.jar --js  #{file} > .tmp"
     sh "cp .tmp #{file}"
     sh "rm .tmp"
    end
  end

end



