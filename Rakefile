#verbose false

OUTPUT_PATH = './_site'

CLEAN = FileList[OUTPUT_PATH]
HTML = FileList[File.join(OUTPUT_PATH, '/**/*.html')]
JS = FileList[File.join(OUTPUT_PATH, '/**/*.js')]
CSS = FileList[File.join(OUTPUT_PATH, '/**/*.css')]

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


namespace "drafts" do

  DRAFT_SUFIX = '_draft'

  desc "Copies drafts into posts directory"
  task :include do
    FileList["_drafts/*.*"].each do |f|
      sh "cp #{f} _posts/#{draft_name f}"
    end
  end

  desc "Removes drafts from posts directory"
  task :exclude do
    FileList["_posts/*#{DRAFT_SUFIX}.*"].each do |f|
      sh "rm #{f}"
    end
  end

  def draft_name(path)
    ext = File.extname path
    File.basename(path, ext) + DRAFT_SUFIX + ext
  end

end


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
task :minify => ['minify:html', 'minify:js', 'minify:css']

namespace "minify" do

  desc "Minifies HTML files in output directory"
  task :html do
    HTML.each do |file|
     run_on_file "sed -e 's/^\s*//g' -e 's/\s*$//g' -e '/^$/d'", file
    end
  end

  desc "Minifies JavaScript files using Google Closure Compiler"
  task :js do
    JS.each do |file|
     run_on_file 'java -jar _lib/compiler.jar --js', file
    end
  end

  desc "Minifies CSS files using YUI Compressor"
  task :css do
    CSS.each do |file|
     run_on_file 'java -jar _lib/yuicompressor-2.4.2.jar', file
    end
  end

  def run_on_file(command, file)
     sh "#{command} #{file} > .tmp"
     sh "cp .tmp #{file}"
     sh "rm .tmp"
  end

end



