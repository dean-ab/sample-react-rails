class ApplicationController < ActionController::Base

  def index
    @application_props = { greeting: "HELLO" }
  end

end
