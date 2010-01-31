module Jekyll

  module Filters

    def markdown(input)
      Maruku.new(input).to_html
    end

    def pretty_date_string(date)
      date.day.to_s + if (10...20) === date.day then 'th'
      else case date.day % 10
          when 1 then 'st'
          when 2 then 'nd'
          when 3 then 'rd'
          else 'th'
        end
      end + date.strftime(" %B %Y")
    end

  end
end
